<template>
  <div class="ant-layout--results">
    <div class="ant-layout--results-space"></div>
    <div class="container">
      <div class="ant-layout--results-body">
        <div class="ant-layout--results-top" :style="{marginBottom: '20px'}">
          <search-result-accommodation />

          <filter-result-accommodation />
        </div>

        <div class="ant-layout--results-list pb-16">
          <div class="ant-layout--results-list-label fw-400">Hasil Pencarian LA Akomodasi</div>
          <div
            v-infinite-scroll="loadMore"
            :infinite-scroll-disabled="busy"
            :infinite-scroll-distance="limit"
          >
            <a-list :grid="{ gutter: 16, column: 3 }" :dataSource="data" :loading="loading">
              <a-list-item
                slot="renderItem"
                slot-scope="item, index"
                :key="index"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <nuxt-link
                  :to="'/catalog/accommodation/detail?kode_produk='+item.kode_produk"
                  class="d-block"
                >
                  <a-card class="ant-card-package">
                    <div slot="cover">
                      <div class="ant-card-cover--images" v-lazy:background-image="item.gambar">
                        <div class="ant-card-cover--overlay">
                          <div class="ant-card-cover--overlay-box-radius"></div>
                          <div class="ant-card-cover--overlay-text">
                            <div class="ant-card-cover--overlay-text-title fs-15 fw-500">40</div>
                            <div
                              class="ant-card-cover--overlay-text-subtitle fs-12 text-uppercase"
                            >Pax</div>
                          </div>
                        </div>

                        <div class="ant-card--overlay-block">
                          <div class="d-flex align-items-center h-100">
                            <a-button>
                              <nuxt-link
                                :to="'/catalog/accommodation/detail?kode_produk='+item.kode_produk"
                              >Lihat detail</nuxt-link>
                            </a-button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="d-flex align-items-center">
                      <div class="mr-8">
                        <a-avatar class="vendor-logo zIndex" v-lazy:background-image="item.foto" />
                      </div>
                      <div class="fs-14 fw-400 cr-gray f-default text-ellipsis">{{item.nama_vendor}}</div>
                      <div class="ml-auto">
                        <a-rate class="fs-14 f-default" :defaultValue="4" disabled />
                      </div>
                    </div>

                    <a-row
                      :gutter="8"
                      type="flex"
                      justify="space-between"
                      align="middle"
                      class="mt-8 mb-8"
                    >
                      <a-col :span="12" class="text-left">
                        <div
                          class="fs-16 fw-500 cr-black text-capitalize text-ellipsis f-default"
                        >{{item.nama_hotel_mekkah}}</div>
                        <div class="fs-14 fw-400 cr-black text-capitalize f-default">3 Hari Mekkah</div>
                      </a-col>
                      <a-col :span="12" class="text-right">
                        <div
                          class="fs-16 fw-500 cr-black text-capitalize text-ellipsis f-default"
                        >{{item.nama_hotel_madinah}}</div>
                        <div class="fs-14 fw-400 cr-black text-capitalize f-default">4 Hari Madinah</div>
                      </a-col>
                    </a-row>

                    <div class="d-flex align-items-center">
                      <div
                        class="fs-14 fw-400 cr-gray f-default text-ellipsis"
                      >Program {{item.days}} Hari</div>
                      <div
                        class="ml-auto fs-18 fw-500 cr-primary f-default text-ellipsis"
                      >{{item.harga_quad | currency}}</div>
                    </div>

                    <div class="package-description--more p-24">
                      <div class="d-flex align-items-center mb-8">
                        <div class="fs-14 fw-400 cr-black f-default text-ellipsis">
                          Periode
                          <span class="fw-500">{{item.tipe}}</span> Session
                        </div>
                        <div
                          class="fs-14 fw-400 cr-black f-default text-ellipsis ml-auto"
                        >{{item.class_room}}</div>
                      </div>

                      <div class="d-flex align-items-center">
                        <div class="fs-14 fw-400 text-ellipsis">
                          <div class="cr-gray">Tanggal Mulai</div>
                          <div class="cr-black">{{moment(item.tanggal, "YYYY-MM-DD").format('LL')}}</div>
                        </div>
                        <div class="fs-14 fw-400 text-ellipsis text-right ml-auto">
                          <div class="cr-gray">Tanggal Berakhir</div>
                          <div class="cr-black">{{moment(item.tanggal, "YYYY-MM-DD").format('LL')}}</div>
                        </div>
                      </div>
                    </div>
                  </a-card>
                </nuxt-link>
              </a-list-item>
            </a-list>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import searchResultAccommodation from "~/components/contents/lib/search/result/accommodation.vue";
import filterResultAccommodation from "~/components/contents/lib/filter/result/accommodation.vue";
import axios from "axios";
import moment from "moment";
export default {
  name: "accommodationResult",
  head() {
    return {
      title:
        "Hasil Pencarian LA Akomodasi - Pesan Paket Umrah & Komponen Umrah Lainnya"
    };
  },
  data() {
    return {
      loading: true,
      busy: false,
      limit: 8,
      data: []
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
  },
  components: {
    searchResultAccommodation,
    filterResultAccommodation
  }
};
</script>
