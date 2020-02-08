<template>
  <div>
    <div class="content-head">
      <div
        class="content-head--cover"
        v-lazy:background-image="require('~/static/umrah/cover/cu62.jpg')"
      >
        <div class="content-head--body container">
          <div class="gradient-top"></div>

        
            <a-row :gutter="24" type="flex" justify="space-between" align="middle" class="h-100">
              <a-col :xs="24" :sm="24" :md="24" :lg="11">
                <h2 class="fs-40 fw-600 title text-capitalize">Jelajahi wisata halal dunia</h2>
                <a-button class="btn-join--us d-none" size="large"
                  >Jelajahi Sekarang</a-button
                >

                <a-comment
                  v-if="$store.state.auth"
                  class="ant-comment--accounts"
                >
                  <template slot="actions">
                    <a-tag>
                      <div class="d-flex align-items-center">
                        <a-icon type="gold" />
                        <span class="mr-4">{{
                          this.$store.state.auth.poin
                        }}</span>
                        POIN
                      </div>
                    </a-tag>
                    <a-tag>
                      <div class="d-flex align-items-center">
                        <a-icon type="wallet" />
                        <span class="text-uppercase mr-4">{{
                          this.$store.state.auth.saldo | currency
                        }}</span>
                      </div>
                    </a-tag>
                  </template>

                  <a
                    slot="author"
                    :style="{ 'text-transform': 'capitalize' }"
                    >{{ $store.state.auth.nama }}</a
                  >

                  <a-avatar
                    v-if="$store.state.auth && $store.state.auth.foto"
                    :src="$store.state.auth.foto"
                    alt="haloatta"
                    slot="avatar"
                  />

                  <a-avatar
                    v-else
                    src="/brand.png"
                    alt="haloatta"
                    slot="avatar"
                  />

                  <p
                    slot="content"
                    :style="{
                      'text-align': 'left',
                      'white-space': 'normal',
                      'margin-top': '8px'
                    }"
                  >
                    {{ $store.state.auth.alamat }}
                  </p>
                </a-comment>
              </a-col>

              <a-col :xs="24" :sm="24" :md="24" :lg="13">
                <a-tabs
                  class="search-main"
                  type="card"
                  defaultActiveKey="1"
                  tabPosition="top"
                  @prevClick="callback"
                  @nextClick="callback"
                >
                  <a-tab-pane key="1">
                    <span slot="tab">
                      <div class="icon-umrah"></div>
                      <span class="label-tabs">Paket Umrah</span>
                    </span>
                    <search-umrah />
                  </a-tab-pane>

                  <a-tab-pane key="2">
                    <span slot="tab">
                      <div class="icon-ticket"></div>
                      <span class="label-tabs">Tiket Group</span>
                    </span>
                    <search-ticket />
                  </a-tab-pane>

                  <a-tab-pane key="3">
                    <span slot="tab">
                      <div class="icon-accommodation"></div>
                      <span class="label-tabs">LA Akomodasi</span>
                    </span>
                    <search-accommodation />
                  </a-tab-pane>

                  <a-tab-pane key="4">
                    <span slot="tab">
                      <div class="icon-visa"></div>
                      <span class="label-tabs">Visa Umrah</span>
                    </span>
                    <search-visa />
                  </a-tab-pane>

                  <a-tab-pane key="5">
                    <span slot="tab">
                      <div class="icon-insurance"></div>
                      <span class="label-tabs">Asuransi</span>
                    </span>
                    <search-insurance />
                  </a-tab-pane>

                  <a-tab-pane key="6">
                    <span slot="tab">
                      <div class="icon-handling"></div>
                      <span class="label-tabs">Handling</span>
                    </span>
                    <search-handling />
                  </a-tab-pane>

                  <a-tab-pane key="7">
                    <span slot="tab">
                      <div class="icon-manasik"></div>
                      <span class="label-tabs">Manasik</span>
                    </span>
                    <search-manasik />
                  </a-tab-pane>

                  <a-tab-pane key="8">
                    <span slot="tab">
                      <div class="icon-equipment"></div>
                      <span class="label-tabs">Perlengkapan</span>
                    </span>
                    <search-equipment />
                  </a-tab-pane>

                  <a-tab-pane key="9">
                    <span slot="tab">
                      <div class="icon-tourleader"></div>
                      <span class="label-tabs">Tour Leader</span>
                    </span>
                    <search-tourleader />
                  </a-tab-pane>
                </a-tabs>
              </a-col>
            </a-row>
        </div>
      </div>
    </div>

    <!-- if there is data then display it package umrah favorit -->
    <div class="content-favorites" :style="{ 'padding-bottom': '0' }">
      <!-- if before login -->
      <sectionFavorite />
      <!-- if after login -->
      <!-- <section-myumrah /> -->
    </div>

    <!-- if there is data then display it package umrah -->
    <umrah-recommended />

    <!-- if there is data then display it create package umrah -->
    <div class="content-banner-full">
      <a-card class="cover-banner">
        <div slot="cover">
          <div
            class="cover-images"
            v-lazy:background-image="require('~/static/umrah/cover/cu28.png')"
          >
            <div class="container">
              <a-row
                :gutter="16"
                type="flex"
                justify="start"
                align="middle"
                class="h-100"
              >
                <a-col :xs="24" :sm="24" :md="12">
                  <a-card-meta>
                    <template slot="title">
                      <span class="fs-40 f-default cr-white"
                        >Mau ibadah sekaligus jadi pengusaha ?</span
                      >
                    </template>
                    <template slot="description">
                      <p class="mb-24 fs-24 f-default cr-white">
                        Pelajari berapa yang bisa Anda hasilkan dengan menjual
                        komponen dan paket umrah Anda
                      </p>
                      <a-button size="large" class="b-shadow b-radius">
                        <!-- <nuxt-link to="/umaroh">Lihat Selengkapnya</nuxt-link> -->
                        <a
                          href="https://betavendor.haloatta.com"
                          target="_blank"
                          >Lihat Selengkapnya</a
                        >
                      </a-button>
                    </template>
                  </a-card-meta>
                </a-col>
              </a-row>
            </div>
            <div class="gradient-bottom"></div>
          </div>
        </div>
      </a-card>
    </div>

    <!-- if there is data then display it components choices -->
    <div class="content-components-umrah">
      <sectionComponentsUmrah />
    </div>

    <div class="content-news">
      <sectionNews />
    </div>
  </div>
