class login
{
    visit()
    {
        cy.visit('https://mytestingthoughts.com/Sample/home.html')
    }

    fillfName(value)
    {
        const element = cy.get(':nth-child(3) > .inputGroupContainer > .input-group > .form-control')
        element.clear()
        element.type(value)
        return this
    }

    fillltName(value)
    {
        const element = cy.get(':nth-child(4) > .inputGroupContainer > .input-group > .form-control')
        element.clear()
        element.type(value)
        return this
    }

    gender(value)
    {
        const element = cy.get('#inlineRadioFemale')
        element.click()
        return this

    }

    hobbies(value)
    {
        const element = cy.get('#exampleFormControlSelect2')
        element.select(value)
        return this
    }

    department(value)
    {
        const element = cy.get('.selectContainer > .input-group > .form-control')
        element.select(value)
        return this

    }

    username(value)
    {
        const element = cy.get(':nth-child(8) > .inputGroupContainer > .input-group > .form-control')
        element.clear()
        element.type(value)
        return this
    }

    password(value)
    {
        const element = cy.get(':nth-child(9) > .inputGroupContainer > .input-group > .form-control')
        element.clear()
        element.type(value)
        return this
    }

    conpassword(value)
    {
        const element = cy.get(':nth-child(10) > .inputGroupContainer > .input-group > .form-control')
        element.clear()
        element.type(value)
        return this
    }

    email(value)
    {
        const element =cy.get(':nth-child(11) > .inputGroupContainer > .input-group > .form-control')
        element.clear()
        element.type(value)
        return this
    }

    mobile(value)
    {
        const element = cy.get(':nth-child(12) > .inputGroupContainer > .input-group > .form-control')
        element.clear()
        element.type(value)
        return this
    }

    info(value)
    {
        const element = cy.get('#exampleFormControlTextarea1')
        element.clear()
        element.type(value)
        return this
    }

    submit()
    {
        const button = cy.get('.btn')
        button.click({force: true})
    }
    
}

export default login