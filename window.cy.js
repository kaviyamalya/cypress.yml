/// <reference types="cypress" /> 


describe('win', ()=>{

    it.only('Handling New Window', function () {
        cy.visit('https://alapanme.github.io/testing-cypress.html')
        const newUrl = "https://the-internet.herokuapp.com/"
        cy.window().then(win => {
          cy.stub(win, 'open').as('windowOpen')
        })
        cy.get('button').click()
        cy.get('@windowOpen').should('be.calledWith', newUrl)
        cy.window().then(win => {
          win.location.href = newUrl
        })
       
      })
    })
    