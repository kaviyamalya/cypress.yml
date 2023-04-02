/// <reference types="cypress" /> 
describe('fixtures cypress', function() 

{
    before(function() {
        cy.fixture('example').then(function(data)
        {
        this.data = data
        })
    })

    it('register', function() 
    
    {
        cy.visit('https://register.rediff.com/register/register.php?FormName=user_details')
        cy.get('[width="200"] > input').type(this.data.fullName)
        cy.get('[valign="bottom"] > [type="text"]').type(this.data.rediffmailId)
        cy.get('.btn_checkavail').click()
        cy.get('#newpasswd').type(this.data.password)
        cy.get('#newpasswd1').type(this.data.retypepass)
        cy.get(':nth-child(1) > [width="185"] > input').type(this.data.alternate)
        cy.get('#mobno').type(this.data.number)
        cy.get('#tblcrtac > tbody > tr:nth-child(23) > td:nth-child(3) > select:nth-child(1)').select('06').should('have.value','06')
        cy.get('#tblcrtac > tbody > tr:nth-child(23) > td:nth-child(3) > select:nth-child(2)').select('OCT')
        cy.get('#tblcrtac > tbody > tr:nth-child(23) > td:nth-child(3) > select:nth-child(3)').select('2000').should('have.value','2000')
        cy.get(':nth-child(22) > :nth-child(1)')
        cy.get('[value="f"]').check()
        cy.get('#country').select('India')
        cy.get(':nth-child(1) > [colspan="3"] > select').select('Salem')
        cy.get('[colspan="3"] > img').click()
        cy.get('.captcha').should('be.visible')
        cy.get('#Register').click()


    })



})









