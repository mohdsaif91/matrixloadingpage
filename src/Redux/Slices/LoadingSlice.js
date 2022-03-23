import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  name: "loadingSlice",
  initialState: { loading: false },
  reducers: {
    startLoading: (state, action) => {
      return {
        ...state,
        loading: true,
      };
    },
    stopLoading: (state, action) => {
      return {
        ...state,
        loading: false,
      };
    },
  },
});

export const { startLoading, stopLoading } = loadingSlice.actions;
const { reducer } = loadingSlice;
export default reducer;
