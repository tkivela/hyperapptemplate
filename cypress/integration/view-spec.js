describe('Counter', () => {
  it('Increments and decrements count correctly', function () {
    cy.visit('http://localhost:1234/')
    cy.contains('Count: 0')
    cy.contains('+').click()
    cy.contains('Count: 1')
    cy.contains('+').click()
    cy.contains('Count: 2')
    cy.contains('-').click()
    cy.contains('Count: 1')
  })
})
