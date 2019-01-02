import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router/router'
import iView from 'iview'
import 'iview/dist/styles/iview.css';
import './common.less'

Vue.use(iView)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')
