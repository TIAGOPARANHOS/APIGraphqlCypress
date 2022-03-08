const payloadAddMission = require('../payloads/add-mission.json')

function addMission() {
  
  const query = `{
    launchesPast(limit: 1) {
      mission_name
      launch_date_local
    }
  }`;
    
  cy.request({
    method: "POST",
    url: 'https://api.spacex.land/graphql/',
    failOnStatusCode: false,
    body: { query },
  })
}

export { addMission };