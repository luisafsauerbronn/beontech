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