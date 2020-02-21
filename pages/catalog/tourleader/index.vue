<template>
  <div>
    <div class="content-head content-head--app">
      <div
        class="content-head--cover" v-lazy:background-image="require('~/static/tourleader/cover/ct1.png')"
      >
        <div class="content-head--body container">
          <div class="gradient-top"></div>
        </div>
      </div>
    </div>

    <div class="md-fitur--search">
      <div class="container">
        <a-card class="b-solid b-shadow b-radius">
          <h1 class="fs-30 cr-black mb-32" :style="{ 'line-height': 'normal' }">
            Beragam pilihan tour leader perjalanan <br />
            untuk anda!
          </h1>

          <search-tourleader />
        </a-card>
      </div>
    </div>

    <div class="content-about--tourleader" :style="{'padding':'124px 0'}">
      <div class="container">
        <a-row :gutter="24" type="flex" justify="space-between" align="middle">
          <a-col :xs="24" :sm="24" :md="12" class="mb-24">
            <h2 class="text-uppercase cr-black">Tour Leader Haloatta</h2>
            <p class="fs-16 cr-black-opacity">
              It’s an audacious, incredibly rewarding mission that our
              increasingly diverse team is dedicated to achieving.
            </p>
            <p class="fs-16 cr-black-opacity">
              Haloatta is built around the idea that everyone should be able to take the perfect trip,
              including where they stay, what they do, and who they meet.
              To that end, we empower millions of people around the world to use their spaces, passions, and talents to become entrepreneurs.
            </p>
          </a-col>
          <a-col :xs="24" :sm="24" :md="12" class="mb-24">
            <img
              class="mx-width d-block m-auto"
              style="maxHeight: 320px"
              v-lazy="require('~/static/illu/about.svg')"
            />
          </a-col>
        </a-row>
      </div>
    </div>

    <div class="content-recommended--tourleader pb-40">
      <div class="container">
        <a-divider orientation="left" class="ant-divider-title-left">Rekomendasi untuk kamu</a-divider>
        <Recommended />
      </div>
    </div>
  </div>
</template>
<script>
import searchTourleader from "@/components/contents/lib/search/tourleader.vue";
import Recommended from "@/components/contents/catalog/tourleader/recommended.vue";
export default {
  name: "tourleader",
  head() {
    return {
      title: "Pesan Tour Leader Pilihan - Best Travel Agen | Haloatta"
    };
  },
  
  components: {
    searchTourleader,
    Recommended
  }
};
</script>
