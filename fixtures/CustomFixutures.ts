import {test as base} from '@playwright/test'
import BasePage from '../pages/BasePage'
import HomePage from '../pages/homePage'
import SignupLoginPage from '../pages/SignUPLoginPage'
import AccountCreationPage from '../pages/AccountCreationPage'
import ProductsPage from '../pages/ProductsPage'
import DataReadAndWrite from '../utils/DataReadAndWrite'
import CartPage from '../pages/CartPage'
import PaymentPage from '../pages/PaymentPage' 
import UserCreation from '../api/usercreation'
import ContactUsPage from '../pages/ContactUsPage'
type Myfixtures={

    basePage:BasePage,
    homePage:HomePage,
    signupLoginPage:SignupLoginPage,
    accountcreationPage:AccountCreationPage,
    productPage:ProductsPage
    dataReadAndWrite:DataReadAndWrite,
    cartPage:CartPage,
    paymentPage:PaymentPage,
    userCreation:UserCreation
    contactUsPage:ContactUsPage
}

export const test=base.extend<Myfixtures>({

    basePage: async({page}, use)=>{

        let basePage=new BasePage(page)
        await use(basePage)
    },
    homePage: async({page}, use)=>{

        let homePage=new HomePage(page)
        await use(homePage)
    },
    signupLoginPage: async({page}, use)=>{

        let signupLoginpage=new SignupLoginPage(page)
        await use(signupLoginpage)
    },
    accountcreationPage: async({page}, use)=>{

        let accountcreationPage=new AccountCreationPage(page)
        await use(accountcreationPage)
    },
    productPage: async({page}, use)=>{

        let productPage=new ProductsPage(page)
        await use(productPage)
    }
    ,
    dataReadAndWrite: async({page}, use)=>{

        let dataReadAndWrite=new DataReadAndWrite()
        await use(dataReadAndWrite)
    }
    ,
    cartPage: async({page}, use)=>{

        let cartPage=new CartPage(page)
        await use(cartPage)
    },
    paymentPage: async({page}, use)=>{

        let paymentPage=new PaymentPage(page)
        await use(paymentPage)
    }
    ,
    userCreation: async({page}, use)=>{

        let userCreation=new UserCreation()
        await use(userCreation)
    }
    ,
    contactUsPage: async({page}, use)=>{

        let contactUsPage=new ContactUsPage(page)
        await use(contactUsPage)
    }


})