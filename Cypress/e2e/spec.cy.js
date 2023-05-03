describe('example', () => {
  it('login on facebook', () => {
    cy.visit('https://facebook.com/');
    cy.get('[data-testid="royal_email"]')
      .type("lie_reinaldo@yahoo.com")
      .should("have.value","email@yahoo.com");
    cy.get('[data-testid="royal_pass"]')
      .type(12345)
      .should("have.value",12345);
    cy.get('[data-testid="royal_login_button"]').click();
    });
    
    //change language
   it('change language', () => {
      cy.visit('https://facebook.com/');
      cy.get('.localeSelectorList > :nth-child(1)').click();
  });
  
});
