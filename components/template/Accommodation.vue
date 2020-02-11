<template>
  <a-skeleton :loading="loading" active>
    <a-card class="ant-card-package" hoverable>
      <template slot="cover">
        <flickity
          class="md-flickity__images md-flickity__images-large"
          ref="flickityImages"
          :options="itemSlider"
        >
          <div
            v-for="(foto, index) in images_hotel.slice(1, 4)"
            :key="index"
            class="item-images"
            v-lazy:background-image="foto.gambar"
          ></div>
        </flickity>
      </template>

      <nuxt-link :to="'/catalog/accommodation/detail?kode_produk=' + url" class="d-block">
        <div :style="{ padding: '24px 24px 12px 24px' }">
          <div class="d-flex align-items-center">
            <a-popover trigger="hover">
              <template slot="content">
                <div class="fs-12 fw-400 cr-gray text-uppercase">Penyedia</div>
                <div class="fs-14 fw-500 cr-black text-capitalize">{{ vendor_name }}</div>
              </template>
              <a-avatar
                v-if="vendor_logo != null"
                class="vendor-logo zIndex mr-8"
                v-lazy:background-image="vendor_logo"
              />
              <a-avatar
                v-else
                class="vendor-logo zIndex mr-8"
                v-lazy:background-image="require('~/static/brand.png')"
              />
            </a-popover>

            <div class="ml-auto">
              <a-popover trigger="hover">
                <template slot="content">
                  <div
                    class="fs-14 fw-400 cr-black text-capitalize"
                  >Hotel setaraf bintang {{ rate_hotel }}</div>
                </template>
                <a-icon
                  type="star"
                  theme="filled"
                  v-for="item in rate_hotel"
                  :key="item"
                  class="fs-14"
                  :style="{ color: '#FFD500', 'margin-left': '4px' }"
                />
              </a-popover>
            </div>
          </div>

          <div class="fs-16 cr-black text-capitalize fw-500 mt-16">{{ package_name }}</div>
        </div>

        <div class="md-card--bottom">
          <div class="md-price">
            {{ pricing | currency }}
            <span class="fs-14 fw-400 cr-black-opacity">/ {{ program }} Hari</span>
          </div>
        </div>
      </nuxt-link>
    </a-card>
  </a-skeleton>
</template>

<script>
export default {
  props: {
    package_name: String,
    images_hotel: String,
    url: String,

    vendor_name: String,
    vendor_logo: String,

    rate_hotel: Number,

    program: Number,
    pricing: Number,
    loading: Boolean
  },

  data() {
    return {
      itemSlider: {
        prevNextButtons: false,
        pageDots: true
      }
    };
  }
};
</script>
