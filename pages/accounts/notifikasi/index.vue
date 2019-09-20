<template>
  <div class="ant-card--notification">
    <div class="fs-18 fw-500 cr-black">Notifikasi</div>

    <a-collapse :bordered="false">
      <a-collapse-panel key="1" :showArrow="false" class="b-shadow b-solid b-radius">
        <template slot="header">
          <div class="d-flex align-items-center">
            <a-avatar style="color: #f56a00; backgroundColor: #fde3cf" icon="alert" class="mr-8" />
            <span class="fs-16 fw-500 cr-black">Promo Umrah 2020</span>
          </div>
        </template>
        <p class="fs-15 fw-400 cr-gray">{{text}}</p>
      </a-collapse-panel>

      <a-collapse-panel key="2" :showArrow="false" class="b-shadow b-solid b-radius">
        <template slot="header">
          <div class="d-flex align-items-center">
            <a-avatar style="color: #f56a00; backgroundColor: #fde3cf" icon="alert" class="mr-8" />
            <span class="fs-16 fw-500 cr-black">Voucher Promo Umrah 50%</span>
          </div>
        </template>
        <p class="fs-15 fw-400 cr-gray">{{text}}</p>
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>
<script>
export default {
  layout: "accounts",
  name: "notification",
  head() {
    return {
      title: "Notifikasi - Haloatta"
    };
  },
  data() {
    return {
      text: `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`
    };
  }
};
</script>