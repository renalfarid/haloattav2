<template>
  <div class="container">
    <div class="header-title">
      <a-divider orientation="left" class="ant-divider-title-left">Haloatta Pilihan Tepat Ibadah Umroh Tanpa Repot</a-divider>
      <a-row :gutter="16">
        <a-col :span="16">
          <h6 class="subtitle">
            <p>Beragam pilihan produk komponen perjalanan wisata halal, memudahkan anda untuk membeli dan membuat Paket perjalanan wisata halal.
            Ibadah umroh pastinya menjadi impian semua umat muslim di seluruh dunia. Bagi Kamu yang masih kesulitan mencari
            travel umroh aman dan terpercaya.</p> 
            <p>Sekarang tidak perlu pusing lagi, di haloatta ibadah umroh kamu akan menjadi
            lebih mudah dan yaman. Semua yang kamu butuhkan untuk ibadah umroh sudah tersedia di haloatta. Mulai dari hotel,
            pesawat, destinasi, paspor online, paket umroh dengan promo terbaik, bahkan tabungan umroh kamu bisa dapatkan
            dengan mudah di haloatta.com. </p>
            <p>Nikmati perjalanan ibadah umroh kamu tanpa repot bersama haloatta.</p>
          </h6>
        </a-col>
      </a-row>
    </div>

    <a-row :gutter="16" class="mb-16">
      <a-col :span="8">
        <nuxt-link to="/catalog/umrah">
          <a-card class="card-product--components">
            <div class="ant-card-cover-images" v-lazy:background-image="imgUmrah"></div>
            <div class="ant-card-cover--overlay">
              <h3 class="fs-26 fw-600 mb-0">Paket Umrah</h3>
              <p class="fs-16 fw-400 mb-0">
                Beragam pilihan paket umrah sesuai kebutuhan anda
              </p>
            </div>
          </a-card>
        </nuxt-link>
      </a-col>
      <a-col :span="8">
        <nuxt-link to="/catalog/ticket-group">
          <a-card class="card-product--components">
            <div class="ant-card-cover-images" v-lazy:background-image="imgTicket"></div>
            <div class="ant-card-cover--overlay">
              <h3 class="fs-26 fw-600 mb-0">Tiket Group</h3>
              <p class="fs-16 fw-400 mb-0">
                Beragam pilihan tiket pesawat berbagai maskapai untuk kelancaran perjalanan anda
              </p>
            </div>
          </a-card>
        </nuxt-link>
      </a-col>
      <a-col :span="8">
        <nuxt-link to="/catalog/accommodation">
          <a-card class="card-product--components">
            <div class="ant-card-cover-images" v-lazy:background-image="imgAccommodation"></div>
            <div class="ant-card-cover--overlay">
              <h3 class="fs-26 fw-600 mb-0">LA Akomodasi</h3>
              <p class="fs-16 fw-400 mb-0">
                Beragam pilihan perusahaan jasa Land Arrangement (LA) 
                resmi yang melayani para tamu Allah selama di kota suci Makkah Al Mukarromah dan Madinah Al Munawwaroh.
              </p>
            </div>
          </a-card>
        </nuxt-link>
      </a-col>
    </a-row>

    <a-row :gutter="16" class="mb-16">
      <a-col :span="8">
        <nuxt-link to="/catalog/visa">
          <a-card class="card-product--components">
            <div class="ant-card-cover-images" v-lazy:background-image="imgVisa"></div>
            <div class="ant-card-cover--overlay">
              <h3 class="fs-26 fw-600 mb-0">Visa Perjalanan</h3>
              <p class="fs-16 fw-400 mb-0">
                Beragam pilihan vendor/suplier visa untuk memudah pengguna untuk membuat paket umroh.
              </p>
            </div>
          </a-card>
        </nuxt-link>
      </a-col>
      <a-col :span="8">
        <nuxt-link to="/catalog/insurance">
          <a-card class="card-product--components">
            <div class="ant-card-cover-images" v-lazy:background-image="imgInsurance"></div>
            <div class="ant-card-cover--overlay">
              <h3 class="fs-26 fw-600 mb-0">Asuransi Perjalanan</h3>
              <p class="fs-16 fw-400 mb-0">
                Beragam pilihan asuransi untuk keamanan dan kenyamanan ibadah umroh dan haji
              </p>
            </div>
          </a-card>
        </nuxt-link>
      </a-col>
      <a-col :span="8">
        <nuxt-link to="/catalog/handling">
          <a-card class="card-product--components">
            <div class="ant-card-cover-images" v-lazy:background-image="imgHandling"></div>
            <div class="ant-card-cover--overlay">
              <h3 class="fs-26 fw-600 mb-0">Handling Domestik</h3>
              <p class="fs-16 fw-400 mb-0">
                Beragam pilihan layanan handling untuk memberikan kemudahan bagi pengguna aplikasi khususnya travel atau umaroh
              </p>
            </div>
          </a-card>
        </nuxt-link>
      </a-col>
    </a-row>
    <a-row :gutter="16" class="mb-16">
      <a-col :span="8">
        <nuxt-link to="/catalog/manasik">
          <a-card class="card-product--components">
            <div class="ant-card-cover-images" v-lazy:background-image="imgManasik"></div>
            <div class="ant-card-cover--overlay">
              <h3 class="fs-26 fw-600 mb-0">Room Manasik</h3>
              <p class="fs-16 fw-400 mb-0">
                Beragam pilihan Ruang Manasik untuk mempersiapkan kematangan dalam melakukan ibadah umroh
              </p>
            </div>
          </a-card>
        </nuxt-link>
      </a-col>
      <a-col :span="8">
        <nuxt-link to="/catalog/equipment">
          <a-card class="card-product--components">
            <div class="ant-card-cover-images" v-lazy:background-image="imgEquipment"></div>
            <div class="ant-card-cover--overlay">
              <h3 class="fs-26 fw-600 mb-0">Perlengkapan</h3>
              <p class="fs-16 fw-400 mb-0">
                Beragam pilihan perlengkapan umrah yang memberikan kemudahan ibadah umroh
              </p>
            </div>
          </a-card>
        </nuxt-link>
      </a-col>
      <a-col :span="8">
        <nuxt-link to="/catalog/tourleader">
          <a-card class="card-product--components">
            <div class="ant-card-cover-images" v-lazy:background-image="imgTourleader"></div>
            <div class="ant-card-cover--overlay">
              <h3 class="fs-26 fw-600 mb-0">Tour Leader</h3>
              <p class="fs-16 fw-400 mb-0">
                Beragam pilihan Tour leader baik perusahaan dan perorangan yang besertifikat dan berpengalaman
              </p>
            </div>
          </a-card>
        </nuxt-link>
      </a-col>
    </a-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgUmrah: "/components/umrah.png",
      imgTicket: "/components/ticket.png",
      imgAccommodation: "/components/accommodation.png",
      imgVisa: "/components/visa.png",
      imgInsurance: "/components/insurance.png",
      imgHandling: "/components/handling.png",
      imgManasik: "/components/manasik.png",
      imgEquipment: "/components/equipment.png",
      imgTourleader: "/components/tourleader.png"
    };
  }
};
</script>
