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
            <div class="fs-14 fw-400 cr-black">Pembatalan tanpa pinalty 45 hari</div>
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
            <div class="fs-14 fw-400 cr-black">Pelunasan 30 hari sebelum keberangkatan</div>
          </div>
        </div>
      </div>
    </a-card>-->

    <a-card class="ant-card--package-review">
      <div class="p-16">
        <div class="d-flex align-items-center mb-8">
          <div class="ant-package--info fs-14 fw-400 cr-black">Berangkat</div>
          <div
            class="ant-package--info fs-14 fw-500 cr-black ml-auto"
          >{{ moment(data.berangkat, "YYYY-MM-DD").format("LL") }}</div>
        </div>
        <div class="d-flex align-items-center">
          <div class="ant-package--info fs-14 fw-400 cr-black">Program Hari</div>
          <div class="ant-package--info fs-14 fw-500 cr-black ml-auto">{{data.program_hari}} Hari</div>
        </div>
      </div>

      <a-divider :style="{ margin: '0' }" />

      <div class="p-16">
        <div class="fs-15 fw-500 cr-black mb-8">Jumlah Penumpang</div>
        <div class="d-flex align-items-center mb-8">
          <div class="fs-14 fw-400 cr-black f-default w-35">Dewasa ({{ dewasa }})</div>
          <span class="cr-gray mr-8">x</span>
          <div
            class="fs-14 fw-400 cr-black f-default text-right w-65"
          >{{ (dewasa * data.harga) | currency }}</div>
        </div>
        <div class="d-flex align-items-center mb-8">
          <div class="fs-14 fw-400 cr-black f-default w-35">Anak ({{ anak }})</div>
          <span class="cr-gray mr-8">x</span>
          <div
            class="fs-14 fw-400 cr-black f-default text-right w-65"
          >{{ (anak * data.harga) | currency }}</div>
        </div>
        <div class="d-flex align-items-center mb-8">
          <div class="fs-14 fw-400 cr-black f-default w-35">Bayi ({{ bayi }})</div>
          <span class="cr-gray mr-8">x</span>
          <div
            class="fs-14 fw-400 cr-black f-default text-right w-65"
          >{{ (bayi * data.harga) | currency }}</div>
        </div>

        <a-divider :style="{ margin: '8px 0' }" />

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
      dewasa: 0,
      anak: 0,
      bayi: 0,
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
        path: "/payment/order/tiket",
        query: {
          type: params.type,
          kode: params.kode,
          dewasa: params.dewasa,
          anak: params.anak,
          bayi: params.bayi,
          total: this.total
        }
      });
    },
    sidebarinfo() {
      let params = this.$route.query;
      this.dewasa = params.dewasa;
      this.anak = params.anak;
      this.bayi = params.bayi;
      this.total =
        this.dewasa * this.$props.data.harga +
        this.anak * this.$props.data.harga +
        this.bayi * this.$props.data.harga;
    }
  }
};
</script>
