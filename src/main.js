import React from 'react';
import ReactDOM from 'react-dom';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

import "./common.less";

moment.locale('zh-cn');

import App from './views/app';


ReactDOM.render(<App />, document.getElementById('root'));
