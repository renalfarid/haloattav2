<template>
  <client-only>
    <div class="container">
      <div>
        <div class="header-title">
          <a-divider orientation="left" class="ant-divider-title-left"
            >Paket Umrah Terbaru</a-divider
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
              :vendor_logo="item.foto_vendor"
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
    </div>
  </client-only>
</template>
<script>
import PackageUmrah from "@/components/template/Umrah";
import axios from "axios";
export default {
  components: { PackageUmrah },
  
  data() {
    return {
      lisData: [],
      ItemSlider: {
        prevNextButtons: false,
        pageDots: true
      }
    };
  },

  created() {
    this.getdata();
  },

  methods: {
    async getdata() {
      axios
        .get(process.env.baseUrl + "paket/umroh/recomended")
        .then(response => {
          this.lisData = response.data.data.data.slice(0, 3);
          this.loading = false;
        });
    }
  }
};
</script>
