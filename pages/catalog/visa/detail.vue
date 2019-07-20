<template>
  <div class="ant-layout--package-details">
    <div class="ant-layout--results-space-small"></div>
    <div class="container">
      <a-row :gutter="32">
        <a-col :span="17">
          <div class="ant-layout--package-details-body">
            <information-visa />
          </div>
        </a-col>

        <a-col :span="7">
          <div class="ant-layout--right" :style="{ margin: '32px 0'}">
            <div class="ant-affix--container">
              <information-sideright />
            </div>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>
<script>
import informationVisa from "~/components/contents/details/visa/information-visa.vue";
import informationSideright from "~/components/contents/details/visa/information-sideright.vue";
export default {
  name: "detailVisa",
  head() {
    return {
      title:
        "Visa Umrah September 2019 - Booking Paket Umrah & Komponen Umrah Lainnya"
    };
  },
  data() {
    return {};
  },
  components: {
    informationVisa,
    informationSideright
  }
};
</script>
