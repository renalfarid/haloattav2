<template>
  <div class="ant-layout-sider--accounts-item">
    <div class="ant-layout-sider--accounts-logo">
      <nuxt-link to="/"><img src="/haloatta.png" /></nuxt-link>
    </div>

    <div class="ant-avatar--user">
      <a-avatar class="mb-8" size="large" src="/user/maha_user.jpg" />
      <div class="fs-14 f-default cr-black mb-4">Umaroh Personal</div>
      <div class="fs-15 fw-500 f-default cr-black mb-8">Alba Husain Mustafa</div>
      <div>
        <a-button class="b-shadow b-radius d-flex align-items-center">
          <img src="/icons/upgrade.png" /> Upgrade ke Bisnis
        </a-button>
      </div>
    </div>

    <a-divider />

    <div class="ant-avatar--user">
      <div class="fs-14 f-default cr-black mb-4">Saldo Halopay</div>
      <div class="fs-15 fw-500 f-default cr-black mb-8">Rp. 100.000.000</div>
      <div>
        <a-button class="b-shadow b-radius d-flex align-items-center">
          <img src="/icons/deposit.png" /> Tambah Saldo
        </a-button>
      </div>
    </div>

    <a-divider />

    <a-menu class="ant-menu--sider" mode="inline" :defaultSelectedKeys="['1']">
      <a-menu-item class="ant-menu--sider-item" key="1">
        <nuxt-link to="/accounts/mitra" class="nav-text">Ringkasan Akun</nuxt-link>
      </a-menu-item>

      <a-sub-menu class="ant-menu--sider-sub" key="2">
        <span slot="title">
          <span>Riwayat Transaksi</span>
        </span>
        <a-menu-item class="ant-menu--sider-sub-item" key="2-1">
          <nuxt-link to="/accounts/mitra/transaction/purchase" class="nav-text">Pembelian</nuxt-link>
        </a-menu-item>
        <a-menu-item class="ant-menu--sider-sub-item" key="2-2">
          <nuxt-link to="/accounts/mitra/transaction/sales" class="nav-text">Penjualan</nuxt-link>
        </a-menu-item>
      </a-sub-menu>

      <a-menu-item class="ant-menu--sider-item" key="3">
        <nuxt-link to="/accounts/mitra/transaction/order" class="nav-text">Pesanan Saya</nuxt-link>
      </a-menu-item>

      <a-menu-item class="ant-menu--sider-item" key="4">
        <nuxt-link to="/accounts/mitra/create" class="nav-text">Buat Paket</nuxt-link>
      </a-menu-item>
    </a-menu>
  </div>
</template>
<script>
export default {
  props: ["current"]
};
</script>
