<template>
  <div class="container">
    <div class="header-title">
      <a-divider orientation="left" class="ant-divider-title-left"
        >Umrah Favorit</a-divider
      >
      <a-row :gutter="16" class="d-none">
        <a-col :span="16">
          <h6 class="subtitle">
            Pilihan Paket Umroh favorit yang dipilih oleh customer haloatta
          </h6>
        </a-col>
      </a-row>
    </div>

    <a-row :gutter="16">
      <a-col :span="16">
        <a-card class="card-product-overlay">
          <div class="box-content" v-lazy:background-image="'/umrah/cover/cu40.jpg'">
            <div class="box-content--overlay text-center">
              <div class="txt-title fs-40 fw-500 f-default mb-8">
                Bisa Share Profit Loh!
              </div>
              <div class="txt fs-16 fw-400 f-default">
                Mau kembangkan bisnis Travel dan Jualan Komponen Umroh ? Umaroh jawabannya
              </div>
              <a-button size="large">
                <nuxt-link to="/catalog/umrah/all">Explore Paket</nuxt-link>
              </a-button>
            </div>
            <div class="gradient-bottom"></div>
          </div>
        </a-card>
      </a-col>

      <a-col :span="8" v-for="(item, index) in lisData" :key="index">
        <a-card class="ant-card-package">
          <nuxt-link
            :to="
              '/catalog/umrah/detail-package?kode_produk=' + item.kode_produk
            "
            class="ant-list-item--link"
          ></nuxt-link>
          <div slot="cover">
            <div
              class="ant-card-cover--images"
              v-lazy:background-image="item.gambar"
            >
              <div class="ant-card-cover--overlay">
                <div class="ant-card-cover--overlay-box-radius"></div>
                <div class="ant-card-cover--overlay-text">
                  <div class="ant-card-cover--overlay-text-title fs-15">
                    {{ item.sisa_seat }}
                  </div>
                  <div
                    class="ant-card-cover--overlay-text-subtitle fs-12 text-uppercase"
                  >
                    pax
                  </div>
                </div>
                <div class="ant-card-wishlist">
                  <a @click="toggleWishlist" class="fs-24 cr-gray mb-0">
                    <a-icon
                      v-if="wishlist == false"
                      theme="twoTone"
                      twoToneColor="#eb2f96"
                      type="heart"
                    />
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
                <div class="ant-card--overlay-block-body">
                  <div
                    class="fs-13 fw-400 cr-black f-default text-capitalize text-ellipsis mb-4"
                  >
                    <i class="icon-accommodation-xs mr-4"></i>
                    <span>Hotel {{ item.hotel_mekkah }} - Makkah</span>
                  </div>
                  <div
                    class="fs-13 fw-400 cr-black f-default text-capitalize text-ellipsis mb-4"
                  >
                    <i class="icon-accommodation-xs mr-4"></i>
                    <span>Hotel {{ item.hotel_madinah }} - Madinah</span>
                  </div>
                  <div
                    class="fs-13 fw-400 cr-black f-default text-capitalize text-ellipsis"
                  >
                    <a-icon type="calendar" class="mr-4" />
                    Berangkat
                    {{ moment(item.tgl_berangkat, "YYYY-MM-DD").format("ll") }}
                    -
                    {{ moment(item.tgl_berangkat, "YYYY-MM-DD").format("ll") }}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a-card-meta>
            <div slot="title">
              <div class="ant-card-meta-title--top d-flex align-items-center">
                <div
                  class="ant-card-meta-title--top-left f-default d-flex align-items-center"
                >
                  <a-popover trigger="hover">
                    <template slot="content">
                      <div class="fs-15 fw-500 cr-black">
                        {{ item.nama_vendor }}
                      </div>
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
                      src="https://cdn4.iconfinder.com/data/icons/avatar-vol-1-3/512/4-512.png"
                    />
                  </a-popover>

                  <a-popover trigger="hover">
                    <template slot="content">
                      <div class="fs-13 fw-400 cr-black f-default">
                        Maskapai {{ item.nama_maskapai }}
                      </div>
                    </template>
                    <a-avatar class="zIndex mr-8" :src="item.image" />
                  </a-popover>
                </div>
                <div class="ant-card-meta-title--top-right ml-auto">
                  <a-rate
                    class="fs-14 mb-4"
                    :defaultValue="item.kelas_bintang"
                    disabled
                  />
                </div>
              </div>
              <div class="ant-card-meta-title--package fw-500">
                {{ item.nama }}
              </div>
            </div>

            <div slot="description">
              <div class="fs-14 fw-400 cr-gray f-default text-ellipsis mt-8">
                <a-icon type="environment" class="mr-4" />
                <span>Kota {{ item.nama_kota }}</span>
              </div>
              <div
                class="ant-card-meta-description--bottom d-flex align-items-center"
              >
                <div class="ant-card-meta-description--bottom-right">
                  <div class="fs-14 fw-400 cr-black">
                    Program {{ item.jumlah_hari }} Hari
                  </div>
                </div>
                <div
                  class="ant-card-meta-description--bottom-left cr-primary ml-auto"
                >
                  <span>{{ item.harga_jual | currency }}</span>
                </div>
              </div>
            </div>
          </a-card-meta>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import axios from "axios";
import moment from "moment";
export default {
  data() {
    return {
      wishlist: false,
      lisData: []
    };
  },
  created() {
    this.getdata();
  },
  methods: {
    moment,
    toggleWishlist() {
      this.wishlist = !this.wishlist;
    },
    async getdata() {
      axios
        .get(process.env.baseUrl + "paket/umroh/recomended", {
          params: {
            per_page: 4
          }
        })
        .then(response => {
          // console.log(response.data);
          this.lisData = response.data.data.data;
          this.loading = false;
        });
    }
  }
};
</script>
