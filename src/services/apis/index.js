import axios from "axios";
import authStore from "../../stores/auth/authStore";

export const instance = axios.create({
  baseURL: "https://api-ecom.duthanhduoc.com/",
  timeout: 20 * 1000,
  headers: {
    "Content-Type": "application/json",
    "expire-access-token": 60 * 60 * 24, // 1 ngày
    "expire-refresh-token": 60 * 60 * 24 * 160, // 160 ngày
  },
});


// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const user = authStore.getState().user;
    const token = user?.access_token;
    console.log('Token gửi lên:', token);
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    if (response?.data) {
      return response?.data;
    }
    console.log(response);
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    console.log(error);
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error?.response?.data) {
      return Promise.reject(error?.response?.data);
    }
    return Promise.reject(error);
  }
);
