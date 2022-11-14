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


it('Verifies that the user is able to scroll through the website', () => {

  //The webpage is accessed

  cy.visit('https://www.teaminternational.com')

  //Scrolling down through the website

  cy.xpath("//h2[normalize-space()='Innovative IT Software Services']").scrollIntoView().should('be.visible')
  cy.xpath("//h2[normalize-space()='They trust us']").scrollIntoView().should('be.visible')
  cy.xpath("//h2[normalize-space()='Locations']").scrollIntoView().should('be.visible')
  cy.xpath("//h2[normalize-space()='Top Gun Lab']").scrollIntoView().should('be.visible')
  cy.xpath("//h2[normalize-space()='Empower Your Career']").scrollIntoView().should('be.visible')
  cy.xpath("//h2[normalize-space()='Empower Your Career']").scrollIntoView().should('be.visible')

  
})

it('Verify labels in the Your Industry section', () => {

  //The webpage is accessed

  cy.visit('https://www.teaminternational.com')

  //Verifying each label for the Your Industry section

  cy.xpath("//h3[contains(text(),'Logistics & Transportation')]").should('have.text', 'Logistics & Transportation')
  cy.xpath("//h3[contains(text(),'Oil & Gas')]").should('have.text','Oil & Gas')
  cy.xpath("//h3[contains(text(),'Telecom')]").should('have.text','Telecom')
  cy.xpath("//h3[contains(text(),'Technology ')]").should('have.text','Technology & Innovation ')
  cy.xpath("//h3[contains(text(),'Financial ')]").should('have.text','Financial Services')
  cy.xpath("//h3[contains(text(),'Healthcare ')]").should('have.text','Healthcare & Life Sciences')
  cy.xpath("//h3[contains(text(),'Travel ')]").should('have.text','Travel & Hospitality')
  cy.xpath("//h3[contains(text(),'Retail ')]").should('have.text','Retail & Ecommerce')
  cy.xpath("//h3[contains(text(),'Digital ')]").should('have.text','Digital Marketing')
  
})

it('Verifies the hover fucntion in the Your Industry section', () => {

  //The webpage is accessed

  cy.visit('https://www.teaminternational.com')
  
  //Scroll into the top of the page so that the element is visible

  cy.xpath("//h1[@class='main-title-industry white-text']").scrollIntoView()

  //Verifying the hover function

  cy.xpath("//h3[contains(text(),'Logistics & Transportation')]").trigger('mouseover')
 
  
})

})