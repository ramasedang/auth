import { UserManager, WebStorageStateStore } from 'oidc-client';

const userManager = new UserManager({
  userStore: new WebStorageStateStore({ store: window.localStorage }),
  authority: 'dev-m74ctzf3lm4rkl7w.us.auth0.com',
  client_id: '1WlbVaaulDwh9bBsBbcJyP3l1JcSecWc',
  redirect_uri: 'http://127.0.0.1:5173/callback',
  response_type: 'id_token token',
  scope: 'openid profile',
  automaticSilentRenew: true,
  metadata: {
    authorization_endpoint:
      'https://dev-m74ctzf3lm4rkl7w.us.auth0.com/authorize',
    end_session_endpoint:
      'https://dev-m74ctzf3lm4rkl7w.us.auth0.com/v2/logout?client_id=1WlbVaaulDwh9bBsBbcJyP3l1JcSecWc&returnTo=http://127.0.0.1:5173/',
    userinfo_endpoint:
      'https://dev-m74ctzf3lm4rkl7w.us.auth0.com/userinfo',
    jwks_uri:
      'https://dev-m74ctzf3lm4rkl7w.us.auth0.com/.well-known/jwks.json',
    issuer: 'https://dev-m74ctzf3lm4rkl7w.us.auth0.com/',
  },

  filterProtocolClaims: true,
  loadUserInfo: true,
});

let User = null;

userManager.events.addAccessTokenExpiring(function () {
  console.log('token expiring');
  log('token expiring');
});

userManager.events.addAccessTokenExpired(function () {
  console.log('token expired');
  log('token expired');
});

userManager.events.addSilentRenewError(function (e) {
  console.log('silent renew error', e.message);
  log('silent renew error', e.message);
});

userManager.events.addUserLoaded(async function (user) {
  sessionStorage.setItem('user', JSON.stringify(user));
  userManager.getUser().then(function () {
    console.log('user loaded');
  });
});

userManager.events.addUserUnloaded(function (e) {
  console.log('user unloaded');
});

export async function getUser() {
  return User;
}

export default userManager;
