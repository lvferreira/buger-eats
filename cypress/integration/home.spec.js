

describe('home page', ()=>{
    it('online', ()=>{
        cy.viewport(1440, 900)
        cy.visit('/')
        cy.get('#page-home main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
    })
})