<template>
  <div class="ant-layout--results">
    <div class="ant-layout--results-space"></div>
    <div class="container">
      <div class="ant-layout--results-body">
        <div class="ant-layout--results-top" :style="{ marginBottom: '20px' }">
          <search-result-umrah />

          <filter-result-umrah />
        </div>

        <client-only>
          <div class="ant-layout--results-list pb-16">
            <div class="ant-layout--results-list-label fw-400">
              Hasil Pencarian Paket Umrah
            </div>
            <div
              v-infinite-scroll="results"
              :infinite-scroll-disabled="busy"
              :infinite-scroll-distance="limit"
            >
              <a-row :gutter="24">
                <a-col
                  :xs="24"
                  :sm="12"
                  :md="12"
                  :lg="8"
                  v-for="(item, index) in results"
                  :key="index"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  :style="{ 'margin-bottom': '16px' }"
                >
                  <a-skeleton
                    :loading="loading"
                    v-on:loadingEvent="loadingEvent($event)"
                    active
                  >
                    <a-card class="ant-card-package" hoverable>
                      <template slot="cover">
                        <flickity
                          class="md-flickity__images md-flickity__images-large"
                          ref="flickityImages"
                          :options="ItemSlider"
                        >
                          <div
                            class="item-images"
                            v-lazy:background-image="item.gambar"
                          ></div>

                          <div
                            class="item-images"
                            v-lazy:background-image="item.gambar"
                          ></div>

                          <div
                            class="item-images"
                            v-lazy:background-image="item.gambar"
                          ></div>
                        </flickity>
                      </template>

                      <nuxt-link
                        :to="
                          '/catalog/umrah/detail-package?kode_produk=' +
                            item.kode_produk
                        "
                        class="ant-list-item--link"
                      >
                        <a-card-meta>
                          <template slot="title">
                            <div
                              class="ant-card-meta-title--top d-flex align-items-center"
                            >
                              <div
                                class="ant-card-meta-title--top-left f-default d-flex align-items-center"
                              >
                                <a-popover trigger="hover">
                                  <template slot="content">
                                    <div
                                      class="fs-12 fw-400 cr-gray text-uppercase"
                                    >
                                      Penyedia
                                    </div>
                                    <div
                                      class="fs-14 fw-500 cr-black text-capitalize"
                                    >
                                      {{ item.nama_vendor }}
                                    </div>
                                  </template>
                                  <a-avatar
                                    v-if="item && item.foto_vendor"
                                    class="vendor-logo zIndex mr-8"
                                    size="small"
                                    v-lazy:background-image="item.foto_vendor"
                                  />

                                  <a-avatar
                                    v-else
                                    class="vendor-logo zIndex mr-8"
                                    size="small"
                                    v-lazy:background-image="
                                      'https://cdn4.iconfinder.com/data/icons/avatar-vol-1-3/512/4-512.png'
                                    "
                                  />
                                </a-popover>

                                <a-popover trigger="hover">
                                  <template slot="content">
                                    <div
                                      class="fs-12 fw-400 cr-gray text-uppercase"
                                    >
                                      Maskapai
                                    </div>
                                    <div
                                      class="fs-14 fw-500 cr-black text-capitalize"
                                    >
                                      {{ item.nama_maskapai }}
                                    </div>
                                  </template>
                                  <a-avatar
                                    class="zIndex mr-8"
                                    size="small"
                                    :src="item.image"
                                  />
                                </a-popover>
                              </div>
                              <div
                                class="ant-card-meta-title--top-right ml-auto"
                              >
                                <div class="fs-14 fw-400 cr-black-opacity">
                                  Program {{ item.jumlah_hari }} Hari
                                </div>
                              </div>
                            </div>
                            <div
                              class="ant-card-meta-title--package text-capitalize mt-16 mb-8 fw-500 text-capitalize"
                            >
                              {{ item.nama }}
                            </div>
                          </template>

                          <template slot="description">
                            <span class="fs-14 fw-400 cr-black-opacity"
                              >Kota {{ item.nama_kota }}</span
                            >
                            <span class="dots"></span>
                            <span class="fs-14 fw-400 cr-black-opacity">{{
                              item.tgl_berangkat | formatDate
                            }}</span>
                          </template>
                        </a-card-meta>

                        <div class="md-card--bottom">
                          <div class="md-price">
                            {{ item.harga_jual | currency }}
                          </div>
                          <div>
                            <a-icon
                              type="star"
                              theme="filled"
                              v-for="item in item.kelas_bintang"
                              :key="item"
                              :style="{
                                color: '#FFD500',
                                'margin-left': '4px'
                              }"
                            />
                          </div>
                        </div>
                      </nuxt-link>
                    </a-card>
                  </a-skeleton>
                </a-col>
              </a-row>
            </div>
          </div>
        </client-only>
      </div>
    </div>
  </div>
</template>
<script>
import searchResultUmrah from "~/components/contents/lib/search/result/umrah.vue";
import filterResultUmrah from "~/components/contents/lib/filter/result/umrah.vue";
import axios from "axios";
export default {
  name: "umrahResults",

  components: {
    searchResultUmrah,
    filterResultUmrah
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
      results: "",
      ItemSlider: {
        prevNextButtons: false,
        pageDots: true
      }
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

    // store.commit("catalog/setUmroh", myRespone.data.data.data);
    // console.log(myRespone.data.data.data, 'test anu');
    data["result"] = myRespone.data.data.data;

    return {
      loading: false,
      busy: false,
      results: myRespone.data.data.data
    };
  },

  methods: {
    loadingEvent(event) {
      console.log(event, "summa");

      if (event) {
        this.loading = event;
      }
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
