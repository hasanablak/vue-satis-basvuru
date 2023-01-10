

<template>
	Anasayfa
	<hr>
	dasdas<br>
	{{ storeCounter.count }}<br>
	<button @click="storeCounter.increaseCounter">+</button>
	<button @click="storeCounter.decreaseCounter">-</button>
	<hr>
	Counter şuanda çift mi tek mi? <br>
	{{ storeCounter.tekCift }}

	<br>
	<label for="">İnput üzerinden değiştirmek ister misin?</label>
	<input type="text" v-model="storeCounter.count" />
</template>

<script setup>
import { ref, computed } from 'vue';
import { useCounterStore } from '@/stores/counter'

const storeCounter = useCounterStore();

const counter = ref(0);

const increaseCounter = () => {
	counter.value++;
}

const decreaseCounter = () => {
	counter.value--;
}

const tekCift = computed(() => {
	return counter.value % 2 == 0 ? 'Çift' : 'Tek'
})

</script>