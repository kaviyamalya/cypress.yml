describe('PUT /booking/:id', () => {
    it('updates a booking successfully', () => {
      const bookingId = 133; // Replace with the actual booking ID you want to update
      const requestBody = {
        firstname: 'John',
        lastname: 'Doe',
        totalprice: 200,
        depositpaid: true,
        bookingdates: {
          checkin: '2023-03-01',
          checkout: '2023-03-05'
        },
        additionalneeds: 'Breakfast'
      };
      
      cy.request({
        method: 'PUT',
        url: `https://restful-booker.herokuapp.com/booking/${bookingId}`,
        body: requestBody,failOnStatusCode: false,
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((response) => {
        expect(response.status).to.eq(403);
expect(response.body).to.have.property('firstname', 'John');
expect(response.body).to.have.property('lastname', 'Doe');
expect(response.body).to.have.property('totalprice', 200);
expect(response.body).to.have.property('depositpaid', true);
expect(response.body.bookingdates).to.deep.equal({ checkin: '2023-03-01', checkout: '2023-03-05' });
expect(response.body).to.have.property('additionalneeds', 'Breakfast');
      });
    });
  });