/// <reference types="Cypress"/>

describe("MyTestSuite", function()
{
    it("Test Homepage Title", function()
    {
        cy.visit("http://demo.automationtesting.in/Register.html")
        cy.title().should("eq", "Register")
    })

    it("Form Fillup", function()
    {
        cy.get("[placeholder='First Name']").type("Md. Mehedi")
        cy.get("[placeholder='Last Name']").type("Hasan")
        cy.get("#basicBootstrapForm > div:nth-child(2) > div > textarea").type("Haziganj, Chandpur")
        cy.get("[type=email]").type("mmehedi439@gmail.com")
        cy.get("[type=tel]").type("01622222222")

        cy.get("[value=Male]").click()

        cy.get("#checkbox1").check()
        cy.get("#checkbox2").check()

        cy.get("#Skills").select("Analytics")

        cy.get("#msdd").click()
        cy.get(".ng-scope").contains("Bulgarian").click()
        cy.get(".ng-scope").contains("Catalan").click()

        cy.get("[role=combobox]").click({force: true})
        cy.get(".select2-search__field").type("ban")
        cy.get(".select2-search__field").type("{enter}")

        cy.get("#yearbox").select("2015")
        cy.get("[placeholder=Month]").select("January")
        cy.get("#daybox").select("1")

        cy.get("#firstpassword").type("123456")
        cy.get("#secondpassword").type("123456")

        const p = "My TestSuite -- Verify page title - negative (failed).png"
        cy.get("#imagesrc").attachFile(p)


    })
})