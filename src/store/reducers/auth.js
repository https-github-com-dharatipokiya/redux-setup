import { authConst } from "../constants";

const initialState = {
  error: "",
  data: "",
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authConst.AUTH_ERROR:
      return {
        ...state,
        data: "",
        error: action.payload,
      };
    //signup
    case authConst.SIGNUP_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: "",
      };

    //signin
    case authConst.SIGNIN_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: "",
      };

    default:
      return state;
  }
};
