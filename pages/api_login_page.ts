import { request, expect, APIRequestContext } from "@playwright/test"

export class LoginApiPage {
    apiContext: any
    constructor(apiContext: APIRequestContext){
        this.apiContext = apiContext
    }
    
    async loginUser(email: string, password: string, userName: string, url: string) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const apiCall = await apiContext.post(url, {
          data: {
            emailAddress: email,
            password: password,
            userName: userName
          }
        })
        const response = await apiCall.json()
        expect(apiCall.ok()).toBeTruthy()
        console.log(response)
        
    }

}