import {
  Reporter,
  TestCase,
  TestResult,
  TestStep,
  FullConfig,
  Suite
} from '@playwright/test/reporter';

import fs from 'fs';
import path from 'path';

class EnterpriseHtmlReporter implements Reporter {

  private tests: any[] = [];
  private startTime!: number;
  private currentTest: any;
  private reportDir = path.join(process.cwd(), 'playwright-report', 'enterprise-report');
  private screenshotDir = path.join(this.reportDir, 'screenshots');

  onBegin(config: FullConfig, suite: Suite) {
    this.startTime = Date.now();
    fs.mkdirSync(this.screenshotDir, { recursive: true });
  }

  onTestBegin(test: TestCase) {
    this.currentTest = {
      title: test.title,
      suite: test.parent?.title,
      steps: [],
      status: '',
      duration: 0,
      error: '',
      retry: 0
    };
  }

  onStepEnd(test: TestCase, result: TestResult, step: TestStep) {

    if (step.category !== 'test.step') return;

    const stepData = {
      title: step.title,
      duration: step.duration,
      error: step.error?.message || '',
      status: step.error ? 'failed' : 'passed'
    };

    this.currentTest.steps.push(stepData);
  }

  async onTestEnd(test: TestCase, result: TestResult) {

    this.currentTest.status = result.status;
    this.currentTest.duration = result.duration;
    this.currentTest.retry = result.retry;
    this.currentTest.error = result.error?.stack || '';

    let screenshotPath = '';

    for (const attachment of result.attachments) {
      if (attachment.name === 'screenshot' && attachment.path) {
        const fileName = `${test.title.replace(/\s+/g, '_')}_${Date.now()}.png`;
        const destination = path.join(this.screenshotDir, fileName);
        fs.copyFileSync(attachment.path, destination);
        screenshotPath = `screenshots/${fileName}`;
      }
    }

    this.currentTest.screenshot = screenshotPath;

    this.tests.push(this.currentTest);
  }

  async onEnd() {
    const totalDuration = Date.now() - this.startTime;
    const html = this.generateHTML(totalDuration);
    fs.writeFileSync(path.join(this.reportDir, 'index.html'), html);
  }

  private generateHTML(totalDuration: number): string {

    const total = this.tests.length;
    const passed = this.tests.filter(t => t.status === 'passed').length;
    const failed = this.tests.filter(t => t.status === 'failed').length;

    const testRows = this.tests.map((t, index) => {

      const stepRows = t.steps.map((s: any, i: number) => `
        <tr class="${s.status}">
          <td>${i + 1}</td>
          <td>${s.title}</td>
          <td>${this.formatDuration(s.duration)}</td>
          <td>${s.status}</td>
          <td>${s.error ? `<pre>${s.error}</pre>` : ''}</td>
        </tr>
      `).join('');

      return `
      <div class="test-block ${t.status}">
        <h3 onclick="toggle('test-${index}')">
          ${index + 1}. ${t.title} 
          <span class="badge ${t.status}">${t.status}</span>
          (${this.formatDuration(t.duration)})
        </h3>

        <div id="test-${index}" class="test-details">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Step Description</th>
                <th>Duration</th>
                <th>Status</th>
                <th>Error</th>
              </tr>
            </thead>
            <tbody>
              ${stepRows}
            </tbody>
          </table>

          ${t.screenshot ? `<img src="${t.screenshot}" width="300"/>` : ''}

          ${t.error ? `<details><summary>Test Error</summary><pre>${t.error}</pre></details>` : ''}
        </div>
      </div>
      `;
    }).join('');

    return `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Enterprise Playwright Report</title>
<style>
body { font-family: Arial; background:#f4f6f9; padding:20px; }
.summary { display:flex; gap:20px; margin-bottom:20px; }
.card { padding:15px; background:white; border-radius:8px; box-shadow:0 2px 6px rgba(0,0,0,0.1); }
.test-block { margin-bottom:20px; background:white; padding:15px; border-radius:8px; }
.test-details { display:none; margin-top:10px; }
table { width:100%; border-collapse:collapse; margin-top:10px; }
th, td { padding:8px; border:1px solid #ddd; }
.badge { padding:4px 8px; border-radius:4px; color:white; font-size:12px; }
.passed { background:#28a745; }
.failed { background:#dc3545; }
</style>
</head>
<body>

<h1>Enterprise Playwright Execution Report</h1>

<div class="summary">
  <div class="card">Total: ${total}</div>
  <div class="card" style="color:green">Passed: ${passed}</div>
  <div class="card" style="color:red">Failed: ${failed}</div>
  <div class="card">Duration: ${this.formatDuration(totalDuration)}</div>
</div>

${testRows}

<script>
function toggle(id) {
  const element = document.getElementById(id);
  element.style.display = element.style.display === 'none' ? 'block' : 'none';
}
</script>

</body>
</html>
    `;
  }

  private formatDuration(ms: number): string {
    return (ms / 1000).toFixed(2) + ' s';
  }
}

export default EnterpriseHtmlReporter;
