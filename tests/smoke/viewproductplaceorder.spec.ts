
import { test } from '../../fixtures/CustomFixutures'
import { expect } from '@playwright/test'
import RandomDataGenerator from '../../utils/RandomDataGenerator'

test('Place order for By View product details page', async({page, paymentPage, basePage,cartPage, signupLoginPage, userCreation, homePage, productPage, dataReadAndWrite})=>{
    let data = ['Cotton Silk Hand Block Print Saree']
     let userData:any = await userCreation.userCreationApi()
    await signupLoginPage.AppLogin(userData.ranData.email, userData.ranData.password)
    await homePage.selectCategoryType('Women','Saree')
    await productPage.viewProdcutDetailsAddToCart(data[0])
    await basePage.clickelement(cartPage.btnProceedCheckout)
    await cartPage.verifyTotalAmountReviewOrderTable()
    await cartPage.placeOrder()
    await paymentPage.ConfirmOrder()
    await page.waitForTimeout(3000)
})
 