<template>
  <a-list :grid="{ gutter: 16, column: 4 }" :dataSource="lisData" :loading="loading">
    <a-list-item slot="renderItem" slot-scope="item, index" :key="index">
      <nuxt-link :to="'/catalog/equipment/detail?kode_produk='+item.kode_produk" class="d-block">
        <a-card class="ant-card-package-small">
          <div slot="cover">
            <div class="ant-card-cover--images" v-lazy:background-image="item.gambar">
              <div class="d-none ant-card-cover--overlay">
                <div class="ant-card-cover--overlay-box-radius ant-pax--insurance"></div>
                <div class="ant-card-cover--overlay-text">
                  <div class="ant-card-cover--overlay-text-title fs-15 fw-500">{{item.pax}}</div>
                  <div class="ant-card-cover--overlay-text-subtitle fs-12 text-uppercase">pax</div>
                </div>
              </div>

              <div class="ant-card--overlay-block">
                <div class="d-flex align-items-center h-100">
                  <a-button>
                    <nuxt-link
                      :to="'/catalog/equipment/detail?kode_produk='+item.kode_produk"
                    >Lihat detail</nuxt-link>
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
                    <a-avatar class="vendor-logo zIndex" v-lazy:background-image="item.foto" />
                  </div>
                  <div class="fs-13 fw-400 cr-gray f-default text-ellipsis">{{item.nama_vendor}}</div>
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
                >{{item.harga_jual | currency}}</div>
              </div>
            </div>
          </a-card-meta>

          <div class="package-description--more p-16">
            <div>
              <div class="fs-13 fw-400 text-ellipsis">
                <div class="cr-gray">Tersedia</div>
                <div class="cr-black">Perlengkapan umrah pria dan wanita</div>
              </div>
            </div>
          </div>
        </a-card>
      </nuxt-link>
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
    this.getdata();
  },
  methods: {
    async getdata() {
      axios
        .get(process.env.baseUrl + "perlengkapan/all", {
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