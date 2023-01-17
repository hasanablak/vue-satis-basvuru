<template>
	<div class="row">
		<div class="col">
			<div class="card">
				<div class="card-header">
					<div class="row">
						<div class="col">
							<h3>Öneriyi Düzenle</h3>
						</div>
					</div>
				</div>
				<div class="card-body">
					<form @submit.prevent="submit()">
						<div class="form-group">
							<label for="proposals_type">Öneri Grubu</label>
							<select v-model="typeId" name="" id="proposals_type" class="form-control">
								<option value="0" disabled>Öneri grubu seçiniz</option>
								<option value="2">Bir modül hakkında öneri</option>
								<option value="1">Yeni bir modül önerisi</option>
							</select>
						</div>
						<div class="form-group" v-if="typeId == 2">
							<label for="grup_code">İlgili Modül</label>
							<select name="" v-model="selectedModuleId" id="select_module" class="form-control">
								<option value="0" disabled>İlgili modül seçiniz</option>
								<option :value="definition.id" v-for="definition in storeDefinition.definitions">
									{{ definition.code }}. {{ definition.name }}
								</option>
							</select>
						</div>
						<div class="form-group">
							<label for="explanation">Öneri Açıklaması</label>
							<textarea v-model="explanation" name="" id="explanation" cols="30" rows="3"
								class="form-control"></textarea>
						</div>
						<div class="form-group">
							<label for="note">Not(Varsa)</label>
							<textarea id="note" name="" v-model="note" cols="30" rows="2"
								class="form-control"></textarea>
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
import { ref, onMounted } from 'vue';
import { useDefinitionStore } from '@/stores/admin.group.definition';
import { useProposalsStore } from '../../stores/user.proposals';
import { useRoute, useRouter } from 'vue-router';
import Toast from '@/components/Toast.js'
const router = useRouter();
const route = useRoute();
const storeDefinition = useDefinitionStore();
const storeProposals = useProposalsStore();
const typeId = ref(0);
const selectedModuleId = ref(0);
const explanation = ref("");
const note = ref();

const submit = () => {
	storeProposals.updateProposal({
		'id': route.params.proposal_id,
		typeId,
		selectedModuleId,
		explanation,
		note
	});
	router.push({ name: 'user.proposals' });
	Toast()
		.fire({
			icon: 'success',
			title: 'Öneri düzenlendi!'
		});
}

onMounted(() => {
	const proposal = storeProposals.proposals.find(p => p.id == route.params.proposal_id);
	typeId.value = proposal.typeId;
	selectedModuleId.value = proposal.selectedModuleId;
	explanation.value = proposal.explanation;
	note.value = proposal.note;
})
</script>