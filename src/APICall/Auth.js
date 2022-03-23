import { apiMethod } from "./ApiCall";

const loginUserAPI = (data) => {
  const APIData = {
    url: "/auth/login",
    method: "post",
    data,
  };
  return apiMethod({ ...APIData });
};

const signupUserAPI = (data) => {
  const apiData = {
    url: "/auth/signup",
    method: "post",
    data,
  };
  return apiMethod({ ...apiData });
};

export default {
  loginUserAPI,
  signupUserAPI,
};
