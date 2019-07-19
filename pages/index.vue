<template>
  <div>
    <div class="content-head">
      <div class="content-head--cover" :style="{ backgroundImage: 'url(/umrah/cover/cu22.png)' }">
        <div class="content-head--body">
          <div class="gradient-top"></div>
          <a-row :gutter="90" class="w-100" type="flex" justify="space-around" align="middle">
            <a-col :span="14">
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
                    <div class="icon-umrah"></div>Paket Umrah
                  </span>
                  <search-umrah />
                </a-tab-pane>

                <a-tab-pane key="2">
                  <span slot="tab">
                    <div class="icon-ticket"></div>Tiket Group
                  </span>
                  <search-ticket />
                </a-tab-pane>

                <a-tab-pane key="3">
                  <span slot="tab">
                    <div class="icon-accommodation"></div>LA Akomodasi
                  </span>
                  <search-accommodation />
                </a-tab-pane>

                <a-tab-pane key="4">
                  <span slot="tab">
                    <div class="icon-visa"></div>Visa Umrah
                  </span>
                  <search-visa />
                </a-tab-pane>

                <a-tab-pane key="5">
                  <span slot="tab">
                    <div class="icon-insurance"></div>Asuransi
                  </span>
                  <search-insurance />
                </a-tab-pane>

                <a-tab-pane key="6">
                  <span slot="tab">
                    <div class="icon-handling"></div>Handling
                  </span>
                  <search-handling />
                </a-tab-pane>

                <a-tab-pane key="7">
                  <span slot="tab">
                    <div class="icon-manasik"></div>Manasik
                  </span>
                  <search-manasik />
                </a-tab-pane>

                <a-tab-pane key="8">
                  <span slot="tab">
                    <div class="icon-equipment"></div>Perlengkapan
                  </span>
                  <search-equipment />
                </a-tab-pane>

                <a-tab-pane key="9">
                  <span slot="tab">
                    <div class="icon-tourleader"></div>Tour Leader
                  </span>
                  <search-tourleader />
                </a-tab-pane>
              </a-tabs>
            </a-col>

            <a-col :span="10">
              <h2 class="title">Kembangkan Bisnis Umrah Anda</h2>
              <a-button class="btn-join--us d-none" size="large">Gabung Sekarang</a-button>

              <a-comment class="ant-comment--accounts">
                <template slot="actions">
                  <a-tag>
                    <a-icon type="gold" />
                    <span>101</span> POIN
                  </a-tag>
                  <a-tag>
                    <a-icon type="wallet" />Rp
                    <span>69.000.000</span>
                  </a-tag>
                </template>
                <a slot="author">Awaluddin Muhammad Arifatullah</a>
                <a-avatar src="/user/maha_user.jpg" alt="haloatta" slot="avatar" />
                <p slot="content">Jl Kebahagiaan Utara - BTP Blok A, No 537</p>
              </a-comment>
            </a-col>
          </a-row>
        </div>
      </div>
    </div>

    <div class="content-favorites">
      <sectionFavorite />
    </div>

    <div class="content-components-umrah">
      <sectionComponentsUmrah />
    </div>

    <div class="content-banner-full">
      <a-card class="cover-banner">
        <img alt="haloatta" src="/umrah/cover/cu17.png" slot="cover" />
        <div class="container h-100">
          <a-row :gutter="16" type="flex" justify="start" align="middle" class="h-100">
            <a-col :span="12">
              <a-card-meta
                title="Pelajari berapa yang bisa Anda hasilkan dengan menjual paket umrah Anda"
              >
                <template slot="description">
                  <a-button size="large" class="b-shadow b-radius">
                    <nuxt-link to="/accounts/mitra/create">Buat Paket</nuxt-link>
                  </a-button>
                </template>
              </a-card-meta>
            </a-col>
          </a-row>
        </div>
        <div class="gradient-bottom"></div>
      </a-card>
    </div>

    <div class="content-recomended">
      <sectionRecomended />
    </div>

    <div class="content-trend">
      <sectionTrend />
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

import sectionFavorite from "~/components/contents/home/section-favorite.vue";
import sectionComponentsUmrah from "~/components/contents/home/section-components.vue";
import sectionRecomended from "~/components/contents/home/section-recommended.vue";
import sectionTrend from "~/components/contents/home/section-trend.vue";
import sectionNews from "~/components/contents/home/section-news.vue";
export default {
  name: "homePage",
  head() {
    return {
      title: "Haloatta - Booking Paket Umrah, Tiket, LA dan Visa"
    };
  },
  data() {
    return {
      
    };
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
    sectionComponentsUmrah,
    sectionRecomended,
    sectionTrend,
    sectionNews
  }
};
</script>