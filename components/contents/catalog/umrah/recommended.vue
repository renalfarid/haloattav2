<template>
  <div class="content-recomended" v-if="lisData.length > 0">
    <client-only>
      <div class="container">
        <div class="header-title">
          <a-divider orientation="left" class="ant-divider-title-left"
            >Rekomendasi Haloatta</a-divider
          >
        </div>

        <a-row :gutter="24" class="r-wrap">
          <a-col
            :xs="24"
            :sm="12"
            :md="12"
            :lg="8"
            class="mb-16"
            v-for="(item, index) in lisData"
            :key="index"
          >
            <package-umrah
              :loading="loading"
              :package_name="item.nama"
              :images="item.gambar"
              :url="item.kode_produk"
              :departure="item.tgl_berangkat"
              :city="item.nama_kota"
              :vendor_name="item.nama_vendor"
              :vendor_logo="item.foto"
              :maskapai_name="item.nama_maskapai"
              :maskapai_logo="item.image"
              :rate_hotel="item.kelas_bintang"
              :program="item.jumlah_hari"
              :pricing="item.harga_jual"
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
    </client-only>
  </div>
</template>
<script>
import PackageUmrah from "@/components/template/Umrah";
import axios from "axios";
export default {
  components: { PackageUmrah },
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
      axios
        .get("https://api.haloatta.com/api/paket/umroh/all")
        .then(response => {
          this.lisData = response.data.data.data.slice(3, 8);
          this.loading = false;
        });
    }
  }
};
</script>
