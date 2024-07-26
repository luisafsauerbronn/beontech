Cypress.Commands.add(
    'accessHomePage',() => {
        cy.visit(Cypress.env('urls').baseUrl);   
        cy.contains('Entrar')
        cy.get('*[class^="onetrust-close-btn-handler onetrust-close-btn-ui banner-close-button ot-close-icon"]').click();
    }
);

Cypress.Commands.add(
    'accessLoginPage',() => {
        cy.contains('Entrar').click();
        cy.url().should('include', '/entrar')
    }
);

Cypress.Commands.add(
    'login',(userLogin,userPassword) => {
        cy.get('*[class^="textInput css-14dz90l"]').type(userLogin);
        cy.contains('Continuar').click();
        cy.get("[name='password']").type(userPassword);
        cy.get('*[class^="css-df2j36"]').click();
    }
);

Cypress.Commands.add(
    'validateLogin',() => {
        cy.url().should('include', '/plataforma/inicio')
        cy.get('*[class^="LinkRoute-nsw-front-navbar__sc-69wd83-0 hlLyFX active"]').should('exist');
    }
);