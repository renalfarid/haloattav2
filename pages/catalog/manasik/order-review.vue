<template>
  <div class="ant-layout--order-review-package">
    <div class="ant-layout--results-space-small"></div>
    <div class="ant-layout--order-review-package-body">
      <div class="container">
        <a-row :gutter="32">
          <a-col :span="17">
            <informationManasik :data="item" />
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
import informationManasik from "~/components/contents/review/manasik/information-manasik.vue";
import informationSideRight from "~/components/contents/review/manasik/information-sideright.vue";
import axios from "axios";
export default {
  middleware: "authenticated",
  name: "orderReview",
  head() {
    return {
      title: "Ulasan Pesanan - Booking Manasik Pemantapan Umrah Lebih Mudah"
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
        .post(process.env.baseUrl + "manasik/detail", {
          kode_produk: params.kode
        })
        .then(response => {
          this.item = response.data.data;

          this.sidebar = {
            harga: response.data.data.harga_satuan
          };

          this.loading = false;
        });
    }
  },
  components: {
    informationManasik,
    informationSideRight
  }
};
</script>
