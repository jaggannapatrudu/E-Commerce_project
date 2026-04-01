import {expect, Page} from '@playwright/test'
import RandomDataGenerator from '../utils/RandomDataGenerator'
import BasePage from './BasePage'
export default class PaymentPage extends BasePage
{
        readonly page:Page
        readonly txtNameOnCard:string
        readonly txtCardNumber:string
        readonly txtCVV:string
        readonly txtExpiration:string
        readonly txtYear:string
        readonly btnConfirmOrder:string
        readonly eleOrderSuccessmsg:string
        readonly btncontinue:string
        constructor(page:Page)
        {
            super(page)
            this.page=page
            this.txtNameOnCard = "[name='name_on_card']"
            this.txtCardNumber = "[name='card_number']"
            this.txtCVV = "[name='cvc']"
            this.txtExpiration = "[name='expiry_month']"
            this.txtYear = "[name='expiry_year']"
            this.btnConfirmOrder = "[id='submit']"
            this.eleOrderSuccessmsg = "[data-qa='order-placed']+p"
            this.btncontinue = "[data-qa='continue-button']"
        }

        async ConfirmOrder()
        {
            let cardInfo:any = await RandomDataGenerator.CardInformation()
            //await  this.page.waitForResponse('https://automationexercise.com/payment')
            await this.setText(this.txtNameOnCard,cardInfo.nameoncard)
            await this.setText(this.txtCardNumber,cardInfo.cardnumber)
            await this.setText(this.txtCVV,cardInfo.cvv)
            await this.setText(this.txtExpiration,cardInfo.cardexpiration)
            await this.setText(this.txtYear,cardInfo.cardexpyear)
            await this.clickelement(this.btnConfirmOrder)
            await expect(this.page.locator(this.eleOrderSuccessmsg)).toHaveText('Congratulations! Your order has been confirmed!')
            await this.clickelement(this.btncontinue)
            await this.waitforDomContent()
        }


}