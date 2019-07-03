<template>
  <a-card class="ant-card--package-review" :style="{marginTop: '16px'}">
    <div slot="cover">
      <img src="/products/V1.png" />
    </div>
    <div class="p-16">
      <div class="ant-package--rate fs-18">
        <a-icon type="star" theme="filled" />
        <a-icon type="star" theme="filled" />
        <a-icon type="star" theme="filled" />
      </div>
      <div
        class="ant-package--name fs-22 fw-500 cr-black f-default"
      >Umrah Exclusive Rombongan September</div>
      <div class="ant-package--info fs-16 fw-400 cr-gray f-default mt-8">Program 9 Hari, 40 pax</div>
    </div>
    <a-divider :style="{margin: '0'}" />
    <div class="p-16">
      <div class="ant-package--title fs-15 fw-500 cr-black">Harga</div>
      <div class="ant-package--subtitle fs-14 fw-400 cr-gray f-default">Informasi Pesanan</div>
    </div>
    <a-divider :style="{margin: '0'}" />
    <div class="p-16">
      <div class="ant-package--title-room fs-15 fw-500 cr-black">Quad Room</div>
      <div class="d-flex align-items-center">
        <div class="ant-package--price-room fs-15 fw-400 cr-primary f-default">
          Rp23.000.000
          <span class="fs-14 fw-400 cr-gray">per pax</span>
        </div>
        <div class="ant-package--title-room fs-15 fw-500 cr-black f-default ml-auto">
          30
          <span class="fs-14 fw-400 cr-gray">pax</span>
        </div>
      </div>
      <a-divider :style="{margin: '14px 0'}" />
      <div class="ant-package--title-room fs-15 fw-500 cr-black">Triple Room</div>
      <div class="d-flex align-items-center">
        <div class="ant-package--price-room fs-15 fw-400 cr-primary f-default">
          Rp24.000.000
          <span class="fs-14 fw-400 cr-gray">per pax</span>
        </div>
        <div class="ant-package--title-room fs-15 fw-500 cr-black f-default ml-auto">
          10
          <span class="fs-14 fw-400 cr-gray">pax</span>
        </div>
      </div>
      <a-divider :style="{margin: '14px 0'}" />
      <div class="ant-package--title-room fs-15 fw-500 cr-black">Double Room</div>
      <div class="d-flex align-items-center">
        <div class="ant-package--price-room fs-15 fw-400 cr-primary f-default">
          Rp25.000.000
          <span class="fs-14 fw-400 cr-gray">per pax</span>
        </div>
        <div class="ant-package--title-room fs-15 fw-500 cr-black f-default ml-auto">
          0
          <span class="fs-14 fw-400 cr-gray">pax</span>
        </div>
      </div>
    </div>
    <a-divider :style="{margin: '0'}" />
    <div class="p-16">
      <div class="ant-package--title fs-15 fw-500 cr-black">Rincian Harga</div>
      <div class="ant-package--subtitle fs-14 fw-400 cr-gray f-default">Quad 30 pax, Triple 10 pax</div>
    </div>
    <a-divider :style="{margin: '0'}" />
    <div class="p-16">
      <div class="ant-package--title fs-15 fw-500 cr-black">Quad</div>
      <div class="d-flex align-items-center">
        <div class="ant-package--subtitle fs-14 fw-400 cr-gray">Rp23.000.000</div>
        <div class="ant-package--subtitle fs-14 fw-400 cr-gray ml-auto">
          x
          <span>30</span> pax
        </div>
      </div>
      <div class="d-flex align-items-center">
        <div class="ant-package--subtitle fs-14 fw-400 cr-black">Subtotal Quad</div>
        <div class="ant-package--subtitle fs-14 fw-500 cr-black ml-auto">Rp690.000.000</div>
      </div>
      <a-divider :style="{margin: '14px 0'}" />
      <div class="ant-package--title fs-15 fw-500 cr-black">Triple</div>
      <div class="d-flex align-items-center">
        <div class="ant-package--subtitle fs-14 fw-400 cr-gray">Rp24.000.000</div>
        <div class="ant-package--subtitle fs-14 fw-400 cr-gray ml-auto">
          x
          <span>10</span> pax
        </div>
      </div>
      <div class="d-flex align-items-center">
        <div class="ant-package--subtitle fs-14 fw-400 cr-black">Subtotal Triple</div>
        <div class="ant-package--subtitle fs-14 fw-500 cr-black ml-auto">Rp240.000.000</div>
      </div>
      <a-divider :style="{margin: '14px 0'}" />
      <div class="d-flex align-items-center">
        <div class="ant-package--subtitle fs-16 fw-500 cr-black">Total Pembayaran</div>
        <div class="ant-package--subtitle fs-16 fw-500 cr-black ml-auto">Rp930.000.000</div>
      </div>
    </div>
    <a-divider :style="{margin: '0'}" />
    <div class="p-16">
      <div class="ant-package--subtitle fs-14 fw-400 cr-gray f-default">
        Dengan mengklik tombol lanjut, maka anda dianggap setuju dengan
        <nuxt-link to>syarat dan ketentuan, kebijakan pembatalan, kebijakan refund</nuxt-link>Halo Atta
      </div>
      <div :style="{margin: '16px 0'}">
        <a-button
          block
          size="large"
          class="ant-btn--action fs-15 fw-500"
          @click="nextOrder"
        >Lanjutkan</a-button>
      </div>
      <div
        class="ant-package--subtitle fs-14 fw-400 cr-gray f-default"
      >Dapatkan point langsung ketika anda menyelesaikan aktivitas</div>
    </div>
  </a-card>
</template>
<script>
export default {
  methods: {
    nextOrder() {
      this.$router.push({ path: "/payment/order-data" });
    }
  }
};
</script>
