import {test} from '../../fixtures/CustomFixutures'


test('Place order for Women sarees', async({page, paymentPage, basePage,cartPage, signupLoginPage, accountcreationPage, homePage, productPage, dataReadAndWrite})=>{

    let data = dataReadAndWrite.readDataFromJson('testdata/category/womensarees.json')
    let loginData:any = await signupLoginPage.UserSignUP()
    await accountcreationPage.AccountCreated()
    await homePage.appLogout()
    await signupLoginPage.AppLogin(loginData.email, loginData.password)
    await homePage.selectCategoryType('Women','Saree')
    let price:any = await productPage.addToCart(data)
    for(let prodName of data)
    {
        await cartPage.verifyProductAvailablity(prodName,price.get(prodName))
    }
    
    await basePage.clickelement(cartPage.btnProceedCheckout)
    for(let prodName of data)
    {
        await cartPage.verifyProductAvailablityCheckOutPage(prodName,price.get(prodName))
    }
    await cartPage.verifyTotalAmountReviewOrderTable()
    await cartPage.placeOrder()
    await paymentPage.ConfirmOrder()
})


test('Place order for Men Jeans', async({page, paymentPage, basePage,cartPage, signupLoginPage, accountcreationPage, homePage, productPage, dataReadAndWrite})=>{

    let data = dataReadAndWrite.readDataFromJson('testdata/category/menjeans.json')
    let loginData:any = await signupLoginPage.UserSignUP()
    await accountcreationPage.AccountCreated()
    await homePage.appLogout()
    await signupLoginPage.AppLogin(loginData.email, loginData.password)
    await homePage.selectCategoryType('Men','Jeans')
    let price:any = await productPage.addToCart(data)
    for(let prodName of data)
    {
        await cartPage.verifyProductAvailablity(prodName,price.get(prodName))
    }
    
    await basePage.clickelement(cartPage.btnProceedCheckout)
    for(let prodName of data)
    {
        await cartPage.verifyProductAvailablityCheckOutPage(prodName,price.get(prodName))
    }
    await cartPage.verifyTotalAmountReviewOrderTable()
    await cartPage.placeOrder()
    await paymentPage.ConfirmOrder()
})

test('Place order for Kids Tops and Tshirts', async({page, paymentPage, basePage,cartPage, signupLoginPage, accountcreationPage, homePage, productPage, dataReadAndWrite})=>{

    let data = dataReadAndWrite.readDataFromJson('testdata/category/kidstopsandshirts.json')
    let loginData:any = await signupLoginPage.UserSignUP()
    await accountcreationPage.AccountCreated()
    await homePage.appLogout()
    await signupLoginPage.AppLogin(loginData.email, loginData.password)
    await homePage.selectCategoryType('Kids','Tops & Shirts ')
    let price:any = await productPage.addToCart(data)
    for(let prodName of data)
    {
        await cartPage.verifyProductAvailablity(prodName,price.get(prodName))
    }
    
    await basePage.clickelement(cartPage.btnProceedCheckout)
    for(let prodName of data)
    {
        await cartPage.verifyProductAvailablityCheckOutPage(prodName,price.get(prodName))
    }
    await cartPage.verifyTotalAmountReviewOrderTable()
    await cartPage.placeOrder()
    await paymentPage.ConfirmOrder()
})


test('Place order for POLO Brand', async({page, paymentPage, basePage,cartPage, signupLoginPage, accountcreationPage, homePage, productPage, dataReadAndWrite})=>{

    let data = dataReadAndWrite.readDataFromJson('testdata/brand/polo.json')
    let loginData:any = await signupLoginPage.UserSignUP()
    await accountcreationPage.AccountCreated()
    await homePage.appLogout()
    await signupLoginPage.AppLogin(loginData.email, loginData.password)
    await homePage.selectBrands('Polo')
    let price:any = await productPage.addToCart(data)
    for(let prodName of data)
    {
        await cartPage.verifyProductAvailablity(prodName,price.get(prodName))
    }
    
    await basePage.clickelement(cartPage.btnProceedCheckout)
    for(let prodName of data)
    {
        await cartPage.verifyProductAvailablityCheckOutPage(prodName,price.get(prodName))
    }
    await cartPage.verifyTotalAmountReviewOrderTable()
    await cartPage.placeOrder()
    await paymentPage.ConfirmOrder()
})

