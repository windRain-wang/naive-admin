import axios from "axios";
import { useMessage, useDialog } from "naive-ui";

const baseURL = import.meta.env.VITE_APP_BASE_API as string

const Message = useMessage();
const dialog = useDialog();
const service = axios.create({
  baseURL: baseURL + '/api',
  timeout: 5000,
});

// request interceptor
service.interceptors.request.use(
  (config) => {
    // do something before request is sent
    return config;
  },
  (error) => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  (response) => {
    const res = response.data;

    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 200) {
      Message.warning(res.message || "Error", {
        duration: 5 * 1000,
      });

      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // to re-login
        dialog.error({
          title: "错误",
          content: "错了",
          positiveText: "啊",
          onPositiveClick: () => {
            console.log("nothing, no config");
          },
        });
      }

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      return Promise.reject(new Error(res.message || "Error"));
    } else {
      return res;
    }
  },
  (error) => {
    console.log("err" + error); // for debug
    Message.warning(error.message, {
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  }
);
export default service;
