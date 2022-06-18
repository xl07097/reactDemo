import axios from "axios";
// import {message} from 'antd';
import urls from "@/utils/urls";

const instance = axios.create({
  baseURL: '/note',
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    // 请求拦截器
    let token = sessionStorage.getItem("token");
    if (token) {
      config.headers["token"] = token;
    }

    return config;
  },
  (err) => {
    Promise.reject(err);
  }
);

instance.interceptors.response.use(
  (res) => {
    // 文件流 直接过去
    if (res.request.responseType === 'blob') {
      return res
    }
    const data = res.data
    const code = data.code

    // switch (data.code) {
    //     case 200:
    //         break;
    //     case 201:
    //         message.error(data.msg);
    //         break;
    //     case 300:
    //         message.error(data.msg);
    //         localStorage.clear();
    //         break;
    //     case 500:
    //         message.error(data.msg);
    //         break;
    // }

    return data;
  },
  (err) => {
    let response = err.response
    const { status } = response
    let errorMessage = response.data.error
      ? response.data.error
      : err.message
    Promise.reject(response);
  }
);

export default instance;
