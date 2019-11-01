<template>
  <div class="ant-layout--order-review-package">
    <div class="ant-layout--results-space-small"></div>
    <div class="ant-layout--order-review-package-body">
      <div class="container">
        <a-row :gutter="32">
          <a-col :span="17">
            <informationTourleader :data="item" />
          </a-col>
          <a-col :span="7">
            <informationSideRight :data="item" />
          </a-col>
        </a-row>
      </div>
    </div>
  </div>
</template>
<script>
import informationTourleader from "~/components/contents/review/tourleader/information-tourleader.vue";
import informationSideRight from "~/components/contents/review/tourleader/information-sideright.vue";
import moment from "moment";
import axios from "axios";
export default {
  middleware: "authenticated",
  name: "orderReview",
  head() {
    return {
      title: "Ulasan Pesanan - Booking Tour Leader Umrah Lebih Mudah"
    };
  },
  data() {
    return {
      item: ""
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
        .post(process.env.baseUrl + "tourleader/detail", {
          kode_produk: params.kode
        })
        .then(response => {
          this.item = response.data.data;

          this.loading = false;
        });
    }
  },
  components: {
    informationTourleader,
    informationSideRight
  }
};
</script>
