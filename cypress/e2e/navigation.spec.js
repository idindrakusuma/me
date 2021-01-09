/**
 * Documentation for Context resoultion
 * https://docs.cypress.io/api/commands/viewport.html#Width-Height
 */

const TITLE = {
  about: 'Let me introduce my self',
  resume: 'Education and Experience',
  work: 'Fun Facts',
  workSub: 'My projects and awards 😃',
  blog: 'Blog Posts',
  contact: 'Get in touch',
};

describe('Verifying Navigation bar..', () => {
  /**
   * Test in Mobile View
   */
  context('Mobile view in iPhone 6', () => {
    beforeEach(() => {
      cy.viewport('iphone-6');
      cy.visit('/').injectAxe();
    });

    it('use can see the `/welcome` page when click icon homepage in navbar', () => {
      cy.get('[data-testid="mLinkWelcome"]').click();

      cy.location().should(location => {
        expect(location.pathname).to.eq('/');
      });
    });

    it('use can see the `/resume` page when click icon resume in navbar', () => {
      cy.get('[data-testid="mLinkResume"]').click();

      cy.location().should(location => {
        expect(location.pathname).to.eq('/resume');
      });
      cy.findByText(TITLE.resume).should('exist');
    });

    it('use can see the `/works` page when click icon works in navbar', () => {
      cy.get('[data-testid="mLinkWorks"]').click();

      cy.location().should(location => {
        expect(location.pathname).to.eq('/works');
      });
      cy.findByText(TITLE.work).should('exist');
      cy.findByText(TITLE.workSub).should('exist');
    });

    it('use can see the `/blog` page when click icon blog in navbar', () => {
      cy.get('[data-testid="mLinkBlog"]').click();

      cy.location().should(location => {
        expect(location.pathname).to.eq('/blog');
      });
      cy.findByText(TITLE.blog).should('exist');
    });

    it('use can see the `/contact` page when click icon contact in navbar', () => {
      cy.get('[data-testid="mLinkContact"]').click();

      cy.location().should(location => {
        expect(location.pathname).to.eq('/contact');
      });
      cy.findByText(TITLE.contact).should('exist');
    });
  });

  /**
   * Test in Desktop mode
   */
  context('Desktop view in 1366x768p', () => {
    beforeEach(() => {
      cy.viewport('macbook-11');
      cy.visit('/').injectAxe();
    });

    it('use can see the `/welcome` page when click icon homepage in navbar', () => {
      cy.get('[data-testid="dLinkWelcome"]').click();

      cy.location().should(location => {
        expect(location.pathname).to.eq('/');
      });
    });

    it('use can see the `/resume` page when click icon resume in navbar', () => {
      cy.get('[data-testid="dLinkResume"]').click();

      cy.location().should(location => {
        expect(location.pathname).to.eq('/resume');
      });
      cy.findByText(TITLE.resume).should('exist');
    });

    it('use can see the `/works` page when click icon works in navbar', () => {
      cy.get('[data-testid="dLinkWorks"]').click();
      cy.location().should(location => {
        expect(location.pathname).to.eq('/works');
      });

      cy.findByText(TITLE.work).should('exist');
      cy.findByText(TITLE.workSub).should('exist');
    });

    it('use can see the `/blog` page when click icon blog in navbar', () => {
      cy.get('[data-testid="dLinkBlog"]').click();

      cy.location().should(location => {
        expect(location.pathname).to.eq('/blog');
      });
      cy.findByText(TITLE.blog).should('exist');
    });

    it('use can see the `/contact` page when click icon contact in navbar', () => {
      cy.get('[data-testid="dLinkContact"]').click();

      cy.location().should(location => {
        expect(location.pathname).to.eq('/contact');
      });
      cy.findByText(TITLE.contact).should('exist');
    });
  });
});
