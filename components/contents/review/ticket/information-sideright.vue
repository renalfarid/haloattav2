<template>
  <div class="ant-affix--card mt-24">
    <a-card class="ant-card--package-review">
      <div class="p-16">
        <div class="d-flex align-items-center">
          <div class="fs-15 fw-500 cr-black f-default mb-8">Informasi Penting</div>
          <a href class="fs-14 cr-primary ml-auto">Details</a>
        </div>
        <ul class="pl-16 mb-0">
          <li class="fs-14 cr-black">No reschedule</li>
          <li class="fs-14 cr-black">Pembatalan tanpa pinalty 45 hari</li>
          <li class="fs-14 cr-black">Pelunasan H -30 hari</li>
        </ul>
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
        <div class="fs-15 fw-500 cr-black mb-8">Jumlah Penumpang</div>
        <div class="d-flex align-items-center mb-8">
          <div class="fs-14 fw-400 cr-gray f-default">Dewasa (2)</div>
          <div class="fs-14 fw-400 cr-black f-default ml-auto">
            <span class="cr-gray mr-8">x</span> Rp 12.500.000
          </div>
        </div>
        <div class="d-flex align-items-center mb-8">
          <div class="fs-14 fw-400 cr-gray f-default">Anak (2)</div>
          <div class="fs-14 fw-400 cr-black f-default ml-auto">
            <span class="cr-gray mr-8">x</span> Rp 11.000.000
          </div>
        </div>
        <div class="d-flex align-items-center mb-8">
          <div class="fs-14 fw-400 cr-gray f-default">Bayi (1)</div>
          <div class="fs-14 fw-400 cr-black f-default ml-auto">
            <span class="cr-gray mr-8">x</span> Rp 6.500.000
          </div>
        </div>
        <div class="d-flex align-items-center mb-24">
          <div class="fs-15 fw-500 cr-black f-default">Total</div>
          <div class="fs-15 fw-500 cr-black f-default ml-auto">Rp 56.000.000</div>
        </div>

        <div :style="{margin: '16px 0'}">
          <a-button
            block
            size="large"
            class="ant-btn--action b-shadow b-radius fs-15 fw-500"
            @click="nextOrderReview"
          >Pesan Sekarang</a-button>
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
import axios from "axios";
export default {
  data() {
    return {
      item: []
    };
  },
  created: function() {
    this.getdata();
  },
  methods: {
    async getdata() {
      axios
        .post("https://api.haloatta.com/api/tiket/detail", {
          kode_produk: "TKT239610856"
        })
        .then(response => {
          this.item = response.data.data;
          this.loading = false;
        });
    },
    nextOrderReview() {
      this.$router.push({ path: "/payment/order-data" });
    }
  }
};
</script>