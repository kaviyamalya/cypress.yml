let rowsLength;
describe ('Data Driven Testing Using Excel FIle', () =>{
  before(() => {
     cy.task('readXlsx', { file: 'cypress/fixtures/excelData.xlsx', sheet: "Sheet1" }).then((rows) => {
        rowsLength = rows.length;
        cy.writeFile("cypress/fixtures/xlsxData.json", {rows})
      })
        cy.visit("https://angular-7-registration-login-example.stackblitz.io/login?returnUrl=%2F");
        cy.wait(10000)
        cy.get('button').click();
      })
    it ('Data Driven: Register User', () => {
      cy.fixture('xlsxData').then((data) => {
         for ( let i = 0; i < rowsLength; i++) {
           cy.get('.btn-link').click();
            cy.url().should('include', '/register').then(()=>{
            cy.get('body > app > div.jumbotron > div > div > div > ng-component > form > div:nth-child(1) > input')
            .clear().type(data.rows[i].firstName);
            cy.get('body > app > div.jumbotron > div > div > div > ng-component > form > div:nth-child(2) > input')
            .clear().type(data.rows[i].lastName);
            cy.get('body > app > div.jumbotron > div > div > div > ng-component > form > div:nth-child(3) > input')
            .clear().type(data.rows[i].username);
            cy.get('body > app > div.jumbotron > div > div > div > ng-component > form > div:nth-child(4) > input')
            .clear().type(data.rows[i].password);
            cy.get('.btn-primary').click();
            cy.get('.alert').should('have.text', data.rows[i].message);
          })
        }
      })     
     })
    })
