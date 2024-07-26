Cypress.Commands.add(
    'accessGoogleSearchPage',() => {
        cy.visit(Cypress.env('urls').google);   
        cy.get('*[class^="gNO89b"]').should('exist');
    }
);

Cypress.Commands.add(
    'search',(search) => {
        cy.get('*[class^="gLFyf"]').type(search);
        cy.get('*[class^="gLFyf"]').type('{enter}');
    }
);

Cypress.Commands.add(
    'validateSearch',() => {
        cy.url().should('include', '/search')
        cy.contains('Imagens');
        cy.contains('Dog');
    }
);