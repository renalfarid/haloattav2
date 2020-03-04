<template>
  <div class="content-news">
    <div class="container">
      <h2 class="md-title">Halo Ummi</h2>
      <h4 class="md-subtitle" :style="{ 'margin-bottom': '32px' }">
        Kumpulan berita ummat islam di seluruh dunia
      </h4>

      <flickity
        class="md-flickity--news"
        ref="news"
        :options="optionNews"
        v-if="mainhead.length > 0"
      >
        <div
          class="md-flickity--news-item"
          v-for="item in mainhead"
          :key="item.id"
        >
          <a
            :href="'https://www.haloummi.com/headlines/' + item.slug"
            target="_blank"
          >
            <a-card class="card-news--large-overlay">
              <div slot="cover">
                <div
                  class="box-content"
                  v-lazy:background-image="
                    'https://api.haloummi.com/uploads/' + item.image_url
                  "
                >
                  <div :style="{ width: '100%', zIndex: '2' }">
                    <div class="box-overlay">
                      <div
                        class="txt fs-16 text-uppercase cr-white-overlay mb-0"
                      >
                        {{ item.kategori }}
                      </div>
                      <div class="txt fs-30 f-default">
                        {{ item.title }}
                      </div>
                      <div class="item">
                        <span
                          class="time cr-white-overlay text-capitalize mr-16"
                          ><i>{{ item.sumber }}</i></span
                        >
                        <span class="time cr-white-overlay">{{
                          item.date | humanizeTime
                        }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="gradient-bottom"></div>
                </div>
              </div>
            </a-card>
          </a>
        </div>
      </flickity>

      <a-row :gutter="24">
        <a-col
          :xs="24"
          :sm="24"
          :md="8"
          :lg="8"
          class="mb-16"
          v-for="sub in headlines"
          :key="sub.id"
        >
          <a
            :href="'https://www.haloummi.com/headlines/' + sub.slug"
            target="_blank"
          >
            <a-card class="card-news--small">
              <div slot="cover">
                <div
                  class="box-content"
                  v-lazy:background-image="
                    'https://api.haloummi.com/uploads/' + sub.image_url
                  "
                ></div>
              </div>
              <div class="txt fs-13 text-uppercase">
                {{ sub.kategori }}
              </div>
              <div class="txt txt-ellipsis fs-18">{{ sub.title }}</div>
              <div class="item">
                <div class="time text-capitalize">
                  <i>{{ sub.sumber }}</i>
                </div>

                <span class="dots"></span>

                <div class="time">
                  {{ sub.date | humanizeTime }}
                </div>
              </div>
            </a-card>
          </a>
        </a-col>
      </a-row>

      <div class="all-package mt-24 mb-16">
        <a
          href="https://www.haloummi.com"
          target="_blank"
          class="fs-18 cr-green d-flex align-items-center"
        >
          Tampilkan semua
          <a-icon class="fs-16 ml-8" type="right" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
const millisecondsToStr = ms => {
  let temp = Math.floor(ms / 1000);

  const years = Math.floor(temp / 31536000);

  if (years) {
    return years + " tahun yang lalu";
  }

  const months = Math.floor((temp %= 31536000) / 2592000);

  if (months) {
    return months + " bulan yang lalu";
  }

  const weeks = Math.floor((temp %= 31536000) / 604800);
  if (weeks) {
    return weeks + " minggu yang lalu";
  }

  const days = Math.floor((temp %= 31536000) / 86400);

  if (days) {
    return days + " hari yang lalu";
  }

  const hours = Math.floor((temp %= 86400) / 3600);

  if (hours) {
    return hours + " jam yang lalu";
  }

  const minutes = Math.floor((temp %= 3600) / 60);

  if (minutes) {
    return minutes + " menit yang lalu";
  }

  const seconds = temp % 60;

  if (seconds) {
    return seconds + " detik yang lalu";
  }

  return "baru";
};

export default {
  data() {
    return {
      headlines: [],
      mainhead: [],
      optionNews: {
        wrapAround: true,
        autoPlay: 3600,
        groupCells: true,
        freeScroll: true,
        contain: true,
        prevNextButtons: false,
        pageDots: true
      }
    };
  },

  mounted() {
    this.loadHeadlines();
  },

  methods: {
    loadHeadlines() {
      axios
        .get("https://api.haloummi.com/berita/haloatta/headlines")
        .then(result => {
          this.mainhead = result.data.values.slice(0, 2);
          this.headlines = result.data.values.slice(2, 5);
        });
    }
  },

  filters: {
    humanizeTime: function(value) {
      const dateNow = new Date();
      const dateStart = new Date(value);

      const ms = Math.abs(dateNow.getTime() - dateStart.getTime());

      return millisecondsToStr(ms);
    }
  }
};
</script>

<style lang="scss">
.content-news {
  & .md-flickity--news {
    margin-bottom: 24px;
    position: relative;
    & .flickity-viewport {
      & .flickity-slider {
        & .md-flickity--news-item {
          width: 100%;
          & .ant-card {
            border-radius: 0;
            overflow: hidden;
          }
        }
      }
    }
    & .flickity-page-dots {
      bottom: 12px !important;
      text-align: right !important;
      right: 24px;
      & .dot {
        background-color: #ffffff;
      }
    }
  }
}
</style>
