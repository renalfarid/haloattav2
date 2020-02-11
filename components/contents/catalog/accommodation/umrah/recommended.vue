<template>
  <a-row :gutter="24">
    <a-col
      :xs="24"
      :sm="12"
      :md="12"
      :lg="8"
      v-for="(item, index) in lisData"
      :key="index"
      class="mb-16"
    >
      <package-accommodation
        :loading="loading"
        :package_name="item.nama"
        :images_hotel="item.gambar_hotel"
        :url="item.kode_produk"
        :vendor_name="item.nama_vendor"
        :vendor_logo="item.foto"
        :rate_hotel="item.kelas_bintang"
        :program="item.days"
        :pricing="item.harga_quad"
      />
    </a-col>
  </a-row>
</template>
<script>
import PackageAccommodation from "@/components/template/Accommodation";
import axios from "axios";
export default {
  components: { PackageAccommodation },

  data() {
    return {
      loading: true,
      lisData: []
    };
  },

  created: function() {
    this.getdata();
  },

  methods: {
    async getdata() {
      axios.get(process.env.baseUrl + "la/all").then(response => {
        this.lisData = response.data.data.data.slice(0, 3);
        this.loading = false;
      });
    }
  }
};
</script>
