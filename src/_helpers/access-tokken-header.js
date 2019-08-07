export function accessToken() {
  // JSON Text 타입의 토큰을 유저로 답는다.
  let oauth = JSON.parse(localStorage.getItem("oauth"));
  if(oauth && oauth.accessToken) {
    return oauth.accessToken;
  } else {
    return ''
  }
}