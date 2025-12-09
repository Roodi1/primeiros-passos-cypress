import userData from '../fixtures/users/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage' 
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'
import { log } from 'async'

const Chance = require('chance')

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()
const chance = new Chance()

describe('Orange HRM Tests', () => {

  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
    menuPage.myInfoAccess()
    myInfoPage.fillNameDetails(chance.first(), chance.last(), chance.last())
    myInfoPage.fillEmployeeDetails(chance.integer({ min: 100000, max: 999999 }), chance.integer({ min: 0, max: 99999 }), chance.character({ pool: 'abcde' }) + chance.integer({ min: 10000000, max: 99999999 }), chance.exp_year() + '-' + chance.natural({ min: 1, max: 28 }) + '-' + chance.natural({ min: 1, max: 12 }))
    myInfoPage.fillPersonalDetails(chance.integer({min: 1, max: 193}), chance.integer({min: 1, max: 3}), chance.year({min: 1925, max: 2007}) + '-' + chance.natural({ min: 1, max: 28 }) + '-' + chance.natural({ min: 1, max: 12 }), chance.integer({min: 0, max: 1}))
    myInfoPage.savePersonalData()
    //cy.get(selectorsList.myInfoGenericField).eq(9).clear().type('TestFieldTeste')

  })

})