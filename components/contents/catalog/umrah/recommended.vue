<template>
  <div class="content-recomended mt-32" v-if="latests.length > 0">
    <div class="container">
      <h2 class="md-title">
        Rekomendasi Haloatta
      </h2>

      <a-row :gutter="24" class="r-wrap">
        <a-col
          :xs="24"
          :sm="12"
          :md="12"
          :lg="8"
          class="mb-16"
          v-for="latest in latests"
          :key="latest.kode_produk"
        >
          <a-skeleton :loading="loading" active>
            <a-card class="ant-card-package" hoverable>
              <template slot="cover">
                <flickity
                  class="md-flickity__images md-flickity__images-large"
                  ref="flickityImages"
                  :options="ItemSlider"
                >
                  <div
                    v-for="(hotel, index) in latest.gambar_hotel.slice(1, 4)"
                    :key="index"
                    class="item-images"
                    v-lazy:background-image="hotel.gambar"
                  ></div>
                </flickity>
              </template>

              <nuxt-link
                :to="
                  '/catalog/umrah/detail-package?kode_produk=' +
                    latest.kode_produk
                "
                class="ant-list-item--link"
              >
                <a-card-meta>
                  <div slot="title">
                    <div
                      class="ant-card-meta-title--top d-flex align-items-center"
                    >
                      <div
                        class="ant-card-meta-title--top-left f-default d-flex align-items-center"
                      >
                        <a-popover trigger="hover">
                          <template slot="content">
                            <div class="fs-12 fw-400 cr-gray text-uppercase">
                              Penyedia
                            </div>
                            <div class="fs-14 fw-500 cr-black text-capitalize">
                              {{ latest.nama_vendor }}
                            </div>
                          </template>

                          <a-avatar
                            v-if="latest.foto != null"
                            class="vendor-logo zIndex mr-8"
                            size="small"
                            v-lazy:background-image="latest.foto"
                          />

                          <a-avatar
                            v-else
                            class="vendor-logo zIndex mr-8"
                            size="small"
                            v-lazy:background-image="
                              require('~/static/brand.png')
                            "
                          />
                        </a-popover>

                        <a-popover trigger="hover">
                          <template slot="content">
                            <div class="fs-12 fw-400 cr-gray text-uppercase">
                              Maskapai
                            </div>
                            <div class="fs-14 fw-500 cr-black text-capitalize">
                              {{ latest.nama_maskapai }}
                            </div>
                          </template>
                          <a-avatar
                            size="small"
                            class="zIndex mr-8"
                            :src="latest.image"
                          />
                        </a-popover>
                      </div>

                      <div class="ant-card-meta-title--top-right ml-auto">
                        <div class="fs-14 fw-400 cr-black-opacity">
                          Program {{ latest.jumlah_hari }} Hari
                        </div>
                      </div>
                    </div>

                    <div
                      class="ant-card-meta-title--package text-capitalize fw-500 mt-16 mb-8"
                    >
                      {{ latest.nama }}
                    </div>
                  </div>

                  <div slot="description">
                    <span class="cr-black-opacity"
                      >Kota {{ latest.nama_kota }}</span
                    >
                    <span class="dots"></span>
                    <span class="cr-black-opacity">{{
                      latest.tgl_berangkat | formatDate
                    }}</span>
                  </div>
                </a-card-meta>

                <div class="md-card--bottom">
                  <div class="md-price">
                    {{ latest.harga_jual | currency }}
                  </div>
                  <div>
                    <a-icon
                      type="star"
                      theme="filled"
                      v-for="item in latest.kelas_bintang"
                      :key="item"
                      :style="{ color: '#FFD500', 'margin-left': '4px' }"
                    />
                  </div>
                </div>
              </nuxt-link>
            </a-card>
          </a-skeleton>
        </a-col>
      </a-row>

      <div class="all-package">
        <nuxt-link
          to="/catalog/umrah/all"
          class="fs-18 cr-green d-flex align-items-center"
        >
          Tampilkan semua
          <a-icon class="fs-16 ml-8" type="right" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      loading: true,
      latests: [],
      ItemSlider: {
        prevNextButtons: false,
        wrapAround: true,
        pageDots: true
      }
    };
  },

  created: function() {
    this.getLatests();
  },

  methods: {
    async getLatests() {
      axios.get(process.env.baseUrl + "paket/umroh/recomended").then(response => {
        this.latests = response.data.data.data.slice(0, 3);
        this.loading = false;
      });
    }
  },

  filters: {
    formatDate: function(value) {
      const date = new Date(value);

      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "Mei",
        "Jun",
        "Jul",
        "Agu",
        "Sep",
        "Okt",
        "Nov",
        "Des"
      ];
      const days = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"];

      const dayName = days[date.getDay()];
      const dayOfMonth = date.getDate();
      const month = months[date.getMonth()];
      const year = date.getFullYear();

      return `${dayName}, ${dayOfMonth} ${month} ${year}`;
    }
  }
};
</script>
