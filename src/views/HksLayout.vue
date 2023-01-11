<template>
	<div class="row">
		<nav id="sidebarMenu" class="menu col-md-4 col-lg-2 d-md-block sidebar collapse">
			<div class="sidebar-sticky pt-3">
				<ul class="nav flex-column">
					<li class="nav-item">
						<RouterLink class="nav-link" :to="{ name: 'hks.home' }">
							<IconHome />
							Anasayfa
						</RouterLink>
					</li>
					<li class="nav-item" v-for="module in myModules">
						<RouterLink class="nav-link" :to="{ name: module.route_name }">
							<IconModule />
							{{ module.name }}
						</RouterLink>
					</li>
				</ul>

				<h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
					<span>Diğer</span>
					<a class="d-flex align-items-center text-muted" href="#" aria-label="Add a new report">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
							stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
							class="feather feather-plus-circle">
							<circle cx="12" cy="12" r="10"></circle>
							<line x1="12" y1="8" x2="12" y2="16"></line>
							<line x1="8" y1="12" x2="16" y2="12"></line>
						</svg>
					</a>
				</h6>
				<ul class="nav flex-column mb-2">
					<li class="nav-item">
						<a class="nav-link" href="#">
							<IconSupport />
							Destek
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">
							<IconArrowUp />
							Güncellemeler
						</a>
					</li>
				</ul>
			</div>
		</nav>
		<main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
			<RouterView />
		</main>
	</div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import IconModule from '../components/icons/IconModule.vue';
import IconHome from '../components/icons/IconHome.vue';
import IconSupport from '../components/icons/IconSupport.vue';
import IconArrowUp from '../components/icons/IconArrowUp.vue';
const myModules = [
	{
		"id": 1,
		"name": "Akrabalar",
		"pro_futures": [
			"Falan Filan",
			"Falan Filan2"
		],
		"try_futures": [
			"Bla Bla",
			"Bla Bla2"
		],
		"pro_notes": "Pro dsadsa",
		"try_notes": "Try dsadsa",
		"price": 80,
		"selectedPro": true,
		"experisDate": "",
		"route_name": "hks.akrabalar"
	},
	{
		"id": 1,
		"name": "Hatırlar/Anımsat ",
		"pro_futures": [
			"Falan Filan",
			"Falan Filan2"
		],
		"try_futures": [
			"Bla Bla",
			"Bla Bla2"
		],
		"pro_notes": "Pro dsadsa",
		"try_notes": "Try dsadsa",
		"price": 80,
		"selectedPro": true,
		"experisDate": "",
		"route_name": "hks.animsat"
	},
	{
		"id": 1,
		"name": "Takı Takip",
		"pro_futures": [
			"Falan Filan",
			"Falan Filan2"
		],
		"try_futures": [
			"Bla Bla",
			"Bla Bla2"
		],
		"pro_notes": "Pro dsadsa",
		"try_notes": "Try dsadsa",
		"price": 80,
		"selectedPro": true,
		"experisDate": "",
		"route_name": "hks.taki"
	},
]
</script>