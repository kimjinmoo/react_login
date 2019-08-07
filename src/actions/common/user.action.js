import {userService} from "../../_services/common/user.service";

export function login(username, password) {
  return dispatch => {
    dispatch(request({username}));

    userService.login(username, password)
    .then(oauth => {
      dispatch(success(oauth));
    })
    .catch(err => {
      dispatch(failure(err));
    })
  };

  function request(oauth) {
    return {type: UserAction.LOGIN_REQUEST, oauth}
  }

  function success(oauth) {
    return {type: UserAction.LOGIN_SUCCESS, oauth}
  }

  function failure(oauth) {
    return {type: UserAction.LOGIN_FAILURE, oauth}
  }
}

export function logout() {
  userService.logout().catch(res => {
    return {type: UserAction.LOGIN_FAILURE}
  });
  return {type: UserAction.LOGOUT};
}

export const UserAction = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',

  LOGOUT: 'LOGOUT'
}