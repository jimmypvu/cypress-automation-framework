/// <reference types="Cypress" />
/// <reference types="@cypress/xpath" />

describe("Selectors Examples", () => {
    it("selector examples from Webdriver Uni Contact Us page", () => {
        cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
        //css selectors
        //by tag name
        cy.get("input")

        //by attribute name and value
        cy.get("input[name='first_name']")

        //by ID
        cy.get("#contact_me")

        //by class
        cy.get(".feedback-input")

        //by multiple classes
        cy.get("[class='navbar navbar-inverse navbar-fixed-top']")

        //by 2 different attributes
        cy.get("[name='email'][placeholder='Email Address']")
});
})