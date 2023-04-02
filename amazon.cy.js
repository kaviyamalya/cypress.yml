/// <reference types="cypress" /> 

describe('AMAZON', ()=>{

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    before(() => {

        cy.log('***** Test case started') 

    })

    beforeEach(() => {

        cy.visit('https://www.amazon.in')
        
        cy.request("https://www.amazon.in/").should((response) => {
            expect(response.status).to.eq(200)
        }) 

    }) 

    it('Sign-up page', ()=>{

        cy.get('#nav-signin-tooltip > .nav-action-button > .nav-action-inner').click()
        cy.get('#createAccountSubmit').click()
        cy.get('#ap_customer_name').type('kaviya malya').should('be.visible')
        cy.get('#ap_phone_number').type('8667686342').should('be.visible')
        //cy.get('#ap_email').type('kaviyasiva06gmail.com')
        cy.get('#ap_password').type('kaviya06@10')
        cy.get('#continue').click()
        cy.get('#cvf-aamation-challenge-iframe').click()

    })

    it('login page', ()=>{

        
        cy.get('#nav-signin-tooltip > .nav-action-button > .nav-action-inner').click()
        cy.wait(2000)

        //negative
        cy.get('#ap_email').type('919677865421vsvs')   //incorrect number
        cy.get('.a-button-inner > #continue').click()
        //.get('#ap_password').type('sivausha')
        //cy.get('#signInSubmit').click()
        cy.contains('There was a problem').should('be.visible')
    
        cy.get('#ap_email').clear()
        cy.get('#ap_email').type('919677865421')
        cy.get('.a-button-inner > #continue').click()
        cy.get('#ap_password').type('siv')       //incorrect password
        cy.get('#signInSubmit').click()
        cy.contains('There was a problem').should('be.visible')
        
        //positive 

        cy.get('#ap_change_login_claim').click()
        cy.get('#ap_email').type('919677865421')
        cy.get('.a-button-inner > #continue').click()
        cy.get('#ap_password').type('sivausha@0514')      
        cy.get('#signInSubmit').click()

        cy.url().should('include','signin')

    })
     
     it('headers', ()=>{

        

        cy.get('#nav-logo-sprites').click()
        cy.url().should('include','nav_logo')

        cy.get('.hm-icon.nav-sprite').click()
        cy.get('#hmenu-canvas-background > .nav-sprite').click()

        cy.get('[href="/minitv?ref_=nav_avod_desktop_topnav"]').should('be.visible').click()
        cy.wait(2000)
        cy.go('back')

        cy.get('[href="/gp/bestsellers/?ref_=nav_cs_bestsellers"]').should('be.visible').click()
        cy.wait(2000)

        cy.get('[href="/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles"]').should('be.visible').click()
        cy.wait(2000)

        cy.get('[href="/gp/help/customer/display.html?nodeId=200507590&ref_=nav_cs_help"]').should('be.visible').click()
        cy.wait(2000)

        cy.get('[href="/deals?ref_=nav_cs_gb"]').click()

        cy.get('[data-csa-c-content-id="nav_ya_signin"]').trigger('mouseover')
        cy.contains('Create a Wish List').click()
        cy.url().should('include','wishlist/intro')

        cy.get('.icp-nav-link-inner').trigger('mouseover')
        cy.contains('Learn more').click({force: true})

     })


     it('product and listing1',()=>{

        
        cy.get('#twotabsearchtextbox').type('laptop bag')
        cy.get('#nav-search-submit-button').click()

        cy.get('[data-asin="B0B7X8BYQJ"] > :nth-child(1) > .s-widget-container > [data-component-type="s-impression-logger"] > .s-featured-result-item > .s-card-container > :nth-child(1) > :nth-child(1) > .sg-col-8-of-16 > :nth-child(1)')
        .should('be.visible')
        cy.wait(1000)

        cy.get('[data-asin="B0BR7QR4CF"] > :nth-child(1) > .s-widget-container > [data-component-type="s-impression-logger"] > .s-featured-result-item > .s-card-container > :nth-child(1) > :nth-child(1) > .sg-col-8-of-16 > :nth-child(1)')
        .should('be.visible')
        cy.wait(1000)

        cy.get('[data-asin="B07LFXVV3N"] > :nth-child(1) > .s-widget-container > .s-card-container > :nth-child(1) > :nth-child(1) > .sg-col-8-of-16 > :nth-child(1) > .a-spacing-small > .puis-padding-right-small > .a-size-mini > .a-link-normal > .a-size-medium')
        .should('be.visible')
        cy.wait(1000)

       
        const pop_url = "https://www.amazon.in/Essentials-Sleeve-Microsoft-Surface-Go/dp/B07LFXVV3N/ref=sr_1_4?keywords=laptop+bag&qid=1676276910&sprefix=laptop+%2Caps%2C250&sr=8-4"

        cy.window().then(win => {
        win.location.href = pop_url
        })

        cy.get('#add-to-cart-button').click()
        cy.wait(1000)



       //cy.get('#buy-now-button').click()
    
     })

     it('Product and listing2', ()=>{

       

        cy.get("#twotabsearchtextbox").type('gaming pc')
        cy.get('#nav-search-bar-form > div.nav-right > div').click()
        
        // cy.get('[data-asin="B0BQGHSSRN"] > :nth-child(1) > .s-widget-container > [data-component-type="s-impression-logger"] > .s-featured-result-item > .s-card-container > :nth-child(1) > :nth-child(1) > .sg-col-8-of-16 > :nth-child(1) > .a-spacing-small > .puis-padding-right-small > .a-size-mini > .a-link-normal > .a-size-medium')
        // .should('be.visible')
        cy.wait(1000)

        cy.get('[data-asin="B07GTHH8VJ"] > :nth-child(1) > .s-widget-container > .s-card-container > :nth-child(1) > :nth-child(1) > .sg-col-8-of-16 > :nth-child(1) > .a-spacing-small > .puis-padding-right-small > .a-size-mini > .a-link-normal > .a-size-medium')
        .should('be.visible')
        cy.wait(1000)

        cy.get('[data-asin="B091V629P9"] > :nth-child(1) > .s-widget-container > .s-card-container > :nth-child(1) > :nth-child(1) > .sg-col-8-of-16 > :nth-child(1) > .a-spacing-small > .puis-padding-right-small > .a-size-mini > .a-link-normal > .a-size-medium')
        .should('be.visible')
        cy.wait(1000)

        cy.get('[data-asin="B0816XKMHS"] > :nth-child(1) > .s-widget-container > .s-card-container > :nth-child(1) > :nth-child(1) > .sg-col-8-of-16 > :nth-child(1) > .a-spacing-small > .puis-padding-right-small > .a-size-mini > .a-link-normal > .a-size-medium')
        .should('be.visible')
        cy.wait(1000)

        cy.get('.navFooterBackToTopText').contains('Back to top').should('be.visible').scrollIntoView({duration:2000})

     })

    })




