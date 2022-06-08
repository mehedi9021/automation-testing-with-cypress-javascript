/// <reference types = "cypress"/>

describe("UI Elements", function()
{
    it("Navigation test", function()
    {

        cy.visit("https://www.lambdatest.com/selenium-playground/")
        cy.title().should("eq", "Selenium Grid Online | Run Selenium Test On Cloud")
        
        cy.get("#__next > div.wrapper > section.my-50 > div > div > div:nth-child(1) > div:nth-child(1) > ul > li:nth-child(2) > a").click()
        cy.title().should("eq", "Selenium Grid Online | Run Selenium Test On Cloud")

        cy.go("back")
        cy.title().should("eq", "Selenium Grid Online | Run Selenium Test On Cloud")

        cy.go("forward")
        cy.title().should("eq", "Selenium Grid Online | Run Selenium Test On Cloud")

        //Or
        cy.go(-1)
        cy.title().should("eq", "Selenium Grid Online | Run Selenium Test On Cloud")

        cy.go(1)
        cy.title().should("eq", "Selenium Grid Online | Run Selenium Test On Cloud")

    })
})