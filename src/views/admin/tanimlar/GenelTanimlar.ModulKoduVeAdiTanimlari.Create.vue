<template>
	<div class="row">
		<div class="col">
			<div class="card">
				<div class="card-header">
					<div class="row">
						<div class="col">
							Modül Kodu ve Adı Tanımlama
						</div>
					</div>
				</div>
				<div class="card-body">
					<form @submit.prevent="submit()">
						<div class="form-group">
							<label for="grup-kodu-select">Grup kodu ve adı seçiniz</label>
							<select name="" id="grup-kodu-select" class="form-control" v-model="selectedGroup">
								<option value="0" selected disabled>Grup kodu ve adı</option>
								<option :value="definition" v-for="definition in storeDefinition.definitions">
									{{ definition.code }} |
									{{ definition.name }}
								</option>
							</select>
						</div>
						<div class="form-group">
							<label for="modul-adi">Modül adı</label>
							<div class="input-group mb-3">
								<div class="input-group-prepend">
									<span class="input-group-text" id="basic-addon1">{{
										getModuleCode()
									}}</span>
								</div>
								<input v-model="name" type="text" id="modul-adi" class="form-control"
									placeholder="Modül adı giriniz">
							</div>
						</div>
						<div class="form-group d-flex justify-content-end">
							<button type="submit" class="btn btn-primary">Kaydet</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
import { useDefinitionStore } from '@/stores/admin.group.definition';
import { ref, computed } from 'vue';
import router from '@/router';
const storeDefinition = useDefinitionStore();
const name = ref("");
const selectedGroup = ref("0");


/**
 * Seçilen grup ıd altındaki 
 * modules isimli arrayde
 * kaç adet name değişkeninden var?
 */

/*
   Seçilen grup ıd altındaki
   modules isimli arrayin lenghti
*/

const submit = async () => {

	await storeDefinition.addModule(selectedGroup.value.id,
		{
			name: name.value,
			//code: getModuleCode()
			code: ""
		});

	router.push({ path: '/admin/tanimlar/genel-tanimlar/modul-kodu-ve-adi-tanimlari' })
}


const getModuleCode = () => {

	return (selectedGroup.value?.code ?? '?')
		+ ((selectedGroup.value.modules?.length ?? 0) + 1).toString().padStart(3, '0')
}


</script>
<script >
import { storeToRefs } from 'pinia';

export default {
	setup() {
		const storeDefinition = useDefinitionStore();
		const { definitions } = storeToRefs(storeDefinition);
		return { definitions };
	},
	data() {
		return ({
			groupName: "",
		})
	},
	methods: {
		groupCode: function () {
			return this.groupName ? '1' + this.groupName[0].toUpperCase() : '???';
		}
	},
	computed: {
		submit: function () {

		}
	}
}
</script>