import { SummAppPage } from './app.po';

describe('summ-app App', () => {
  let page: SummAppPage;

  beforeEach(() => {
    page = new SummAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
