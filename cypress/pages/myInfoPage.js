import { date } from "assert-plus"
import { first } from "lodash"

class MyInfoPage{

    selectorsList() {
        const selectors = {
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
        return selectors
    }

    fillNameDetails(firstName, middleName, lastName) {
        cy.get(this.selectorsList().myInfoFirstNameField).clear().type(firstName)
        cy.get(this.selectorsList().myInfoMiddleNameField).clear().type(middleName)
        cy.get(this.selectorsList().myInfoLastNameField).clear().type(lastName)
    }

    fillEmployeeDetails(employeeId, otherId, driversLicense, licenseExpireDate) {
        cy.get(this.selectorsList().myInfoGenericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().myInfoGenericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().myInfoGenericField).eq(5).clear().type(driversLicense)
        cy.get(this.selectorsList().myInfoDateField).eq(0).clear().type(licenseExpireDate).get(this.selectorsList().myInfoCloseDateField).click()

    }

    fillPersonalDetails(nationality, maritalStatus, dateOfBirth, gender) {
        cy.get(this.selectorsList().myInfoPicklistField).eq(0).click().get(this.selectorsList().myInfoPicklistDataField).contains(nationality).click()
        cy.get(this.selectorsList().myInfoPicklistField).eq(1).click().get(this.selectorsList().myInfoPicklistDataField).contains(maritalStatus).click()
        cy.get(this.selectorsList().myInfoDateField).eq(1).clear().type(dateOfBirth).get(this.selectorsList().myInfoCloseDateField).click()
        cy.get(this.selectorsList().myInfoGenderField).eq(gender).click()
    }

    savePersonalData() {
        cy.get(this.selectorsList().myInfoSubmitButton).eq(0).click()
        //cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
    }

}

export default MyInfoPage