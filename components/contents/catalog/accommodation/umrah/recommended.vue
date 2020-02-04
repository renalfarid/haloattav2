<template>
  <a-list
    :grid="{ gutter: 16, column: 3 }"
    :dataSource="lisData"
    :loading="loading"
  >
    <a-list-item slot="renderItem" slot-scope="item, index" :key="index">
      <nuxt-link
        :to="'/catalog/accommodation/detail?kode_produk=' + item.kode_produk"
        class="d-block"
      >
        <a-card class="ant-card-package">
          <template slot="cover">
            <!-- <div
              class="ant-card-cover--images"
              v-lazy:background-image="item.gambar"
            >
              <div class="ant-card-cover--overlay">
                <div class="ant-card-cover--overlay-box-radius"></div>
                <div class="ant-card-cover--overlay-text">
                  <div class="ant-card-cover--overlay-text-title fs-15 fw-500">
                    40
                  </div>
                  <div
                    class="ant-card-cover--overlay-text-subtitle fs-12 text-uppercase"
                  >
                    pax
                  </div>
                </div>
              </div>

              <div class="ant-card--overlay-block">
                <div class="ant-card--overlay-block-body">
                  <div
                    class="fs-15 fw-400 cr-black f-default text-capitalize text-ellipsis mb-8"
                  >
                    Periode
                    <span class="fw-500">{{ item.tipe }}</span> Session
                  </div>
                  <div
                    class="fs-13 fw-400 cr-black f-default text-capitalize text-ellipsis"
                  >
                    <a-icon type="calendar" class="mr-4" />
                    Periode
                    {{ moment(item.tanggal, "YYYY-MM-DD").format("LL") }}
                    -
                    {{ moment(item.tanggal, "YYYY-MM-DD").format("LL") }}
                  </div>
                </div>
              </div>
            </div> -->
          </template>

          <div class="d-flex align-items-center">
            <a-avatar
              class="vendor-logo zIndex mr-8"
              v-lazy:background-image="item.foto"
            />
            <div class="fs-14 fw-400 f-default text-ellipsis cr-gray">
              {{ item.nama_vendor }}
            </div>
            <div class="ml-auto">
              <a-rate
                :style="{ top: '-2px' }"
                class="fs-14 f-default"
                :defaultValue="4"
                disabled
              />
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
                class="fs-15 fw-500 cr-black text-capitalize text-ellipsis f-default"
              >
                {{ item.nama_hotel_mekkah }}
              </div>
              <div class="fs-13 fw-400 cr-black text-capitalize f-default">
                3 Hari Mekkah
              </div>
            </a-col>
            <a-col :span="12" class="text-right">
              <div
                class="fs-15 fw-500 cr-black text-capitalize text-ellipsis f-default"
              >
                {{ item.nama_hotel_madinah }}
              </div>
              <div class="fs-13 fw-400 cr-black text-capitalize f-default">
                4 Hari Madinah
              </div>
            </a-col>
          </a-row>

          <div class="d-flex align-items-center">
            <div class="fs-14 fw-400 cr-black f-default text-ellipsis">
              Program {{ item.days }} Hari
            </div>
            <div
              class="ml-auto fs-18 fw-500 cr-primary f-default text-ellipsis"
            >
              {{ item.harga_quad | currency }}
            </div>
          </div>
        </a-card>
      </nuxt-link>
    </a-list-item>
  </a-list>
</template>
<script>
import axios from "axios";
import moment from "moment";
export default {
  data() {
    return {
      loading: true,
      lisData: []
    };
  },
  created: function() {
    this.getdata();
  },
  methods: {
    moment,
    async getdata() {
      axios
        .get(process.env.baseUrl + "la/all", {
          params: {
            per_page: 3
          }
        })
        .then(response => {
          this.lisData = response.data.data.data;
          this.loading = false;
        });
    }
  }
};
</script>
