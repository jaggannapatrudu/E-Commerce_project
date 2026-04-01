import { Page } from '@playwright/test'
import BasePage from './BasePage'
import RandomDataGenerator from '../utils/RandomDataGenerator'
export default class SignupLoginPage extends BasePage {
    readonly page: Page
    readonly lnkSignupLogin: string
    readonly txtsignupName: string
    readonly txtsignupEmail: string
    readonly txtLoginEmail: string
    readonly txtloginPassword: string
    readonly btnSignup: string
    readonly btnlogin: string
    readonly eleTitle: string
    readonly txtPassword: string
    readonly seldobDay: string
    readonly seledobMonth: string
    readonly seledobYear: string
    readonly checksignup: string
    readonly checkreciveSpe: string
    readonly txtAddressFirstname: string
    readonly txtAddressLastName: string
    readonly txtAddressCompany: string
    readonly txtAddress: string
    readonly txtAddress2: string
    readonly seleCountry: string
    readonly txtAddressState: string
    readonly txtAddressCity: string
    readonly txtAddressZipCode: string
    readonly txtAddressMobilenumber: string
    readonly btnCreateAccount: string
    readonly btnLogout: string
    constructor(page: Page) {
        super(page)
        this.page = page
        this.lnkSignupLogin = ".nav.navbar-nav>li:nth-child(4)"
        this.txtsignupName = "[name='name']"
        this.txtsignupEmail = "[data-qa='signup-email']"
        this.txtLoginEmail = "[data-qa='login-email']"
        this.txtloginPassword = "[name='password']"
        this.btnSignup = "[data-qa='signup-button']"
        this.btnlogin = "[data-qa='login-button']"
        this.eleTitle = ".clearfix>div"
        this.txtPassword = "#password"
        this.seldobDay = "#days"
        this.seledobMonth = "#months"
        this.seledobYear = "#years"
        this.checksignup = "#newsletter"
        this.checkreciveSpe = "#optin"
        this.txtAddressFirstname = "#first_name"
        this.txtAddressLastName = "#last_name"
        this.txtAddressCompany = "#company"
        this.txtAddress = "#address1"
        this.txtAddress2 = "#address2"
        this.seleCountry = "#country"
        this.txtAddressState = "#state"
        this.txtAddressCity = "#city"
        this.txtAddressZipCode = "#zipcode"
        this.txtAddressMobilenumber = "#mobile_number"
        this.btnCreateAccount = "[data-qa='create-account']"
        this.btnLogout = ".nav.navbar-nav>li:nth-child(4)"
    }

    async UserSignUP(): Promise<{}> {
        try {
            let user: any = await RandomDataGenerator.UserData()
            let email = user.email
            let password = user.password
            await this.navigateTo()
            await this.waitforDomContent()
            await this.clickelement(this.lnkSignupLogin)
            await this.setText(this.txtsignupName, user.name)
            await this.setText(this.txtsignupEmail, user.email)
            await this.clickelement(this.btnSignup)
            await this.page.locator(this.eleTitle).filter({ hasText: 'Mrs.' }).click()
            await this.setText(this.txtPassword, user.password)
            await this.selectValue(this.seldobDay, user.day)
            await this.selectValue(this.seledobMonth, user.month)
            await this.selectValue(this.seledobYear, user.year)
            await this.checkElement(this.checksignup)
            await this.checkElement(this.checkreciveSpe)
            await this.setText(this.txtAddressFirstname, user.fname)
            await this.setText(this.txtAddressLastName, user.lName)
            await this.setText(this.txtAddressCompany, user.company)
            await this.setText(this.txtAddress, user.address)
            await this.setText(this.txtAddress2, user.address)
            await this.selectValue(this.seleCountry, user.country)
            await this.setText(this.txtAddressState, user.state)
            await this.setText(this.txtAddressCity, user.city)
            await this.setText(this.txtAddressZipCode, user.zipcode)
            await this.setText(this.txtAddressMobilenumber, user.mobileNumber)
            await this.clickelement(this.btnCreateAccount)
            return { email, password, user }
        }
        catch(error)
        {
            throw new Error('User Regsitration un-successful')
        }
         
    }

    async AppLogin(username: string, password: string) {
        await this.navigateTo('/login')
        await this.waitforDomContent()
        await this.setText(this.txtLoginEmail, username)
        await this.setText(this.txtloginPassword, password)
        await this.clickelement(this.btnlogin)
        await this.waitforDomContent()
    }


}