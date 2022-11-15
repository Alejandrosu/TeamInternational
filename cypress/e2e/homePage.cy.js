///<reference types="cypress-iframe" />
import 'cypress-iframe'

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
    cy.xpath("//h2[normalize-space()='Empower Your Career']").scrollIntoView({ offset: { top: 300, left: 0 } })

  
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

    cy.xpath("//h3[contains(text(),'Logistics & Transportation')]").realHover()
    cy.xpath("//p[contains(text(),'Build your end-to-end digital supply chain to driv')]").should('be.visible')
    cy.xpath("//h3[contains(text(),'Oil & Gas')]").realHover()
    cy.xpath("//p[contains(text(),'Harness digital solutions and data to accelerate p')]").should('be.visible')
    cy.xpath("//h3[contains(text(),'Telecom')]").realHover()
    cy.xpath("//p[contains(text(),'Empower your organization to quickly and effective')]").should('be.visible')
    cy.xpath("//h3[contains(text(),'Technology ')]").realHover()
    cy.xpath("//p[contains(text(),'Bring your transformational innovations to life an')]").should('be.visible')
    cy.xpath("//h3[contains(text(),'Financial ')]").realHover()
    cy.xpath("//p[contains(text(),'Adapt more quickly to evolving competitive threats')]").should('be.visible')
    cy.xpath("//h3[contains(text(),'Healthcare ')]").realHover()
    cy.xpath("//p[contains(text(),'Accelerate the creation and delivery of your life-')]").should('be.visible')
    cy.xpath("//h3[contains(text(),'Travel ')]").realHover()
    cy.xpath("//p[contains(text(),'Leverage our intelligent IT and software solutions')]").should('be.visible')
    cy.xpath("//h3[contains(text(),'Retail ')]").realHover()
    cy.xpath("//p[contains(text(),'Harness innovative IT solutions and data to build ')]").should('be.visible')
    cy.xpath("//h3[contains(text(),'Digital ')]").realHover()
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

  it('Verifies the labels for the Innovative IT Software Services section', () => {

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

  it('Verifies the hover function in the Innovative IT Software Services section', () => {

    //The webpage is accessed

    cy.visit('https://www.teaminternational.com')

    //Verifying the hover function

    cy.xpath("//div[@class='service-item col-6 col-sm-4 col-md-4 col-xl-3'][1]")
      .should('have.css','color', 'rgb(64, 64, 64)')
      .realHover()
      .should('have.css','color', 'rgb(64, 64, 64)')

    cy.xpath("//div[@class='service-item col-6 col-sm-4 col-md-4 col-xl-3'][2]")
      .should('have.css','color', 'rgb(64, 64, 64)')
      .realHover()
      .should('have.css','color', 'rgb(64, 64, 64)')

    cy.xpath("//div[@class='service-item col-6 col-sm-4 col-md-4 col-xl-3'][3]")
      .should('have.css','color', 'rgb(64, 64, 64)')
      .realHover()
      .should('have.css','color', 'rgb(64, 64, 64)')

    cy.xpath("//div[@class='service-item col-6 col-sm-4 col-md-4 col-xl-3'][4]")
      .should('have.css','color', 'rgb(64, 64, 64)')
      .realHover()
      .should('have.css','color', 'rgb(64, 64, 64)')

    cy.xpath("//div[@class='service-item col-6 col-sm-4 col-md-4 col-xl-3'][5]")
      .should('have.css','color', 'rgb(64, 64, 64)')
      .realHover()
      .should('have.css','color', 'rgb(64, 64, 64)')

    cy.xpath("//div[@class='service-item col-6 col-sm-4 col-md-4 col-xl-3'][6]")
      .should('have.css','color', 'rgb(64, 64, 64)')
      .realHover()
      .should('have.css','color', 'rgb(64, 64, 64)')

    cy.xpath("//div[@class='service-item col-6 col-sm-4 col-md-4 col-xl-3'][7]")
      .should('have.css','color', 'rgb(64, 64, 64)')
      .realHover()
      .should('have.css','color', 'rgb(64, 64, 64)')   

  })

  it('Verifies the click action for every element in the Innovative IT Software Services section', () => {

    //The webpage is accessed

    cy.visit('https://www.teaminternational.com')

    //Verify the click action in the Innovative IT Software Services section

    cy.xpath("//a[@href='https://www.teaminternational.com/services/software-development-outsourcing/']")
    .then((link) => {
      cy.request(link.prop('href'))
        .its('status')
        .should('eq', 200)
    })

    cy.xpath("//a[@href='https://www.teaminternational.com/services/intelligent-automation-services-rpa/']")
    .then((link) => {
      cy.request(link.prop('href'))
        .its('status')
        .should('eq', 200)
    })

    cy.xpath("//a[@href='https://www.teaminternational.com/services/software-qa-testing/']")
    .then((link) => {
      cy.request(link.prop('href'))
        .its('status')
        .should('eq', 200)
    })

    cy.xpath("//a[@href='https://www.teaminternational.com/services/microsoft-services/']")
    .then((link) => {
      cy.request(link.prop('href'))
        .its('status')
        .should('eq', 200)
    })

    cy.xpath("//a[@href='https://www.teaminternational.com/services/professional-it-consulting-services/']")
    .then((link) => {
      cy.request(link.prop('href'))
        .its('status')
        .should('eq', 200)
    })

    cy.xpath("//a[@href='https://www.teaminternational.com/services/data-analytics-services/']")
    .then((link) => {
      cy.request(link.prop('href'))
        .its('status')
        .should('eq', 200)
    })

    cy.xpath("//a[@href='https://www.teaminternational.com/services/managed-it-services/']")
    .then((link) => {
      cy.request(link.prop('href'))
        .its('status')
        .should('eq', 200)
    })

  })

  it('Verifies that the logos in the They trust us section have an event when hovered', () => {

    //The webpage is accessed

    cy.visit('https://www.teaminternational.com')

    //Verify the on hover event of the They trust us elements shows the appropiate image

    cy.xpath("//div[@id='logo-partners-2']//img[@alt='test 4']")
      .should('have.attr', 'src')
      .and('equal', "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E")
      
      cy.xpath("//div[@id='logo-partners-2']//img[@alt='test 4']")
      .realHover()
      .should('have.attr',  'src')
      .and('equal', "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E")
  })

  it('Test that users are able to login with a valid username and password', () => {

    //The webpage is accessed

    cy.visit('https://practicetestautomation.com/practice-test-login/')

    //Login

    cy.get('#username').type('student')
    cy.get('#password').type('Password123')
    cy.get('#submit').click()

    //Validates login

    cy.xpath("//h1[@class='post-title']").contains("Logged In Successfully")

    /*Of course, we would only do this type of login to validate its functionality, but if we have to
    login constantly, we would be doing so by requests, ex:

        const login = (path) => {
      cy.visit(`http://localhost:9000${path}`)
        .get('#username')
        .type('student')
        .get('#password')
        .type('Password123');
      cy.get('#submit').click();
      cy.intercept({ method: 'POST', url: 'api/login' }).as('login');
      cy.wait('@login', { timeout: 10000 });
      cy.wait(100);
    };

    */

  })

})