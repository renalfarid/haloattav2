<template>
  <a-layout class="ant-layout--payment">
    <a-layout-header class="ant-layout-header--payment">
      <div class="ant-logo">
        <nuxt-link to="/">
          <img src="/haloatta_white.png" />
        </nuxt-link>
      </div>
      <a-steps :current="1" size="small">
        <a-step title="Data Pemesan" />
        <a-step title="Pembayaran" />
        <a-step title="E-Paket Terbit" />
      </a-steps>
    </a-layout-header>
    <a-layout-content
      class="ant-layout-content--payment-ePackage ant-layout-content--payment-ePackage-failed"
    >
      <div class="container" :style="{minHeight: '70vh'}">
        <e-package-failed />
      </div>
    </a-layout-content>
    <a-layout-footer class="ant-layout-footer--payment-order">
      <div class="container">
        <a-row type="flex" justify="center">
          <a-col :span="22">© 2016 - 2019 Haloatta Travel Technology</a-col>
        </a-row>
      </div>
    </a-layout-footer>
  </a-layout>
</template>
<script>
import ePackageFailed from "~/components/contents/e-package/failed/index.vue";
export default {
  layout: "application",
  name: "ePackage",
  head() {
    return {
      title: "Haloatta - Booking Paket Umrah & Komponen Umrah Terlengkap"
    };
  },
  data() {
    return {};
  },
  components: {
    ePackageFailed
  }
};
</script>
