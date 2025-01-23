describe('Test Sample', () => {
    it('Home', () => {
      cy.visit('http://localhost:5173/')  
      cy.contains('official documentation')
    })
  })