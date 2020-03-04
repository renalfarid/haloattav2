<template>
  <div class="ant-layout--order-review-package">
    <div class="ant-layout--results-space-small"></div>
    <div class="ant-layout--order-review-package-body">
      <div class="container">
        <h2 class="mt-16 mb-0 cr-gray">Review Pesanan</h2>

        <a-row :gutter="24">
          <a-col :xs="24" :sm="24" :md="16">
            <informationAccommodation :data="item" />
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
import informationAccommodation from "@/components/contents/review/accommodation/information-accommodation.vue";
import informationSideRight from "@/components/contents/review/accommodation/information-sideright.vue";
import Meta from "@/assets/mixins/meta";
import moment from "moment";
import axios from "axios";

export default {
  mixins: [Meta],
  
  data() {
    return {
      item: "",
      sidebar: {},
      meta: {
        title: "Review Pesanan Paket Akomodasi - Haloatta",
        url: "https://www.haloatta.com/catalog/accommodation/order-review"
      }
    };
  },

  async asyncData({ query }) {
    const myRespone = await axios.post(process.env.baseUrl + "la/detail", {
      kode_produk: query.kode
    });

    return {
      item: {
        informasi: myRespone.data.data,
        hotel_mekkah: myRespone.data.data2.hotel_mekkah,
        hotel_madinah: myRespone.data.data2.hotel_madinah
      },
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
