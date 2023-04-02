
describe('file upload test',()=>{
 
    it('file upload Test', ()=>{

        cy.visit('https://fineuploader.com/demos.html')
        const imagefile = "Example.jpg"
        cy.get('[name="qqfile"]').attachFile(imagefile);

  
    })
})