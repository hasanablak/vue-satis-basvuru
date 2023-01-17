
import { defineStore } from "pinia";
const getTypeText = (typeId) => {
	return typeId == 1 ? 'Yeni bir modül önerisi' : 'Bir modül hakkında öneri';
}
export const useProposalsStore = defineStore({
	id: 'proposals',
	state: () => ({
		proposals: [
			{
				id: '1',
				typeId: '1',
				typeText: 'Yeni bir modül önerisi',
				selectedModuleId: '',
				explanation: 'Açıklama',
				created_at: ''
			},
			{
				id: '2',
				typeId: '2',
				typeText: 'Bir modül hakkında öneri',
				selectedModuleId: '1',
				explanation: 'Açıklayıcı',
				created_at: ''
			}
		]
	}),
	actions: {
		setProposal(proposal) {
			this.proposals.push({
				...proposal,
				typeText: getTypeText(proposal.typeId.value),
				id: this.proposals.length + 1
			});
		},
		updateProposal(proposal) {
			const indexOfProposal = this.proposals.findIndex(p => p.id == proposal.id);

			console.log(proposal.typeId);
			this.proposals[indexOfProposal] = {
				...proposal,
				typeText: getTypeText(proposal.typeId.value),
			};
		},
		deleteProposal(proposal) {
			const proposalIndex = this.proposals.findIndex(p => p.id == proposal.id);
			this.proposals.splice(proposalIndex, 1);
		}
	},
	getters: {
	}
});