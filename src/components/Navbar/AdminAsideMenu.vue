<template>
	<nav id="sidebarMenu" class="menu col-md-4 col-lg-2 d-md-block sidebar collapse">
		<div class="sidebar-sticky pt-3">
			<ul class="nav flex-column dropdown-nav">
				<li class="nav-item">
					<a href="" class="nav-link">Anasayfa</a>
					<ul class="dropdown-submenu-hasan dropdown-nav">
						<li>
							<a href="" class="nav-link">A1. <span>Parametreler</span></a>
						</li>
						<li class="nav-item">
							<a class="nav-link" to="/b">A2. <span>Üyelik Ücretlendirme</span></a>
						</li>
						<li class="nav-item">
							<a class="nav-link" to="/c">A3. <span>Kampanyalar</span></a>
						</li>
						<li>
							<a href="" class="nav-link">A4. <span>Tanımlar</span></a>
							<ul class="dropdown-submenu-hasan dropdown-nav">
								<li>
									<a href="" class="nav-link">A4.1* <span>Genel Tanımlar</span></a>
									<ul class="dropdown-submenu-hasan">
										<li>
											<RouterLink
												:to="{ name: 'admin.tanimlar.genel-tanimlar.grup-kodu-ve-adi-tanimlari' }"
												class="nav-link">
												A4.1.1* <span>Grup Kodu ve Adı</span>
											</RouterLink>
										</li>
										<li>
											<RouterLink :to="{
												name: 'admin.tanimlar.genel-tanimlar.group.group_id.modules',
												params: {
													group_id: 0
												}
											}" class="nav-link">
												A4.1.2* <span>Modül Kodu ve Adı</span>
											</RouterLink>
										</li>
									</ul>
								</li>
								<li>
									<a href="" class="nav-link">A4.2* Modül Tanımları</a>
								</li>
							</ul>
						</li>
						<li class="nav-item">
							<a class="nav-link" to="/f">A5. <span>Metinler</span></a>
						</li>
						<li class="nav-item">
							<a class="nav-link" to="/f">A6. <span>Opsiyonlar</span></a>
						</li>
						<li class="nav-item">
							<RouterLink class="nav-link" to="/admin/color-options">A7. <span>Renk Seçenekleri</span>
							</RouterLink>
						</li>
					</ul>
				</li>
				<li class="nav-item" v-for="group in storeDefinition.definitions">
					<a class="nav-link">{{ group.code }}. <span>{{ group.name }}</span></a>
					<ul class="dropdown-submenu-hasan dropdown-nav">
						<li v-for="module in group.modules">
							<a href="" class="nav-link">{{ group.code + module.id.toString().padStart(2, '0') }}.
								<span> {{ module.name }}</span></a>
						</li>
					</ul>
				</li>
				<li class="nav-item d-none">
					<a class="nav-link">A4 Tanımlar</a>
					<ul class="dropdown-submenu-hasan dropdown-nav">
						<li>
							<a href="" class="nav-link">A4.1* <span>Genel Tanımlar</span></a>
							<ul class="dropdown-submenu-hasan">
								<li>
									<RouterLink
										:to="{ name: 'admin.tanimlar.genel-tanimlar.grup-kodu-ve-adi-tanimlari' }"
										class="nav-link">
										A4.1.1* <span>Grup Kodu ve Adı</span>
									</RouterLink>
								</li>
								<li>
									<RouterLink :to="{
										name: 'admin.tanimlar.genel-tanimlar.group.group_id.modules',
										params: {
											group_id: 0
										}
									}" class="nav-link">
										A4.1.2* <span>Modül Kodu ve Adı</span>
									</RouterLink>
								</li>
							</ul>
						</li>
						<li>
							<a href="" class="nav-link">A4.2* Modül Tanımları</a>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script setup>
import { ref } from 'vue';
import { useDefinitionStore } from '@/stores/admin.group.definition';
const storeDefinition = useDefinitionStore();

</script>

<style scoped>
.dropdown-nav>li:hover>.dropdown-submenu-hasan {
	display: block;
}

.dropdown-nav>li:hover>a,
.dropdown-submenu-hasan>li:hover>a {
	color: #16181b;
	background-color: #ffffff;
}

.dropdown-nav>li:hover>a>span,
.dropdown-submenu-hasan>li:hover>a>span {
	text-decoration: underline;
}

.dropdown-nav>li:hover::before,
.dropdown-submenu-hasan>li:hover::before {
	content: "\00BB";
	position: absolute;
	margin-top: 8px;
	color: #ff0000;
	font-weight: bold;
}

.dropdown-nav .dropdown-submenu-hasan {
	display: none;
	list-style-type: none;
	left: 10%;
	padding-left: 10%;
}

ul {
	padding-inline-start: 0px;
}
</style>