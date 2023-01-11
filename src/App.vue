<script	setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import ModalDekont from './components/ModalDekont.vue';
import router from './router';
import { ref } from "vue";
</script>

<template>
	<div class="menu d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 border-bottom shadow-sm">
		<h5 class="my-0 mr-md-auto font-weight-normal">Ablak Yazılım</h5>
		<nav class="my-2 my-md-0 mr-md-3">
			<RouterLink :class="'p-2 text-white'" to="/">Anasayfa</RouterLink>
			<RouterLink :class="'p-2 text-white'" to="/about">Hakkında</RouterLink>
			<RouterLink :class="'p-2 text-white'" to="/contact">İletişim</RouterLink>
			<RouterLink :class="'p-2 text-white'" to="/modules">Modüller</RouterLink>
		</nav>
		<RouterLink :class="'btn btn-outline-primary'" to="/basket">Sepetim</RouterLink>
		<RouterLink :class="'btn btn-outline-primary'" to="/login-and-register">Hesabım</RouterLink>
		<RouterLink :class="'btn btn-outline-primary'" to="/hks">HKS</RouterLink>
	</div>
	<div :class="router.currentRoute.value.matched[0].path == '/hks' ? 'container-fluid' : 'container'">
		<RouterView />
	</div>

	<ModalDekont />
</template>

<style >
.body {
	background-color: #ad7676
}
</style>
<script >

</script>
