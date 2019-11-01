<template>
  <div class="ant-affix--card">
    <a-card class="ant-card--package-information">
      <div class="p-16">
        <div class="fs-15 fw-500 cr-black f-default">Informasi Pesanan</div>
      </div>
      <a-divider :style="{margin: '0'}" />
      <div class="p-16">
        <div class="d-flex align-items-center mb-8">
          <div class="ant-package--info fs-14 fw-400 cr-black">Keberangkatan</div>
          <div class="ant-package--info fs-14 fw-500 cr-black ml-auto">10 September 2019</div>
        </div>
        <div class="d-flex align-items-center mb-8">
          <div class="ant-package--info fs-14 fw-400 cr-black">Program</div>
          <div class="ant-package--info fs-14 fw-500 cr-black ml-auto">9 Hari</div>
        </div>
      </div>

      <a-divider :style="{margin: '0'}" />

      <div class="p-16">
        <div class="d-flex align-items-center">
          <div class="ant-package--title fs-15 fw-500 cr-black">Jumlah Jamaah</div>
          <div class="ml-auto">
            <number-input
              v-model="qty"
              :min="0"
              :inputtable="false"
              size="small"
              inline
              center
              controls
            />
          </div>
        </div>
      </div>

      <a-divider :style="{margin: '0'}" />

      <div class="p-16">
        <div class="d-flex align-items-center mb-8">
          <div class="fs-14 fw-400 cr-black f-default w-35">Jamaah ({{qty}})</div>
          <span class="cr-gray mr-8">x</span>
          <div class="fs-14 fw-400 cr-black f-default text-right w-65">Rp 300.000</div>
        </div>

        <a-divider :style="{margin: '12px 0'}" />

        <div class="d-flex align-items-center mb-24">
          <div class="fs-15 fw-500 cr-black f-default w-35">Total</div>
          <div class="fs-15 fw-500 cr-black f-default text-right w-65">Rp 12.000.000</div>
        </div>

        <div :style="{margin: '16px 0'}">
          <a-button
            v-if="$store.state.auth"
            block
            size="large"
            class="ant-btn--action b-shadow b-radius fs-15 fw-500"
            @click="nextOrderReview"
          >Pesan</a-button>
          <a-button
            v-else
            block
            size="large"
            class="ant-btn--action b-shadow b-radius fs-15 fw-500"
            @click="toLogin"
          >Login</a-button>
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
  data() {
    return {
      qty: 2
    };
  },
  methods: {
    nextOrderReview() {
      let params = this.$route.query;
      this.$router.push({
        path: "/catalog/tourleader/order-review",
        query: {
          type: "TOURLEADER",
          kode: params.kode_produk,
          qty: this.qty
        }
      });
    },
    toLogin() {
      this.$router.push({ path: "/login" });
    }
  }
};
</script>