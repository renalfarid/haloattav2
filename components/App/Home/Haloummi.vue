<template>
  <div class="content-news">
    <div class="container">
      <h2 class="md-title">Halo Ummi</h2>

      <a-carousel autoplay>
        <div v-for="item in mainhead" :key="item.id">
          <a
            :href="'https://www.haloummi.com/headlines/' + item.slug"
            target="_blank"
          >
            <a-card class="card-news--large-overlay">
              <div slot="cover">
                <div class="box-content" v-lazy:background-image="'https://api.haloummi.com/uploads/' + item.image_url">
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
                          >{{ item.sumber }}</span
                        >
                        <span class="time cr-white-overlay">{{
                          item.date | moment
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
      </a-carousel>

      <a-row :gutter="16">
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
            <a-card class="card-news--small-overlay">
              <div slot="cover">
                <div
                  class="box-content"
                  v-lazy:background-image="
                    'https://api.haloummi.com/uploads/' + sub.image_url
                  "
                >
                  <div :style="{ width: '100%', zIndex: '2' }">
                    <div class="box-overlay">
                      <div class="txt fs-13 text-uppercase cr-white-overlay">
                        {{ sub.kategori }}
                      </div>
                      <div class="txt txt-ellipsis fs-18">{{ sub.title }}</div>
                      <div class="item">
                        <div
                          class="time cr-white-overlay text-capitalize mr-16"
                          >{{ sub.sumber }}</div>

                        <div class="time cr-white-overlay">{{
                          sub.date | moment
                        }}</div>
                      </div>
                    </div>
                  </div>
                  <div class="gradient-bottom"></div>
                </div>
              </div>
            </a-card>
          </a>
        </a-col>
      </a-row>

      <div class="all-package mt-24 mb-16">
        <a href="https://www.haloummi.com" target="_blank" class="fs-18 cr-green d-flex align-items-center">
          Tampilkan semua
          <a-icon class="fs-16 ml-8" type="right" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
moment.locale("id");

export default {
  data() {
    return {
      headlines: [],
      mainhead: [],
      moment
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
    moment(val) {
      return moment(val, "YYYY-MM-DD").fromNow();
    }
  }
};
</script>
