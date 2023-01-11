
import { defineStore } from "pinia";

export const useAuthStore = defineStore({
	id: 'auth',
	state: () => ({
		user: {}
	}),
	actions: {
		removeItemsToBasket(item) {
			let itemIndex_ = this.items.findIndex(s => s.id == item.id);
			if (itemIndex_ != -1) {
				this.items.splice(itemIndex_, 1);
			}
		}
	},
	getters: {
	}
});