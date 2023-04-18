import { Page } from "@playwright/test";
import { LoginPage } from "./login_page";
import { ProjectPage } from "./project_page";
import { UploadPage } from "./upload_page";

export class App {
    page: Page
    loginPage: LoginPage;
    projectPage: ProjectPage;
    uploadPage: UploadPage;

    constructor(page: Page) {
        this.page = page
        this.loginPage = new LoginPage(page)
        this.projectPage = new ProjectPage(page)
        this.uploadPage = new UploadPage(page)
    }
    
}