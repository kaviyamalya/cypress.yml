/// <reference types="cypress"/>

describe('Compendium', function() {
 
    Cypress.on('uncaught:exception', function(err, runnable) {
        return false
        });

        before(() => {   // runs once before all tests in the block

            cy.log('***** Test case started') 
            
       }) 
    
       beforeEach(() => {  //login
        cy.visit("https://compendiumdev.co.uk/")
          
       })
    
        after(() => {  //runs once after all tests in the block
    
            cy.log('****** Testcase stopped')
    
        }) 

        it('Validating headers', ()=> {

            cy.get('.logo > a > img').should('be.visible').click()
            cy.get('#cssmenu > ul > :nth-child(1) > a').should('be.visible').click()
            cy.get('#cssmenu > ul > :nth-child(2) > a').should('be.visible').click()
            cy.wait(2000)
            cy.get('#cssmenu > ul > :nth-child(3) > a').should('be.visible')

            const pop_url = "https://www.eviltester.com/page/emaillist/"
            cy.window().then(win => {
            win.location.href = pop_url
            })
            cy.wait(2000)

            cy.visit("https://compendiumdev.co.uk/")

            cy.get('#cssmenu > ul > :nth-child(4) > a').should('be.visible')

            const pop1_url = "https://www.eviltester.com/blog/"
            cy.window().then(win => {
            win.location.href = pop1_url
            })
            cy.wait(2000)

            cy.visit("https://compendiumdev.co.uk/")

            cy.get('#cssmenu > ul > :nth-child(5) > a').should('be.visible')

            const pop2_url = "https://talotics.com/"
            cy.window().then(win => {
            win.location.href = pop2_url
            })
            cy.wait(2000)
            cy.visit("https://compendiumdev.co.uk/")

            cy.get('.topright > .social-media-icons > p > [href="/#contactus"] > img').should('be.visible')
            .click()
            cy.wait(1000)
            cy.get("div[class='topright'] a:nth-child(2)").
            should('have.attr','href').and('include','https://twitter.com/eviltester')
            cy.get("div[class='topright'] a:nth-child(3)").
            should('have.attr','href').and('include','https://www.youtube.com/subscription_center?add_user=EvilTesterVideos')
            cy.get("div[class='topright'] a:nth-child(4)").
            should('have.attr','href').and('include','https://uk.linkedin.com/in/eviltester')
            cy.get("div[class='topright'] a:nth-child(5)").
            should('have.attr','href').and('include','https://github.com/eviltester')
            cy.get("div[class='topright'] a:nth-child(6)").
            should('have.attr','href').and('include','https://uk.pinterest.com/eviltester/')
            cy.get("div[class='topright'] a:nth-child(7)").
            should('have.attr','href').and('include','https://www.instagram.com/eviltester/')
            cy.get("div[class='topright'] a:nth-child(8)").
            should('have.attr','href').and('include','https://www.facebook.com/eviltester/')
            cy.get("div[class='topright'] a:nth-child(9)").
            should('have.attr','href').and('include','https://www.eviltester.com/index.xml')

        })

        it('Consulting,published books', ()=>{
            cy.get('h1').contains('Consultancy, Publishing, Digital Marketing and Software Development').should('be.visible')
            cy.get('.pageintro > .simpleThumbGrid > :nth-child(2)').contains('portfolio site lists our main products').should('be.visible')
            cy.get('.simpleThumbGrid > ul > :nth-child(1) > a').should('be.visible')
            .should('have.attr', 'href').and('include', 'https://eviltester.com')
            cy.get('.simpleThumbGrid > ul > :nth-child(2) > a').should('be.visible')
            .should('have.attr', 'href', 'https://talotics.com')

            //published books

            cy.get('#published-books').contains('Published Books').should('be.visible')
            cy.get(':nth-child(3) > p').contains('Books published by Compendium Developments Ltd').should('be.visible')
            cy.get('[href="https://www.eviltester.com/page/books/java-for-testers/"] > img').should('be.visible')
            const pop3_url = "https://www.eviltester.com/page/books/java-for-testers/"
            cy.window().then(win => {
            win.location.href = pop3_url
            })
            cy.wait(2000)

            cy.visit("https://compendiumdev.co.uk/")

            cy.get('body > div.fullpage > main > article > div:nth-child(3) > a:nth-child(2)')
            .should('have.attr', 'href').and('include', 'https://www.eviltester.com/page/books/java-for-testers/')
            cy.get('body > div.fullpage > main > article > div:nth-child(3) > a:nth-child(3)')
            .should('be.visible').should('have.attr', 'href').and('include', 'https://www.eviltester.com/page/deareviltester/')
            cy.get('body > div.fullpage > main > article > div:nth-child(3) > a:nth-child(4)')
            .should('be.visible').should('have.attr', 'href').and('include', 'https://www.eviltester.com/page/books/automating-testing-api-casestudy/')
            cy.get('body > div.fullpage > main > article > div:nth-child(3) > a:nth-child(5)')
            .should('be.visible').should('have.attr', 'href').and('include', 'https://www.therearehats.com')
            cy.get('body > div.fullpage > main > article > div:nth-child(3) > a:nth-child(6)')
            .should('be.visible').should('have.attr', 'href').and('include', 'https://www.amazon.co.uk/dp/1914256034')
            cy.get('body > div.fullpage > main > article > div:nth-child(3) > a:nth-child(7)')
            .should('be.visible').should('have.attr', 'href').and('include', 'https://www.amazon.co.uk/dp/1914256050')
            cy.get('body > div.fullpage > main > article > div:nth-child(3) > a:nth-child(8)')
            .should('be.visible').should('have.attr', 'href').and('include', 'https://www.amazon.co.uk/dp/107828914X')

            //free books

            cy.get(':nth-child(4) > p').contains('following books are free to download and read').should('be.visible')

            cy.get('body > div.fullpage > main > article > div:nth-child(4) > a:nth-child(2)')
            .should('be.visible').should('have.attr', 'href').and('include', 'https://www.eviltester.com/page/ebook/hacking-javascript-free-ebook/')
            cy.get('body > div.fullpage > main > article > div:nth-child(4) > a:nth-child(3)')
            .should('be.visible').should('have.attr','href').and('include','https://www.eviltester.com/page/books/selenium-simplified/')
            cy.get('body > div.fullpage > main > article > div:nth-child(4) > a:nth-child(4)')
           .should('be.visible').should('have.attr','href').and('include', 'https://www.eviltester.com/page/books/#migrating-selenium-1-to-selenium-2')
            cy.get('body > div.fullpage > main > article > div:nth-child(4) > a:nth-child(5)')
            .should('be.visible')  .should('have.attr', 'href').and('include', 'https://www.eviltester.com/page/books/#an-interactive-cobol-interpreter-and-jsp-debugger')


        })


         it('online training', ()=> {

           cy.get('[href="https://www.eviltester.com/page/onlinetraining/javawebdriver/"] > img').should('be.visible')

                 const pop4_url = "https://www.eviltester.com/page/onlinetraining/javawebdriver/"
                 cy.window().then(win => {
                 win.location.href = pop4_url
                })
                cy.wait(2000)

                cy.visit("https://compendiumdev.co.uk/")

                cy.get('[href="https://www.eviltester.com/page/onlinetraining/courses/#selenium-webdriver-support-classes-with-java"] > img').should('be.visible')

                const pop5_url = "https://www.eviltester.com/page/onlinetraining/courses/#selenium-webdriver-support-classes-with-java"
                cy.window().then(win => {
                win.location.href = pop5_url
                })
                cy.wait(2000)
    
                cy.visit("https://compendiumdev.co.uk/")

                cy.get('body > div.fullpage > main > article > div:nth-child(6) > a:nth-child(3)').should('be.visible')
                .should('have.attr', 'href').and('include', 'https://www.eviltester.com/page/onlinetraining/courses/#selenium-webdriver-synchronisation')
    
                cy.get('body > div.fullpage > main > article > div:nth-child(6) > a:nth-child(4)').should('be.visible')
                .should('have.attr', 'href').and('include', 'https://www.eviltester.com/page/onlinetraining/techwebtesting101/')
                
                cy.get('body > div.fullpage > main > article > div:nth-child(6) > a:nth-child(5)').should('be.visible')
                .should('have.attr', 'href').and('include', 'https://www.eviltester.com/page/onlinetraining/eviltestertalks/')
                
                cy.get('body > div.fullpage > main > article > div:nth-child(6) > a:nth-child(6)').should('be.visible')
                .should('have.attr', 'href').and('include', 'https://www.eviltester.com/page/onlinetraining/getyourmessageout/')
                
                cy.get('body > div.fullpage > main > article > div:nth-child(6) > a:nth-child(7)').should('be.visible')
                .should('have.attr', 'href').and('include', 'https://www.eviltester.com/page/onlinetraining/testabilityaudit/')
                
                cy.get('body > div.fullpage > main > article > div:nth-child(6) > a:nth-child(8)').should('be.visible')
                .should('have.attr', 'href').and('include', 'https://www.eviltester.com/page/onlinetraining/protectthesquare/')
                
                cy.get('body > div.fullpage > main > article > div:nth-child(6) > a:nth-child(9)').should('be.visible')
                .should('have.attr', 'href').and('include', 'https://testautomationu.applitools.com/automating-in-the-browser-using-javascript/')
                
                cy.get('body > div.fullpage > main > article > div:nth-child(6) > a:nth-child(10)').should('be.visible')
                .should('have.attr', 'href').and('include','https://www.eviltester.com/page/onlinetraining/howitestweb-patreon/')

                cy.get(':nth-child(6) > p > a').should('be.visible')

                const pop6_url = "https://www.eviltester.com/page/onlinetraining/courses/"
                cy.window().then(win => {
                win.location.href = pop6_url
                })
                cy.wait(2000)
               
            })


         it('Featured',()=>{

                cy.get('#featured-application-portfolio').contains('Featured Application Portfolio').should('be.visible')

                cy.get(':nth-child(9) > :nth-child(1) > a').should('be.visible')
                .should('have.attr', 'href', 'https://chatterscan.com')
                cy.get(':nth-child(9) > :nth-child(2) > a') .should('be.visible')
                .should('have.attr', 'href', 'https://anywaydata.com')
                cy.get(':nth-child(9) > :nth-child(3) > a').should('be.visible')
                .should('have.attr', 'href', 'https://apichallenges.herokuapp.com/')
                cy.get(':nth-child(9) > :nth-child(4) > a').should('be.visible')
                .should('have.attr', 'href', 'https://thepulper.herokuapp.com/')
                cy.get(':nth-child(9) > :nth-child(5) > a').should('be.visible')
                .should('have.attr', 'href', 'https://testpages.herokuapp.com/')
                cy.get(':nth-child(9) > :nth-child(6) > a').should('be.visible')
                .should('have.attr', 'href', 'https://eviltester.github.io/TestingApp/index.html')
                cy.get(':nth-child(9) > :nth-child(7) > a').should('be.visible')
                .should('have.attr', 'href', 'https://talotics.com/apps/textimagertool/text-imager-tool/')
                cy.get(':nth-child(9) > :nth-child(8) > a').should('be.visible')
                .should('have.attr', 'href', 'https://talotics.com/apps/tweetstormer/tweetstorm-tool/')

                cy.get(':nth-child(11) > :nth-child(1) > p > a').should('be.visible')
                const pop7_url = "https://talotics.com/apps/"
                cy.window().then(win => {
                win.location.href = pop7_url
                })
                cy.wait(2000)

                cy.visit("https://compendiumdev.co.uk/")

                const pop8_url = "https://www.eviltester.com/page/tools/"
                cy.window().then(win => {
                win.location.href = pop8_url
                })
                cy.wait(2000)

            })

         it('Footer',()=>{

                cy.get(':nth-child(1) > ul > :nth-child(1) > strong > a').should('be.visible')
                .should('have.attr', 'href').and('include', '/')
                
                cy.get('.simpleThumbGrid > :nth-child(1) > ul > :nth-child(2) > a').should('be.visible')
                .should('have.attr', 'href').and('include', '/#contactus')
               
                cy.get('.simpleThumbGrid > :nth-child(1) > ul > :nth-child(3) > a').should('be.visible')
                .should('have.attr', 'href').and('include', 'https://www.eviltester.com/page/privacy/')
               
                cy.get(':nth-child(4) > strong').contains('Blogs').should('be.visible')

                cy.get('.simpleThumbGrid > :nth-child(1) > ul > :nth-child(5) > a').should('be.visible')
                .should('have.attr', 'href').and('include', 'https://eviltester.com/blog')

                cy.get('.simpleThumbGrid > :nth-child(1) > ul > :nth-child(6) > a').should('be.visible')
                .should('have.attr', 'href').and('include', 'https://talotics.com')
                
                cy.get(':nth-child(2) > ul > :nth-child(1) > strong').contains('Featured Books').should('be.visible')
               
                cy.get(':nth-child(2) > ul > :nth-child(2) > a').should('be.visible')
                .should('have.attr', 'href').and('include', 'https://www.eviltester.com/page/books/java-for-testers/')
                
                cy.get(':nth-child(2) > ul > :nth-child(3) > a').should('be.visible')
                .should('have.attr', 'href').and('include', 'https://www.eviltester.com/page/books/automating-testing-api-casestudy/')
                
                cy.get(':nth-child(2) > ul > :nth-child(4) > a').should('be.visible')

                .should('have.attr', 'href').and('include', 'https://www.eviltester.com/page/deareviltester/')
                cy.get(':nth-child(5) > strong > a').should('be.visible')

                .should('have.attr', 'href').and('include', 'https://patreon.com/eviltester')
                cy.get(':nth-child(2) > ul > :nth-child(6) > a').should('be.visible')

                .should('have.attr', 'href').and('include', 'https://patreon.com/eviltester')
                
                cy.get(':nth-child(3) > ul > :nth-child(1) > strong > a').should('be.visible')
                .should('have.attr', 'href').and('include', 'https://www.eviltester.com/page/services/')
                
                cy.get('.simpleThumbGrid > :nth-child(3) > ul > :nth-child(2) > a').should('be.visible')
                .should('have.attr', 'href').and('include', 'https://www.eviltester.com/conference/')
                
                cy.get('.simpleThumbGrid > :nth-child(3) > ul > :nth-child(3) > a').should('be.visible')
                .should('have.attr', 'href').and('include', 'https://www.eviltester.com/categories/published-articles/')
                
                cy.get('.simpleThumbGrid > :nth-child(3) > ul > :nth-child(4) > a').should('be.visible')
                .should('have.attr', 'href').and('include', 'https://www.eviltester.com/page/tools/')
                
                cy.get('.simpleThumbGrid > :nth-child(3) > ul > :nth-child(5) > a').should('be.visible')
                .should('have.attr', 'href').and('include', 'https://www.eviltester.com/page/emaillist/')

                cy.get('.copyright-notice > a > img').should('be.visible')

                cy.get('.copyright-notice > p').contains('Copyright © 2000 - 2022 Compendium Developments Ltd')
            })

    

            })







            

            
            
            
        
        

