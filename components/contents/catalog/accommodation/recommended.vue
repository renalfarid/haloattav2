<template>
  <a-list :grid="{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 4, xl: 4, xxl: 4 }" :dataSource="lisData">
    <a-list-item slot="renderItem" slot-scope="item, index" :key="index">
      <a-skeleton :loading="loading" active>
        <nuxt-link to="/catalog/accommodation/detail" class="d-block">
          <a-card class="ant-card-package-small">
            <div slot="cover">
              <div
                class="ant-card-cover--images"
                :style="{ backgroundImage: `url(${item.gambar})` }"
              >
                <div class="ant-card-cover--overlay">
                  <div class="ant-card-cover--overlay-box-radius"></div>
                  <div class="ant-card-cover--overlay-text">
                    <div class="ant-card-cover--overlay-text-title fs-15 fw-500">75</div>
                    <div class="ant-card-cover--overlay-text-subtitle text-uppercase">pax</div>
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
                  :src="item.foto != '' ? item.foto : 'https://tes.umaroh.com/file/mitra/perusahaan/CMS-190731868542424-ATT-539.jpg'"
                />
              </div>
              <div class="fs-13 fw-400 cr-gray f-default text-ellipsis">{{item.vendor}}</div>
              <div class="ml-auto">
                <a-rate class="fs-14 f-default" :defaultValue="4" disabled/>
              </div>
            </div>

            <a-row :gutter="8" type="flex" justify="space-between" align="middle" class="mt-8 mb-8">
              <a-col :span="12" class="text-left">
                <div
                  class="fs-15 fw-500 cr-black text-capitalize text-ellipsis f-default"
                >{{item.nama_hotel_mekkah}}</div>
                <div class="fs-13 fw-400 cr-black text-capitalize f-default">3 Hari Mekkah</div>
              </a-col>
              <a-col :span="12" class="text-right">
                <div
                  class="fs-15 fw-500 cr-black text-capitalize text-ellipsis f-default"
                >{{item.nama_hotel_madinah}}</div>
                <div class="fs-13 fw-400 cr-black text-capitalize f-default">4 Hari Madinah</div>
              </a-col>
            </a-row>

            <div class="d-flex align-items-center">
              <div class="fs-13 fw-400 cr-gray f-default text-ellipsis">Program {{item.days}} Hari</div>
              <div
                class="ml-auto fs-16 fw-500 cr-primary f-default text-ellipsis"
              >{{item.harga_quad | currency}}</div>
            </div>

            <div class="package-description--more p-16">
              <div class="d-flex align-items-center mb-8">
                <div class="fs-15 fw-400 cr-black f-default text-ellipsis">{{item.tipe}} Session</div>
                <div
                  class="fs-15 fw-400 cr-black f-default text-ellipsis ml-auto"
                >{{item.class_room}}</div>
              </div>

              <div class="d-flex align-items-center mb-16">
                <div class="fs-13 fw-400 text-ellipsis">
                  <div class="cr-gray">Check In</div>
                  <div class="cr-black">{{item.tanggal}}</div>
                </div>
                <div class="fs-13 fw-400 text-ellipsis text-right ml-auto">
                  <div class="cr-gray">Check Out</div>
                  <div class="cr-black">19 September 2019</div>
                </div>
              </div>

              <a-button block>
                <nuxt-link to="/catalog/accommodation/order-review">Pesan</nuxt-link>
              </a-button>
            </div>
          </a-card>
        </nuxt-link>
      </a-skeleton>
    </a-list-item>
  </a-list>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      loading: true,
      lisData: []
    };
  },
  created: function() {
    // get todo items and start listening to events once component is created
    this.getdata();
  },
  methods: {
    getdata() {
      axios
        .get("https://api.haloatta.com/api/la/all", {
          params: {
            per_page: 4
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