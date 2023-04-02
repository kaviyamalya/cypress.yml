Cypress.on('uncaught:exception', (err, runnable) =>
 {
    return false
});
describe('API Test', ()=> 
{
    //updating a booking by creating a new booking using POST method 
    //and then updating the same booking using PUT method.
    it('Update booking test', function()
     {
        //POST request to create a new booking
      cy.request({
         method : 'POST' ,
         url : 'https://restful-booker.herokuapp.com/booking',
         headers: {
            'Content-Type': 'application/json'
          },
    body : {
        "firstname" : "Kaviya",
        "lastname" : "Siva",
        "totalprice" : 300,
        "depositpaid" : true,
        "bookingdates" : {
        "checkin" : "2023-01-01",
        "checkout" : "2022-01-03"
    },
        "additionalneeds" : "Dinner"
    }
    })
    .then(function(response){
      //checking the response body equals to the given values
           expect(response.status).to.eq(200)
           expect(response.body.booking.firstname).to.eq('Kaviya');
           expect(response.body.booking.lastname).to.eq("Siva")
           expect(response.body.booking.totalprice).to.eq(300)
           expect(response.body.booking.depositpaid).to.eq(true)
           expect(response.body.booking.bookingdates.checkin).to.eq("2023-01-01")
           expect(response.body.booking.bookingdates.checkout).to.eq("2022-01-03")
           expect(response.body.booking.additionalneeds).to.eq("Dinner")
})
.then((response) =>{
    //extracts the booking ID from the response of the POST request to use it in the PUT request
    let BookingID = response.body.bookingid
    cy.log("User ID is : " + BookingID)
    //  PUT request to update the booking with the given ID
       cy.request({
          method : 'PUT',
          url : 'https://restful-booker.herokuapp.com/booking/'+ BookingID,
         
       headers : 
       {
         'authorization' : "Basic YWRtaW46cGFzc3dvcmQxMjM="
    },
    body : {
         "firstname" : "Swarna",
         "lastname" : "Malya",
         "totalprice" : 1600,
         "depositpaid" : true,
         "bookingdates" : {
         "checkin" : "2023-02-06",
         "checkout" : "2022-02-18"
    },
        "additionalneeds" : "Snacks"
    }
 })
 .then((response)=>{
        expect(response.status).to.eq(200)
        expect(response.body.firstname).to.eq("Swarna")
        expect(response.body.lastname).to.eq("Malya")
        expect(response.body.totalprice).to.eq(1600)
        expect(response.body.depositpaid).to.eq(true)
        expect(response.body.bookingdates.checkin).to.eq("2023-02-06")
        expect(response.body.bookingdates.checkout).to.eq("2022-02-18")
        expect(response.body.additionalneeds).to.eq("Snacks")
})
})
})
it('Partial Update booking test', function() 
     {
        const requestBody = {
            
                "firstname" : "Siva",
                "lastname" : "Kumar",
                "totalprice" : 1300,
                "depositpaid" : true,
                "bookingdates" : {
                "checkin" : "2023-05-05",
                "checkout" : "2022-05-30"
            },
                "additionalneeds" : "Dinner"
            
          };
    //POST 
      cy.request({
         method : 'POST' ,
         url : 'https://restful-booker.herokuapp.com/booking',
         body : requestBody,
    })
    .then(function(response){
           expect(response.status).to.eq(200)
           expect(response.body.booking.firstname).to.eq('Siva');
           expect(response.body.booking.lastname).to.eq("Kumar")
           expect(response.body.booking.totalprice).to.eq(1300)
           expect(response.body.booking.depositpaid).to.eq(true)
           expect(response.body.booking.bookingdates.checkin).to.eq("2023-05-05")
           expect(response.body.booking.bookingdates.checkout).to.eq("2022-05-30")
           expect(response.body.booking.additionalneeds).to.eq("Dinner")
})
.then((response) =>{
    let Bookingid = response.body.bookingid
    cy.log("User ID is : " + Bookingid)
    //PATCH -applies partial modifications to a resource
    //request to update the booking
       cy.request({
          method : 'PATCH',
          url : 'https://restful-booker.herokuapp.com/booking/'+ Bookingid,
         
       headers : 
       {
         'authorization' : "Basic YWRtaW46cGFzc3dvcmQxMjM="
    },
    body : {
         "firstname" : "Usha",
         "lastname" : "Rani",
         "totalprice" : 1200,
         "depositpaid" : true,
         "bookingdates" : {
         "checkin" : "2023-03-06",
         "checkout" : "2022-03-18"
    },
        "additionalneeds" : "BreakFast"
    }
 })
 .then((response)=>{
        expect(response.status).to.eq(200)
        expect(response.body.firstname).to.eq("Usha")
        expect(response.body.lastname).to.eq("Rani")
        expect(response.body.totalprice).to.eq(1200)
        expect(response.body.depositpaid).to.eq(true)
        expect(response.body.bookingdates.checkin).to.eq("2023-03-06")
        expect(response.body.bookingdates.checkout).to.eq("2022-03-18")
        expect(response.body.additionalneeds).to.eq("BreakFast")
})
})
})

it('Delete',function(){  //delete the booking id
    cy.request({
      method: 'DELETE',
      url: 'https://restful-booker.herokuapp.com/booking/1',
      failOnStatusCode: false
    }).then((response)=>{
      expect(response.status).equal(403)
    })
  })
  it('Health Check GET ',function()  //To check the status response equal
    {
    cy.request({
        method: 'GET',
        url :'https://restful-booker.herokuapp.com/ping',
        failOnStatusCode: false
    }).then((response)=>
    {
           expect(response.status).equal(201)
})
    })
  
})