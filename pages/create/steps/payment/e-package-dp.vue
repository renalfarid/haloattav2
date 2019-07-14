<template>
  <a-layout class="ant-layout--payment" :style="{ maxWidth: '1200px', margin: '0 auto' }">
    <a-layout-sider :style="{ overflow: 'auto', height: '100vh', position: 'fixed'}" width="280">
      <a-card class="ant-card--steps-proggress" :bordered="false">
        <sider-steps :active="active" />
      </a-card>
    </a-layout-sider>
    <a-layout :style="{ marginLeft: '280px', padding: '24px' }">
      <a-layout-content class="ant-layout-content--payment-ePackage ant-layout-content--payment-ePackage-Dp" :style="{ paddingTop: '0' }">
        <e-package-dp />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import siderSteps from "~/pages/create/steps/sider.vue";
import ePackageDp from "~/components/contents/e-package/dp/index.vue"
export default {
  layout: "application",
  name: "epackage",
  head() {
    return {
      title: "e-paket - Buat Paket Umrah | Haloatta"
    };
  },
  data() {
    return {
      active: 10,
    };
  },
  methods: {
    
  },
  components: {
    siderSteps,
    ePackageDp
  }
};
</script>