<template>
  <div class="ant-layout--order-review-package">
    <div class="ant-layout--results-space-small"></div>
    <div class="ant-layout--order-review-package-body">
      <div class="container">
        <a-row :gutter="32">
          <a-col :span="17">
            <informationOrder :data="item" />
          </a-col>
          <a-col :span="7">
            <informationSideRight :data="sidebar" />
          </a-col>
        </a-row>
      </div>
    </div>
  </div>
</template>
<script>
import informationOrder from "~/components/contents/review/ticket/information-ticket.vue";
import informationSideRight from "~/components/contents/review/ticket/information-sideright.vue";
import axios from "axios";
export default {
  middleware: "authenticated",
  name: "orderReview",
  head() {
    return {
      title: "Ulasan Pesanan - Booking Tiket Group Lebih Mudah"
    };
  },
  data() {
    return {
      item: "",
      sidebar: {}
    };
  },
  created: function() {
    this.getdata();
  },
  methods: {
    async getdata() {
      let params = this.$route.query;
      axios
        .post(process.env.baseUrl + "tiket/detail", {
          kode_produk: params.kode
        })
        .then(response => {
          this.item = response.data.data;

          this.loading = false;
          this.sidebar = {
            berangkat: response.data.data.tanggal_keberangkatan,
            harga: response.data.data.harga_jual
          };
        });
    }
  },
  components: {
    informationOrder,
    informationSideRight
  }
};
</script>
