<template>
  <div class="ant-layout--results">
    <div class="ant-layout--results-space"></div>
    <div class="container">
      <div class="ant-layout--results-body">
        <div class="ant-layout--results-top mb-24">
          <search-result-accommodation />

          <filter-result-accommodation />
        </div>

        <div class="ant-layout--results-list pb-16">
          <div class="ant-layout--results-list-label fw-400">
            Hasil Pencarian LA Akomodasi
          </div>

          <div
            v-infinite-scroll="loadMore"
            :infinite-scroll-disabled="busy"
            :infinite-scroll-distance="limit"
          >
            <a-row :gutter="24" class="f-wrap">
              <a-col
                class="mb-16"
                data-aos="fade-up"
                data-aos-duration="1200"
                v-for="(item, index) in data"
                :key="index"
                :xs="24"
                :sm="12"
                :md="12"
                :lg="8"
              >
                <PackageAccommodation
                  :loading="loading"
                  :package_name="item.nama"
                  :images="item.gambar_hotel"
                  :url="item.kode_produk"
                  :vendor_name="item.nama_vendor"
                  :vendor_logo="item.foto"
                  :rate_hotel="item.kelas_bintang"
                  :program="item.days"
                  :pricing="item.harga_quad"
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
import searchResultAccommodation from "@/components/contents/lib/search/result/accommodation.vue";
import filterResultAccommodation from "@/components/contents/lib/filter/result/accommodation.vue";
import PackageAccommodation from "@/components/Package/Accommodation";
import Meta from "@/assets/mixins/meta";
import axios from "axios";
import moment from "moment";

export default {
  mixins: [Meta],

  components: {
    searchResultAccommodation,
    filterResultAccommodation,
    PackageAccommodation
  },

  data() {
    return {
      loading: true,
      busy: false,
      limit: 8,
      data: [],
      meta: {
        title: "Hasil Pencarian Paket Akomodasi - Haloatta",
        url: "https://www.haloatta.com/catalog/accommodation/result"
      }
    };
  },

  created() {
    this.loadMore();
  },

  methods: {
    moment,
    loadMore() {
      this.busy = true;
      // let params = this.$route.query;

      axios
        .get(process.env.baseUrl + "la/all", {
          params: {
            page: "2",
            per_page: "8"
          }
        })
        .then(response => {
          const append = response.data.data.data.slice(
            this.data.length,
            this.data.length + this.limit
          );

          this.data = this.data.concat(append);
          this.loading = false;
          this.busy = false;
        });
    }
  }
};
</script>
