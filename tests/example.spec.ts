import { test, expect, request } from '@playwright/test';
import { App } from '../pages/App';
import { Api } from '../pages/Api';

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



test('login api', async ({ page }) => {
  const apiContex = await request.newContext()
  const api = new Api(apiContex)
  const url = 'https://uat-dot-msuser-dot-dynamikax-dev.appspot.com/api/user/authenticate-with-user-name-no-captcha?compact=true',
  emailAddress = "iagpmrole@yahoo.com",
  password = "Second@123",
  userName =  "iag_pm_automation"
  await api.loginPage.loginUser(emailAddress, password, userName, url)
});





