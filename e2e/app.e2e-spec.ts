import { Angularattack2017GamespotPage } from './app.po';

describe('angularattack2017-gamespot App', function() {
  let page: Angularattack2017GamespotPage;

  beforeEach(() => {
    page = new Angularattack2017GamespotPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
