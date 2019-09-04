<template>
  <div class="container">
    <div class="header-title">
      <a-divider orientation="left" class="ant-divider-title-left">Rekomendasi Untuk Kamu</a-divider>
      <a-row :gutter="16">
        <a-col :span="16">
          <h6 class="subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Distinctio hic in sint reiciendis libero necessitatibus quos cumque ipsum ratione
          </h6>
        </a-col>
      </a-row>
    </div>

    <a-row :gutter="16">
      <a-col :span="6" v-for="(item, index) in lisData" :key="index">
        <a-card class="ant-card-package-small">
          <nuxt-link to="/catalog/umrah/detail-package" class="ant-list-item--link"></nuxt-link>
          <div slot="cover">
            <div class="ant-card-cover--images" :style="{ backgroundImage: `url(${item.gambar})` }">
              <div class="ant-card-cover--overlay">
                <div class="ant-card-cover--overlay-box-radius"></div>
                <div class="ant-card-cover--overlay-text">
                  <div class="ant-card-cover--overlay-text-title fs-15">{{item.sisa_seat}}</div>
                  <div class="ant-card-cover--overlay-text-subtitle fs-12 text-uppercase">pax</div>
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
            <div slot="title" class="mb-0">
              <div class="ant-card-meta-title--top d-flex align-items-center">
                <div class="ant-card-meta-title--top-left">
                  <a-popover trigger="hover">
                    <template slot="content">
                      <div class="fs-15 fw-500 cr-black">{{item.nama}}</div>
                      <div class="fs-14 fw-400 cr-gray f-default">
                        <a-icon type="safety-certificate" theme="filled" class="cr-green mr-4"/>Terverifikasi
                      </div>
                    </template>
                    <a-avatar class="zIndex mr-8" :src="item.foto_vendor"/>
                  </a-popover>
                  <a-popover trigger="hover">
                    <template slot="content">
                      <div class="fs-14 fw-400 cr-gray f-default">Maskapai {{item.nama_maskapai}}</div>
                    </template>
                    <a-avatar class="zIndex mr-8" size="small" :src="item.image"/>
                  </a-popover>
                  <a-popover trigger="hover">
                    <template slot="content">
                      <a-rate class="fs-15 mb-4" :defaultValue="3" disabled/>
                      <div
                        class="fs-14 fw-400 cr-gray f-default mb-4"
                      >Mekkah : {{item.hotel_mekkah}}</div>
                      <div class="fs-14 fw-400 cr-gray f-default">Madinah : {{item.hotel_madinah}}</div>
                    </template>
                    <a-avatar
                      class="zIndex mr-8"
                      size="small"
                      style="backgroundColor: rgba(15, 172, 243, .1)"
                      src="/icons/search/tabs/color/accommodation.svg"
                    />
                  </a-popover>
                </div>
                <div class="ant-card-meta-title--top-right ml-auto fs-14 fw-400 cr-black">
                  <span>Program {{item.jumlah_hari}} Hari</span>
                </div>
              </div>
              <div class="ant-card-meta-title--package text-capitalize fw-500">{{item.nama}}</div>
            </div>

            <div slot="description">
              <div class="ant-card-meta-description--bottom d-flex align-items-center">
                <div class="ant-card-meta-description--bottom-right d-flex text-ellipsis">
                  <div class="fs-14 fw-400 cr-gray">
                    Terjual
                    <strong>{{item.seat - item.sisa_seat}}</strong> Pax
                  </div>
                </div>
                <div
                  class="ant-card-meta-description--bottom-left fw-500 cr-primary text-ellipsis ml-auto"
                >
                  <span>{{item.harga_jual | currency}}</span>
                </div>
              </div>
            </div>
          </a-card-meta>
          <div class="package-description--more p-16">
            <div class="fs-15 fw-400 cr-black f-default text-ellipsis mb-8">
              <span>Keberangkatan {{item.nama_kota}}</span>
            </div>

            <div class="d-flex align-items-center">
              <div class="fs-14 fw-400 text-ellipsis">
                <div class="cr-gray">Keberangkatan</div>
                <div class="cr-black">{{item.tgl_berangkat}}</div>
              </div>
              <div class="fs-14 fw-400 text-ellipsis text-right ml-auto">
                <div class="cr-gray">Kedatangan</div>
                <div class="cr-black">19 September 2019</div>
              </div>
            </div>
          </div>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      lisData: []
    };
  },
  created: function() {
    // get todo items and start listening to events once component is created
    this.getdata();
  },
  methods: {
    async getdata() {
      axios
        .get("https://api.haloatta.com/api/paket/umroh/recomended", {
          params: {
            per_page: 4
          }
        })
        .then(response => {
          console.log(response.data.data.data, "ok");
          this.lisData = response.data.data.data;
        });
    }
  }
};
</script>
