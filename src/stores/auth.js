
import { defineStore } from "pinia";

export const useAuthStore = defineStore({
	id: 'auth',
	state: () => ({
		type: 'admin'
	}),
	actions: {
		setType(type) {
			this.type = type;
		}
	},
	getters: {
	}
});