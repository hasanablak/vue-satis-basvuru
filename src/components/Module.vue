<template>
	<div class="card mb-4 shadow-sm">
		<div class="card-header">
			<div class="row">
				<div class="col">{{ module_.name }}</div>
				<div class="col offset-md-5">
					<div class="price">
						{{ module_.selectedPro ? module.price : 0 }} ₺
					</div>
				</div>
			</div>
		</div>
		<div class="card-body">
			<template v-if="module_.selectedPro">
				<b>Tam Sürüm Özellikleri</b>
				<ul class="list-group">
					<li class="list-group-item" v-for="future in module_.pro_futures">
						{{ future }}
					</li>
				</ul>
				<p class="card-text">{{ module_.pro_notes }}</p>
			</template>
			<template v-else>
				<b>Deneme Sürümü Özellikleri</b>
				<ul class="list-group">
					<li class="list-group-item" v-for="future in module_.try_futures">
						{{ future }}
					</li>
				</ul>
				<p class="card-text">{{ module_.try_notes }}</p>
			</template>

			<div class="d-flex justify-content-between align-items-center">
				<div class="btn-group">
					<button :disabled="disabled" type="button" class="btn btn-sm btn-outline-secondary"
						:class="module_.selectedPro && 'active'" @click="module_.selectedPro = !module_.selectedPro">
						<template v-if="!module_.selectedPro">
							Deneme Sürümü
						</template>
						<template v-else>
							Tam Sürüm
						</template>
					</button>
					<BtnBasket v-if="basketBtn" :module="module_" />
				</div>
				<small class="text-muted">
					{{ module_.selectedPro ? '1 saat kullanım' : '10 dakika kullanım' }}
				</small>
			</div>
		</div>
	</div>
</template>
<script setup>
import BtnBasket from './BtnBasket.vue';

defineProps({
	module: {
		type: Object,
		required: true
	},
	disabled: {
		type: Boolean,
		required: false,
		default: false
	},
	basketBtn: {
		type: Boolean,
		required: false,
		default: true
	}
});

</script>
<script>

export default {
	data() {
		return {
			module_: {
				selectedPro: true,
				...this.module
			}
		}
	},
	created: function () {
		console.log(this.module_)
	}
}
</script>
<style scoped>
.price {
	background-color: rgb(160, 193, 221);
	text-align: center;
}
</style>
