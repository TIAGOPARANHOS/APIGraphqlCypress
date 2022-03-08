import * as GETProjetoSpace from '../requests/GETProjetoSpace.request'

describe('Get Resposta API', ()  => {
  it('Checar Resposta', () => {
      GETProjetoSpace.AllProjetoSpace().should((response) => {
           expect(response.status).to.eq(200);

        })
        const query = `{
            launchesPast(limit: 1) {
              mission_name
              launch_date_local
            }
          }`;
      cy.request({
        method: "post",
        url: 'https://api.spacex.land/graphql/',
        body: { query },
      }).then((res) => {
        console.log(res.body);
      });
    });
});