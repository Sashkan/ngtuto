import { BloomPage } from './app.po';

describe('bloom App', function() {
  let page: BloomPage;

  beforeEach(() => {
    page = new BloomPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
