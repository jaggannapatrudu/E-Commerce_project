import { expect, Locator, Page } from '@playwright/test'
import BasePage from './BasePage'

export default class HomePage extends BasePage {
    readonly page: Page
    readonly btnLogout:string
    readonly elecategory:string
    readonly eleType:string
    readonly lnkBrandType:string
    readonly lnkLoggedinUser:string
    readonly lnkdeleteAccount:string
    readonly eleAccountDeletedMsg:string
    readonly btnContinue:string
    constructor(page: Page) {
        super(page)
        this.page = page
        this.btnLogout = ".nav.navbar-nav>li:nth-child(4)"
        this.elecategory = "[data-toggle='collapse']"
        this.eleType = ".panel-body>ul>li>a"
        this.lnkBrandType = ".brands-name>ul>li>a"
        this.lnkLoggedinUser = ".nav.navbar-nav>li:nth-child(10)"
        this.lnkdeleteAccount = ".nav.navbar-nav>li:nth-child(5)"
        this.eleAccountDeletedMsg = "[data-qa='account-deleted']+p"
        this.btnContinue = "[data-qa='continue-button']"
    }

    async appLogout()
    {
        await this.clickelement(this.btnLogout)
        await this.waitforDomContent()
    }
    async selectCategoryType(category:string, type:string)
    {
          //  let cat = this.page.locator(this.elecategory).filter({ hasText: new RegExp(`^\\s*${category}\\s*$`) })
             let cat = this.page.locator(this.elecategory).getByText(category,{exact:true})
            await cat.click()
            await this.page.locator(this.eleType).filter({hasText:type}).click()
            
    }
    async selectBrands(category:string)
    {
        let cat = this.page.locator(this.lnkBrandType).getByText(category)
            await cat.click()
    }
    async LoggedinuseAndDeleteUserrverification(fullnamename:string)
    {
        let username =  (await this.getText(this.lnkLoggedinUser)).trim()
        let expectText = "Logged in as "+fullnamename
        expect(username).toContain(expectText)
        await this.clickelement(this.lnkdeleteAccount)
        await expect(this.page.locator(this.eleAccountDeletedMsg)).toHaveText('Your account has been permanently deleted!')
        await this.clickelement(this.btnContinue)
        await expect(this.page.locator(this.lnkBrandType).last()).toBeAttached()
    }
}