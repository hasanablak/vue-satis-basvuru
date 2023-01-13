<template>
	<div class="dropdown" :class="isDropdownOpen && 'show'">
		<button class="btn dropdown-toggle btn text-white" @click="isDropdownOpen = !isDropdownOpen" type="button"
			id="dropdownMenuButton" data-mdb-toggle="dropdown" aria-expanded="false">
			Admin
		</button>
		<ul class="dropdown-menu" :class="isDropdownOpen && 'show'" aria-labelledby="dropdownMenuButton">
			<li>
				<RouterLink class="dropdown-item" to="/">A1. Parametreler</RouterLink>
			</li>
			<li>
				<RouterLink class="dropdown-item" to="/">A2. Üyelik Ücretlendirme</RouterLink>
			</li>
			<li>
				<RouterLink class="dropdown-item" to="/">A3. Kampanyalar</RouterLink>
			</li>
			<li>
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
			<li>
				<RouterLink class="dropdown-item" to="/">A5. Metinler</RouterLink>
			</li>
			<li>
				<RouterLink class="dropdown-item" to="/">A6. Opsiyonlar</RouterLink>
			</li>
			<li>
				<RouterLink class="dropdown-item" to="/admin/color-options">A7. Renk Seçenekleri</RouterLink>
			</li>
		</ul>
	</div>
</template>
<script setup>
import { ref } from "vue";
import { useModalStore } from '../../stores/modal';
const isDropdownOpen = ref(false);
const storeModal = useModalStore();
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