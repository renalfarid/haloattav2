<template>
  <a-layout :style="{ background: '#f5f5f5' }">
    <a-layout-sider class="ant-layout-sider--accounts" :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }">
      <sideBar />
    </a-layout-sider>

    <a-layout :style="{ marginLeft: '220px' }">
      <a-layout-header :style="{ background: '#fff', padding: 0 }"><headerBar /></a-layout-header>
      <a-layout-content
        :style="{ margin: '20px', overflow: 'initial', minHeight: '80vh' }"
      >
        <nuxt />
      </a-layout-content>

      <a-layout-footer
        :style="{ textAlign: 'center', background: '#f5f5f5' }"
      >Haloatta ©2018 Travel Techonlogy</a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import sideBar from "~/components/accounts/sidebar/sidebar.vue";
import headerBar from "~/components/accounts/header/header.vue";
export default {
  components: {
    sideBar, headerBar
  }
};
</script>
