<template>
  <div class="ant-affix--card">
    <a-card class="ant-card--package-information">
      <div class="p-16">
        <div class="d-flex align-items-center">
          <div class="mr-8">
            <div class="ant-package--name fs-15 fw-500 cr-black">Lion Air</div>
            <div class="ant-package--name fs-13 fw-500 cr-black f-default">JT 534</div>
          </div>
          <div class="ml-auto">
            <a-avatar src="https://www.goto-hotel.com/wp-content/uploads/lion-parcel-logo.png" />
          </div>
        </div>
      </div>
      <a-divider :style="{margin: '0'}" />
      <div class="p-16">
        <div class="d-flex align-items-center">
          <div class="ant-package--info fs-14 fw-400 cr-gray">Berangkat</div>
          <div class="ant-package--info fs-14 fw-400 cr-black ml-auto">10 September 2019</div>
        </div>
        <div class="d-flex align-items-center">
          <div class="ant-package--info fs-14 fw-400 cr-gray">Program Hari</div>
          <div class="ant-package--info fs-14 fw-400 cr-black ml-auto">9 Hari</div>
        </div>
      </div>
      <a-divider :style="{margin: '0'}" />
      <div class="p-16">
        <div class="fs-15 fw-500 cr-black mb-8">Jumlah Penumpang</div>
        <div class="d-flex align-items-center mb-8">
          <div class="fs-14 fw-400 cr-gray f-default">Dewasa (35) </div>
          <div class="fs-14 fw-400 cr-black f-default ml-auto"><span class="cr-gray mr-8">x</span> Rp 12.500.000</div>
        </div>
        <div class="d-flex align-items-center">
          <div class="fs-14 fw-400 cr-gray f-default">Dewasa (5) </div>
          <div class="fs-14 fw-400 cr-black f-default ml-auto"><span class="cr-gray mr-8">x</span> Rp 12.500.000</div>
        </div>
      </div>
      <a-divider :style="{margin: '0'}" />
      <div class="p-16">
        <div class="d-flex align-items-center">
          <div class="ant-package--title fs-15 fw-500 cr-black">Total Pesanan</div>
          <div class="ant-package--subtitle ml-auto fs-15 fw-500 cr-black f-default">Rp 500.000.000</div>
        </div>
        <div :style="{margin: '16px 0'}">
          <a-button
            block
            size="large"
            class="ant-btn--action b-shadow b-radius fs-15 fw-500"
            @click="nextOrderReview"
          >Pesan</a-button>
        </div>
        <div class="ant-package--subtitle fs-13 fw-400 cr-gray f-default">
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
      this.$router.push({ path: "/umrah/order-review" });
    }
  }
};
</script>