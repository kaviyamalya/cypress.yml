/// <reference types="cypress"/>

describe('API Test', function() {
 
    Cypress.on('uncaught:exception', function(err, runnable) {
        return false
        });
//Adding pet by using post method
        it('Checking Pet details POST ', function()

//declared a variable called pet and assigning values to it
        {
            let pet=
    
    
            {
                "id": 6,
                "category": {
                    "id": 1,
                    "name": "dog"
                  },
                  "name": "Golden Retriver",
                  "photoUrls": [
                    "yyyy.com"
                  ],
                  "tags": [
                    {
                      "id": 5,
                      "name": "kaviya"
                    }
                  ],
                  "status": "available"
                }
              
    
    
              cy.request('POST', 'https://petstore.swagger.io/v2/pet', pet ).then((response)=>
    
    
              {
               expect(response.status).equal(200)//checking responce of the status
               expect(response.body.id).equal(pet.id)//checking given id matches
              
               expect(response.body.category).to.be.an('object');//calling the object in responce body
               expect(response.body.category.id).to.be.a('number');
               expect(response.body.category.name).to.equal('dog');
               expect(response.body.name).to.equal('Golden Retriver');
               expect(response.body.tags[0].name).equal(pet.tags[0].name)
               expect(response.body.tags[0].id).equal(pet.tags[0].id)
               expect(response.body.status).equal(pet.status)
               
        })
    })
    //Updating the pet details by using put method
    it('Checking Pet details  PUT ', function()


        {
            //updating the values 
            let updatepet=
    
    
            {
                "id": 7,
                "category": {
                    "id": 3,
                    "name": "cat"
                  },
                  "name": "pussy cat",
                  "photoUrls": [
                    "yy.png"
                  ],
                  "tags": [
                    {
                      "id": 6,
                      "name": "Siva"
                    }
                  ],
                  "status": "pending"
                }
              
    
    
              cy.request('PUT', 'https://petstore.swagger.io/v2/pet', updatepet ).then((response)=>
    
    
              {
               expect(response.status).equal(200)
               expect(response.body.id).equal(updatepet.id)
              
               expect(response.body.category).to.be.an('object');
               expect(response.body.category.id).to.be.a('number');
               expect(response.body.category.name).to.equal('cat');
               expect(response.body.name).to.equal('pussy cat');
               expect(response.body.photoUrls[0]).to.equal('yy.png')
               expect(response.body.tags[0].name).equal(updatepet.tags[0].name)//calling array of index 0
               expect(response.body.tags[0].id).equal(updatepet.tags[0].id)
               expect(response.body.status).equal(updatepet.status)
               
        })
    })
    //geting the pet details which are sold
    it('Checking Pet details Get ',function(){
        cy.request('GET','https://petstore.swagger.io/v2/pet/findByStatus?status=sold').then((response)=>{
            expect(response.status).equal(200)
            expect(response.body).to.be.an('array');//response boday is an array
            expect(response.body[0].status).equal('sold')
            
    })
   
})

    
//executed for the Store
   
    it('Checking Store order  POST ', function()


    {
        let store=


        {
            "id": 6,
            "petId": 122,
            "quantity": 300,
            "shipDate": "2023-12-13T04:18:03.195+0000",
            "status": "placed",
            "complete": true
          }


          cy.request('POST', 'https://petstore.swagger.io/v2/store/order', store ).then((response)=>


          {
           expect(response.status).equal(200)
           expect(response.body.id).equal(store.id)
           expect(response.body.petId).equal(store.petId)
           expect(response.body.quantity).equal(store.quantity)
           expect(response.body.shipDate).equal(store.shipDate)
           expect(response.body.status).equal(store.status)
           expect(response.body.complete).equal(store.complete)
    })
})
it('Checking Store order  Get', function()
    {
        cy.request('GET', 'https://petstore.swagger.io/v2/store/order/6').then((response)=>
        {
           expect(response.status).equal(200)
           expect(response.body.id).equal(6)
           expect(response.body.petId).equal(122)
           expect(response.body.quantity).equal(300)
           expect(response.body.shipDate).equal("2023-12-13T04:18:03.195+0000")
           expect(response.body.status).equals("placed")
           expect(response.body.complete).equal(true)
        })
    })
    it('Checking Store order  delete', function() 
    {
        cy.request('DELETE', 'https://petstore.swagger.io/v2/store/order/6').then((response) => 
        {
            expect(response.status).equal(200)
        })
    })
    //Executing get method by checking responce of the status
    it('User Logout GET',()=>{
        cy.request('GET','https://petstore.swagger.io/v2/user/logout').then((response) => 
        {
            expect(response.status).equal(200)
            expect(response.body.code).equal(200)
            expect(response.body.type).equal('unknown')
        })

    })

})

    

