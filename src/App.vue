<script	setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
	<div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
		<h5 class="my-0 mr-md-auto font-weight-normal">Ablak Yazılım</h5>
		<nav class="my-2 my-md-0 mr-md-3">
			<RouterLink :class="'p-2 text-dark'" to="/">Anasayfa</RouterLink>
			<RouterLink :class="'p-2 text-dark'" to="/about">Hakkında</RouterLink>
			<RouterLink :class="'p-2 text-dark'" to="/contact">İletişim</RouterLink>
			<RouterLink :class="'p-2 text-dark'" to="/modules">Modüller</RouterLink>
		</nav>
		<RouterLink :class="'btn btn-outline-primary'" to="/login-and-register">Hesabım</RouterLink>
	</div>

	<RouterView />
</template>

<style scoped>
header {
	line-height: 1.5;
	max-height: 100vh;
}

.logo {
	display: block;
	margin: 0 auto 2rem;
}

nav {
	width: 100%;
	font-size: 12px;
	text-align: center;
	margin-top: 2rem;
}

nav a.router-link-exact-active {
	color: var(--color-text);
}

nav a.router-link-exact-active:hover {
	background-color: transparent;
}

nav a {
	display: inline-block;
	padding: 0 1rem;
	border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
	border: 0;
}

@media (min-width: 1024px) {
	header {
		display: flex;
		place-items: center;
		padding-right: calc(var(--section-gap) / 2);
	}

	.logo {
		margin: 0 2rem 0 0;
	}

	header .wrapper {
		display: flex;
		place-items: flex-start;
		flex-wrap: wrap;
	}

	nav {
		text-align: left;
		margin-left: -1rem;
		font-size: 1rem;

		padding: 1rem 0;
		margin-top: 1rem;
	}
}
</style>
