import userData from '../../../support/userdata';

describe('Pet Store', () => {
    const {
        id,
        name,
        categoryId,
        categoryName,
        photoUrl,
        tagsId,
        tagsName,
        status      
    } = userData;

    context(`Create Pets`, () => {
       
        context(`Create a valid pet to the store`, () => {
            it(`Given i try to create a valid pet
                Then the pet is create with success`, () => {
                
                cy.log('Given i try to create a valid pet');

                cy.petCreation(
                    id,
                    name,
                    categoryId,
                    categoryName,
                    photoUrl,
                    tagsId,
                    tagsName,
                    status
                ).then((petCreationResp) => {
                    
                    cy.log('Then the pet is create with success');

                    cy.validatePetCreation(
                        petCreationResp,
                        id,
                        name,
                        categoryId,
                        categoryName,
                        photoUrl,
                        tagsId,
                        tagsName,
                        status 
                    );
                });
            });
                
        });
    });
});