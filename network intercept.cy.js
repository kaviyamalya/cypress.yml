describe("Intercept Network Request", () => {                                  //in nw req
    beforeEach(() => {
      cy.visit("https://qaboxletstestcypresspracticesite.netlify.app/intercept.html");
    });

    it("SPY - INTERCEPT VIA SERVER-ROUTE XHR GET Request", () => { //spy,listen for matching routes,apply aliases
      cy.intercept('GET', '/users?*').as("users");                    //method,url,alias
      cy.get("#loadFiveUsersXHR").click();
      cy.wait("@users").then((obj) => {
        expect(obj.response.statusCode).to.eql(200); //nw
      })
      cy.get("#xhrusers > tbody >tr").should("have.length", 5);
      cy.wait(2000)
    });

    it("STUB - INTERCEPT VIA SERVER-ROUTE XHR GET Request", () => {     //modify fn,returns a value
        
        cy.intercept('GET','/users?*',).as("users");
    
        cy.get("#loadThreeUsersXHR").click();
        cy.wait("@users").then((obj) => {
            expect(obj.response.statusCode).to.eql(200);
          })
        cy.get("#xhrusers > tbody >tr").should("have.length", 3);
        cy.wait(2000)
      });
  
    it("SPY - INTERCEPT VIA SERVER-ROUTE XHR POST Request", () => {
      
      cy.intercept("POST", "/users").as("users");
  
      const user = {
        name: "kaviya",
        email: "kaviya.com",
      };
  
      cy.get("#xhrname").type(user.name);
      cy.get("#xhremail").type(user.email);
      cy.get("#xhrbtn").click();
  
      cy.wait("@users").then((xhr) => {
        expect(xhr.response.statusCode).to.eql(201);
        expect(xhr.response.body.name).to.eql(user.name);
        expect(xhr.response.body.email).to.eql(user.email);
      });
      cy.get("#xhrspan").should("contain.text", `${user.name} - ${user.email}`);
      cy.wait(2000)
    });
  
    it("SPY - Intercept FETCH GET Request - 3 Users", () => {
      cy.intercept({
        pathname: "/users",
  
        query: {
          _limit: "3",
        },
      }).as("users");
  
      cy.get("#loadThreeUsersFETCH").click();
  
      cy.wait("@users")
        .its("response.body")
        .should("have.length", 3);
  
      cy.get("#fetchusers > tbody >tr").should("have.length", 3);
      cy.wait(2000)
    });
  
    it("STUB - Intercept FETCH GET Request - 3 Users", () => {
      cy.intercept(
        {
          pathname: "/users",
          query: {
            _limit: "3",
          },
        },
        { fixture: "users.json" }
      ).as("users");
  
      cy.get("#loadThreeUsersFETCH").click();
      cy.wait("@users")
        .its("response.body")
        .should("have.length", 3);
  
      cy.get("#fetchusers > tbody >tr").should("have.length", 3);
      cy.wait(2000)
    });
  
    it("SPY - Intercept FETCH GET Request - 5 Users", () => {
      cy.intercept({
        pathname: "/users",
        query: {
          _limit: "5",
        },
      }).as("users");
  
      cy.get("#loadFiveUsersFETCH").click();
      cy.wait("@users")
        .its("response.body")
        .should("have.length", 5);
      cy.get("#fetchusers > tbody >tr").should("have.length", 5);
      cy.wait(2000)
    });
  
    it("SPY - Intercept FETCH GET Request - Single User", () => {
     
      cy.intercept({
        pathname: "/users",
        query: {
          _limit: "1",
        },
      }).as("users");


      cy.get("#loadSpecificUserFETCH").click();
    //   //cy.wait("@users")
    //     .its("response.body")
    //     .should("have.length", 1);
      cy.get("#fetchusers > tbody >tr").should("have.length", 1);
      cy.wait(2000)
    });
  
    it("SPY - Intercept FETCH POST Request", () => {
      const user = {
        name: "Kaviya",
        email: "kaviya.com",
      };
  
      cy.intercept({
        method: "POST",
        pathname: "/users",
      }).as("users");
  
      cy.get("#fetchname").type(user.name);
      cy.get("#fetchemail").type(user.email);
      cy.get("#fetchbtn").click();
      cy.wait("@users").then((obj) => {
        expect(obj.response.statusCode).to.eql(201);
        expect(obj.response.body.name).to.eql(user.name);
        expect(obj.response.body.email).to.eql(user.email);
      });
      cy.get("#fetchspan").should("contain.text", `${user.name} - ${user.email}`);
      cy.wait(2000)
    });
  });