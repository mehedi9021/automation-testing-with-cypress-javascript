/// <reference types="Cypress"/>

import LoginPage from "C:/Users/User/Cypress Automation/cypress/integration/examples/PageObjects/LoginPage"

describe("TestSuite", function()
{
    it("Valid login test", function()
    {
        const lp = new LoginPage()
        lp.visit()
        lp.fillUsername("Admin")
        lp.fillPassword("admin123")
        lp.submit()
    })
})