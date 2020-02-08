<template>
  <div class="ant-layout--results">
    <div class="ant-layout--results-space"></div>
    <div class="container">
      <div class="ant-layout--results-body">
        <div class="ant-layout--results-top" :style="{ marginBottom: '20px' }">
          <search-result-umrah />

          <filter-result-umrah
            :maskapai="option.maskapai"
            :bintang="option.bintang"
            :vendor="option.vendor"
          />
        </div>

        <div class="ant-layout--results-list pb-16">
          <div class="ant-layout--results-list-label fw-400">Hasil Pencarian Paket Umrah</div>
          <div
            v-infinite-scroll="results"
            :infinite-scroll-disabled="busy"
            :infinite-scroll-distance="limit"
          >
            <a-row :gutter="24" class="r-wrap">
              <a-col
                :xs="24"
                :sm="12"
                :md="12"
                :lg="8"
                v-for="(item, index) in results"
                :key="index"
                data-aos="fade-up"
                data-aos-duration="1200"
                class="mb-16"
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import searchResultUmrah from "@/components/contents/lib/search/result/umrah.vue";
import filterResultUmrah from "@/components/contents/lib/filter/result/umrah.vue";
import PackageUmrah from "@/components/template/Umrah";
import axios from "axios";
export default {
  name: "umrahResults",

  components: {
    searchResultUmrah,
    filterResultUmrah,
    PackageUmrah
  },

  head() {
    return {
      title:
        "Hasil Pencarian Paket Umrah - Booking Paket Umrah & Komponen Umrah Lainnya"
    };
  },

  data() {
    return {
      loading: true,
      busy: false,
      limit: 6,
      data: [],
      results: ""
    };
  },

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
        hotel_bintang: data["hotel_bintang"]
      }
    });

    data["result"] = myRespone.data.data.data;
    return {
      loading: false,
      busy: false,
      results: myRespone.data.data.data
    };
  },
  created() {
    this.getOption();
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
    },

    formatMonth: function(value) {
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

      return `${month} ${year}`;
    }
  }
};
</script>
