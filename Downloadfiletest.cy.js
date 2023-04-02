describe('file download test',()=>{
 
    it('file download Test', ()=>{

        cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','first.jpg')

    })
})