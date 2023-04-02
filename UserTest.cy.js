describe('Api Automation',function(){
    it('Get List Resource',function(){
        cy.request('GET','https://reqres.in/api/unknown').then((response)=>{
            expect(response.status).equal(200)
            expect(response.body.data[1].name).equal('fuchsia rose')//Getting from Index 1
        })
    })
    it('Get Delayed Responce',function(){
        cy.request('GET','https://reqres.in/api/users?delay=3').then((response)=>{
            expect(response.status).equal(200)
            expect(response.body.data[2].email).equal('emma.wong@reqres.in')
        })
    })
    it('Post Create',function(){
        var elements={
           
    "name": "kaviya",
    "job": "software engineer"
        }
         cy.request('POST','https://reqres.in/api/users',elements).then((Response)=>{
             expect(Response.status).equal(201)
             expect(Response.body.name).equal('kaviya')
             expect(Response.body.job).equal('software engineer')
         })
    })
    it('Update',function(){
        let user={
            "name": "malya",
            "job": "tester"
        }
         cy.request('PUT',"https://reqres.in/api/users/2",user).then((response)=>{
             expect(response.status).equal(200)
             expect(response.body.name).equal('malya')
             expect(response.body.job).equal('tester')
         })
    })
    it('Delete',function(){
        cy.request('DELETE','https://reqres.in/api/users/2').then((response)=>{
            expect(response.status).equal(204)
        })
    })


         

    })
     
    


