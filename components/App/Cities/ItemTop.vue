<template>
  <div class="container" :style="{ 'padding-top': '80px' }">
    <div class="md-cities--package md-cities--top">
      <a-row :gutter="24" class="f-wrap">
        <a-col :xs="24" :sm="24" :md="24" :lg="10">
          <CitiesBanner :images="coverCities" name="Makassar" />
        </a-col>

        <a-col :xs="24" :sm="24" :md="24" :lg="14">
          <a-row :gutter="24" class="r-wrap">
            <a-col
              :xs="24"
              :sm="24"
              :md="12"
              :lg="12"
              class="mb-8"
              v-for="city in cities"
              :key="city.kode_produk"
            >
              <CitiesUmrah
                :packagelarge="packagelarge"
                :loading="loading"
                :package_name="city.nama"
                :images="city.gambar_hotel"
                :url="city.kode_produk"
                :departure="city.tgl_berangkat"
                :city="city.nama_kota"
                :vendor_name="city.nama_vendor"
                :vendor_logo="city.foto"
                :maskapai_name="city.nama_maskapai"
                :maskapai_logo="city.image"
                :rate_hotel="city.kelas_bintang"
                :program="city.jumlah_hari"
                :pricing="city.harga_jual"
              />
            </a-col>
          </a-row>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import CitiesUmrah from "@/components/Package/Umrah";
import CitiesBanner from "./Banner";
const coverCities = require("~/static/umrah/cover/cu3.jpg");
import axios from "axios";
export default {
  components: {
    CitiesUmrah,
    CitiesBanner
  },

  data() {
    return {
      packagelarge: false,
      coverCities,
      loading: true,
      cities: []
    };
  },

  created: function() {
    this.getCities();
  },

  methods: {
    async getCities() {
      axios
        .get(process.env.baseUrl + "paket/umroh/recomended")
        .then(response => {
          this.cities = response.data.data.data.slice(0, 4);
          this.loading = false;
        });
    }
  },

  filters: {
    formatDate: function(value) {
      const date = new Date(value);

      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "Mei",
        "Jun",
        "Jul",
        "Agu",
        "Sep",
        "Okt",
        "Nov",
        "Des"
      ];
      const days = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"];

      const dayName = days[date.getDay()];
      const dayOfMonth = date.getDate();
      const month = months[date.getMonth()];
      const year = date.getFullYear();

      return `${dayName}, ${dayOfMonth} ${month} ${year}`;
    }
  }
};
</script>
