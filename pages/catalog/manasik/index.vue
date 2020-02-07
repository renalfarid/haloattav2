<template>
  <div>
    <div class="content-head content-head--manasik">
      <div class="content-head--cover" v-lazy:background-image="require('~/static/manasik/cover/mc1.png')">
        <div class="content-head--body container">
          <div class="gradient-top"></div>
          <a-row
            :gutter="24"
            type="flex"
            justify="space-between"
            align="middle"
            class="h-100"
          >
            <a-col :xs="24" :sm="24" :md="24" :lg="24">
              <h1 class="fs-40 cr-white" :style="{ 'line-height': 'normal' }">
                Beragam pilihan <br />
                Tempat Manasik untuk anda
              </h1>
              <a-card :bordered="false" class="b-shadow b-radius b-opacity">
                <search-manasik />
              </a-card>
            </a-col>
          </a-row>
        </div>
      </div>
    </div>

    <div class="content-about--manasik" :style="{'padding':'124px 0'}">
      <div class="container">
        <a-row :gutter="24" type="flex" justify="space-between" align="middle">
          <a-col :xs="24" :sm="24" :md="12" class="mb-24">
            <h2 class="text-uppercase cr-black">Manasik Haloatta</h2>
            <p class="fs-16 cr-black-opacity">
              It’s an audacious, incredibly rewarding mission that our
              increasingly diverse team is dedicated to achieving.
            </p>
            <p class="fs-16 cr-black-opacity">
              Haloatta is built around the idea that everyone should be able to take the perfect trip,
              including where they stay, what they do, and who they meet.
              To that end, we empower millions of people around the world to use their spaces, passions, and talents to become entrepreneurs.
            </p>
            <p class="fs-16 cr-black-opacity">
              Exciting challenges lie ahead—new regions, technologies, and businesses.
              Guided by our four core values, we’ll meet these challenges creatively
              and with the support of our global community. Join us!
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
    
    <div class="content-recommended--manasik pb-40">
      <div class="container">
        <a-divider orientation="left" class="ant-divider-title-left">Rekomendasi untuk kamu</a-divider>
        <Recommended />
      </div>
    </div>
  </div>
</template>
<script>
import searchManasik from "@/components/contents/lib/search/manasik.vue";
import Recommended from "@/components/contents/catalog/manasik/recommended.vue";
export default {
  name: "manasik",
  
  head() {
    return {
      title: "Pesan Manasik Pemantapan - Best Travel Agen | Haloatta"
    };
  },
  
  components: {
    searchManasik,
    Recommended
  }
};
</script>
