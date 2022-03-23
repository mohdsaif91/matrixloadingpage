import { createSlice } from "@reduxjs/toolkit";

const utilSlice = createSlice({
  name: "utilSlice",
  initialState: { index: 0 },
  reducers: {
    setTab: (state, action) => {
      return { ...state, index: action.payload };
    },
  },
});

export const { setTab } = utilSlice.actions;
const { reducer } = utilSlice;
export default reducer;
