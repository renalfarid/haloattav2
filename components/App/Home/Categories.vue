<template>
  <div class="content-components-umrah" :style="{ 'padding-top': '80px' }">
    <div class="container">
      <h2 class="md-title">Komponen Umrah dan Wisata</h2>
      <h4 class="md-subtitle" :style="{'margin-bottom':'32px'}">
        Mulai lah mencari ide untuk paket wisata dan perjalanan umroh anda
      </h4>

      <flickity
        class="md-flickity--categories"
        ref="categories"
        :options="optionCategories"
      >
        <div class="md-flickity--items">
          <a-card class="card-product--components">
            <div
              class="ant-card-cover-images"
              v-lazy:background-image="require('~/static/components/umrah.png')"
            ></div>
            <div class="ant-card-cover--overlay">
              <div class="m-auto">
                <h3>Paket Umroh</h3>
                <p>
                  <span>{{ this.paketumrah }}</span> Paket
                </p>
              </div>
            </div>
            <nuxt-link to="/catalog/umrah"> </nuxt-link>
          </a-card>
        </div>

        <div class="md-flickity--items">
          <a-card class="card-product--components">
            <div
              class="ant-card-cover-images"
              v-lazy:background-image="
                require('~/static/components/ticket.png')
              "
            ></div>
            <div class="ant-card-cover--overlay">
              <div class="m-auto">
                <h3>Tiket Group</h3>
                <p>
                  <span>{{ this.tiketgroup }}</span> Paket
                </p>
              </div>
            </div>

            <nuxt-link to="/catalog/ticket-group"></nuxt-link>
          </a-card>
        </div>

        <div class="md-flickity--items">
          <a-card class="card-product--components">
            <div
              class="ant-card-cover-images"
              v-lazy:background-image="
                require('~/static/components/accommodation.png')
              "
            ></div>
            <div class="ant-card-cover--overlay">
              <div class="m-auto">
                <h3>LA Akomodasi</h3>
                <p>
                  <span>{{ this.laakomodasi }}</span> Paket
                </p>
              </div>
            </div>
            <nuxt-link to="/catalog/accommodation"></nuxt-link>
          </a-card>
        </div>

        <div class="md-flickity--items">
          <nuxt-link to="/catalog/visa">
            <a-card class="card-product--components">
              <div
                class="ant-card-cover-images"
                v-lazy:background-image="
                  require('~/static/components/visa.png')
                "
              ></div>
              <div class="ant-card-cover--overlay">
                <div class="m-auto">
                  <h3>Visa Perjalanan</h3>
                  <p>
                    <span>{{ this.visa }}</span> Paket
                  </p>
                </div>
              </div>
            </a-card>
          </nuxt-link>
        </div>

        <div class="md-flickity--items">
          <a-card class="card-product--components">
            <div
              class="ant-card-cover-images"
              v-lazy:background-image="
                require('~/static/components/insurance.png')
              "
            ></div>
            <div class="ant-card-cover--overlay">
              <div class="m-auto">
                <h3>Asuransi Perjalanan</h3>
                <p>
                  <span>{{ this.asuransi }}</span> Paket
                </p>
              </div>
            </div>
            <nuxt-link to="/catalog/insurance"></nuxt-link>
          </a-card>
        </div>
      </flickity>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      paketumrah: 0,
      tiketgroup: 0,
      laakomodasi: 0,
      visa: 0,
      asuransi: 0,
      optionCategories: {
        freeScroll: true,
        contain: true,
        prevNextButtons: false,
        pageDots: false
      }
    };
  },

  mounted() {
    this.countPaket();
  },

  methods: {
    countPaket() {
      axios
        .get(process.env.baseUrl + "total-produk")
        .then(response => {
          this.paketumrah = response.data.data.umrah;
          this.tiketgroup = response.data.data.tiket;
          this.laakomodasi = response.data.data.la;
          this.visa = response.data.data.visa;
          this.asuransi = response.data.data.asuransi;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss">
.content-components-umrah {
  padding: 2.5rem 0;
  & .md-flickity--categories {
    position: relative;
    & .flickity-viewport {
      min-height: 340px;
      & .flickity-slider {
        width: auto !important;
        left: -6px !important;
        right: -6px !important;
        & .md-flickity--items {
          width: 24%;
          & .card-product--components {
            border-radius: 0;
            margin: 0 6px;
            overflow: hidden;
            height: 340px;
            border: none;
            & .ant-card-cover-images {
              -webkit-transform: translate3d(0, 10%, 0) scale3d(1.2, 1.2, 1);
              transform: translate3d(0, 10%, 0) scale3d(1.2, 1.2, 1);
              -webkit-transition: -webkit-transform 0.35s, opacity 0.35s;
              transition: transform 0.35s, opacity 0.35s;
              background-position: center center;
              background-repeat: no-repeat;
              background-size: cover;
              border-radius: 0;
              overflow: hidden;
              height: 100%;
              width: 100%;
            }
            & .ant-card-body {
              position: relative;
              height: 100%;
              padding: 0;
              & .ant-card-cover--overlay {
                background-image: -webkit-linear-gradient(
                  to top,
                  rgba(0, 0, 0, 0.6),
                  rgba(0, 0, 0, 0)
                ) !important;
                background-image: -moz-linear-gradient(
                  to top,
                  rgba(0, 0, 0, 0.6),
                  rgba(0, 0, 0, 0)
                ) !important;
                background-image: linear-gradient(
                  to top,
                  rgba(0, 0, 0, 0.6),
                  rgba(0, 0, 0, 0)
                ) !important;
                padding: 64px 8px 32px 8px;
                position: absolute;
                width: 100%;
                bottom: 0;
                left: 0;
                & h3 {
                  font-size: 20px !important;
                  text-align: center;
                  color: #ffffff;
                  letter-spacing: 0.5px;
                  font-weight: 500 !important;
                  line-height: normal;
                  margin-bottom: 8px !important;
                }
                & p {
                  text-align: center;
                  color: rgba($color: #fff, $alpha: 0.8);
                  letter-spacing: 0.5px;
                  font-style: italic;
                  font-weight: 400;
                  font-size: 14px !important;
                  margin-bottom: 0;
                }
              }
            }
            &:hover {
              & .ant-card-cover-images {
                -webkit-transform: translate3d(0, 0, 0);
                transform: translate3d(0, 0, 0);
              }
            }
            & a {
              display: inline-block;
              position: absolute;
              height: 100%;
              width: 100%;
              left: 0;
              top: 0;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .content-components-umrah {
    & .md-flickity--categories {
      & .flickity-viewport {
        & .flickity-slider {
          & .md-flickity--items {
            width: 42% !important;
          }
        }
      }
    }
  }
}

@media (max-width: 480px) {
  .content-components-umrah {
    & .md-flickity--categories {
      & .flickity-viewport {
        & .flickity-slider {
          & .md-flickity--items {
            width: 80% !important;
          }
        }
      }
    }
  }
}
</style>
