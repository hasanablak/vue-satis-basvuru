<template>
	<div class="row">
		<div class="col">
			<div class="card">
				<div class="card-header">
					<div class="row">
						<div class="col">
							Grup Kodu ve Adı Tanımlama
						</div>
					</div>
				</div>
				<div class="card-body">
					<form @submit.prevent="submit()">
						<div class="input-group mb-3">
							<div class="input-group-prepend">
								<span class="input-group-text" id="basic-addon1">{{
									getGroupCodeV2()
								}}</span>
							</div>
							<input v-model="name" type="text" class="form-control" placeholder="Grup adı giriniz">
						</div>
						<div class="form-group d-flex justify-content-end">
							<button type="submit" class="btn btn-primary">Kaydet</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
import { useDefinitionStore } from '@/stores/admin.group.definition';
import { ref } from 'vue';
import router from '@/router';
const name = ref("");
const storeDefinition = useDefinitionStore();

const submit = async () => {

	await storeDefinition.addDefinition(
		{
			name: name.value,
			code: getGroupCodeV2()
		});

	name.value = "";

	router.push({ path: '/admin/tanimlar/genel-tanimlar/grup-kodu-ve-adi-tanimlari' })
}

const getCountTheName = () => {
	const char = storeDefinition.getFirstCharactersCount.find(s => s.char == name.value.toString()[0]?.toUpperCase())
	if (char) return char.count;
	else return 0;
}

const getGroupCode = () => {
	return (getCountTheName() + 1).toString().padStart(3, '0') + (name.value.toString().toUpperCase()[0] ?? 'X');
}

const getGroupCodeV2 = () => {
	return name.value.toString().toUpperCase()[0] ?? 'X';
}

</script>
<script >
import { storeToRefs } from 'pinia';

export default {
	setup() {
		const storeDefinition = useDefinitionStore();
		const { definitions } = storeToRefs(storeDefinition);
		return { definitions };
	},
	data() {
		return ({
			groupName: "",
		})
	},
	methods: {
		groupCode: function () {
			return this.groupName ? '1' + this.groupName[0].toUpperCase() : '???';
		}
	},
	computed: {
		submit: function () {

		}
	}
}
</script>