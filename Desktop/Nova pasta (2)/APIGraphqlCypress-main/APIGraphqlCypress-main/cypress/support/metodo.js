export default class Rest {

static httpRequestWhithBody(method, endpoint, body, failOnStatusCode = {}, qs = {}, failOnStatusCode = false, timeout = Cypress.env('global_timeout')){
  return cy.request({
   method: method,
   url: endpoint,
   failOnStatusCode: failOnStatusCode,
   body: body
   

  })

}
}