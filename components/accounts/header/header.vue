<template>
  <div class="ant-layout-header--accounts d-flex align-items-center b-solid">
    <div class="header-left">
      <a-badge dot class="sm-menu-actived mr-16">
        <a-avatar
          style="backgroundColor: #F7F7F7;padding:4px"
          :src="require('~/static/icons/menu.svg')"
          @click="showDrawer"
        />
      </a-badge>

      <nuxt-link to="/accounts/notifikasi" style="margin-right: 16px">
        <a-avatar
          size="small"
          style="backgroundColor: #FF7C0A"
          icon="notification"
        />
      </nuxt-link>
    </div>

    <div class="header-right ml-auto">
      <div class="header-accounts">
        <nuxt-link to="/accounts">
          <a-avatar style="backgroundColor: #0FACF3" icon="user" />
        </nuxt-link>
      </div>
    </div>

    <a-drawer
      wrapClassName="md-drawer--sider"
      placement="left"
      :closable="false"
      @close="onClose"
      :visible="visible"
    >
      <template slot="title">
        <img src="/haloatta.png" alt="haloatta" />
        <a-button @click="onClose" size="large" shape="circle" icon="close" />
      </template>

      <Item :handleClick="handleClick" />
    </a-drawer>
  </div>
</template>

<script>
import Item from "./item";
import axios from "axios";
export default {
  components: { Item },

  data() {
    return {
      visible: false
    };
  },

  methods: {
    showDrawer() {
      this.visible = true;
    },
    handleClick() {
      this.visible = false;
    },
    onClose() {
      this.visible = false;
    }
  }
};
</script>

<style lang="scss">
.sm-menu-actived {
  display: none;
}

.md-drawer--sider {
  & .ant-drawer-content-wrapper {
    box-shadow: none !important;
    width: 100% !important;
    max-width: 324px !important;
  }
  & .ant-drawer-header {
    border: none;
    & .ant-drawer-title {
      -webkit-justify-content: space-between;
      -moz-justify-content: space-between;
      -ms-justify-content: space-between;
      justify-content: space-between;
      -ms-flex-pack: space-between;
      display: -webkit-box;
      display: -moz-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;

      & img {
        display: inline-block;
        max-width: 100%;
        height: 40px;
      }

      & .ant-btn {
        background-color: #f7f7f7;
        box-shadow: none;
        border: none;
      }
    }
  }
  & .ant-drawer-body {
    padding: 0;
  }
}

@media (max-width: 992px) {
  .sm-menu-actived {
    display: inline-block;
  }
}
</style>
