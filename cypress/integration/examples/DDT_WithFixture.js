/// <reference types = "cypress"/>

describe("MyTestSuite", function()
{
    
    before(function()
    {
        cy.fixture("data").then(function(data)
        {
            this.data=data

        })

    })
    
    it("DDT with fixture", function()
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/index.php/auth/login")
        cy.get("#txtUsername").type(this.data.username)
        cy.get("#txtPassword").type(this.data.password)
        cy.get("#btnLogin").click()

    })
})