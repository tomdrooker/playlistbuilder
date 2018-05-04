const accessToken = '';
const expiresIn = '';
const clientId = '';
const redirectUri = 'http://localhost:3000/';
const responseType = 'token';


const Spotify = {
  const url = 'https://accounts.spotify.com/authorize';
  const authorizeUrl = this.url + '/?client_id=' + clientId + '&response_type=' + responseType + '&redirect_uri=' + redirectUri;

  getAccessToken() {
    if (accessToken) {
      return accessToken;
    } else if (window.location.href.match('/access_token=([^&]*)/', '/expires_in=([^&]*)/') {
      const accessToken = window.location.href.match('/access_token=([^&]*)/');
      const expiresIn = window.location.href.match('/expires_in=([^&]*)/');
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
    } else if !(window.location.href.match('/access_token=([^&]*)/') {
      window.location = this.authorizeUrl;
    }

export default Spotify;
