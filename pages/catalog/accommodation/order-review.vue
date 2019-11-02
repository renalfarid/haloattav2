<template>
  <div class="ant-layout--order-review-package">
    <div class="ant-layout--results-space-small"></div>
    <div class="ant-layout--order-review-package-body">
      <div class="container">
        <a-row :gutter="32">
          <a-col :span="17">
            <informationAccommodation :data="item" />
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
import informationAccommodation from "~/components/contents/review/accommodation/information-accommodation.vue";
import informationSideRight from "~/components/contents/review/accommodation/information-sideright.vue";
import moment from "moment";
import axios from "axios";
export default {
  name: "orderReview",
  head() {
    return {
      title: "Ulasan Pesanan - Booking LA Akomodasi Lebih Mudah"
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
    moment,
    async getdata() {
      let params = this.$route.query;
      axios
        .post(process.env.baseUrl + "la/detail", {
          kode_produk: params.kode
        })
        .then(response => {
          this.item = response.data.data;

          this.loading = false;

          this.sidebar = {
            program_hari: response.data.data.program_hari,
            harga: {
              quad: response.data.data.harga_quad,
              triple: response.data.data.harga_triple,
              double: response.data.data.harga_double
            }
          };
        });
    }
  },
  components: {
    informationAccommodation,
    informationSideRight
  }
};
</script>
