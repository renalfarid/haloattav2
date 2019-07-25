<template>
  <div class="ant-layout-sider--accounts-item">
    <div class="ant-layout-sider--accounts-logo">
      <nuxt-link to="/">
        <img src="/haloatta.png" />
      </nuxt-link>
    </div>

    <div class="ant-avatar--user d-flex align-items-center">
      <div class="mr-8">
        <a-avatar size="large" src="/user/maha_user.jpg" />
      </div>
      <div class="text-ellipsis pr-16">
        <div class="fs-14 f-default cr-black mb-4">Umaroh Personal</div>
        <div class="fs-16 fw-500 f-default d-inline cr-black">Alba Husain Mustafa Alimuddin</div>
      </div>
      <!-- <div>
        <a-button class="b-shadow b-radius d-flex align-items-center">
          <img src="/icons/upgrade.png" /> Upgrade ke Bisnis
        </a-button>
      </div> -->
    </div>

    <a-divider />

    <div class="ant-avatar--user d-flex align-items-center">
      <div class="mr-8">
        <a-avatar style="backgroundColor: #0FACF3" icon="wallet" />
      </div>
      <div>
        <div class="fs-14 f-default cr-black mb-4">Saldo Halopay</div>
        <div class="fs-16 fw-500 f-default cr-black">Rp. 100.000.000</div>
      </div>
    </div>

    <a-divider />

    <a-menu class="ant-menu--sider" mode="inline" :defaultSelectedKeys="['1']">
      <a-menu-item class="ant-menu--sider-item" key="1">
        <nuxt-link to="/accounts/mitra" class="nav-text">Ringkasan Akun</nuxt-link>
      </a-menu-item>

      <a-menu-item class="ant-menu--sider-item" key="2">
        <nuxt-link to="/accounts/top-up" class="nav-text">Top Up Halopay</nuxt-link>
      </a-menu-item>

      <a-sub-menu class="ant-menu--sider-sub" key="3">
        <span slot="title">
          <span>Manajemen Paket</span>
        </span>
        <a-menu-item class="ant-menu--sider-sub-item" key="3-1">
          <nuxt-link to="/accounts/mitra/management/package" class="nav-text">Paket Saya</nuxt-link>
        </a-menu-item>
        <a-menu-item class="ant-menu--sider-sub-item" key="3-2">
          <nuxt-link to="/accounts/mitra/management/seat" class="nav-text">Seat</nuxt-link>
        </a-menu-item>
      </a-sub-menu>

      <a-sub-menu class="ant-menu--sider-sub" key="4">
        <span slot="title">
          <span>Riwayat Transaksi</span>
        </span>
        <a-menu-item class="ant-menu--sider-sub-item" key="4-1">
          <nuxt-link to="/accounts/mitra/transaction/purchase" class="nav-text">Pembelian</nuxt-link>
        </a-menu-item>
        <a-menu-item class="ant-menu--sider-sub-item" key="4-2">
          <nuxt-link to="/accounts/mitra/transaction/sales" class="nav-text">Penjualan</nuxt-link>
        </a-menu-item>
      </a-sub-menu>

      <a-menu-item class="ant-menu--sider-item" key="5">
        <nuxt-link to="/accounts/mitra/transaction/order">
          <div class="d-flex align-items-center">
            <span class="nav-text">Pesanan Saya</span>
            <a-badge class="ml-auto" count="3" />
          </div>
        </nuxt-link>
      </a-menu-item>

      <a-menu-item class="ant-menu--sider-item" key="6">
        <nuxt-link to="/accounts/mitra/create" class="nav-text">Buat Paket</nuxt-link>
      </a-menu-item>

      <a-menu-item class="ant-menu--sider-item" key="7">
        <nuxt-link to="/accounts/mitra/setting" class="nav-text">Pengaturan</nuxt-link>
      </a-menu-item>
    </a-menu>
  </div>
</template>
<script>
export default {
  props: ["current"]
};
</script>
