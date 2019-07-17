<template>
  <div class="container">
    <a-row :gutter="30">
      <a-col :span="9">
        <a-card>
          <a-button size="large" class="btn-ask b-radius b-shadow b-solid">
            <a-icon type="customer-service"/>Tanya Atta
          </a-button>
          <div class="title">Bank Pembayaran</div>
          <div class="logo-bank">
            <div><img alt="bca" src="~/static/icons/bank/bca.png"></div>
            <div><img alt="bni" src="~/static/icons/bank/bni.png"></div>
            <div><img alt="bri" src="~/static/icons/bank/bri.png"></div>
            <div><img alt="mandiri" src="~/static/icons/bank/mandiri.png"></div>
          </div>
        </a-card>
      </a-col>
      <a-col :span="5">
        <a-card>
          <div class="title">Layanan Pelanggan</div>
          <div class="item">
            <nuxt-link to class="item-link">Paket Umrah</nuxt-link>
            <nuxt-link to class="item-link">Tiket Umrah</nuxt-link>
            <nuxt-link to class="item-link">LA Akomodasi</nuxt-link>
            <nuxt-link to class="item-link">Visa Umrah</nuxt-link>
            <nuxt-link to class="item-link">Komponen Optional</nuxt-link>
          </div>
        </a-card>
      </a-col>
      <a-col :span="5">
        <a-card>
          <div class="title">Tentang Haloatta</div>
          <div class="item">
            <nuxt-link to class="item-link">Tentang Kami</nuxt-link>
            <nuxt-link to class="item-link">Halo Blog</nuxt-link>
            <nuxt-link to class="item-link">LA Akomodasi</nuxt-link>
            <nuxt-link to class="item-link">Bermitra dengan Kami</nuxt-link>
            <nuxt-link to class="item-link">Umaroh Login</nuxt-link>
          </div>
        </a-card>
      </a-col>
      <a-col :span="5">
        <a-card>
          <div class="title">Ketentuan Penggunaan</div>
          <div class="item">
            <nuxt-link to class="item-link">Syarat dan Ketentuan</nuxt-link>
            <nuxt-link to class="item-link">Kebijakan Privasi</nuxt-link>
          </div>
        </a-card>
      </a-col>
    </a-row>

    <a-divider />

    <div class="d-flex align-items-center">
      <div class="fs-14 fw-400 cr-gray"> 2016 - 2019 &copy; PT Haloatta</div>
      <div class="ml-auto"></div>
    </div>
  </div>
</template>
