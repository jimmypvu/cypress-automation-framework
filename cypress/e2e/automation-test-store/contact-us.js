/// <reference types="Cypress" />
/// <reference types="@cypress/xpath" />

describe("Test Contact Us form on Automation Test Store", ()=> {
    it.only("Should be able to submit a successful submission via Contact Us form", ()=> {
        //cypress code
        cy.visit("https://automationteststore.com/");
        // cy.get('a[href="https://automationteststore.com/index.php?rt=content/contact"]').click();
        // cy.xpath("//a[contains(text(), 'Contact Us')]").click();
        // cy.xpath("//a[contains(@href, 'contact')]").click();
        cy.get("a[href$='contact']").click();
        cy.get("#ContactUsFrm_first_name").type("fooser");
        cy.get("[id=ContactUsFrm_email]").type("fooserbar@email.com");
        cy.get("[id='ContactUsFrm']").type("is cypress fun?");
        cy.get("button[title='Submit']").click();
    });
})