<template>
	<div class="about">
		<h1>This is an about page</h1>
		<h3>Counter now value is: {{ storeCounter.count }}</h3>
	</div>
</template>

<style>

</style>

<script setup>
import { useCounterStore } from '@/stores/counter';

const storeCounter = useCounterStore();



</script>
