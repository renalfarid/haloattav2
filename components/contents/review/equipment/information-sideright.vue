<template>
  <div class="ant-affix--card mt-24">
    <a-card class="ant-card--package-review">
      <div class="p-16">
        <div class="fs-15 fw-500 cr-gray mb-8">Informasi Pesanan</div>
        <div class="d-flex align-items-center mb-8">
          <div class="fs-14 fw-400 cr-black f-default w-35">Jumlah (40)</div>
          <span class="cr-gray mr-8">x</span>
          <div class="fs-14 fw-400 cr-black f-default text-right w-65">Rp 100.000</div>
        </div>

        <a-divider :style="{margin: '12px 0'}" />

        <div class="d-flex align-items-center mb-24">
          <div class="fs-15 fw-500 cr-black f-default w-35">Total</div>
          <div class="fs-15 fw-500 cr-black f-default text-right w-65">Rp 4.000.000</div>
        </div>

        <div :style="{margin: '16px 0'}">
          <a-button
            block
            size="large"
            class="ant-btn--action b-shadow b-radius fs-15 fw-500"
            @click="nextOrderReview"
          >Lanjutkan</a-button>
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
import moment from "moment";
export default {
  props: ["data"],

  data() {
    return {
      wishlist: false,
      qty: 0,
      total: 0
    };
  },
  created: function() {
    this.getdata();
  },
  methods: {
    moment,
    toggleWishlist() {
      this.wishlist = !this.wishlist;
    },
    nextOrderReview() {
      let params = this.$route.query;
      this.$router.push({
        path: "/payment/order-data",
        query: {
          type: params.type,
          kode: params.kode,
          qty: this.qty
        }
      });
    },
    getdata() {
      let params = this.$route.query;
      this.qty = params.qty;
      this.total = this.qty * this.$props.data.harga_jual;
    }
  }
};
</script>