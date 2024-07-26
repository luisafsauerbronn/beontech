
Cypress.Commands.add(
    'systemLogin',
    (
        user,
        password
    ) => {

            const url = `${Cypress.env('urls').auth}/v2/authentication/system`;

            const body = {
                "user": user,
                "password": password
            };
            
            cy.postRequest(url,body).then((response) => {
                return { response, body };
            });
    }
);

Cypress.Commands.add(
    'validateSystemLogin',
    (
        resp
    ) => {
        if (resp.response.status === 200) {
            expect(resp.response.body.token).to.exist;
        } else {          
            throw `Error ${resp.response.body.status} - ${resp.response.body.message}`
        }    
    }
);