import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Ofertas from '../views/Ofertas.vue'
import QuienesSomos from '../views/QuienesSomos.vue'
import Contactenos from '../views/Contactenos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ofertas',
    name: 'Ofertas',
    component: Ofertas
  },
  {
    path: '/quienes_somos',
    name: 'Quienes Somos',
    component: QuienesSomos
  },
  {
    path: '/contactenos',
    name: 'Contactenos',
    component: Contactenos
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
