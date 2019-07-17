<template>
  <div class="ant-layout--results">
    <div class="ant-layout--results-space"></div>
    <div class="container">
      <div class="ant-layout--results-body">
        <div class="ant-layout--results-top" :style="{marginBottom: '20px'}">
          <search-result-accommodation />

          <filter-result-accommodation />
        </div>

        <div class="ant-layout--results-list pb-16">
          <div class="ant-layout--results-list-label fw-400">Hasil Pencarian LA Akomodasi</div>
          <div
            v-infinite-scroll="loadMore"
            :infinite-scroll-disabled="busy"
            :infinite-scroll-distance="limit"
          >
            <a-list
              :grid="{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 3, xl: 3, xxl: 4 }"
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
                  <nuxt-link to="/accommodation/detail" class="d-block">
                    <a-card class="ant-card-package">
                      <div slot="cover">
                        <div
                          class="ant-card-cover--images"
                          :style="{ backgroundImage: `url(${item.images_package})` }"
                        >
                          <div class="ant-card-cover--overlay">
                            <div class="ant-card-cover--overlay-box-radius"></div>
                            <div class="ant-card-cover--overlay-text">
                              <div class="ant-card-cover--overlay-text-title fs-20 fw-500">75</div>
                              <div class="ant-card-cover--overlay-text-subtitle text-uppercase">
                                <span>ROOM</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="d-flex align-items-center">
                        <div class="mr-8">
                          <a-avatar :src="item.logo_vendor" size="small" />
                        </div>
                        <div class="fs-14 fw-400 cr-gray f-default text-ellipsis">{{item.vendor}}</div>
                        <div class="ml-auto">
                          <a-rate class="fs-14 f-default" :defaultValue="4" disabled />
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
                          >
                            Rayyana
                            Ajyad
                          </div>
                          <div class="fs-14 fw-400 cr-black text-capitalize f-default">3 Hari Mekkah</div>
                        </a-col>
                        <a-col :span="12" class="text-right">
                          <div
                            class="fs-16 fw-500 cr-black text-capitalize text-ellipsis f-default"
                          >
                            Pinewood
                            Hotel
                          </div>
                          <div
                            class="fs-14 fw-400 cr-black text-capitalize f-default"
                          >4 Hari Madinah</div>
                        </a-col>
                      </a-row>

                      <div class="d-flex align-items-center">
                        <div class="fs-14 fw-400 cr-gray f-default text-ellipsis">Program 9 Hari</div>
                        <div
                          class="ml-auto fs-16 fw-500 cr-primary f-default text-ellipsis"
                        >Rp{{item.price}}</div>
                      </div>

                      <div class="package-description--more p-24">
                        <div class="d-flex align-items-center mb-8">
                          <div class="fs-14 fw-400 cr-black f-default text-ellipsis">High Session</div>
                          <div
                            class="fs-14 fw-400 cr-black f-default text-ellipsis ml-auto"
                          >{{item.class_room}}</div>
                        </div>

                        <div class="d-flex align-items-center mb-16">
                          <div class="fs-14 fw-400 text-ellipsis">
                            <div class="cr-gray">Check In</div>
                            <div class="cr-black">10 September 2019</div>
                          </div>
                          <div class="fs-14 fw-400 text-ellipsis text-right ml-auto">
                            <div class="cr-gray">Check Out</div>
                            <div class="cr-black">19 September 2019</div>
                          </div>
                        </div>

                        <a-button block>
                          <nuxt-link to="/payment/order-data">Pesan</nuxt-link>
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
import searchResultAccommodation from "~/components/contents/lib/search/result/accommodation.vue";
import filterResultAccommodation from "~/components/contents/lib/filter/result/accommodation.vue";
import axios from "axios";
export default {
  name: "accommodationResult",
  head() {
    return {
      title:
        "Hasil Pencarian LA Akomodasi - Pesan Paket Umrah & Komponen Umrah Lainnya"
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
      axios.get("/dataAccommodation.json").then(response => {
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
    searchResultAccommodation,
    filterResultAccommodation
  }
};
</script>
