class Regist
{

    visit()
    {
        cy.visit("https://register.rediff.com/register/register.php?FormName=user_details")
    }
  
    fillName(value)
    {
        const field=cy.get('[width="200"] > input')
        field.clear()
        field.type(value)
        return this
    }

    fillEmail(value)
    {
        const field=cy.get('[valign="bottom"] > [type="text"]')
        field.clear()
        field.type(value)
        return this
    }

    check()
    {
        const button =cy.get('.btn_checkavail')
        button.click()
    }

    fillPassword(value)
    {
        const field=cy.get('#newpasswd')
        field.clear()
        field.type(value)
        return this
    }

    fillRetypePass(value)
    {
        const field=cy.get('#newpasswd1')
        field.clear()
        field.type(value)
        return this
    }

    fillAlternate(value)
    {
        const field=cy.get(':nth-child(1) > [width="185"] > input')
        field.clear()
        field.type(value)
        return this
    }

    fillMobileno(value)
    {
        const field=cy.get('#mobno')
        field.clear()
        field.type(value)
        return this
    }

    check1(value)
    {
        const field =cy.get('#tblcrtac > tbody > tr:nth-child(23) > td:nth-child(3) > select:nth-child(1)')
        field.select(value)
        return this

    }

    check2(value)
    {
        const field =cy.get('#tblcrtac > tbody > tr:nth-child(23) > td:nth-child(3) > select:nth-child(2)')
        field.select(value)
        return this

    }

    check3(value)
    {
        const field = cy.get('#tblcrtac > tbody > tr:nth-child(23) > td:nth-child(3) > select:nth-child(3)')
        field.select(value)
        return this

    }

    gender(value)
    {
        const field = cy.get('[value="f"]')
        field.click()
        return this

    }

    Country(value)
    {
        const field = cy.get('#country')
        field.select(value)
        return this
    }

    City(value)
    {
        const field = cy.get(':nth-child(1) > [colspan="3"] > select')
        field.select(value)
        return this

    }

    Captcha(value)
    {
        const field=cy.get('#tblcrtac > tbody > tr:nth-child(33) > td:nth-child(3)>input')
        field.type(value)
        return this
    }

    submit()
    {
        const button = cy.get('#Register')
        button.click()
    }

    click1()
    {
        const field = cy.get('.nomargin')
        field.click()
        return this
    }
    
    select1(value)
     {
         const field = cy.get(':nth-child(2) > [colspan="3"] > select')
         field.select(value)
         return this

     }

     answer(value)
     {
         const field = cy.get('#div_hintQS > .f14 > tbody > :nth-child(4) > [width="185"] > input')
         field.type(value)
         return this
     }

     name(value)
     {
         const field = cy.get(':nth-child(6) > :nth-child(3) > input')
         field.type(value)
         return this
     }
         
}

    export default Regist