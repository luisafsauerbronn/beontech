Cypress.Commands.add('postRequest', { timeout: 7000 }, (url, body) => {
    cy.request({
        method: 'POST',
        failOnStatusCode: false,
        url: url,
        body: body,
        headers: {
            'content-type': 'application/json'
        },
    });
});

Cypress.Commands.add('getRequest', { timeout: 7000 }, (url) => {
    cy.request({
        method: 'GET',
        failOnStatusCode: false,
        url: url,
        headers: {
            'content-type': 'application/json'
        },
    });
});

Cypress.Commands.add('puttRequest', { timeout: 7000 }, (url, body) => {
    cy.request({
        method: 'PUT',
        failOnStatusCode: false,
        url: url,
        body: body,
        headers: {
            'content-type': 'application/json'
        },
    });
});

Cypress.Commands.add('deleteRequest', { timeout: 7000 }, (url) => {
    cy.request({
        method: 'DELETE',
        failOnStatusCode: false,
        url: url,
        headers: {
            'content-type': 'application/json'
        },
    });
});