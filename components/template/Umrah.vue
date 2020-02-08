<template>
  <a-skeleton :loading="loading" active>
    <a-card class="ant-card-package" hoverable>
      <template slot="cover">
        <flickity
          class="md-flickity__images md-flickity__images-large"
          ref="flickityImages"
          :options="ItemSlider"
        >
          <div class="item-images" v-lazy:background-image="images"></div>
        </flickity>
      </template>

      <nuxt-link
        :to="'/catalog/umrah/detail-package?kode_produk=' + url"
        class="ant-list-item--link"
      >
        <a-card-meta>
          <div slot="title">
            <div class="ant-card-meta-title--top d-flex align-items-center">
              <div
                class="ant-card-meta-title--top-left f-default d-flex align-items-center"
              >
                <a-popover trigger="hover">
                  <template slot="content">
                    <div class="fs-12 fw-400 cr-gray text-uppercase">
                      Penyedia
                    </div>
                    <div class="fs-14 fw-500 cr-black text-capitalize">
                      {{ vendor_name }}
                    </div>
                  </template>

                  <a-avatar
                    v-if="vendor_logo != null"
                    class="vendor-logo zIndex mr-8"
                    size="small"
                    v-lazy:background-image="vendor_logo"
                  />

                  <a-avatar
                    v-else
                    class="vendor-logo zIndex mr-8"
                    size="small"
                    v-lazy:background-image="require('~/static/brand.png')"
                  />
                </a-popover>

                <a-popover trigger="hover">
                  <template slot="content">
                    <div class="fs-12 fw-400 cr-gray text-uppercase">
                      Maskapai
                    </div>
                    <div class="fs-14 fw-500 cr-black text-capitalize">
                      {{ maskapai_name }}
                    </div>
                  </template>
                  <a-avatar
                    size="small"
                    class="zIndex mr-8"
                    :src="maskapai_logo"
                  />
                </a-popover>
              </div>

              <div class="ant-card-meta-title--top-right ml-auto">
                <div class="fs-14 fw-400 cr-black-opacity">
                  Program {{ program }} Hari
                </div>
              </div>
            </div>

            <div
              class="ant-card-meta-title--package text-capitalize fw-500 mt-16 mb-8"
            >
              {{ package_name }}
            </div>
          </div>

          <div slot="description">
            <span class="cr-black-opacity">Kota {{ city }}</span>
            <span class="dots"></span>
            <span class="cr-black-opacity">{{ departure | formatDate }}</span>
          </div>
        </a-card-meta>

        <div class="md-card--bottom">
          <div class="md-price">{{ pricing | currency }}</div>
          <div>
            <a-icon
              type="star"
              theme="filled"
              v-for="item in rate_hotel"
              :key="item"
              :style="{ color: '#FFD500', 'margin-left': '4px' }"
            />
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
    images: String,
    url: String,

    departure: String,
    city: String,

    vendor_name: String,
    vendor_logo: String,

    maskapai_name: String,
    maskapai_logo: String,

    rate_hotel: Number,

    program: Number,
    pricing: Number,
    loading: Boolean
  },

  data() {
    return {
      ItemSlider: {
        prevNextButtons: false,
        pageDots: true
      }
    };
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
