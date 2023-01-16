<template>
	<div class="row">
		<div class="col">
			<div class="card">
				<div class="card-header">
					<div class="row">
						<div class="col">
							<h3> Modül Kodu ve Adı Tanımlama Düzenle</h3>
						</div>
					</div>
				</div>
				<div class="card-body">
					<form @submit.prevent="submit()">
						<div class="form-group">
							<label for="group">Grup Seçiniz</label>
							<select name="" id="group" class="form-control" v-model="selectedGroup">
								<option :value="group" v-for="group in _definitionStore.definitions">
									{{ group.name }}
								</option>
							</select>
						</div>
						<div class="form-group">
							<div class="input-group mb-3">
								<div class="input-group-prepend">
									<span class="input-group-text" id="basic-addon1">{{
										moduleCode
									}}</span>
								</div>
								<input v-model="module.name" type="text" class="form-control"
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
import { computed, onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();

const storeDefinition = useDefinitionStore();


const _definitionStore = useDefinitionStore();

const group = ref({});
const module = ref({});
const selectedGroup = ref({});
const moduleCode = ref();

/* TODO: ONMOUNTED KULLANIMINA BİR ÖRNEK */
onMounted(async () => {
	group.value = _definitionStore.definitions.find(definition => definition.id == route.params.group_id);

})


watch(() => group.value, (group, oldGroup) => {
	selectedGroup.value = group;
	module.value = group?.modules?.find(module => module.id == route.params.module_id);
})

watch(() => selectedGroup.value, (newSelectedGroup, oldSelectedGroup) => {
	let _moduleCode;
	if (newSelectedGroup.id === group.value.id) {
		_moduleCode = module.value?.id?.toString().padStart(2, '0');
	} else {
		_moduleCode = ((newSelectedGroup.modules?.length ?? 0) + 1).toString().padStart(2, '0')
	}
	moduleCode.value = newSelectedGroup.code + _moduleCode;
});

const submit = async () => {

	await storeDefinition.updateModule(
		route.params.group_id,
		module.value,
		selectedGroup.value.id === group.value.id ? 'normal update' : 'delete after add',
		selectedGroup.value.id
	);
	/*
	router.push({
		name: 'admin.tanimlar.genel-tanimlar.group.group_id.modules.module_id'
	})
	*/
	router.push({
		name: 'admin.tanimlar.genel-tanimlar.group.group_id.modules',
		params: {
			group_id: route.params.group_id == 0 ? 0 : selectedGroup.value.id
		}
	});


	//useRoute push?
	//router.push({ path: '/admin/tanimlar/genel-tanimlar/grup-kodu-ve-adi-tanimlari' })
}
const getModuleCode = () => {
	return module.value?.id?.toString().padStart(2, '0');
}


</script>