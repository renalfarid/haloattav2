<template>
  <a-layout
    :style="{ background: '#fff', maxWidth: '1400px', margin: '0 auto' }"
  >
    <a-layout-sider
      class="ant-layout-sider--accounts"
      :style="{ overflow: 'auto', height: '100vh', position: 'fixed' }"
    >
      <!-- if group customer -->
      <sidebar-customer />
      <!-- if group umaroh personal -->
      <!-- <sidebar-personal /> -->
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
      <a-layout-content :style="{ overflow: 'initial', minHeight: '80vh' }">
        <nuxt />
      </a-layout-content>
      <a-back-top />
    </a-layout>
  </a-layout>
</template>
<script>
import sidebarCustomer from "~/components/accounts/sidebar/customer.vue";
// import sidebarPersonal from "~/components/accounts/sidebar/personal.vue";
import headerBar from "~/components/accounts/header/header.vue";
export default {
  components: {
    sidebarCustomer,
    // sidebarPersonal,
    headerBar
  }
};
</script>

<style lang="scss">
@media (max-width: 768px) {
  .ant-layout-sider--accounts {
    display: none;
  }

  .ant-layout {
    margin-left: 0 !important;
    padding: 0 !important;
    & .ant-layout-content {
      padding: 16px;
    }
  }
}
</style>
