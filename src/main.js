import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router/router'
// import store from '@/store/store'
// import Alert from '@/components/alert/index'

import iView from 'iview'

import 'iview/dist/styles/iview.css';
// import 'font-awesome/css/font-awesome.css'
import './common.less'

Vue.use(iView)
// Vue.use(Alert)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  // store,
  render: h => h(App)
}).$mount('#app')
