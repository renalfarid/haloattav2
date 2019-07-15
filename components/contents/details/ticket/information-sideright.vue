<template>
  <div class="ant-affix--card">
    <a-card class="ant-card--package-information">
      <div class="p-16">
        <div class="d-flex align-items-center">
          <div class="mr-8">
            <div class="ant-package--name fs-16 fw-500 cr-black f-default">Lion Air</div>
            <div class="ant-package--name fs-16 fw-500 cr-black f-default">JT 534</div>
          </div>

          <div class="ml-auto">
            <a-avatar src="https://www.goto-hotel.com/wp-content/uploads/lion-parcel-logo.png" />
          </div>
        </div>
        <div class="ant-package--info fs-15 fw-400 cr-gray mt-8">Berangkat <a-divider type="vertical" /> 10 September 2019</div>
        <div class="ant-package--info fs-15 fw-400 cr-gray">Program 9 Hari <a-divider type="vertical" /> 40 pax</div>
      </div>
      <a-divider :style="{margin: '0'}" />
      <div class="p-16">
        <div class="ant-package--title fs-16 fw-500 cr-black">Pengaturan Penumpang</div>
        <div class="ant-package--subtitle fs-14 fw-400 cr-gray f-default">
          Dewasa 40 pax,
          anak 5 pax
        </div>
      </div>
      <a-divider :style="{margin: '0'}" />
      <div class="p-16">
        <div class="d-flex align-items-center">
          <div>
            <div class="ant-package--title fs-16 fw-500 cr-black">Dewasa</div>
            <div class="ant-package--subtitle fs-13 fw-400 cr-gray f-default">(12 thn atau lebih)</div>
          </div>
          <div class="ml-auto">
            <number-input
              :value="35"
              :min="0"
              :max="35"
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
            <div class="ant-package--title fs-16 fw-500 cr-black">Anak</div>
            <div class="ant-package--subtitle fs-13 fw-400 cr-gray f-default">(2 - 11 thn)</div>
          </div>
          <div class="ml-auto">
            <number-input
              :value="5"
              :min="0"
              :max="5"
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
        <div class="d-flex align-items-center">
          <div class="ant-package--title fs-16 fw-500 cr-black">Total Pesanan</div>
          <div class="ant-package--subtitle ml-auto fs-16 fw-500 cr-black f-default">Rp 500.000.000</div>
        </div>
        <div :style="{margin: '16px 0'}">
          <a-button
            block
            size="large"
            class="ant-btn--action b-shadow b-radius fs-15 fw-500"
            @click="nextOrderReview"
          >Pesan</a-button>
        </div>
        <div class="ant-package--subtitle fs-14 fw-400 cr-gray f-default">
          Dapatkan point langsung ketika
          anda menyelesaikan aktivitas
        </div>
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