/// <reference types="cypress" /> 
describe('file', ()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    before(() => {   // runs once before all tests in the block

        cy.log('***** Test case started') 
        
        
   }) 
   beforeEach(() => {  
    cy.visit('https://demo.automationtesting.in/Register.html')
})

    
    it('testing', ()=>{
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
        it('testing links', ()=>{
            cy.get('.nav > :nth-child(3) > a').click()
            cy.get('.ui-grid-coluiGrid-0005 > .sortable > .ui-grid-cell-contents').click()
            cy.get('.ui-grid-pager-row-count-picker > .ng-pristine').select('20')
            cy.get(':nth-child(4) > .dropdown-toggle')
            cy.get(':nth-child(4) > .dropdown-menu > :nth-child(1) > a').click()
            cy.get('.active > .analystic').click()
            cy.get('#OKTab > .btn').click()
            cy.wait(2000)
            cy.get(':nth-child(2) > .analystic').click()
            cy.get('#CancelTab > .btn').click()
            cy.wait(2000)
            cy.get(':nth-child(3) > .analystic').click()
            cy.get('#Textbox > .btn').click()
            cy.wait(2000)
            cy.get(':nth-child(4) > .dropdown-menu > :nth-child(2) > a').click()
            cy.get('.active > .analystic').click()
            cy.get('a > .btn').click()
            cy.wait(2000)
            cy.get(':nth-child(2) > .analystic').click()
            cy.get('#Seperate > .btn').click()
            cy.wait(2000)
            cy.get(':nth-child(3) > .analystic').click()
            cy.get('#Multiple > .btn').click()
            cy.wait(2000)
            cy.get(':nth-child(4) > .dropdown-menu > :nth-child(3) > a').click()
            cy.get('.active > .analystic').click()
            cy.wait(2000)
            cy.get(':nth-child(2) > .analystic').click()
            cy.wait(2000)
        })

        it('testing widgets', ()=>{
            cy.get('.nav > :nth-child(5) > .fa').click()
            cy.get(':nth-child(5) > .dropdown-menu > :nth-child(1) > a').click()
            cy.get(':nth-child(1) > .panel-heading > .panel-title > a > b').click()
            cy.wait(1000)
            cy.get(':nth-child(2) > .panel-heading > .panel-title > a > b').click()
            cy.wait(1000)
            cy.get(':nth-child(3) > .panel-heading > .panel-title > a > b').click()
            cy.wait(1000)
            cy.get(':nth-child(4) > .panel-heading > .panel-title > a > b').click()
            cy.wait(1000)
            cy.get(':nth-child(5) > .dropdown-menu > :nth-child(2) > a').click()
            cy.get('#searchbox').type('kaviya').should('be.visible')
            cy.wait(2000)
            cy.get(':nth-child(5) > .dropdown-menu > :nth-child(3) > a').click()
            cy.get('#datepicker1').click()
            cy.get('#datepicker2').click()
            cy.wait(2000)
            cy.get(':nth-child(5) > .dropdown-menu > :nth-child(4) > a').click()
        })

        it('testing interactions', ()=>{

            cy.get('[href="Interactions.html"]')
            cy.get(':nth-child(1) > .dropdown-toggle').click()
            cy.get(':nth-child(6) > .dropdown-menu > :nth-child(2) > a').click()
            cy.get('.active > .analystic').click()
            cy.get('.deaultFunc > :nth-child(6)').click()
            cy.wait(1000)
            cy.get(':nth-child(2) > .analystic').click()
            cy.get('.SerializeFunc > :nth-child(4)').click()
            cy.wait(1000)
            cy.get(':nth-child(6) > .dropdown-menu > :nth-child(3) > a').click()
          })

          it('testing video', ()=>{

            cy.get(':nth-child(7) > .dropdown-menu > :nth-child(1) > a').click()
            cy.get('.col-xs-9 > iframe').click()
            cy.get(':nth-child(7) > .dropdown-menu > :nth-child(2) > a').click()
            cy.get('#foo').click()
          })

          it('testing others', ()=>{

            cy.get(':nth-child(8) > .dropdown-menu > :nth-child(1) > a').click()
            cy.get('textarea').type('kaviyamalya').should('be.visible')
            cy.get(':nth-child(8) > .dropdown-menu > :nth-child(2) > a').click()
            cy.get('.cke_wysiwyg_frame').type('kaviyamalya').should('be.visible')
            cy.get(':nth-child(8) > .dropdown-menu > :nth-child(3) > a').click()
            cy.get('section').should('be.visible')
            cy.get(':nth-child(8) > .dropdown-menu > :nth-child(4) > a').click()
            cy.get('.CodeMirror-line').type('kaviyamalya')

          })

          after(() => {  //runs once after all tests in the block
            
            cy.log('****** Testcase stopped')
            }) 



})
