/// <reference types="Cypress"/>

class LoginPage
{
    visit()
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/index.php/auth/login")

    }

    fillUsername(value)
    {
        const field = cy.get("#txtUsername")
        field.clear()
        field.type(value)
        return this
    }

    fillPassword(value)
    {
        const field = cy.get("#txtPassword")
        field.clear()
        field.type(value)
        return this
    }
    
    submit()
    {
        const button = cy.get("#btnLogin")
        button.click()
    }

}

export default LoginPage