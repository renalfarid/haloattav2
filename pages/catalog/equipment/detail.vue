<template>
  <div class="ant-layout--package-details">
    <div class="ant-layout--results-space-small"></div>
    <div class="container">
      <a-row :gutter="32">
        <a-col :span="17">
          <div class="ant-layout--package-details-body">
            <information-equipment />
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
import informationEquipment from "~/components/contents/details/equipment/information-equipment.vue";
import informationSideright from "~/components/contents/details/equipment/information-sideright.vue";
export default {
  name: "detailEquipment",
  head() {
    return {
      title:
        "Perlengkapan Umrah - Booking Paket Umrah & Komponen Umrah Lainnya"
    };
  },
  data() {
    return {};
  },
  components: {
    informationEquipment,
    informationSideright
  }
};
</script>
