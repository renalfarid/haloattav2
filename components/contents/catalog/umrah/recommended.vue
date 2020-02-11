<template>
  <div class="content-recomended mt-32 pb-0" v-if="recommendations.length > 0">
    <div class="container">
      <h2 class="md-title">
        Rekomendasi Haloatta
      </h2>

      <a-row :gutter="24" class="r-wrap">
        <a-col
          :xs="24"
          :sm="24"
          :md="8"
          :lg="8"
          class="mb-16"
          v-for="recommendation in recommendations"
          :key="recommendation.kode_produk"
        >
          <UmrahRecommendation
            :packagelarge="packagelarge"
            :loading="loading"
            :package_name="recommendation.nama"
            :images="recommendation.gambar_hotel"
            :url="recommendation.kode_produk"
            :departure="recommendation.tgl_berangkat"
            :city="recommendation.nama_kota"
            :vendor_name="recommendation.nama_vendor"
            :vendor_logo="recommendation.foto"
            :maskapai_name="recommendation.nama_maskapai"
            :maskapai_logo="recommendation.image"
            :rate_hotel="recommendation.kelas_bintang"
            :program="recommendation.jumlah_hari"
            :pricing="recommendation.harga_jual"
          />
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import UmrahRecommendation from "@/components/Package/Umrah";
import axios from "axios";
export default {
  components: {
    UmrahRecommendation
  },

  data() {
    return {
      packagelarge: true,
      loading: true,
      recommendations: []
    };
  },

  created: function() {
    this.getRecommendations();
  },

  methods: {
    async getRecommendations() {
      axios
        .get(process.env.baseUrl + "paket/umroh/recomended")
        .then(response => {
          this.recommendations = response.data.data.data.slice(0, 3);
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
