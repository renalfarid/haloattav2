<template>
  <div class="ant-layout-header--accounts d-flex align-items-center b-solid">
    <div class="header-left">
      <nuxt-link
        v-if="this.$store.state.role"
        to="/accounts/mitra/create"
        style="margin-right: 16px"
      >
        <a-avatar style="backgroundColor: #F84ECA" icon="plus"/>
      </nuxt-link>
      <span style="margin-right: 16px" class="d-none">
        <a-badge dot>
          <a-avatar size="small" style="backgroundColor: #05CBB0" icon="mail"/>
        </a-badge>
      </span>
      <span style="margin-right: 16px" class="d-none">
        <a-badge dot>
          <a-avatar size="small" style="backgroundColor: #FF7C0A" icon="bell"/>
        </a-badge>
      </span>
    </div>
    <div class="header-right ml-auto">
      <div class="header-accounts">
        <nuxt-link to="/accounts">
          <a-avatar style="backgroundColor: #0FACF3" icon="user"/>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      visibleLogin: false
    };
  },
  methods: {
    showLogin() {
      this.visibleLogin = true;
    }
  }
};
</script>