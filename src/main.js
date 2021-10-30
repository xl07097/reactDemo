import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "@/model/store";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import App from "@/views/App.jsx";
import "dayjs/locale/zh-cn";
import zh_CN from "antd/lib/locale-provider/zh_CN";

import "@/common.less";

import "@/utils/global";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ConfigProvider locale={zh_CN}>
        <App />
      </ConfigProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
