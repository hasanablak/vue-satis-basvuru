
import { defineStore } from "pinia";
export const useDefinitionStore = defineStore({
	id: 'definition',
	state: () => ({
		definitions: [
			{
				id: 1,
				name: "Hasan",
				code: "001H"
			},
			{
				id: 2,
				name: "Emin",
				code: "001E"
			},
			{
				id: 3,
				name: "Mehmet",
				code: "001M"
			},
			{
				id: 4,
				name: "Hamit",
				code: "002H"
			}
		]
	}),
	actions: {
		addDefinition(definition) {
			this.definitions.push(definition)
		},
		deleteDefinition(definition) {

		},
		updateDefinition(definition) {

		},

	},
	getters: {
		getFirstCharactersCount: (state) => {
			const x = [];

			state.definitions.forEach((d) => {
				const index = x.findIndex(s => s.char == d.name[0]);
				if (index == -1) {
					x.push({
						char: d.name[0],
						count: 1
					})
				} else {
					x[index].count += 1;
				}
			})

			return x;
		}
	}
});