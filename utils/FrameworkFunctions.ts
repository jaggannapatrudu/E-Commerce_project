import {test, Page} from '@playwright/test'


export default class FrameworkFunctions
{


    static async ScreenshotCapture(page:Page, stepdescription:string)
    {
            let screenshot = await page.screenshot({path:'playwright-report/enterprise-report/screenshots', fullPage:true})
            await test.info().attach(stepdescription,{
                body:screenshot, contentType:'image/png'
            })
    }

}