// actions.js
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const SET_USER_DATA = 'SET_USER_DATA';

export const loginSuccess = (token, user) => ({
  type: LOGIN_SUCCESS,
  payload: { token, user },
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});


export const setAllUserData = (userData) => ({
  type: SET_USER_DATA,
  payload: userData,
});