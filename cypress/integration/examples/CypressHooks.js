/// <reference types = "cypress"/>

describe("UI Elements", function()
{
    before(function()
    {
        cy.log("This is setup block!")
    })

    after(function()
    {
        cy.log("This is tear down block!")
    })

    beforeEach(function()
    {
        cy.log("This is login block!")
    })

    afterEach(function()
    {
        cy.log("This is logout block!")
    })

    it("Searching", function()
    {
        cy.log("This is searching test!")
    })

    it("Advanced searching", function()
    {
        cy.log("This is advanced searching test!")
    })

    it("Listing products", function()
    {
        cy.log("This is listing product test!")
    })


})