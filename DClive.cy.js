
/// <reference types="cypress"/>

import live from '../PageObjects/live.cy'

describe("dclive",()=>{

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })  

    it('Validate page',()=>{

        const dc = new live()
        dc.visit()
        dc.email('kaviyamalya@gmail')
        dc.password('jhjk')
        dc.submit()
        cy.wait(2000)
        dc.email1('kaviyamalya3000@gmail.com')
        dc.password1('sivausha@0514')
        dc.submit1()
        dc.logo()
        cy.get('.et_pb_with_border').scrollIntoView({duration:2000})
        dc.visibility()
        dc.previous()
        dc.previous1()
        dc.next()
        dc.next1()
        dc.radio()
        cy.wait(2000)
        dc.corner()
        dc.gallery()
        dc.contact()
        cy.get('.et_pb_section > .et_pb_with_border').scrollIntoView({duration:2000})
        dc.image()
        dc.image2()
        dc.image3()
        dc.image4()
        dc.image5()
        dc.image6()
        dc.name1('99987')
        dc.email4('kaviyamalya3000@')
        dc.message1('Hi')
        dc.submit3()
        dc.name('kaviya')
        dc.email2('kaviyamalya3000@gmail.com')
        dc.message('Hi')
        dc.submit2()
        dc.check()
        dc.visibility1()
        dc.logout()


    })

})


