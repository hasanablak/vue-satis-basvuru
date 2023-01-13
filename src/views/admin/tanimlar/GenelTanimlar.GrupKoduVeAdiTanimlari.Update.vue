<template>
	<div class="row">
		<div class="col">
			<div class="card">
				<div class="card-header">
					<div class="row">
						<div class="col">
							Grup Kodu ve Adı Tanımlama Düzenle
						</div>
					</div>
				</div>
				<div class="card-body">
					<form @submit.prevent="submit()">
						<div class="input-group mb-3">
							<div class="input-group-prepend">
								<span class="input-group-text" id="basic-addon1">{{ group.code }}</span>
							</div>
							<input v-model="group.name" type="text" class="form-control" placeholder="Grup adı giriniz">
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
import { computed, onMounted, ref } from 'vue';
import router from '../../../router';
const storeDefinition = useDefinitionStore();


const _definitionStore = useDefinitionStore();

const group = ref({});
/* TODO: ONMOUNTED KULLANIMINA BİR ÖRNEK */
onMounted(async () => {
	group.value = _definitionStore.definitions.find(definition => definition.id == router.currentRoute._value.params.id);
})

const submit = async () => {

	await storeDefinition.updateDefinition(group.value);

	router.push({ path: '/admin/tanimlar/genel-tanimlar/grup-kodu-ve-adi-tanimlari/grup-kodu-ve-adi-tanimlari' })
}

/*
TODO:COMPUTED KULLANIMINA BİR ÖRNEK

const group = computed({
	get() {
		return _definitionStore.definitions.find(definition => definition.id == router.currentRoute._value.params.id);
	},
	set(val) { //group = "falan falan" şeklinde tanımlayabilirsin
		console.log(val) 
	}
});
*/

/*

const group = computed(() => {
		return _definitionStore.definitions.find(definition => definition.id == router.currentRoute._value.params.id);
	})


const group = computed(() => return _definitionStore.definitions.find(definition => definition.id == router.currentRoute._value.params.id))
*/
</script>