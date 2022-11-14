Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

describe('Team International', () => {
  it('Verifies that the user is able to access the website', () => {

    //The webpage is accessed

    cy.visit('https://www.teaminternational.com')

  })


it('Verifies that the user is able to access the website', () => {

  //The webpage is accessed

  cy.visit('https://www.teaminternational.com')

  //Scrolling down through the website

  cy.xpath("//h2[normalize-space()='Innovative IT Software Services']").scrollIntoView()

  
})
})