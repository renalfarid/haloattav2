<template>
  <div class="ant-layout--results">
    <div class="ant-layout--results-space-small"></div>
    <div class="container">
      <div class="ant-layout--results-body">
        <div class="ant-layout--results-top mt-16 mb-24">
          <div class="d-flex align-items-center mb-16">
            <div class="fs-24 fw-500 cr-black">Semua Vendor Tour Leader</div>
            <div class="ml-auto">
              <nuxt-link to="/" class="fs-14 cr-gray">
                <a-icon type="left" class="fs-12 mr-4" />Kembali
              </nuxt-link>
            </div>
          </div>

          <filter-result-tourleader />
        </div>

        <div class="ant-layout--results-list pb-16">
          <div
            v-infinite-scroll="loadMore"
            :infinite-scroll-disabled="busy"
            :infinite-scroll-distance="limit"
          >
            <a-list
              :grid="{ gutter: 16, xs: 1, sm: 2, md: 2, lg: 4, xl: 4, xxl: 4 }"
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
                  <nuxt-link to="/catalog/tourleader/detail" class="d-block">
                    <a-card class="ant-card-package-small">
                      <div slot="cover">
                        <div
                          class="ant-card-cover--images"
                          :style="{ backgroundImage: `url(${item.images_package})` }"
                        >
                          <div class="ant-card--overlay-block">
                            <div class="d-flex align-items-center h-100">
                              <a-button>
                                <nuxt-link to="/catalog/tourleader/detail">Lihat detail</nuxt-link>
                              </a-button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <a-card-meta>
                        <div slot="title">
                          <div class="ant-card-meta-title--top d-flex align-items-center mb-16">
                            <div class="ant-card-meta-title--top-left d-flex align-items-center">
                              <div class="mr-8">
                                <a-popover trigger="hover">
                                  <template slot="content">
                                    <div class="fs-13 fw-400 cr-gray f-default">Berpengalaman</div>
                                  </template>
                                  <a-avatar
                                    style="backgroundColor: #FF7C0A"
                                    class="zIndex"
                                    icon="safety"
                                    size="small"
                                  />
                                </a-popover>
                              </div>
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
                          >{{item.name_tourleader}}</div>
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
                          <div class="fs-14 fw-400 cr-black text-ellipsis">Asal Makassar</div>
                          <div
                            class="fs-14 fw-400 cr-black text-ellipsis text-right ml-auto"
                          >Laki-Laki</div>
                        </div>

                        <div>
                          <div class="fs-14 fw-400 cr-gray text-ellipsis">Keterangan</div>
                          <div class="fs-14 fw-400 cr-black">Mampu berbahasa arab dan indonesia</div>
                        </div>
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
import filterResultTourleader from "~/components/contents/lib/filter/result/tourleader.vue";
import axios from "axios";
export default {
  name: "tourleaderAll",
  head() {
    return {
      title:
        "Semua Vendor Tour Leader - Pesan Paket Umrah & Komponen Umrah Lainnya"
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
      axios.get("/dataTourleader.json").then(response => {
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
    filterResultTourleader
  }
};
</script>
