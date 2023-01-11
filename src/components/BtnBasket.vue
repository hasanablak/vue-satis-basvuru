<template>
	<template v-if="storeBasket.items.find(s => s.id == module.id)">
		<button type="button" class="btn btn-sm btn-outline-secondary active"
			@click="storeBasket.removeItemsToBasket(module)">
			Sepete Eklendi!
		</button>
	</template>
	<template v-else>
		<button type="button" class="btn btn-sm btn-outline-secondary" @click="storeBasket.addItemsToBasket(module)">
			Sepete Ekle
		</button>
	</template>
</template>
<script setup>
import { useBasketStore } from "@/stores/basket";
const storeBasket = useBasketStore();

defineProps({
	module: {
		type: Object,
		required: true
	}
})
</script>