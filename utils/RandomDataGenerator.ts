import { faker } from '@faker-js/faker'

export default class RandomDataGenerator {

    static async UserData(): Promise<{}> {
        let name = faker.person.fullName()
        let email = faker.internet.email()
        let password = faker.internet.password()
        let day = faker.number.int({ min: 1, max: 30 }).toString()
        let month = faker.date.month()
        let year = faker.number.int({ min: 1900, max: 2000 }).toString()
        let title = ['Mr.', 'Mrs.']
        let titles = title[Math.floor(Math.random()*title.length)]
        let fname = faker.person.firstName()
        let lName = faker.person.lastName()
        let company = faker.company.name()
        let address = faker.location.streetAddress()
        let countryvalues: string[] = ['India', 'United States', 'Canada', 'Australia', 'Israel', 'New Zealand', 'Singapore']
        let random = Math.floor(Math.random() * 6)
        let country = countryvalues[random]
        let state = faker.location.state()
        let city = faker.location.city()
        let zipcode = faker.location.zipCode()
        let mobileNumber = faker.phone.number()
        return { name, email, password, day, month, year, titles, fname, lName, company, address, country, state, city, zipcode, mobileNumber }
    }

    static async randomText(): Promise<string> {
        return faker.location.secondaryAddress()
    }
    static async CardInformation(): Promise<{}> {
        let nameoncard = faker.person.fullName()
        let cardnumber = faker.finance.creditCardNumber().toString()
        let cvv = faker.finance.creditCardCVV().toString()
        let cardexpiration = faker.number.int({ min: 0o1, max: 12 }).toString()
        let cardexpyear = faker.number.int({ min: 2026, max: 2030 }).toString()
        return { nameoncard, cardnumber, cvv, cardexpiration, cardexpyear }
    }
}