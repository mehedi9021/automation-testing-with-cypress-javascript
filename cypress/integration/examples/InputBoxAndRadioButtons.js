/// <reference types = "cypress"/>

describe("UI Elements", function()
{
    it("Verify inputbox and radio butons", function()
    {
        cy.visit("https://accounts.lambdatest.com/login")
        cy.url().should("include","login")

        cy.get("#email").should("be.visible").should("be.enabled").type("mmehedi439@gmail.com")
        cy.get("#password").should("be.visible").should("be.visible").type("lambdatest.com")

        cy.get("#login-button").should("be.visible").click()

        cy.title().should("eq", "Welcome - Lambdatest")

        cy.visit("https://www.lambdatest.com/selenium-playground/")
        cy.get("#__next > div.wrapper > section.my-50 > div > div > div:nth-child(1) > div:nth-child(1) > ul > li:nth-child(3) > a").click()

        //Radio buttons
        //cy.get("[name=optradio][value=Male]").should("be.visible").should("be.checked") //If first one is already selected
        cy.get("input[value='0 - 5']").should("be.visible").should("not.be.checked").click()

    })
})