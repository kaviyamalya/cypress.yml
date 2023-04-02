

describe('My test', () => {
  it('should interact with an element selected by XPath', () => {
    cy.visit('https://example.com');
    cy.xpath('//button[contains(text(), "Submit")]').click();
    cy.xpath('//div[contains(@class, "success")]').should('be.visible');
  });
});
