import {Locator, Page} from '@playwright/test'
import BasePage from './BasePage'

export default class AccountCreationPage extends BasePage
{

        readonly page:Page
        readonly eleAccCreated:string
        readonly eleCongratulation:string
        readonly btnContinue:string
        constructor(page:Page)
        {
            super(page)
            this.page = page
            this.eleAccCreated = "[data-qa='account-created']>b"
            this.eleCongratulation = "[data-qa='account-created']+p"
            this.btnContinue = ".btn.btn-primary"
        }
        
        async AccountCreated()
        {
            await this.waitforDomContent()
            await this.elementVisible(this.eleCongratulation)
            await this.clickelement(this.btnContinue)
            await this.waitforDomContent() 
        }
}