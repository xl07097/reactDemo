import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, IndexRoute } from 'react-router'
import createHistory from 'history/createBrowserHistory';
import routes from '@/router/index'

import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

import "./common.less";

moment.locale('zh-cn');

// import App from './views/app';


ReactDOM.render(<Router history={browserHistory} routes={routes}></Router>, document.getElementById('root'));
