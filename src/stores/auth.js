
import { defineStore } from "pinia";

export const useAuthStore = defineStore({
	id: 'auth',
	state: () => ({
		type: 'user'
	}),
	actions: {
		setType(type) {
			this.type = type;
		}
	},
	getters: {
	}
});