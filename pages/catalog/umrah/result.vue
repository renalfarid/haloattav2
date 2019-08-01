<template>
  <div class="ant-layout--results">
    <div class="ant-layout--results-space"></div>
    <div class="container">
      <div class="ant-layout--results-body">
        <div class="ant-layout--results-top" :style="{marginBottom: '20px'}">
          <search-result-umrah />

          <filter-result-umrah />
        </div>

        <div class="ant-layout--results-list pb-16">
          <div class="ant-layout--results-list-label fw-400">Hasil Pencarian Paket Umrah</div>
          <div
            v-infinite-scroll="loadMore"
            :infinite-scroll-disabled="busy"
            :infinite-scroll-distance="limit"
          >
            <a-list
              :grid="{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 3, xl: 3, xxl: 3 }"
              :dataSource="data"
            >
              <a-list-item
                slot="renderItem"
                slot-scope="item, index"
                :key="index"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <a-skeleton :loading="loading" active>
                  <a-card class="ant-card-package">
                    <nuxt-link to="/catalog/umrah/detail-package" class="ant-list-item--link"></nuxt-link>
                    <div slot="cover">
                      <div
                        class="ant-card-cover--images"
                        :style="{ backgroundImage: `url(${item.images_product})` }"
                      >
                        <div class="ant-card-cover--overlay">
                          <div class="ant-card-cover--overlay-box-radius"></div>
                          <div class="ant-card-cover--overlay-text">
                            <div class="ant-card-cover--overlay-text-title">sisa</div>
                            <div class="ant-card-cover--overlay-text-subtitle">
                              <span>{{item.pax_available}}</span> pax
                            </div>
                          </div>
                        </div>

                        <div class="ant-card--overlay-block">
                          <div class="d-flex align-items-center h-100">
                            <a-button>
                              <nuxt-link to="/catalog/umrah/detail-package">Lihat detail</nuxt-link>
                            </a-button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <a-card-meta>
                      <div slot="title">
                        <div class="ant-card-meta-title--top d-flex align-items-center">
                          <div
                            class="ant-card-meta-title--top-left f-default d-flex align-items-center"
                          >
                            <a-popover trigger="hover">
                              <template slot="content">
                                <div class="fs-15 fw-500 cr-black">{{item.name_umaroh}}</div>
                                <div class="fs-14 fw-400 cr-gray f-default"><a-icon type="safety-certificate" theme="filled" class="cr-green mr-4" />Terverifikasi</div>
                              </template>
                              <a-avatar class="zIndex mr-8" :src="item.avatar_umaroh" />
                            </a-popover>

                            <a-popover trigger="hover">
                              <template slot="content">
                                <div
                                  class="fs-13 fw-400 cr-black f-default"
                                >Maskapai Garuda Indonesia</div>
                              </template>
                              <a-avatar class="zIndex mr-8" src="/maskapai/logo/garuda.svg" />
                            </a-popover>

                            <a-popover trigger="hover">
                              <template slot="content">
                                <a-rate class="fs-14 mb-4" :defaultValue="3" disabled />
                                <div
                                  class="fs-13 fw-400 cr-black f-default mb-4"
                                >Mekkah : Hotel Daruttauhid International Mekkah</div>
                                <div
                                  class="fs-13 fw-400 cr-black f-default"
                                >Madinah : Hotel Dar Al Eiman International Madinah</div>
                              </template>
                              <a-avatar
                                class="zIndex mr-8"
                                size="small"
                                style="backgroundColor: rgba(15, 172, 243, .1);padding: 2px"
                                src="/icons/search/tabs/color/accommodation.svg"
                              />
                            </a-popover>
                          </div>
                          <div
                            class="ant-card-meta-title--top-right ml-auto fs-14 fw-400 cr-black"
                          >Program 9 Hari</div>
                        </div>
                        <div class="ant-card-meta-title--package fw-500">{{item.name_product}}</div>
                      </div>

                      <div slot="description">
                        <div class="ant-card-meta-description--bottom d-flex align-items-center">
                          <div class="ant-card-meta-description--bottom-right d-flex">
                            <div class="fs-14 fw-400 cr-gray">
                              Terjual
                              <strong>{{item.pax_booked}}</strong> Pax
                            </div>
                          </div>
                          <div
                            class="ant-card-meta-description--bottom-left cr-primary ml-auto"
                          >Rp{{item.price_product}}</div>
                        </div>
                      </div>
                    </a-card-meta>
                    <div class="package-description--more p-24">
                      <div class="fs-15 fw-400 cr-black f-default text-ellipsis mb-8">
                        <span>Keberangkatan Makassar</span>
                      </div>

                      <div class="d-flex align-items-center mb-16">
                        <div class="fs-14 fw-400 text-ellipsis">
                          <div class="cr-gray">Keberangkatan</div>
                          <div class="cr-black">10 September 2019</div>
                        </div>
                        <div class="fs-14 fw-400 text-ellipsis text-right ml-auto">
                          <div class="cr-gray">Kedatangan</div>
                          <div class="cr-black">19 September 2019</div>
                        </div>
                      </div>

                      <a-button block>
                        <nuxt-link to="/catalog/umrah/order-review">Pesan</nuxt-link>
                      </a-button>
                    </div>
                  </a-card>
                </a-skeleton>
              </a-list-item>
            </a-list>
          </div>
        </div>
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
      data: []
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  },
  created() {
    this.loadMore();
  },
  methods: {
    loadMore() {
      console.log("Adding 6 more data results");
      this.busy = true;
      axios.get("/dataUmrah.json").then(response => {
        const append = response.data.slice(
          this.data.length,
          this.data.length + this.limit
        );
        this.data = this.data.concat(append);
        this.busy = false;
      });
    }
  },
  components: {
    searchResultUmrah,
    filterResultUmrah
  }
};
</script>
