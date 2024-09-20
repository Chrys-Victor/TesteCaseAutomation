describe('Skyscanner Flight Search Automation', () => {

  it('Should search for flights from Manaus to São Paulo', () => {
    cy.visit('https://www.skyscanner.com.br');
    cy.wait(5000);
    cy.get('[placeholder="Where from?"]').type('Manaus{enter}');
    cy.get('[placeholder="Where to?"]').type('São Paulo{enter}');
    cy.get('.DayPickerInput').first().click();
    cy.get('.DayPicker-Day').contains('15').click();
    cy.get('.DayPickerInput').last().click();
    cy.get('.DayPicker-Day').contains('20').click();
    cy.get('.Passengers').click();
    cy.get('[data-testid="adults-input"]').clear().type('1');
    cy.get('.done-button').click();
    cy.get('[data-testid="checkbox-nonstop"]').uncheck();
    cy.get('[data-testid="checkbox-nearby-airports"]').uncheck();
    cy.get('[data-testid="search-button"]').click();
    cy.wait(5000);
  });

});
