import userData from '../../../support/userdata';

describe('Login', () => {
    const {
        userLogin,
        userPassword        
    } = userData;

    context(`User Login`, () => {
       
        context(`User login with valid CPF and password `, () => {
            it(`Given I access the main page
                When I try to log with valid credentials
                And I click in login
                Then I see the logged homepage`, () => {
                
                    cy.log('Given I access the main page');
                    cy.accessHomePage();

                    cy.log('When I try to log with valid credentials');
                    cy.accessLoginPage();
                    cy.login(userLogin,userPassword);

                    cy.log('hen I see the logged homepage');
                    cy.validateLogin();
            });
                
        });
    });
});