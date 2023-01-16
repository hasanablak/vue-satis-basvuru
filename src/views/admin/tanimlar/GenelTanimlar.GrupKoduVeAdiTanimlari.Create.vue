<template>
	<div class="row">
		<div class="col">
			<div class="card">
				<div class="card-header">
					<div class="row">
						<div class="col">
							<h3>Grup Kodu ve Adı Tanımlama</h3>
						</div>
					</div>
				</div>
				<div class="card-body">
					<form @submit.prevent="submit()">
						<div class="form-group">
							<label for="group_name">Grup adı</label>
							<input type="text" placeholder="Grup adı giriniz" id="group_name" v-model="name"
								class="form-control">
						</div>
						<div class="form-group">
							<label for="grup_code">Grup kodu</label>
							<input type="text" placeholder="Grup kodu giriniz" id="group_code" v-model="groupCode"
								class="form-control">
						</div>
						<div class="input-group mb-3 d-none">
							<div class="input-group-prepend">
								<span class="input-group-text" id="basic-addon1">{{
									getGroupCodeV2()
								}}</span>
							</div>
							<input v-model="name" type="text" class="form-control" placeholder="Grup adı giriniz">
						</div>
						<div class="form-group d-flex justify-content-end">
							<button @click="router.back()" type="button" class="btn btn-primary mx-1">
								Geri
							</button>
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
import { useRouter } from 'vue-router';
import { ref, watch } from 'vue';
const router = useRouter();
const name = ref("");
const groupCode = ref("X");

watch(() => groupCode.value, (newGroupCode) => {
	/**
	 * Grup Code daha önceden kullanılmış mı
	 */

});

watch(() => name.value, () => {
	groupCode.value = getGroupCodeV2();
});


const storeDefinition = useDefinitionStore();

const submit = async () => {

	await storeDefinition.addDefinition(
		{
			name: name.value,
			code: groupCode.value
		});

	name.value = "";

	router.push({ name: 'admin.tanimlar.genel-tanimlar.grup-kodu-ve-adi-tanimlari' })
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
	return name.value
		.toString()
		.replace(/Ğ/gim, "G")
		.replace(/Ü/gim, "U")
		.replace(/Ş/gim, "S")
		.replace(/İ/gim, "I")
		.replace(/Ö/gim, "O")
		.replace(/Ç/gim, "C")
		.toUpperCase()[0] ?? 'X';
}

</script>
<script >
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';

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