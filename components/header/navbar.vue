<template>
  <a-layout-header class="navbar">
    <div class="navbar-nav">
      <div class="navbar-brand">
        <img src="~/static/haloatta.png">
      </div>
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
      <div class="navbar-button">
        <a-button class="btn-login">Login</a-button>
        <a-button class="btn-register">Register</a-button>
      </div>
      </div>
    </div>
  </a-layout-header>
</template>
<script>
export default {};
</script>