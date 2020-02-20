describe('Verifyinng feature in homepage', () => {
  beforeEach(() => {
    cy.visit('/').injectAxe();
  });

  it('user can open `/about` when click button `btnWhoIndra` in homepage', () => {
    cy.get('[data-testid="btnWhoIndra"]').click();
    cy.location().should(location => {
      expect(location.pathname).to.eq('/about');
    });
  });
});
