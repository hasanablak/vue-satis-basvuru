
import { defineStore } from "pinia";

export const useProposalsStore = defineStore({
	id: 'proposals',
	state: () => ({
		proposals: [

		]
	}),
	actions: {
		setProposal(proposal) {
			this.proposals.push({
				...proposal,
				id: this.proposals.length
			});
		}
	},
	getters: {
	}
});