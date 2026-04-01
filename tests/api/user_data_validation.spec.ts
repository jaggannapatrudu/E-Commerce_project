import { test } from '../../fixtures/CustomFixutures'
import { expect } from '@playwright/test'
import RandomDataGenerator from '../../utils/RandomDataGenerator'
test('User data validation through API', async ({ request, signupLoginPage, accountcreationPage, homePage }) => {

        let loginData: any = await signupLoginPage.UserSignUP()
        await accountcreationPage.AccountCreated()
        await homePage.appLogout()
        let responce = await request.get('https://automationexercise.com/api/getUserDetailByEmail', { params: { email: loginData.email } })
        let json = await responce.json()
        expect(responce.ok).toBeTruthy()
        expect(responce.status()).toBe(200)
        expect(loginData.user.email).toBe(json.user.email)
        expect(loginData.user.country).toBe(json.user.country)
})

test('To get all the products list', async ({ request }) => {

        let responce = await request.get("https://automationexercise.com/api/productsList")
        let jsonbody = await responce.json()
        let allProdcuts = await jsonbody.products.some((a: { name: string | string[] }) => a.name.includes('Lace Top For Women'))
        expect(responce.ok()).toBeTruthy()
        expect(responce.status()).toBe(200)
        expect(jsonbody.products[0]).toHaveProperty('id')
        expect(jsonbody.products[0]).toHaveProperty('price')
        expect(jsonbody.products[0]).toHaveProperty('name')
        expect(jsonbody.products[0]).toHaveProperty('brand')

})

test('To Search PrOduct', async ({ request }) => {

        let responce = await request.post('https://automationexercise.com/api/searchProduct', {
                form: {
                        search_product: 'top'
                }
        })
})


test('Verify Login with valid details', async ({ request, signupLoginPage, accountcreationPage, homePage }) => {

        let loginData: any = await signupLoginPage.UserSignUP()
        await accountcreationPage.AccountCreated()
        await homePage.appLogout()
        let responce = await request.post('https://automationexercise.com/api/verifyLogin', { form: { email: loginData.email, password: loginData.password } })
        let jsonBody = await responce.json()
        expect(responce.ok).toBeTruthy()
        expect(responce.status()).toBe(200)
        expect(jsonBody.message).toBe('User exists!')
})

test('Verify Login with invalid details', async ({ request }) => {


        let responce = await request.post('https://automationexercise.com/api/verifyLogin', { form: { email: 'invaldasddsaid@gmail.com', password: 'sdasdsa' } })
        let jsonBody = await responce.json()
        expect(jsonBody.responseCode).toBe(404)
        expect(jsonBody.message).toBe('User not found!')
})

test('Create/Register User Account', async ({ page, request, signupLoginPage }) => {

        let ranData: any = await RandomDataGenerator.UserData()
        let data = {
                name: ranData.name,
                email: ranData.email,
                password: ranData.password,
                title: 'Mr',
                birth_date: ranData.day,
                birth_month: ranData.month,
                birth_year: ranData.year,
                firstname: ranData.fname,
                lastname: ranData.lName,
                company: ranData.company,
                address1: ranData.address,
                address2: ranData.address,
                country: ranData.country,
                zipcode: ranData.zipcode,
                state: ranData.state,
                city: ranData.city,
                mobile_number: ranData.mobileNumber
        }
        let responce = await request.post('https://automationexercise.com/api/createAccount', { form: data })
        let jsonBody = await responce.json()
        expect(jsonBody.responseCode).toBe(201)
        expect(jsonBody.message).toBe('User created!')
        await signupLoginPage.AppLogin(ranData.email, ranData.password)
        await page.waitForTimeout(3000)
})