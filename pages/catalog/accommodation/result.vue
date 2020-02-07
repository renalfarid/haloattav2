<template>
  <div class="ant-layout--results">
    <div class="ant-layout--results-space"></div>
    <div class="container">
      <div class="ant-layout--results-body">
        <div class="ant-layout--results-top" :style="{ marginBottom: '20px' }">
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
                :xs="24"
                :sm="12"
                :md="12"
                :lg="8"
                v-for="(item, index) in data"
                :key="index"
                :style="{ 'margin-bottom': '16px' }"
              >
                <a-skeleton :loading="loading" active>
                  <a-card class="ant-card-package" hoverable>
                    <template slot="cover">
                      <flickity
                        class="md-flickity__images md-flickity__images-large"
                        ref="flickityImages"
                        :options="ItemSlider"
                      >
                        <div
                          class="item-images"
                          v-lazy:background-image="item.images_hotel"
                        ></div>

                        <div
                          class="item-images"
                          v-lazy:background-image="item.images_hotel"
                        ></div>

                        <div
                          class="item-images"
                          v-lazy:background-image="item.images_hotel"
                        ></div>
                      </flickity>
                    </template>

                    <nuxt-link
                      :to="
                        '/catalog/accommodation/detail?kode_produk=' +
                          item.kode_produk
                      "
                      class="d-block"
                    >
                      <div :style="{ padding: '24px 24px 12px 24px' }">
                        <div class="d-flex align-items-center">
                          <a-popover trigger="hover">
                            <template slot="content">
                              <div class="fs-12 fw-400 cr-gray text-uppercase">
                                Penyedia
                              </div>
                              <div
                                class="fs-14 fw-500 cr-black text-capitalize"
                              >
                                {{ item.nama_vendor }}
                              </div>
                            </template>
                            <a-avatar
                              v-if="item && item.foto"
                              class="vendor-logo zIndex mr-8"
                              v-lazy:background-image="item.foto"
                            />
                            <a-avatar
                              v-else
                              class="vendor-logo zIndex mr-8"
                              v-lazy:background-image="
                                'https://cdn4.iconfinder.com/data/icons/avatar-vol-1-3/512/4-512.png'
                              "
                            />
                          </a-popover>

                          <div class="ml-auto">
                            <a-popover trigger="hover">
                              <template slot="content">
                                <div
                                  class="fs-14 fw-400 cr-black text-capitalize"
                                >
                                  Hotel setaraf bintang {{ item.kelas_bintang }}
                                </div>
                              </template>
                              <a-icon
                                type="star"
                                theme="filled"
                                v-for="item in item.kelas_bintang"
                                :key="item"
                                class="fs-14"
                                :style="{
                                  color: '#FFD500',
                                  'margin-left': '4px'
                                }"
                              />
                            </a-popover>
                          </div>
                        </div>

                        <div
                          class="fs-16 cr-black text-capitalize fw-500 mt-16"
                        >
                          {{ item.nama }}
                        </div>
                      </div>

                      <div class="md-card--bottom">
                        <div class="md-price">
                          {{ item.harga_quad | currency }}
                          <span class="fs-14 fw-400 cr-black-opacity">
                            / {{ item.days }} Hari
                          </span>
                        </div>
                      </div>
                    </nuxt-link>
                  </a-card>
                </a-skeleton>
              </a-col>
            </a-row>
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
      data: [],
      ItemSlider: {
        prevNextButtons: false,
        pageDots: true
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
  },
  components: {
    searchResultAccommodation,
    filterResultAccommodation
  }
};
</script>
