describe('Home Page Testing', () => {
    beforeEach(() => {
      cy.visit('https://automationintesting.online/')
      cy.contains('Let me hack!').click()
    })
  
    it('verifies description', () => {          //later add verification of the whole page layout
  
        cy.get('.col-sm-10').should('contain', 'Shady Meadows')
    })
  
  
  
    it('books a room positive test', () => {
  
      cy.get('[class="row hotel-room-info"]')
        .get('[class="col-sm-7"]')
        .find('button')
        .should('contain', 'Book this room')
        .click()
  
    })
  })