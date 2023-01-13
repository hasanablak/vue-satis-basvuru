<template>
	<div class="row">
		<div class="col">
			<div class="card">
				<div class="card-header">
					<div class="row">
						<div class="col">
							Grup Kodları ve Adları
						</div>
						<div class="col-1">
							<RouterLink class="btn btn-primary"
								:to="{ name: 'admin.tanimlar.genel-tanimlar.grup-kodu-ve-adi-tanimlari.create' }">
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
										:to="`modul-kodu-ve-adi-tanimlari?group_id=${definition.id}`">
										{{ definition.modules?.length ?? '0' }} adet
									</RouterLink>
								</td>
								<td>
									<RouterLink tag="button" class="btn btn-info"
										:to="`grup - kodu - ve - adi - tanimlari / ${definition.id}`">
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
const storeDefinition = useDefinitionStore();

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


</script>
<style scoped>
table.table td:last-child,
table.table th:last-child {
	display: flex;
	justify-content: end;
}
</style>