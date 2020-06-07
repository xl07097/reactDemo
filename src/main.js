import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "@/model/store";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import App from "@/views/App";

import zh_CN from "antd/lib/locale-provider/zh_CN";

import moment from "moment";
import "moment/locale/zh-cn";
moment.locale("zh-cn");

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
