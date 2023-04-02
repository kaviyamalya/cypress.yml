describe('API Test Restful book', function() {
 
    Cypress.on('uncaught:exception', function(err, runnable) {
        return false
        });


//Create a token using post method
        it('Create Token POST ', function()
        {
//creating a variable called token and assigning to values to it
           let token={
            "username" : "kaviya",
            "password" : "siva123"
           }
           //checking the response body equals to the given values
           cy.request('post','https://restful-booker.herokuapp.com/auth',token).then((response)=>
           {
              expect(response.status).equal(200)
              expect(response.body.username).equal()
              expect(response.body.password).equal()
           })
        })
        //getting the booking ids by id ,name and dates
        it(' GET-Booking Ids ',function() 
    {
      cy.request('GET','https://restful-booker.herokuapp.com/booking').then((response)=>
      {
         expect(response.status).equal(200)
      })
    
    })

    it("GET Booking ID by Filter Name",function(){ 
        cy.request('GET','https://restful-booker.herokuapp.com/booking?firstname=kaviya&lastname=siva').then(response=>
        {
           expect(response.status).equal(200)
           expect(response.body).to.be.an('array')
           
        })
    })
    it('GET list of bookings for  checkin and checkout dates', () => {
        const checkin = '2023-01-13'
        const checkout = '2023-02-21'
    
        cy.request('GET',`https://restful-booker.herokuapp.com/booking?checkin=${checkin}&checkout=${checkout}`).then(response => {
          expect(response.status).to.eq(200)
          expect(response.body).to.be.an('array')
          
        })
    })
    it('GET booking with ID ', function()
{
       cy.request('GET', 'https://restful-booker.herokuapp.com/booking/29').then((response)=>
   {
         
          expect(response.status).equal(200)
          expect(response.body.depositpaid).equal(true)
          expect(response.body).to.be.an('object')
          expect(response.body).to.have.property('firstname')//checking the responce has a property firstname
          expect(response.body).to.have.property('lastname')
          expect(response.body).to.have.property('totalprice')
          expect(response.body).to.have.property('bookingdates')
          expect(response.body).to.have.property('additionalneeds')
     
    })
})
//Creating a new booking by using post method
it('POST -Create booking ', function()
 {
    let bookingData =
    {
       "firstname" : "Kaviya",
       "lastname" : "Siva",
       "totalprice" : 2250,
       "depositpaid" : true,
       "bookingdates" : 
       {
       "checkin" : "2023-01-01",
       "checkout" : "2023-02-02"
    },
       "additionalneeds" : "Dinner"
    }
       cy.request('POST','https://restful-booker.herokuapp.com/booking', bookingData).then((response)=>
       {
          expect(response.status).to.equal(200)
          expect(response.body).to.be.an('object')
          expect(response.body).to.have.property('bookingid')
          expect(response.body.booking.firstname).equal(bookingData.firstname)
          expect(response.body.booking.lastname).equal(bookingData.lastname)
          expect(response.body.booking.totalprice).equal(bookingData.totalprice)
          expect(response.body.booking.depositpaid).equal(bookingData.depositpaid)
          expect(response.body.booking.bookingdates.checkin).to.equal(bookingData.bookingdates.checkin)
          expect(response.body.booking.bookingdates.checkout).to.equal(bookingData.bookingdates.checkout)
          expect(response.body.booking.additionalneeds).to.equal(bookingData.additionalneeds)
    })

})

})
    