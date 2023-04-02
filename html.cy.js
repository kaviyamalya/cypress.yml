describe('MyTestSuite', function(){

    it('Table Test', function()

    {
        cy.visit("https://demo.opencart.com/admin/")
        cy.get('#input-username').type("demo")
        cy.get('#input-password').type("demo")
        cy.get('.btn').click()
        cy.get('.btn-close').click()
        cy.get('.table').contains('td','sk patel').should('be.visible') //presence check
        cy.get('.table').contains('td','test test').should('be.visible')

    //check value present in specific row and col
         
        cy.get('table > tbody > tr:nth-child(1) > td:nth-child(4)').contains('10/01/2023').should('be.visible')
        cy.get('table > tbody > tr:nth-child(4) > td:nth-child(3)').contains('Pending').should('be.visible')

        //verify value based on condition by iterating rows
        
        cy.get('.table > tbody > tr td:nth-child(2)').each(($e, index, $list) => {
            const text=$e.text()
            if(text.includes("test test"))
            {
                cy.get('table > tbody >tr td:nth-child(3)').eq(index).then(function(tname)
                {
                    const textname= tname.text()
                    expect(textname).to.equal("Pending")
                })
            }

        })

    })
})