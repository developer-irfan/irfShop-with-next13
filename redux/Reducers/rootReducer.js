import { combineReducers } from "redux";
import loginReducer from "./LoginReducer";
import adminLoginReducer from "./AdminLoginReducer";

const mainReducer = combineReducers({
  loginReducer,
  adminLoginReducer,
});

export default mainReducer;
