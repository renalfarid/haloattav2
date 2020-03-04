<template>
  <div>
    <div class="content-head content-head--app">
      <div
        class="content-head--cover"
        v-lazy:background-image="require('~/static/umrah/cover/cu22.png')"
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
            Beragam pilihan paket umrah
            untuk anda!
          </h1>

          <search-umrah />
        </a-card>
      </div>
    </div>

    <div class="content-about--umrah" :style="{'padding':'124px 0'}">
      <div class="container">
        <a-row :gutter="24" type="flex" justify="space-between" align="middle">
          <a-col :xs="24" :sm="24" :md="12" class="mb-24">
            <h2 class="text-uppercase cr-black">Umrah Haloatta</h2>

            <p class="fs-16 cr-black-opacity">
              Haloatta memberikan kesempatan semua orang mewujudkan impian
              beribadah umroh menjadi kenyataan.
            </p>
            <p class="fs-16 cr-black-opacity">
              Individu, kelompok, pengusaha kami kumpulkan dalam satu tempat
              untuk melakukan berbagai macam transaksi ekonomi yaitu jual beli
              sehingga atta mampu memberikan nilai tambah dan nilai ekonomi bagi
              penggunanya.
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

    <div class="content-recommended--umrah pb-40">
      <Recommended />
    </div>
  </div>
</template>
<script>
import searchUmrah from "@/components/contents/lib/search/umrah.vue";
import Recommended from "@/components/contents/catalog/umrah/recommended.vue";
import Meta from "@/assets/mixins/meta";

export default {
  mixins: [Meta],

  components: {
    searchUmrah,
    Recommended
  },

  data() {
    return {
      meta: {
        title: "Paket Umrah - Haloatta",
        url: "https://www.haloatta.com/catalog/umrah"
      }
    }
  }
};
</script>
