// import "core-js";
import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from '@/model/store'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import App from '@/views/App.jsx'
import dayjs from 'dayjs'
import zh from 'dayjs/locale/zh-cn'
import zh_CN from 'antd/lib/locale-provider/zh_CN'

import '@/common.less'

import '@/utils/global'

dayjs.locale(zh)

const root = createRoot(document.getElementById('root'))
console.log(process.env.stage)
if (process.env.stage === 'github') {
  root.render(
    <Provider store={store}>
      <HashRouter>
        <ConfigProvider locale={zh_CN}>
          <App />
        </ConfigProvider>
      </HashRouter>
    </Provider>
  )
} else {
  root.render(
    <Provider store={store}>
      <BrowserRouter>
        <ConfigProvider locale={zh_CN}>
          <App />
        </ConfigProvider>
      </BrowserRouter>
    </Provider>
  )
}
