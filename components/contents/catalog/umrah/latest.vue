<template>
  <div class="content-favorites mt-24" v-if="latests.length > 0">
    <div class="container">
      <h2 class="md-title">Paket Umrah Terbaru</h2>

      <a-row :gutter="24" class="r-wrap">
        <a-col
          :xs="24"
          :sm="24"
          :md="8"
          :lg="8"
          class="mb-16"
          v-for="latest in latests"
          :key="latest.kode_produk"
        >
          <UmrahLatest
            :loading="loading"
            :package_name="latest.nama"
            :images="latest.gambar_hotel"
            :url="latest.kode_produk"
            :departure="latest.tgl_berangkat"
            :city="latest.nama_kota"
            :vendor_name="latest.nama_vendor"
            :vendor_logo="latest.foto"
            :maskapai_name="latest.nama_maskapai"
            :maskapai_logo="latest.image"
            :rate_hotel="latest.kelas_bintang"
            :program="latest.jumlah_hari"
            :pricing="latest.harga_jual"
          />
        </a-col>
      </a-row>

      <div class="all-package">
        <nuxt-link
          to="/catalog/umrah/all"
          class="fs-18 cr-green d-flex align-items-center"
        >
          Tampilkan semua
          <a-icon class="fs-16 ml-8" type="right" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import UmrahLatest from "@/components/Package/Umrah";
import axios from "axios";
export default {
  components: {
    UmrahLatest
  },

  data() {
    return {
      loading: true,
      latests: []
    };
  },

  created: function() {
    this.getLatests();
  },

  methods: {
    async getLatests() {
      axios.get(process.env.baseUrl + "paket/umroh/all").then(response => {
        this.latests = response.data.data.data.slice(0, 3);
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
