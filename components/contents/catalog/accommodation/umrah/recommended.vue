<template>
  <a-row :gutter="24">
    <a-col
      :xs="24"
      :sm="12"
      :md="12"
      :lg="8"
      v-for="(item, index) in lisData"
      :key="index"
      :style="{ 'margin-bottom': '16px' }"
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
                class="item-images"
                v-lazy:background-image="item.images_hotel"
              ></div>

              <div
                class="item-images"
                v-lazy:background-image="item.images_hotel"
              ></div>

              <div
                class="item-images"
                v-lazy:background-image="item.images_hotel"
              ></div>
            </flickity>
          </template>

          <nuxt-link
            :to="
              '/catalog/accommodation/detail?kode_produk=' + item.kode_produk
            "
            class="d-block"
          >
            <div :style="{ padding: '24px 24px 12px 24px' }">
              <div class="d-flex align-items-center">
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
                    v-if="item && item.foto"
                    class="vendor-logo zIndex mr-8"
                    v-lazy:background-image="item.foto"
                  />
                  <a-avatar
                    v-else
                    class="vendor-logo zIndex mr-8"
                    v-lazy:background-image="
                      'https://cdn4.iconfinder.com/data/icons/avatar-vol-1-3/512/4-512.png'
                    "
                  />
                </a-popover>

                <div class="ml-auto">
                  <a-popover trigger="hover">
                    <template slot="content">
                      <div class="fs-14 fw-400 cr-black text-capitalize">
                        Hotel setaraf bintang {{ item.kelas_bintang }}
                      </div>
                    </template>
                    <a-icon
                      type="star"
                      theme="filled"
                      v-for="item in item.kelas_bintang"
                      :key="item"
                      class="fs-14"
                      :style="{ color: '#FFD500', 'margin-left': '4px' }"
                    />
                  </a-popover>
                </div>
              </div>

              <div class="fs-16 cr-black text-capitalize fw-500 mt-16">
                {{ item.nama }}
              </div>
            </div>

            <div class="md-card--bottom">
              <div class="md-price">
                {{ item.harga_quad | currency }}
                <span class="fs-14 fw-400 cr-black-opacity">
                  / {{ item.days }} Hari
                </span>
              </div>
            </div>
          </nuxt-link>
        </a-card>
      </a-skeleton>
    </a-col>
  </a-row>
</template>
<script>
import axios from "axios";
import moment from "moment";
export default {
  data() {
    return {
      loading: true,
      lisData: [],
      ItemSlider: {
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
    moment,
    async getdata() {
      axios.get(process.env.baseUrl + "la/all").then(response => {
        this.lisData = response.data.data.data.slice(0, 3);
        this.loading = false;
      });
    }
  }
};
</script>
