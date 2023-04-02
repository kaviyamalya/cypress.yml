it('Post-create',function(){
    
     
    cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/login',
        failOnStatusCode: false,
        body: {
            "email": "ve.holt@reqres.in",
            "password": "ityslicka"
        }
      })
        .its('body')
        .should('have.property', 'email', 've.holt@reqres.in')
        .should('have.property', 'password', 'ityslicka')
})