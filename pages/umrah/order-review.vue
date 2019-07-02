<template>
  <div class="ant-layout--order-review-package">
    <div class="ant-layout--results-space-small"></div>
    <div class="ant-layout--order-review-package-body">
      <div class="container">
        <a-row :gutter="30">
          <a-col :span="17">
            <informationOrder />
          </a-col>
          <a-col :span="7">
            <informationSideRight />
          </a-col>
        </a-row>
      </div>
    </div>
  </div>
</template>
<script>
import informationOrder from "~/components/contents/review/umrah/information-order.vue";
import informationSideRight from "~/components/contents/review/umrah/information-sideright.vue";
export default {
  name: "orderReview",
  head() {
    return {
      title: "Ulasan Pesanan - Booking Paket Umrah Lebih Mudah"
    };
  },
  components: {
    informationOrder,
    informationSideRight
  }
};
</script>
