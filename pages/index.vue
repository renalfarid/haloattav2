<template>
  <div>
    <div class="content-head">
      <div class="content-head--cover" :style="{ backgroundImage: `url(${coverUrl})` }">
        <div class="content-head--body">
          <div class="gradient-top"></div>
          <a-row :gutter="90" class="w-100" type="flex" justify="space-around" align="middle">
            <a-col :span="14">
              <searchMain/>
            </a-col>
            <a-col :span="10">
              <h2 class="title">Kembangkan Bisnis Umrah Anda</h2>
              <a-button class="btn-join--us d-none" size="large">Gabung Sekarang</a-button>
              
              <a-comment class="ant-comment--accounts">
                <template slot="actions">
                  <a-tag><a-icon type="gold" /> <span>101</span> POIN</a-tag>
                  <a-tag><a-icon type="wallet" /> Rp <span>69.000.000</span></a-tag>
                </template>
                <a slot="author">Awaluddin Muhammad Arifatullah</a>
                <a-avatar
                  src="/user/maha_user.jpg"
                  alt="haloatta"
                  slot="avatar"
                />
                <p slot="content">Jl Kebahagiaan Utara - BTP Blok A, No 537</p>
              </a-comment>
            </a-col>
          </a-row>
        </div>
      </div>
    </div>

    <div class="content-favorites">
      <sectionFavorite/>
    </div>

    <div class="content-components-umrah">
      <sectionComponentsUmrah/>
    </div>

    <div class="content-banner-full">
      <a-card class="cover-banner">
        <img alt="haloatta" src="~/static/cover/cover-create.png" slot="cover">
        <div class="container h-100">
          <a-row :gutter="16" type="flex" justify="start" align="middle" class="h-100">
            <a-col :span="12">
              <a-card-meta
                title="Pelajari berapa yang bisa Anda hasilkan dengan menjual paket umrah Anda"
              >
                <template slot="description">
                  <a-button size="large" class="b-shadow b-radius"><nuxt-link to="/accounts/mitra/create">Buat Paket</nuxt-link></a-button>
                </template>
              </a-card-meta>
            </a-col>
          </a-row>
        </div>
        <div class="gradient-bottom"></div>
      </a-card>
    </div>

    <div class="content-recomended">
      <sectionRecomended/>
    </div>

    <div class="content-trend">
      <sectionTrend/>
    </div>

    <div class="content-news">
      <sectionNews/>
    </div>
  </div>
</template>

<script>
import coverUrl from "~/static/cover/C1.png";
import searchMain from "~/components/contents/lib/search/search-main.vue";
import sectionFavorite from "~/components/contents/home/section-favorite.vue";
import sectionComponentsUmrah from "~/components/contents/home/section-components.vue";
import sectionRecomended from "~/components/contents/home/section-recomended.vue";
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
      coverUrl
    };
  },
  components: {
    searchMain,
    sectionFavorite,
    sectionComponentsUmrah,
    sectionRecomended,
    sectionTrend,
    sectionNews
  }
};
</script>