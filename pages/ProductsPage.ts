import { expect, Locator, Page } from '@playwright/test'
import BasePage from './BasePage'

export default class ProductsPage extends BasePage {

    readonly page: Page
    readonly lstProducts: string
    readonly prdAddMsg: string
    readonly btnContinueShopping: string
    readonly lnkCart:string
    readonly viewproduct:string
    readonly btnViewProduct:string
    readonly btnAddToCart:string
    constructor(page: Page) {
        super(page)
        this.page = page
        this.lstProducts = ".productinfo.text-center"
        this.prdAddMsg = ".modal-body"
        this.btnContinueShopping = ".modal-footer"
        this.lnkCart = ".nav.navbar-nav>li:nth-child(3)"
        this.viewproduct = ".single-products"
        this.btnViewProduct = ".choose"
        this.btnAddToCart = ".btn-default.cart"
    }
    async addToCart(producName: string[]): Promise<{}> {
        await expect(this.page.locator(this.lstProducts).last()).toBeAttached()
        let priceList = new Map<string, string>()
        for (let productname of producName) {
            let product = this.page.locator(this.lstProducts).filter({ hasText: productname })
            await product.locator('a').click()
            let Price = await product.locator('h2').innerText()
            priceList.set(productname, Price)
            let succesText = await this.page.locator(this.prdAddMsg).locator('p').first().innerText()
            expect(succesText).toBe("Your product has been added to cart.")
            await this.clickelement(this.btnContinueShopping)
        }
        await this.clickelement(this.lnkCart)
        await this.waitforDomContent()
        return priceList
    }
    async viewProdcutDetailsAddToCart(producName: string)
    {
        await expect(this.page.locator(this.viewproduct).last()).toBeAttached()
        let product = this.page.locator(this.viewproduct).filter({ hasText: producName })
        await product.locator("+div").click()
        await this.clickelement(this.btnAddToCart)
        await this.clickelement(this.btnContinueShopping)
        await this.clickelement(this.lnkCart)
        await this.waitforDomContent()
    }       
}