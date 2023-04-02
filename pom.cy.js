/// <reference types="cypress" /> 

import login from '../PageObjects/login.cy'

describe('Pageobject', function(){

    it('valid registration', function() {

      const bt = new login()
      bt.visit()
      bt.fillfName('John')
      bt.fillltName('Oliver')
      bt.gender('Female')
      bt.hobbies('Swimming')
      bt.department('Department of Engineering')
      bt.username('kaviya06')
      bt.password('kaviya01@')
      bt.conpassword('kaviya01@')
      bt.email('john.oliver@abc.com')
      bt.mobile('(415)8265412')
      bt.info('Im very interested')
      bt.submit()

    })

    it('invalid registration', function() {

        const bt = new login()
        bt.visit()
        bt.fillfName('John') 
        bt.fillltName('Oliver') 
        bt.gender('Female')
        bt.hobbies('Swimming')
        bt.department('Department of Engineering')
        bt.username('kaviya06')
        bt.password('kaviya01@')
        bt.conpassword('kaviya01@')
        bt.email('john.oliver@abc') //invalid
        bt.mobile('8656877') //invalid
        bt.info('Im very interested')
        bt.submit()
  
      })
})