/// <reference types="cypress" /> 

describe('Desicrew', ()=>{

    Cypress.on('uncaught:exception', (err, runnable) => {

    return false

    })

    before(() => {

        cy.log('***** Test case started') 

    })

    beforeEach(() => {

        
        cy.visit('https://desicrew.in/')

    }) 

    after(() => {  //runs once after all tests in the block


        cy.log('****** Testcase stopped')


    }) 

    it('Home page', ()=>{

        cy.get('.mk-header-bg').should('be.visible').click()
        cy.get('#slide-1-layer-9').should('be.visible').click()
        cy.get('#sub-footer > .mk-grid').scrollIntoView({duration:3000})
        cy.go(-1)
        cy.get('.tp-rightarrow').should('be.visible').click()
        cy.get('#slide-3-layer-7').should('be.visible').click()
        cy.get('#sub-footer > .mk-grid').scrollIntoView({duration:3000})
        cy.go(-1)
        cy.get('[data-liindex="2"] > .tp-tab-title').should('be.visible').click()
        cy.get('#slide-2-layer-7').should('be.visible').click()
        cy.get('#sub-footer > .mk-grid').scrollIntoView({duration:3000})
        cy.go(-1)

        cy.get('.title-line-style > span').should('be.visible')
        cy.get('#testimonial_4 > ul.flex-direction-nav > li:nth-child(2) > a > i > svg').click()
        cy.get('#testimonial_4 > ul.flex-direction-nav > li:nth-child(2) > a > i > svg').click()
        cy.get('#testimonial_4 > ul.flex-direction-nav > li:nth-child(2) > a > i > svg').click()

        cy.get(':nth-child(2) > .wpb_raw_code > .wpb_wrapper > .card > .container > h2').should('be.visible')
        cy.get(':nth-child(2) > .wpb_raw_code > .wpb_wrapper > .card > .container > p').should('be.visible')
        cy.get(':nth-child(2) > .wpb_raw_code > .wpb_wrapper > .card > .container > .vc_general').click()
        cy.get('#sub-footer > .mk-grid').scrollIntoView({duration:3000})
        cy.go(-1)

        cy.get(':nth-child(2) > .wpb_raw_code > .wpb_wrapper > .card > .container > h2').should('be.visible')
        cy.get(':nth-child(2) > .wpb_raw_code > .wpb_wrapper > .card > .container > p').should('be.visible')
        cy.get(':nth-child(2) > .wpb_raw_code > .wpb_wrapper > .card > .container > .vc_general').click()
        cy.get('#sub-footer > .mk-grid').scrollIntoView({duration:3000})
        cy.go(-1)

        cy.get(':nth-child(1) > .wpb_column > .vc_column-inner > :nth-child(1) > .page-sec-title').should('be.visible')
        cy.get(':nth-child(1) > .inner-value').should('be.visible')
        cy.get(':nth-child(2) > .inner-value').should('be.visible')
        cy.get(':nth-child(3) > .inner-value').should('be.visible')
        cy.get(':nth-child(4) > .inner-value').should('be.visible')
        cy.get(':nth-child(5) > .inner-value').should('be.visible')

        cy.get('.vc_single_image-img').should('be.visible')
        cy.get('.vc_col-sm-3 > .vc_column-inner > :nth-child(1) > h2.vc_custom_heading').should('be.visible')
        cy.get('.vc_col-sm-3 > .vc_column-inner > :nth-child(1) > .page-sec-title').should('be.visible')
        cy.get('.vc_btn3-container > .vc_general').should('be.visible')


    })


      it('Header',()=>{

        cy.get('.mk-nav-responsive-link').click()
        cy.get('#responsive-menu-item-3179 > .menu-item-link').should('be.visible').click()
        cy.wait(1000)
        cy.get('#sub-footer > .mk-grid').scrollIntoView({duration:2000})
        cy.go(-1) 
        cy.get('.mk-nav-responsive-link').click()

        cy.get('#responsive-menu-item-3178 > .menu-item-link').should('be.visible').click()
        cy.wait(1000)
        cy.get('#sub-footer > .mk-grid').scrollIntoView({duration:2000})
        cy.go(-1)
        cy.get('.mk-nav-responsive-link').click()

        cy.get('#responsive-menu-item-3177 > .menu-item-link').should('be.visible').click()
        cy.wait(1000)
        cy.get('#sub-footer > .mk-grid').scrollIntoView({duration:2000})
        cy.go(-1)
        cy.get('.mk-nav-responsive-link').click()

        cy.get('#responsive-menu-item-3180 > .menu-item-link').should('be.visible').click()
        cy.wait(1000)
        cy.get('#sub-footer > .mk-grid').scrollIntoView({duration:2000})
        cy.go(-1)
        cy.get('.mk-nav-responsive-link').click()

        cy.get('#responsive-menu-item-3602 > .menu-item-link').should('be.visible').click()
        cy.wait(1000)
        cy.get('#sub-footer > .mk-grid').scrollIntoView({duration:2000})
        cy.go(-1)
        cy.get('.mk-nav-responsive-link').click()

        cy.get('#responsive-menu-item-3176 > .menu-item-link').should('be.visible').click()
        cy.wait(1000)
        cy.get('#sub-footer > .mk-grid').scrollIntoView({duration:2000})
        cy.go(-1)

    })


    it('Contact us',()=> {

         //negative scenario
         cy.get('#btnOpenForm').should('be.visible').click()
         cy.get('#name').should('be.visible').type('11111')
         cy.get('#email').should('be.visible').type('kaviya@gmail')
         cy.get('#message').should('be.visible').type('desicrew')
         cy.get('.accent-bg-color').should('be.visible')
         cy.get('#btnCloseForm').click()

        //positive scenario
        cy.get('#btnOpenForm').should('be.visible').click()
        cy.get('#name').should('be.visible').clear().type('kaviya')
        cy.get('#email').should('be.visible').clear().type('kaviya@gmail.com')
        cy.get('#message').should('be.visible').clear().type('desicrew')
        cy.get('.accent-bg-color').should('be.visible')
        cy.get('#btnCloseForm').click()


    })

       it('Footer',()=>{

        cy.get('#contact_info-2 > .widgettitle').should('be.visible')
        cy.get('#text-2 > .widgettitle').should('be.visible')
        cy.get('#custom_html-3 > .textwidget > .widgettitle').should('be.visible')
        cy.get('[href="https://www.algomox.com/"] > img').should('be.visible')
        cy.get('[href="https://dataloop.ai/"] > img').should('be.visible')
        cy.get('p > img').should('be.visible')
        cy.get('#text-5 > .textwidget > p').should('be.visible')
        cy.get('#social-2 > .widgettitle').should('be.visible')
        cy.get('[href="https://desicrew.in/privacy-policy/"]').click()
        cy.go(-1)
        
        cy.get('#social-2 > .widgettitle').should('be.visible')
        
        cy.get('.facebook-hover > .mk-svg-icon > path') .should('be.visible')
        
        cy.get('.instagram-hover > .mk-svg-icon') .should('be.visible')
        
        cy.get('.youtube-hover > .mk-svg-icon > path').should('be.visible')
      
        cy.get('.linkedin-hover > .mk-svg-icon').should('be.visible')
       
        cy.get('.twitter-hover > .mk-svg-icon > path').should('be.visible')
        
        cy.get('#custom_html-2 > .textwidget > .widgettitle').should('be.visible')

       })




})
