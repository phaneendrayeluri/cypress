describe('Powerblock Stock Checker', () => {
    it('Open Webpage', () => {
        cy.visit('https://powerblock.com/product/elite-series/')
        // cy.contains('Add to cart', { matchCase: false }).click()
        // cy.get('.cart-count').first().then(($span) => {
        //     expect($span.text()).to.equal('0')
        // })
    })
})