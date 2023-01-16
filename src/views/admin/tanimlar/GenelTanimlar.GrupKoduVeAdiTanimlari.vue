<template>
	<div class="row">
		<div class="col">
			<div class="card">
				<div class="card-header">
					<div class="row">
						<div class="col">
							<h3>Grup Kodları ve Adları</h3>
						</div>
						<div class="col-2 d-flex justify-content-end">
							<RouterLink class="btn btn-primary mx-1" :to="{
								name: 'admin.tanimlar.genel-tanimlar.group.group_id.modules',
								params: {
									group_id: 0
								}
							}">
								Bütün Modüller
							</RouterLink>
							<!-- { name: 'admin.tanimlar.genel-tanimlar.modul-kodu-ve-adi-tanimlari' } -->
						</div>
						<div class="col-1">
							<button class="btn btn-primary" @click="goToNewGroup()">
								Yeni +
							</button>
						</div>
					</div>
				</div>
				<div class="card-body">
					<table class="table table-hover" v-if="storeDefinition.definitions.length">
						<thead class="thead-dark">
							<tr>
								<th scope="col">Grup Kodu</th>
								<th scope="col">Grup Adı</th>
								<th scope="col">Modüller</th>
								<th scope="col-2">İşlemler</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="definition in storeDefinition.definitions">
								<td>{{ definition.code }}</td>
								<td>{{ definition.name }}</td>
								<td>
									<RouterLink class="btn btn-warning"
										:to="`grup-kodu-ve-adi-tanimlari/${definition.id}/modules`">
										{{ definition.modules?.length ?? '0' }} adet
									</RouterLink>
								</td>
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
					<div v-else class="w-100" @click="goToNewGroup()">
						<div
							style="border:1px dashed #000; border-radius:30px; padding:50px; text-align: center;cursor:pointer">
							<h5>Hiç grup tanımlanmamış grup tanımlamak için lütfen tıklayınız</h5>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>

import { useDefinitionStore } from '@/stores/admin.group.definition';
import Swall from 'sweetalert2';
import { useRouter } from 'vue-router';
const storeDefinition = useDefinitionStore();
const router = useRouter();
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

const goToNewGroup = () => {
	router.push({ name: 'admin.tanimlar.genel-tanimlar.grup-kodu-ve-adi-tanimlari.create' });
}


</script>
<style scoped>
table.table td:last-child,
table.table th:last-child {
	display: flex;
	justify-content: end;
}
</style>