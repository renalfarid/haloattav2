<template>
  <a-card class="md-cities--banner" :bordered="false">
    <template slot="cover">
      <div class="md-cities--cover" v-lazy:background-image="images"></div>
    </template>

    <h2>{{ name }}</h2>
    <p>
      Mesjid 99 Kubah Makassar, Icon Baru Sulawesi Selatan yang Tampil Cantik
      dan Menawan
    </p>

    <nuxt-link to="/">
      <a-button size="large">Jelajahi Paket Umrah</a-button>
    </nuxt-link>
  </a-card>
</template>

<script>
export default {
  props: ["images", "name"]
};
</script>

<style lang="scss">
.md-cities--banner {
  padding-bottom: 24px;
  height: 100%;
  border-radius: 0;
  & .ant-card-cover {
    min-height: 464px;
    height: 100%;
    & .md-cities--cover {
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      height: 100%;
      width: 100%;
    }
  }

  & .ant-card-body {
    background-color: #ffd500;
    position: absolute;
    padding: 40px;
    bottom: 24px;
    right: 0;
    left: 0;
    & h2 {
      font-weight: bold;
      font-size: 48px;
      letter-spacing: 0.5px;
      color: rgba($color: #000000, $alpha: 0.8);
      margin-bottom: 0;
    }
    & p {
      font-size: 16px;
      font-weight: 400px;
      line-height: 20px;
      letter-spacing: 0.5px;
      color: rgba($color: #000000, $alpha: 0.6);
      margin-bottom: 40px;
    }
    & .ant-btn {
      border-radius: 50px;
      border: 1px solid rgba($color: #000000, $alpha: 0.6);
      color: rgba($color: #000000, $alpha: 0.6);
      transition: all 0.2s ease-in-out;
      background: transparent;
      letter-spacing: 0.5px;
      font-weight: 500;
      font-size: 16px;
      padding: 0 32px;
      height: 50px;
      &:hover {
        border: 1px solid rgba($color: #000000, $alpha: 1);
        color: rgba($color: #000000, $alpha: 1);
      }
    }
  }
}
</style>
