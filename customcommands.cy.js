describe('custom', function(){

    it('login test', function()

    {
        cy.login('demo','demo')  //valid   //data driven test
        cy.title().should('be.equal','Dashboard')
        cy.get(':nth-child(4) > :nth-child(6) > .btn > .fas').click()

        cy.login('demo','demo123')  //invalid
        cy.title().should('be.equal','Administration')

        cy.login('demo567','demo')  //valid
        cy.title().should('be.equal','Administration')

    })

    it('Check navigation', function()

    {
        cy.login('demo','demo')
        cy.get(':nth-child(1) > .tile > .tile-footer > a').click()
        cy.log('Navigation..............')

    })

    it('check button', function()

    {
        cy.login('demo','demo')
        cy.get('#header-notification > .nav-link').click()
        cy.log('Checking..............')


    })
})