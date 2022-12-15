import { Page } from './Page';

export class Main extends Page {
  constructor(page) {
    super();
    this.page = page;
    this.acceptCookiesBtn = page.getByRole('button', { name: 'Accept Cookies' });
    this.supportBtn = page.getByRole('menuitem', { name: 'Support' })
    this.dialBtn = page.getByRole('menuitem', { name: '1.888.799.9666' })
    this.demoBtn = page.getByRole('menuitem', { name: 'Request a Demo' })
  }

  async openMainPage(url) {
    await this.open(url)
    await this.acceptCookiesBtn.click()
  }
}
