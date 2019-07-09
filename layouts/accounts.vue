<template>
  <a-layout :style="{ background: '#f5f5f5' }">
    <a-layout-sider
      class="ant-layout-sider--accounts"
      :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }"
    >
      <sideBar />
    </a-layout-sider>

    <a-layout :style="{ marginLeft: '260px'}">
      <a-layout-header :style="{ background: '#fff', padding: 0, margin: '16px 40px'}">
        <headerBar />
      </a-layout-header>
      <a-layout-content :style="{ margin: '16px 40px', overflow: 'initial', minHeight: '80vh' }">
        <nuxt />
      </a-layout-content>

      <a-layout-footer :style="{ background: '#f5f5f5' }">
        <Footer />
      </a-layout-footer>
      <a-back-top />
    </a-layout>
  </a-layout>
</template>
<script>
import sideBar from "~/components/accounts/sidebar/sidebar.vue";
import headerBar from "~/components/accounts/header/header.vue";
import Footer from "~/components/footer/footer.vue";
export default {
  components: {
    sideBar,
    headerBar,
    Footer
  }
};
</script>
