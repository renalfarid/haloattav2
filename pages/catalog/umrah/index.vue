<template>
  <div>
    <div class="content-head content-head--umrah">
      <div
        class="content-head--cover"
        v-lazy:background-image="require('~/static/umrah/cover/cu22.png')"
      >
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
                paket umrah untuk anda
              </h1>
              <a-card :bordered="false" class="b-shadow b-radius b-opacity">
                <search-umrah />
              </a-card>
            </a-col>
          </a-row>
        </div>
      </div>
    </div>

    <div class="content-about--umrah pt-40 pb-40">
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
export default {
  name: "umrah",

  components: {
    searchUmrah,
    Recommended
  },

  head() {
    return {
      title: "Pesan Paket Umrah - Best Travel Agen | Haloatta"
    };
  }
};
</script>
