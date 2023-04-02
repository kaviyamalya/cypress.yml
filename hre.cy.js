/// <reference types="cypress" /> 
describe('fixtures cypress', function() 

{
    before(function() {
        cy.fixture('hero').then(function(data)
        {
        this.data = data
        })
    })

    it('register', function()  {

    cy.visit('https://katalon-demo-cura.herokuapp.com/#appointment')
    cy.get('#btn-make-appointment').should('be.visible').click()
    
    //negative scenario
    //incorrect name
    cy.get('#txt-username').should('be.visible').type(this.data.Username1)
    cy.get('#txt-password').should('be.visible').type(this.data.Password1)
    cy.get('#btn-login').should('be.visible').click()
    cy.wait(2000)
    cy.get('.text-danger').contains('Login failed! Please ensure the username and password are valid.').should('be.visible')


    //incorrect pasword

    cy.get('#txt-username').should('be.visible').clear().type(this.data.Username2)
    cy.get('#txt-password').should('be.visible').clear().type(this.data.Password2)
    cy.get('#btn-login').should('be.visible').click()
    cy.wait(2000)
    cy.get('.text-danger').contains('Login failed! Please ensure the username and password are valid.').should('be.visible')


    cy.get('#txt-username').should('be.visible').clear().type(this.data.Username)
    cy.get('#txt-password').should('be.visible').clear().type(this.data.Password)
    cy.get('#btn-login').should('be.visible').click()

    cy.get('#combo_facility').should('be.visible').select('Tokyo CURA Healthcare Center')
    cy.get('#chk_hospotal_readmission').should('be.visible').check()
    cy.get('#radio_program_medicaid').should('be.visible').check()
    cy.get('#txt_visit_date').should('be.visible').click()
    cy.get('tbody > :nth-child(3) > :nth-child(4)').should('be.visible').click()
    cy.get('#txt_comment').should('be.visible').type('hi')
    cy.get('#btn-book-appointment').should('be.visible').click()
    cy.get('.text-center > .btn').should('be.visible').click()

    
})

})