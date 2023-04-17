import { request, expect, APIRequestContext } from "@playwright/test"

export class LoginApiPage {
    apiContext: any
    constructor(apiContext: APIRequestContext){
        this.apiContext = apiContext
    }
    
    async loginUser(email: string, password: string, url: string) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const apiCall = await apiContext.post(url, {
          data: {
            emailAddress: email,
            password: password
          }
        })
        const response = await apiCall.json()
        expect(apiCall.ok()).toBeTruthy()
        const token = response.data.jwt
        const roles = btoa(JSON.stringify(response.data.roles))
        return {token, roles}  
    }

 

}