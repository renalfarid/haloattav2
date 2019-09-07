<template>
  <div class="ant-layout--results">
    <div class="ant-layout--results-space-small"></div>
    <div class="container">
      <div class="ant-layout--results-body">
        <div class="ant-layout--results-top mt-16 mb-24">
          <div class="d-flex align-items-center mb-16">
            <div class="fs-24 fw-500 cr-black">Semua Asuransi</div>
            <div class="ml-auto">
              <nuxt-link to="/" class="fs-14 cr-gray">
                <a-icon type="left" class="fs-12 mr-4" />Kembali
              </nuxt-link>
            </div>
          </div>

          <filter-result-insurance />
        </div>

        <div class="ant-layout--results-list pb-16">
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
                          :style="{ backgroundImage: `url(${item.gambar})` }"
                        >
                          <div class="ant-card-cover--overlay">
                            <div class="ant-card-cover--overlay-box-radius ant-pax--insurance"></div>
                            <div class="ant-card-cover--overlay-text">
                              <div
                                class="ant-card-cover--overlay-text-title fs-15 fw-500"
                              >{{item.pax}}</div>
                              <div
                                class="ant-card-cover--overlay-text-subtitle fs-12 text-uppercase"
                              >pax</div>
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
                                <a-avatar
                                  class="vendor-logo zIndex"
                                  :style="{ backgroundImage: `url(${item.foto != '' ? item.foto : 'https://theme.hstatic.net/1000253446/1000470009/14/no-image.jpg?v=843'})` }"
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
                              <div
                                class="fs-14 fw-400 cr-black f-default text-ellipsis"
                              >Program 9 Hari</div>
                            </div>
                            <div
                              class="ant-card-meta-description--bottom-left fw-500 cr-primary text-ellipsis ml-auto"
                            >{{item.harga_satuan | currency}}</div>
                          </div>
                        </div>
                      </a-card-meta>
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
import filterResultInsurance from "~/components/contents/lib/filter/result/insurance.vue";
import axios from "axios";
export default {
  name: "insuranceAll",
  head() {
    return {
      title: "Semua Asuransi - Pesan Paket Umrah & Komponen Umrah Lainnya"
    };
  },
  data() {
    return {
      loading: true,
      busy: false,
      limit: 8,
      page: 0,
      data: []
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  },
  created() {
    this.getdata();
  },
  methods: {
    getdata() {
      this.busy = true;
      axios
        .get("https://api.haloatta.com/api/asuransi/all", {
          params: {
            per_page: 6,
            page: ++this.page
          }
        })
        .then(response => {
          console.log(response.data.data.data);
          this.data = this.data.concat(response.data.data.data);
          this.loading = false;
          this.busy = false;
        });
    }
  },
  components: {
    filterResultInsurance
  }
};
</script>
