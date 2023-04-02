class Hello
{

    visit()
    {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }
  
    fillName(value)
    {
        const field= cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
        field.clear()
        field.type(value)
        return this
    }

    fillPassword(value)
    {
        const field= cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
        field.clear()
        field.type(value)
        return this
    }
    submit()
    {
        const button = cy.get('.oxd-button')
        button.click()
    }
}

export default Hello