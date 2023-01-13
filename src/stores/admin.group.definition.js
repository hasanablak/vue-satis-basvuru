
import { defineStore } from "pinia";
export const useDefinitionStore = defineStore({
	id: 'definition',
	state: () => ({
		definitions: [
			{
				id: 1,
				name: "Hobiler",
				code: "H",
				modules: [
					{
						id: 1,
						name: "Güvercin",
						code: ""
					},
					{
						id: 2,
						name: "Güvercin",
						code: ""
					},
					{
						id: 3,
						name: "Güvercin",
						code: ""
					}
				]
			},
			{
				id: 2,
				name: "Muhtelif",
				code: "M",
				modules: [
					{
						id: 1,
						name: "Kaplan",
						code: ""
					},
					{
						id: 2,
						name: "Kaplan",
						code: ""
					},
					{
						id: 3,
						name: "Kaplan",
						code: ""
					}
				]
			},
			{
				id: 3,
				name: "Akademik",
				code: "A"
			}
		]
	}),
	actions: {
		addDefinition(definition) {
			this.definitions.push({ ...definition, id: this.definitions.length + 1 })
		},
		deleteDefinition(definition) {
			const indexOfDefinition = this.definitions.findIndex(d => d.id == definition.id);

			this.definitions.splice(indexOfDefinition, 1)
		},
		updateDefinition(definition) {
			const indexOfDefinition = this.definitions.findIndex(d => d.id == definition.id);

			this.definitions[indexOfDefinition] = definition;
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