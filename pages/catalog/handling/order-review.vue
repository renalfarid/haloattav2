<template>
  <div class="ant-layout--order-review-package">
    <div class="ant-layout--results-space-small"></div>
    <div class="ant-layout--order-review-package-body">
      <div class="container">
        <a-row :gutter="32">
          <a-col :span="17">
            <informationHandling />
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
import informationHandling from "~/components/contents/review/handling/information-handling.vue";
import informationSideRight from "~/components/contents/review/handling/information-sideright.vue";
export default {
  name: "orderReview",
  head() {
    return {
      title: "Ulasan Pesanan - Booking Handling Umrah Lebih Mudah"
    };
  },
  components: {
    informationHandling,
    informationSideRight
  }
};
</script>
