import {Page, Locator, Selectors, expect} from '@playwright/test'

export default class BasePage
{
        readonly page:Page
        constructor(page:Page)
        {
            this.page=page
        }
        
        async navigateTo(url?:string):Promise<void>
        {
            if(url)
            {
                await this.page.goto(url)
            }
            else
            {
                await this.page.goto('/')
            }
            
        }

        async clickelement(selector:string):Promise<void>
        {
            await this.page.locator(selector).click()
        }
        async getText(selector:string):Promise<string>
        {
            return await this.page.locator(selector).innerText()
        }
        async selectValue(selector:string, value:string)
        {
            await this.page.locator(selector).selectOption(value)
        }
        async checkElement(selector:string)
        {
            await this.page.locator(selector).check()
        }
        async waitforDomContent()
        {
            await this.page.waitForLoadState('domcontentloaded')
        }
        async waitforLoad()
        {
            await this.page.waitForLoadState('load')
        }
        async waitforNetworkIdle()
        {
            await this.page.waitForLoadState('networkidle')
        }
        async setText(selector:string, value:string)
        {
            await this.page.locator(selector).fill(value)
        }
        async elementVisible(selector:string)
        {
            await expect(this.page.locator(selector)).toBeVisible()
        }
        
}