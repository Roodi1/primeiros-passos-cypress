class MenuPage{

    selectorsList() {
        const selectors = {
            myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
        }
        return selectors
    }

    myInfoAccess() {
        cy.get(this.selectorsList().myInfoButton).click()
    }

}

export default MenuPage