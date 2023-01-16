
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
				code: "A",
				modules: []
			}
		]
	}),
	actions: {
		addDefinition(definition) {
			this.definitions.push({
				...definition,
				id: this.largestIdOfGroups + 1,
				modules: []
			})
			console.log(this.largestIdOfModules)
		},
		deleteDefinition(definition) {
			const indexOfDefinition = this.definitions.findIndex(d => d.id == definition.id);

			this.definitions.splice(indexOfDefinition, 1)
		},
		updateDefinition(definition) {
			const indexOfDefinition = this.definitions.findIndex(d => d.id == definition.id);

			this.definitions[indexOfDefinition] = definition;
		},
		addModule(definitionId, module) {
			const indexOfDefinition = this.definitions.findIndex(d => d.id == definitionId);
			this.definitions[indexOfDefinition].modules.push({
				...module,
				id: this.largestIdOfModules.find(s => s.groupId == definitionId).largetsIdOfModules + 1
			})
		},
		updateModule(definitionId, module, type, selectedGroupId) {
			/** Eğer Modül'ün grubu değişmedi ise sadece normal güncellemek yetecektir */
			/** Eğer Modül'ün grubu değişti ise,
			 * 1) Eski gruptan silinmeli
			 * 2) Yeni gruba eklenmelidir.
			 */

			const indexOfDefinition = this.definitions.findIndex(d => d.id == definitionId);


			if (type == 'normal update') {
				const indexOfModule = this.definitions[indexOfDefinition].modules.findIndex(m => m.id == module.id);
				this.definitions[indexOfDefinition].modules[indexOfModule] = module;
			} else if ('remove after add') {
				this.deleteModule(definitionId, module.id);
				this.addModule(selectedGroupId, module);
			}

		},
		deleteModule(definitionId, moduleId) {
			const indexOfDefinition = this.definitions.findIndex(d => d.id == definitionId);
			const indexOfModule = this.definitions[indexOfDefinition].modules.findIndex(m => m.id == moduleId);
			this.definitions[indexOfDefinition].modules.splice(indexOfModule, 1);
		}

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
		},
		largestIdOfGroups: state => {
			return Math.max(...state.definitions.map((group) => {
				return group.id;
			}));
		},
		largestIdOfModules: state => {
			return state.definitions.map((group) => {
				const x = {
					groupId: group.id,
					largetsIdOfModules: Math.max(...group.modules.map((module) => {
						return module.id;
					}))
				}
				return {
					...x,
					largetsIdOfModules: x.largetsIdOfModules >= 0 ? x.largetsIdOfModules : 0
				}

			})

		}
	}
});