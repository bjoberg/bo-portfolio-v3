import { BrettObergPage } from './app.po';

describe('brett-oberg App', function() {
  let page: BrettObergPage;

  beforeEach(() => {
    page = new BrettObergPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
