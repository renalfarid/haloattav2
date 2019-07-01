<template>
  <div class="ant-layout-header--accounts">
    <div class="navbar-right">
      <a-menu
        class="nav-item"
        mode="horizontal"
        :defaultSelectedKeys="['1']"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1" class="nav-link">
          <nuxt-link to>Beranda</nuxt-link>
        </a-menu-item>
        <a-menu-item key="2" class="nav-link">
          <nuxt-link to>Tentang</nuxt-link>
        </a-menu-item>
        <a-menu-item key="3" class="nav-link">
          <nuxt-link to>Blog</nuxt-link>
        </a-menu-item>
        <a-menu-item key="4" class="nav-link">
          <nuxt-link to>Visa Progresif</nuxt-link>
        </a-menu-item>
        <a-menu-item key="5" class="nav-link">
          <nuxt-link to>Status Keberangkatan</nuxt-link>
        </a-menu-item>
      </a-menu>

      <!-- before login -->
      <div class="navbar-button d-none">
        <a-button class="btn-login" @click="showLogin">Login</a-button>
        <a-button class="btn-register">Register</a-button>
      </div>

      <!-- after login -->
      <div class="navbar-accounts">
        <a-button class="btn-accounts" shape="circle" @click="nextAccounts">G</a-button>
      </div>
    </div>

    <!-- modal login -->
    <a-modal wrapClassName="ant-modal-login" v-model="visibleLogin">
      <sectionLogin />
    </a-modal>
  </div>
</template>
<script>
import sectionLogin from "~/components/login/modal-login.vue";
export default {
  data() {
    return {
      visibleLogin: false
    };
  },
  methods: {
    showLogin() {
      this.visibleLogin = true;
    },
    nextAccounts() {
      this.$router.push({ path: '/accounts/mitra' });
    }
  },
  components: {
    sectionLogin
  }
};
</script>