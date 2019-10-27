<template>
  <div class="ant-layout--order-review-package">
    <div class="ant-layout--results-space-small"></div>
    <div class="ant-layout--order-review-package-body">
      <div class="container">
        <a-row :gutter="32">
          <a-col :span="17">
            <informationHandling :data="item" />
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
import informationHandling from "~/components/contents/review/handling/information-handling.vue";
import informationSideRight from "~/components/contents/review/handling/information-sideright.vue";
import axios from "axios";
export default {
  name: "orderReview",
  head() {
    return {
      title: "Ulasan Pesanan - Booking Handling Umrah Lebih Mudah"
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
    async getdata() {
      let params = this.$route.query;
      axios
        .post(process.env.baseUrl + "handling/detail", {
          kode_produk: params.kode
        })
        .then(response => {
          this.item = response.data.data;

          this.loading = false;
        });
    }
  },
  components: {
    informationHandling,
    informationSideRight
  }
};
</script>
