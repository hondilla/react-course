describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
    cy.findByText('Hello Vite + React!')
    cy.findByRole('button', {name: /count is: 0/i}).click()
    cy.findByRole('button', {name: /count is: 1/i}).should('exist')
  })
})