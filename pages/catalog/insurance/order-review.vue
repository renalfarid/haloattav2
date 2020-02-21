<template>
  <div class="ant-layout--order-review-package">
    <div class="ant-layout--results-space-small"></div>
    <div class="ant-layout--order-review-package-body">
      <div class="container">
        <h2 class="mt-16 mb-0 cr-gray">Review Pesanan</h2>
        
        <a-row :gutter="24">
          <a-col :xs="24" :sm="24" :md="16">
            <informationInsurance :data="item" />
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
import informationInsurance from "@/components/contents/review/insurance/information-insurance.vue";
import informationSideRight from "@/components/contents/review/insurance/information-sideright.vue";
import axios from "axios";
export default {
  middleware: "authenticated",
  name: "order-review-insurance",
  head() {
    return {
      title: "Ulasan Pesanan - Booking Asuransi Umrah Lebih Mudah"
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
      process.env.baseUrl + "asuransi/detail",
      { kode_produk: query.kode }
    );

    return {
      item: myRespone.data.data,
      sidebar: {
        harga: myRespone.data.data.harga_satuan,
        durasi: myRespone.data.data.durasi_perlindungan
      }
    };
  },
  components: {
    informationInsurance,
    informationSideRight
  }
};
</script>
