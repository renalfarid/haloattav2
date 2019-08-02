<template>
  <div class="ant-layout-sider--accounts-item">
    <div class="ant-layout-sider--accounts-logo">
      <nuxt-link to="/">
        <img src="/haloatta.png" />
      </nuxt-link>
    </div>

    <div class="ant-avatar--user d-flex align-items-center">
      <div class="mr-8">
        <a-avatar
          size="large"
          src="https://cdn4.iconfinder.com/data/icons/avatar-vol-1-3/512/4-512.png"
        />
      </div>
      <div class="text-ellipsis pr-16">
        <div class="fs-14 f-default cr-black mb-4">Umaroh Personal</div>
        <div class="fs-16 fw-500 f-default d-inline cr-black">Alba Husain Mustafa Alimuddin</div>
      </div>
      <!-- <div>
        <a-button class="b-shadow b-radius d-flex align-items-center">
          <img src="/icons/upgrade.png" /> Upgrade ke Bisnis
        </a-button>
      </div>-->
    </div>

    <a-divider />

    <nuxt-link to="/accounts/top-up" class="ant-avatar--user d-flex align-items-center">
      <div class="mr-8">
        <a-avatar style="backgroundColor: rgba(15, 172, 243, .1);color: #0FACF3" icon="wallet" />
      </div>
      <div>
        <div class="fs-14 cr-gray">Saldo Halopay</div>
        <div class="fs-15 fw-500 f-default cr-black">Rp{{100000000 | numFormat}}</div>
      </div>
      <div class="ml-auto"><a-icon type="right" class="cr-primary fs-12" /></div>
    </nuxt-link>

    <a-divider :style="{margin: '14px 0'}" />

    <nuxt-link to="/accounts/mitra/fee" class="ant-avatar--user d-flex align-items-center">
      <div class="mr-8">
        <a-avatar style="backgroundColor: rgba(15, 172, 243, .1);color: #0FACF3" icon="dollar" />
      </div>
      <div>
        <div class="fs-14 cr-gray">Fee Penjualan</div>
        <div class="fs-15 fw-500 f-default cr-black">Rp{{10000000 | numFormat}}</div>
      </div>
      <div class="ml-auto"><a-icon type="right" class="cr-primary fs-12" /></div>
    </nuxt-link>

    <a-divider :style="{margin: '14px 0'}" />

    <nuxt-link to="/accounts/mitra/voucher" class="ant-avatar--user d-flex align-items-center">
      <div class="mr-8">
        <a-avatar style="backgroundColor: rgba(15, 172, 243, .1);color: #0FACF3;" icon="crown" />
      </div>
      <div>
        <div class="fs-14 cr-gray">Halo Poin</div>
        <div class="fs-15 fw-500 f-default cr-black">10 poin</div>
      </div>
      <div class="ml-auto"><a-icon type="right" class="cr-primary fs-12" /></div>
    </nuxt-link>

    <a-divider />

    <a-menu class="ant-menu--sider" mode="vertical" :defaultSelectedKeys="['1']">
      <a-menu-item class="ant-menu--sider-item" key="1">
        <nuxt-link to="/accounts/mitra" class="nav-text">Ringkasan Akun</nuxt-link>
      </a-menu-item>

      <a-sub-menu class="ant-menu--sider-sub" key="2">
        <span slot="title">
          <span>Saldo Halopay</span>
        </span>
        <a-menu-item class="ant-menu--sider-sub-item" key="2-1">
          <nuxt-link to="/accounts/top-up" class="nav-text">Tambah Saldo</nuxt-link>
        </a-menu-item>
        <a-menu-item class="ant-menu--sider-sub-item" key="2-2">
          <nuxt-link to="/accounts/top-up/transaction" class="nav-text">Transaksi</nuxt-link>
        </a-menu-item>
        <a-menu-item class="ant-menu--sider-sub-item" key="2-3">
          <nuxt-link to="/accounts/top-up/mutation" class="nav-text">Mutasi</nuxt-link>
        </a-menu-item>
      </a-sub-menu>

      <a-sub-menu class="ant-menu--sider-sub" key="8">
        <span slot="title">
          <span>Fee Penjualan</span>
        </span>
        <a-menu-item class="ant-menu--sider-sub-item" key="8-1">
          <nuxt-link to="/accounts/mitra/fee" class="nav-text">Daftar Penjualan</nuxt-link>
        </a-menu-item>
        <a-menu-item class="ant-menu--sider-sub-item" key="8-2">
          <nuxt-link to="/accounts/mitra/fee/withdraw-list" class="nav-text">Daftar Pengajuan</nuxt-link>
        </a-menu-item>
      </a-sub-menu>

      <a-menu-item class="ant-menu--sider-item" key="disabled-1" disabled>
        <a-divider></a-divider>
      </a-menu-item>

      <a-menu-item class="ant-menu--sider-item" key="6">
        <nuxt-link to="/accounts/mitra/create" class="nav-text">Buat Paket Umrah</nuxt-link>
      </a-menu-item>

      <a-sub-menu class="ant-menu--sider-sub" key="3">
        <span slot="title">
          <span>Manajemen Paket</span>
        </span>
        <a-menu-item class="ant-menu--sider-sub-item" key="3-1">
          <nuxt-link to="/accounts/mitra/management/package" class="nav-text">Paket Umrah Saya</nuxt-link>
        </a-menu-item>
        <a-menu-item class="ant-menu--sider-sub-item" key="3-2">
          <nuxt-link to="/accounts/mitra/management/seat" class="nav-text">Daftar Seat</nuxt-link>
        </a-menu-item>
      </a-sub-menu>

      <a-menu-item class="ant-menu--sider-item" key="9">
        <nuxt-link to="/accounts/mitra/departure" class="nav-text">Daftar Pemberangkatan</nuxt-link>
      </a-menu-item>

      <a-menu-item class="ant-menu--sider-item" key="disabled-2" disabled>
        <a-divider></a-divider>
      </a-menu-item>

      <a-sub-menu class="ant-menu--sider-sub" key="4">
        <span slot="title">
          <span>Informasi Transaksi</span>
        </span>
        <a-menu-item class="ant-menu--sider-sub-item" key="4-1">
          <nuxt-link to="/accounts/mitra/transaction/purchase" class="nav-text">Semua Pembelian</nuxt-link>
        </a-menu-item>
        <a-menu-item class="ant-menu--sider-sub-item" key="4-2">
          <nuxt-link to="/accounts/mitra/transaction/sales" class="nav-text">Semua Penjualan</nuxt-link>
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

      <a-menu-item class="ant-menu--sider-item" key="7">
        <nuxt-link to="/accounts/mitra/setting" class="nav-text">Pengaturan</nuxt-link>
      </a-menu-item>

      <a-menu-item class="ant-menu--sider-item" key="logout">
        <nuxt-link to="/" class="nav-text">keluar</nuxt-link>
      </a-menu-item>
    </a-menu>
  </div>
</template>
<script>
export default {
  props: ["current"]
};
</script>
