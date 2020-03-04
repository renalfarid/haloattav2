<template>
  <a-card class="b-solid b-radius ant-card--payment-sider">
    <div :style="{padding:'16px 24px'}">
      <h3 class="fw-600 cr-black m-0">Detail Pesanan</h3>
    </div>

    <a-divider :style="{ margin: '0' }" />

    <div class="p-24">
      <h2 class="fw-500 cr-black mb-8">{{ productUmroh }}</h2>
      <div class="fs-14 fw-400 cr-black">Program {{ program }} Hari</div>
      <div class="fs-14 fw-400 cr-black">Tgl Berangkat : {{ moment(berangkat, 'YYYY-MM-DD').format('LL') }}</div>

      <a-divider :style="{ margin: '16px 0' }" />

      <div class="d-flex align-items-center">
        <div class="fs-14 fw-400 cr-black">Quad</div>
        <div class="fs-14 fw-400 cr-black ml-auto">
          {{ quad }} Pax
        </div>
      </div>
      <div class="d-flex align-items-center">
        <div class="fs-14 fw-400 cr-black">Triple</div>
        <div class="fs-14 fw-400 cr-black ml-auto">
          {{ triple }} Pax
        </div>
      </div>
      <div class="d-flex align-items-center">
        <div class="fs-14 fw-400 cr-black">Double</div>
        <div class="fs-14 fw-400 cr-black ml-auto">
          {{ double }} Pax
        </div>
      </div>

      <a-divider :style="{ margin: '16px 0' }" />

      <div class="d-flex align-items-center">
        <div class="fs-14 fw-400 cr-black">Subtotal</div>
        <div class="fs-14 fw-400 cr-black ml-auto">
          {{ total | currency }}
        </div>
      </div>

      <a-divider :style="{ margin: '16px 0' }" />

      <div class="d-flex align-items-center">
        <div class="fs-14 fw-400 cr-black">Diskon</div>
        <div class="fs-14 fw-400 cr-black ml-auto">
          - {{ 0 | currency }}
        </div>
      </div>

      <a-divider :style="{ margin: '16px 0' }" />

      <div class="d-flex align-items-center">
        <div class="fs-16 fw-500 cr-black">Total Bayar</div>
        <div class="fs-16 fw-500 cr-black ml-auto">
          {{ total | currency }}
        </div>
      </div>
    </div>

    <div class="p-24" :style="{'background-color':'rgb(135, 208, 104)'}">
      <div class="fs-14 fw-400 text-uppercase cr-white mb-8">Bayar Bertahap</div>
      <div class="d-flex align-items-center">
        <div class="fs-14 fw-400 cr-white">Uang Muka (30%)</div>
        <div class="fs-14 fw-400 cr-white ml-auto">
          {{ total * 30 / 100 | currency }}
        </div>
      </div>
      <a-divider :style="{ margin: '12px 0','opacity':'.2' }" />
      <div class="d-flex align-items-center">
        <div class="fs-14 fw-400 cr-white">Pelunasan</div>
        <div class="fs-14 fw-400 cr-white ml-auto">
          {{ total * 30 / 100 - total | currency }}
        </div>
      </div>
    </div>

    <div class="p-24">
      <span>Jatuh tempo pelunasan 30 hari sebelum tanggal keberangkatan.</span>
    </div>
  </a-card>
</template>

<script>
import moment from "moment";
import axios from "axios";
moment.locale('id');

export default {
  props: ["total", "productUmroh", "program", "berangkat"],

  data(){
     return {
       quad: 0,
       triple: 0,
       double: 0
     }
  },
  created: function() {
    this.siderinfo();
  },
  methods: {
    moment,
    siderinfo() {
       let params = this.$route.query;
       this.quad = params.quad;
      this.triple = params.triple;
      this.double = params.double;
    }
  }

};
</script>
