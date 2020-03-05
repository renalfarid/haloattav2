<template>
  <a-menu
    class="md-menu--sider-item"
    @click="handleClick"
    mode="inline"
    :defaultSelectedKeys="['1']"
  >
    <a-menu-item class="md-menu--link" key="1">
      <nuxt-link to="/accounts" class="nav-text">Ringkasan Akun</nuxt-link>
    </a-menu-item>

    <a-sub-menu class="md-menu--sub" key="2">
      <span slot="title">
        <span>Saldo Halopay</span>
      </span>
      <a-menu-item class="md-menu--sub-item" key="2-1">
        <nuxt-link to="/accounts/top-up" class="nav-text"
          >Tambah Saldo</nuxt-link
        >
      </a-menu-item>
      <a-menu-item class="md-menu--sub-item" key="2-2">
        <nuxt-link to="/accounts/top-up/transaction" class="nav-text"
          >Transaksi</nuxt-link
        >
      </a-menu-item>
      <a-menu-item class="md-menu--sub-item" key="2-3">
        <nuxt-link to="/accounts/top-up/mutation" class="nav-text"
          >Mutasi</nuxt-link
        >
      </a-menu-item>
    </a-sub-menu>

    <a-menu-item class="md-menu--link" key="11">
      <nuxt-link to="/accounts/voucher" class="nav-text"
        >Voucher Saya</nuxt-link
      >
    </a-menu-item>

    <a-menu-item class="md-menu--link" key="disabled-1" disabled>
      <a-divider></a-divider>
    </a-menu-item>

    <a-menu-item class="md-menu--link" key="9">
      <nuxt-link to="/accounts/departure" class="nav-text"
        >Daftar Pesanan</nuxt-link
      >
    </a-menu-item>

    <a-menu-item class="md-menu--link" key="10">
      <nuxt-link to="/accounts/wishlist" class="nav-text">Disimpan</nuxt-link>
    </a-menu-item>

    <a-menu-item class="md-menu--link" key="disabled-2" disabled>
      <a-divider></a-divider>
    </a-menu-item>

    <a-menu-item class="md-menu--link" key="4">
      <nuxt-link to="/accounts/transaction/purchase">
        <span class="nav-text">Pesanan Saya</span>
      </nuxt-link>
    </a-menu-item>

    <a-menu-item class="md-menu--link" key="8">
      <nuxt-link to="/accounts/notifikasi" class="nav-text"
        >Notifikasi</nuxt-link
      >
    </a-menu-item>

    <a-menu-item class="md-menu--link" key="7">
      <nuxt-link to="/accounts/setting" class="nav-text">Pengaturan</nuxt-link>
    </a-menu-item>

    <a-menu-item class="md-menu--link" key="logout" @click="logout">
      <nuxt-link to class="nav-text">keluar</nuxt-link>
    </a-menu-item>
  </a-menu>
</template>

<script>
export default {
  props: {
    handleClick: Function
  },
  
  methods: {
    async logout() {
      await this.$store.commit("resetUser");
      await Cookie.remove("auth");
      await this.$router.push("/");
    }
  }
};
</script>

<style lang="scss">
.md-menu--sider-item {
  background: transparent;
  border: none;
  & .md-menu--link {
    margin: 2px 0 !important;
    &::after {
      border: none;
    }
  }

  & .ant-menu-submenu-title {
    margin: 2px 0 !important;
  }

  & .md-menu--sub-item {
    position: relative;
    margin: 2px 0 !important;
    &::before {
      background: #e8e8e8;
      border-radius: 50px;
      position: absolute;
      content: '';
      height: 5px;
      width: 5px;
      left: 32px;
      top: 46%;
    }
  }

  & .ant-menu-inline {
    & .ant-menu-item {
      &::after {
        border: none;
      }
    }
  }
}
</style>
