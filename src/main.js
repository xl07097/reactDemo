
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from "react-router-dom";

import 'antd/lib/locale-provider/zh_CN';
// import moment from 'moment';
// import 'moment/locale/zh-cn';
import "./common.less";
import App from './views/app';
import $axios from '@/utils/fetch'

window.$axios = $axios;

// moment.locale('zh-cn');
console.log(React)

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
