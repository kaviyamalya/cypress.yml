/// <reference types="cypress" /> 

describe('Linkedin', ()=>{

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    before(() => {

        cy.log('***** Test case started') 

    })

    beforeEach(() => {

        cy.visit('https://in.linkedin.com/',{failOnStatusCode : false})
        
        }) 

    it('Headers', ()=>{

        cy.get(':nth-child(1) > .top-nav-link').should('be.visible').click()
        cy.go(-1)
        cy.wait(1000)
        cy.get(':nth-child(2) > .top-nav-link').should('be.visible').click()
        cy.go(-1)
        cy.wait(1000)
        cy.get(':nth-child(3) > .top-nav-link').should('be.visible').click()
        cy.go(-1)
        cy.wait(1000)
        cy.get(':nth-child(4) > .top-nav-link').should('be.visible').click()
        cy.go(-1)
        cy.wait(1000)
        cy.get('.nav__button-tertiary').should('be.visible').click()
        cy.go(-1)
        cy.wait(1000)
        cy.get('.nav__button-secondary').should('be.visible')
        cy.get('.li-footer__list').scrollIntoView({duration:2000})
        cy.get(':nth-child(1) > .flex-col > .text-input').should('be.visible').type('kaviyamalya3000@gmail.com')
        cy.get(':nth-child(2) > .flex-col > .text-input').should('be.visible').type('kaviya')
        //cy.get('.justify-between > .btn-md').should('be.visible').click()
        cy.get('.google-sign-in-cta-widget__btn').should('be.visible')
        cy.get('.text-input > .font-bold').should('be.visible').click()
        cy.get('.hero-cta-form > .justify-between > .font-sans').should('be.visible').click()
        cy.get('#username').should('be.visible').type('kaviyamalya3000@gmail.com')
        cy.get('#reset-password-submit-button').should('be.visible')
        cy.get('#back-button-password-reset').should('be.visible').click()
        

    })

    it('Sign up', ()=>{

        //negative scenario

        cy.get('.nav__button-tertiary').should('be.visible').click()
        cy.get('#email-or-phone').should('be.visible').type('kaviyamalya3000')
        cy.get('#password').should('be.visible').type('sivausha')
        cy.get('#join-form-submit').should('be.visible').click()
        cy.get('.artdeco-inline-feedback__message').contains('Please enter a valid email address or mobile number.')
        .should('be.visible')
        cy.wait(1000)

        cy.get('#email-or-phone').should('be.visible').clear().type('kaviyamalya3000@gmail.com')
        cy.get('#password').should('be.visible').clear().type('kavi')
        cy.get('#join-form-submit').should('be.visible').click()
        cy.get('.artdeco-inline-feedback__message').contains('Password must be 6 characters or more.')
        .should('be.visible')
        cy.wait(1000)

        cy.get('#password').should('be.visible').clear().type('kaviyamalya')
        cy.get('#join-form-submit').should('be.visible').click()

        cy.get('#first-name').should('be.visible').type('8089878')
        cy.get('#last-name').should('be.visible').type('malya')
        cy.get('#join-form-submit').should('be.visible').click()
        cy.get('.artdeco-inline-feedback__message').contains('Please enter a valid first name.')
        .should('be.visible')
        cy.wait(1000)

        cy.get('#first-name').should('be.visible').clear().type('kaviya')
        cy.get('#last-name').should('be.visible').type('1989xbjbcasnbjscabkas')
        cy.get('#join-form-submit').should('be.visible').click()
        cy.get('.artdeco-inline-feedback__message').contains('Please enter a valid last name.')
        .should('be.visible')
        cy.wait(1000)

        cy.get('#first-name').should('be.visible').clear().type('kaviya')
        cy.get('#last-name').should('be.visible').clear().type('malya')
        cy.get('#join-form-submit').should('be.visible').click()
       

    })

    it('Linkedin',()=>{

        cy.get(':nth-child(1) > .flex-col > .text-input').should('be.visible').type('kaviyamalya3000@gmail.com')
        cy.get(':nth-child(2) > .flex-col > .text-input').should('be.visible').type('sivausha@0514')
        cy.get('.justify-between > .btn-md').should('be.visible').click()
        cy.get('.global-nav__primary-items > :nth-child(1) > .app-aware-link').should('be.visible').click()
        cy.wait(1000)
        cy.get('.global-nav__primary-items > :nth-child(2) > .app-aware-link').should('be.visible').click()
        cy.wait(1000)
        cy.get('.global-nav__primary-items > :nth-child(3) > .app-aware-link').should('be.visible').click()
        cy.wait(1000)
        cy.get('.global-nav__primary-items > :nth-child(4) > .app-aware-link').should('be.visible').click()
        cy.wait(1000)
        cy.get('.global-nav__primary-items > :nth-child(5) > .app-aware-link').should('be.visible').click()
        cy.wait(1000)

        cy.get('#ember15').should('be.visible').click()
        cy.get('.global-nav__primary-items > :nth-child(1) > .app-aware-link').should('be.visible')
        cy.wait(1000)

        cy.get(':nth-child(7) > .global-nav__primary-link').should('be.visible').click()
        cy.wait(1000)

        cy.get('.search-global-typeahead').should('be.visible').click()


    })

    



})
