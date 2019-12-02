<template>
  <a-card class="ant-card--package-review" :style="{ marginTop: '16px' }">
    <div class="p-16">
      <div class="d-flex align-items-center mb-16">
        <div class="mr-8">
          <a-avatar
            :src="
              umroh.foto_vendor != ''
                ? umroh.foto_vendor
                : 'https://theme.hstatic.net/1000253446/1000470009/14/no-image.jpg?v=843'
            "
          />
        </div>
        <div class="fs-16 fw-500 cr-black">Umaroh Attaubah</div>
      </div>

      <div class="ant-package--rate mb-8">
        <a-rate class="fs-18" :defaultValue="kelas_bintang" disabled />
      </div>

      <div class="ant-package--name fs-22 fw-500 cr-black f-default mb-8">
        {{ umroh.nama }}
      </div>
      <div class="ant-package--info fs-15 fw-400 cr-gray">
        Program {{ umroh.program_hari }} Hari
      </div>
    </div>
    <!-- <a-divider :style="{ margin: '0' }" />
    <div class="p-16 d-flex align-items-center">
      <div class="ant-package--title fs-15 fw-500 cr-black">Jumlah Jamaah</div>
      <div class="ant-package--subtitle fs-14 fw-400 cr-black ml-auto">
        {{ pax }} Pax
      </div>
    </div> -->
    <a-divider :style="{ margin: '0' }" />
    <div class="p-16">
      <div class="ant-package--title fs-15 fw-500 cr-black">Room Jamaah</div>
      <div class="d-flex align-items-center">
        <div class="ant-package--subtitle fs-14 fw-400 cr-gray">Quad Room</div>
        <div class="ant-package--subtitle fs-14 fw-400 cr-black ml-auto">
          {{ quad }} Pax
        </div>
      </div>

      <div class="d-flex align-items-center">
        <div class="ant-package--subtitle fs-14 fw-400 cr-gray">
          Triple Room
        </div>
        <div class="ant-package--subtitle fs-14 fw-400 cr-black ml-auto">
          {{ triple }} Pax
        </div>
      </div>

      <div class="d-flex align-items-center">
        <div class="ant-package--subtitle fs-14 fw-400 cr-gray">
          Double Room
        </div>
        <div class="ant-package--subtitle fs-14 fw-400 cr-black ml-auto">
          {{ double }} Pax
        </div>
      </div>
    </div>
    <a-divider :style="{ margin: '0' }" />
    <div class="p-16">
      <div class="ant-package--title fs-15 fw-500 cr-black">Kelengkapan</div>
      <div class="ant-package--subtitle fs-13 fw-400 cr-gray f-default">
        Termasuk Visa, Asuransi, Handling Domestik, Manasik Pemantapan,
        Perlengkapan Umrah, Tour Leader
      </div>
      <a-divider />
      <div class="ant-package--title fs-15 fw-400 d-block cr-black">
        Harga Bayar
      </div>
      <div
        class="ant-package--subtitle fs-22 fw-500 cr-black d-block f-default"
      >
        {{ total | currency }}
      </div>
      <div :style="{ margin: '16px 0' }">
        <a-button
          block
          size="large"
          class="b-shadow b-radius ant-btn--action fs-15 fw-500"
          @click="nextOrder"
          >Lanjutkan</a-button
        >
      </div>
      <div class="ant-package--subtitle fs-13 fw-400 cr-gray f-default pb-8">
        Dapatkan point langsung ketika anda menyelesaikan aktivitas
      </div>
    </div>
  </a-card>
</template>
<script>
export default {
  props: ["harga", "umroh"],
  data() {
    return {
      quad: 0,
      triple: 0,
      double: 0,
      pax: 0,
      harga_jual: 0,
      kelas_bintang: 2,
      total: 0
    };
  },
  created: function() {
    this.sidebarinfo();
  },
  methods: {
    nextOrder() {
      let params = this.$route.query;
      this.$router.push({
        path: "/payment/order-data",
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
      this.pax = params.pax;
      this.kelas_bintang = this.$props.umroh.kelas_bintang;
      this.total =
        this.$props.harga.quad * this.quad +
        this.$props.harga.triple * this.triple +
        this.$props.harga.double * this.double;
    }
  }
};
</script>
