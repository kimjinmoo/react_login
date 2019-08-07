import {accessToken} from '../../_helpers/access-tokken-header';
import {API_SERVER} from '../../_helpers/constant';
import axios from 'axios/index';

export const userService = {
  login,
  logout
};

/**
 *
 * 로그인
 *
 * @param id 유저ID
 * @param password 비밀번호
 * @returns {Promise<AxiosResponse<T> | never>}
 */
function login(id, password) {
  return axios.post(`${API_SERVER}/oauth/login`, {
    id: id,
    password: password
  })
  .then(loginHandleResponse)
  .then(oauth => {
    // 유저 정보값을 가져온다.
    if (oauth.accessToken) {
      localStorage.setItem('oauth', JSON.stringify(oauth));
    }
    return oauth;
  })
}

/**
 *
 * 로그아웃
 *
 * @returns {Promise<AxiosResponse<T> | never>}
 */
function logout() {
  return axios.post(`${API_SERVER}/oauth/logout`, null, {
    headers: {
      'Authorization': "Bearer " + accessToken(),
      'Content-Type': 'application/json'
    }
  })
  .then(res => {
    // 모든 로컬 스토리지 제거
    localStorage.clear();
  });
}

/**
 *
 * 응답값 처리 200번이 아닌경우 reject을 던진다.
 *
 * @param response
 * @returns {Promise<never>|*}
 */
function loginHandleResponse(response) {
  if (response.data.code !== 200) {
    alert(response.data.message);
    return Promise.reject(response.data.message);
  }
  // 성공시 data값을 던져준다.
  return {
    id: response.data.id,
    role: response.data.role,
    accessToken: response.data.accessToken
  };
}