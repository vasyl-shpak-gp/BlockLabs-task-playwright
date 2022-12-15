// @ts-check
const { test, expect } = require('@playwright/test');
const { Login } = require('../page_objects/pages/Login')
const { links, testAccount } = require('../data/const')

test.beforeEach(async ({ page }) => {
    const login = new Login(page);
    login.browserReload();
});
//? As per tas requirements "napisać sign in test https://zoom.us/signin#/login"
test.describe('Basic user path on the zoom.us page', () => {
    test('User is able to login successfully', async ({ page }) => {
        const login = new Login(page);
        await login.open(links.loginPage);
        await login.acceptCookiesBtn.click()
        await login.fillLogin(testAccount.email, testAccount.password);
        await login.signInBtn.click();
        await expect(page).toHaveURL(/.*profile/);
    });
});
