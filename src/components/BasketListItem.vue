<template>
	<div class="row">
		<div class="col">
			<div class="row">
				<div class="col">
					{{ module.name }}
				</div>
			</div>
			<div class="row">
				<div class="col">
					<i v-html="module.selectedPro ? 'Tam Sürüm' : 'Deneme Sürümü'"></i>
				</div>
			</div>
		</div>
		<div class="col-md-3" style="font-size:20px;">
			{{ module.selectedPro ? module.price + '₺' : 0 + '₺' }}
		</div>
	</div>

</template>

<script setup>

defineProps({
	module: {
		type: Object,
		required: true
	}
});


</script>