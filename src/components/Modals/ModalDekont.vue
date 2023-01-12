<template>
	<div v-if="modalStore.showModal == 'dekont'" class="modal fade out show" tabindex="-1" role="dialog"
		style="display:block;">
		<div class="modal-dialog" role="document">
			<form @submit.prevent="uploadDekont">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">Ödeme Dekontu</h5>
						<button type="button" class="close" @click="modalStore.setModal(false)" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<p>İşlem dekontunuzu aşağıdaki alana yükleyiniz.</p>
						<input type="file" @change="changeFile" name="" id="">
						<object v-if="dekontAsBase64" class="img-thumbnail w-100" style="height:300px;"
							:data="dekontAsBase64" />
					</div>
					<div class="modal-footer">
						<button type="submit" class="btn btn-primary">Dekont Yükle</button>
						<button type="button" class="btn btn-secondary"
							@click="modalStore.setModal(false)">Close</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>
<script setup>
import { useModalStore } from '../../stores/modal';
import { useBasketStore } from '../../stores/basket';
import { ref } from "vue";
import axios from "axios";
import router from '../../router'

const modalStore = useModalStore();
const basketStore = useBasketStore();
const dekontAsBase64 = ref();
const file = ref();

function readFile(input) {
	file.value = input.files[0]
	if (file.value) {
		dekontAsBase64.value = URL.createObjectURL(file.value)
	}

}

const changeFile = (e) => {
	readFile(e.target);
}

const uploadDekont = () => {
	let formData = new FormData();
	formData.append('file', file.value);
	formData.append('items', JSON.stringify(basketStore.items));
	basketStore.emptyBasket()
	alert("Siparişiniz alınmıştır, siparişler sayfasına yönlendiriliyorsunuz...")
	router.push({ path: '/orders' })
	modalStore.setModal(false)
	axios.post("", formData)
		.then((e) => {
			//alert("Siparişiniz işleme alınmıştır")
		})
		.catch((e) => {
			//alert("hata")
		})

}
/*
export default {
	props: {
		showModal: {
			required: true,
			type: Object
		}
	},
	setup(props) {
		const showModal_ = toRef(props, 'showModal')
	}
}
*/
</script>