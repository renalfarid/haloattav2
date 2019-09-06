<template>
  <div class="ant-affix--card mt-24">
    <a-card class="ant-card--package-review">
      <div class="p-16">
        <div class="ant-package--name fs-14 fw-400 cr-gray f-default mb-8">Travel Penyedia</div>
        <div class="d-flex align-items-center">
          <div class="mr-8">
            <a-avatar
              class="vendor-logo"
              :style="{ backgroundImage: 'url(https://theme.hstatic.net/1000253446/1000470009/14/no-image.jpg?v=843)' }"
            />
          </div>
          <div>
            <div class="ant-package--name fs-15 fw-500 cr-black">Babul Kabah</div>
          </div>
        </div>
      </div>

      <a-divider :style="{margin: '0'}" />

      <div class="p-16">
        <div class="ant-package--name fs-15 fw-500 cr-black">Visa Umrah September 2020</div>
      </div>

      <a-divider :style="{margin: '0'}" />

      <div class="p-16">
        <div class="d-flex align-items-center mb-8">
          <div class="ant-package--info fs-14 fw-400 cr-black">Berangkat</div>
          <div class="ant-package--info fs-14 fw-500 cr-black ml-auto">10 September 2019</div>
        </div>
        <div class="d-flex align-items-center">
          <div class="ant-package--info fs-14 fw-400 cr-black">Program Hari</div>
          <div class="ant-package--info fs-14 fw-500 cr-black ml-auto">9 Hari</div>
        </div>
      </div>

      <a-divider :style="{margin: '0'}" />

      <div class="p-16">
        <div class="fs-15 fw-500 cr-black mb-8">Jumlah Tamu</div>
        <div class="d-flex align-items-center mb-8">
          <div class="fs-14 fw-400 cr-gray f-default">Tamu (4)</div>
          <div class="fs-14 fw-400 cr-black f-default ml-auto">
            <span class="cr-gray mr-8">x</span> Rp 12.500.000
          </div>
        </div>
      </div>
      <a-divider :style="{margin: '0'}" />
      <div class="p-16">
        <div class="ant-package--title fs-15 fw-400 d-block text-right cr-black">Harga Bayar</div>
        <div
          class="ant-package--subtitle fs-22 fw-500 cr-black d-block text-right f-default"
        >Rp 520.000.000</div>
        <div :style="{margin: '16px 0'}">
          <a-button
            block
            size="large"
            class="ant-btn--action b-shadow b-radius fs-15 fw-500"
            @click="nextOrderReview"
          >Pesan</a-button>
        </div>
        <div class="ant-package--subtitle fs-13 fw-400 cr-gray f-default pb-8">
          Dapatkan point langsung ketika
          anda menyelesaikan aktivitas
        </div>
      </div>
    </a-card>
  </div>
</template>
<script>
export default {
  methods: {
    nextOrderReview() {
      this.$router.push({ path: "/payment/order-data" });
    }
  }
};
</script>