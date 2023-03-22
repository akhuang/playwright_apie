import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
}); 

test('test', async ({ page }) => {
  await page.goto('https://console.huaweicloud.com/apiexplorer/#/apidebug/ECS/doc?api=CreateServers'); 
  await expect(page).toHaveTitle(/API Explorer/);
  await expect(page.getByText('CreateServers', { exact: true })).toHaveText("CreateServers") 
  await expect(page.getByText('dry_run')).not.toBeNull(); 
  await expect(page.getByRole('tab', { name: '文档' })).not.toBeNull();
  await expect(page.getByText('Body', { exact: true })).not.toBeNull();
});