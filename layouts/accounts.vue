<template>
  <a-layout
    :style="{ background: '#fff', maxWidth: '1400px', margin: '0 auto' }"
  >
    <a-layout-sider
      class="ant-layout-sider--accounts"
      :style="{ overflow: 'auto', height: '100vh', position: 'fixed' }"
    >
      <sidebar-customer />
    </a-layout-sider>

    <a-layout
      :style="{ marginLeft: '260px', padding: '24px', background: '#f6f6f6' }"
    >
      <a-layout-header
        :style="{
          background: '#fff',
          padding: '0',
          marginBottom: '32px',
          borderRadius: '6px'
        }"
      >
        <header-bar />
      </a-layout-header>
      <a-layout-content class="ant-layout--content-accounts" :style="{ overflow: 'initial', minHeight: '80vh' }">
        <nuxt />
      </a-layout-content>
      <a-layout-footer :style="{'padding':'24px 0',background:'transparent','margin-top':'24px',border:'none','text-align':'center'}">
        2016 - {{ new Date().getFullYear() }} © PT. NUH Teknologi Solution
      </a-layout-footer>
      <a-back-top />
    </a-layout>
  </a-layout>
</template>
<script>
import sidebarCustomer from "@/components/accounts/sidebar/customer.vue";
import headerBar from "@/components/accounts/header/header.vue";
export default {
  components: {
    sidebarCustomer,
    headerBar
  }
};
</script>

<style lang="scss">
@media (max-width: 992px) {
  .ant-layout-sider--accounts {
    display: none;
  }

  .ant-layout {
    margin-left: 0 !important;
    padding: 0 !important;
    & .ant-layout--content-accounts {
      padding: 16px;
    }
  }
}
</style>
