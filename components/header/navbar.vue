<template>
  <a-layout-header class="navbar">
    <div class="navbar-nav">
      <nuxt-link to="/" class="navbar-brand">
        <img src="~/static/haloatta_white.png">
      </nuxt-link>
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
            <nuxt-link to="/about">Tentang</nuxt-link>
          </a-menu-item>
          <a-menu-item key="3" class="nav-link">
            <nuxt-link to>Blog</nuxt-link>
          </a-menu-item>
          <a-menu-item key="4" class="nav-link">
            <a href="https://eservices.haj.gov.sa/eservices3/pages/VisaPaymentInquiry/VisaInquiry.xhtml?dswid=-7084" target="_blank">Visa Progresif</a>
          </a-menu-item>
          <a-menu-item key="5" class="nav-link">
            <a href="https://sipatuh.kemenag.go.id/umroh" target="_blank">Status Keberangkatan</a>
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
    </div>

    <!-- modal login -->
    <a-modal wrapClassName="ant-modal-login" v-model="visibleLogin">
      <sectionLogin />
    </a-modal>
  </a-layout-header>
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
      this.$router.push({ path: '/' });
    }
  },
  components: {
    sectionLogin
  }
};
</script>