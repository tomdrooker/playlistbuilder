let accessToken;
let expiresIn;
const clientId = 'ec2529858fd546ce87efaf7af22d7a75';
const redirectUri = 'http://localhost:3000/';
const responseType = 'token';


export const Spotify = {
  authorizeUrl: 'https://accounts.spotify.com/authorize' + '/?client_id=' + clientId + '&response_type=' + responseType + '&redirect_uri=' + redirectUri,

  getAccessToken() {
    if (accessToken) {
      return accessToken;
    } else if (window.location.href.match(/access_token=([^&]*)/, /expires_in=([^&]*)/)) {
      let accessToken = window.location.href.match('/access_token=([^&]*)/');
      let expiresIn = window.location.href.match('/expires_in=([^&]*)/');
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
    } else if (!window.location.href.match('/access_token=([^&]*)/')) {
      window.location.assign(Spotify.authorizeUrl);    
    }
  },

  search(term) {
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      headers: {Authorization: `Bearer ${accessToken}`}
    }).then(response => {
        return response.json();
      }).then(jsonResponse => {
        console.log(jsonResponse);
    })
  }
};
