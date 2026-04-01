import {expect, Page} from '@playwright/test'
import BasePage from './BasePage';
import RandomDataGenerator from '../utils/RandomDataGenerator'
export default class ContactUsPage extends BasePage
{
        readonly page:Page
        readonly lnkContctUs:string
        readonly eleGetInTouch:string
        readonly txtName:string
        readonly txtEmail:string
        readonly txtSubject:string
        readonly txtMsgHere:string
        readonly btnChooseFile:string
        readonly btnSubmit:string
        readonly txtSuccess:string //
        readonly btnHome:string
        constructor(page:Page)
        {
            super(page)
            this.page=page
            this.lnkContctUs = ".nav.navbar-nav>li:nth-child(8)"
            this.eleGetInTouch = ".title.text-center"
            this.txtName = "[name='name']"
            this.txtEmail = "[name='email']"
            this.txtSubject  = "[name='subject']"
            this.txtMsgHere = "[name='message']"
            this.btnChooseFile = "[name='upload_file']"
            this.btnSubmit = "[name='submit']"
            this.txtSuccess = ".status.alert.alert-success"
            this.btnHome = ".btn.btn-success"
        }

        async ContectUsValidations()
        {
            let data:any = await RandomDataGenerator.UserData()
            await this.page.goto('/')
            await this.clickelement(this.lnkContctUs)
            let getInTouch =  await this.page.locator(this.eleGetInTouch).nth(1).innerText()
            expect.soft(getInTouch).toBe("GET IN TOUCH")
            await this.setText(this.txtName, data.name)
            await this.setText(this.txtEmail, data.email)
            await this.setText(this.txtSubject, data.address)
            await this.setText(this.txtMsgHere, data.company)
            await this.page.locator(this.btnChooseFile).setInputFiles('testdata/webtable.xlsx')
            this.page.on('dialog', (dialog)=>{
                dialog.accept()
            })
            await this.page.waitForTimeout(2000)
            await this.clickelement(this.btnSubmit)
            await this.waitforDomContent()
            await expect(this.page.locator(this.txtSuccess)).toHaveText("Success! Your details have been submitted successfully.",{timeout:10000})
            await this.clickelement(this.btnHome)
        }


}