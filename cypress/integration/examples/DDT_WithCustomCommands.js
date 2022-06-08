/// <reference types = "cypress"/>

describe("CustomSuite", function()
{
    
    it("DDT with custom commands", function()
    {
        cy.login("Admin", "admin123")
    })
})