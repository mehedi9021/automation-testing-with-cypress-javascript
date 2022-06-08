/// <reference types = "cypress"/>

describe("UI Elements", function()
{
    it("Verify inputbox and radio butons", function()
    {
        cy.visit("http://demo.automationtesting.in/Register.html")

        //Checkbox testing
        cy.get("#checkbox1").check().should("be.checked").and("have.value", "Cricket")
        cy.get("#checkbox2").check().should("be.checked").and("have.value", "Movies")
        cy.get("#checkbox3").check().should("be.checked").and("have.value", "Hockey")

        cy.get("#checkbox1").check().should("not.be.checked")
        cy.get("#checkbox2").check().should("not.be.checked")
        cy.get("#checkbox3").check().should("not.be.checked")

        //Or
        cy.get("input[type=checkbox]").check(["Cricket", "Hockey"])

    })

    it("Drop down select", function()
    {
        cy.get("#Skills").select("Android").should("have.value", "Android")

    })

    it("Dropdown multi select", function()
    {
        cy.get("#msdd").click()
        cy.get(".ng-scope").contains("English").click()
        cy.get(".ng-scope").contains("Japanese").click()

    })

    it("Search dropdown select", function()
    {
        cy.get("[role=combobox]").click({force: true})
        cy.get(".select2-search__field").type("ban")
        cy.get(".select2-search__field").type("{enter}")

    })
})