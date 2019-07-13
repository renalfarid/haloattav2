<template>
  <div class="ant-layout-header--accounts d-flex align-items-center b-solid">
    <div class="header-left">
      <nuxt-link to="/accounts/mitra/create" style="margin-right: 16px">
        <a-avatar style="backgroundColor: #F84ECA" icon="plus" />  
      </nuxt-link>
      <span style="margin-right: 16px">
        <a-badge dot>
          <a-avatar  size="small" style="backgroundColor: #05CBB0" icon="mail" />
        </a-badge>
      </span>
      <span style="margin-right: 16px">
        <a-badge dot>
          <a-avatar size="small" style="backgroundColor: #FF7C0A" icon="bell" />
        </a-badge>
      </span>
    </div>
    <div class="header-right ml-auto">
      <!-- before login -->
      <div class="header-button d-none">
        <a-button class="btn-login" @click="showLogin">Login</a-button>
        <a-button class="btn-register">Register</a-button>
      </div>

      <!-- after login -->
      <div class="header-accounts">
        <a-avatar style="backgroundColor: #0FACF3" icon="user" @click="nextAccounts" />
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
      this.$router.push({ path: "/accounts/mitra" });
    }
  },
  components: {
    sectionLogin
  }
};
</script>