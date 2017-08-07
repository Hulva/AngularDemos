import { NgPracticePage } from './app.po';

describe('ng-practice App', () => {
  let page: NgPracticePage;

  beforeEach(() => {
    page = new NgPracticePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
