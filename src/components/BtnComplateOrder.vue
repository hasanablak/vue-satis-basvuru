<template>
	<button class="btn btn-primary" @click="complateOrder">
		İşlemi Tamamla
	</button>



</template>
<script setup>
import { useAuthStore } from "../stores/auth"
import { useModalStore } from '../stores/modal';
const authStore = useAuthStore;
const modalStore = useModalStore();

const complateOrder = () => {
	if (authStore.user) {
		alert("auth yok kayıt veya girişe yönlendir")
	} else {
		//modalStore.setModal(true)
		modalStore.setModal(true)
	}
}


</script>

<style>
.modal {
	padding-right: 17px;
	display: block;
	background: rgb(221 221 221 / 50%);
}
</style>