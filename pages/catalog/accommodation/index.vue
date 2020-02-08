<template>
  <div>
    <div class="content-head content-head--accommodation">
      <div
        class="content-head--cover"
        v-lazy:background-image="require('~/static/akomodasi/cover/lc1.png')"
      >
        <div class="content-head--body container">
          <div class="gradient-top"></div>
          <a-row :gutter="24" type="flex" justify="space-between" align="middle" class="h-100">
            <a-col :xs="24" :sm="24" :md="24" :lg="24">
              <h1 class="fs-40 cr-white" :style="{ 'line-height': 'normal' }">
                Beragam pilihan
                <br />LA Akomodasi untuk anda
              </h1>
              <a-card :bordered="false" class="b-shadow b-radius b-opacity">
                <search-accommodation />
              </a-card>
            </a-col>
          </a-row>
        </div>
      </div>
    </div>

    <div class="content-about--accommodation" :style="{ padding: '124px 0' }">
      <div class="container">
        <a-row :gutter="24" type="flex" justify="space-between" align="middle">
          <a-col :xs="24" :sm="24" :md="12" class="mb-24">
            <h2 class="text-uppercase cr-black">LA Akomodasi Haloatta</h2>
            <p class="fs-16 cr-black-opacity">
              Mempermudah semua orang menjelajahi wisata halal dunia Teknologi
              yang memberikan pengalaman yang sangat berkesan dan beragam tempat
              menginap yang luar biasa.
            </p>
            <p class="fs-16 cr-black-opacity">
              Membantu jamaah mendapatkan akomodasi diseluruh dunia dan jalan
              untuk mengembangkan bisnis anda.
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

    <div class="content-recommended--accommodation pb-40">
      <div class="container">
        <a-divider orientation="left" class="ant-divider-title-left">Rekomendasi untuk kamu</a-divider>
        <Recommended />
      </div>
    </div>
  </div>
</template>

<script>
import searchAccommodation from "@/components/contents/lib/search/accommodation.vue";
import Recommended from "@/components/contents/catalog/accommodation/umrah/recommended.vue";
export default {
  name: "accommodation",

  components: {
    searchAccommodation,
    Recommended
  },

  head() {
    return {
      title: "Pesan LA Akomodasi - Best Travel Agen | Haloatta"
    };
  }
};
</script>
