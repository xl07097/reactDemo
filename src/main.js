
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import store from '@/model/store';
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider  } from "antd";

import zh_CN from "antd/lib/locale-provider/zh_CN";
import moment from "moment";

import "moment/locale/zh-cn";

import "./common.less";

import App from "./views/app";

moment.locale("zh-cn");

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <ConfigProvider locale={zh_CN}>
                <App />
            </ConfigProvider>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root"));
