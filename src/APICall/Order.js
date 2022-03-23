import { apiMethod } from "./ApiCall";

const addCustomerOrder = (data) => {
  const dataApi = {
    url: "/order/addCustomerOrder",
    method: "post",
    data,
  };

  return apiMethod({ ...dataApi });
};

export default {
  addCustomerOrder,
};
