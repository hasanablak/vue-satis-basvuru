<template>
	<div class="row">
		<div class="col">
			<div class="card">
				<div class="card-body">
					<label for="">HKS renk seçenekleri</label>
					<select class="form-control" v-model="selectedColorOption">
						<option :value="colorOption.id" v-for="colorOption in colorOptions">
							{{ colorOption.name }}
						</option>
					</select>
				</div>
				<div class="card-body">
					<div class="card-header">
						<h3>{{ colorOptions[selectedColorOption].name }}</h3>
					</div>
					<ul class="list-group">
						<label :for="color.name" v-for="color in colorOptions[selectedColorOption].colors">
							<li :class="colorOptions[selectedColorOption].selectedColor == color.name && 'active'"
								class="list-group-item">
								<div class="row">
									<div class="col-1">
										<input v-model="colorOptions[selectedColorOption].selectedColor" type="radio"
											:value="color.name" :id="color.name"
											:name="'secici-' + colorOptions[selectedColorOption].id"
											class="form-control d-none">
										<IconCheck
											v-if="color.name == colorOptions[selectedColorOption].selectedColor" />
										<IconUnCheck v-else />
									</div>
									<div class="col-10">
										{{ color.name }}
									</div>
									<div class="col-1" v-if="storeAuth.type == 'admin'">
										<input type="color" v-model="color.color_code">
									</div>
								</div>
							</li>
						</label>
						<li v-if="selectedColorOption != 0" class="list-group-item" :class="colorOptions[selectedColorOption].selectedColor ==
						colorOptions[selectedColorOption].defaultSelectedColor ? 'disabled' : 'enabled'" @click="returnToDefaultColor()">
							Standart Renge Geri Dön
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
import IconCheck from "@/components/Icons/IconCheck.vue";
import IconUnCheck from "@/components/Icons/IconUnCheck.vue";
import { ref } from 'vue'
import { useAuthStore } from "../../stores/auth";
const storeAuth = useAuthStore();

</script>
<script>
export default {
	data() {
		return {
			selectedColorOption: 0,
			colorOptions: [
				{
					id: 0,
					name: "Lütfen renk alanı seçimi yapınız"

				},
				{
					id: 1,
					name: "Krem Alan Rengi",
					colors: [
						{
							name: "Beyaz",
							color_code: "#ffffff"
						},
						{
							name: "Krem",
							color_code: "#f4eed7"
						},
						{
							name: "Açık Krem",
							color_code: "#f6f1de"
						},
						{
							name: "Koyu Krem",
							color_code: "#ebe0b7"
						},
					],
					selectedColor: "Krem",
					defaultSelectedColor: "Krem"

				},
				{
					id: 2,
					name: "Gri Alan Rengi",
					colors: [
						{
							name: "Beyaz",
							color_code: "#ffffff"
						},
						{
							name: "Gri",
							color_code: "#d9d9d9"
						},
						{
							name: "Açık Gri",
							color_code: "#eaeaea"
						},
						{
							name: "Koyu Gri",
							color_code: "#cbcbcb"
						},
					],
					selectedColor: "Gri",
					defaultSelectedColor: "Gri"
				},
				{
					id: 3,
					name: "Mavi Alan Rengi",
					colors: [
						{
							name: "Beyaz",
							color_code: "#ffffff"
						},
						{
							name: "Mavi",
							color_code: "#5e8ce8"
						},
						{
							name: "Açık Mavi",
							color_code: "#759ceb"
						},
						{
							name: "Koyu Mavi",
							color_code: "#2160df"
						},
					],
					selectedColor: "Mavi",
					defaultSelectedColor: "Mavi"
				},
				{
					id: 4,
					name: "Yeşil Alan Rengi",
					colors: [
						{
							name: "Beyaz",
							color_code: "#ffffff"
						},
						{
							name: "Yeşil",
							color_code: "#c4d79b"
						},
						{
							name: "Açık Yeşil",
							color_code: "#d2e0b2"
						},
						{
							name: "Koyu Yeşil",
							color_code: "#9aba52"
						},
					],
					selectedColor: "Yeşil",
					defaultSelectedColor: "Yeşil"
				}
			]
		}
	},
	methods: {
		returnToDefaultColor: function () {
			this.colorOptions[this.selectedColorOption].selectedColor = this.colorOptions[this.selectedColorOption].defaultSelectedColor;
		},
		/*
		hexToRGB: function (h = '#955050') {
			let r = 0, g = 0, b = 0;

			// 3 digits
			if (h.length == 4) {
				r = "0x" + h[1] + h[1];
				g = "0x" + h[2] + h[2];
				b = "0x" + h[3] + h[3];

				// 6 digits
			} else if (h.length == 7) {
				r = "0x" + h[1] + h[2];
				g = "0x" + h[3] + h[4];
				b = "0x" + h[5] + h[6];
			}

			return "" + +r + "," + +g + "," + +b + "";
		},
		convertRGBtoHex: function (red, green, blue) {
			return "#" + ColorToHex(red) + ColorToHex(green) + ColorToHex(blue);
		},
		changeColor: function (e, b) {
			console.log(e.target.value)
		}
		*/
	}
}
</script>
<style scoped>
.list-group-item.disabled {
	background-color: #fff;
	color: #000;
	cursor: no-drop;
}

.list-group-item.enabled {
	background-color: #9aba52;
	color: #fff;
	font-weight: bold;
}

.list-group-item {
	cursor: pointer;
}
</style>