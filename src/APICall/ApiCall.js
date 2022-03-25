import Axios from "axios";

// const url = "http://localhost:5001/api/v1";
const url = "https://matrixpharmaserver.herokuapp.com/api/v1";

export const apiMethod = async (payload) => {
  const axios = Axios.create({
    baseURL: url,
  });

  let res;
  try {
    res = await axios(payload.url, {
      method: payload.method,
      data: payload.data,
    });
  } catch (err) {
    console.log(err);
  }

  return res;
};
