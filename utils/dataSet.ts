export const dataSet = {
    pmEmail: `roman.denysenko+iag_project_manager@spsoft.com`,
    centralReadeEmail: `roman.denysenko+central_reader@spsoft.com`,
    siteReaderEmal: 'roman.denysenko+site_reader@spsoft.com',
    siteUserEmal: 'roman.denysenko+site_user@spsoft.com',
    uatUrl: 'https://uat-dot-msuser-dot-dynamikax-dev.appspot.com/api/user/authenticate-with-user-name-no-captcha?compact=true',
    uatUrl1: 'https://uat-dot-msuser-dot-dynamikax-dev.appspot.com/api/user/authenticate-with-email-address-no-captcha?compact=true'
}

export function generateRandomLetter() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
  }