import userData from '../../../support/userdata';

describe('Login', () => {
    const {
        systemUser,
        systemPassword        
    } = userData;

    context(`System Login`, () => {
       
        context(`System login with valid user`, () => {
            it(`Given i try to log with a valid user
                Then the system return a valid token`, () => {
                
                cy.log('Given i try to log with a valid user');

                cy.systemLogin(
                    systemUser,
                    systemPassword,
                ).then((systemLoginResp) => {
                    
                    cy.log('Then the system return a valid token');

                    cy.validateSystemLogin(
                        systemLoginResp
                    );

                    Cypress.env(
                        'token',
                        systemLoginResp.response.body.token
                    );
                });
            });
                
        });
    });
});