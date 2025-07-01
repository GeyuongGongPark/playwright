import { test, expect } from '@playwright/test';
import { URLS } from '../LFBZ/URL/url_base.js';
import { SELECTORS } from '../LFBZ/URL/config.js';
import { getCurrentLoginCredentials } from '../LFBZ/URL/config.js'; 
import { getFormattedTimestamp } from '../LFBZ/URL/utils.js';


test('로그인 시나리오', async ({page}) => {
    await page.goto(URLS.LOGIN.LOGIN);
    await page.waitForSelector(SELECTORS.LOGIN.EMAIL_INPUT);
    await page.type(SELECTORS.LOGIN.EMAIL_INPUT, getCurrentLoginCredentials().EMAIL);
    await page.waitForSelector(SELECTORS.LOGIN.PASSWORD_INPUT);
    await page.type(SELECTORS.LOGIN.PASSWORD_INPUT, getCurrentLoginCredentials().PASSWORD);
    await page.click(SELECTORS.LOGIN.SUBMIT_BUTTON, { nth: 0});
    await page.goto(URLS.LOGIN.DASHBOARD);
    await page.waitForSelector(SELECTORS.LOGIN.DASHBOARD); 
});