import { test, expect, request } from '@playwright/test';
import { App } from '../pages/App';
import { Api } from '../pages/Api';
import { dataSet, generateRandomLetter } from '../utils/dataSet';

test.skip('Add Reading', async ({ page }) => {
  const app = new App(page)
  await page.goto('/login');
  await page.waitForLoadState('networkidle')
  await app.loginPage.inputLoginCredentials(`iagpmrole@yahoo.com`, `Second@123`)
  console.log('capcha passed')
  await page.locator('//span[text()="Select Imaging Project"]').waitFor({state: 'visible'})
  await app.projectPage.selectStudy('batch2automation')
  await app.projectPage.waitForSearchResult('batch2automation')
  await app.projectPage.clickEditProject()
  await app.projectPage.selectTab('Reading')
  await app.projectPage.clickAddReading()
  await app.projectPage.selectReading()


});



test.only('login api', async ({ page }) => {
  console.log(process.env.SITE_USER_PASSWORD)
  const apiContex = await request.newContext()
  const api = new Api(apiContex)
  const app = new App(page)
  await app.loginPage.apiLogin(dataSet.siteUserEmal, `${process.env.SITE_USER_PASSWORD}`, dataSet.uatUrl1)
 
  await page.locator('//span[text()="Select Imaging Project"]').waitFor({state: 'visible'})
  await app.projectPage.selectStudy('Bark_JSW-2')
  await page.waitForLoadState('networkidle')
  await page.locator('[mattooltip="Upload Images"]').click()
  await page.waitForURL('/imagingproject/upload')
  await page.waitForLoadState('networkidle')
  await page.waitForTimeout(2000)
  // await page.locator('//*[text()="person_add"]').click()
  // await page.waitForLoadState('networkidle')
  // await page.locator('svg.mat-datepicker-toggle-default-icon').click()
  // await page.locator('div.mat-calendar-body-today').click()
  // await page.locator('div.mat-calendar-body-today').click()
  // const name = `${generateRandomLetter()}${generateRandomLetter()}${Math.floor(Math.random() * (99999 - 10000) + 10000)}`
  // await page.locator('[placeholder="Patient"]').fill(name)
  // await page.locator('[mattooltip="Create patient"]').click()
  // await page.locator('//*[text()="Patient has been created successfully"]').waitFor()
  // await page.locator(`//*[text()="${name}"]`).waitFor()
  // await page.locator('[placeholder="Filter"]').fill(name)
  // await page.keyboard.press('Enter')
  // await page.waitForLoadState('networkidle')
  // await page.locator(`[mattooltip="Upload New"]`).nth(0).click()
  // delete next part
  await page.locator('[placeholder="Filter"]').fill('AA00000')
  await page.keyboard.press('Enter')
  await page.waitForLoadState('networkidle')
  await page.locator(`[mattooltip="Upload New"]`).nth(0).click()
  //
  await page.waitForTimeout(500)
  await page.locator('//*[text()="save"]').waitFor()
  await page.locator('[formcontrolname="modality"]').click()
  await page.locator('//*[contains(text(),"Select All")]/../div').click()
  await page.keyboard.press('Escape')
  await page.locator('[placeholder="Comment"]').fill('comment')
  await page.waitForTimeout(4000)
  page.on('filechooser', async (filechooser) => {
    await filechooser.setFiles('./upload/JSW knee - Radiobotics_op (1).zip')
  })
  await page.waitForTimeout(500)
  await page.locator('[mattooltip="Add files"]').click()
  await page.waitForTimeout(5000)
});