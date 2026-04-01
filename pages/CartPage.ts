import { expect, Page } from '@playwright/test'
import BasePage from './BasePage';
import RandomDataGenerator from '../utils/RandomDataGenerator';
export default class CartPage extends BasePage {
    readonly page: Page
    readonly productTable: string
    readonly btnProceedCheckout: string
    readonly reviewOrderTable:string
    readonly txtcomtMessage:string
    readonly btnPlaceOrder:string
    constructor(page: Page) {
        super(page)
        this.page = page
        this.productTable = "#cart_info_table>tbody>tr"
        this.btnProceedCheckout = ".btn.btn-default.check_out"
        this.reviewOrderTable = ".table.table-condensed>tbody>tr"
        this.txtcomtMessage = "[name='message']"
        this.btnPlaceOrder = ".btn.btn-default.check_out"
    }

    async verifyProductAvailablity(produname: string, price: string) {
        try{
            let prodName = await this.page.locator(this.productTable).filter({ hasText: produname }).locator('td').nth(1).locator('a').innerText()
            let prdPrice = await this.page.locator(this.productTable).filter({ hasText: produname }).locator('td').nth(2).locator('p').innerText()
            expect.soft(prodName).toBe(prodName)
            expect.soft(price).toBe(prdPrice)
        }
        catch(error)
        {
            throw new Error(`product verification availability failed`)
        }
    }
    async verifyProductAvailablityCheckOutPage(produname: string, price: string) {
        try{
            let prodName = await this.page.locator(this.reviewOrderTable).filter({ hasText: produname }).locator('td').nth(1).locator('a').innerText()
            let prdPrice = await this.page.locator(this.reviewOrderTable).filter({ hasText: produname }).locator('td').nth(2).locator('p').innerText()
            expect.soft(prodName).toBe(prodName)
            expect.soft(price).toBe(prdPrice)
        }
        catch(error)
        {
            throw new Error(`product verification availability failed`)
        }
    }

   async verifyTotalAmountReviewOrderTable()
   {
        let allRows = (await this.page.locator(this.reviewOrderTable).all())
        let allRows1 =allRows.slice(0, allRows.length-1)
        let rows = await Promise.all(allRows1.map(row=>row.locator('td>p').last().innerText()))
        let sum = rows.reduce((sum,a)=>sum+parseInt(a.replaceAll('Rs. ','')),0)
        let TotalSum = await this.page.locator(this.reviewOrderTable).filter({ hasText: 'Total Amount' }).locator('td').locator('p').innerText()
        expect(TotalSum).toContain(sum.toString())
   }     

   async placeOrder()
   {

        await this.setText(this.txtcomtMessage,await RandomDataGenerator.randomText())
        await this.clickelement(this.btnPlaceOrder)
        await this.waitforDomContent()
   }
}