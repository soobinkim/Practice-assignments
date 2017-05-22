import { FactsAssignmentPage } from './app.po';

describe('facts-assignment App', () => {
  let page: FactsAssignmentPage;

  beforeEach(() => {
    page = new FactsAssignmentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
