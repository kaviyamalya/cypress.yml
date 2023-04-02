class live

{

    visit()
    {
        cy.visit('https://dclive.in/')
    }
     
    //negative scenario
    email(value)
    {
        const field = cy.get('#username-4003').should('be.visible')
        field.clear()
        field.type(value)
        return this
    }

    password(value)
    {
        const field = cy.get('#user_password-4003').should('be.visible')
        field.clear()
        field.type(value)
        return this
    }

    submit()
    {
        const button = cy.get('#um-submit-btn').should('be.visible')
        button.click()
    }
     
    //positive scenario
    email1(value)
    {
        const field = cy.get('#username-4003').should('be.visible')
        field.clear()
        field.type(value)
        return this
    }

    password1(value)
    {
        const field = cy.get('#user_password-4003').should('be.visible')
        field.clear()
        field.type(value)
        return this
    }

    submit1()
    {
        const button = cy.get('#um-submit-btn').should('be.visible')
        button.click()
    }

    logo()
    {
        const button = cy.get('.et_pb_column_0_tb_header > .et_pb_module').should('be.visible')
        button.click({force: true})
    }

    visibility()
    {

        cy.get('.et_pb_text_0 > .et_pb_text_inner > h4').contains('Upcoming Shows').should('be.visible')
        cy.get('.et_pb_text_2 > .et_pb_text_inner > h4').contains('About DC LIVE').should('be.visible')
        cy.get('.et_pb_text_5 > .et_pb_text_inner > h4').contains('DC LIVE, the Favorite Joint').should('be.visible')
        cy.get('.et_pb_text_7 > .et_pb_text_inner > h4').contains('DC LIVE 2.0').should('be.visible')
        const button = cy.get('.wp-image-4223')
        button.click()

    }

    previous()
    {
        const button = cy.get('.slick-prev').should('be.visible')
        button.click()
    }

    previous1()
    {
        const button = cy.get('.slick-prev').should('be.visible')
        button.click()
    }

    next()
    {
        const button = cy.get('.slick-next').should('be.visible')
        button.click()
    }

    next1()
    {
        const button = cy.get('.slick-next').should('be.visible')
        button.click()
    }

    radio()
    {
        const button = cy.get('body > div:nth-child(9) > div:nth-child(1) > header:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > nav:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)')
        button.click()
    }

    corner()
    {
        const button = cy.get('#menu-main-menu > .et_pb_menu_page_id-2395').should('be.visible')
        button.click()
    }

    gallery()
    {
        const button = cy.get('#menu-main-menu > .et_pb_menu_page_id-2387').should('be.visible')
        button.click()
    }

    contact()
    {
        const button = cy.get('#menu-main-menu > .pa-menu-contact').should('be.visible')
        button.click()
    }

    image()
    {
        const button = cy.get('.wp-image-2741').should('be.visible')
        //button.click({force: true})
    }

    image2()
    {
        const button = cy.get('.wp-image-3774').should('be.visible')
        //button.click({force: true})
    }

    image3()
    {
        const button = cy.get('.wp-image-2740').should('be.visible')
        //button.click({force: true})
    }

    image4()
    {
        const button = cy.get('.wp-image-2737').should('be.visible')
        //button.click({force: true})
    }

    image5()
    {
        const button = cy.get('.wp-image-2738').should('be.visible')
        //button.click({force: true})
    }

    image6()
    {
        const button = cy.get('.wp-image-4271').should('be.visible')
        //button.click({force: true})
    }
    
    //negative scenario
    name1(value)
    {
        cy.get('h1').should('be.visible')
        const field = cy.get('#et_pb_contact_name_0').should('be.visible')
        field.clear()
        field.type(value)
        return this
    }

    email4(value)
    {
        const field = cy.get('#et_pb_contact_email_0').should('be.visible')
        field.clear()
        field.type(value)
        return this
    }

    message1(value)
    {
        const field = cy.get('#et_pb_contact_message_0').should('be.visible')
        field.clear()
        field.type(value)
        return this
    }

    submit3()
    {
        const button = cy.get('.et_pb_contact_submit').should('be.visible')
        
    } 

    //positive scenario 
    name(value)
    {
        
        const field = cy.get('#et_pb_contact_name_0').should('be.visible')
        cy.get('h1').should('be.visible')
        field.clear()
        field.type(value)
        return this
    }

    email2(value)
    {
        const field = cy.get('#et_pb_contact_email_0').should('be.visible')
        field.clear()
        field.type(value)
        return this
    }

    message(value)
    {
        const field = cy.get('#et_pb_contact_message_0').should('be.visible')
        field.clear()
        field.type(value)
        return this
    }

    submit2()
    {
        const button = cy.get('.et_pb_contact_submit').should('be.visible')
    }

    check()
    {
        const field = cy.get('.wp-image-4223').should('be.visible')
    }

    visibility1()
    {
        cy.get('.wp-image-66').should('be.visible')
        cy.get('.fw-bolder').contains('DesiCrew Solutions Pvt.Ltd.').should('be.visible')
        cy.get('.et_pb_button_module_wrapper > .et_pb_button').should('be.visible')
        cy.get('.et_pb_blurb_0_tb_footer > .et_pb_blurb_content > .et_pb_blurb_container > .et_pb_module_header').should('be.visible')
        cy.get('.et_pb_blurb_1_tb_footer > .et_pb_blurb_content > .et_pb_blurb_container > .et_pb_module_header').should('be.visible')
        cy.get('.et_pb_blurb_2_tb_footer > .et_pb_blurb_content > .et_pb_blurb_container > .et_pb_module_header').should('be.visible')
    }

    logout()
    {
        const button = cy.get('#menu-main-menu > .et_pb_menu_page_id-4010').should('be.visible')
        button.click()
    }


}


export default live