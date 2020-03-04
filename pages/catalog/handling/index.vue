<template>
  <div>
    <div class="content-head content-head--app">
      <div
        class="content-head--cover"
        v-lazy:background-image="require('~/static/handling/cover/ch1.png')"
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
            Beragam pilihan handling domestik <br />
            untuk anda!
          </h1>

          <search-handling />
        </a-card>
      </div>
    </div>

    <div class="content-about--handling" :style="{'padding':'124px 0'}">
      <div class="container">
        <a-row :gutter="24" type="flex" justify="space-between" align="middle">
          <a-col :xs="24" :sm="24" :md="12" class="mb-24">
            <h2 class="text-uppercase cr-black">Handling Domestik Haloatta</h2>
            <p class="fs-16 cr-black-opacity">
              It’s an audacious, incredibly rewarding mission that our
              increasingly diverse team is dedicated to achieving.
            </p>
            <p class="fs-16 cr-black-opacity">
              Haloatta is built around the idea that everyone should be able to
              take the perfect trip, including where they stay, what they do,
              and who they meet. To that end, we empower millions of people
              around the world to use their spaces, passions, and talents to
              become entrepreneurs.
            </p>
            <p class="fs-16 cr-black-opacity">
              Exciting challenges lie ahead—new regions, technologies, and
              businesses. Guided by our four core values, we’ll meet these
              challenges creatively and with the support of our global
              community. Join us!
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

    <div class="content-recommended--insurance pb-40">
      <div class="container">
        <a-divider orientation="left" class="ant-divider-title-left"
          >Rekomendasi untuk kamu</a-divider
        >
        <Recommended />
      </div>
    </div>
  </div>
</template>
<script>
import searchHandling from "@/components/contents/lib/search/handling.vue";
import Recommended from "@/components/contents/catalog/handling/recommended.vue";
export default {
  name: "handling",

  head() {
    return {
      title: "Pesan Handling Domestik - Best Travel Agen | Haloatta"
    };
  },
  
  components: {
    searchHandling,
    Recommended
  }
};
</script>
