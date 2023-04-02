/// <reference types="cypress"/>

import dummy from '../PageObjects/dummy.cy'

describe("dummyticket",()=>{

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    it('valid registration', ()=>{

        const dt = new dummy()
        dt.visit()
        dt.check()
        dt.firstName('kaviya')
        dt.LastName('malya')
        dt.click()
        dt.Month('Oct')
        dt.year('2000')
        dt.day()
        dt.gender('Female')
        dt.triptype('Round trip')
        dt.origin('Chennai')
        dt.departure('Mumbai')
        dt.click2()
        dt.day2()
        dt.click3()
        dt.day3()
        dt.phone('9677865421')
        dt.email('kaviyasiva0610@gmail.com')
        dt.address('Ganapathi nagar')
        dt.city('rasipuram')
        dt.click4()
        dt.state('Tamil')
        dt.postcode('637408')
        dt.click5()
        

    })

    it('negative scenario', ()=>{

        const dt = new dummy()
        dt.visit()
        dt.check()
        dt.firstName('8778899')
        dt.LastName('hu892')
        dt.click()
        dt.Month('Oct')
        dt.year('2000')
        dt.day()
        dt.gender('Female')
        dt.triptype('Round trip')
        dt.origin('5746676bdfgnmgmmmm')
        dt.departure('Mumbai')
        dt.click2()
        dt.day2()
        dt.click3()
        dt.day3()
        dt.phone('dhxhhz')
        dt.email('dbbnhnmg')
        dt.address('Ganapathi nagar')
        dt.city('ras56334')
        dt.click4()
        dt.state('Tamil')
        dt.postcode('kahjjahjj')
        dt.click5()
        cy.wait(2000)

    })


 it('Passenger details',()=>{

    cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
    cy.get('.navbar-logo-img-normal').click()
    cy.get('#menu-item-13 > .nav-item-child').click()
    cy.get('.ffb-block-button-3-4 > .btn-text').contains('Program').should('be.visible').scrollIntoView({duration:2000})
    cy.get('#menu-item-574 > .nav-item-child').click()
    cy.get('#menu-item-1556 > .nav-item-child').click()
    cy.get('.ffb-icon1-2 > a > .theme-icons').should('be.visible')
    cy.get('.ffb-icon1-3 > a > .theme-icons').should('be.visible')
    cy.get('.ffb-icon1-4 > a > .theme-icons').should('be.visible')

    const pop_url = "https://www.instagram.com/dummyticket/"

        cy.window().then(win => {
        win.location.href = pop_url
        })

 })
})