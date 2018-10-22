import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Person from "@/views/users/index.vue"
import Carlist from '@/views/cars/carlist.vue'
import CarInfo from "@/views/cars/cardetail.vue"

Vue.use(Router)

export default new Router({
  mode: "history",
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
      path: "/user",
      name: "user",
      component: Person
    },
    {
      path: "/carList",
      name: "carlist",
      component: Carlist
    }, 
    {
      path: "/cardetail/:id",
      name: "cardetail",
      component: CarInfo
    }
  ]
})
