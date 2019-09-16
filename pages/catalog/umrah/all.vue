<template>
  <div class="ant-layout--results">
    <div class="ant-layout--results-space-small"></div>
    <div class="container">
      <div class="ant-layout--results-body">
        <div class="ant-layout--results-top mt-16 mb-24">
          <div class="d-flex align-items-center mb-16">
            <div class="fs-24 fw-500 cr-black">Semua Paket Umrah</div>
            <div class="ml-auto">
              <nuxt-link to="/" class="fs-14 cr-gray">
                <a-icon type="left" class="fs-12 mr-4" />Kembali
              </nuxt-link>
            </div>
          </div>
          <filter-result-umrah />
        </div>

        <div class="ant-layout--results-list pb-16">
          <div
            v-infinite-scroll="getdata"
            :infinite-scroll-disabled="busy"
            :infinite-scroll-distance="limit"
          >
            <a-list :grid="{ gutter: 16, column: 3 }" :dataSource="data">
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
                      <div class="ant-card-cover--images" v-lazy:background-image="item.gambar">
                        <div class="ant-card-cover--overlay">
                          <div class="ant-card-cover--overlay-box-radius"></div>
                          <div class="ant-card-cover--overlay-text">
                            <div
                              class="ant-card-cover--overlay-text-title fs-15 fw-500"
                            >{{item.sisa_seat}}</div>
                            <div
                              class="ant-card-cover--overlay-text-subtitle fs-12 text-uppercase"
                            >pax</div>
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
                                <div class="fs-15 fw-500 cr-black">{{item.nama}}</div>
                                <div class="fs-14 fw-400 cr-gray f-default">
                                  <a-icon
                                    type="safety-certificate"
                                    theme="filled"
                                    class="cr-green mr-4"
                                  />Terverifikasi
                                </div>
                              </template>
                              <a-avatar
                                class="vendor-logo zIndex mr-8"
                                v-lazy:background-image="item.foto_vendor"
                              />
                            </a-popover>

                            <a-popover trigger="hover">
                              <template slot="content">
                                <div
                                  class="fs-13 fw-400 cr-black f-default"
                                >Maskapai {{item.nama_maskapai}}</div>
                              </template>
                              <a-avatar size="small" class="zIndex mr-8" :src="item.image" />
                            </a-popover>
                          </div>
                          <div class="ant-card-meta-title--top-right ml-auto">
                            <a-rate class="fs-14 mb-4" :defaultValue="3" disabled />
                          </div>
                        </div>
                        <div
                          class="ant-card-meta-title--package text-capitalize fw-500"
                        >{{item.nama}}</div>
                      </div>

                      <div slot="description">
                        <div class="ant-card-meta-description--bottom d-flex align-items-center">
                          <div class="ant-card-meta-description--bottom-right d-flex">
                            <div class="fs-14 fw-400 cr-black">Program {{item.jumlah_hari}} Hari</div>
                          </div>
                          <div
                            class="ant-card-meta-description--bottom-left cr-primary ml-auto"
                          >{{item.harga_jual | currency}}</div>
                        </div>
                      </div>
                    </a-card-meta>
                    <div class="package-description--more p-16">
                      <div class="mb-8">
                        <div>
                          <div class="fs-14 fw-500 cr-black f-default text-ellipsis">
                            <span>Informasi Hotel</span>
                          </div>
                          <div class="fs-14 fw-400 cr-gray f-default text-capitalize text-ellipsis">
                            <span>Makkah : {{item.hotel_mekkah}}Rayyana Ajyad</span>
                          </div>
                          <div class="fs-14 fw-400 cr-gray f-default text-capitalize text-ellipsis">
                            <span>Madinah : {{item.hotel_madinah}}</span>
                          </div>
                        </div>
                      </div>

                      <div class="mb-8">
                        <div class="fs-14 fw-500 cr-black f-default text-ellipsis">
                          <span>Kota Keberangkatan</span>
                        </div>
                        <div class="fs-15 fw-400 cr-gray f-default text-ellipsis">
                          <span>{{item.nama_kota}}</span>
                        </div>
                      </div>

                      <div class="fs-14 fw-500 cr-black f-default text-ellipsis">
                        <span>Tanggal Keberangkatan</span>
                      </div>
                      <div class="d-flex align-items-center">
                        <div class="fs-14 fw-400 text-ellipsis">
                          <div class="cr-gray">Keberangkatan</div>
                          <div
                            class="cr-gray"
                          >{{moment(item.tgl_berangkat, "YYYY-MM-DD").format('ll')}}</div>
                        </div>
                        <div class="fs-14 fw-400 text-ellipsis text-right ml-auto">
                          <div class="cr-gray">Kedatangan</div>
                          <div
                            class="cr-gray"
                          >{{moment(item.tgl_berangkat, "YYYY-MM-DD").format('ll')}}</div>
                        </div>
                      </div>
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
import filterResultUmrah from "~/components/contents/lib/filter/result/umrah.vue";
import moment from "moment";
import axios from "axios";
export default {
  name: "umrahAll",
  head() {
    return {
      title: "Semua Paket Umrah - Booking Paket Umrah & Komponen Umrah Lainnya"
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
  created() {
    this.getdata();
  },
  methods: {
    moment,
    getdata() {
      this.busy = true;
      axios
        .get("https://api.haloatta.com/api/paket/umroh/all", {
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
    filterResultUmrah
  }
};
</script>
