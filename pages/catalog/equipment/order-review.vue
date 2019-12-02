<template>
  <div class="ant-layout--order-review-package">
    <div class="ant-layout--results-space-small"></div>
    <div class="ant-layout--order-review-package-body">
      <div class="container">
        <a-row :gutter="32">
          <a-col :span="17">
            <informationEquipment :data="item" />
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
import informationEquipment from "~/components/contents/review/equipment/information-equipment.vue";
import informationSideRight from "~/components/contents/review/equipment/information-sideright.vue";
import moment from "moment";
import axios from "axios";
export default {
  middleware: "authenticated",
  name: "orderReview",
  head() {
    return {
      title: "Ulasan Pesanan - Booking Perlengkapan Umrah Lebih Mudah"
    };
  },
  data() {
    return {
      item: ""
    };
  },
  async asyncData({ query }) {
    const myRespone = await axios.post(
      process.env.baseUrl + "perlengkapan/detail",
      { kode_produk: query.kode }
    );

    return {
      item: myRespone.data.data
    };
  },
  components: {
    informationEquipment,
    informationSideRight
  }
};
</script>
