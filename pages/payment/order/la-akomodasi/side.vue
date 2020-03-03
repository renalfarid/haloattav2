<template>
  <a-card class="b-solid b-radius ant-card--payment-sider">
    <div class="p-24">
      <div class="fs-12 fw-400 text-uppercase cr-gray mb-8">
        <span>Informasi Pesanan</span>
      </div>
      <div class="d-flex align-items-center">
        <div class="mr-8">
          <a-avatar :src="data.foto" />
        </div>
        <div>
          <div class="fs-14 fw-500 cr-black">
            <span>{{data.nama}}</span>
          </div>
        </div>
      </div>
      <a-timeline :style="{ margin: '24px 0 0 0' }">
        <a-timeline-item>
          <div class="fs-14 fw-400 cr-black">Check In</div>
          <div class="fs-14 fw-400 cr-gray">
            <span>Rabu, 10 September 2019(-)</span>
          </div>
        </a-timeline-item>
        <a-timeline-item>
          <a-icon slot="dot" type="schedule" style="fontSize: '14px'" />
          <div class="fs-14 fw-400 cr-gray">
            <span>{{data.durasi_inap_mekkah}} Hari {{data.nama_hotel_mekkah}} (Mekkah)</span>
          </div>
          <div class="fs-14 fw-400 cr-gray">
            <span>{{data.durasi_inap_madinah}} Hari {{data.nama_hotel_madinah}} (Madinah)</span>
          </div>
        </a-timeline-item>
        <a-timeline-item :style="{ paddingBottom: '0' }">
          <div class="fs-14 fw-400 cr-black">Check Out</div>
          <div class="fs-14 fw-400 cr-gray">
            <span>Kamis, 19 September 2019(-)</span>
          </div>
        </a-timeline-item>
      </a-timeline>

      <a-divider :style="{ margin: '16px 0' }" />

      <div class="fs-12 fw-400 text-uppercase cr-gray mb-8">
        <span>Informasi Room</span>
      </div>
      <div class="d-flex align-items-center mb-8">
        <div class="fs-14 fw-400 cr-black">Quad Room</div>
        <div class="fs-14 fw-400 cr-black ml-auto">{{ this.$route.query.quad }} pax</div>
      </div>

      <div class="d-flex align-items-center mb-8">
        <div class="fs-14 fw-400 cr-black">Triple Room</div>
        <div class="fs-14 fw-400 cr-black ml-auto">{{ this.$route.query.triple }} pax</div>
      </div>

      <div class="d-flex align-items-center mb-8">
        <div class="fs-14 fw-400 cr-black">Double Room</div>
        <div class="fs-14 fw-400 cr-black ml-auto">{{ this.$route.query.double }} pax</div>
      </div>
    </div>
  </a-card>
</template>
<script>
import moment from "moment";
export default {
  props: ["data"],
  data() {
    return {};
  },
  methods: {
    moment
  }
};
</script>
