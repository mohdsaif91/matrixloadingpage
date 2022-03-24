import { apiMethod } from "./ApiCall";

const addCustomerOrder = (data) => {
  const dataApi = {
    url: "/order/addCustomerOrder",
    method: "post",
    data,
  };

  return apiMethod({ ...dataApi });
};

const getProductData = (id) => {
  const apiData = {
    url: `order/${id}`,
    method: "get",
  };

  return apiMethod({ ...apiData });
};

const getProductDataAPI = (data) => {
  const apiData = {
    url: "/order/getProduct",
    method: "post",
    data,
  };
  return apiMethod({ ...apiData });
};

export default {
  addCustomerOrder,
  getProductData,
  getProductDataAPI,
};
