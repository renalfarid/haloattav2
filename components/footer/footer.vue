<template>
  <div class="container" id="containerBottom">
    <a-row :gutter="24">
      <a-col :xs="24" :sm="12" :md="12" :lg="9">
        <a-card>
          <a-button size="large" class="btn-ask b-radius b-shadow b-solid">
            <a-icon type="customer-service" />Tanya Atta
          </a-button>
          <div class="title">Bank Pembayaran</div>
          <div class="logo-bank">
            <div>
              <img alt="bca" v-lazy="require('~/static/icons/bank/bca.png')" />
            </div>
            <div>
              <img alt="bni" v-lazy="require('~/static/icons/bank/bni.png')" />
            </div>
            <div>
              <img alt="bri" v-lazy="require('~/static/icons/bank/bri.png')" />
            </div>
            <div>
              <img alt="mandiri" v-lazy="require('~/static/icons/bank/mandiri.png')" />
            </div>
          </div>
        </a-card>
      </a-col>
      <a-col :xs="24" :sm="12" :md="12" :lg="5">
        <a-card>
          <div class="title">Layanan Pelanggan</div>
          <div class="item">
            <nuxt-link to="/catalog/umrah" class="item-link">Paket Umrah</nuxt-link>
            <nuxt-link to="/catalog/ticket-group" class="item-link">Tiket Group</nuxt-link>
            <nuxt-link to="/catalog/accommodation" class="item-link">LA Akomodasi</nuxt-link>
            <nuxt-link to="/catalog/visa" class="item-link">Provider Visa Perjalanan</nuxt-link>
            <nuxt-link to="/catalog/insurance" class="item-link">Provider Asuransi</nuxt-link>
          </div>
        </a-card>
      </a-col>
      <a-col :xs="24" :sm="12" :md="12" :lg="5">
        <a-card>
          <div class="title">Tentang Haloatta</div>
          <div class="item">
            <nuxt-link to="/about" class="item-link">Tentang Kami</nuxt-link>
            <a href="https://www.haloummi.com" class="item-link" target="_blank">Haloummi</a>
            <a href="https://betavendor.haloatta.com" class="item-link" target="_blank">Bermitra dengan Kami</a>
          </div>
        </a-card>
      </a-col>
      <a-col :xs="24" :sm="12" :md="12" :lg="5">
        <a-card>
          <div class="title">Ketentuan Penggunaan</div>
          <div class="item">
            <nuxt-link to="/" class="item-link">Syarat dan Ketentuan</nuxt-link>
            <nuxt-link to="/" class="item-link">Kebijakan Privasi</nuxt-link>
          </div>
        </a-card>
      </a-col>
    </a-row>

    <a-divider />

    <div class="d-flex align-items-center">
      <div class="fs-14 fw-400 cr-gray">2016 - {{ new Date().getFullYear() }} © PT. NUH Teknologi Solution</div>
      <div class="ml-auto"></div>
    </div>
  </div>
</template>
