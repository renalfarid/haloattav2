<template>
  <div class="ant-affix--card">
    <a-card class="ant-card--package-information">
      <div class="p-16">
        <div class="d-flex align-items-center mb-16">
          <div class="mr-8">
            <a-avatar src="https://theme.hstatic.net/1000253446/1000470009/14/no-image.jpg?v=843" />
          </div>
          <div class="fs-16 fw-500 cr-black">Umaroh Attaubah</div>
        </div>

        <div class="ant-package--rate mb-8">
          <a-rate class="fs-18" :defaultValue="3" disabled />
        </div>
        <div
          class="ant-package--name fs-22 fw-500 cr-black f-default mb-8"
        >Umrah Exclusive Rombongan September</div>
        <div class="ant-package--info fs-15 fw-400 cr-gray">Program 9 Hari</div>
      </div>
      <a-divider :style="{margin: '0'}" />
      <div class="p-16">
        <div class="d-flex align-items-center">
          <div>
            <div class="ant-package--title fs-15 fw-500 cr-black">Jumlah Jamaah</div>
          </div>
          <div class="ml-auto">
            <number-input
              v-model="jamaah"
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
        <div class="ant-package--title fs-15 fw-500 cr-black">Pengaturan Room Jamaah</div>
      </div>
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
        <a-divider />
        <div class="ant-package--title fs-15 fw-400 d-block cr-black">Harga Bayar</div>
        <div
          class="ant-package--subtitle fs-22 fw-500 cr-black d-block f-default"
        >Rp 520.000.000</div>
        <div :style="{margin: '16px 0'}">
          <a-button
            block
            size="large"
            class="b-shadow b-radius ant-btn--action fs-15 fw-500"
            @click="nextOrderReview"
          >Pesan Sekarang</a-button>
        </div>
        <div
          class="ant-package--subtitle fs-13 fw-400 cr-gray f-default pb-8"
        >Dapatkan point langsung ketika anda menyelesaikan aktivitas</div>
      </div>
    </a-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      jamaah: 9,
      quad: 4,
      triple: 3,
      double: 2
    };
  },
  methods: {
    nextOrderReview() {
      this.$router.push({ path: "/catalog/umrah/order-review" });
    }
  }
};
</script>
