import {UserAction} from '../../actions'

let userReducers = JSON.parse(localStorage.getItem('oauth'));
const initialState = userReducers ? { loggedIn: true, user: userReducers } : {};

export function authentication(status = initialState, action) {
  switch (action.type) {
    case UserAction.LOGIN_REQUEST:
      return {
        loggedIn: false
      };
    case UserAction.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        oauth: action.oauth
      };
    case UserAction.LOGIN_FAILURE:
      return {
        loggedIn: false
      };
    case UserAction.LOGOUT:
      return {
        loggedIn: false
      };
    default:
      return status
  }
}