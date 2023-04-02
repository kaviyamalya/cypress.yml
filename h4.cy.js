/// <reference types="cypress" /> 
describe('My first test', function() 
{ 
before(() => {   // runs once before all tests in the block

     cy.log('***** Test case started') 
     
     
}) 
beforeEach(() => {  //login
    cy.visit('https://demo.opencart.com/admin/') 
    cy.get('#input-username').type("demo")
    cy.get('#input-password').type("demo")
    cy.get('.btn').click()
    cy.get('.btn-close').click()
   
})

afterEach(() => {  //logout
    
    cy.get('#header-logout > .nav-link > .d-none').click()
     })
 
  after(() => {  //runs once after all tests in the block
     cy.log('****** Testcase stopped')
     }) 

it('Validate catalog button', function() 
{ 
    
    cy.get('[href="#collapse-1"]').click()
   
})
it('Validate the view more ', function() 
{ 
    
    cy.get(':nth-child(1) > .tile > .tile-footer > a').click()
}) 
it('Validate the notification ', function() 
{ 
    
    cy.get('#header-notification > .nav-link').click()
}) 
})
 

