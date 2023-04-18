import { Page } from "@playwright/test";


export class UploadPage {
    page: Page

    constructor(page: Page) {
        this.page = page

    }

}