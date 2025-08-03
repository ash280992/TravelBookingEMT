
describe('EMT flight booking end to end', ()=>{

    before('clear cookies and previous sessions', ()=>{

        Cypress.on('uncaught:exception',()=> {
       return false;
        })
        cy.clearAllCookies()
        Cypress.session.clearAllSavedSessions()
        Cypress.session.clearCurrentSessionData()
        cy.viewport('macbook-15')
    })

    it('navigate to EaseMyTrip and perform flight search', ()=>{

        cy.visit('https://easemytrip.in',{failOnStatusCode: false},{
      headers: {
        "Accept-Encoding": "gzip, deflate, br"
      }
    })
        cy.url().should('include', 'easemytrip')
        //cy.get(".close_o_pp2").click()
        cy.get("#frmcity").click()
        cy.get("#spn4").should('have.text', 'Kolkata(CCU)').click()
        cy.get("#a_Editbox13_show").type('Bangalore')
        cy.get("#spnBengaluru").should('contain.text', 'Bengaluru')
        cy.get("#spnBengaluru").click()
        cy.get("li[id='snd_2_05/08/2025']").should('be.visible').click()
        cy.get("#ptravlr").click()
        cy.get('.add.plus_box1').first().should('be.enabled').click({ multiple: true }, {force:true})
        cy.get('#traveLer').click()
        cy.get('.srchBtnSe').should('be.enabled').click()
        //Adding Comment to see if CI works
        cy.url();

})

})
