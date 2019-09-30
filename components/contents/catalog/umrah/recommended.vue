<template>
  <a-list :loading="loading" :grid="{ gutter: 16, column: 4}" :dataSource="lisData">
    <a-list-item slot="renderItem" slot-scope="item, index" :key="index">
      <a-card class="ant-card-package-small">
        <nuxt-link to="/catalog/umrah/detail-package" class="ant-list-item--link"></nuxt-link>
        <div slot="cover">
          <div class="ant-card-cover--images" v-lazy:background-image="item.gambar">
            <div class="ant-card-cover--overlay">
              <div class="ant-card-cover--overlay-box-radius"></div>
              <div class="ant-card-cover--overlay-text">
                <div class="ant-card-cover--overlay-text-title fs-15">{{item.sisa_seat}}</div>
                <div class="ant-card-cover--overlay-text-subtitle fs-12 text-uppercase">pax</div>
              </div>

              <div class="ant-card-wishlist">
                <a @click="toggleWishlist" class="fs-24 cr-gray mb-0">
                  <a-icon v-if="wishlist == false" theme="twoTone" twoToneColor="#eb2f96" type="heart" />
                  <a-icon
                    v-else-if="wishlist == true"
                    type="heart"
                    theme="filled"
                    style="color:#eb2f96"
                  />
                </a>
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
              <div class="ant-card-meta-title--top-left f-default d-flex align-items-center">
                <a-popover trigger="hover">
                  <template slot="content">
                    <div class="fs-15 fw-500 cr-black">{{item.nama}}</div>
                    <div class="fs-14 fw-400 cr-gray f-default">
                      <a-icon type="safety-certificate" theme="filled" class="cr-green mr-4" />Terverifikasi
                    </div>
                  </template>
                  <a-avatar
                    size="small"
                    class="vendor-logo zIndex mr-8"
                    v-lazy:background-image="item.foto_vendor"
                  />
                </a-popover>

                <a-popover trigger="hover">
                  <template slot="content">
                    <div class="fs-13 fw-400 cr-black f-default">Maskapai {{item.nama_maskapai}}</div>
                  </template>
                  <a-avatar class="zIndex mr-8" size="small" :src="item.image" />
                </a-popover>
              </div>
              <div class="ant-card-meta-title--top-right ml-auto">
                <a-rate class="fs-14 mb-4" :defaultValue="item.kelas_bintang" disabled />
              </div>
            </div>
            <div class="ant-card-meta-title--package text-capitalize fw-500">{{item.nama}}</div>
          </div>

          <div slot="description">
            <div class="ant-card-meta-description--bottom d-flex align-items-center">
              <div class="ant-card-meta-description--bottom-right d-flex">
                <div class="fs-14 fw-400 cr-black">Program {{item.jumlah_hari}} Hari</div>
              </div>
              <div
                class="ant-card-meta-description--bottom-left fw-500 cr-primary text-ellipsis ml-auto"
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
              <div class="cr-gray">{{moment(item.tgl_berangkat, "YYYY-MM-DD").format('ll')}}</div>
            </div>
            <div class="fs-14 fw-400 text-ellipsis text-right ml-auto">
              <div class="cr-gray">Kedatangan</div>
              <div class="cr-gray">{{moment(item.tgl_berangkat, "YYYY-MM-DD").format('ll')}}</div>
            </div>
          </div>
        </div>
      </a-card>
    </a-list-item>
  </a-list>
</template>
<script>
import axios from "axios";
import moment from "moment";
export default {
  data() {
    return {
      wishlist: false,
      loading: true,
      lisData: []
    };
  },

  created: function() {
    this.getdata();
  },

  methods: {
    moment,
    toggleWishlist() {
      this.wishlist = !this.wishlist;
    },
    async getdata() {
      axios
        .get("https://api.haloatta.com/api/paket/umroh/all", {
          params: {
            per_page: 4
          }
        })
        .then(response => {
          console.log(response.data.data.data, "ok");
          this.lisData = response.data.data.data;
          this.loading = false;
        });
    }
  }
};
</script>
