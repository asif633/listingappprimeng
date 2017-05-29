import { ListingappprimengPage } from './app.po';

describe('listingappprimeng App', () => {
  let page: ListingappprimengPage;

  beforeEach(() => {
    page = new ListingappprimengPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
