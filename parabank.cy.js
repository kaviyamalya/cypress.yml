/// <reference types="cypress"/>

describe('Parabank', function() {
 
Cypress.on('uncaught:exception', function(err, runnable) {
    return false
    });

    before(() => {   // runs once before all tests in the block

        cy.log('***** Test case started') 
        
   }) 

   beforeEach(() => {  //login
    cy.visit('https://parabank.parasoft.com/parabank/admin.htm%28opens%20in%20a%20new%20tab%29', {failOnStatusCode : false})
      
   })

    after(() => {  //runs once after all tests in the block

        cy.log('****** Testcase stopped')

    }) 
 
     it('Validating the home page', ()=> {
 
        cy.get('.logo').should('be.visible').click()
        cy.get('.home > a').should('be.visible').click()
        cy.get(':nth-child(8) > a').contains('Contact Us').should('be.visible').scrollIntoView({duration:1000})

        cy.get('.captionone').contains('ATM').should('be.visible')
        cy.get('ul.services > :nth-child(2) > a').contains('Withdraw Funds').should('be.visible')
        cy.get('ul.services > :nth-child(3) > a').contains('Transfer Funds').should('be.visible')
        cy.get('ul.services > :nth-child(4) > a').contains('Check').should('be.visible')
        cy.get('ul.services > :nth-child(5) > a').contains('Deposits').should('be.visible')

        cy.get('.captiontwo').contains('Online Services').should('be.visible')
        cy.get('.servicestwo > :nth-child(2) > a').contains('Bill Pay').should('be.visible')
        cy.get('.servicestwo > :nth-child(3) > a').contains('Account').should('be.visible')
        cy.get('.servicestwo > :nth-child(4) > a').contains('Transfer Funds').should('be.visible')
        cy.get('#rightPanel > :nth-child(4) > a').click()
        cy.get(':nth-child(8) > a').contains('Contact Us').should('be.visible').scrollIntoView({duration:1000})
        cy.go(-1)

        cy.get('.captionthree').contains('02').should('be.visible')
        cy.get('.events > :nth-child(2) > a').contains('Now').should('be.visible')
        cy.get('.events > :nth-child(3) > a').contains('New').should('be.visible')
        cy.get('.events > :nth-child(4) > a').contains('Online Account').should('be.visible')
        cy.get('#rightPanel > :nth-child(7) > a').click()
        cy.get(':nth-child(8) > a').contains('Contact Us').should('be.visible').scrollIntoView({duration:1000})
        cy.go(-1)
        cy.get('.aboutus > a').should('be.visible').click()
        cy.get('.contact > a').should('be.visible').click()
        cy.get('.Solutions').should('be.visible').click()
        cy.get('.leftmenu > :nth-child(2) > a').should('be.visible').click()
        cy.get('.leftmenu > :nth-child(3) > a').should('be.visible').click()
        cy.get(':nth-child(8) > a').contains('Contact Us').should('be.visible').scrollIntoView({duration:2000})
        cy.get('.leftmenu > :nth-child(5) > a').contains('Locations').should('be.visible')
        cy.get('.leftmenu > :nth-child(6) > a').should('be.visible').click()
        cy.get(':nth-child(8) > a').contains('Contact Us').should('be.visible').scrollIntoView({duration:2000})
        cy.get(':nth-child(1) > .button').click()
        cy.get('tr > :nth-child(2) > .button').click()
        
        cy.get('[width="50%"] > .button').should('be.visible')
        cy.get('#accessMode1').should('be.visible')
        cy.get('#accessMode2').should('be.visible')
        cy.get('#accessMode3').should('be.visible')
        cy.get('#accessMode4').should('be.visible').click()
        cy.get('#adminForm > .button').should('be.visible')

     })

     it('Register -negative/positive scenario', ()=>
     {
        
        //negative

        cy.get('#loginPanel > :nth-child(3) > a').click()
        cy.get('.title').contains('Signing up is easy!')
        cy.get('input[id="customer.firstName"]').should('be.visible')
        cy.get('input[id="customer.lastName"]').type('malya554').should('be.visible')
        cy.get('input[id="customer.address.street"]').type('Ganapathi vilas rice mill street').should('be.visible')
        cy.get('input[id="customer.address.city"]').type('Ras').should('be.visible')
        cy.get('input[id="customer.address.state"]').type('Tamil').should('be.visible')
        cy.get('input[id="customer.address.zipCode"]').type('637408frwf').should('be.visible')
        cy.get('input[id="customer.phoneNumber"]').type('ghgffdgh').should('be.visible')
        cy.get('input[id="customer.ssn"]')
        cy.get('input[id="customer.username"]').type('kaviya2547').should('be.visible')
        cy.get('input[id="customer.password"]').type('butterfly06').should('be.visible')
        cy.get('#repeatedPassword').type('butterfly06').should('be.visible')
        cy.get('[colspan="2"] > .button').click()
        cy.wait(2000)

        
        //positive

        cy.get('#loginPanel > :nth-child(3) > a').click()
        cy.get('.title').contains('Signing up is easy!')
        cy.get('input[id="customer.firstName"]').type('Kaviya').should('be.visible')
        cy.get('input[id="customer.lastName"]').type('malya').should('be.visible')
        cy.get('input[id="customer.address.street"]').type('Ganapathi vilas rice mill street').should('be.visible')
        cy.get('input[id="customer.address.city"]').type('Rasipuram').should('be.visible')
        cy.get('input[id="customer.address.state"]').type('Tamilnadu').should('be.visible')
        cy.get('input[id="customer.address.zipCode"]').type('637408').should('be.visible')
        cy.get('input[id="customer.phoneNumber"]').type('9677865421').should('be.visible')
        cy.get('input[id="customer.ssn"]').type('9347871553').should('be.visible')
        cy.get('input[id="customer.username"]').type('kaviyamalya').should('be.visible')
        cy.get('input[id="customer.password"]').type('butterfly06').should('be.visible')
        cy.get('#repeatedPassword').type('butterfly06').should('be.visible')
        cy.get('[colspan="2"] > .button').click()
        cy.wait(2000)

     })

     it('Customer Login-Negative and positive scenario',()=> {

        cy.get(':nth-child(2) > .input').type('kaviya').should('be.visible')
        cy.get(':nth-child(4) > .input').type('butter').should('be.visible')
        cy.get(':nth-child(5) > .button').click()
        cy.get('.error').should('be.visible')
        cy.wait(2000)

        cy.get(':nth-child(2) > .input').type('767678').should('be.visible')
        cy.get(':nth-child(4) > .input').type('656676').should('be.visible')
        cy.get(':nth-child(5) > .button').click()
        cy.get('.error').should('be.visible')
        cy.wait(2000)

        cy.get(':nth-child(2) > .input').type('kaviyamalya').should('be.visible')
        cy.get(':nth-child(4) > .input').type('butterfly06').should('be.visible')
        cy.get(':nth-child(5) > .button').click()

     })

     it('Forgot login info,Contact Us',()=> {

        cy.get('#loginPanel > :nth-child(2) > a').click()
        cy.get('#firstName').type('Kaviya').should('be.visible')
        cy.get('#lastName').type('malya').should('be.visible')
        cy.get('input[id="address.street"]').type('Ganapathi vilas rice mill street').should('be.visible')
        cy.get('input[id="address.city"]').type('Rasipuram').should('be.visible')
        cy.get('input[id="address.state"]').type('Tamilnadu').should('be.visible')
        cy.get('input[id="address.zipCode"]').type('637408').should('be.visible')
        cy.get('#ssn').type('9347871553').should('be.visible')
        cy.get('[colspan="2"] > .button').click()
        cy.wait(2000)

        cy.get('.contact > a').click()
        cy.get('#name').type('kaviyamalya').should('be.visible')
        cy.get('#email').type('kaviyamalya@gmail.com').should('be.visible')
        cy.get('#phone').type('96369273893').should('be.visible')
        cy.get('#message').type('good').should('be.visible')
        cy.get('[colspan="2"] > .button').should('be.visible')//.click()
        cy.wait(2000)


     })

     it('Validate footer',()=> {

        cy.get('#footerPanel > :nth-child(1) > :nth-child(1) > a').should('be.visible').click()
        cy.get('#footerPanel > :nth-child(1) > :nth-child(2) > a').should('be.visible').click()
        cy.get('#footerPanel > :nth-child(1) > :nth-child(3) > a').should('be.visible').click()
        cy.get('#footerPanel > :nth-child(1) > :nth-child(4) > a').should('be.visible')
        cy.get('#footerPanel > :nth-child(1) > :nth-child(5)').should('be.visible')
        cy.get('#footerPanel > :nth-child(1) > :nth-child(6) > a').should('be.visible')
        cy.get(':nth-child(7) > a').should('be.visible').click()
        cy.get(':nth-child(1) > :nth-child(8) > a').should('be.visible').click()
        cy.get('.copyright').should('be.visible')
        cy.get('.visit > :nth-child(2) > a').should('be.visible')

        const pop_url = "https://www.parasoft.com/"

        cy.window().then(win => {
        win.location.href = pop_url

        })

     })


    })