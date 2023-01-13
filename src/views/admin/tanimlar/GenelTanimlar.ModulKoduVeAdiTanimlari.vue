<template>
	<div class="row">
		<div class="col">
			<div class="card">
				<div class="card-header">
					<div class="row">
						<div class="col">
							Modül Kodları ve Adları
						</div>
						<div class="col-1">
							<RouterLink class="btn btn-primary"
								:to="{ name: 'admin.tanimlar.genel-tanimlar.modul-kodu-ve-adi-tanimlari.create' }">
								Yeni +
							</RouterLink>
						</div>
					</div>
				</div>
				<div class="card-body">
					<table class="table table-hover">
						<thead class="thead-dark">
							<tr>
								<th scope="col">Grup Kodu</th>
								<th scope="col">Modül Adı</th>
								<th scope="col-2">İşlemler</th>
							</tr>
						</thead>
						<tbody v-for="definition in definitions">
							<tr v-for="module in definition.modules">
								<td>{{ definition.code + module.id.toString().padStart(2, '0') }}</td>
								<td>{{ module.name }}</td>
								<td>
									<RouterLink tag="button" class="btn btn-info"
										:to="`grup-kodu-ve-adi-tanimlari/${definition.id}`">
										Düzenle
									</RouterLink>
									|
									<button class="btn btn-danger" :class="definition.modules?.length > 0 && 'disabled'"
										@click="remove(definition)">
										Sil
									</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
import { useDefinitionStore } from '@/stores/admin.group.definition';
import Swall from 'sweetalert2';
import { onMounted, ref, onUpdated, watch } from 'vue';
import { useRoute } from "vue-router"
import router from '../../../router';
const storeDefinition = useDefinitionStore();
/* TODO: useRoute router kullanımına örnek 1.0 */
const route = useRoute();
const definitions = ref([]);
const remove = async (definition) => {
	const iCantDelete = definition.modules?.length > 0;

	if (iCantDelete) {
		Swall.fire({
			icon: 'info',
			title: 'Bu grup altında tanımlanmış modüller olduğundan silemezsiniz!'
		})
	} else {
		await Swall.fire({
			icon: 'question',
			title: 'Silmek istediğinize emin misiniz?',
			showConfirmButton: true,
			showCancelButton: true,
			cancelButtonText: 'Hayır',
			confirmButtonText: 'Evet'
		})
			.then((e) => {
				if (e.value) {
					storeDefinition.deleteDefinition(definition);
				}
			})
	}
}

onMounted(() => {
	console.log(route.query.group_id)
	/* TODO: useRoute router kullanımına örnek 1.1 */
	//console.log(route.params);
	definitions.value = route.query.group_id
		? storeDefinition.definitions.filter(s => s.id == route.query.group_id)
		: storeDefinition.definitions;
	console.log("mounted")
});

watch(() => route.query.group_id, (newRouteParamsId) => {
	console.log(newRouteParamsId)
	definitions.value = storeDefinition.definitions;
	console.log("watch")
})


const calis = () => {
	const modulesInCode = storeDefinition.definitions.filter(s => s.id == route.params.id);
	definitions.value = modulesInCode;
}
</script>

<style scoped>
table.table td:last-child,
table.table th:last-child {
	display: flex;
	justify-content: end;
}
</style>