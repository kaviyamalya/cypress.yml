Cypress.on('uncaught:exception', (err, runnable) =>
 {
    return false
});
describe('JSON API testing',function()
{
    it('POST-Creating Comment',function()
    {
        //RESOURCES TOPIC
        //Creating a comment using post method with variable called comment and assigning values to it
        let comment=
        {
            
                "postId": 1,
                "id": 501,
                "name": "id labore ex et quam laborum",
                "email": "Eliseo@gardner.biz",
                "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
              
        }
        cy.request('POST', 'https://jsonplaceholder.typicode.com/comments', comment).then((response)=>
        {
            //checking the assigned values equals to the body
            expect(response.status).equal(201)
            expect(response.body.postId).equal(comment.postId)
            expect(response.body.id).equal(comment.id)
            expect(response.body.name).equal(comment.name)
            expect(response.body.email).equal(comment.email)
            expect(response.body.body).equal(comment.body)
        })
    })

    it('GET-Getting a Resource Albums',function()
    {
       //Getting the array of index 3 from the body and checking its userid ,id ,title are equal
        cy.request('GET', 'https://jsonplaceholder.typicode.com/albums').then((response)=>
        {
            expect(response.status).equal(200)
            expect(response.body[3].userId).equal(1)
            expect(response.body[3].id).equal(4)
            expect(response.body[3].title).equal('non esse culpa molestiae omnis sed optio')
            
        })
    })
    it('PUT -Updating Photos', function()
    {
        //Updating the photo of id 1 by changing the title url
        cy.request({
          method: 'PUT',
          url: 'https://jsonplaceholder.typicode.com/photos/1',
          failOnStatusCode: false,
        body:
        {
            id: 1,
            albumId: 1,
            title: 'Kaviya',
            url: 'https://example.com/new-photo.jpg',
            thumbnailUrl: 'https://example.com/new-photo-thumbnail.jpg'
        }
        })
        .then((response) => 
        {
            expect(response.status).equal(200)
            expect(response.body.albumId).equal(1)
            expect(response.body.id).equal(1)
            expect(response.body.title).equal('Kaviya')
            expect(response.body.url).equal("https://example.com/new-photo.jpg")
        })
    })
        it('DELETE - Users',function()
    {
        //deleting the user id 1
        cy.request('DELETE', 'https://jsonplaceholder.typicode.com/users/1').then((response)=>
        {
            expect(response.status).equal(200)
        })
    })
    // ROUTES topic
    it('GET -Posts',function()
    {
        //getting the properties from different array of indexes
        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts').then((response)=>
        {
            expect(response.status).equal(200)
            expect(response.body[0].id).equal(1)
            expect(response.body[1].title).equal("qui est esse")
            expect(response.body[1].body).equal("est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla")
            expect(response.body[2].userId).equal(1)
            expect(response.body[2].id).equal(3)
            expect(response.body[3].userId).equal(1)
            expect(response.body[3].id).equal(4)
            expect(response.body[3].title).equal("eum et est occaecati")
            expect(response.body[3].body).equal("ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit")
            expect(response.body[4].title).equal("nesciunt quas odio")
        
        })
    })
    
    it('GET-posts from single id',function()
    {
        //getting from userid 1
       
        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1').then((response)=>
        {
            expect(response.status).equal(200)
            expect(response.body.userId).equal(1)
            expect(response.body.id).equal(1)
            expect(response.body.title).equal('sunt aut facere repellat provident occaecati excepturi optio reprehenderit')
            expect(response.body.body).equal('quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto')
        })
    })
    it('GET-postid from comments',function()
    {
        //Getting test from comments
        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1/comments').then((response)=>
        {
            expect(response.status).equal(200)
            expect(response.body[2].postId).equal(1)
            expect(response.body[2].id).equal(3)
            expect(response.body[2].name).equal("odio adipisci rerum aut animi")
            expect(response.body[2].email).equal("Nikita@garfield.biz")
            expect(response.body[2].body).equal("quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione")
           
        })
    })
    it('GET method on comments API ',function()
    {
        //Get test under comments post id
        cy.request('GET', 'https://jsonplaceholder.typicode.com/comments?postId=1').then((response)=>
        {
            expect(response.status).equal(200)
            expect(response.body[4].id).equal(5)
            expect(response.body[4].name).equal("vero eaque aliquid doloribus et culpa")
            expect(response.body[4].email).equal("Hayden@althea.biz")
            expect(response.body[4].body).equal("harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et")
        })
    })
    it('POST Api test', function()
    {
        //creating the user id by post method
        cy.request({
          method: 'POST',
          url: 'https://jsonplaceholder.typicode.com/posts',
          failOnStatusCode: false,
        body:
        {
            "userId": 1,
            "id": 101,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        }
        })
        .then((response) => 
        {
            expect(response.status).equal(201)
            expect(response.body.userId).equal(1)
            expect(response.body.id).equal(101)
            expect(response.body.title).equal('sunt aut facere repellat provident occaecati excepturi optio reprehenderit')
            expect(response.body.body).equal("quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto")
        })
        })
        it('PUT Api test', function()
    {
        //updating the posts by put
        cy.request({
          method: 'PUT',
          url: 'https://jsonplaceholder.typicode.com/posts/1',
          failOnStatusCode: false,
        body:
        {
           "userId": 1,
           "id": 1,
           "title":  "Kaviya", 
           "body": "suscipit\nsuscipit recusandae consequuntur" 
        }
        })
        .then((response) => 
        {
            expect(response.status).equal(200)
            expect(response.body.userId).equal(1)
            expect(response.body.id).equal(1)
            expect(response.body.title).equal('Kaviya')
            expect(response.body.body).equal("suscipit\nsuscipit recusandae consequuntur")
        })
        })
        it('PATCH Api Test', function()
        {
            //partially modifying the upadated one
            cy.request({
              method: 'PATCH',
              url: 'https://jsonplaceholder.typicode.com/posts/1',
              failOnStatusCode: false,
           body:
           {
              "userId": 1,
              "id": 1,
              "title":  "Kaviyamalya", 
              "body": "quia et suscipit\nsuscipit recusandae" 
              
           }
           
       })
       .then((response) => 
       {
              expect(response.status).equal(200)
              expect(response.body.userId).equal(1)
              expect(response.body.id).equal(1)
              expect(response.body.title).equal('Kaviyamalya')
              expect(response.body.body).equal("quia et suscipit\nsuscipit recusandae")
           })
           })
           it('DELETE api test',function()
           {
            //deleting the postid 1
               cy.request('DELETE','https://jsonplaceholder.typicode.com/posts/1').then((response)=>
               {
                   expect(response.status).equal(200)        
               })
           })
})