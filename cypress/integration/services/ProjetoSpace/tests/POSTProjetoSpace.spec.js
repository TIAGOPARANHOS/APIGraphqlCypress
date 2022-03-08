import * as POSTProjetoSpace from '../requests/POSTProjetoSpace.request';

 context('Requisição GraphQL', () => {
     it('Faz requisição Graphql', () => {
        
      var queryString = `{
      launchesPast(limit: 1) {
        mission_name
        launch_date_local }
  
    }`
    cy.request({
      method: "POST",
      url: 'https://api.spacex.land/graphql/',
      failOnStatusCode: false,
      body: { query: queryString },
      
    }).then((response) => {
      cy.log(response.body);
    });

    const mutation =  `mutation {
      insert_users(objects: {rocket: "Foguete Teste", twitter: "twitter.com", name: "Tiago"}) {
        affected_rows
        returning {
          name
          rocket
          twitter
        }
      }
    }`
    cy.request({
      url: 'https://api.spacex.land/graphql/',
      failOnStatusCode: false,
      method: 'POST',
      body: {
        query: mutation
      }
    }).then((response) => {
      cy.log(response.body);
    });

    })
  });

  
  
  