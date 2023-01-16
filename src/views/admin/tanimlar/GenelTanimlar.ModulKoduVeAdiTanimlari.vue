<template>
	<div class="row">
		<div class="col">
			<div class="card">
				<div class="card-header">
					<div class="row">
						<div class="col">
							<h3>
								<b
									v-html="selectedGroup ? selectedGroup.code + ' | ' + selectedGroup.name + ' - ' : ''"></b>
								Modül
								Kodları
								ve
								Adları
							</h3>
						</div>
						<div class="col-2 d-flex justify-content-end">
							<RouterLink class="btn btn-primary mx-1"
								:to="{ name: 'admin.tanimlar.genel-tanimlar.grup-kodu-ve-adi-tanimlari' }">
								Bütün Gruplar
							</RouterLink>
						</div>
						<div class="col-1">
							<button class="btn btn-primary" @click="goToNewModule()">
								Yeni +
							</button>
						</div>
					</div>
				</div>
				<div class="card-body">
					<table class="table table-hover" v-if="definitions[0]?.modules?.length">
						<thead class="thead-dark">
							<tr>
								<th scope="col">Modül Kodu</th>
								<th scope="col">Modül Adı</th>
								<th scope="col-2">İşlemler</th>
							</tr>
						</thead>
						<tbody v-for="definition in definitions">
							<tr v-for="module in definition.modules">
								<td>{{ definition.code + module.id.toString().padStart(2, '0') }}</td>
								<td>{{ module.name }}</td>
								<td>
									<!--TODO: RouterLinkde button kullanımına örnek-->
									<RouterLink tag="button" class="btn btn-info" :to="{
										name: 'admin.tanimlar.genel-tanimlar.group.group_id.modules.module_id',
										params: {
											group_id: definition.id,
											module_id: module.id
										}
									}">

										Düzenle
									</RouterLink>
									|
									<button class="btn btn-danger" @click="remove(definition.id, module.id)">
										Sil
									</button>
								</td>
							</tr>
						</tbody>
					</table>
					<div v-else class="w-100" @click="goToNewModule()">
						<div
							style="border:1px dashed #000; border-radius:30px; padding:50px; text-align: center;cursor:pointer">
							<h5>Hiç modül tanımlanmamış modül tanımlamak için lütfen tıklayınız</h5>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
import { useDefinitionStore } from '@/stores/admin.group.definition';
import { onMounted, ref, onUpdated, watch } from 'vue';
import { useRoute, useRouter } from "vue-router"
import Swall from "sweetalert2"
const storeDefinition = useDefinitionStore();
/* TODO: useRoute(1.0) router kullanımına örnek 1.0 */
const route = useRoute();
const router = useRouter();
const definitions = ref([]);
const selectedGroup = ref();
const remove = async (groupId, moduleId) => {
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
				storeDefinition.deleteModule(groupId, moduleId);
			}
		})
}
const goToNewModule = () => {
	router.push({
		name: 'admin.tanimlar.genel-tanimlar.group.group_id.modules.create',
		params: {
			group_id: route.params.group_id ?? 0
		},
		query: { group_id: route.query.group_id }
	})
}
onMounted(() => {
	console.log(route.params.group_id)
	/* TODO: useRoute(1.1) router kullanımına örnek 1.1 */
	//console.log(route.params);

	definitions.value = route.params.group_id != 0
		? storeDefinition.definitions.filter(s => s.id == route.params.group_id)
		: storeDefinition.definitions;
	console.log("mounted");
});

onMounted(() => {
	if (route?.params?.group_id) {

		const moduleFromRoute = storeDefinition.definitions.find(s => s.id == route.params.group_id);
		selectedGroup.value = moduleFromRoute;
	}
})

watch(() => route.params.group_id, (newRouteParamsId) => {
	if (newRouteParamsId == undefined) {
		definitions.value = storeDefinition.definitions;
		selectedGroup.value = "";
	} else {
		/** onMounteddaki işlemler bir daha yapılması gerekebilir */
	}
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