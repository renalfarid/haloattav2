<template>
  <a-list :grid="{ gutter: 16, xs: 4, sm: 4, md: 4, lg: 4, xl: 4, xxl: 4 }" :dataSource="lisData">
    <a-list-item slot="renderItem" slot-scope="item, index" :key="index">
      <a-skeleton :loading="loading" active>
        <a-card class="ant-card-package-small">
          <nuxt-link to="/catalog/umrah/detail-package" class="ant-list-item--link"></nuxt-link>
          <div slot="cover">
            <div class="ant-card-cover--images" :style="{ backgroundImage: `url(${item.gambar})` }">
              <div class="ant-card-cover--overlay">
                <div class="ant-card-cover--overlay-box-radius"></div>
                <div class="ant-card-cover--overlay-text">
                  <div class="ant-card-cover--overlay-text-title">sisa</div>
                  <div class="ant-card-cover--overlay-text-subtitle">
                    <span>{{item.sisa_seat}}</span> pax
                  </div>
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
                        <a-icon type="safety-certificate" theme="filled" class="cr-green mr-4"/>Terverifikasi
                      </div>
                    </template>
                    <a-avatar class="vendor-logo zIndex mr-8" :style="{ backgroundImage: `url(${item.foto_vendor})` }" />
                  </a-popover>

                  <a-popover trigger="hover">
                    <template slot="content">
                      <div class="fs-13 fw-400 cr-black f-default">Maskapai Garuda Indonesia</div>
                    </template>
                    <a-avatar class="zIndex mr-8" :src="item.foto_maskapai"/>
                  </a-popover>

                  <a-popover trigger="hover">
                    <template slot="content">
                      <a-rate class="fs-14 mb-4" :defaultValue="3" disabled/>
                      <div
                        class="fs-13 fw-400 cr-black f-default mb-4"
                      >Mekkah : {{item.hotel_mekkah}}</div>
                      <div class="fs-13 fw-400 cr-black f-default">Madinah : {{item.hotel_madinah}}</div>
                    </template>
                    <a-avatar
                      class="zIndex mr-8"
                      size="small"
                      style="backgroundColor: rgba(15, 172, 243, .1);"
                      src="/icons/search/tabs/color/accommodation.svg"
                    />
                  </a-popover>
                </div>
                <div
                  class="ant-card-meta-title--top-right ml-auto fs-14 fw-400 cr-black"
                >Program {{item.jumlah_hari}} Hari</div>
              </div>
              <div class="ant-card-meta-title--package text-capitalize fw-500">{{item.nama}}</div>
            </div>

            <div slot="description">
              <div class="ant-card-meta-description--bottom d-flex align-items-center">
                <div class="ant-card-meta-description--bottom-right d-flex">
                  <div class="fs-14 fw-400 cr-gray">
                    Terjual
                    <strong>{{item.seat - item.sisa_seat}}</strong> Pax
                  </div>
                </div>
                <div
                  class="ant-card-meta-description--bottom-left fw-500 cr-primary text-ellipsis ml-auto"
                >{{item.harga_jual | currency}}</div>
              </div>
            </div>
          </a-card-meta>
          <div class="package-description--more p-16">
            <div class="fs-15 fw-400 cr-black f-default text-ellipsis mb-8">
              <span>Keberangkatan {{item.nama_kota}}</span>
            </div>

            <div class="d-flex align-items-center mb-16">
              <div class="fs-14 fw-400 text-ellipsis">
                <div class="cr-gray">Keberangkatan</div>
                <div class="cr-black">{{item.tgl_berangkat}}</div>
              </div>
              <div class="fs-14 fw-400 text-ellipsis text-right ml-auto">
                <div class="cr-gray">Kedatangan</div>
                <div class="cr-black">19 September 2019</div>
              </div>
            </div>

            <a-button block>
              <nuxt-link to="/catalog/umrah/order-review">Pesan</nuxt-link>
            </a-button>
          </div>
        </a-card>
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
        .get("https://api.haloatta.com/api/paket/umroh/all")
        .then(response => {
          console.log(response.data.data.data, "ok");
          this.lisData = response.data.data.data;
          this.loading = false;
        });
    }
  }
};
</script>
