

<template>
	<div class="row">
		<div class="col-8">
			<template v-if="storeBasket.items.length > 0">
				<div class="row">
					<div class="col-md-12" v-for="module in storeBasket.items">
						<Module :disabled="true" :module="module" />
					</div>
				</div>
			</template>
			<template v-else>
				<div class="card">
					<div class="card-body p3">
						Sepetinizde ürün bulunmamaktadır
					</div>
				</div>
			</template>
		</div>
		<div class="col-4">
			<div class="row">
				<div class="col">
					<div class="card p-1">
						<h3>Sepet Özet</h3>
						<ul class="list-group">
							<li class="list-group-item" v-for="module in storeBasket.items">
								<BasketListItem :module="module" />
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col">
					<div class="card p-1">
						<h3>Sepet Toplamı</h3>
						<p class="card-text p-3">
							{{ storeBasket.totalBasket }} ₺
							<hr>
							KDV + 18% <br>
							<b>
								Toplam:
								{{ (storeBasket.totalBasket / 100 * 18) + storeBasket.totalBasket }} ₺</b>
						</p>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col">
					<div class="card p-1">
						<BtnComplateOrder v-if="storeBasket.items.length > 0" />
					</div>
				</div>
			</div>
		</div>
	</div>

</template>

<style>

</style>

<script setup>
import Module from "../components/Module.vue"
import BasketListItem from "../components/BasketListItem.vue"
import BtnComplateOrder from "../components/BtnComplateOrder.vue"

import { useBasketStore } from '@/stores/basket';
const storeBasket = useBasketStore();

</script>