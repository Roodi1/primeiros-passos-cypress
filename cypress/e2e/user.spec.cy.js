import userData from '../fixtures/users/user-data.json'

describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid:  ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    myInfoFirstNameField: "[name='firstName']",
    myInfoMiddleNameField: "[name='middleName']",
    myInfoLastNameField: "[name='lastName']",
    myInfoGenericField: ".oxd-input--active",
    myInfoDateField: "[placeholder='yyyy-dd-mm']",
    myInfoSubmitButton: "[type='submit']",
  }

  it.only('User Info Update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.myInfoFirstNameField).clear().type('NomeTeste')
    cy.get(selectorsList.myInfoMiddleNameField).clear().type('NomeDoMeioTeste')
    cy.get(selectorsList.myInfoLastNameField).clear().type('SobrenomeTeste')
    cy.get(selectorsList.myInfoGenericField).eq(3).clear().type('IdTeste')
    cy.get(selectorsList.myInfoGenericField).eq(4).clear().type('OutroIdTeste')
    cy.get(selectorsList.myInfoGenericField).eq(5).clear().type('123123')
    cy.get(selectorsList.myInfoDateField).eq(0).clear().type('2025-05-09')
    cy.get(selectorsList.myInfoGenericField).eq(8).clear().type('TestFieldTeste')
    cy.get(selectorsList.myInfoSubmitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
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