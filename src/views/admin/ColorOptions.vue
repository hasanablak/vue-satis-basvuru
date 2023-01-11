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
									<div class="col-11">
										{{ color.name }}
									</div>
								</div>
							</li>
						</label>
						<li v-if="selectedColorOption != 0" class="list-group-item" :class="colorOptions[selectedColorOption].selectedColor ==
						colorOptions[selectedColorOption].defaultSelectedColor && 'disabled'" @click="returnToDefaultColor()">
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
							name: "Beyaz"
						},
						{
							name: "Krem"
						},
						{
							name: "Açık Krem"
						},
						{
							name: "Koyu Krem"
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
							name: "Beyaz"
						},
						{
							name: "Gri"
						},
						{
							name: "Açık Gri"
						},
						{
							name: "Koyu Gri"
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
							name: "Beyaz"
						},
						{
							name: "Mavi"
						},
						{
							name: "Açık Mavi"
						},
						{
							name: "Koyu Mavi"
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
							name: "Beyaz"
						},
						{
							name: "Yeşil"
						},
						{
							name: "Açık Yeşil"
						},
						{
							name: "Koyu Yeşil"
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
		}
	}
}
</script>
<style scoped>
.list-group-item.disabled {
	cursor: no-drop;
	background-color: rgb(176, 176, 176);
}

.list-group-item {
	cursor: pointer;
}
</style>