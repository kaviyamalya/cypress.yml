///<reference types="cypress-iframe" />

describe('frames', ()=>{

    it('type1', ()=>{

        cy.visit('https://the-internet.herokuapp.com/iframe') 

        const iframe=cy.get("#mce_0_ifr")
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);

        iframe.clear().type("If you're using typescript with cypress, and have not overridden the types or typeRoots in your tsc compiler options,then everything should work {ctrl+a}");

        cy.get("[aria-label='Bold']").click();

        iframe.clear().type('In each case, validating base requirements is a critical assessment. Just as important, exploratory testing helps a tester or testing team uncover hard-to-predict scenarios and situations that can lead to software errors {ctrl+a}')

        cy.get('[aria-label="Italic"]').click()

        cy.get('[aria-label="Align left"]').click()

        cy.get('[aria-label="Align center"]').click()

        cy.get('[aria-label="Align right"]').click()

        cy.get('[aria-label="Justify"]').click()

        cy.get('[aria-label="Undo"]').click()

        cy.get('[aria-label="Increase indent"]').click()

        cy.get('[aria-label="Decrease indent"]').click()


    })

    it('type2-custom command', ()=>{

        cy.visit('https://the-internet.herokuapp.com/iframe')
       
        cy.getIframe('#mce_0_ifr').clear().type("This can be used to execute a group of commands within an iframe {ctrl+a}")

        cy.get("[aria-label='Bold']").click()

        cy.get('[aria-label="Italic"]').click()

        cy.get('[aria-label="Align left"]').click()

        cy.get('[aria-label="Align center"]').click()

        cy.get('[aria-label="Align right"]').click()

        cy.get('[aria-label="Justify"]').click()

        cy.get('[aria-label="Undo"]').click()

        cy.get('[aria-label="Increase indent"]').click()

        cy.get('[aria-label="Decrease indent"]').click()

    })

    it('type3-iframe plugin', ()=>{

        cy.visit('https://the-internet.herokuapp.com/iframe')

        cy.frameLoaded('#mce_0_ifr') //load the frame

        cy.iframe('#mce_0_ifr').clear().type("kaviyamalya {ctrl+a}")

        cy.get("[aria-label='Bold']").click()

        cy.iframe('#mce_0_ifr').clear().type('Even a simple application can be subject to a large number and variety of test {ctrl+a}')
      
        cy.get("[aria-label='Bold']").click()

        cy.get('[aria-label="Italic"]').click()

        cy.get('[aria-label="Align left"]').click()

        cy.get('[aria-label="Align center"]').click()

        cy.get('[aria-label="Align right"]').click()

        cy.get('[aria-label="Justify"]').click()

        cy.get('[aria-label="Undo"]').click()

        cy.get('[aria-label="Increase indent"]').click()

        cy.get('[aria-label="Decrease indent"]').click()

        cy.get('[title="styles"] > .tox-tbtn').click()

        cy.get('[title="Inline"] > .tox-collection__item-caret').click()

        cy.get('[title="Underline"] > .tox-collection__item-checkmark').click()
        cy.wait(2000)

        cy.get('[title="styles"] > .tox-tbtn').click()
        cy.get('[title="Inline"] > .tox-collection__item-caret').click()
        cy.get('[title="Strikethrough"] > .tox-collection__item-checkmark').click()
        cy.wait(2000)

        cy.iframe('#mce_0_ifr').clear().type(" 109 {ctrl+a}")
        cy.get('[title="styles"] > .tox-tbtn').click()
        cy.get('[title="Inline"] > .tox-collection__item-caret').click()
        cy.get('[title="Superscript"] > .tox-collection__item-checkmark').click()
        cy.wait(2000)
        cy.get('[title="styles"] > .tox-tbtn').click()
        cy.get('[title="Inline"] > .tox-collection__item-caret').click()
        cy.get('[title="Subscript"] > .tox-collection__item-checkmark').click()
        cy.wait(2000)

    })
           
      it('other options', ()=>{ 
            
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.get(':nth-child(1) > .tox-mbtn__select-label').click()
        //cy.wait(2000)
        cy.get('.tox-collection__item-label').click()
        //cy.wait(2000)
        cy.frameLoaded('#mce_0_ifr') //load the frame

        cy.iframe('#mce_0_ifr').clear().type("kaviyamalya {ctrl+a}")

        cy.get('[title="styles"] > .tox-tbtn').click()
        cy.get('.tox-collection__item--active').click()
        cy.get('h1').click()
        cy.wait(2000)
        cy.get('[title="styles"] > .tox-tbtn').click()
        cy.get('.tox-collection__item--active').click()
        cy.get('h2').click()
        cy.wait(2000)
        cy.get('[title="styles"] > .tox-tbtn').click()
        cy.get('.tox-collection__item--active').click()
        cy.get('.tox-collection__item-label > h3').click()
        cy.wait(2000)
        cy.get('[title="styles"] > .tox-tbtn').click()
        cy.get('.tox-collection__item--active').click()
        cy.get('h4').click()
        cy.wait(2000)
        cy.get('[title="styles"] > .tox-tbtn').click()
        cy.get('.tox-collection__item--active').click()
        cy.get('h5').click()
        cy.wait(2000)
        cy.get('[title="styles"] > .tox-tbtn').click()
        cy.get('.tox-collection__item--active').click()
        cy.get('h6').click()


        })

})