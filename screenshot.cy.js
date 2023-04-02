describe('Test failure', () =>
{
    it('capture screenshot & video', ()=>
    {
        cy.visit('https://demo.opencart.com/')
        cy.screenshot('homepage')
        cy.wait(5000)
        cy.get("img[title='Your Store']").screenshot('logo')
        cy.wait(2000)
        cy.get(".btn.btn-inverse.btn-block.dropdown-toggle").screenshot('picture')
        cy.wait(2000)
        cy.get("img[alt='MacBookAir']").screenshot('picture1')
        cy.wait(2000)
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').click()
        cy.get("div[class='dropdown-menu show'] li:nth-child(2) a:nth-child(1)").click()
        cy.screenshot('Mac')
        cy.get(':nth-child(2) > .dropdown-toggle').click()
        cy.get(':nth-child(2) > .dropdown-menu > .see-all').click()
        cy.screenshot('laptop')

        //automatically capture screenshot and video on failure - only when execute through cli
        
        cy.get('li:nth-child(7) a:nth-child(1)').click()
        cy.get("div[id='content'] h2").should('have.text',"Tablets")
        cy.get(':nth-child(6) > .nav-link').click()
        cy.get('h2').should('have.text','Phones & PDAs')


    })
})