/// <reference types="cypress" /> 

import Regist from '../PageObjects/Regist.cy'

describe('fixtures cypress', function(){

  it('valid registration', function() {

    const rp=new Regist()
    rp.visit()
    rp.fillName('Kaviyamalya')
    rp.fillEmail('kaviya0610')
    rp.check()
    rp.fillPassword('Kaviya01@')
    rp.fillRetypePass('Kaviya01@')
    rp.fillAlternate('kaviya@gmail.com')
    rp.fillMobileno('9867545796')
    rp.check1('06')
    rp.check2('OCT')
    rp.check3('2000')
    rp.gender('Female')
    rp.Country('India')
    rp.City('Salem')
    rp.Captcha('WYK4')
    rp.submit()
    cy.title().should('be.equal','Rediffmail Free Unlimited Storage')

 })


    it('Alternate', function() {
  
      const rp=new Regist()
      rp.visit()
      rp.fillName('Kaviyamalya')
      rp.fillEmail('kaviya0610')
      rp.check()
      rp.fillPassword('Kaviya01@')
      rp.fillRetypePass('Kaviya01@')
      rp.click1()
      rp.select1('What is your favourite food?')
      rp.answer('Chicken')
      rp.name('siva')
      rp.fillMobileno('9867545796')
      rp.check1('06')
      rp.check2('OCT')
      rp.check3('2000')
      rp.gender('Female')
      rp.Country('India')
      rp.City('Salem')
      rp.Captcha('WYK4')
      rp.submit()
      cy.title().should('be.equal','Rediffmail Free Unlimited Storage')
  
      })

      it('invalid registration', function() {

        const rp=new Regist()
        rp.visit()
        rp.fillName('kaviya') 
        rp.fillEmail('kaviya0610')
        rp.check()
        rp.fillPassword('Kaviya01@')
        rp.fillRetypePass('Kaviya01@')
        rp.fillAlternate('kaviya@gmail.') //invalid
        rp.fillMobileno('9766645453323455') //invalid
        rp.check1('06')
        rp.check2('OCT')
        rp.check3('2000')
        rp.gender('Female')
        rp.Country('India')
        rp.City('Salem')
        rp.Captcha('WYK4') 
        rp.submit()
        cy.title().should('be.equal','Rediffmail Free Unlimited Storage')
    
     })
})