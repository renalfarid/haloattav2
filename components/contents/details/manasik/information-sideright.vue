<template>
  <div class="ant-affix--card">
    <a-card class="ant-card--package-information">
      <div class="p-16">
        <div class="ant-package--name fs-14 fw-400 cr-gray f-default mb-8">Travel Penyedia</div>
        <div class="d-flex align-items-center">
          <div class="mr-8">
            <a-avatar
              class="vendor-logo"
              :style="{ backgroundImage: 'url(https://theme.hstatic.net/1000253446/1000470009/14/no-image.jpg?v=843)' }"
            />
          </div>
          <div>
            <div class="ant-package--name fs-15 fw-500 cr-black">Babul Kabah</div>
          </div>
        </div>
      </div>

      <a-divider :style="{margin: '0'}" />

      <div class="p-16">
        <div class="ant-package--name fs-18 fw-500 cr-black">Manasik Production</div>
      </div>

      <a-divider :style="{margin: '0'}" />

      <div class="p-16">
        <div class="d-flex align-items-center mb-8">
          <div class="ant-package--info fs-14 fw-400 cr-black">Rencana Manasik</div>
          <div class="ant-package--info fs-14 fw-500 cr-black ml-auto">10 September 2019</div>
        </div>
      </div>

      <a-divider :style="{margin: '0'}" />

      <div class="p-16">
        <div class="d-flex align-items-center">
          <div>
            <div class="ant-package--title fs-15 fw-500 cr-black">Jumlah Pax</div>
          </div>
          <div class="ml-auto">
            <number-input
              v-model="qty"
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
        <div class="ant-package--title fs-15 fw-400 d-block cr-black">Harga Bayar</div>
        <div class="ant-package--subtitle fs-22 fw-500 cr-black d-block f-default">Rp 520.000.000</div>

        <div :style="{margin: '16px 0'}">
          <a-button
            block
            size="large"
            class="ant-btn--action b-shadow b-radius fs-15 fw-500"
            @click="nextOrderReview"
          >Pesan</a-button>
        </div>
        <div class="ant-package--subtitle fs-13 fw-400 cr-gray f-default pb-8">
          Dapatkan point langsung ketika
          anda menyelesaikan aktivitas
        </div>
      </div>
    </a-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      qty: 40
    };
  },
  methods: {
    nextOrderReview() {
      this.$router.push({ path: "/catalog/manasik/order-review" });
    }
  }
};
</script>