</template>

<script>
import searchUmrah from "~/components/contents/lib/search/umrah.vue";
import searchTicket from "~/components/contents/lib/search/ticket.vue";
import searchAccommodation from "~/components/contents/lib/search/accommodation.vue";
import searchVisa from "~/components/contents/lib/search/visa.vue";
import searchInsurance from "~/components/contents/lib/search/insurance.vue";
import searchHandling from "~/components/contents/lib/search/handling.vue";
import searchManasik from "~/components/contents/lib/search/manasik.vue";
import searchEquipment from "~/components/contents/lib/search/equipment.vue";
import searchTourleader from "~/components/contents/lib/search/tourleader.vue";

// if before login
import sectionFavorite from "~/components/contents/home/section-favorite.vue";
// if after login
// import sectionMyumrah from "~/components/contents/home/section-myumrah.vue";
import sectionComponentsUmrah from "~/components/contents/home/section-components.vue";

import umrahRecommended from "~/components/contents/catalog/umrah/recommended.vue";

import sectionNews from "~/components/contents/home/section-news.vue";

import axios from "axios";

export default {
  name: "homePage",
  head() {
    return {
      title: "Haloatta - Booking Paket Umrah, Tiket, LA dan Visa"
    };
  },
  async asyncData({ store }) {
    try {
      const myRespone = await axios.get(process.env.baseUrl + "option/umrah");
      store.dispatch("itemOption/setUmroh", myRespone.data.data);
    } catch (error) {
      store.dispatch("itemOption/setUmroh", []);
      // message.error("Ada kesalahan");
      // console.log("error" + error);
    }
  },

  methods: {
    callback(val) {
      console.log(val);
    }
  },
  components: {
    searchUmrah,
    searchTicket,
    searchAccommodation,
    searchVisa,
    searchInsurance,
    searchHandling,
    searchManasik,
    searchEquipment,
    searchTourleader,
    sectionFavorite,
    // sectionMyumrah
    sectionComponentsUmrah,
    umrahRecommended,
    sectionNews
  }
};
</script>
