<template>
  <div class="container" :style="{ 'padding-top': '80px' }">
    <h3 class="md-title">Mau ibadah sekaligus jadi pengusaha ?</h3>
    <h4 class="md-subtitle">
      Pelajari berapa yang bisa di hasilkan dengan menjual komponen dan paket
      umrah anda
    </h4>
    <a-row :gutter="16">
      <a-col :xs="24" :sm="24" :md="12">
        <a-card class="md-banner--umaroh" :bordered="false">
          <template slot="cover">
            <div
              class="md-cover--images d-flex align-items-center"
              v-lazy:background-image="require('~/static/umrah/cover/cu51.png')"
            >
              <div class="md-cover--body">
                <h2>Umaroh Vendor</h2>
                <p>
                  Kembangkan bisnis anda dengan menjadi Vendor Haloatta
                </p>
                <a href="https://betavendor.haloatta.com" target="_blank">
                  <a-button size="large">Lihat Selengkapnya</a-button>
                </a>
              </div>
            </div>
          </template>
        </a-card>
      </a-col>

      <a-col :xs="24" :sm="24" :md="12">
        <a-card class="md-banner--umaroh" :bordered="false">
          <template slot="cover">
            <div
              class="md-cover--images d-flex align-items-center"
              v-lazy:background-image="require('~/static/umrah/cover/cu52.jpg')"
            >
              <div class="md-cover--body">
                <h2>Umaroh Bisnis</h2>
                <p>
                  Kembangkan bisnis anda dengan menjadi Umaroh Bisnis Haloatta
                </p>
                <a href="https://www.umaroh.com" target="_blank">
                  <a-button size="large">Lihat Selengkapnya</a-button>
                </a>
              </div>
            </div>
          </template>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<style lang="scss">
.md-banner--umaroh {
  // box-shadow: rgba(0, 0, 0, 0.14) 0px 2px 8px !important;
  margin-top: 24px;
  border-radius: 8px;
  overflow: hidden;
  border: none;
  & .ant-card-cover {
    position: relative;
    height: 240px;
    & .md-cover--images {
      background-position: center center;
      background-repeat: no-repeat;
      border-radius: 8px;
      background-size: cover;
      text-align: left;
      height: 100%;
      width: 100%;

      & .md-cover--body {
        position: absolute;
        padding: 32px;
        bottom: 0;
        & h2 {
          font-size: 24px;
          font-weight: 500;
          color: #ffffff;
          letter-spacing: 0.5px;
          margin-bottom: 0;
        }

        & p {
          font-size: 14px;
          font-weight: 400;
          color: #ffffff;
          letter-spacing: 0.5px;
          margin-bottom: 0;
          max-width: 284px;
        }

        & .ant-btn {
          background-color: transparent;
          box-shadow: none;
          margin-top: 24px;
          border-radius: 8px;
          padding-left: 24px;
          padding-right: 24px;
          letter-spacing: 0.5px;
          font-size: 14px;
          font-weight: 400;
          border: 1px solid rgba($color: #fff, $alpha: 0.7);
          color: rgba($color: #fff, $alpha: 0.7);
          height: 48px;
          &:hover,
          &:focus {
            border: 1px solid rgba($color: #fff, $alpha: 1);
            color: rgba($color: #fff, $alpha: 1);
          }
        }
      }

      &:before {
        background-image: -webkit-linear-gradient(
          to top,
          rgba(5, 13, 40, 0.4),
          rgba(0, 0, 0, 0)
        ) !important;
        background-image: -moz-linear-gradient(
          to top,
          rgba(5, 13, 40, 0.4),
          rgba(0, 0, 0, 0)
        ) !important;
        background-image: linear-gradient(
          to top,
          rgba(5, 13, 40, 0.4),
          rgba(0, 0, 0, 0)
        ) !important;
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
