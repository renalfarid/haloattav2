<template>
  <div class="container" :style="{ 'padding-top': '40px' }">
    <h3 class="md-title">Sekumpulan Paket Umrah</h3>
    <h4 class="md-subtitle">Pilihan paket umrah yang telah terverifikasi</h4>
    <a-card class="md-banner--star">
      <template slot="cover">
        <div
          class="md-cover--images d-flex align-items-center"
          v-lazy:background-image="require('~/static/umrah/cover/cu23.png')"
        >
          <div class="md-cover--body">
            <h1>HaloStar</h1>
            <nuxt-link to="/catalog/umrah/all">
              <a-button size="large"
                >Telusuri Paket Umrah <a-icon type="right"
              /></a-button>
            </nuxt-link>
          </div>
        </div>
      </template>
    </a-card>
  </div>
</template>

<style lang="scss">
.md-banner--star {
  margin-top: 24px;
  border-radius: 8px;
  overflow: hidden;
  border: none;
  & .ant-card-cover {
    position: relative;
    height: 284px;
    & .md-cover--images {
      background-position: center center;
      background-repeat: no-repeat;
      border-radius: 8px;
      background-size: cover;
      text-align: center;
      height: 100%;
      width: 100%;

      & .md-cover--body {
        position: relative;
        margin: 0 auto;
        & h1 {
          font-size: 60px;
          font-weight: bold;
          color: #ffffff;
          letter-spacing: 0.5px;
          margin-bottom: 16px;
        }

        & .ant-btn {
          background-color: #ffffff;
          border-radius: 8px;
          padding-left: 24px;
          padding-right: 24px;
          font-weight: 500;
          border: none;
          color: #000000;
          height: 48px;
          & i {
            margin-left: 8px;
          }
        }
      }

      &:before {
        position: absolute;
        content: "";
        height: 100%;
        width: 100%;
        left: 0;
        top: 0;
      }
    }
  }
}
</style>
