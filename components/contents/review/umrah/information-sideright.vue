<template>
  <a-card class="ant-card--package-review" :style="{marginTop: '16px'}">
     <div class="p-16">
        <div class="ant-package--rate fs-18 mb-8">
          <a-rate :defaultValue="3" disabled />
        </div>
        <div
          class="ant-package--name fs-22 fw-500 cr-black f-default"
        >Umrah Exclusive Rombongan September</div>
        <div class="ant-package--info fs-15 fw-400 cr-gray">Program 9 Hari, 40 Pax</div>
      </div>
      <a-divider :style="{margin: '0'}" />
      <div class="p-16">
        <div class="ant-package--title fs-15 fw-500 cr-black">Jumlah Jamaah</div>
        <div class="ant-package--subtitle fs-14 fw-400 cr-gray">Dewasa 35 Pax, Anak 5 Pax</div>
      </div>
      <a-divider :style="{margin: '0'}" />
      <div class="p-16">
        <div class="ant-package--title fs-15 fw-500 cr-black">Pengaturan Room Jamaah</div>
        <div class="ant-package--subtitle fs-14 fw-400 cr-gray">Quad {{quad}} Pax, Triple {{triple}} Pax, Double {{double}} Pax</div>
      </div>
      <a-divider :style="{margin: '0'}" />
      <div class="p-16">
        <div class="d-flex align-items-center">
          <div>
            <div class="ant-package--title fs-15 fw-500 cr-black">Quad Room</div>
            <div class="ant-package--subtitle fs-13 fw-400 cr-gray">Rp22.000.000 /pax</div>
          </div>
          <div class="ml-auto">
            <number-input
              v-model="quad"
              :min="0"
              :inputtable="false"
              size="small"
              inline
              center
              controls
            />
          </div>
        </div>
        <a-divider :style="{margin: '14px 0'}" />
        <div class="d-flex align-items-center">
          <div>
            <div class="ant-package--title fs-15 fw-500 cr-black">Triple Room</div>
            <div class="ant-package--subtitle fs-13 fw-400 cr-gray f-default">Rp23.000.000 /pax</div>
          </div>
          <div class="ml-auto">
            <number-input
              v-model="triple"
              :min="0"
              :inputtable="false"
              size="small"
              inline
              center
              controls
            />
          </div>
        </div>
        <a-divider :style="{margin: '14px 0'}" />
        <div class="d-flex align-items-center">
          <div>
            <div class="ant-package--title fs-15 fw-500 cr-black">Double Room</div>
            <div class="ant-package--subtitle fs-13 fw-400 cr-gray f-default">Rp24.000.000 /pax</div>
          </div>
          <div class="ml-auto">
            <number-input
              v-model="double"
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
        <div class="ant-package--title fs-15 fw-500 cr-black">Kelengkapan</div>
        <div
          class="ant-package--subtitle fs-13 fw-400 cr-gray f-default"
        >Termasuk Visa, Asuransi, Handling Domestik, Manasik Pemantapan, Perlengkapan Umrah, Tour Leader</div>
        <div :style="{margin: '16px 0'}">
          <a-button
            block
            size="large"
            class="b-shadow b-radius ant-btn--action fs-15 fw-500"
            @click="nextOrder"
          >Pesan</a-button>
        </div>
        <div
          class="ant-package--subtitle fs-13 fw-400 cr-gray f-default"
        >Dapatkan point langsung ketika anda menyelesaikan aktivitas</div>
      </div>
  </a-card>
</template>
<script>
export default {
  data() {
    return {
      quad: 16,
      triple: 12,
      double: 12
    };
  },
  methods: {
    nextOrder() {
      this.$router.push({ path: "/payment/order-data" });
    }
  }
};
</script>
