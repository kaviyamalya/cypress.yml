/// <reference types="cypress" /> 

describe('FLIPKART', ()=>{

    Cypress.on('uncaught:exception', (err, runnable) => {

    return false

    })

    before(() => {

        cy.log('***** Test case started') 

    })

    beforeEach(() => {

        
        cy.visit('https://www.flipkart.com/')

    }) 

    after(() => {  //runs once after all tests in the block


        cy.log('****** Testcase stopped')


    }) 

    it('Sign-up page', ()=>{

        //negative scenario

        cy.get('._1_3w1N').should('be.visible').click()
        cy.get('._14Me7y').should('be.visible').click()
        cy.get('._2IX_2-').should('be.visible').type('9150')
        cy.get('._3AWRsL').should('be.visible').click()
        cy.wait(2000)

        //positive scenario

        cy.get('._2IX_2-').should('be.visible').clear()
        cy.get('._2IX_2-').should('be.visible').type('9150476077')
        cy.get('._3AWRsL').should('be.visible').click()
        cy.get('._3AWRsL').should('be.visible')

    })

     it('Login-email', ()=>{

         //negative scenario

        cy.get('._1_3w1N').should('be.visible').click()
        cy.get('._2IX_2-').should('be.visible').type('kaviyamalya@gmail.')
        cy.get('._1k3JO2 > ._2KpZ6l').should('be.visible').click()

         //positive scenario

         cy.get('._2IX_2-').should('be.visible').clear()
         cy.get('._2IX_2-').should('be.visible').type('kaviyamalya3000@gmail.com')
         cy.get('._1k3JO2 > ._2KpZ6l').should('be.visible').click()

    })

    it('Login-mobile no', ()=>{

        //negative scenario

       cy.get('._1_3w1N').should('be.visible').click()
       cy.get('._2IX_2-').should('be.visible').type('9677')
       cy.get('._1k3JO2 > ._2KpZ6l').should('be.visible').click()

        //positive scenario

        cy.get('._2IX_2-').should('be.visible').clear()
        cy.get('._2IX_2-').should('be.visible').type('9677865421')
        cy.get('._1k3JO2 > ._2KpZ6l').should('be.visible').click()

     })

     it('Validating headers',()=>{

        cy.get('._2xm1JU').should('be.visible').click()
        cy.get('._3-PJz-').should('be.visible')
        cy.get(':nth-child(5) > ._28p97w').should('be.visible').click()
        cy.get(':nth-child(5) > ._28p97w').trigger('mouseover')
        cy.contains('Notification Preference').click()
        cy.url().should('include','communication')
        cy.wait(1000)

        cy.get(':nth-child(5) > ._28p97w').trigger('mouseover')
        cy.contains('Customer Care').click()
        cy.url().should('include','help')
        cy.wait(1000)

        cy.get(':nth-child(5) > ._28p97w').trigger('mouseover')
        cy.contains('Advertise').click()
        cy.url().should('include','login')
        cy.wait(1000)
        cy.go(-1)

        cy.get('._1_3w1N').trigger('mouseover')
        cy.contains('My Profile').click()
        cy.url().should('include','account')
        cy.wait(1000)

        cy.get('._1_3w1N').trigger('mouseover')
        cy.contains('Orders').click()
        cy.url().should('include','account')
        cy.wait(1000)

        cy.get('._1_3w1N').trigger('mouseover')
        cy.contains('Flipkart').click()
        cy.url().should('include','plus')
        cy.wait(1000)

        cy.get('._1_3w1N').trigger('mouseover')
        cy.contains('Wishlist').click()
        cy.url().should('include','account')
        cy.wait(1000)

        cy.get('._1_3w1N').trigger('mouseover')
        cy.contains('Rewards').click()
        cy.url().should('include','rewards')
        cy.wait(1000)

     })

     it('Search Product-1', ()=>{

        cy.get('._3704LK').should('be.visible')
        cy.get('._3704LK').type('laptop bags')
        cy.get('.L0Z3Pu').should('be.visible').click()
        cy.get('._3uDYxP > ._2YxCDZ').select('₹500')
        cy.wait(1000)

        cy.get('._24gLJx > ._2iDkf8 > ._24_Dny').click()
        cy.wait(1000)

        cy.get('._2uz0vJ').scrollIntoView({duration:3000})
        cy.get('.yFHi8N > :nth-child(2)').click()
        cy.get(':nth-child(1) > ._2whKao').scrollIntoView({duration:3000})
        cy.get('.yFHi8N > :nth-child(4)').click()
        cy.get(':nth-child(1) > ._2whKao').scrollIntoView({duration:3000})
        cy.get('.yFHi8N > :nth-child(5)').click()
        cy.get(':nth-child(1) > ._2whKao').scrollIntoView({duration:3000})
        cy.get('[title="4★ & above"] > ._1Y4Vhm > ._2iDkf8 > ._24_Dny').click()
        cy.wait(1000)

        cy.get(':nth-child(7) > ._213eRC').click()

        cy.get('[title="50% or more"] > ._1Y4Vhm > ._2iDkf8 > ._24_Dny').click()
        cy.wait(1000)

        cy.get(':nth-child(8) > ._213eRC').click()
        cy.get('[title="12 inch"] > ._1Y4Vhm > ._2iDkf8 > ._24_Dny').click()
        cy.get(':nth-child(9) > ._213eRC').click()
        cy.get(':nth-child(10) > ._213eRC').click()
        cy.get(':nth-child(11) > ._213eRC').click()
        cy.get(':nth-child(11) > ._213eRC').click()
        cy.get(':nth-child(12) > ._213eRC').click()

     })

        it('Serach Products-2', ()=>{

        cy.get('._3704LK').should('be.visible')
        cy.get('._3704LK').type('aesthetic stationery')
        cy.get('.L0Z3Pu').should('be.visible').click()

        cy.get('._3uDYxP > ._2YxCDZ').select('₹250')
        cy.wait(1000)

        cy.get('._24gLJx > ._2iDkf8 > ._24_Dny').click()
        cy.wait(1000)

        cy.get('[title="4★ & above"] > ._1Y4Vhm > ._2iDkf8 > ._24_Dny').click()
        cy.wait(1000)

        cy.get('._2uz0vJ').scrollIntoView({duration:3000})

        cy.get(':nth-child(1) > ._2whKao').scrollIntoView({duration:3000})

        cy.get('[data-id="DIAGGC5TMAG26KBN"] > ._4ddWXP > .s1Q9rs').should('be.visible')

        const pop_url = "https://www.flipkart.com/rot-rix-notebook-a5-diary-ruled-144-pages/p/itmda1cbc81f324c?pid=DIAGGC5TMAG26KBN&lid=LSTDIAGGC5TMAG26KBNBK0U9Z&marketplace=FLIPKART&q=aesthetic+stationery&store=dgv&srno=s_1_3&otracker=search&otracker1=search&fm=Search&iid=212b4932-8610-46d9-8a79-de7b26bf6098.DIAGGC5TMAG26KBN.SEARCH&ppt=sp&ppn=sp&ssid=n5xy8w95800000001677573382436&qH=c7dd38b0a4273464"
        
        cy.window().then(win => {
        win.location.href = pop_url
        })

        cy.get('#pincodeInputId').should('be.visible').type('637408')
        cy.get('._2P_LDn').should('be.visible').click()
        cy.get('.row > :nth-child(1) > ._2KpZ6l').should('be.visible').click()
        cy.get('form > ._2KpZ6l').should('be.visible')
        cy.get(':nth-child(2) > ._1AuMiq').trigger('mousemove')

        cy.get('._2uz0vJ').scrollIntoView({duration:3000})


     })


})