test('Place order for Mast and Harbour Brand', async({page, paymentPage, basePage,cartPage, signupLoginPage, accountcreationPage, homePage, productPage, dataReadAndWrite})=>{

    let data = dataReadAndWrite.readDataFromJson('testdata/brand/mastandharbour.json')
    let loginData:any = await signupLoginPage.UserSignUP()
    await accountcreationPage.AccountCreated()
    await homePage.appLogout()
    await signupLoginPage.AppLogin(loginData.email, loginData.password)
    await homePage.selectBrands('Mast & Harbour')
    let price:any = await productPage.addToCart(data)
    for(let prodName of data)
    {
        await cartPage.verifyProductAvailablity(prodName,price.get(prodName))
    }
    
    await basePage.clickelement(cartPage.btnProceedCheckout)
    for(let prodName of data)
    {
        await cartPage.verifyProductAvailablityCheckOutPage(prodName,price.get(prodName))
    }
    await cartPage.verifyTotalAmountReviewOrderTable()
    await cartPage.placeOrder()
    await paymentPage.ConfirmOrder()
})

test('Place order for Madame Brand', async({page, paymentPage, basePage,cartPage, signupLoginPage, accountcreationPage, homePage, productPage, dataReadAndWrite})=>{

    let data = dataReadAndWrite.readDataFromJson('testdata/brand/madame.json')
    let loginData:any = await signupLoginPage.UserSignUP()
    await accountcreationPage.AccountCreated()
    await homePage.appLogout()
    await signupLoginPage.AppLogin(loginData.email, loginData.password)
    await homePage.selectBrands('Madame')
    let price:any = await productPage.addToCart(data)
    for(let prodName of data)
    {
        await cartPage.verifyProductAvailablity(prodName,price.get(prodName))
    }
    
    await basePage.clickelement(cartPage.btnProceedCheckout)
    for(let prodName of data)
    {
        await cartPage.verifyProductAvailablityCheckOutPage(prodName,price.get(prodName))
    }
    await cartPage.verifyTotalAmountReviewOrderTable()
    await cartPage.placeOrder()
    await paymentPage.ConfirmOrder()
})

test('Place order for Kookie Kids Brand', async({page, paymentPage, basePage,cartPage, signupLoginPage, accountcreationPage, homePage, productPage, dataReadAndWrite})=>{

    let data = dataReadAndWrite.readDataFromJson('testdata/brand/kookiekids.json')
    let loginData:any = await signupLoginPage.UserSignUP()
    await accountcreationPage.AccountCreated()
    await homePage.appLogout()
    await signupLoginPage.AppLogin(loginData.email, loginData.password)
    await homePage.selectBrands('Kookie Kids')
    let price:any = await productPage.addToCart(data)
    for(let prodName of data)
    {
        await cartPage.verifyProductAvailablity(prodName,price.get(prodName))
    }
    
    await basePage.clickelement(cartPage.btnProceedCheckout)
    for(let prodName of data)
    {
        await cartPage.verifyProductAvailablityCheckOutPage(prodName,price.get(prodName))
    }
    await cartPage.verifyTotalAmountReviewOrderTable()
    await cartPage.placeOrder()
    await paymentPage.ConfirmOrder()
})

