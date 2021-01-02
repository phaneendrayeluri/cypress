describe('Powerblock Stock Checker', () => {
    it('Open Webpage', () => {
        cy.visit('https://powerblock.com/product/elite-series/')
        cy.get('body').then($body => {
            if ($body.find('p.insufficient-stock').length > 0) {
                cy.log("No Stock, See ya later.")
            } else {
                cy.contains('Add to cart', { matchCase: false }).click()
                cy.get('.cart-count').first().then(($span) => {
                    expect($span.text()).to.equal('0')
                })
            }
        })

    })
})