describe ("My TestSuite", function()
{
  it ("Verify page title - positive", function()
  {
    cy.visit("https://opensource-demo.orangehrmlive.com/")
    cy.title().should("eq", "OrangeHRM")
  })

  it ("Verify page title - negative", function()
  {
    cy.visit("https://opensource-demo.orangehrmlive.com/")
    cy.title().should("eq", "Orange")
  })
})