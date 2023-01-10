<script setup>
import Module from "../components/Module.vue"

</script>

<template>
	<div class="row">
		<div class="col-md-12" v-for="module in modules">
			<Module :module="module" />
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			modules: [
				{
					"id": 1,
					"name": "Module Name 1",
					"pro_futures": [
						"Falan Filan",
						"Falan Filan2"
					],
					"try_futures": [
						"Bla Bla",
						"Bla Bla2"
					],
					"pro_notes": "Pro dsadsa",
					"try_notes": "Try dsadsa"
				},
				{
					"id": 2,
					"name": "Module Name 1",
					"pro_futures": [
						"Falan Filan",
						"Falan Filan2"
					],
					"try_futures": [
						"Bla Bla",
						"Bla Bla2"
					],
					"pro_notes": "Pro dsadsa",
					"try_notes": "Try dsadsa"
				}
			]
		}
	}
}
</script>
