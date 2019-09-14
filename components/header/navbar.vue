<template>
  <div>
    <fixed-header :fixed.sync="isFixed" :threshold="0">
      <div :class="{ 'fixed-navbar': isFixed }">
        <a-layout-header
          class="navbar"
          :style="{ position: 'absolute', zIndex: 1, width: '100%', background: 'transparent' }"
        >
          <div class="navbar-nav">
            <div class="d-flex align-items-center">
              <!-- <a class="drawer-menu"><a-icon type="menu-fold" /></a> -->
              <nuxt-link to="/" class="navbar-brand">
                <div class="logo"></div>
              </nuxt-link>
            </div>
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
                  <nuxt-link to="/blog">HaloUmmi</nuxt-link>
                </a-menu-item>
                <a-sub-menu>
                  <span slot="title" class="submenu-title-wrapper">Informasi</span>
                  <a-menu-item key="information:1">
                    <a
                      href="https://eservices.haj.gov.sa/eservices3/pages/VisaPaymentInquiry/VisaInquiry.xhtml?dswid=-7084"
                      target="_blank"
                    >Visa Progresif</a>
                  </a-menu-item>
                  <a-menu-item key="information:2">
                    <a
                      href="https://sipatuh.kemenag.go.id/umroh"
                      target="_blank"
                    >Status Keberangkatan</a>
                  </a-menu-item>
                </a-sub-menu>
              </a-menu>

              <!-- before login -->
              <div class="navbar-button ml-8">
                <a-button
                  class="btn-authentication b-shadow b-radius fw-500"
                  @click="showAuthentication"
                >Login/Daftar</a-button>
              </div>

              <!-- after login -->
              <div class="navbar-accounts">
                <nuxt-link to="/accounts">
                  <a-avatar icon="user" />
                </nuxt-link>
              </div>
            </div>
          </div>

          <!-- modal login -->
          <a-modal wrapClassName="ant-modal-authentication" v-model="authentication">
            <modal-authentication />
          </a-modal>
        </a-layout-header>
      </div>
    </fixed-header>
  </div>
</template>
<script>
import modalAuthentication from "~/components/authentication/index.vue";
import FixedHeader from "vue-fixed-header";
export default {
  data() {
    return {
      authentication: false,
      isFixed: false
    };
  },
  methods: {
    showAuthentication() {
      this.authentication = true;
    },
    change(affixed) {
      console.log(affixed);
    }
  },
  components: {
    modalAuthentication,
    FixedHeader
  }
};
</script>