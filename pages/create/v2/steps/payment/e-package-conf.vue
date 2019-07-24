<template>
  <a-layout class="ant-layout--payment">
    <a-layout-header class="ant-layout-header--payment">
      <div class="ant-logo">
        <nuxt-link to="/">
          <img src="/haloatta_white.png" />
        </nuxt-link>
      </div>
      <a-steps :current="2" size="small" :style="{ maxWidth: '400px' }">
        <a-step title="Review Pesanan" />
        <a-step title="Pembayaran" />
      </a-steps>
    </a-layout-header>
    <a-layout-content
      class="ant-layout-content--payment-ePackage ant-layout-content--payment-ePackage-Dp"
      :style="{ minHeight: '90vh' }"
    >
      <a-spin :spinning="spinning" tip="Loading...">
        <a-row type="flex" justify="space-around" align="middle">
          <a-col :xs="24" :sm="22" :md="20" :lg="16" :xl="16" :xxl="16">
            <e-package-conf />
          </a-col>
        </a-row>
      </a-spin>
    </a-layout-content>
  </a-layout>
</template>
<script>
import ePackageConf from "~/components/contents/e-package/confirmation/index.vue";
export default {
  layout: "application",
  name: "epackage",
  head() {
    return {
      title: "Konfirmasi Pembayaran - Buat Paket Umrah | Haloatta"
    };
  },
  data() {
    return {
      spinning: true
    };
  },
  mounted() {
    setTimeout(() => {
      this.spinning = false;
    }, 3600);
  },
  components: {
    ePackageConf
  }
};
</script>