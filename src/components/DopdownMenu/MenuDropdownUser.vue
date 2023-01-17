<template>
	<div class="dropdown" :class="isDropdownOpen && 'show'">
		<button class="btn dropdown-toggle btn text-white" @click="isDropdownOpen = !isDropdownOpen" type="button"
			id="dropdownMenuButton" data-mdb-toggle="dropdown" aria-expanded="false">
			Yönetim
		</button>
		<ul class="dropdown-menu" :class="isDropdownOpen && 'show'" aria-labelledby="dropdownMenuButton">
			<li>
				<RouterLink class="dropdown-item" to="/user/management/color-options?type=user">Renk Seçenekleri
				</RouterLink>
				<RouterLink class="dropdown-item" to="#">Hazırlıklar
				</RouterLink>
				<RouterLink class="dropdown-item" to="#">Görüşmeler
				</RouterLink>
				<RouterLink class="dropdown-item" to="#">Web Adresleri
				</RouterLink>
				<RouterLink class="dropdown-item" to="/user/proposals">Öneriler
				</RouterLink>
			</li>
			<li v-if="false">
				<a class="dropdown-item" href="#">
					A4. Tanımlar &raquo;
				</a>
				<ul class="dropdown-menu dropdown-submenu">
					<li>
						<a class="dropdown-item" href="#">A4.1* Genel Tanımlar &raquo;</a>
						<ul class="dropdown-menu dropdown-submenu">
							<li>
								<RouterLink class="dropdown-item" :to="{
									name: 'admin.tanimlar.genel-tanimlar.grup-kodu-ve-adi-tanimlari'
								}">
									A4.1.1*
									Grup Kodu ve Adı Tanımları
								</RouterLink>
							</li>
							<li>
								<a class="dropdown-item" href="#">A4.1.2* Modül Kodu ve Adı Tanımları</a>
							</li>
						</ul>
					</li>
					<li>
						<a class="dropdown-item" href="#">A4.1* Modül Tanımları</a>
					</li>
				</ul>
			</li>
		</ul>
	</div>
</template>
<script setup>
import { ref, watch } from "vue";
import { useAuthStore } from "../../stores/auth";
import { useRoute } from "vue-router";
const isDropdownOpen = ref(false);
const storeAuth = useAuthStore();
const route = useRoute();
watch(() => route.query, (newQuery) => {
	if (newQuery.type == 'user') {
		storeAuth.setType('user');
	}
})// 20.000 brüt ~
</script>
<style scoped>
.dropdown-menu li {
	position: relative;
}

.dropdown-menu .dropdown-submenu {
	display: none;
	position: absolute;
	left: 100%;
	top: -7px;
}

.dropdown-menu .dropdown-submenu-left {
	right: 100%;
	left: auto;
}

.dropdown-menu>li:hover>.dropdown-submenu {
	display: block;
}
</style>