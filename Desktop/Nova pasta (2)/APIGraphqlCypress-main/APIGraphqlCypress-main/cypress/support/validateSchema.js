
export const validateSchema = (jsonSchema, body) => {
    var queryString = `{
        launchesPast(limit: 1) {
          mission_name
          launch_date_local }
    
      }`
      cy.request(jsonSchema)({
        method: "POST",
        url: 'https://api.spacex.land/graphql/',
        failOnStatusCode: false,
        body: { query: queryString },
        
      }).then((schema) => {
        cy.log(body);
      });
  

 }



