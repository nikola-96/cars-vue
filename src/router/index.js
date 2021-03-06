import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AppCars from '../components/AppCars.vue'
import AddCar from '../views/AddCar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cars',
    name: 'Cars',
    component: AppCars
  },
  {
    path: '/add',
    name: 'AddCar',
    component: AddCar
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: AddCar
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
