<template>
  <a-row type="flex" justify="center">
    <a-col :span="22">
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
              <div class="fs-30 fw-500 f-default cr-primary mb-8">Alhamdulillah!</div>
              <div class="fs-15 fw-400 f-default cr-black">
                <span>Pembayaran menggunakan saldo Halo Pay Berhasil</span>
              </div>
            </div>
            <div class="mt-24 mb-24">
              <div class="fs-14 fw-400 cr-gray text-uppercase">Nomor Pesanan</div>
              <div class="fs-18 fw-500 cr-black">HT1234567890</div>
            </div>
            <div class="mt-24 mb-24">
              <div class="fs-16 fw-500 cr-primary">Lunas</div>
              <div class="fs-18 fw-500 cr-black">Rp. 930.000.731</div>
            </div>
            <div class="mb-16">
              <a-button class="ant-btn--action mb-16">
                <a-icon type="schedule" />E-Paket telah Terbit
              </a-button>
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
              <nuxt-link to="/" class="fs-14 fw-400 cr-primary d-block">Kembali ke Beranda</nuxt-link>
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
</template>
