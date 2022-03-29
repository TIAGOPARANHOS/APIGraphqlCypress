import {query} from '../../../../support/commands'
import methods from '../../../../fixtures/methods.json'

context('Requisição GraphQL', () => {
     it('Faz requisição Graphql', () => {
        
         cy.getRocket(query,methods.POST)
    
    })
  });
  
  