import { LOGIN, LOGOUT } from "../Constant/ActionTypes";
const isLogin = false;

const loginReducer = (state = isLogin, action) => {
  switch (action.type) {
    case LOGIN:
      return (state = true);
    case LOGOUT:
      return (state = false);
    default:
      return state;
  }
};

export default loginReducer;
