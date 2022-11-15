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

it('Verifies the hover function in the Your Industry section', () => {

  //The webpage is accessed

  cy.visit('https://www.teaminternational.com')
  
  //Scroll into the top of the page so that the element is visible

  cy.xpath("//h1[@class='main-title-industry white-text']").scrollIntoView()

  //Verifying the hover function

  cy.xpath("//h3[contains(text(),'Logistics & Transportation')]").realHover();
  cy.xpath("//p[contains(text(),'Build your end-to-end digital supply chain to driv')]").should('be.visible')
  cy.xpath("//h3[contains(text(),'Oil & Gas')]").realHover();
  cy.xpath("//p[contains(text(),'Harness digital solutions and data to accelerate p')]").should('be.visible')
  cy.xpath("//h3[contains(text(),'Telecom')]").realHover();
  cy.xpath("//p[contains(text(),'Empower your organization to quickly and effective')]").should('be.visible')
  cy.xpath("//h3[contains(text(),'Technology ')]").realHover();
  cy.xpath("//p[contains(text(),'Bring your transformational innovations to life an')]").should('be.visible')
  cy.xpath("//h3[contains(text(),'Financial ')]").realHover();
  cy.xpath("//p[contains(text(),'Adapt more quickly to evolving competitive threats')]").should('be.visible')
  cy.xpath("//h3[contains(text(),'Healthcare ')]").realHover();
  cy.xpath("//p[contains(text(),'Accelerate the creation and delivery of your life-')]").should('be.visible')
  cy.xpath("//h3[contains(text(),'Travel ')]").realHover();
  cy.xpath("//p[contains(text(),'Leverage our intelligent IT and software solutions')]").should('be.visible')
  cy.xpath("//h3[contains(text(),'Retail ')]").realHover();
  cy.xpath("//p[contains(text(),'Harness innovative IT solutions and data to build ')]").should('be.visible')
  cy.xpath("//h3[contains(text(),'Digital ')]").realHover();
  cy.xpath("//p[contains(text(),'Accelerate lead generation with innovative, data-d')]").should('be.visible')
  
})

it('Verifies the click action for every element in the Your Industry section', () => {

  //The webpage is accessed

  cy.visit('https://www.teaminternational.com')

  //Click action verified for each element

  cy.xpath("//a[@href='http://www.teaminternational.com/industries/logistics-transportation/']")
    .then((link) => {
      cy.request(link.prop('href'))
        .its('status')
        .should('eq', 200)
    })

  cy.xpath("//a[@href='https://www.teaminternational.com/industries/oil-gas/']")
    .then((link) => {
      cy.request(link.prop('href'))
        .its('status')
        .should('eq', 200)
    })

  cy.xpath("//a[@href='https://www.teaminternational.com/industries/it-solutions-for-telecom-industry/']")
    .then((link) => {
      cy.request(link.prop('href'))
        .its('status')
        .should('eq', 200)
    })

  cy.xpath("//a[@href='https://www.teaminternational.com/industries/information-technology-teams/']")
    .then((link) => {
      cy.request(link.prop('href'))
        .its('status')
        .should('eq', 200)
    })

  cy.xpath("//a[@href='https://www.teaminternational.com/industries/financial-services/']")
    .then((link) => {
      cy.request(link.prop('href'))
        .its('status')
        .should('eq', 200)
    })

  cy.xpath("//a[@href='https://www.teaminternational.com/industries/healthcare-life-sciences/']")
    .then((link) => {
      cy.request(link.prop('href'))
        .its('status')
        .should('eq', 200)
    })

  cy.xpath("//a[@href='https://www.teaminternational.com/industries/it-hospitality-solutions/']")
    .then((link) => {
      cy.request(link.prop('href'))
        .its('status')
        .should('eq', 200)
    })

  cy.xpath("//a[@href='https://www.teaminternational.com/industries/retail-it-solutions/']")
    .then((link) => {
      cy.request(link.prop('href'))
        .its('status')
        .should('eq', 200)
    })

    cy.xpath("//a[@href='https://www.teaminternational.com/industries/digital-marketing/']")
    .then((link) => {
      cy.request(link.prop('href'))
        .its('status')
        .should('eq', 200)
    })

})

it('Verifies that the user is able to access the website', () => {

  //The webpage is accessed

  cy.visit('https://www.teaminternational.com')

  //Verifying each label for the Innovative IT Software Services section

  cy.xpath("//div[@class='service-item col-6 col-sm-4 col-md-4 col-xl-3'][1]")
    .contains('Software Development Outsourcing')
  cy.xpath("//div[@class='service-item col-6 col-sm-4 col-md-4 col-xl-3'][2]")
    .contains('AutomationServices')
  cy.xpath("//div[@class='service-item col-6 col-sm-4 col-md-4 col-xl-3'][3]")
    .contains('Software QA& Testing')
  cy.xpath("//div[@class='service-item col-6 col-sm-4 col-md-4 col-xl-3'][4]")
    .contains('MicrosoftServices')
  cy.xpath("//div[@class='service-item col-6 col-sm-4 col-md-4 col-xl-3'][5]")
    .contains('Professional ITConsulting')
  cy.xpath("//div[@class='service-item col-6 col-sm-4 col-md-4 col-xl-3'][6]")
    .contains('DataAnalytics Services')  
  cy.xpath("//div[@class='service-item col-6 col-sm-4 col-md-4 col-xl-3'][7]")
    .contains('Managed ITServices')
  
          


})

})