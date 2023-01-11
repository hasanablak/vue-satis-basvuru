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
					"name": "Akrabalar Modülü",
					"pro_futures": [
						"Falan Filan",
						"Falan Filan2"
					],
					"try_futures": [
						"Bla Bla",
						"Bla Bla2"
					],
					"pro_notes": "Pro dsadsa",
					"try_notes": "Try dsadsa",
					"price": 80
				},
				{
					"id": 2,
					"name": "Anımsat/Hatırlat Modülü",
					"pro_futures": [
						"Falan Filan",
						"Falan Filan2"
					],
					"try_futures": [
						"Bla Bla",
						"Bla Bla2"
					],
					"pro_notes": "Pro dsadsa",
					"try_notes": "Try dsadsa",
					"price": 75
				},
				{
					"id": 3,
					"name": "Kişisel Bütçe Modülü",
					"pro_futures": [
						"Falan Filan",
						"Falan Filan2"
					],
					"try_futures": [
						"Bla Bla",
						"Bla Bla2"
					],
					"pro_notes": "Pro dsadsa",
					"try_notes": "Try dsadsa",
					"price": 60
				},
				{
					"id": 4,
					"name": "Sözleşme/Garanti Modülü",
					"pro_futures": [
						"Falan Filan",
						"Falan Filan2"
					],
					"try_futures": [
						"Bla Bla",
						"Bla Bla2"
					],
					"pro_notes": "Pro dsadsa",
					"try_notes": "Try dsadsa",
					"price": 60
				},
				{
					"id": 5,
					"name": "Takı Takip Modülü",
					"pro_futures": [
						"Falan Filan",
						"Falan Filan2"
					],
					"try_futures": [
						"Bla Bla",
						"Bla Bla2"
					],
					"pro_notes": "Pro dsadsa",
					"try_notes": "Try dsadsa",
					"price": 100
				}
			]
		}
	}
}
</script>
