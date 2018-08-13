import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import person from "@/views/personal/index.vue"
import carlist from '@/views/cars/carlist.vue'
import carDetail from "@/views/cars/cardetail.vue"

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path:"/user",
      name:"user",
      component: person
    },
    {
      path: "/carList",
      name: "carlist",
      component: carlist
    }, {
      path: "/cardetail/:id",
      name: "cardetail",
      component: carDetail
    }
  ]
})