test('Place order for H&M Brand', async({page, paymentPage, basePage,cartPage, signupLoginPage, accountcreationPage, homePage, productPage, dataReadAndWrite})=>{

    let data = dataReadAndWrite.readDataFromJson('testdata/brand/h&m.json')
    let loginData:any = await signupLoginPage.UserSignUP()
    await accountcreationPage.AccountCreated()
    await homePage.appLogout()
    await signupLoginPage.AppLogin(loginData.email, loginData.password)
    await homePage.selectBrands('H&M')
    let price:any = await productPage.addToCart(data)
    for(let prodName of data)
    {
        await cartPage.verifyProductAvailablity(prodName,price.get(prodName))
    }
    
    await basePage.clickelement(cartPage.btnProceedCheckout)
    for(let prodName of data)
    {
        await cartPage.verifyProductAvailablityCheckOutPage(prodName,price.get(prodName))
    }
    await cartPage.verifyTotalAmountReviewOrderTable()
    await cartPage.placeOrder()
    await paymentPage.ConfirmOrder()
})

test('Place order for Biba Brand', async({page, paymentPage, basePage,cartPage, signupLoginPage, accountcreationPage, homePage, productPage, dataReadAndWrite})=>{

    let data = dataReadAndWrite.readDataFromJson('testdata/brand/biba.json')
    let loginData:any = await signupLoginPage.UserSignUP()
    await accountcreationPage.AccountCreated()
    await homePage.appLogout()
    await signupLoginPage.AppLogin(loginData.email, loginData.password)
    await homePage.selectBrands('Biba')
    let price:any = await productPage.addToCart(data)
    for(let prodName of data)
    {
        await cartPage.verifyProductAvailablity(prodName,price.get(prodName))
    }
    
    await basePage.clickelement(cartPage.btnProceedCheckout)
    for(let prodName of data)
    {
        await cartPage.verifyProductAvailablityCheckOutPage(prodName,price.get(prodName))
    }
    await cartPage.verifyTotalAmountReviewOrderTable()
    await cartPage.placeOrder()
    await paymentPage.ConfirmOrder()
})


test('Place order for Baby Hug Brand', async({page, paymentPage, basePage,cartPage, signupLoginPage, accountcreationPage, homePage, productPage, dataReadAndWrite})=>{

    let data = dataReadAndWrite.readDataFromJson('testdata/brand/babyhug.json')
    let loginData:any = await signupLoginPage.UserSignUP()
    await accountcreationPage.AccountCreated()
    await homePage.appLogout()
    await signupLoginPage.AppLogin(loginData.email, loginData.password)
    await homePage.selectBrands('Babyhug')
    let price:any = await productPage.addToCart(data)
    for(let prodName of data)
    {
        await cartPage.verifyProductAvailablity(prodName,price.get(prodName))
    }
    
    await basePage.clickelement(cartPage.btnProceedCheckout)
    for(let prodName of data)
    {
        await cartPage.verifyProductAvailablityCheckOutPage(prodName,price.get(prodName))
    }
    await cartPage.verifyTotalAmountReviewOrderTable()
    await cartPage.placeOrder()
    await paymentPage.ConfirmOrder()
})

test('Place order for Allen Solly Brand', async({page, paymentPage, basePage,cartPage, signupLoginPage, accountcreationPage, homePage, productPage, dataReadAndWrite})=>{

    let data = dataReadAndWrite.readDataFromJson('testdata/brand/allensolly.json')
    let loginData:any = await signupLoginPage.UserSignUP()
    await accountcreationPage.AccountCreated()
    await homePage.appLogout()
    await signupLoginPage.AppLogin(loginData.email, loginData.password)
    await homePage.selectBrands('Allen Solly Junior')
    let price:any = await productPage.addToCart(data)
    for(let prodName of data)
    {
        await cartPage.verifyProductAvailablity(prodName,price.get(prodName))
    }
    
    await basePage.clickelement(cartPage.btnProceedCheckout)
    for(let prodName of data)
    {
        await cartPage.verifyProductAvailablityCheckOutPage(prodName,price.get(prodName))
    }
    await cartPage.verifyTotalAmountReviewOrderTable()
    await cartPage.placeOrder()
    await paymentPage.ConfirmOrder()
})

