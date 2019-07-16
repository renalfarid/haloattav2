<template>
  <div class="ant-affix--card">
    <a-card class="ant-card--package-information">
      <div class="p-16">
        <div class="ant-package--rate fs-18 mb-8">
          <a-rate :defaultValue="3" disabled />
        </div>
        <div
          class="ant-package--name fs-22 fw-500 cr-black f-default"
        >Umrah Exclusive Rombongan September</div>
        <div class="ant-package--info fs-16 fw-400 cr-gray f-default mt-8">Program 9 Hari, 40 pax</div>
      </div>
      <a-divider :style="{margin: '0'}" />
      <div class="p-16">
        <div class="ant-package--title fs-16 fw-500 cr-black">Jamaah</div>
        <div class="ant-package--subtitle fs-14 fw-400 cr-gray f-default">Dewasa 35 pax, anak 5 pax</div>
      </div>
      <a-divider :style="{margin: '0'}" />
      <div class="p-16">
        <div class="ant-package--title fs-16 fw-500 cr-black">Atur Jenis Room</div>
        <div class="ant-package--subtitle fs-14 fw-400 cr-gray f-default">Quad 30 pax, Triple 10 pax</div>
      </div>
      <a-divider :style="{margin: '0'}" />
      <div class="p-16">
        <div class="d-flex align-items-center">
          <div>
            <div class="ant-package--title fs-16 fw-500 cr-black">Quad</div>
            <div class="ant-package--subtitle fs-13 fw-400 cr-gray f-default">Rp. 22.000.000 /pax</div>
          </div>
          <div class="ml-auto">
            <number-input
              :value="30"
              :min="0"
              :max="30"
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
            <div class="ant-package--title fs-16 fw-500 cr-black">Triple</div>
            <div class="ant-package--subtitle fs-13 fw-400 cr-gray f-default">Rp. 23.000.000 /pax</div>
          </div>
          <div class="ml-auto">
            <number-input
              :value="10"
              :min="0"
              :max="10"
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
            <div class="ant-package--title fs-16 fw-500 cr-black">Double</div>
            <div class="ant-package--subtitle fs-13 fw-400 cr-gray f-default">Rp. 24.000.000 /pax</div>
          </div>
          <div class="ml-auto">
            <number-input
              :value="0"
              :min="0"
              :max="0"
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
        <div class="ant-package--title fs-16 fw-500 cr-black">Kelengkapan</div>
        <div
          class="ant-package--subtitle fs-13 fw-400 cr-gray f-default"
        >Termasuk Visa, Asuransi, Handling Domestik, Manasik Pemantapan, Perlengkapan Umrah, Tour Leader</div>
        <div :style="{margin: '16px 0'}">
          <a-button
            block
            size="large"
            class="ant-btn--action fs-15 fw-500"
            @click="nextOrderReview"
          >Pesan</a-button>
        </div>
        <div
          class="ant-package--subtitle fs-13 fw-400 cr-gray f-default"
        >Dapatkan point langsung ketika anda menyelesaikan aktivitas</div>
      </div>
    </a-card>
  </div>
</template>
<script>
export default {
  methods: {
    nextOrderReview() {
      this.$router.push({ path: "/umrah/order-review" });
    }
  }
};
</script>
