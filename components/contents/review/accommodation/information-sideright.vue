<template>
  <div class="ant-affix--card mt-24">
    <!-- <a-card class="ant-card--package-review mb-16">
      <div class="p-16">
        <div class="d-flex align-items-center">
          <div class="fs-15 fw-500 cr-black f-default">Informasi Penting</div>
          <a href class="fs-14 cr-primary ml-auto">Details</a>
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
    </a-card>-->

    <a-card class="ant-card--package-review">
      <div class="p-16">
        <div class="fs-15 fw-500 cr-black f-default">Informasi Pesanan</div>
      </div>
      <a-divider :style="{ margin: '0' }" />
      <div class="p-16">
        <!-- <div class="d-flex align-items-center mb-8">
          <div class="ant-package--info fs-14 fw-400 cr-black">Berangkat</div>
          <div class="ant-package--info fs-14 fw-500 cr-black ml-auto">-</div>
        </div>-->
        <div class="d-flex align-items-center">
          <div class="ant-package--info fs-14 fw-400 cr-black">Program Hari</div>
          <div class="ant-package--info fs-14 fw-500 cr-black ml-auto">{{ data.program_hari }} Hari</div>
        </div>
      </div>

      <a-divider :style="{ margin: '0' }" />

      <div class="p-16">
        <div class="d-flex align-items-center mb-8">
          <div class="fs-14 fw-400 cr-black f-default w-35">Quad ({{ quad }})</div>
          <span class="cr-gray mr-8">x</span>
          <div
            class="fs-14 fw-400 cr-black f-default text-right w-65"
          >{{ (data.harga_quad * quad) | currency }}</div>
        </div>
        <div class="d-flex align-items-center mb-8">
          <div class="fs-14 fw-400 cr-black f-default w-35">Triple ({{ triple }})</div>
          <span class="cr-gray mr-8">x</span>
          <div
            class="fs-14 fw-400 cr-black f-default text-right w-65"
          >{{ (data.harga_triple * triple) | currency }}</div>
        </div>
        <div class="d-flex align-items-center mb-8">
          <div class="fs-14 fw-400 cr-black f-default w-35">Double ({{ double }})</div>
          <span class="cr-gray mr-8">x</span>
          <div
            class="fs-14 fw-400 cr-black f-default text-right w-65"
          >{{ (data.harga_double * double) | currency }}</div>
        </div>

        <a-divider :style="{ margin: '12px 0' }" />

        <div class="d-flex align-items-center mb-24">
          <div class="fs-15 fw-500 cr-black f-default w-35">Total</div>
          <div class="fs-15 fw-500 cr-black f-default text-right w-65">{{ total | currency }}</div>
        </div>

        <div :style="{ margin: '16px 0' }">
          <a-button
            block
            size="large"
            class="ant-btn--action b-shadow b-radius fs-15 fw-500"
            @click="nextOrderReview"
          >Lanjutkan</a-button>
        </div>
        <div
          class="ant-package--subtitle fs-13 fw-400 cr-gray f-default pb-8"
        >Dapatkan point langsung ketika anda menyelesaikan aktivitas</div>
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
      quad: 0,
      triple: 0,
      double: 0,
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
        path: "/payment/order/la-akomodasi",
        query: {
          type: params.type,
          kode: params.kode,
          quad: params.quad,
          triple: params.triple,
          double: params.double,
          total: this.total
        }
      });
    },
    sidebarinfo() {
      let params = this.$route.query;
      this.quad = params.quad;
      this.triple = params.triple;
      this.double = params.double;
      this.total =
        this.quad * this.$props.data.harga_quad +
        this.triple * this.$props.data.harga_triple +
        this.double * this.$props.data.harga_double;
    }
  }
};
</script>
