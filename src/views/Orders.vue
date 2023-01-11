<script setup>
import Module from "../components/Module.vue"

</script>

<template>
	<div class="row">
		<div class="col-12">
			<div class="card" v-for="order in orders">
				<div class="card-header">
					<div class="row">
						<div class="col">
							<h4>#159159</h4>
						</div>
						<div class="col-md3">
							{{ order.total }} ₺
						</div>
					</div>
				</div>
				<div class="card-body">
					<template v-for="module in order.items">
						<Module :disabled="true" :module="module" :basketBtn="false" />
					</template>
				</div>
				<hr>
				<div class="card-body">
					<h5>Dekont Bilgileri</h5>
					<object data="./dekont.pdf" class="img-thumbnail w-100" />
				</div>
			</div>
		</div>

	</div>
</template>

<script>
export default {
	data() {
		return {
			orders: [
				{
					orderId: "",
					total: "93.7",
					items: [
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
							"price": 80,
							"selectedPro": true
						},
						{
							"id": 2,
							"name": "Anımsat/Hatırlar Modili",
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
							"price": 75,
							"selectedPro": false
						}
					]
				}
			]
		}
	}
}
</script>