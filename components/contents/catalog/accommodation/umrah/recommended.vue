<template>
  <a-row :gutter="24">
    <a-col
      :xs="24"
      :sm="12"
      :md="12"
      :lg="8"
      v-for="recommendation in recommendations"
      :key="recommendation.kode_produk"
      class="mb-16"
    >
      <PackageAccommodation
        :loading="loading"
        :package_name="recommendation.nama"
        :images="recommendation.gambar_hotel"
        :url="recommendation.kode_produk"
        :vendor_name="recommendation.nama_vendor"
        :vendor_logo="recommendation.foto"
        :rate_hotel="recommendation.kelas_bintang"
        :program="recommendation.days"
        :pricing="recommendation.harga_quad"
      />
    </a-col>
  </a-row>
</template>
<script>
import PackageAccommodation from "@/components/Package/Accommodation";
import axios from "axios";
export default {
  components: { PackageAccommodation },

  data() {
    return {
      loading: true,
      recommendations: []
    };
  },

  created: function() {
    this.getdata();
  },

  methods: {
    async getdata() {
      axios.get(process.env.baseUrl + "la/all").then(response => {
        this.recommendations = response.data.data.data.slice(0, 3);
        this.loading = false;
      });
    }
  }
};
</script>
