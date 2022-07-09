import { authConst } from "../constants";

export const authError = (data) => {
  return {
    type: authConst.AUTH_ERROR,
    payload: data,
  };
};

export const signUpSuccess = (data) => {
  return {
    type: authConst.SIGNUP_SUCCESS,
    payload: data,
  };
};

export const signInSuccess = (data) => {
  return {
    type: authConst.SIGNIN_SUCCESS,
    payload: data,
  };
};
