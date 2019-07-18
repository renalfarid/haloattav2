<template>
  <div class="ant-layout--order-review-package">
    <div class="ant-layout--results-space-small"></div>
    <div class="ant-layout--order-review-package-body">
      <div class="container">
        <a-row :gutter="32">
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
import informationOrder from "~/components/contents/review/ticket/information-ticket.vue";
import informationSideRight from "~/components/contents/review/ticket/information-sideright.vue";
export default {
  name: "orderReview",
  head() {
    return {
      title: "Ulasan Pesanan - Booking Tiket Group Lebih Mudah"
    };
  },
  components: {
    informationOrder,
    informationSideRight
  }
};
</script>
