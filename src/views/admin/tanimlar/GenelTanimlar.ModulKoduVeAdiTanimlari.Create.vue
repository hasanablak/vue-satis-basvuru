<template>
	<div class="row">
		<div class="col">
			<div class="card">
				<div class="card-header">
					<div class="row">
						<div class="col">
							<h3> Modül Kodu ve Adı Tanımlama</h3>
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
							<button @click="router.back()" type="button" class="btn btn-primary mx-1">
								Geri
							</button>
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
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();
const storeDefinition = useDefinitionStore();
const name = ref("");
const selectedGroup = ref(0);

onMounted(() => {
	if (route?.params?.group_id) {
		const moduleFromRoute = storeDefinition.definitions.find(s => s.id == route.params.group_id);
		selectedGroup.value = moduleFromRoute;
	}
})

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

	//router.push({ path: '/admin/tanimlar/genel-tanimlar/modul-kodu-ve-adi-tanimlari' })

	router.push({
		name: 'admin.tanimlar.genel-tanimlar.group.group_id.modules',
		query: {
			group_id: route.query.group_id
		}
	});
}


const getModuleCode = () => {
	let _groupCode = '001';
	if (selectedGroup.value) {
		_groupCode = (storeDefinition.largestIdOfModules.find(s => s.groupId == selectedGroup.value.id).largetsIdOfModules + 1).toString().padStart(2, '0');
	}
	return (selectedGroup.value?.code ?? '?') + _groupCode;
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