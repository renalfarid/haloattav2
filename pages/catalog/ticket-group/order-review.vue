<template>
  <div class="ant-layout--order-review-package">
    <div class="ant-layout--results-space-small"></div>
    <div class="ant-layout--order-review-package-body">
      <div class="container">
        <h2 class="mt-16 mb-0 cr-gray">Review Pesanan</h2>
        
        <a-row :gutter="24">
          <a-col :xs="24" :sm="24" :md="16">
            <informationOrder :data="item" />
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
import informationOrder from "@/components/contents/review/ticket/information-ticket.vue";
import informationSideRight from "@/components/contents/review/ticket/information-sideright.vue";
import Meta from "@/assets/mixins/meta";
import axios from "axios";

export default {
  mixins: [Meta],
  middleware: "authenticated",
  
  data() {
    return {
      item: "",
      sidebar: {},
      meta: {
        title: "Review Pesanan Tiket Group - Haloatta",
        url: "https://www.haloatta.com/catalog/ticket-group/order-review"
      }
    };
  },

  async asyncData({ query }) {
    const myRespone = await axios.post(process.env.baseUrl + "tiket/detail", {
      kode_produk: query.kode
    });

    return {
      item: myRespone.data.data,
      sidebar: {
        berangkat: myRespone.data.data.tanggal_keberangkatan,
        harga: myRespone.data.data.harga_jual,
        program_hari: myRespone.data.data.program_hari
      }
    };
  },

  components: {
    informationOrder,
    informationSideRight
  }
};
</script>
