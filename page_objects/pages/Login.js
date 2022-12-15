import { Page } from './Page';

export class Login extends Page {

  constructor(page) {
    super();
    this.page = page;
    this.emailInput = page.getByLabel('Email Address');
    this.passwordInput = page.getByLabel('Password');
    this.signInBtn = page.getByRole('button', { name: 'Sign In' }).filter({ hasText: 'Sign In' });
    this.acceptCookiesBtn = page.getByRole('button', { name: 'Accept Cookies' });
  }

  async fillLogin(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
  }
}