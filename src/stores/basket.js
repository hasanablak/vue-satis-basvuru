
import { defineStore } from "pinia";

export const useBasketStore = defineStore({
	id: 'basket',
	state: () => ({
		items: []
	}),
	actions: {
		addItemsToBasket(item) {
			let item_ = this.items.find(s => s.id == item.id);

			if (!item_) {
				this.items.push(item);
			}
			console.log(this.items);
		},
		removeItemsToBasket(item) {
			let itemIndex_ = this.items.findIndex(s => s.id == item.id);
			if (itemIndex_ != -1) {
				this.items.splice(itemIndex_, 1);
			}
		},
		emptyBasket() {
			this.items = [];
		}
	},
	getters: {
		tekCift: (state) => {
			return state.count % 2 == 0 ? 'Çift' : 'Tek'
		},
		totalBasket: (state) => {
			return state.items.reduce((p, c) => {
				return c.selectedPro ? p += c.price : p;
			}, 0);
		}
	}
});