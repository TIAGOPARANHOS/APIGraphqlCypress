
function AllProjetoSpace() {
   return cy.request({
     method: 'GET',
     url:'https://api.spacex.land/graphql/',
     failOnStatusCode: false,

   })

}
export { AllProjetoSpace };