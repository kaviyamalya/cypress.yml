class dummy

{

    visit()
    {
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
    }

    check()
    {
        const button =cy.get('#product_549')
        button.click()
    }

    firstName(value)
    {
        const field= cy.get('#travname')
        field.type(value)
        return this
    }

    LastName(value)
    {
        const field=cy.get('#travlastname')
        field.type(value)
        return this
    }

    click()
    {
        const dob = cy.get('#dob')
        dob.click()
    }

    Month(value)
    {
        const field = cy.get('.ui-datepicker-month')
        field.select(value)
        return this

    }

    year(value)
    {
        const field = cy.get('.ui-datepicker-year')
        field.select(value)
        return this

    }

    day(value)
    {
        const day = cy.get(':nth-child(1) > :nth-child(6) > .ui-state-default')
        day.click()
    }

    gender(value)
    {
        const field = cy.get('#sex_2')
        field.click()
        return this

    }

    triptype(value)
    {
        const field =cy.get('#traveltype_2')
        field.click()
        return this

    }

    origin(value)
    {
        const field= cy.get('#fromcity')
        field.type(value)
        return this
    }

    departure(value)
    {
        const field= cy.get('#tocity')
        field.type(value)
        return this
    }

    click2()
    {
        const depart = cy.get('#departon')
        depart.click()
    }

    day2(value)
    {
        const day2 = cy.get(':nth-child(3) > :nth-child(7) > .ui-state-default')
        day2.click()
    }

    click3()
    {
        const retu = cy.get('#returndate')
        retu.click()
    }

    day3(value)
    {
        const day3 = cy.get(':nth-child(4) > :nth-child(2) > .ui-state-default')
        day3.click()
    }

    phone(value)
    {
        const field= cy.get('#billing_phone')
        field.type(value)
        return this
    }

    email(value)
    {
        const field = cy.get('#billing_email')
        field.type(value)
        return this
    }

    address(value)
    {
        const field = cy.get('#billing_address_1')
        field.clear()
        field.type(value)
        return this
    }

    city(value)
    {
        const field = cy.get('#billing_city')
        field.clear()
        field.type(value)
        return this
    }

    click4()
    {
        const con = cy.get('#select2-billing_state-container')
        con.click({force:true})
        
    }

    state(value)
    {
        const field = cy.get('body > span > span > span.select2-search.select2-search--dropdown > input')
        field.type(value).type('{enter}')
        return this
    }

    postcode(value)
    {
        const field = cy.get('#billing_postcode')
        field.type(value)
        return this
    }

    click5()
    {
        const ord = cy.get('#place_order')
        ord.click()     
        
    }



}

export default dummy
 
    
     
