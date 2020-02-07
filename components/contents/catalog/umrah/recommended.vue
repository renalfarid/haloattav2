<template>
  <div class="content-recomended" v-if="lisData.length > 0">
    <client-only>
      <div class="container">
        <div class="header-title">
          <a-divider orientation="left" class="ant-divider-title-left"
            >Rekomendasi Haloatta</a-divider
          >
        </div>

        <a-row :gutter="16">
          <a-col
            :xs="24"
            :sm="12"
            :md="12"
            :lg="6"
            v-for="(item, index) in lisData"
            :key="index"
            :style="{ 'margin-bottom': '16px' }"
          >
            <a-skeleton :loading="loading" active />
            <a-card v-if="!loading" class="ant-card-package-small" hoverable>
              <template slot="cover">
                <flickity
                  class="md-flickity__images"
                  ref="flickityImages"
                  :options="ItemSlider"
                >
                  <div
                    class="item-images"
                    v-lazy:background-image="item.gambar"
                  ></div>

                  <div
                    class="item-images"
                    v-lazy:background-image="item.gambar"
                  ></div>

                  <div
                    class="item-images"
                    v-lazy:background-image="item.gambar"
                  ></div>
                </flickity>
              </template>

              <nuxt-link
                :to="
                  '/catalog/umrah/detail-package?kode_produk=' +
                    item.kode_produk
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
                              {{ item.nama_vendor }}
                            </div>
                          </template>
                          <a-avatar
                            v-if="item && item.foto_vendor"
                            size="small"
                            class="vendor-logo zIndex mr-8"
                            v-lazy:background-image="item.foto_vendor"
                          />
                          <a-avatar
                            v-else
                            size="small"
                            class="vendor-logo zIndex mr-8"
                            v-lazy:background-image="
                              'https://cdn4.iconfinder.com/data/icons/avatar-vol-1-3/512/4-512.png'
                            "
                          />
                        </a-popover>

                        <a-popover trigger="hover">
                          <template slot="content">
                            <div class="fs-12 fw-400 cr-gray text-uppercase">
                              Maskapai
                            </div>
                            <div class="fs-14 fw-400 cr-black text-capitalize">
                              {{ item.nama_maskapai }}
                            </div>
                          </template>
                          <a-avatar
                            class="zIndex mr-8"
                            size="small"
                            :src="item.image"
                          />
                        </a-popover>
                      </div>

                      <div class="ant-card-meta-title--top-right ml-auto">
                        <div class="fs-12 fw-400 cr-black-opacity">
                          Program {{ item.jumlah_hari }} Hari
                        </div>
                      </div>
                    </div>

                    <div
                      class="ant-card-meta-title--package text-capitalize fw-500 mt-16"
                    >
                      {{ item.nama }}
                    </div>
                  </div>

                  <div slot="description">
                    <span class="fs-12 fw-400 cr-black-opacity">Kota {{ item.nama_kota }}</span>
                    <span class="dots"></span>
                    <span class="fs-12 fw-400 cr-black-opacity">{{
                      item.tgl_berangkat | formatDate
                    }}</span>
                  </div>
                </a-card-meta>

                <div class="md-card--bottom">
                  <div class="fw-600 md-price">{{ item.harga_jual | currency }}</div>
                  <div>
                    <a-icon
                      type="star"
                      theme="filled"
                      v-for="item in item.kelas_bintang"
                      :key="item"
                      class="fs-12"
                      :style="{ color: '#FFD500', 'margin-left': '4px' }"
                    />
                  </div>
                </div>
              </nuxt-link>
            </a-card>
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
    </client-only>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      loading: true,
      lisData: [],

      ItemSlider: {
        groupCells: true,
        prevNextButtons: false,
        pageDots: true,
        contain: true
      }
    };
  },

  created: function() {
    this.getdata();
  },

  methods: {
    async getdata() {
      axios
        .get("https://api.haloatta.com/api/paket/umroh/all")
        .then(response => {
          this.lisData = response.data.data.data.slice(3, 8);
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
