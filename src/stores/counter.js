
import { defineStore } from "pinia";

export const useCounterStore = defineStore({
	id: 'counter',
	state: () => ({
		count: 0
	}),
	actions: {
		increaseCounter(value) {
			console.log(state);
			this.count++;
		},
		decreaseCounter() {
			this.count--;
		}
	},
	getters: {
		tekCift: (state) => {
			return state.count % 2 == 0 ? 'Çift' : 'Tek'
		}
	}
});