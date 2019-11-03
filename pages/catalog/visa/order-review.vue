<template>
  <div class="ant-layout--order-review-package">
    <div class="ant-layout--results-space-small"></div>
    <div class="ant-layout--order-review-package-body">
      <div class="container">
        <a-row :gutter="32">
          <a-col :span="17">
            <informationVisa :data="item" />
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
import informationVisa from "~/components/contents/review/visa/information-visa.vue";
import informationSideRight from "~/components/contents/review/visa/information-sideright.vue";
import moment from "moment";
import axios from "axios";
export default {
  middleware: "authenticated",
  name: "orderReview",
  head() {
    return {
      title: "Ulasan Pesanan - Booking Visa Umrah Lebih Mudah"
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
        .post(process.env.baseUrl + "visa/detail", {
          kode_produk: params.kode
        })
        .then(response => {
          this.item = response.data.data;

          this.loading = false;

          this.sidebar = {
            durasi: response.data.data.duration_stay,
            harga: response.data.data.harga_jual
          };
        });
    }
  },
  components: {
    informationVisa,
    informationSideRight
  }
};
</script>
