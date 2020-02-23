<template>
  <div class="ant-layout--results">
    <div class="ant-layout--results-space"></div>
    <div class="container">
      <div class="ant-layout--results-body">
        <div class="ant-layout--results-top" :style="{ marginBottom: '20px' }">
          <search-result-visa />

          <filter-result-visa />
        </div>

        <div class="ant-layout--results-list pb-16">
          <div class="ant-layout--results-list-label fw-400">
            Hasil Pencarian Visa
          </div>
          <div
            v-infinite-scroll="loadMore"
            :infinite-scroll-disabled="busy"
            :infinite-scroll-distance="limit"
          >
            <a-row :gutter="24" class="r-wrap">
              <a-col
                class="mb-16"
                data-aos="fade-up"
                data-aos-duration="1200"
                v-for="item in data"
                :key="item.kode_produk"
                :xs="24"
                :sm="12"
                :md="12"
                :lg="8"
              >
                <nuxt-link
                  :to="'/catalog/visa/detail?kode_produk=' + item.kode_produk"
                  class="d-block"
                >
                  <a-card class="ant-card-package-small">
                    <div slot="cover">
                      <div
                        class="ant-card-cover--images"
                        v-lazy:background-image="item.gambar"
                      >
                        <div class="d-none ant-card-cover--overlay">
                          <div
                            class="ant-card-cover--overlay-box-radius ant-pax--visa"
                          ></div>
                          <div class="ant-card-cover--overlay-text">
                            <div
                              class="ant-card-cover--overlay-text-title fs-15 fw-500"
                            >
                              {{ item.qty }}
                            </div>
                            <div
                              class="ant-card-cover--overlay-text-subtitle fs-12 text-uppercase"
                            >
                              Pax
                            </div>
                          </div>
                        </div>

                        <div class="ant-card--overlay-block">
                          <div class="d-flex align-items-center h-100">
                            <a-button>
                              <nuxt-link
                                :to="
                                  '/catalog/visa/detail?kode_produk=' +
                                    item.kode_produk
                                "
                                >Lihat detail</nuxt-link
                              >
                            </a-button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <a-card-meta>
                      <div slot="title">
                        <div
                          class="ant-card-meta-title--top d-flex align-items-center"
                        >
                          <div
                            class="ant-card-meta-title--top-left d-flex align-items-center"
                          >
                            <div class="mr-8">
                              <a-avatar
                                class="vendor-logo"
                                size="small"
                                v-lazy:background-image="item.foto"
                              />
                            </div>
                            <div
                              class="fs-13 fw-400 cr-gray f-default text-ellipsis"
                            >
                              {{ item.nama_vendor }}
                            </div>
                          </div>
                        </div>
                        <div class="ant-card-meta-title--package fw-500 mb-0">
                          {{ item.nama }}
                        </div>
                      </div>

                      <div slot="description">
                        <div
                          class="ant-card-meta-description--bottom d-flex align-items-center"
                        >
                          <div
                            class="ant-card-meta-description--bottom-right d-flex"
                          >
                            <div
                              class="fs-14 fw-400 cr-black f-default text-ellipsis"
                            >
                              Visa Berlaku {{ item.duration_stay }} Hari
                            </div>
                          </div>
                          <div
                            class="ant-card-meta-description--bottom-left fw-500 cr-primary text-ellipsis ml-auto"
                          >
                            {{ item.harga_jual | currency }}
                          </div>
                        </div>
                      </div>
                    </a-card-meta>
                  </a-card>
                </nuxt-link>
              </a-col>
            </a-row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import searchResultVisa from "~/components/contents/lib/search/result/visa.vue";
import filterResultVisa from "~/components/contents/lib/filter/result/visa.vue";
import axios from "axios";
import moment from "moment";
export default {
  name: "visaResult",
  head() {
    return {
      title: "Hasil Pencarian Visa - Pesan Paket Umrah & Komponen Umrah Lainnya"
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
        .get(process.env.baseUrl + "visa/all", {
          params: {
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
    searchResultVisa,
    filterResultVisa
  }
};
</script>
