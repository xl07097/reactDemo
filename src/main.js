import '@babel/polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from "react-router-dom";



import zhCN from 'antd/lib/locale-provider/zh_CN';
// import moment from 'moment';
// import 'moment/locale/zh-cn';
import "./common.less";
import App from './views/app';
import Test from '@/views/routerTest/Test'
import $axios from '@/utils/fetch'

window.$axios = $axios;

// moment.locale('zh-cn');

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
