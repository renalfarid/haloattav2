<template>
  <div class="ant-layout-sider--accounts-item">
    <div class="ant-layout-sider--accounts-logo">
      <nuxt-link to="/">
        <img src="/haloatta.png" />
      </nuxt-link>
    </div>

    <div class="ant-avatar--user d-flex align-items-center mb-16">
      <div class="mr-8">
        <a-avatar
          size="large"
          src="https://cdn4.iconfinder.com/data/icons/avatar-vol-1-3/512/4-512.png"
        />
      </div>
      <div class="text-ellipsis pr-16">
        <div class="fs-16 fw-500 f-default d-inline cr-black">{{$store.state.auth.nama}}</div>
      </div>
    </div>

    <div class="d-none pl-16 pr-16 mb-16">
      <a-button type="primary" class="b-shadow b-radius" block>
        <nuxt-link to="/upgrade">Upgrade Akun</nuxt-link>
      </a-button>
    </div>

    <a-divider :style="{margin: '14px 0'}" />

    <nuxt-link to="/accounts/top-up" class="ant-avatar--user d-flex align-items-center">
      <div class="mr-8">
        <a-avatar style="backgroundColor: rgba(15, 172, 243, .1);color: #0FACF3" icon="wallet" />
      </div>
      <div>
        <div class="fs-14 cr-gray">Saldo Halopay</div>
        <div class="fs-15 fw-500 f-default cr-black">{{ 100000000 | currency }}</div>
      </div>
      <div class="ml-auto">
        <a-icon type="right" class="cr-primary fs-12" />
      </div>
    </nuxt-link>

    <a-divider :style="{margin: '14px 0'}" />

    <nuxt-link to="/accounts/poin" class="ant-avatar--user d-flex align-items-center">
      <div class="mr-8">
        <a-avatar style="backgroundColor: rgba(15, 172, 243, .1);color: #0FACF3;" icon="crown" />
      </div>
      <div>
        <div class="fs-14 cr-gray">Halo Poin</div>
        <div class="fs-15 fw-500 f-default cr-black">10 poin</div>
      </div>
      <div class="ml-auto">
        <a-icon type="right" class="cr-primary fs-12" />
      </div>
    </nuxt-link>

    <a-divider />

    <a-menu class="ant-menu--sider" mode="vertical" :defaultSelectedKeys="['1']">
      <a-menu-item class="ant-menu--sider-item" key="1">
        <nuxt-link to="/accounts" class="nav-text">Ringkasan Akun</nuxt-link>
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

      <a-menu-item class="ant-menu--sider-item" key="11">
        <nuxt-link to="/accounts/voucher" class="nav-text">Voucher Saya</nuxt-link>
      </a-menu-item>

      <a-menu-item class="ant-menu--sider-item" key="disabled-1" disabled>
        <a-divider></a-divider>
      </a-menu-item>

      <a-menu-item class="ant-menu--sider-item" key="9">
        <nuxt-link to="/accounts/departure" class="nav-text">Daftar Pesanan</nuxt-link>
      </a-menu-item>
      <a-menu-item class="ant-menu--sider-item" key="12">
        <nuxt-link to="/accounts/billing" class="nav-text">Tagihan Saya</nuxt-link>
      </a-menu-item>
      <a-menu-item class="ant-menu--sider-item" key="10">
        <nuxt-link to="/accounts/wishlist" class="nav-text">Disimpan</nuxt-link>
      </a-menu-item>

      <a-menu-item class="ant-menu--sider-item" key="disabled-2" disabled>
        <a-divider></a-divider>
      </a-menu-item>

      <a-menu-item class="ant-menu--sider-item" key="4">
        <nuxt-link to="/accounts/transaction/purchase">
          <span class="nav-text">Pesanan Saya</span>
        </nuxt-link>
      </a-menu-item>

      <a-menu-item class="ant-menu--sider-item" key="8">
        <nuxt-link to="/accounts/notifikasi" class="nav-text">Notifikasi</nuxt-link>
      </a-menu-item>

      <a-menu-item class="ant-menu--sider-item" key="7">
        <nuxt-link to="/accounts/setting" class="nav-text">Pengaturan</nuxt-link>
      </a-menu-item>

      <a-menu-item class="ant-menu--sider-item" key="logout" @click="logout">
        <nuxt-link to class="nav-text">keluar</nuxt-link>
      </a-menu-item>
    </a-menu>
  </div>
</template>
<script>
import axios from "axios";
const Cookie = process.client ? require("js-cookie") : undefined;
export default {
  props: ["current"],
  data() {
    return {
      nama: ""
    };
  },
  created: function() {
    // get todo items and start listening to events once component is created
    this.getlocal();
  },
  methods: {
    getlocal() {
      const config = {
        headers: {
          Authorization: "Bearer " + this.$store.state.auth.accessToken
        }
      };
      console.log(this.$store.state.auth.accessToken);
      axios
        .get("https://api.haloatta.com/api/user/info", config)
        .then(response => {
          this.nama =
            response.data.data.nama_depan +
            " " +
            response.data.data.nama_belakang;
        })
        .catch(err => {
          console.log(err);
        });
    },
    async logout() {
      await this.$store.commit("resetUser");
      await Cookie.remove("auth");
      await this.$router.push("/");
    }
  }
};
</script>
