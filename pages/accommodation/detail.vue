<template>
  <div class="ant-layout--package-details">
    <div class="ant-layout--results-space-small"></div>
    <div class="container">
      <a-row :gutter="32">
        <a-col :span="17">
          <div class="ant-layout--package-details-body">
            <information-accommodation />
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
import informationAccommodation from "~/components/contents/details/accommodation/information-accommodation.vue";
import informationSideright from "~/components/contents/details/accommodation/information-sideright.vue";
export default {
  name: "detailAccommodation",
  head() {
    return {
      title:
        "LA Akomodasi untuk 3 Hari Mekkah dan 4 Hari Madinah - Booking Paket Umrah & Komponen Umrah Lainnya"
    };
  },
  data() {
    return {};
  },
  components: {
    informationAccommodation,
    informationSideright
  }
};
</script>
