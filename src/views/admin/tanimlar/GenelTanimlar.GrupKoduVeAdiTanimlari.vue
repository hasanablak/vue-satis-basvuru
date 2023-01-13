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
								<th scope="col-2">İşlemler</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="definition in storeDefinition.definitions">
								<td>{{ definition.code }}</td>
								<td>{{ definition.name }}</td>
								<td>
									<button class="btn btn-warning">Düzenle</button> |
									<button class="btn btn-danger">Sil</button>
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

const storeDefinition = useDefinitionStore();

</script>
<style scoped>
table.table td:last-child,
table.table th:last-child {
	display: flex;
	justify-content: end;
}
</style>