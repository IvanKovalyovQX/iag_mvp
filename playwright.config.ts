import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';
require('dotenv').config()

const config: PlaywrightTestConfig = {
  testDir: './tests',
  timeout: 60 * 1000,
  expect: {
    timeout: 15000
  },
  retries: 1,
  fullyParallel: true,
  reportSlowTests: { max: 0, threshold: 60001 },
  workers: process.env.CI ? 6 : undefined,
  reporter: [
    ['line'],
    ['allure-playwright']
  ],
  use: {
    headless: false,
    viewport: { width: 1960, height: 1280 },
    ignoreHTTPSErrors: true,
    video: 'on-first-retry',
    screenshot: 'only-on-failure',
    actionTimeout: 0,
    baseURL: 'https://uat-dot-dynamikax-dev.ew.r.appspot.com',
    trace: 'retain-on-failure',
  },
  // globalSetup: 'utils/globalSetup.ts',
  projects: [
    {
      name: 'uat',
      use: {
        baseURL: 'https://uat-dot-dynamikax-dev.ew.r.appspot.com',
        ...devices['Desktop Chrome'],
      },
    }
  ],
  outputDir: 'test-results/',
  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   port: 3000,
  // },
};

export default config;
