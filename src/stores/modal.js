
import { defineStore } from "pinia";
export const useModalStore = defineStore({
	id: 'modal',
	state: () => ({
		showModal: ''
	}),
	actions: {
		setModal(showModal) {
			this.showModal = showModal
		}
	},
	getters: {
	}
});