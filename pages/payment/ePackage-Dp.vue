<template>
  <a-layout class="ant-layout--payment">
    <a-layout-header class="ant-layout-header--payment">
      <div class="ant-logo">
        <nuxt-link to="/">
          <img src="/haloatta_white.png" />
        </nuxt-link>
      </div>
      <a-steps :current="2" size="small">
        <a-step title="Data Pemesan" />
        <a-step title="Pembayaran" />
        <a-step title="E-Paket Terbit" />
      </a-steps>
    </a-layout-header>
    <a-layout-content
      class="ant-layout-content--payment-ePackage ant-layout-content--payment-ePackage-Dp"
    >
      <div class="container" :style="{minHeight: '70vh'}">
        <a-row type="flex" justify="center">
          <a-col :span="20">
            <a-row
              :gutter="32"
              type="flex"
              justify="space-around"
              align="middle"
              :style="{minHeight: '70vh'}"
            >
              <a-col :span="12">
                <a-card :bordered="false">
                  <div>
                    <div class="fs-40 fw-500 f-default cr-gold">Alhamdulillah!</div>
                    <div class="fs-18 fw-400 f-default cr-black">
                      <span>Pembayaran menggunakan saldo Halo Pay Berhasil</span>
                    </div>
                  </div>
                  <div class="mt-24 mb-24">
                    <div class="fs-14 fw-400 cr-gray text-uppercase">Nomor Pesanan</div>
                    <div class="fs-18 fw-500 cr-black">HT1234567890</div>
                  </div>
                  <div class="mt-24 mb-24">
                    <div class="fs-16 fw-500 cr-gold">Down Payment (DP)</div>
                    <div class="fs-18 fw-500 cr-black">Rp. 500.000.731</div>
                  </div>
                  <div class="mb-16">
                    <div class="fs-14 fw-400 cr-gray">
                      Sisa pembayaran
                      <span class="cr-black fw-500">Rp. 430.000.731</span> akan berakhir
                      <span class="cr-black fw-500">30 Juli 2019</span>, harap
                      menyelesaikan pembayaran sebelum batas waktu yang ditentukan
                    </div>
                  </div>
                  <div class="mb-16">
                    <a-button class="ant-btn--action mb-16"><a-icon type="schedule" /> E-Paket telah Terbit</a-button>
                    <div class="fs-14 fw-400 f-default cr-gray">
                      Customer service kami akan menanyakan nomer pesanan
                      <br />saat menghubungi anda.
                    </div>
                  </div>
                  <div>
                    <nuxt-link to class="fs-14 fw-400 cr-primary d-block">Detail Paket</nuxt-link>
                    <nuxt-link to class="fs-14 fw-400 cr-primary d-block">Rincian Harga Paket</nuxt-link>
                    <nuxt-link to class="fs-14 fw-400 cr-primary d-block">Hubungi Kami</nuxt-link>
                    <nuxt-link to class="fs-14 fw-400 cr-primary d-block">Kirim Pesan</nuxt-link>
                    <nuxt-link to class="fs-14 fw-400 cr-primary d-block">Kembali ke Beranda</nuxt-link>
                  </div>
                </a-card>
              </a-col>
              <a-col :span="12">
                <a-card :bordered="false">
                  <img slot="cover" src="/icons/success.png" />
                </a-card>
              </a-col>
            </a-row>
          </a-col>
        </a-row>
      </div>
    </a-layout-content>
    <a-layout-footer class="ant-layout-footer--payment-order">
      <div class="container">
        <a-row type="flex" justify="center">
          <a-col :span="20">© 2016 - 2019 Haloatta Travel Technology</a-col>
        </a-row>
      </div>
    </a-layout-footer>
  </a-layout>
</template>
<script>
export default {
  layout: "application",
  name: "ePackageDp",
  head() {
    return {
      title: "Haloatta - Booking Paket Umrah & Komponen Umrah Terlengkap"
    };
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
