import { combineReducers } from "redux";
import {authReducer} from "./reducers"


const appReducer = combineReducers({
  authReducer
});

const initialState = appReducer({}, {});

const rootReducer = (state = initialState, action) => {

  return appReducer(state, action);
};

export default rootReducer;
