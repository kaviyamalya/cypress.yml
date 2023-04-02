class hrms
{

    visit()
    {
        cy.visit('https://desicrewdtrial.crystalhr.com/Account/Login?returnUrl=%2FHome%2FIndex#')
        cy.url().should('include', 'Account')
    }

    name(value)
    {
        const field= cy.get('#Username').should('be.visible')
        field.clear()
        field.type(value)
        return this
    }

    password(value)
    {
        const field= cy.get('#Password').should('be.visible')
        field.clear()
        field.type(value)
        return this
    }

    checkbox()
    {
        const field=cy.get('.lbl').should('be.visible')
        field.click()
    }

    submit()
    {
        const button =cy.get('#frmLogin > fieldset > .btn').should('be.visible')
        button.click()
    }

    forgot()
    {
        const button = cy.get('.forgot-password-link').should('be.visible')
        button.click()
    }

    email(value) 
    {
        const field= cy.get('#Email').should('be.visible')
        field.clear()
        field.type(value)
        return this
    }

    reset()
    {
        cy.get('#forgot-box > form > fieldset > .btn').should('be.visible')
    }

    back()
    {
        const button = cy.get('.back-to-login-link').should('be.visible')
        button.click()
    }

    visibility()
    {
        cy.get('#login-box > :nth-child(1) > .center').contains('Login').should('be.visible')
        cy.get('#frmLogin > fieldset > :nth-child(1) > .block > #CompanyId').should('be.visible')
        cy.get('.login-banner > img').should('be.visible')
        cy.get('.powered-by > img').should('be.visible')
        cy.get(':nth-child(1) > a > img').should('be.visible')
        cy.get(':nth-child(2) > a > img').should('be.visible')
    }


}


export default hrms
