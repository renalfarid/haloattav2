<template>
  <div class="md-cities--list">
    <div class="container">
      <h2 class="md-title">Jelajahi Haloatta di Kota Anda</h2>

      <flickity
        class="md-flickity--cities"
        ref="cities"
        :options="optionCities"
        v-if="cities.length > 0"
      >
        <div
          class="md-flickity--cities-item"
          v-for="city in cities"
          :key="city.nama_kota"
        >
          <a-card :bordered="false">
            <div class="d-flex align-items-center">
              <div
                class="md-cities--cover"
                v-lazy:background-image="city.images"
              ></div>
              <div class="md-cities--name">{{ city.nama_kota }}</div>
            </div>
            <nuxt-link to="/catalog/umrah/kota"></nuxt-link>
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
      cities: [],
      optionCities: {
        groupCells: true,
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
  padding: 64px 0 0;
  & .md-flickity--cities {
    position: relative;
    & .flickity-viewport {
      overflow: inherit !important;
      & .flickity-slider {
        width: auto !important;
        left: -8px !important;
        right: -8px !important;
        & .md-flickity--cities-item {
          width: 33.33%;
          & .ant-card {
            box-shadow: rgba(0, 0, 0, 0.14) 0px 2px 8px !important;
            border-radius: 6px !important;
            overflow: hidden;
            margin: 0 8px;

            & .ant-card-body {
              padding: 0 !important;
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

              & a {
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
}

@media (max-width: 768px) {
  .md-cities--list {
    & .md-flickity--cities {
      & .flickity-viewport {
        & .flickity-slider {
          & .md-flickity--cities-item {
            width: 90% !important;
          }
        }
      }
    }
  }
}
</style>
