
<template>
	<h3>Sistem şuanda demo olarak çalışmaktadır</h3>
	<p>Lütfen açıklamaları okuyunuz</p>
	<div class="card">
		<div class="card-body">
			<div class="card-header">
				Modüller Sayfası
			</div>
			<ul class="list-group">
				<li class="list-group-item">
					1) Modüller sayfasına giderek modül ekleme çıkartma yapabilirsiniz
				</li>
				<li class="list-group-item">
					2) Modüller sayfasındaki modülleri deneme sürümü veya tam sürüm olarak sepete ekleyebilirsiniz
				</li>
				<li class="list-group-item">
					3) Modül için deneme sürümü seçildiğinde farklı özellikler, açıklamalar ve kullanım süresi
					gösterilir, tam sürüm seçildiğinde farklı gösterilir
				</li>
				<li class="list-group-item">
					4) Deneme sürümü olarak seçilen ürünlerin kullanım süresi 10 dakika iken, tam sürüm olarak seçilen
					modüllerin kullanım süresi 1 saattir
				</li>
			</ul>
		</div>
		<div class="card-body">
			<div class="card-header">
				Sepetim Sayfası
			</div>
			<ul class="list-group">
				<li class="list-group-item">
					1) Sepetim sayfasında, sepetinize eklediğiniz modüller yer almaktadır.
				</li>
				<li class="list-group-item">2) Sepetim sayfasında, modülleri çıkartma işlemi yapabilirsiniz</li>
				<li class="list-group-item">3) Sepetim sayfasında sağ tarafta bir özet bölümü bulunur ve ödeme özetiniz
					yer alır</li>
				<li class="list-group-item">4) Ödemeyi tamamla butonuna basarak dekont yükleme işlemi yapabilirsiniz
				</li>
				<li class="list-group-item">5) Dekont yükledikten sonra siparişler sayfasına yönlendirileceksiniz</li>
				<li class="list-group-item">
					6) Dekont yüklendikten sonra kullanıcının e-posta adresine otomatik olarak bir fatura
					gönderilecektir (henüz yapılmadı)
				</li>
			</ul>
		</div>
		<div class="card-body">
			<div class="card-header">
				Siparişler sayfası
			</div>
			<ul class="list-group">
				<li class="list-group-item">
					1) Bu sayfada gösterilen siparişler demo amaçlı konulmuştur
				</li>
				<li class="list-group-item">
					2) Kullanıcının satın alma işlemi gerçekleştirdiği modüller sipariş olarak gruplanarak bu sayfada
					gösterilir
				</li>
			</ul>
		</div>
		<div class="card-body">
			<div class="card-header">
				HKS Sayfası
			</div>
			<ul class="list-group">
				<li class="list-group-item">
					1) Bu sayfa sistemin işleyen sayfası, modüllerin kullanıldığı sayfa olarak düşünülmüştür
				</li>
				<li class="list-group-item">
					2) Modüllerin nasıl işlediğini bilmediğim için kullanıcıya tanımlanacak olan modülleri birer sayfa
					gibi düşünülmüştür. Modüllerin kullanım süresi bittikten sonra ilgili modülün sayfasına giremez.<br>
					Modül kullanım süresi, modül ile yapılan işlem adedi olarak da değerlendirilebilir.
				</li>
				<li class="list-group-item">
					3) Modül deneme süresi ise 10 dakika, tam sürüm ise 1 saat sonra yok olacak şekilde ayarlanacaktır
				</li>
				<li class="list-group-item">
					4) Modüller arasında kullanımı ücretsiz olan modüller de bulunmamaktadır. Bu modüller kullanıcıya
					otomatik olarak tanımlanır.
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useCounterStore } from '@/stores/counter'

const storeCounter = useCounterStore();

const counter = ref(0);

const increaseCounter = () => {
	counter.value++;
}

const decreaseCounter = () => {
	counter.value--;
}

const tekCift = computed(() => {
	return counter.value % 2 == 0 ? 'Çift' : 'Tek'
})

</script>