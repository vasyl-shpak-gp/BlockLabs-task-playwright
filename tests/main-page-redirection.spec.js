// @ts-check
const { test, expect } = require('@playwright/test');
const { Main } = require('../page_objects/pages/Main')
const { links } = require('../data/const')
//? As per task requirements "https://zoom.us/ sprawdzić że przyciski support , 1.888.799.9666 , Request a Demo przekierują użytkownika na odpowiednią stronę."
test.describe('Redirection to subpages', () => {
    test('User should be redirected to the Support Page', async ({ page }) => {
        const mainPage = new Main(page);
        await mainPage.openMainPage(links.mainPage)
        //? as Support Page is opened in another window I used separate context
        const [page2] = await Promise.all([
            page.waitForEvent('popup'),
            mainPage.supportBtn.click()
        ]);
        await expect(page2.getByRole('link', { name: 'Zoom Support' })).toBeVisible();
    });

    test('User should be receive prompt window from 1.888.799.9666 page', async ({ page }) => {
        const mainPage = new Main(page);
        await mainPage.openMainPage(links.mainPage)
        await mainPage.dialBtn.click();
        //? at this point I had to use this intercept method because once user click on the number link it will open "Prompt window" not the page redirection
        page.once('dialog', async dialog => {
            expect(dialog.message()).toContain('https://zoom.us wants to open this application.');
            await dialog.dismiss();
        });
    });

    test('User should be redirected to the Request a Demo page', async ({ page }) => {
        const mainPage = new Main(page);
        await mainPage.openMainPage(links.mainPage)
        await mainPage.demoBtn.click();
        await expect(page.getByRole('heading', { name: 'Request a Free Zoom Demo' }).first()).toBeVisible();
    });
});
