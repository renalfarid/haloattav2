<template>
  <div data="city package">
    <div :class="$style.banner">
      <div :class="$style.cover">
        <div
          :class="$style.img"
          v-lazy:background-image="require('~/static/umrah/cover/cu36.jpg')"
        ></div>
      </div>
      <h1 :class="$style.title">Makassar</h1>
    </div>

    <div
      class="container"
      v-infinite-scroll="results"
      :infinite-scroll-disabled="busy"
      :infinite-scroll-distance="limit"
    >
      <a-row :gutter="24" class="r-wrap">
        <a-col
          class="mb-16"
          data-aos="fade-up"
          data-aos-duration="1200"
          v-for="result in results"
          :key="result.kode_produk"
          :xs="24"
          :sm="12"
          :md="12"
          :lg="8"
        >
          <UmrahAll
            :packagelarge="packagelarge"
            :loading="loading"
            :package_name="result.nama"
            :images="result.gambar_hotel"
            :url="result.kode_produk"
            :departure="result.tgl_berangkat"
            :city="result.nama_kota"
            :vendor_name="result.nama_vendor"
            :vendor_logo="result.foto"
            :maskapai_name="result.nama_maskapai"
            :maskapai_logo="result.image"
            :rate_hotel="result.kelas_bintang"
            :program="result.jumlah_hari"
            :pricing="result.harga_jual"
          />
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import UmrahAll from "@/components/Package/Umrah";
import Meta from "@/assets/mixins/meta";
import axios from "axios";
export default {
  mixins: [Meta],

  components: { UmrahAll },

  data: () => ({
    packagelarge: true,
    loading: true,
    busy: true,
    limit: 3,
    page: 0,
    results: "",
    meta: {
      title: "Paket Umrah Dikota Anda - Haloatta",
      url: "https://www.haloatta.com/catalog/umrah/kota",
    },
  }),

  async asyncData({ query, store }) {
    let data = [];
    data["kota_asal"] = query.kota_asal == "all" ? "" : query.kota_asal;
    data["bulan_keberangkatan"] =
      query.bulan_keberangkatan == "all" ? "" : query.bulan_keberangkatan;
    data["program"] = query.program == "all" ? "" : query.program;
    data["hotel_bintang"] =
      query.hotel_bintang == "all" ? "" : query.hotel_bintang;

    const myRespone = await axios.get(process.env.baseUrl + "paket/umroh/all", {
      params: {
        kota_asal: data["kota_asal"],
        bulan_keberangkatan: data["bulan_keberangkatan"],
        program_hari: data["program"],
        hotel_bintang: data["hotel_bintang"],
      },
    });

    const myResponeOption = await axios.get(
      process.env.baseUrl + "option/umrah"
    );

    data["result"] = myRespone.data.data.data;
    return {
      loading: false,
      busy: false,
      results: myRespone.data.data.data,
      option: myResponeOption.data.data,
    };
  },
};
</script>

<style module lang="scss">
.banner {
  position: relative;
  & .cover {
    position: absolute;
    z-index: -2;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;

    & .img {
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      height: 100%;
      width: 100%;
      &::before {
        background: rgba($color: #000000, $alpha: 0.4);
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        top: 0;
      }
    }
  }

  & .title {
    text-align: center;
    padding-top: 160px;
    padding-bottom: 80px;
    position: relative;
    font-size: 56px;
    font-weight: bold;
    color: #fff;
  }
}
</style>
