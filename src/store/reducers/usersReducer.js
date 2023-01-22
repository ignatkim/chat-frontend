import {
  CLEAR_ERRORS,
  LOGIN_USER_FAILURE,
  LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGOUT_USER,
  REGISTER_USER_FAILURE,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS
} from "../actions/usersActions";
import {NotificationManager} from "react-notifications";

export const initialState = {
  registerLoading: false,
  registerError: null,
  loginLoading: false,
  loginError: null,

  user: null,
  users: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_ERRORS:
      return {...state, registerError: null, loginError: null};
    case REGISTER_USER_REQUEST:
      return {...state, registerLoading: true};
    case REGISTER_USER_SUCCESS:
      return {...state, registerLoading: false, user: action.user, registerError: null};
    case REGISTER_USER_FAILURE:
      return {...state, registerError: action.error, registerLoading: false};
    case LOGIN_USER_REQUEST:
      return {...state, loginLoading: true};
    case LOGIN_USER_SUCCESS:
      return {...state, loginLoading: false, user: action.user, loginError: null};
    case LOGIN_USER_FAILURE:
      return {...state, loginLoading: false, loginError: action.error};
    case LOGOUT_USER:
      return {...state, user: null};
    case 'USER_CONNECTED':
      NotificationManager.success(action.user + " connected!");
      return {...state, users: action.users};
    case 'USER_DISCONNECTED':
      NotificationManager.success(action.user + " disconnected!");
      return {...state, users: action.users};
    case 'ERROR':
      NotificationManager.error(action.error);

      return state;
    default:
      return state;
  }
};
export default usersReducer;