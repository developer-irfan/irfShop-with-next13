import { LOGIN, ADMINLOGIN, LOGOUT } from "../Constant/ActionTypes";
export const userLogin = (email, password) => {
  return {
    type: LOGIN,
    payload: {
      userEmail: email,
      userPassword: password,
    },
  };
};

export const adminLogin = () => {
  return {
    type: ADMINLOGIN,
  };
};

export const userLogout = () => {
  return {
    type: LOGOUT,
  };
};
