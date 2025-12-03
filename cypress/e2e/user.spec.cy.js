import userData from '../fixtures/users/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage' 
import MenuPage from '../pages/menuPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()

describe('Orange HRM Tests', () => {

  const selectorsList = {
    myInfoFirstNameField: "[name='firstName']",
    myInfoMiddleNameField: "[name='middleName']",
    myInfoLastNameField: "[name='lastName']",
    myInfoGenericField: ".oxd-input--active",
    myInfoDateField: "[placeholder='yyyy-dd-mm']",
    myInfoCloseDateField: ".--close",
    myInfoSubmitButton: "[type='submit']",
    myInfoPicklistField: "[tabindex='0']",
    myInfoPicklistDataField: ".oxd-select-dropdown",
    myInfoGenderField: ".oxd-radio-wrapper",
  }

  it.only('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
    menuPage.myInfoAccess()
    cy.get(selectorsList.myInfoFirstNameField).clear().type('NomeTeste')
    cy.get(selectorsList.myInfoMiddleNameField).clear().type('NomeDoMeioTeste')
    cy.get(selectorsList.myInfoLastNameField).clear().type('SobrenomeTeste')
    cy.get(selectorsList.myInfoGenericField).eq(3).clear().type('IdTeste')
    cy.get(selectorsList.myInfoGenericField).eq(4).clear().type('OutroIdTeste')
    cy.get(selectorsList.myInfoGenericField).eq(5).clear().type('123123')
    cy.get(selectorsList.myInfoDateField).eq(0).clear().type('2025-05-09').get(selectorsList.myInfoCloseDateField).click()
    cy.get(selectorsList.myInfoPicklistField).eq(0).click().get(selectorsList.myInfoPicklistDataField).contains('Brazilian').click()
    cy.get(selectorsList.myInfoPicklistField).eq(1).click().get(selectorsList.myInfoPicklistDataField).contains('Single').click()
    cy.get(selectorsList.myInfoDateField).eq(1).clear().type('1996-01-01').get(selectorsList.myInfoCloseDateField).click()
    cy.get(selectorsList.myInfoGenderField).eq(1).click()
    cy.get(selectorsList.myInfoGenericField).eq(9).clear().type('TestFieldTeste')
    cy.get(selectorsList.myInfoSubmitButton).eq(0).click()
    //cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')
  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })

})