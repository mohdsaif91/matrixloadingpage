import { configureStore } from "@reduxjs/toolkit";

import loginSlice from "./Redux/Slices/loginSlice";
import loadingSlice from "./Redux/Slices/LoadingSlice";
import utilSlice from "./Redux/Slices/utilSlice";
import orderSlice from "./Redux/Slices/orderSlice";

const reducer = {
  login: loginSlice,
  loading: loadingSlice,
  util: utilSlice,
  order: orderSlice,
};

const Store = configureStore({
  reducer,
  devTools: true,
});

export default Store;
