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
            <div class="ant-package--name fs-15 fw-500 cr-black">{{item.nama_vendor}}</div>
          </div>
        </div>
      </div>

      <a-divider :style="{margin: '0'}" />

      <div class="p-16">
        <div class="d-flex align-items-center mb-8">
          <div class="ant-package--info fs-14 fw-400 cr-black">Berangkat</div>
          <div class="ant-package--info fs-14 fw-500 cr-black ml-auto">10 September 2019</div>
        </div>
        <div class="d-flex align-items-center">
          <div class="ant-package--info fs-14 fw-400 cr-black">Program Hari</div>
          <div class="ant-package--info fs-14 fw-500 cr-black ml-auto">9 Hari</div>
        </div>
      </div>
      
      <a-divider :style="{margin: '0'}" />

      <div class="p-16">
        <div class="fs-15 fw-500 cr-black mb-8">Jumlah Penumpang</div>
        <div class="d-flex align-items-center">
          <div>
            <div class="ant-package--title fs-15 fw-500 cr-black">Dewasa</div>
            <div class="ant-package--subtitle fs-13 fw-400 cr-gray">Rp12.000.000 /pax</div>
          </div>
          <div class="ml-auto">
            <number-input
              v-model="dewasa"
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
            <div class="ant-package--title fs-15 fw-500 cr-black">Anak</div>
            <div class="ant-package--subtitle fs-13 fw-400 cr-gray f-default">Rp11.000.000 /pax</div>
          </div>
          <div class="ml-auto">
            <number-input
              v-model="anak"
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
        <div class="ant-package--title fs-15 fw-400 d-block text-right cr-black">Harga Bayar</div>
        <div
          class="ant-package--subtitle fs-22 fw-500 cr-black d-block text-right f-default"
        >Rp 48.000.000</div>
        <div :style="{margin: '16px 0'}">
          <a-button
            block
            size="large"
            class="ant-btn--action b-shadow b-radius fs-15 fw-500"
            @click="nextOrderReview"
          >Pesan</a-button>
        </div>
        <div class="ant-package--subtitle fs-13 fw-400 cr-gray f-default">
          Dapatkan point langsung ketika
          anda menyelesaikan aktivitas
        </div>
      </div>
    </a-card>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      dewasa: 2,
      anak: 2,
      item: []
    };
  },
  created: function() {
    this.getdata();
  },
  methods: {
    async getdata() {
      axios
        .post("https://api.haloatta.com/api/tiket/detail", {
          kode_produk: "TKT239610856"
        })
        .then(response => {
          this.item = response.data.data;
          this.loading = false;
        });
    },
    nextOrderReview() {
      this.$router.push({ path: "/catalog/ticket-group/order-review" });
    }
  }
};
</script>