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
            <div :style="{ padding: '12px 24px' }">
              <div class="d-flex align-items-center">
                <a-avatar
                  class="vendor-logo zIndex mr-8"
                  v-lazy:background-image="item.foto"
                />
                <div class="fs-14 fw-400 f-default text-ellipsis cr-gray">
                  {{ item.nama_vendor }}
                </div>
                <div class="ml-auto">
                  <a-rate
                    :style="{ top: '-2px' }"
                    class="fs-14 f-default"
                    :defaultValue="4"
                    disabled
                  />
                </div>
              </div>

              <a-row
                :gutter="8"
                type="flex"
                justify="space-between"
                align="middle"
                class="mt-16 mb-8"
              >
                <a-col :span="12" class="text-left">
                  <div
                    class="fs-15 fw-500 cr-black text-capitalize text-ellipsis f-default"
                  >
                    {{ item.nama_hotel_mekkah }}
                  </div>
                  <div class="fs-13 fw-400 cr-black text-capitalize d-none">
                    3 Hari Mekkah
                  </div>
                </a-col>
                <a-col :span="12" class="text-right">
                  <div
                    class="fs-15 fw-500 cr-black text-capitalize text-ellipsis f-default"
                  >
                    {{ item.nama_hotel_madinah }}
                  </div>
                  <div class="fs-13 fw-400 cr-black text-capitalize d-none">
                    4 Hari Madinah
                  </div>
                </a-col>
              </a-row>
            </div>

            <div class="md-card--bottom">
              <div class="md-duration">Program {{ item.days }} Hari</div>
              <div class="md-price">{{ item.harga_quad | currency }}</div>
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
      axios
        .get(process.env.baseUrl + "la/all")
        .then(response => {
          this.lisData = response.data.data.data.slice(0, 3);
          this.loading = false;
        });
    }
  }
};
</script>
