//Using stack trace //ide //file opener prefrence-vs
describe('Using Stack trace', () => {

    it('Verify Browserstack logo is visible', () => {

        cy.visit('https://www.browserstack.com/');

        cy.get('#logo').should('be.visible');

    })

    it('Click on Product Menu', () => {

        cy.get('#product-menu-toggle1').click();

    })

})

//Using debugger
 
//it will stop at debugger keyword
describe('Using debugger', () => {

    it('Verify Browserstack logo is visible', () => {

        cy.visit('https://www.browserstack.com/');

        cy.get('#logo').should('be.visible');

    })

    it('Click on Sign In', () => {

        cy.get('a[title="Sign In"]').then(($selectedElement) => { //must use then

            debugger;

            $selectedElement.get(0).click()

        })

    })

    //debugger might not work in expected way if not used then()

it('Click on Sign In', () => {

    cy.get('a[title="Sign In"]').click()

        debugger;
})

})

//Debug Cypress Tests using console logs cy.log() command console.log() by configuring cypress tasks

describe('Using console logs-1', () => {

    it('Verify Browserstack logo is visible', () => {

        cy.visit('https://www.browserstack.com/');

        cy.get('#logo').should('be.visible');

        cy.log("Navigated to home page")  //prints the message in the Cypress command log,console

    })

})

describe('Using console logs-2', () => {  //helps print the message in the browser console.

    it('Verify Browserstack logo is visible', () => {  //both headless and headed mode
 
        cy.visit('https://www.browserstack.com/');
             
        cy.task("log","This is console log : Navigated to home page")

    })

})

//Debug Cypress with .debug() option

describe('Using debug option', () => {

    it('Verify Browserstack logo is visible', () => {

        cy.visit('https://www.browserstack.com/');

        cy.get("a[title='Sign In']").first().debug().click() //placed before and after,stop when developer tools are open

    })

})

//Cypress debug tests with .pause() option


describe('Using pause option', () => {

    it('Verify Browserstack logo is visible', () => {

        cy.visit('https://www.browserstack.com/').pause();  //wil stop test execution to inspect the web app
        cy.get("a[title='Sign In']").first().click()    //next

    })

})

