import { createRouter, createWebHistory } from 'vue-router'
import LoginAndRegister from '../views/LoginAndRegister.vue'
import Modules from '../views/Modules.vue'
import Orders from '../views/Orders.vue'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue')
	},
    {
      path: '/login-and-register',
      name: 'login-and-register',
      component: LoginAndRegister
    },
    {
      path: '/modules',
      name: 'modules',
      component: Modules
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders
    },
  ]
})

export default router
