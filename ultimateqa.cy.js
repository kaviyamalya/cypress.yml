/// <reference types="cypress" /> 
Cypress.config('waitForAnimations', false);

describe('Ultimateqa', ()=>{

  Cypress.on('uncaught:exception',(err,runnable) =>{
    return false
  })

  before(() => {

      cy.log('***** Test case started') 

  })

  beforeEach(() => {

      cy.visit('https://ultimateqa.com/automation',{waitForAnimations:false})
      
      
      }) 
  

    it('validation', ()=>{
      
      //cy.wait(5000)
      cy.get('[data-style="minimal"]')
      // cy.get(':nth-child(1) > .formkit-input').type('kaviya')
      // cy.get(':nth-child(2) > .formkit-input').type('kaviya0610@gmail.com')
      // cy.get('.formkit-submit > span').click()
      // cy.get('.formkit-close').click()
      // cy.get('.seva-modal > .formkit-close').click()

      cy.get('.et_pb_menu__logo-wrap').click()
      cy.wait(2000)
      cy.get('#menu-item-215228 > a').contains('YouTube').should('be.visible').scrollIntoView({duration:1000})


      cy.get('#menu-home-page-menu > .et_pb_menu_page_id-217441 > a').contains('Java').should('be.visible')
      
      cy.get('#menu-home-page-menu > .et_pb_menu_page_id-216855 > a').click()
      cy.wait(2000)
      
      cy.get('#menu-home-page-menu > .et_pb_menu_page_id-217437 > [href="https://ultimateqa.com/learning/"]').click()
      cy.wait(2000)

      cy.get('#menu-home-page-menu > .et_pb_menu_page_id-215756 > a').click()
      cy.wait(2000)
      cy.go('back')

      cy.get('#menu-home-page-menu > .et_pb_menu_page_id-213448 > a').click()
      cy.wait(2000)

      cy.get('#menu-home-page-menu > .et_pb_menu_page_id-50 > [href="https://ultimateqa.com/about/"]').click()
      cy.wait(2000)
      cy.get('.et_pb_contact_submit').contains('Contact Me').should('be.visible').scrollIntoView({duration:1000})

    })

    it('Qa', ()=>{

      cy.get('.et_pb_text_inner > ul > :nth-child(1) > a').click()
      cy.get('.et_pb_button_0_wrapper > .et_pb_button').click()
      cy.get('.et_pb_button_4_wrapper > .et_pb_button').click()
      cy.get('.et_pb_button_8_wrapper > .et_pb_button').click()
      cy.get('.et_pb_button_9_wrapper > .et_pb_button').click()
      cy.get('#et_pb_contact_name_0').type('Kaviya')
      cy.get('#et_pb_contact_email_0').type('xxxx@gmail.com')
      cy.get('#et_pb_contact_message_0').type('hi')
      cy.get('#et_pb_contact_form_0 > .et_pb_contact > .et_pb_contact_form > .et_contact_bottom_container > .et_pb_contact_right > .clearfix > .input').type('10')
      cy.get('#et_pb_contact_form_0 > .et_pb_contact > .et_pb_contact_form > .et_contact_bottom_container > .et_pb_contact_submit').click()
      cy.wait(1000)
      cy.get('.et_pb_toggle_title').click()
      cy.get('#et_pb_contact_name_2').type('Kaviya')
      cy.get('#et_pb_contact_email_2').type('xxxx@gmail.com')
      cy.get('#et_pb_contact_message_2').type('hi')
      cy.get('#et_pb_contact_form_2 > .et_pb_contact > .et_pb_contact_form > .et_contact_bottom_container > .et_pb_contact_right > .clearfix > .input').type('20')
      cy.get('#et_pb_contact_form_2 > .et_pb_contact > .et_pb_contact_form > .et_contact_bottom_container > .et_pb_contact_submit').click()
      cy.wait(2000)
      cy.get('.et_pb_column_10 > .et_pb_module > #lpwtoc_widget-2 > .lwptoc > .lwptoc_i > .lwptoc_items > :nth-child(1) > :nth-child(1) > a > .lwptoc_item_label').click()


    })

    it('Fake landing page', ()=>{

      cy.get('.et_pb_text_inner > ul > :nth-child(2) > a').click()
      //cy.wait(2000)

      cy.get('.et_pb_column_0 > .et_pb_button_module_wrapper > .et_pb_button').click()
      cy.get('#menu-item-215228 > a').contains('YouTube').should('be.visible').scrollIntoView({duration:2000})
      cy.get('.et_pb_text_1 > .et_pb_text_inner')
      .contains('Class').should('be.visible').scrollIntoView({duration:2000})

      cy.get('.et_pb_text_4 > .et_pb_text_inner > h1').contains('Become an expert').should('be.visible')
      cy.get('.et_pb_text_6 > .et_pb_text_inner > h1').contains('Learn by Doing').should('be.visible')
      cy.get('.et_pb_text_8 > .et_pb_text_inner > h1').contains('Build your portfolio').should('be.visible')
      cy.get('.et_pb_text_10 > .et_pb_text_inner > h1').contains('Achieve your goals').should('be.visible')

    })


       it('Fake pricing page', ()=>{

      cy.get('.et_pb_text_inner > ul > :nth-child(3) > a').click()
      cy.get('.et_pb_column_1 > .et_pb_with_border > .et_pb_pricing_table_wrap > .et_pb_pricing_table > .et_pb_pricing_heading > .et_pb_pricing_title')
      .contains('Free Trial').should('be.visible')
      cy.get('.et_pb_column_2 > .et_pb_with_border > .et_pb_pricing_table_wrap > .et_pb_pricing_table > .et_pb_pricing_heading > .et_pb_pricing_title')
      .contains('Basic').should('be.visible')
      cy.get('.et_pb_column_3 > .et_pb_with_border > .et_pb_pricing_table_wrap > .et_pb_pricing_table > .et_pb_pricing_heading > .et_pb_pricing_title')
      .contains('Enterprise').should('be.visible')

      cy.get('.et_pb_column_1 > .et_pb_with_border > .et_pb_pricing_table_wrap > .et_pb_pricing_table > .et_pb_button_wrapper > .et_pb_button').click()
      cy.wait(2000)
      cy.get('.et_pb_column_2 > .et_pb_with_border > .et_pb_pricing_table_wrap > .et_pb_pricing_table > .et_pb_button_wrapper > .et_pb_button').click()
      cy.wait(2000)
      cy.get('.et_pb_column_3 > .et_pb_with_border > .et_pb_pricing_table_wrap > .et_pb_pricing_table > .et_pb_button_wrapper > .et_pb_button').click()
      cy.get('.et_pb_row_4 > .et_pb_column > .et_pb_button_module_wrapper > .et_pb_button').click()


    })

    it('fill out forms',()=>{

      cy.get('.et_pb_text_inner > ul > :nth-child(4) > a').click()
      
      //cy.get('#et_pb_contact_email_0').type('xxxx@gmail.com')
      cy.get('#et_pb_contact_message_0').type('hi')
      //cy.get('#et_pb_contact_form_0 > .et_pb_contact > .et_pb_contact_form > .et_contact_bottom_container > .et_pb_contact_right > .clearfix > .input').type('10')
      cy.get('#et_pb_contact_form_0 > .et_pb_contact > .et_pb_contact_form > .et_contact_bottom_container > .et_pb_contact_submit').click({force: true} )
      cy.wait(1000)
      //cy.get('#et_pb_contact_name_1').type('Kaviya')
      //cy.get('#et_pb_contact_email_1').type('xxxx@gmail.com')
      cy.get('#et_pb_contact_message_1').type('hi')
      cy.get('.clearfix > .input').type('17')
      cy.get('#et_pb_contact_form_0 > .et_pb_contact > .et_pb_contact_form > .et_contact_bottom_container > .et_pb_contact_submit').click()
      cy.wait(1000)

    })

    it('automate', ()=>{

      cy.get('.et_pb_text_inner > ul > :nth-child(5) > a').click()
      cy.get('[name="firstname"]').type('kaviya')
      cy.get('#submitForm').click()
      cy.go('back')
      cy.get('form > a').click()
      cy.get('[name="firstname"]').type('kaviya')
      cy.get('[name="lastname"]').type('malya')
      cy.get('form > [type="submit"]').click()
      cy.go('back')
      cy.get(':nth-child(9) > a').click()
      cy.get('[value="female"]').check()
      cy.get('[name="firstname"]').type('kaviya')
      cy.get('[name="lastname"]').type('malya')
      cy.get(':nth-child(16) > a').click()
      cy.get('#radio1-f').check()
      cy.get('#f1').type('kaviya')
      cy.get('#l1').type('malya')
      cy.get('#radio2-f').check()
      cy.get('#f2').type('malya')
      cy.get('#l2').type('kaviya')
      cy.get(':nth-child(18) > a').click()
      cy.get('#radio1-f').check()
      cy.get('#f1').type('kaviya')
      cy.get('#l1').type('malya')
      cy.get('#radio2-f').check()
      cy.get('#f2').type('malya')
      cy.get('#l2').type('kaviya')
      cy.get('#submit2').click()
      cy.get('#subscribe-field-blog_subscription-2').type('xxx@gmail.com')
      cy.get('.wp-block-button__link').click()

    })

    it('interaction', ()=>{

      cy.get('.et_pb_text_inner > ul > :nth-child(6) > a').contains('Login').should('be.visible')
      cy.get('.et_pb_text_inner > ul > :nth-child(7) > a').click()
      cy.get('#idExample').click()
      cy.go('back')
      cy.get('.buttonClass').click()
      cy.go('back')
      cy.get('.et_pb_text_inner > ul > :nth-child(7) > a').click()
      cy.get('.et_pb_column_3 > .et_pb_module > .et_pb_blurb_content > .et_pb_blurb_container > .et_pb_blurb_description > form > button').click()
      cy.go('back')
      cy.get('.et_pb_text_inner > ul > :nth-child(7) > a').click()
      cy.get('#simpleElementsLink').click()
      cy.go('back')
      cy.get('#et_pb_contact_name_0').type('kaviya')
      cy.get('#et_pb_contact_email_0').type('xxx@gmail.com')
      cy.get('.et_pb_contact_submit').click()
      cy.get('[value="female"]').check()
      cy.get('[value="Bike"]').check()
      cy.get('select').select('Audi')
      // cy.get('.et_pb_blurb_11 > .et_pb_blurb_content > .et_pb_blurb_container > .et_pb_blurb_description > form > #button1').click()
      // cy.go('back')
      // cy.get('.et_pb_text_inner > ul > :nth-child(7) > a').click()
      cy.get('.et_pb_blurb_14 > .et_pb_blurb_content > .et_pb_blurb_container > .et_pb_blurb_description > form > #button1').click()
      // cy.go('back')
      
    })

    it('Social media',()=>{

      cy.get('.nc_wrapper > .swp_social_panel > .swp_twitter > .nc_tweet > .iconFiller > .spaceManWilly > .sw').should('be.visible')

      const pop_url ="https://twitter.com/intent/tweet?text=Automation+Practice&url=https%3A%2F%2Fultimateqa.com%2Fautomation%2F%3Futm_source%3Dtwitter%26utm_medium%3DSocial%26utm_campaign%3DSocialWarfare&via=Nikolay_a00"
      cy.window().then(win => {
        win.location.href = pop_url
        })

      
    })



  })
 
