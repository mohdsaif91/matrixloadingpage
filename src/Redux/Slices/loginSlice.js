import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import Auth from "../../APICall/Auth";
import { startLoading, stopLoading } from "./LoadingSlice";

export const loginUserFun = createAsyncThunk(
  "login/loginUser",
  (data, { dispatch, fulfillWithValue, rejectWithValue }) => {
    dispatch(startLoading());
    return Auth.loginUserAPI(data)
      .then((res) => {
        dispatch(stopLoading());
        if (res.status === 200) {
          fulfillWithValue(res.data);
        }
      })
      .catch((err) => {
        dispatch(stopLoading());
        return rejectWithValue(err.response.message);
      });
  }
);

export const signupUserFun = createAsyncThunk(
  "login/signupUser",
  (data, { dispatch }) => {
    return Auth.signupUserAPI(data)
      .then((res) => {
        dispatch(startLoading());
      })
      .catch((err) => console.log(err));
  }
);

const loginSlice = createSlice({
  name: "loginSlice",
  initialState: { loggedIn: sessionStorage.setItem("loggedIn", true) || false },
  reducers: {
    logoutUser: (state, action) => {
      sessionStorage.setItem("loggedIn", false);
      return {
        ...state,
        loggedIn: false,
      };
    },
  },
  extraReducers: {
    [loginUserFun.fulfilled]: (state, action) => {
      sessionStorage.setItem("loggedIn", true);
      return {
        ...state,
        loggedIn: true,
        error: false,
      };
    },
    [loginUserFun.rejected]: (state, action) => {
      return {
        ...state,
        error: true,
        errorMessage: action.payload,
      };
    },
  },
});

export const { logoutUser } = loginSlice.actions;
const { reducer } = loginSlice;
export default reducer;
