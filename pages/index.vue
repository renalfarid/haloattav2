<template>
  <div>
    <div class="content-head">
      <div class="content-head--cover" :style="{ backgroundImage: 'url(/umrah/cover/cu26.png)' }">
        <div class="content-head--body">
          <div class="gradient-top"></div>
          <a-row :gutter="90" class="w-100" type="flex" justify="space-around" align="middle">
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
                <a-avatar
                  src="https://cdn4.iconfinder.com/data/icons/avatar-vol-1-3/512/4-512.png"
                  alt="haloatta"
                  slot="avatar"
                />
                <p slot="content">Jl Kebahagiaan Utara - BTP Blok A, No 537</p>
              </a-comment>
            </a-col>

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
          </a-row>
        </div>
      </div>
    </div>

    <no-ssr>
      <div class="content-favorites">
        <!-- if before login -->
        <sectionFavorite />
        <!-- if after login -->
        <!-- <section-myumrah /> -->
      </div>

      <div class="content-components-umrah">
        <sectionComponentsUmrah />
      </div>

      <div class="content-banner-full">
        <a-card class="cover-banner">
          <div slot="cover">
            <div class="cover-images" :style="{ backgroundImage: 'url(/umrah/cover/cu17.png)' }">
              <div class="container">
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
            </div>
          </div>
        </a-card>
      </div>

      <!-- package umrah -->
      <div class="content-recomended">
        <div class="container">
          <div class="header-title">
            <a-divider orientation="left" class="ant-divider-title-left">Paket Umrah</a-divider>
            <a-row :gutter="16">
              <a-col :span="16">
                <h6 class="fs-16 fw-400 cr-gray">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio hic in sint reiciendis libero necessitatibus quos cumque ipsum ratione
                </h6>
              </a-col>
            </a-row>
          </div>

          <umrah-recommended />

          <div class="all-package">
            <nuxt-link to="" class="fs-18 cr-green d-flex align-items-center">Tampilkan semua <a-icon class="fs-16 ml-8" type="right" /></nuxt-link>
          </div>
        </div>
      </div>

      <!-- package ticket -->
      <div class="content-recomended">
        <div class="container">
          <div class="header-title">
            <a-divider orientation="left" class="ant-divider-title-left">Tiket Group</a-divider>
            <a-row :gutter="16">
              <a-col :span="16">
                <h6 class="fs-16 fw-400 cr-gray">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio hic in sint reiciendis libero necessitatibus quos cumque ipsum ratione
                </h6>
              </a-col>
            </a-row>
          </div>

          <ticket-recommended />

          <div class="all-package">
            <nuxt-link to="" class="fs-18 cr-green d-flex align-items-center">Tampilkan semua <a-icon class="fs-16 ml-8" type="right" /></nuxt-link>
          </div>
        </div>
      </div>

      <!-- package accommodation -->
      <div class="content-recomended">
        <div class="container">
          <div class="header-title">
            <a-divider orientation="left" class="ant-divider-title-left">LA Akomodasi</a-divider>
            <a-row :gutter="16">
              <a-col :span="16">
                <h6 class="fs-16 fw-400 cr-gray">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio hic in sint reiciendis libero necessitatibus quos cumque ipsum ratione
                </h6>
              </a-col>
            </a-row>
          </div>

          <accommodation-recommended />

          <div class="all-package">
            <nuxt-link to="" class="fs-18 cr-green d-flex align-items-center">Tampilkan semua <a-icon class="fs-16 ml-8" type="right" /></nuxt-link>
          </div>
        </div>
      </div>

      <!-- package visa -->
      <div class="content-recomended">
        <div class="container">
          <div class="header-title">
            <a-divider orientation="left" class="ant-divider-title-left">Visa Perjalanan</a-divider>
            <a-row :gutter="16">
              <a-col :span="16">
                <h6 class="fs-16 fw-400 cr-gray">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio hic in sint reiciendis libero necessitatibus quos cumque ipsum ratione
                </h6>
              </a-col>
            </a-row>
          </div>

          <visa-recommended />

          <div class="all-package">
            <nuxt-link to="" class="fs-18 cr-green d-flex align-items-center">Tampilkan semua <a-icon class="fs-16 ml-8" type="right" /></nuxt-link>
          </div>
        </div>
      </div>

      <!-- package insurance -->
      <div class="content-recomended">
        <div class="container">
          <div class="header-title">
            <a-divider orientation="left" class="ant-divider-title-left">Asuransi Perjalanan</a-divider>
            <a-row :gutter="16">
              <a-col :span="16">
                <h6 class="fs-16 fw-400 cr-gray">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio hic in sint reiciendis libero necessitatibus quos cumque ipsum ratione
                </h6>
              </a-col>
            </a-row>
          </div>

          <insurance-recommended />

          <div class="all-package">
            <nuxt-link to="" class="fs-18 cr-green d-flex align-items-center">Tampilkan semua <a-icon class="fs-16 ml-8" type="right" /></nuxt-link>
          </div>
        </div>
      </div>

      <div class="content-news">
        <sectionNews />
      </div>
    </no-ssr>
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
import ticketRecommended from "~/components/contents/catalog/ticket/recommended.vue";
import accommodationRecommended from "~/components/contents/catalog/accommodation/recommended.vue";
import visaRecommended from "~/components/contents/catalog/visa/recommended.vue";
import insuranceRecommended from "~/components/contents/catalog/insurance/recommended.vue";

import sectionNews from "~/components/contents/home/section-news.vue";
export default {
  name: "homePage",
  head() {
    return {
      title: "Haloatta - Booking Paket Umrah, Tiket, LA dan Visa"
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
    // sectionMyumrah,
    sectionComponentsUmrah,
    umrahRecommended,
    ticketRecommended,
    accommodationRecommended,
    visaRecommended,
    insuranceRecommended,
    sectionNews
  }
};
</script>