/// <reference types="cypress" /> 
describe('file', ()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    it('upload', ()=>{
        cy.visit('https://demo.automationtesting.in/Register.html')
        cy.get(':nth-child(1) > :nth-child(2) > .form-control').type('kaviya').should('have.value','kaviya')
        cy.get(':nth-child(1) > :nth-child(3) > .form-control').type('malya').should('have.value','malya')
        cy.get('.col-md-8 > .form-control').type('nehru nagar,chennai')
        cy.get('#eid > .form-control').type('kaviya@gmail.com')
        cy.get(':nth-child(4) > .col-md-4 > .form-control').type('9887754352')
        cy.get(':nth-child(5) > .col-md-4 > :nth-child(2) > input').click()
        cy.get('#checkbox2').check()
        cy.get('#Skills').select('C').should('have.value','C')
        cy.get('#countries').select('Select Country')
        cy.get('.select2-selection').type('India').click()
        //cy.get('.select2-selection__arrow').should('have.value','India')
        cy.get('#yearbox').select('2000').should('have.value','2000')
        cy.get(':nth-child(11) > :nth-child(3) > .form-control').select('October').should('have.value','October')
        cy.get('#daybox').select('6').should('have.value','6')
        cy.get('#firstpassword').type('kaviya06')
        cy.get('#secondpassword').type('kaviya06')
        const imagefile = "Example.jpg"
        cy.get('#imagesrc').attachFile(imagefile);  //file upload
        cy.get('#submitbtn').click()
})
})