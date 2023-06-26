export const oktaConfig = {
    clientId: '0oa9vnm9ekzsmTl9p5d7',
    issuer: 'https://dev-59558242.okta.com/oauth2/default',
    redirectUri: 'https://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}