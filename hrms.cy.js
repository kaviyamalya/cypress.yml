/// <reference types="cypress" /> 

import hrms from '../PageObjects/desicrew.cy'

describe('cypress', function(){

  it('login-incorrect name', function() {

    const dp=new hrms()
    dp.visit()
    dp.name('DC48')
    dp.password('sivausha')
    dp.checkbox()
    dp.submit()
    cy.get('.error').contains('Invalid Username/Password').should('be.visible')
    cy.wait(2000)
    dp.forgot()
    dp.email('kaviyamalya@qaoncloud.com')
    dp.reset()
    dp.back()
    cy.wait(2000)
    

  })

  it('login-incorrect password', function() {

    const dp=new hrms()
    dp.visit()
    dp.name('DC4816')
    dp.password('siva')
    dp.checkbox()
    dp.submit()
    cy.get('.error').contains('Invalid Username/Password').should('be.visible')
    cy.wait(2000)
    dp.forgot()
    dp.email('546457674')
    dp.reset()
    dp.back()
    cy.wait(2000)

  })

  it('blank-username', function() {

    const dp=new hrms()
    dp.visit()
    //dp.name()
    dp.password('7464')
    dp.checkbox()
    dp.submit()
    cy.get('#Username-error').contains('Enter the username').should('be.visible')
    cy.wait(2000)
    
  })

  it('blank-password', function() {

    const dp=new hrms()
    dp.visit()
    dp.name('DC4816')
    //dp.password('7464')
    dp.checkbox()
    dp.submit()
    cy.get('#Password-error').contains('Enter the password').should('be.visible')
    cy.wait(2000)
    
  })

  it('blank-both', function() {

    const dp=new hrms()
    dp.visit()
    //dp.name('DC4816')
    //dp.password('7464')
    dp.checkbox()
    dp.submit()
    cy.get('#Username-error').contains('Enter the username').should('be.visible')
    cy.get('#Password-error').contains('Enter the password').should('be.visible')
    cy.wait(2000)

  })

  it('visible', function() {

    const dp=new hrms()
    dp.visit()
    dp.visibility()
    cy.wait(2000)

  })



})