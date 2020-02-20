<template>
  <div class="ant-affix--card mt-24">
    <a-card class="b-shadow b-radius b-solid ant-card--package-review mb-16">
      <div class="p-16">
        <div class="d-flex align-items-center">
          <div class="fs-16 fw-500 cr-black">
            Informasi Penting
          </div>
        </div>
      </div>

      <a-divider :style="{ margin: '0' }" />

      <div class="p-16">
        <div class="d-flex align-items-start mb-8">
          <a-avatar
            style="backgroundColor: rgba(15, 172, 243, .1);color:#0FACF3"
            class="mr-8"
            size="small"
            icon="check"
          />
          <div>
            <div class="fs-14 fw-400 cr-black">No reschedule</div>
          </div>
        </div>

        <div class="d-flex align-items-start mb-8">
          <a-avatar
            style="backgroundColor: rgba(15, 172, 243, .1);color:#0FACF3"
            class="mr-8"
            size="small"
            icon="check"
          />
          <div>
            <div class="fs-14 fw-400 cr-black">
              Pembatalan tanpa pinalty 45 hari
            </div>
          </div>
        </div>

        <div class="d-flex align-items-start">
          <a-avatar
            style="backgroundColor: rgba(15, 172, 243, .1);color:#0FACF3"
            class="mr-8"
            size="small"
            icon="check"
          />
          <div>
            <div class="fs-14 fw-400 cr-black">
              Pelunasan 30 hari sebelum keberangkatan
            </div>
          </div>
        </div>
      </div>
    </a-card>

    <a-card class="b-shadow b-radius b-solid ant-card--package-review">
      <div class="p-16">
        <div class="d-flex align-items-center mb-8">
          <div class="ant-package--info fs-14 fw-400 cr-black">
            Rencana Manasik
          </div>
          <div class="ant-package--info fs-14 fw-500 cr-black ml-auto">
            -
          </div>
        </div>
      </div>

      <a-divider :style="{ margin: '0' }" />

      <div class="p-16">
        <div class="d-flex align-items-center mb-8">
          <div class="fs-14 fw-400 cr-black">
            Subtotal
          </div>
          
          <div class="fs-14 fw-400 cr-black ml-auto">
            <span class="cr-gray mr-8">{{ qty }}x</span> {{ data.harga | currency }}
          </div>
        </div>

        <a-divider :style="{ margin: '12px 0' }" />

        <div class="d-flex align-items-center mb-24">
          <div class="fs-14 fw-500 cr-black">Total Bayar</div>
          <div class="fs-14 fw-500 cr-black ml-auto">
            {{ total | currency }}
          </div>
        </div>

        <div :style="{ margin: '16px 0' }">
          <a-button
            block
            size="large"
            class="ant-btn--action b-shadow b-radius fs-15 fw-500"
            @click="nextOrderReview"
            >Lanjutkan</a-button
          >
        </div>
        <div class="ant-package--subtitle fs-13 fw-400 cr-gray pb-8">
          Dapatkan point langsung ketika anda menyelesaikan aktivitas
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
      qty: 0,
      total: 0
    };
  },
  created: function() {
    this.sidebarinfo();
  },
  methods: {
    moment,
    nextOrderReview() {
      let params = this.$route.query;
      this.$router.push({
        path: "/payment/order-data",
        query: {
          type: params.type,
          kode: params.kode,
          qty: params.qty,
          total: this.total
        }
      });
    },
    sidebarinfo() {
      let params = this.$route.query;
      this.qty = params.qty;
      this.total = this.qty * this.$props.data.harga;
    }
  }
};
</script>
