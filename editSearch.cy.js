describe('Skyscanner Flight Search Automation', () => {

    it('Should edit the flight search', () => {
      cy.visit('https://www.skyscanner.com.br');
      cy.get('[placeholder="Where from?"]').type('Manaus{enter}');
      cy.get('[placeholder="Where to?"]').type('São Paulo{enter}');
      cy.get('.DayPickerInput').first().click();
      cy.get('.DayPicker-Day').contains('15').click();
      cy.get('.DayPickerInput').last().click();
      cy.get('.DayPicker-Day').contains('20').click();
      cy.get('.Passengers').click();
      cy.get('[data-testid="adults-input"]').clear().type('1');
      cy.get('.done-button').click();
      cy.get('[data-testid="search-button"]').click();
      cy.wait(5000);
      cy.get('[data-testid="edit-button"]').click();
      cy.get('[placeholder="Where from?"]').clear().type('Rio de Janeiro{enter}');
      cy.get('[placeholder="Where to?"]').clear().type('Brasília{enter}');
      cy.get('[data-testid="search-button"]').click();
      cy.wait(5000);
    });
  
  });
  