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
  async asyncData({ query }) {
    const myRespone = await axios.post(process.env.baseUrl + "la/detail", {
      kode_produk: query.kode
    });

    return {
      item: myRespone.data.data,
      sidebar: {
        program_hari: myRespone.data.data.program_hari,
        harga_quad: myRespone.data.data.harga_quad,
        harga_triple: myRespone.data.data.harga_triple,
        harga_double: myRespone.data.data.harga_double
      }
    };
  },
  methods: {
    moment
  },
  components: {
    informationAccommodation,
    informationSideRight
  }
};
</script>
