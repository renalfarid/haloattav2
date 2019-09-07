<template>
  <div class="ant-layout--results">
    <div class="ant-layout--results-space"></div>
    <div class="container">
      <div class="ant-layout--results-body">
        <div class="ant-layout--results-top" :style="{marginBottom: '20px'}">
          <search-result-ticket />

          <filter-result-ticket />
        </div>

        <div class="ant-layout--results-list pb-16">
          <div class="ant-layout--results-list-label fw-400">Hasil Pencarian Tiket Group</div>
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
                  <nuxt-link to="/catalog/ticket-group/detail-ticket" class="d-block">
                    <a-card class="ant-card--package-ticket">
                      <div slot="cover">
                        <div
                          class="ant-card-cover--images"
                          :style="{ backgroundImage: `url(${item.images_package})` }"
                        >
                          <div class="ant-card-cover--overlay">
                            <div class="ant-card-cover--overlay-box-radius"></div>
                            <div class="ant-card-cover--overlay-text">
                              <div class="ant-card-cover--overlay-text-title fs-15 fw-500">40</div>
                              <div class="ant-card-cover--overlay-text-subtitle fs-12 text-uppercase">pax</div>
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
                            <div class="fs-15 fw-500 cr-black">Nuh Travel</div>
                            <div class="fs-14 fw-400 cr-gray f-default">
                              <a-icon
                                type="safety-certificate"
                                theme="filled"
                                class="cr-green mr-4"
                              />Terverifikasi
                            </div>
                          </template>
                          <a-avatar class="zIndex mr-8" src="/user/av1.svg" />
                        </a-popover>
                        <a-popover trigger="hover">
                          <template slot="content">
                            <div class="fs-13 fw-400 cr-gray f-default">Maskapai {{item.maskapai}}</div>
                          </template>
                          <a-avatar class="zIndex mr-8" :src="item.logo_maskapai" />
                        </a-popover>
                        <div
                          class="ml-auto fs-13 fw-400 cr-gray f-default text-ellipsis"
                        >{{item.class_cabin}}</div>
                      </div>

                      <a-row
                        :gutter="8"
                        type="flex"
                        justify="space-between"
                        align="middle"
                        class="mt-8 mb-8"
                      >
                        <a-col :span="8" class="text-left">
                          <div class="fs-30 fw-500 cr-black text-uppercase f-default">upg</div>
                          <div class="fs-14 fw-400 cr-black text-uppercase f-default">09:00 am</div>
                        </a-col>
                        <a-col :span="8" class="text-center">
                          <div class="fs-13 fw-400 cr-gray text-capitalize f-default mb-8">Nonstop</div>
                          <div class="fs-13 fw-400 cr-gray text-capitalize f-default">6h45m</div>
                        </a-col>
                        <a-col :span="8" class="text-right">
                          <div class="fs-30 fw-500 cr-black text-uppercase f-default">jed</div>
                          <div class="fs-14 fw-400 cr-black text-uppercase f-default">15:00 pm</div>
                        </a-col>
                      </a-row>

                      <div class="d-flex align-items-end align-items-center">
                        <div class="fs-14 fw-400 cr-gray f-default text-ellipsis">Program 9 Hari</div>
                        <div
                          class="ml-auto fs-16 fw-500 cr-primary f-default text-ellipsis"
                        >Rp{{item.price}}</div>
                      </div>

                      <div class="package-description--more p-16">
                        <div class="d-flex align-items-center mb-8">
                          <div class="fs-15 fw-400 cr-black f-default text-ellipsis">Makassar</div>
                          <div
                            class="fs-15 fw-400 cr-black f-default text-ellipsis ml-auto"
                          >Round Trip</div>
                        </div>

                        <div class="d-flex align-items-center">
                          <div class="fs-13 fw-400 text-ellipsis">
                            <div class="cr-gray">Keberangkatan</div>
                            <div class="cr-black">10 September 2019</div>
                          </div>
                          <div class="fs-13 fw-400 text-ellipsis text-right ml-auto">
                            <div class="cr-gray">Kedatangan</div>
                            <div class="cr-black">19 September 2019</div>
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
import searchResultTicket from "~/components/contents/lib/search/result/ticket.vue";
import filterResultTicket from "~/components/contents/lib/filter/result/ticket.vue";
import axios from "axios";
export default {
  name: "ticketResult",
  head() {
    return {
      title:
        "Hasil Pencarian Tiket Group - Pesan Paket Umrah & Komponen Umrah Lainnya"
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
      axios.get("/dataTicket.json").then(response => {
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
    searchResultTicket,
    filterResultTicket
  }
};
// AOS.init();
</script>
