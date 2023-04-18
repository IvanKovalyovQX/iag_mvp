import { Page } from "@playwright/test";

export class ProjectPage {
    page: Page
    studyFilterDropdown: any;
    editProjectBtn: any;
    addReadingBtn: any;
    readingDropdown: any;
    HEELoption: any;

    constructor(page: Page) {
        this.page = page
        this.studyFilterDropdown = page.locator('[placeholder="Filter"]')
        this.editProjectBtn = page.locator('[mattooltip="Edit Project"]')
        this.addReadingBtn = page.locator('//*[text()=" Add a Reading to the list "]/..')
        this.readingDropdown = page.locator('[role="listbox"]')
        this.HEELoption = page.locator('//span[text()=" HEEL "]')
    }

    async selectStudy(name: string) {
        await this.studyFilterDropdown.fill(name)
        await this.page.waitForLoadState('networkidle')
        await this.page.keyboard.press('Enter')
    }

    async waitForSearchResult(name: string) {
        await this.page.locator(`//mat-cell[contains(text(),"${name}")]`).waitFor({state: "visible"})
    }

    async clickEditProject() {
        await this.editProjectBtn.click()
        await this.page.waitForLoadState('networkidle')
    }

    async selectTab(name: string) {
        await this.page.locator(`//*[text()="${name}"]`).click()
        await this.page.waitForLoadState('networkidle')
    }

    async clickAddReading() {
        await this.addReadingBtn.click()
    }

    async selectReading() {
        await this.readingDropdown.click()
        await this.HEELoption.click()
    }

    
    
}