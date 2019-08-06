<template>
  <a-layout class="ant-layout-blog">
    <a-layout-header class="b-shadow" :style="{ background: '#fff' }">
      <div class="container d-flex align-items-center">
        <div class="logo">
          <img src="/haloatta.png" />
        </div>
        <div class="ml-auto">
          <a-menu mode="horizontal" :defaultSelectedKeys="['1']" :style="{ lineHeight: '64px' }">
            <a-menu-item key="1"><nuxt-link to="#">Home</nuxt-link></a-menu-item>
            <a-menu-item key="2"><nuxt-link to="#">Promo</nuxt-link></a-menu-item>
            <a-menu-item key="3"><nuxt-link to="#">Tips & Trik</nuxt-link></a-menu-item>
          </a-menu>
        </div>
      </div>
    </a-layout-header>
    <a-layout-content>
      <div class="container">
        <nuxt />
      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center;background:#fff">2016 - 2019 © PT Haloatta Travel Technology</a-layout-footer>
  </a-layout>
</template>

