<template>
  <div class="container" :style="{ 'padding-top': '80px' }" v-if="cities.length > 0">
    <div class="md-cities--package">
      <a-row :gutter="24">
        <a-col :xs="24" :sm="24" :md="24" :lg="10" class="p-sm-none pb-24" :style="{ 'float':'right' }">
          <a-card class="md-cities--banner-middle" :bordered="false">
            <div class="md-cities--body">
              <h2>Jakarta</h2>
              <p>
                Mesjid Ramlie Musofa sekitar satu tahun terakhir, ada destinasi
                wisata baru di daerah danau sunter
              </p>

              <nuxt-link to="/">
                <a-button size="large">Jelajahi Paket Umrah</a-button>
              </nuxt-link>
            </div>

            <div
              class="md-cities--cover"
              v-lazy:background-image="coverCities"
            ></div>
          </a-card>
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
const coverCities = require("~/static/umrah/cover/cu4.jpg");
import axios from "axios";
export default {
  components: {
    CitiesUmrah
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

<style lang="scss">
.md-cities--banner-middle {
  overflow: hidden;
  border-radius: 0;
  height: 100%;

  & .ant-card-body {
    height: 100%;
    padding: 0;

    & .md-cities--cover {
      background-position: top center;
      background-repeat: no-repeat;
      background-size: cover;
      min-height: 472px;
      position: relative;
      height: 100%;
      width: 100%;

      &::before {
        background-color: rgba($color: #6ed6ce, $alpha: 0.25);
        position: absolute;
        content: "";
        bottom: 0;
        right: 0;
        left: 0;
        top: 0;
      }
    }

    & .md-cities--body {
      background-color: #6ed6ce;
      position: relative;
      padding: 40px;
      z-index: 2;

      & h2 {
        text-transform: uppercase;
        font-weight: 500;
        font-size: 32px;
        letter-spacing: 0.5px;
        color: rgba($color: #000000, $alpha: 0.8);
        margin-bottom: 0;
      }
      & p {
        font-size: 16px;
        font-weight: 400px;
        line-height: 20px;
        letter-spacing: 0.5px;
        color: rgba($color: #000000, $alpha: 0.6);
        margin-bottom: 40px;
      }
      & .ant-btn {
        border-radius: 8px;
        border: 1px solid rgba($color: #000000, $alpha: 0.6);
        color: rgba($color: #000000, $alpha: 0.6);
        transition: all 0.2s ease-in-out;
        background: transparent;
        letter-spacing: 0.5px;
        font-weight: 500;
        font-size: 16px;
        padding: 0 32px;
        height: 48px;
        &:hover {
          border: 1px solid rgba($color: #000000, $alpha: 1);
          color: rgba($color: #000000, $alpha: 1);
        }
      }
    }
  }
}

@media (max-width: 992px) {
  .md-cities--banner-middle {
    & .ant-card-body {
      & .md-cities--cover {
        display: none;
      }
    }
  }
}
</style>
