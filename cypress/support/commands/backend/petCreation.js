
Cypress.Commands.add(
    'petCreation',
    (
        id,
        name,
        categoryId,
        categoryName,
        photoUrl,
        tagsId,
        tagsName,
        status

    ) => {

            const url = `${Cypress.env('urls').petStore}`;

            const body = {
                "id": id,
                "name": name,
                "category": {
                  "id": categoryId,
                  "name": categoryName
                },
                "photoUrls": [
                    photoUrl,

                ],
                "tags": [
                  {
                    "id": tagsId,
                    "name": tagsName
                  }
                ],
                "status": status
              };
            
            cy.postRequest(url,body).then((response) => {
                return { response, body };
            });
    }
);

Cypress.Commands.add(
    'validatePetCreation',
    (
        resp, 
        id,
        name,
        categoryId,
        categoryName,
        photoUrl,
        tagsId,
        tagsName,
        status
    ) => {
        cy.log(JSON.stringify(resp.response.body))

        if (resp.response.status === 200) {
            expect(resp.response.body.id).to.eq(id);
            expect(resp.response.body.category.name).to.eq(categoryName);
            expect(resp.response.body.category.id).to.eq(categoryId);
            expect(resp.response.body.name).to.eq(name);
            expect(resp.response.body.photoUrls[0]).to.eq(photoUrl);
            expect(resp.response.body.tags[0].id).to.eq(tagsId);
            expect(resp.response.body.tags[0].name).to.eq(tagsName);
            expect(resp.response.body.status).to.eq(status);
        } else {          
            throw `Error`
        }    
    }
);