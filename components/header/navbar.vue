<template>
  <div>
    <fixed-header :fixed.sync="isFixed" :threshold="0">
      <div :class="{ 'fixed-navbar': isFixed }">
        <a-layout-header
          class="navbar"
          :style="{ position: 'absolute', zIndex: 1, width: '100%', background: 'transparent' }"
        >
          <div class="navbar-nav">
            <nuxt-link to="/" class="navbar-brand">
              <div class="logo"></div>
            </nuxt-link>
            <div class="navbar-right">
              <a-menu
                class="nav-item"
                mode="horizontal"
                :defaultSelectedKeys="['1']"
                :style="{ lineHeight: '64px' }"
              >
                <a-menu-item key="1" class="nav-link">
                  <nuxt-link to="/">Beranda</nuxt-link>
                </a-menu-item>
                <a-menu-item key="2" class="nav-link">
                  <nuxt-link to="/about">Tentang</nuxt-link>
                </a-menu-item>
                <a-menu-item key="3" class="nav-link">
                  <nuxt-link to>Blog</nuxt-link>
                </a-menu-item>
                <a-menu-item key="4" class="nav-link">
                  <a
                    href="https://eservices.haj.gov.sa/eservices3/pages/VisaPaymentInquiry/VisaInquiry.xhtml?dswid=-7084"
                    target="_blank"
                  >Visa Progresif</a>
                </a-menu-item>
                <a-menu-item key="5" class="nav-link">
                  <a href="https://sipatuh.kemenag.go.id/umroh" target="_blank">Status Keberangkatan</a>
                </a-menu-item>
              </a-menu>

              <!-- before login -->
              <div class="navbar-button">
                <a-button class="btn-login" @click="showLogin">Login</a-button>
                <a-button class="btn-register">Register</a-button>
              </div>

              <!-- after login -->
              <div class="navbar-accounts">
                <a-avatar icon="user" @click="nextAccounts" />
                <!-- <a-button class="btn-accounts" shape="circle" @click="nextAccounts">G</a-button> -->
              </div>
            </div>
          </div>

          <!-- modal login -->
          <a-modal wrapClassName="ant-modal-login" v-model="visibleLogin">
            <sectionLogin />
          </a-modal>
        </a-layout-header>
      </div>
    </fixed-header>
  </div>
</template>
<script>
import sectionLogin from "~/components/login/modal-login.vue";
import FixedHeader from "vue-fixed-header";
export default {
  data() {
    return {
      visibleLogin: false,
      isFixed: false
    };
  },
  methods: {
    showLogin() {
      this.visibleLogin = true;
    },
    nextAccounts() {
      this.$router.push({ path: "/accounts/mitra" });
    },
    change(affixed) {
      console.log(affixed);
    }
  },
  components: {
    sectionLogin,
    FixedHeader
  }
};
</script>