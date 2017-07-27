import { LocationManagerPage } from './app.po';

describe('location-manager App', () => {
  let page: LocationManagerPage;

  beforeEach(() => {
    page = new LocationManagerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
