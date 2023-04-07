import { test, expect, request } from '@playwright/test';
import { App } from '../pages/App';

test('Add Reading', async ({ page }) => {
  const app = new App(page)
  await page.goto('/login');
  await page.waitForLoadState('networkidle')
  await app.loginPage.inputLoginCredentials(`iagpmrole@yahoo.com`, `Second@123`)
  console.log('capcha passed')
  await page.locator('//span[text()="Select Imaging Project"]').waitFor({state: 'visible'})
  await app.dashboardPage.selectStudy('batch2automation')
  await app.dashboardPage.waitForSearchResult('batch2automation')
  await app.dashboardPage.clickEditProject()
  await app.dashboardPage.selectTab('Reading')
  await app.dashboardPage.clickAddReading()
  await app.dashboardPage.selectReading()


});





