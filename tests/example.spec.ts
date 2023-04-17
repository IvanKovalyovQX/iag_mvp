import { test, expect, request } from '@playwright/test';
import { App } from '../pages/App';
import { Api } from '../pages/Api';
import { dataSet } from '../utils/dataSet';

test.skip('Add Reading', async ({ page }) => {
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



test.only('login api', async ({ page }) => {
  const apiContex = await request.newContext()
  const api = new Api(apiContex)
  const app = new App(page)
  
  const user = await api.loginPage.loginUser(dataSet.pmEmail, dataSet.pmPassword, dataSet.uatUrl1)
  page.addInitScript(value => {
    window.localStorage.setItem('currentUser', value)
  }, `"${user.token}"`);
  page.addInitScript(value => {
    window.localStorage.setItem(btoa('roles'), value)
  }, `${user.roles}`);
  await page.goto('/')
  await page.locator('//span[text()="Select Imaging Project"]').waitFor({state: 'visible'})
  await app.dashboardPage.selectStudy('batch2automation')
});





