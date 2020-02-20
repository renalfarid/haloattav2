<template>
  <div class="ant-layout--order-review-package">
    <div class="ant-layout--results-space-small"></div>
    <div class="ant-layout--order-review-package-body">
      <div class="container">
        <h2 class="mt-16 mb-24 cr-gray">Review Pesanan</h2>
        
        <a-row :gutter="24">
          <a-col :xs="24" :sm="24" :md="16">
            <informationVisa :data="item" />
          </a-col>

          <a-col :xs="24" :sm="24" :md="8">
            <informationSideRight :data="sidebar" />
          </a-col>
        </a-row>
      </div>
    </div>
  </div>
</template>
<script>
import informationVisa from "@/components/contents/review/visa/information-visa.vue";
import informationSideRight from "@/components/contents/review/visa/information-sideright.vue";
import moment from "moment";
import axios from "axios";
export default {
  middleware: "authenticated",
  name: "order-review-visa",
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
  async asyncData({ query }) {

    const myRespone = await axios.post(
      process.env.baseUrl + "visa/detail",
      { kode_produk: query.kode }
    );

    return {
      item: myRespone.data.data,
      sidebar: {
        durasi: myRespone.data.data.duration_stay,
        harga: myRespone.data.data.harga_jual
      }
    };
  },
  methods: {
    moment
  },
  components: {
    informationVisa,
    informationSideRight
  }
};
</script>
