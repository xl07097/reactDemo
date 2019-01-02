import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'home',
      component: (resolve) => require(['@/views/Home.vue'],resolve)
    },
    {
      path: '/about',
      name: 'about',
      component: (resolve) => require(['@/views/About.vue'],resolve)
    },
    {
      path: "/user",
      name: "user",
      component: (resolve) => require(['@/views/users/index.vue'],resolve)
    },
    {
      path: "/carList",
      name: "carlist",
      component: (resolve) => require(['@/views/cars/carlist.vue'],resolve)
    }, 
    {
      path: "/cardetail/:id",
      name: "cardetail",
      component: (resolve) => require(['@/views/cars/cardetail.vue'],resolve)
    }
  ]
})
