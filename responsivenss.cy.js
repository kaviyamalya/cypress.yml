describe('response',function(){
    

    it('orange login page-Desktop',function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    })

    it('orange login page-iphone x',function(){
       cy.viewport('iphone-x')
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.wait(2000)

    })

    it('orange login page-ipad mini',function(){
        cy.viewport('ipad-mini')
         cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
         cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible')
         cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible')
         cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
         cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
         cy.wait(2000)

     })

     it('orange login page-iphone-xr',function(){
        cy.viewport('iphone-xr')
         cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
         cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible')
         cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible')
         cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
         cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
         cy.wait(2000)

     })

     it('orange login page-samsung-s10',function(){
        cy.viewport('samsung-s10')
         cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
         cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible')
         cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible')
         cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
         cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
         cy.wait(2000)

     })

     it('orange login page-samsung-note9',function(){
        cy.viewport('samsung-note9')
         cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
         cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible')
         cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible')
         cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
         cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
         cy.wait(2000)

     })

     it('orange login page-macbook-11',function(){
        cy.viewport('macbook-11')
         cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
         cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible')
         cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible')
         cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
         cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
         cy.wait(2000)

     })

     it('orange login page-macbook-13',function(){
        cy.viewport('macbook-13')
         cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
         cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible')
         cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible')
         cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
         cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
         cy.wait(2000)

     })

     it('orange login page-macbook-15',function(){
        cy.viewport('macbook-15')
         cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
         cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible')
         cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible')
         cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
         cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
         cy.wait(2000)

     })

     it('orange login page-iphone 3',function(){
        cy.viewport('iphone-3')
         cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
         cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible')
         cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible')
         cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
         cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
         cy.wait(2000)

     })

     it('orange login page-iphone 4',function(){
        cy.viewport('iphone-4')
         cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
         cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible')
         cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible')
         cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
         cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
         cy.wait(2000)

     })

     it('orange login page-iphone 5',function(){
        cy.viewport('iphone-5')
         cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
         cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible')
         cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible')
         cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
         cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
         cy.wait(2000)
 
     })

     it('orange login page-iphone 6',function(){
        cy.viewport('iphone-6')
         cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
         cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible')
         cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible')
         cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
         cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
         cy.wait(2000)

     })

     it('orange login page-iphone 6+',function(){
        cy.viewport('iphone-6+')
         cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
         cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible')
         cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible')
         cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
         cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
         cy.wait(2000)

     })

     it('orange login page-iphone-se2',function(){
        cy.viewport('iphone-se2')
         cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
         cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible')
         cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible')
         cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
         cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
         cy.wait(2000)

     })
     
     it('orange login page-iphone 7',function(){
        cy.viewport('iphone-7')
         cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
         cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible')
         cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible')
         cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
         cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
         cy.wait(2000)

     })

     it('orange login page-iphone 8',function(){
        cy.viewport('iphone-8')
         cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
         cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible')
         cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible')
         cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
         cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
         cy.wait(2000)

     })
})
