/// <reference types="cypress" /> 

describe('drag and drop', ()=>{

    Cypress.on('uncaught:exception', (err, runnable) => {

        return false
    })

    it('drag1', ()=>{

        cy.visit('https://demo.automationtesting.in/Static.html')
        cy.get('#angular').should('be.visible')
        cy.get('#angular').drag('#droparea')

    })

    it('drag2', ()=>{

        cy.visit('https://demo.automationtesting.in/Static.html')
        cy.get('#mongo').should('be.visible')
        cy.get('#mongo').drag('#droparea')
    })

    it('drag3', ()=>{

        cy.visit('https://demo.automationtesting.in/Static.html')
        cy.get('#node').should('be.visible')
        cy.get('#node').drag('#droparea')
    
        })

        it('right click & double click', ()=>{ 

            cy.visit('https://demo.guru99.com/test/simple_context_menu.html')
            cy.get('.context-menu-one').rightclick()
            cy.get('.context-menu-icon-quit').click()
            
            cy.on('window.alert',(str)=>
            {
                expect(str).to.equal('You double clicked me.. Thank You..')            
            })
            
            cy.visit('https://demo.guru99.com/test/simple_context_menu.html')
            cy.contains('Double-Click Me To See Alert').dblclick()

            })

            it.only('verify scroll', ()=>{

                cy.visit('https://www.w3schools.com/')
                cy.get(':nth-child(4) > .w3-card-2 > .w3-button').contains('Learn C++').should('be.visible')
                .scrollIntoView({duration:2000})
                cy.get('#search2').scrollIntoView({duration:1000})
                cy.get('[style="background-color:#F3ECEA;color:white;"] > div > .ws-btn').contains('Get Started for Free').should('be.visible')
                .scrollIntoView({duration:2000})
                cy.get('#myLearningFromDefault').contains('Sign Up for Free').should('be.visible')
                .scrollIntoView({duration:2000})
                cy.get('.w3-container.w3-center > [href="javascript:void(0);"] > .fa').scrollIntoView({duration:1000})
                cy.get('.w3-hover-none').scrollIntoView({duration:2000})

                
            })
          
            it('verify mouseover', ()=>{

            cy.visit('https://www.flipkart.com/')
            cy.get(':nth-child(5) > ._28p97w').trigger('mouseover')
            cy.contains('Notification Preference').click()
            cy.url().should('include','communication')
            cy.wait(1000)
            cy.get('._1_3w1N').trigger('mouseover')
            cy.contains('My Profile').click()
            cy.url().should('include','account')
            cy.wait(1000)
            cy.get('._1kidPb > :nth-child(2)').trigger('mouseover')
            cy.contains('Television').click()
            cy.url().should('include','store')
            cy.wait(1000)
            cy.get('._1kidPb > :nth-child(1)').trigger('mouseover')
            cy.contains('Mobile Accessories').click()
            cy.url().should('include','mobile')

        })

        
})