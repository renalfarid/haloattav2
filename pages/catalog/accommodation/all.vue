<template>
  <div class="ant-layout--results">
    <div class="ant-layout--results-space-small"></div>
    <div class="container">
      <div class="ant-layout--results-body">
        <div class="ant-layout--results-top mt-16 mb-24">
          <div class="d-flex align-items-center mb-16">
            <div class="fs-24 fw-500 cr-black">Semua LA Akomodasi</div>
            <div class="ml-auto">
              <nuxt-link to="/" class="fs-14 cr-gray">
                <a-icon type="left" class="fs-12 mr-4" />Kembali
              </nuxt-link>
            </div>
          </div>

          <filter-result-accommodation />
        </div>

        <div class="ant-layout--results-list pb-16">
          <div
            v-infinite-scroll="getdata"
            :infinite-scroll-disabled="busy"
            :infinite-scroll-distance="limit"
          >
            <a-list
              :grid="{ gutter: 16, xs: 1, sm: 2, md: 2, lg: 3, xl: 3, xxl: 4 }"
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
                  <nuxt-link to="/catalog/accommodation/detail" class="d-block">
                    <a-card class="ant-card-package">
                      <div slot="cover">
                        <div
                          class="ant-card-cover--images"
                          :style="{ backgroundImage: `url(${item.gambar != '' ? item.gambar : 'https://theme.hstatic.net/1000253446/1000470009/14/no-image.jpg?v=843'})` }"
                        >
                          <div class="ant-card-cover--overlay">
                            <div class="ant-card-cover--overlay-box-radius"></div>
                            <div class="ant-card-cover--overlay-text">
                              <div
                                class="ant-card-cover--overlay-text-title fs-15 fw-500"
                              >40</div>
                              <div
                                class="ant-card-cover--overlay-text-subtitle fs-12 text-uppercase"
                              >Pax</div>
                            </div>
                          </div>

                          <div class="ant-card--overlay-block">
                            <div class="d-flex align-items-center h-100">
                              <a-button>
                                <nuxt-link to="/catalog/accommodation/detail">Lihat detail</nuxt-link>
                              </a-button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="d-flex align-items-center">
                        <div class="mr-8">
                          <a-avatar
                            class="vendor-logo"
                            :style="{ backgroundImage: `url(${item.foto != '' ? item.foto : 'https://theme.hstatic.net/1000253446/1000470009/14/no-image.jpg?v=843'})` }"
                          />
                        </div>
                        <div class="fs-14 fw-400 cr-gray f-default text-ellipsis">{{item.nama_vendor}}</div>
                        <div class="ml-auto">
                          <a-rate class="fs-14 f-default" :defaultValue="item.rating" disabled />
                        </div>
                      </div>

                      <a-row
                        :gutter="8"
                        type="flex"
                        justify="space-between"
                        align="middle"
                        class="mt-8 mb-8"
                      >
                        <a-col :span="12" class="text-left">
                          <div
                            class="fs-16 fw-500 cr-black text-capitalize text-ellipsis f-default"
                          >{{item.nama_hotel_mekkah}}</div>
                          <div class="fs-14 fw-400 cr-black text-capitalize f-default">3 Hari Mekkah</div>
                        </a-col>
                        <a-col :span="12" class="text-right">
                          <div
                            class="fs-16 fw-500 cr-black text-capitalize text-ellipsis f-default"
                          >{{item.nama_hotel_madinah}}</div>
                          <div
                            class="fs-14 fw-400 cr-black text-capitalize f-default"
                          >4 Hari Madinah</div>
                        </a-col>
                      </a-row>

                      <div class="d-flex align-items-center">
                        <div
                          class="fs-14 fw-400 cr-black f-default text-ellipsis"
                        >Program {{item.days}} Hari</div>
                        <div
                          class="ml-auto fs-18 fw-500 cr-primary f-default text-ellipsis"
                        >{{item.harga_quad | currency}}</div>
                      </div>

                      <div class="package-description--more p-24">
                        <div class="d-flex align-items-center mb-8">
                          <div
                            class="fs-14 fw-400 cr-black f-default text-ellipsis"
                          >Periode <span class="fw-500">{{item.tipe}}</span> Session</div>
                          <div
                            class="fs-14 fw-400 cr-black f-default text-ellipsis ml-auto"
                          >{{item.class_room}}</div>
                        </div>

                        <div class="d-flex align-items-center">
                          <div class="fs-14 fw-400 text-ellipsis">
                            <div class="cr-gray">Tanggal Mulai</div>
                            <div class="cr-black">{{moment(item.tanggal, "YYYY-MM-DD").format('LL')}}</div>
                          </div>
                          <div class="fs-14 fw-400 text-ellipsis text-right ml-auto">
                            <div class="cr-gray">Tanggal Berakhir</div>
                            <div class="cr-black">{{moment(item.tanggal, "YYYY-MM-DD").format('LL')}}</div>
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
import filterResultAccommodation from "~/components/contents/lib/filter/result/accommodation.vue";
import moment from "moment";
import axios from "axios";
export default {
  name: "accommodationAll",
  head() {
    return {
      title: "Semua LA Akomodasi - Pesan Paket Umrah & Komponen Umrah Lainnya"
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
        .get("https://api.haloatta.com/api/la/all", {
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
    filterResultAccommodation
  }
};
</script>
