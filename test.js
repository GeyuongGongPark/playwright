import {test, expect} from '@playwrighy/test';

test('로그인 시나리오', async ({page}) => {
    await page.goto('https://business.lawform.io/login');
    await page.waitForSelector('input[type="email"]');
    await page.type('input[type="email"]', 'ggpark+id20250211162329770_m@amicuslex.net');
    await page.waitForSelector('input[type="password"]');
    await page.type('input[type="password"]', 'q1w2E#R$');
    await page.click('button[type="submit"]', { nth: 0});
});