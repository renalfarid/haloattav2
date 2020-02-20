<template>
  <div class="ant-layout--order-review-package">
    <div class="ant-layout--results-space-small"></div>
    <div class="ant-layout--order-review-package-body">
      <div class="container">
        <h2 class="mt-16 mb-0 cr-gray">Review Pesanan</h2>
        
        <a-row :gutter="24">
          <a-col :xs="24" :sm="24" :md="16">
            <informationManasik :data="item" />
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
import informationManasik from "@/components/contents/review/manasik/information-manasik.vue";
import informationSideRight from "@/components/contents/review/manasik/information-sideright.vue";
import axios from "axios";
export default {
  middleware: "authenticated",
  name: "order-review-manasik",
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
  async asyncData({ query }) {
    const myRespone = await axios.post(process.env.baseUrl + "manasik/detail", {
      kode_produk: query.kode
    });

    return {
      item: myRespone.data.data,
      sidebar: {
        harga: myRespone.data.data.harga_satuan
      }
    };
  },
  components: {
    informationManasik,
    informationSideRight
  }
};
</script>
