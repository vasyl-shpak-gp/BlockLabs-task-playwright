
export class Page {
  constructor(page) {
    this.page = page;
  }

  async open(url) {
    await this.page.goto(url);
    console.log(`opening the ${url} page`);
  }

  async browserReload() {
    await this.page.reload();
  }
}
