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

export const getProductFun = createAsyncThunk(
  "orderSlice/getProductFun",
  (data, { dispatch, rejectWithValue, fulfillWithValue }) => {
    // dispatch(startLoading());
    return Order.getProductData(data)
      .then((res) => {
        // dispatch(stopLoading());
        if (res.status === 200) {
          return fulfillWithValue(res.data);
        }
      })
      .catch((err) => {
        // dispatch(stopLoading());
        return rejectWithValue(err);
      });
  }
);

export const getProductBydateFilterFun = createAsyncThunk(
  "orderSlice/getProductByDateFilterFun",
  (data, { dispatch, fulfillWithValue, rejectWithValue }) => {
    // dispatch(startLoading());
    return Order.getProductDataAPI(data)
      .then((res) => {
        // dispatch(stopLoading());
        if (res.status === 200) {
          return fulfillWithValue(res.data);
        }
      })
      .catch((err) => {
        // dispatch(stopLoading());
        return rejectWithValue(err);
      });
  }
);

export const getProductonChangeFun = createAsyncThunk(
  "orderSlice/getProductByDateFilterFun",
  (data, { dispatch, fulfillWithValue, rejectWithValue }) => {
    dispatch(startLoading());
    return Order.getProductDataAPI(data)
      .then((res) => {
        dispatch(stopLoading());
        if (res.status === 200) {
          return fulfillWithValue(res.data);
        }
      })
      .catch((err) => {
        dispatch(stopLoading());
        return rejectWithValue(err);
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
    [getProductFun.fulfilled]: (state, action) => {
      return {
        ...state,
        orderData: action.payload,
        error: false,
      };
    },
    [getProductBydateFilterFun.fulfilled]: (state, action) => {
      return {
        ...state,
        filteredData: action.payload,
        error: false,
      };
    },
    [getProductBydateFilterFun.rejected]: (state, action) => {
      return {
        ...state,
        error: true,
        errorMessage: action.payload,
      };
    },
  },
});

const { reducer } = orderSlice;
export default reducer;
