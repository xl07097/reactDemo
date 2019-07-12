
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from "react-router-dom";
import { LocaleProvider} from 'antd';

import zh_CN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';

import 'moment/locale/zh-cn';

import "./common.less";

import App from './views/app';

import $axios from '@/utils/fetch'

window.$axios = $axios;

moment.locale('zh-cn');

ReactDOM.render(<BrowserRouter><LocaleProvider locale={zh_CN}><App /></LocaleProvider></BrowserRouter>, document.getElementById('root'));
