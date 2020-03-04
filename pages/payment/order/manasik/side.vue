<template>
  <a-card class="b-solid b-radius ant-card--payment-sider">
    <div class="p-24">
      <div class="fs-16 fw-400 text-capitalize cr-gray mb-16">
        <span>Informasi Pesanan</span>
      </div>

      <div class="d-flex align-items-center mb-16">
        <div class="mr-16">
          <a-avatar :src="require('~/static/illu/no_images.svg')" />
        </div>
        <div>
          <div class="fs-14 fw-500 cr-black">
            <span>MANASIK DI FOUR POINTS</span>
          </div>
        </div>
      </div>

      <a-divider :style="{ margin: '16px 0' }" />

      <div class="d-flex align-items-center mb-8">
        <div class="fs-14 fw-400 cr-black">Subtotal</div>
        <div class="fs-14 fw-400 cr-black ml-auto">
          <span class="cr-gray mr-8">2x</span> {{ 250000 | currency }}
        </div>
      </div>

      <div class="d-flex align-items-center mb-8">
        <div class="fs-14 fw-400 cr-black">Administrasi</div>
        <div class="fs-14 fw-400 cr-black ml-auto">
          {{ 0 | currency }}
        </div>
      </div>

      <a-divider :style="{ margin: '16px 0' }" />

      <div class="d-flex align-items-center mb-8">
        <div class="fs-14 fw-500 cr-black">Total Bayar</div>
        <div class="fs-14 fw-500 cr-black ml-auto">
          {{ 2 * 250000 | currency }}
        </div>
      </div>
    </div>
  </a-card>
</template>
