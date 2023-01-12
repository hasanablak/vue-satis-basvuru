import { createRouter, createWebHistory } from 'vue-router'
import LoginAndRegister from '../views/LoginAndRegister.vue'
import Modules from '../views/Modules.vue'
import Orders from '../views/Orders.vue'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Basket from '../views/Basket.vue'
import Hks from '../views/HksLayout.vue'

import HksHome from '../views/HksHome.vue'
import Akrabalar from '../views/modules/Akrabalar.vue'
import Animsat from '../views/modules/Animsat.vue'
import KisiselButce from '../views/modules/KisiselButce.vue'
import Sozlesme from '../views/modules/Sozlesme.vue'
import Taki from '../views/modules/Taki.vue'

import AdminLayout from '@/views/admin/AdminLayout.vue'
import AdminColorOptions from '@/views/admin/ColorOptions.vue'
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
			path: '/basket',
			name: 'basket',
			component: Basket
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
			component: Orders,
			meta: {
				requiresAuth: true,
			}
		},
		{
			path: '/hks',
			name: 'hks',
			component: Hks,
			children: [
				{
					path: '',
					name: 'hks.home',
					component: () => HksHome,
					//props: route => ({ ...route.params, id: parseInt(route.params.id) })
				},
				{
					path: 'akrabalar',
					name: 'hks.akrabalar',
					component: () => Akrabalar,
					//props: route => ({ ...route.params, id: parseInt(route.params.id) })
				},
				{
					path: 'animsat',
					name: 'hks.animsat',
					component: () => Animsat
				},
				{
					path: 'kisisel-butce',
					name: 'hks.kisisel-butce',
					component: () => KisiselButce
				},
				{
					path: 'sozlesme',
					name: 'hks.sozlesme',
					component: () => Sozlesme
				},
				{
					path: 'taki',
					name: 'hks.taki',
					component: () => Taki
				}
			]
		},
		{
			path: '/admin',
			name: 'admin',
			component: AdminLayout,
			children: [
				{
					path: 'color-options',
					name: 'admin.color-options',
					component: AdminColorOptions
				}
			]
		}
	]
})

router.beforeEach((to, from) => {
	/*
	if (to.meta.requiresAuth && !window.user) {
		return { name: 'login-and-register', query: { redirect: to.fullPath } }
	}
	*/
})
export default router
