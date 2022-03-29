

export default class Rest{

static httpRequestWhithBody(POST, endpoint, body, headers = {}, qs = {}, failOnStatusCode = false, timeout = Cypress.env('global_timeout')){
return cy.request({

method: POST,
url: endpoint,
body: body,
headers: headers,
failOnStatusCode: failOnStatusCode,
timeout: timeout,
qs: qs



})

}

}