/// <reference types="Cypress" />

describe("Test Contact Us form via WebdriverUni", ()=> {
    it("Should be able to submit a successful submission via Contact Us form", ()=> {
        //cypress code
        cy.visit("http://www.webdriveruniversity.com/");
        cy.get('#contact-us').invoke('removeAttr', 'target').click();
        cy.get('[name="first_name"]').type("fooser");
        cy.get('[name="last_name"]').type("bar");
        cy.get('[name="email"]').type("fooserbar@email.com");
        cy.get('textarea.feedback-input').type("hello there");
        cy.get('[type="submit"]').click();
    });

    it("Should not be able to submit contact form successfully if fields are not completed", ()=> {
        //cypress code
        cy.visit("http://www.webdriveruniversity.com/");
        cy.get('#contact-us').invoke('removeAttr', 'target').click();

    });
})