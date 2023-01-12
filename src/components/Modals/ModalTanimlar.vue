<template>
	<div v-if="modalStore.showModal == 'tanimlar'" class="modal fade out show" tabindex="-1" role="dialog"
		style="display:block;">
		<div class="modal-dialog" role="document">
			<form @submit.prevent="uploadDekont">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">Grup Kodu ve Adı Tanımları</h5>
						<button type="button" class="close" @click="modalStore.setModal(false)" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<div class="form-group">
							<label for="grup-kodu">Grup Kodunu Giriniz</label>
							<input type="text" id="grup-kodu" class="form-control">
						</div>
						<div class="form-group">
							<label for="grup-adi">Grup Adını Giriniz</label>
							<input type="text" id="grup-adi" class="form-control">
						</div>
					</div>
					<div class="modal-footer">
						<button type="submit" class="btn btn-primary">Kaydet</button>
						<button type="button" class="btn btn-secondary"
							@click="modalStore.setModal(false)">İptal</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>
<script setup>
import { useModalStore } from '../../stores/modal';
import { ref } from "vue";

const modalStore = useModalStore();

</script>