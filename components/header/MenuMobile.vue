<template>
  <a-drawer
    placement="right"
    :closable="closable"
    @close="onClose"
    :visible="visible"
    wrapClassName="md-drawer--menu"
  >
    <template slot="title">
      <div class="d-flex a-i-center r-wrap j-c-s-between">
        <div class="md-brand--drawer">
          <img :src="require('~/static/haloatta.png')" />
        </div>
        <div class="md-close" @click="onClose"><a-icon type="close" /></div>
      </div>
    </template>

    <a-row :gutter="8" class="mb-16" v-if="!$store.state.auth">
      <a-col :span="12">
        <nuxt-link to="/login">
          <a-button class="md-btn md-btn--login">Login</a-button>
        </nuxt-link>
      </a-col>
      <a-col :span="12">
        <nuxt-link to="/register">
          <a-button class="md-btn md-btn--regis">Daftar</a-button>
        </nuxt-link>
      </a-col>
    </a-row>

    <nuxt-link to="/accounts" v-else>
      <a-row :gutter="8" class="mb-16">
        <a-col :span="24" class="d-flex align-items-center">
          <a-avatar
            v-if="$store.state.auth && $store.state.auth.foto"
            :src="$store.state.auth.foto"
            size="large"
            :alt="$store.state.auth.nama"
          />
          <a-avatar
            v-else
            size="large"
            src="/brand.png"
            :alt="$store.state.auth.nama"
          />

          <div class="ml-8">
            <div class="fs-14 fw-400 cr-black-opacity">Anda login sebagai</div>
            <div class="fs-16 fw-500 cr-black">
              {{ $store.state.auth.nama }}
            </div>
          </div>
        </a-col>
      </a-row>
    </nuxt-link>

    <a-menu mode="inline" @click="handleClickMenu">
      <a-menu-item key="beranda">
        <nuxt-link to="/">
          <span><a-avatar size="small" icon="home"/></span>
          <span class="cr-black-opacity ml-8">Beranda</span>
        </nuxt-link>
      </a-menu-item>

      <a-menu-item key="umrah">
        <nuxt-link to="/catalog/umrah">
          <span
            ><a-badge dot
              ><a-avatar
                size="small"
                :src="
                  require('~/static/icons/search/tabs/color/umrah.svg')
                "/></a-badge
          ></span>
          <span class="cr-black-opacity ml-8">Umrah</span>
        </nuxt-link>
      </a-menu-item>

      <a-menu-item key="ticket">
        <nuxt-link to="/catalog/ticket-group">
          <span
            ><a-badge dot
              ><a-avatar
                size="small"
                :src="
                  require('~/static/icons/search/tabs/color/ticket.svg')
                "/></a-badge
          ></span>
          <span class="cr-black-opacity ml-8">Tiket Group</span>
        </nuxt-link>
      </a-menu-item>

      <a-menu-item key="accommodation">
        <nuxt-link to="/catalog/accommodation">
          <span
            ><a-badge dot
              ><a-avatar
                size="small"
                :src="
                  require('~/static/icons/search/tabs/color/accommodation.svg')
                "/></a-badge
          ></span>
          <span class="cr-black-opacity ml-8">LA Akomodasi</span>
        </nuxt-link>
      </a-menu-item>

      <a-menu-item key="visa">
        <nuxt-link to="/catalog/visa">
          <span
            ><a-badge dot
              ><a-avatar
                size="small"
                :src="
                  require('~/static/icons/search/tabs/color/visa.svg')
                "/></a-badge
          ></span>
          <span class="cr-black-opacity ml-8">Visa</span>
        </nuxt-link>
      </a-menu-item>

      <a-menu-item key="insurance">
        <nuxt-link to="/catalog/insurance">
          <span
            ><a-badge dot
              ><a-avatar
                size="small"
                :src="
                  require('~/static/icons/search/tabs/color/insurance.svg')
                "/></a-badge
          ></span>
          <span class="cr-black-opacity ml-8">Asuransi</span>
        </nuxt-link>
      </a-menu-item>

      <a-menu-item key="about">
        <nuxt-link to="/about">
          <span><a-avatar size="small" icon="block"/></span>
          <span class="cr-black-opacity ml-8">Tentang</span>
        </nuxt-link>
      </a-menu-item>
      <a-menu-item key="haloummi">
        <a href="https://www.haloummi.com" target="_blank">
          <span><a-avatar size="small" icon="book"/></span>
          <span class="cr-black-opacity ml-8">Haloummi</span></a
        >
      </a-menu-item>
      <a-menu-item key="status">
        <a href="https://sipatuh.kemenag.go.id/umroh" target="_blank">
          <span><a-avatar size="small" icon="fire"/></span>
          <span class="cr-black-opacity ml-8">Status Keberangkatan</span></a
        >
      </a-menu-item>
    </a-menu>
  </a-drawer>
</template>

<script>
export default {
  props: {
    handleClickMenu: Function,
    closable: Boolean,
    onClose: Function,
    visible: Boolean
  }
};
</script>

<style lang="scss">
.md-drawer--menu {
  & .md-btn {
    display: block;
    width: 100%;
    border-radius: 20px;
    height: 40px;
    box-shadow: none;
    text-shadow: none;
    font-weight: 500;
    color: rgba($color: #000000, $alpha: 0.7);
    &.md-btn--login {
      background: rgb(15, 172, 243);
      border-color: rgb(15, 172, 243);
      color: #ffffff;
    }
    &.md-btn--regis {
      border-color: rgb(15, 172, 243);
      color: rgb(15, 172, 243);
    }
  }

  & .ant-menu-item,
  & .ant-menu-submenu-title {
    & .anticon {
      color: #0facf3;
      opacity: 0.7;
      margin: 0;
    }

    & .ant-avatar {
      background-color: #f7f7f7;
      & img {
        padding: 2px;
        opacity: 0.7;
      }
    }
  }
}
</style>
