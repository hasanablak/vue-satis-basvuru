<template>
	<div class="card mb-4 shadow-sm">
		<div class="card-header">
			{{ module.name }}
		</div>
		<div class="card-body">
			<template v-if="selectedPro">
				<b>Pro Özellikler</b>
				<ul class="list-group">
					<li class="list-group-item" v-for="future in module.pro_futures">
						{{ future }}
					</li>
				</ul>
				<p class="card-text">{{ module.pro_notes }}</p>
			</template>
			<template v-else>
				<b>Deneme Sürümü Özellikleri</b>
				<ul class="list-group">
					<li class="list-group-item" v-for="future in module.try_futures">
						{{ future }}
					</li>
				</ul>
				<p class="card-text">{{ module.try_notes }}</p>
			</template>

			<div class="d-flex justify-content-between align-items-center">
				<div class="btn-group">
					<button type="button" class="btn btn-sm btn-outline-secondary" :class="!selectedPro && 'active'"
						@click="selectedPro = !selectedPro">Deneme
						Sürümü</button>
					<button type="button" class="btn btn-sm btn-outline-secondary">Sepete Ekle</button>
				</div>
				<small class="text-muted">1 aylık kullanım</small>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			selectedPro: true
		}
	},
	created() {
		// props are exposed on `this`
		console.log(this.module)
	}
}
</script>
<style scoped>

</style>
