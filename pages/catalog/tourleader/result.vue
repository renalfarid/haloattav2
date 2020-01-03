<template>
  <div class="ant-layout--results">
    <div class="ant-layout--results-space"></div>
    <div class="container">
      <div class="ant-layout--results-body">
        <div class="ant-layout--results-top" :style="{marginBottom: '20px'}">
          <search-result-tourleader />

          <filter-result-tourleader />
        </div>

        <div class="ant-layout--results-list pb-16">
          <div class="ant-layout--results-list-label fw-400">Hasil Pencarian Tour Leader</div>
          <div
            v-infinite-scroll="loadMore"
            :infinite-scroll-disabled="busy"
            :infinite-scroll-distance="limit"
          >
            <a-list :grid="{ gutter: 16, column: 4 }" :dataSource="data" :loading="loading">
              <a-list-item
                slot="renderItem"
                slot-scope="item, index"
                :key="index"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <nuxt-link
                  :to="'/catalog/tourleader/detail?kode_produk='+item.kode_produk"
                  class="d-block"
                >
                  <a-card class="ant-card-package-small">
                    <div slot="cover">
                      <div class="ant-card-cover--images" v-lazy:background-image="item.foto">
                        <div class="ant-card--overlay-block">
                          <div class="ant-card--overlay-block-body">
                            <div
                              class="fs-13 fw-400 cr-black f-default text-capitalize text-ellipsis"
                            >{{item.informasi_singkat ? item.informasi_singkat : '-'}}</div>
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
                              <a-avatar
                                class="vendor-logo zIndex"
                                size="small"
                                v-lazy:background-image="item.foto_perusahaan"
                              />
                            </div>
                            <div
                              class="fs-13 fw-400 cr-gray f-default text-ellipsis"
                            >{{item.nama_vendor}}</div>
                          </div>
                        </div>
                        <div class="ant-card-meta-title--package fs-15 fw-500">{{item.nama}}</div>
                      </div>

                      <div slot="description">
                        <!-- <div class="fs-14 fw-400 cr-gray f-default text-ellipsis">
                          <a-icon type="environment" class="mr-4" />
                          <span>Kota {{ item.nama_kota }}</span>
                        </div>-->

                        <div class="ant-card-meta-description--bottom d-flex align-items-center">
                          <div class="ant-card-meta-description--bottom-right d-flex">
                            <div
                              class="fs-14 fw-400 cr-black f-default text-ellipsis"
                            >Program (tidak ada)</div>
                          </div>
                          <div
                            class="ant-card-meta-description--bottom-left fw-500 cr-primary text-ellipsis ml-auto"
                          >{{item.harga|currency}}</div>
                        </div>
                      </div>
                    </a-card-meta>
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
import searchResultTourleader from "~/components/contents/lib/search/result/tourleader.vue";
import filterResultTourleader from "~/components/contents/lib/filter/result/tourleader.vue";
import axios from "axios";
export default {
  name: "tourleaderResult",
  head() {
    return {
      title:
        "Hasil Pencarian Tour Leader - Pesan Paket Umrah & Komponen Umrah Lainnya"
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
  async asyncData() {
    const myRespone = await axios.get(process.env.baseUrl + "tourleader/all", {
      params: {
        per_page: "8"
      }
    });

    return {
      loading: false,
      busy: false,
      data: myRespone.data.data.data
    };
  },
  methods: {
    loadMore() {
      // console.log("Adding 6 more data results");
      // this.busy = true;
      // axios.get("/dataTourleader.json").then(response => {
      //   const append = response.data.slice(
      //     this.data.length,
      //     this.data.length + this.limit
      //   );
      //   this.data = this.data.concat(append);
      //   this.loading = false;
      //   this.busy = false;
      // });
    }
  },
  components: {
    searchResultTourleader,
    filterResultTourleader
  }
};
</script>
