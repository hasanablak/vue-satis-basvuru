<template>
	<div class="row">
		<div class="col">
			<div class="card">
				<div class="card-header">
					<div class="row">
						<div class="col">
							<h3>Önerilerim</h3>
						</div>
						<div class="col-1">
							<button class="btn btn-primary" @click="goToNewProposal()">
								Yeni +
							</button>
						</div>
					</div>
				</div>
				<div class="card-body">
					<table class="table table-hover" v-if="storeProposals.proposals.length">
						<thead class="thead-dark">
							<tr>
								<th scope="col">Sıra No</th>
								<th scope="col">Öneri Grubu</th>
								<th scope="col">Modül</th>
								<th scope="col">Açıklama</th>
								<th scope="col-2">İşlemler</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="proposal in storeProposals.proposals">
								<td>{{ proposal.id }}</td>
								<td>{{ proposal.typeText }}</td>
								<td>{{ proposal.typeId == 2 ? getSelectedModuleName(proposal.selectedModuleId) : '-' }}
								</td>
								<td>{{ proposal.explanation }}</td>
								<td>
									<RouterLink tag="button" class="btn btn-info" :to="`proposals/${proposal.id}`">
										Düzenle
									</RouterLink>
									|
									<button class="btn btn-danger" @click="remove(proposal)">
										Sil
									</button>
								</td>
							</tr>
						</tbody>
					</table>
					<div v-else class="w-100" @click="goToNewProposal()">
						<div
							style="border:1px dashed #000; border-radius:30px; padding:50px; text-align: center;cursor:pointer">
							<h5>Hiç öneri tanımlanmamış öneri tanımlamak için lütfen tıklayınız</h5>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>

import { useProposalsStore } from '@/stores/user.proposals';
import { useDefinitionStore } from '@/stores/admin.group.definition';
import Swall from 'sweetalert2';
import { useRouter } from 'vue-router';
import Toast from '@/components/Toast.js'
const storeProposals = useProposalsStore();
const definitionStore = useDefinitionStore();
const router = useRouter();

const getSelectedModuleName = (moduleId) => {
	const group = definitionStore.definitions.find(d => d.id == moduleId);
	return group.code + ' | ' + group.name;
}

const remove = async (definition) => {

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
				storeProposals.deleteProposal(definition);
				Toast()
					.fire({
						icon: 'success',
						title: 'Öneri silindi!'
					});
			}
		})
}

const goToNewProposal = () => {
	router.push({ name: 'user.proposals.create' });
}


</script>
<style scoped>
table.table td:last-child,
table.table th:last-child {
	display: flex;
	justify-content: end;
}
</style>