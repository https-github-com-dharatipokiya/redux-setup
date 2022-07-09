import axios from "axios";
import { authError, signInSuccess, signUpSuccess } from "../actions/auth";
import { toast } from "react-toastify";

export const SignUP = (data) => {
  return async (dispatch) => {
    dispatch(authError());
    await axios
      .post(`https://solguruz.herokuapp.com/api/v1/user/register`, data)
      .then((res) => {
        toast.success(res.data.message);
        dispatch(signUpSuccess(res.data));
      })
      .catch((err) => {
        dispatch(authError(err?.response?.data?.message));
      });
  };
};

export const SignIN = (data) => {
  return async (dispatch) => {
    dispatch(authError());
    await axios
      .post(`https://solguruz.herokuapp.com/api/v1/user/login`, data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        dispatch(signInSuccess(res.data));
        toast.success("Signin successfully.");
      })
      .catch((err) => {
        dispatch(authError(err?.response?.data?.message));
      });
  };
};
