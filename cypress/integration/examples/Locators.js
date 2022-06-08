/// <reference types = "cypress"/>

describe("Locating Elements", function()
{
    it("Verify types of locators", function()
    {
        cy.visit("https://www.daraz.com.bd/")

        cy.get("[type='search']").type("tv")

        cy.get(".search-box__button--1oH7").click()

        cy.get("#root > div > div.ant-row.main--pIV2h > div.ant-col-24 > div > div.ant-col-20.ant-col-push-4.side-right--Tyehf > div.box--ujueT > div:nth-child(1) > div > div > div.info--ifj7U > div.title--wFj93 > a").click()

        cy.get("#module_quantity-input > div > div > div > div > div.next-number-picker-input-wrap > span > input[type=text]").clear().type("2")

        cy.get("#module_add_to_cart > div > button.add-to-cart-buy-now-btn.pdp-button.pdp-button_type_text.pdp-button_theme_orange.pdp-button_size_xl > span > span").click()

        cy.get(".cart-item-current-price").contains("৳ 38,241")

    })
})