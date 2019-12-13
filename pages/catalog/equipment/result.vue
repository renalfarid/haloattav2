<template>
  <div class="ant-layout--results">
    <div class="ant-layout--results-space"></div>
    <div class="container">
      <div class="ant-layout--results-body">
        <div class="ant-layout--results-top" :style="{marginBottom: '20px'}">
          <search-result-equipment />

          <filter-result-equipment />
        </div>

        <div class="ant-layout--results-list pb-16">
          <div class="ant-layout--results-list-label fw-400">Hasil Pencarian Perlengkapan</div>
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
                  :to="'/catalog/equipment/detail?kode_produk='+item.kode_produk"
                  class="d-block"
                >
                  <a-card class="ant-card-package-small">
                    <div slot="cover">
                      <div class="ant-card-cover--images" v-lazy:background-image="item.gambar">
                        <div class="d-none ant-card-cover--overlay">
                          <div class="ant-card-cover--overlay-box-radius ant-pax--insurance"></div>
                          <div class="ant-card-cover--overlay-text">
                            <div
                              class="ant-card-cover--overlay-text-title fs-15 fw-500"
                            >{{item.pax}}</div>
                            <div class="ant-card-cover--overlay-text-subtitle fs-12 text-uppercase">
                              <span>pax</span>
                            </div>
                          </div>
                        </div>

                        <!-- <div class="ant-card--overlay-block">
                          <div class="d-flex align-items-center h-100">
                            <a-button>
                              <nuxt-link to="/catalog/equipment/detail">Lihat detail</nuxt-link>
                            </a-button>
                          </div>
                        </div>-->
                      </div>
                    </div>

                    <a-card-meta>
                      <div slot="title">
                        <div class="ant-card-meta-title--top d-flex align-items-center">
                          <div class="ant-card-meta-title--top-left d-flex align-items-center">
                            <div class="mr-8">
                              <a-avatar
                                class="vendor-logo zIndex"
                                size="small"
                                v-lazy:background-image="item.gambar"
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
                        <div class="ant-card-meta-description--bottom d-flex align-items-center">
                          <div class="ant-card-meta-description--bottom-right d-flex">
                            <div class="fs-14 fw-400 cr-black f-default text-ellipsis">Standar</div>
                          </div>
                          <div
                            class="ant-card-meta-description--bottom-left fw-500 cr-primary text-ellipsis ml-auto"
                          >{{item.harga_satuan|currency}}</div>
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
import searchResultEquipment from "~/components/contents/lib/search/result/equipment.vue";
import filterResultEquipment from "~/components/contents/lib/filter/result/equipment.vue";
import axios from "axios";
export default {
  name: "equipmentResult",
  head() {
    return {
      title:
        "Hasil Pencarian Perlengkapan - Pesan Paket Umrah & Komponen Umrah Lainnya"
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
    // callback(null, {});

    // console.log(context, "test anu");
    // console.log(loading, "test anu");
    const myRespone = await axios.get(
      process.env.baseUrl + "perlengkapan/all",
      {
        params: {
          per_page: "8"
        }
      }
    );

    console.log(myRespone.data.data.data, "test anu");

    return {
      loading: false,
      busy: false,
      data: myRespone.data.data.data
    };
  },
  methods: {
    loadMore() {
      // console.log("Adding 6 more data results");
      // axios.get("/dataEquipment.json").then(response => {
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
    searchResultEquipment,
    filterResultEquipment
  }
};
</script>
