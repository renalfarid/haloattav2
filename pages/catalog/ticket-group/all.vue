<template>
  <div class="ant-layout--results">
    <div class="ant-layout--results-space-small"></div>
    <div class="container">
      <div class="ant-layout--results-body">
        <div class="ant-layout--results-top mt-16 mb-24">
          <div class="d-flex align-items-center mb-16">
            <div class="fs-24 fw-500 cr-black">Semua Tiket Group</div>
            <div class="ml-auto">
              <nuxt-link to="/" class="fs-14 cr-gray">
                <a-icon type="left" class="fs-12 mr-4"/>Kembali
              </nuxt-link>
            </div>
          </div>

          <filter-result-ticket/>
        </div>

        <div class="ant-layout--results-list pb-16">
          <div
            v-infinite-scroll="getdata"
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
                  <nuxt-link to="/catalog/ticket-group/detail-ticket" class="d-block">
                    <a-card class="ant-card--package-ticket">
                      <div slot="cover">
                        <div
                          class="ant-card-cover--images"
                          :style="{ backgroundImage: `url(${item.gambar})` }"
                        >
                          <div class="ant-card-cover--overlay">
                            <div class="ant-card-cover--overlay-box-radius"></div>
                            <div class="ant-card-cover--overlay-text">
                              <div class="ant-card-cover--overlay-text-title fs-15 fw-500">{{item.qty}}</div>
                              <div class="ant-card-cover--overlay-text-subtitle fs-12 text-uppercase">Pax</div>
                            </div>
                          </div>

                          <div class="ant-card--overlay-block">
                            <div class="d-flex align-items-center h-100">
                              <a-button>
                                <nuxt-link to="/catalog/ticket-group/detail-ticket">Lihat detail</nuxt-link>
                              </a-button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="d-flex align-items-center">
                        <a-popover trigger="hover">
                          <template slot="content">
                            <div class="fs-15 fw-500 cr-black">{{item.nama_vendor}}</div>
                            <div class="fs-14 fw-400 cr-gray f-default">
                              <a-icon
                                type="safety-certificate"
                                theme="filled"
                                class="cr-green mr-4"
                              />Terverifikasi
                            </div>
                          </template>
                          <a-avatar
                            class="zIndex mr-8"
                            :src="item.foto != '' ? item.foto : 'https://theme.hstatic.net/1000253446/1000470009/14/no-image.jpg?v=843'"
                          />
                        </a-popover>
                        <a-popover trigger="hover">
                          <template slot="content">
                            <div class="fs-13 fw-400 cr-gray f-default">Maskapai {{item.maskapai}}</div>
                          </template>
                          <a-avatar
                            class="zIndex mr-8"
                            :src="item.image != '' ? item.image : 'https://tesvendor.haloatta.com/file/tiket/TKT300382755-189.jpg'"
                          />
                        </a-popover>
                        <div
                          class="ml-auto fs-13 fw-400 cr-gray f-default text-capitalize text-ellipsis"
                        >{{item.class_flight}}</div>
                      </div>

                      <a-row
                        :gutter="8"
                        type="flex"
                        justify="space-between"
                        align="middle"
                        class="mt-8 mb-8"
                      >
                        <a-col :span="8" class="text-left">
                          <div
                            class="fs-30 fw-500 cr-black text-uppercase f-default"
                          >{{item.kode_bandara_asal}}</div>
                          <div
                            class="fs-14 fw-400 cr-black text-uppercase f-default"
                          >{{item.jam_keberangkatan}}</div>
                        </a-col>
                        <a-col :span="8" class="text-center">
                          <div class="fs-13 fw-400 cr-gray text-capitalize f-default mb-8">Nonstop</div>
                          <div
                            class="fs-13 fw-400 cr-gray text-capitalize f-default"
                          >{{item.durasi_keberangkatan}}</div>
                        </a-col>
                        <a-col :span="8" class="text-right">
                          <div
                            class="fs-30 fw-500 cr-black text-uppercase f-default"
                          >{{item.kode_bandara_tujuan}}</div>
                          <div
                            class="fs-14 fw-400 cr-black text-uppercase f-default"
                          >{{item.tiba_keberangkatan}}</div>
                        </a-col>
                      </a-row>

                      <div class="d-flex align-items-end align-items-center">
                        <div class="fs-14 fw-400 cr-gray f-default text-ellipsis">Program 9 Hari</div>
                        <div
                          class="ml-auto fs-16 fw-500 cr-primary f-default text-ellipsis"
                        >{{item.harga_jual | currency}}</div>
                      </div>

                      <div class="package-description--more p-16">
                        <div class="d-flex align-items-center mb-8">
                          <div
                            class="fs-15 fw-400 cr-black f-default text-ellipsis"
                          >{{item.nama_kota}}</div>
                          <div
                            class="fs-15 fw-400 cr-black f-default text-ellipsis ml-auto"
                          >Round Trip</div>
                        </div>

                        <div class="d-flex align-items-center">
                          <div class="fs-13 fw-400 text-ellipsis">
                            <div class="cr-gray">Keberangkatan</div>
                            <div class="cr-black">{{moment(item.tanggal_keberangkatan, "YYYY-MM-DD").format('ll')}}</div>
                          </div>
                          <div class="fs-13 fw-400 text-ellipsis text-right ml-auto">
                            <div class="cr-gray">Kedatangan</div>
                            <div class="cr-black">{{moment(item.tanggal_kepulangan, "YYYY-MM-DD").format('ll')}}</div>
                          </div>
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
import filterResultTicket from "~/components/contents/lib/filter/result/ticket.vue";
import moment from "moment";
import axios from "axios";
export default {
  name: "ticketAll",
  head() {
    return {
      title: "Semua Tiket Group - Pesan Paket Umrah & Komponen Umrah Lainnya"
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
        .get("https://api.haloatta.com/api/tiket/all", {
          params: {
            per_page: 8,
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
    filterResultTicket
  }
};
// AOS.init();
</script>
