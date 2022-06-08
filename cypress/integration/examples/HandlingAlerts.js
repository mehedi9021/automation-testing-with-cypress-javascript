/// <reference types = "cypress"/>

describe("UI Elements", function()
{
    it("Handling alerts", function()
    {
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get("#HTML9 > div.widget-content > button").click()

        //Alert message validation
        cy.on("window:confirm", (str) =>
        {
            expect(str).to.equal("Press a button!")
        }) //confirm is alert type
        

    })
})