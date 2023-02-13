import { ADMINLOGIN, LOGOUT } from "../Constant/ActionTypes";
const isLogin = false;
const adminLoginReducer = (state = isLogin, action) => {
  if (action.type === ADMINLOGIN) return (state = true);
  if (action.type === LOGOUT) return (state = false);
  return state;
};

export default adminLoginReducer;
