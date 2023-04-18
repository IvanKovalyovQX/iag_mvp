import { Page, request } from "@playwright/test";
import { Api } from "./Api";

export class LoginPage {
    page: Page
    emailField: any;
    passwordField: any;
    loginBtn: any;

    constructor(page: Page) {
        this.page = page
        this.emailField = page.locator('#mat-form-field-label-1')
        this.passwordField = page.locator('#mat-form-field-label-3')
        this.loginBtn = page.locator('//span[text()="Login"]/..')
    }

    async inputEmailField(email: string){
        await this.emailField.fill(email)
    }

    async inputPasswordField(pass: string){
        await this.passwordField.fill(pass)
    }
    
    async clickLoginBtn() {
        await this.loginBtn.click()
    }

    async inputLoginCredentials(email: string, password: string) {
        await this.inputEmailField(email)
        await this.inputPasswordField(password)
        await this.clickLoginBtn()
        await this.page.waitForLoadState('networkidle')
    }

    async apiLogin(email: string, password: string, url: string) {
        const apiContex = await request.newContext()
        const api = new Api(apiContex)
        const user = await api.loginPage.loginUser(email, password, url)
        this.page.addInitScript(value => {
            window.localStorage.setItem('currentUser', value)
          }, `"${user.token}"`);
        this.page.addInitScript(value => {
          window.localStorage.setItem(btoa('roles'), value)
        }, `${user.roles}`);
        await this.page.goto('/')
        await this.page.waitForLoadState('networkidle')
    }

    
    
}