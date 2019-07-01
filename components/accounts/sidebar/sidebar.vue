<template>
  <div class="ant-layout-sider--accounts-item">
    <div class="ant-layout-sider--accounts-logo">
      <img @click="backHome" src="/haloatta.png" />
    </div>
    <a-menu class="ant-menu--sider" mode="inline" :defaultSelectedKeys="['1']">
      <a-menu-item class="ant-menu--sider-item" key="1">
        <nuxt-link to="/accounts/mitra" class="nav-text">Dashboard</nuxt-link>
      </a-menu-item>

      <a-sub-menu class="ant-menu--sider-sub" key="2">
        <span slot="title">
          <span>Informasi Transaksi</span>
        </span>
        <a-menu-item class="ant-menu--sider-sub-item" key="2-1">Data Pembelian</a-menu-item>
        <a-menu-item class="ant-menu--sider-sub-item" key="2-2">Data Penjualan</a-menu-item>
      </a-sub-menu>

      <a-menu-item-group class="ant-menu-item-group--sider" key="g1">
        <template slot="title">
          <span>Main Menu</span>
        </template>
        <a-menu-item class="ant-menu--sider-item" key="3">
          <nuxt-link to="/accounts/mitra/umrah/list-package" class="nav-text">Semua Paket Umrah</nuxt-link>
        </a-menu-item>
      </a-menu-item-group>
    </a-menu>
  </div>
</template>
<script>
export default {
  methods: {
    backHome() {
      this.$router.push({ path: "/" });
    }
  }
};
</script>
