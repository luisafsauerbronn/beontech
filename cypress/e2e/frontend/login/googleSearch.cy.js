import userData from '../../../support/userdata';

describe('Google', () => {
    const {
        search      
    } = userData;

    context(`Google Search`, () => {
       
        context(`Search a google information with success`, () => {
            it(`Given I access google search page
                When I search an information
                Then I see results`, () => {
                
                    cy.log('Given I access google search page');
                    cy.accessGoogleSearchPage();

                    cy.log('When I search an information');
                    cy.search(search);

                    cy.log('Then I see results');
                    cy.validateSearch()

            });
                
        });
    });
});