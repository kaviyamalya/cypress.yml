/// <reference types="cypress" /> 

describe('orange cypress', function(){

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })


    before(() => {   // runs once before all tests in the block

        cy.log('***** Test case started') 
        
        
   }) 

beforeEach(() => {  //login
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
})

afterEach(() => {  //logout
    cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
    cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
     })
 
  after(() => {  //runs once after all tests in the block
     cy.log('****** Testcase stopped')
     }) 

it('To Test Dashboard Page', () => {
    cy.get('.oxd-input').type('dash')
    cy.get('.oxd-main-menu-item').click()
})

  it('Admin check', function() {

    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
    cy.get('.--visited').click()
    cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)').click()
    cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
    cy.get('.oxd-topbar-body-nav > ul > :nth-child(4)').click()
    cy.get('.oxd-topbar-body-nav > ul > :nth-child(5)').click()
    cy.get(':nth-child(2) > .oxd-input').type('Admin')
    // cy.get('body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > i:nth-child(1)').click({force:true})
    // .should('contain','Admin')
    //cy.xpath("//div[@class='oxd-select-text-input'][normalize-space()='Admin']")
    
    cy.get('.oxd-autocomplete-text-input > input').type('Paul Collings')
    //cy.get('oxd-select-text oxd-select-text--active').select('Enabled')
    cy.get('.oxd-form-actions > .oxd-button--secondary').click({force: true})
    
  })
    
  it('pim check',function()  {
    cy.get(':nth-child(2) > .oxd-main-menu-item').click()
    cy.title().should('eq', 'OrangeHRM')
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').type('Kaviyamalya')
    cy.get(':nth-child(2) > .oxd-input').type('1000111')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click({force: true})
    cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text').click()
    cy.get('.--parent').click()
    cy.get('.oxd-dropdown-menu > :nth-child(1)').click()
    cy.get('.--parent').click()
    cy.get('.oxd-dropdown-menu > :nth-child(2)').click()
    cy.get('.--parent').click()
    cy.get('.oxd-dropdown-menu > :nth-child(3)').click()
    cy.get('.--parent').click()
    cy.get('.oxd-dropdown-menu > :nth-child(4)').click()
    cy.get('.--parent').click()
    cy.get('.oxd-dropdown-menu > :nth-child(5)').click()
    cy.get('.oxd-button').click()
    cy.get('.--visited').click()
    cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
    cy.get('.oxd-topbar-body-nav > ul > :nth-child(4)').click()
    cy.get('.oxd-autocomplete-text-input > input').type('Employee')
    cy.get('.oxd-form-actions > .oxd-button--secondary').click({force: true})

  })

  it('Leave check', function() {
  cy.get(':nth-child(3) > .oxd-main-menu-item > .oxd-text').click()
  cy.get('.oxd-topbar-body-nav > ul > :nth-child(1)').click()
  cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)').click()
  cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
  cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-link').click()
  cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
  cy.get('.oxd-dropdown-menu > :nth-child(2)').click()
  cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
  cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-link').click()
  cy.get('.oxd-topbar-body-nav > ul > :nth-child(4)').click()
  cy.get('ul[data-v-a54b5984=""] > :nth-child(5)').click()
  cy.get('.oxd-topbar-body-nav > ul > :nth-child(6)').click()
  cy.get(':nth-child(1) > li > .oxd-topbar-body-nav-tab-link').click()
  cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').click()
  cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').click()

  })


  it('To Test Time Page', () => {
    cy.get('.oxd-input').type('Time')
    cy.get('.oxd-main-menu-item > .oxd-text').click()
    cy.get('.--visited > .oxd-topbar-body-nav-tab-item').click()
    cy.get('.oxd-dropdown-menu > :nth-child(1)').click()
    cy.get('.--visited > .oxd-topbar-body-nav-tab-item').click()
    cy.get('.oxd-dropdown-menu > :nth-child(2)').click()
    cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item > .oxd-icon').click()
    cy.get('.oxd-dropdown-menu > :nth-child(1)').click()
    cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item > .oxd-icon').click()
    cy.get('.oxd-dropdown-menu > :nth-child(2)').click()
    cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item > .oxd-icon').click()
    cy.get('.oxd-dropdown-menu > :nth-child(3)').click()
    cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item > .oxd-icon').click()
    cy.get('.oxd-dropdown-menu > :nth-child(4)').click()
    cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item > .oxd-icon').click()
    cy.get('.oxd-dropdown-menu > :nth-child(1)').click()
    cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item > .oxd-icon').click()
    cy.get('.oxd-dropdown-menu > :nth-child(2)').click()
    cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item > .oxd-icon').click()
    cy.get('.oxd-dropdown-menu > :nth-child(3)').click()
    cy.get(':nth-child(4) > .oxd-topbar-body-nav-tab-item > .oxd-icon').click()
    cy.get('.oxd-dropdown-menu > :nth-child(1)').click()
    cy.get(':nth-child(4) > .oxd-topbar-body-nav-tab-item > .oxd-icon').click()
    cy.get('.oxd-dropdown-menu > :nth-child(2)').click()
    //cy.get('input[placeholder="Type for hints..."]').type('Cha')
    //cy.get('input[placeholder="Type for hints..."]').type('{enter}')

    })

  it('Recuiment check',function() {

    cy.get(':nth-child(5) > .oxd-main-menu-item > .oxd-text').click()
    cy.get('.--visited').click()
    cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)').click()

  })

  it('My info check',function() {

    cy.get(':nth-child(6) > .oxd-main-menu-item > .oxd-text').click()
    cy.get(':nth-child(7) > .oxd-main-menu-item > .oxd-text').click()
    cy.get(':nth-child(9) > .oxd-main-menu-item > .oxd-text').click()
    cy.get(':nth-child(10) > .oxd-main-menu-item > .oxd-text').click()
    // cy.get(':nth-child(6) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    // cy.get('.oxd-button--secondary').click()
    cy.go('back')
    cy.get(':nth-child(11) > .oxd-main-menu-item > .oxd-text').click()
    

  })


})
