<template>
  <a-layout :style="{ background: '#fff', maxWidth: '1400px', margin: '0 auto' }">
    <a-layout-sider
      class="ant-layout-sider--accounts"
      :style="{ overflow: 'auto', height: '100vh', position: 'fixed' }"
    >
      <side-bar />
    </a-layout-sider>

    <a-layout :style="{ marginLeft: '260px', padding: '24px',}">
      <a-layout-header :style="{ background: '#fff', padding: '0', marginBottom: '32px'}">
        <header-bar />
      </a-layout-header>
      <a-layout-content :style="{ overflow: 'initial', minHeight: '80vh' }">
        <nuxt />
      </a-layout-content>
      <a-back-top />
    </a-layout>
  </a-layout>
</template>
<script>
import sideBar from "~/components/accounts/sidebar/sidebar.vue";
import headerBar from "~/components/accounts/header/header.vue";
export default {
  components: {
    sideBar,
    headerBar
  }
};
</script>
