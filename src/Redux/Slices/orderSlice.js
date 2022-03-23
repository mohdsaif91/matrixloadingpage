import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Order from "../../APICall/Order";
import { startLoading, stopLoading } from "./LoadingSlice";

export const addCustomerOrder = createAsyncThunk(
  "orderslice/addCustomerOrder",
  (data, { dispatch, fulfillWithValue, rejectWithValue }) => {
    dispatch(startLoading());
    return Order.addCustomerOrder(data)
      .then((res) => {
        dispatch(stopLoading());
        if (res.status === 200) {
          return fulfillWithValue(res.data);
        }
      })
      .catch((err) => {
        dispatch(stopLoading());
        return rejectWithValue(err.response);
      });
  }
);

const orderSlice = createSlice({
  name: "orderSlice",
  initialState: {},
  extraReducers: {
    [addCustomerOrder.fulfilled]: (state, action) => {
      return {
        ...state,
        generatedOrder: action.payload[0],
        error: false,
      };
    },
    [addCustomerOrder.rejected]: (state, action) => {
      return {
        ...state,
        error: true,
      };
    },
  },
});

const { reducer } = orderSlice;
export default reducer;
