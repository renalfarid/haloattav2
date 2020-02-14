<template>
  <div class="md-cities--list">
    <div class="container">
      <h2 class="md-title">Jelajahi Haloatta di Kota Anda</h2>
      <client-only>
        <a-row :gutter="24">
          <flickity
            class="md-flickity--cities"
            ref="cities"
            :options="optionCities"
            v-if="cities.length > 0"
          >
            <a-col
              class="md-flickity--cities-item"
              v-for="city in cities"
              :key="city.nama_kota"
              :xs="24"
              :sm="12"
              :md="12"
              :lg="8"
            >
              <a-badge dot :style="{ width: '100%' }">
                <a-card :bordered="false">
                  <div class="d-flex align-items-center">
                    <div
                      class="md-cities--cover"
                      v-lazy:background-image="city.images"
                    ></div>
                    <div class="md-cities--name">{{ city.nama_kota }}</div>
                  </div>
                </a-card>
              </a-badge>
            </a-col>
          </flickity>
        </a-row>
      </client-only>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      cities: [],
      optionCities: {
        freeScroll: true,
        contain: true,
        prevNextButtons: false,
        pageDots: false
      }
    };
  },

  created() {
    this.getCity();
  },

  methods: {
    getCity() {
      axios.get(process.env.baseUrl + "option/kota").then(response => {
        this.cities = response.data.data;
      });
    }
  }
};
</script>

<style lang="scss">
.md-cities--list {
  padding: 64px 0 0 0;
  & .md-flickity--cities {
    position: relative;
    top: -16px;
    & .flickity-viewport {
      min-height: 124px;
      & .flickity-slider {
        padding-top: 8px;
        & .md-flickity--cities-item {
          & .ant-card {
            border-radius: 6px !important;
            box-shadow: rgba(0, 0, 0, 0.14) 0px 2px 8px !important;
            & .ant-card-body {
              padding: 0;
              & .md-cities--cover {
                border-top-left-radius: 6px;
                border-bottom-left-radius: 6px;
                background-position: center center;
                background-repeat: no-repeat;
                background-size: cover;
                margin-right: 16px;
                height: 96px;
                min-width: 116px;
                width: 116px;
              }

              & .md-cities--name {
                letter-spacing: 0.5px;
                line-height: 26px;
                font-size: 20px;
                font-weight: 500;
                color: #000000;
              }
            }
          }
        }
      }
    }
  }
}

@media (max-width: 767px) {
  .md-cities--list {
    & .md-flickity--cities {
      & .flickity-viewport {
        & .flickity-slider {
          & .md-flickity--cities-item {
            max-width: 90% !important;
          }
        }
      }
    }
  }
}
</style>
