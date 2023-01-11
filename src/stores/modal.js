
import { defineStore } from "pinia";

export const useModalStore = defineStore({
	id: 'modal',
	state: () => ({
		showModal: false
	}),
	actions: {
		setModal(showModal) {
			this.showModal = showModal
		}
	},
	getters: {
	}
});