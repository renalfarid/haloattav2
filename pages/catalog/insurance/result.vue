<template>
  <div class="ant-layout--results">
    <div class="ant-layout--results-space"></div>
    <div class="container">
      <div class="ant-layout--results-body">
        <div class="ant-layout--results-top" :style="{marginBottom: '20px'}">
          <search-result-insurance />

          <filter-result-insurance />
        </div>

        <div class="ant-layout--results-list pb-16">
          <div class="ant-layout--results-list-label fw-400">Hasil Pencarian Asuransi</div>
          <div
            v-infinite-scroll="loadMore"
            :infinite-scroll-disabled="busy"
            :infinite-scroll-distance="limit"
          >
            <a-list
              :grid="{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 4, xl: 4, xxl: 4 }"
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
                  <nuxt-link to="/catalog/insurance/detail" class="d-block">
                    <a-card class="ant-card-package-small">
                      <div slot="cover">
                        <div
                          class="ant-card-cover--images"
                          :style="{ backgroundImage: `url(${item.images_package})` }"
                        >
                          <div class="ant-card-cover--overlay">
                            <div class="ant-card-cover--overlay-box-radius ant-pax--insurance"></div>
                            <div class="ant-card-cover--overlay-text">
                              <div
                                class="ant-card-cover--overlay-text-title fs-18 fw-500"
                              >{{item.pax}}</div>
                              <div
                                class="ant-card-cover--overlay-text-subtitle text-uppercase"
                              >
                                <span>pax</span>
                              </div>
                            </div>
                          </div>

                          <div class="ant-card--overlay-block">
                            <div class="d-flex align-items-center h-100">
                              <a-button>
                                <nuxt-link to="/catalog/insurance/detail">Lihat detail</nuxt-link>
                              </a-button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <a-card-meta>
                        <div slot="title">
                          <div class="ant-card-meta-title--top d-flex align-items-center">
                            <div class="ant-card-meta-title--top-left d-flex align-items-center">
                              <div class="mr-8">
                                <a-avatar :src="item.logo_provider" size="small" />
                              </div>
                              <div
                                class="fs-13 fw-400 cr-gray f-default text-ellipsis"
                              >{{item.provider}}</div>
                            </div>
                          </div>
                          <div
                            class="ant-card-meta-title--package fs-15 fw-500"
                          >{{item.name_insurance}}</div>
                        </div>

                        <div slot="description">
                          <div class="ant-card-meta-description--bottom d-flex align-items-center">
                            <div class="ant-card-meta-description--bottom-right d-flex">
                              <div
                                class="fs-14 fw-400 cr-black f-default text-ellipsis"
                              >Program 9 Hari</div>
                            </div>
                            <div
                              class="ant-card-meta-description--bottom-left fw-500 cr-primary text-ellipsis ml-auto"
                            >Rp{{item.price}}</div>
                          </div>
                        </div>
                      </a-card-meta>

                      <div class="package-description--more p-16">
                        <div class="d-flex align-items-center mb-16">
                          <div class="fs-13 fw-400 text-ellipsis">
                            <div class="cr-gray">Keberangkatan</div>
                            <div class="cr-black">10 September 2019</div>
                          </div>
                          <div class="fs-13 fw-400 text-ellipsis text-right ml-auto">
                            <div class="cr-gray">Kedatangan</div>
                            <div class="cr-black">19 September 2019</div>
                          </div>
                        </div>

                        <a-button block>
                          <nuxt-link to="/catalog/insurance/order-review">Pesan</nuxt-link>
                        </a-button>
                      </div>
                    </a-card>
                  </nuxt-link>
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
import searchResultInsurance from "~/components/contents/lib/search/result/insurance.vue";
import filterResultInsurance from "~/components/contents/lib/filter/result/insurance.vue";
import axios from "axios";
export default {
  name: "insuranceResult",
  head() {
    return {
      title:
        "Hasil Pencarian Asuransi - Pesan Paket Umrah & Komponen Umrah Lainnya"
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
      axios.get("/dataInsurance.json").then(response => {
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
    searchResultInsurance,
    filterResultInsurance
  }
};
</script>
