describe('Trivia Game', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('loads a question and allows the user to answer it', () => {
    cy.get('#question').should('be.visible')
    cy.get('#answerInput').type('wrong answer')
    cy.get('#submitBtn').click()
    cy.get('#resultMsg').contains('Incorrect!')
    cy.get('#answerInput').should('have.value', '')
    cy.wait(2000)
    cy.get('#question').should('be.visible')
  })

  it('displays an error message when the answer input is empty', () => {
    cy.get('#answerInput').clear()
    cy.get('#submitBtn').click()
    cy.get('#errorMsg').contains('Please enter an answer')
  })

})
