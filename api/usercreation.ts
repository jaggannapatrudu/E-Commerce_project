
import { request } from '@playwright/test'
import RandomDataGenerator from '../utils/RandomDataGenerator'
export default class UserCreation {

    async userCreationApi(): Promise<{}> {

        try {
            let requestContext = await request.newContext()
            let ranData: any = await RandomDataGenerator.UserData()
            let data = {
                name: ranData.name,
                email: ranData.email,
                password: ranData.password,
                title: ranData.titles,
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
            let responce = await requestContext.post('https://automationexercise.com/api/createAccount', { form: data })
            let jsonBody = await responce.json()
            return { ranData }
        }

        catch(error)
        {
            return "data not created"
        }

    }

}