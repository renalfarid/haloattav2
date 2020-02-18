<template>
  <a-row :gutter="24">
    <a-col
      :xs="24"
      :sm="24"
      :md="8"
      :lg="8"
      v-for="item in lisData"
      :key="item.kode_produk"
      class="mb-16"
    >
      <nuxt-link
        :to="'/catalog/tourleader/detail?kode_produk=' + item.kode_produk"
        class="d-block"
      >
        <a-card class="ant-card-package-small">
          <div slot="cover">
            <div
              class="ant-card-cover--images"
              v-lazy:background-image="item.foto"
            >
              <div class="ant-card--overlay-block">
                <div class="ant-card--overlay-block-body">
                  <div
                    class="fs-13 fw-400 cr-black f-default text-capitalize text-ellipsis"
                  >
                    {{ item.informasi_singkat ? item.informasi_singkat : "-" }}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a-card-meta>
            <div slot="title">
              <div
                class="ant-card-meta-title--top d-flex align-items-center mb-16"
              >
                <div
                  class="ant-card-meta-title--top-left d-flex align-items-center"
                >
                  <div class="mr-8">
                    <a-popover trigger="hover">
                      <template slot="content">
                        <div class="fs-13 fw-400 cr-gray f-default">
                          Berpengalaman
                        </div>
                      </template>
                      <a-avatar
                        style="backgroundColor: #FF7C0A"
                        class="zIndex"
                        icon="safety"
                        size="small"
                      />
                    </a-popover>
                  </div>
                  <div class="mr-8">
                    <a-avatar
                      class="vendor-logo zIndex"
                      size="small"
                      v-lazy:background-image="item.foto_perusahaan"
                    />
                  </div>
                  <div class="fs-13 fw-400 cr-gray f-default text-ellipsis">
                    {{ item.nama_vendor }}
                  </div>
                </div>
              </div>
              <div class="ant-card-meta-title--package fs-15 fw-500">
                {{ item.nama_lengkap }}
              </div>
            </div>

            <div slot="description">
              <!-- <div class="fs-14 fw-400 cr-gray f-default text-ellipsis">
                <a-icon type="environment" class="mr-4" />
                <span>Kota {{ item.nama_kota }}</span>
              </div> -->

              <div
                class="ant-card-meta-description--bottom d-flex align-items-center"
              >
                <div class="ant-card-meta-description--bottom-right d-flex">
                  <div class="fs-14 fw-400 cr-black f-default text-ellipsis">
                    Program 9 Hari
                  </div>
                </div>
                <div
                  class="ant-card-meta-description--bottom-left fw-500 cr-primary text-ellipsis ml-auto"
                >
                  {{ item.harga | currency }}
                </div>
              </div>
            </div>
          </a-card-meta>
        </a-card>
      </nuxt-link>
    </a-col>
  </a-row>
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
    this.getdata();
  },
  methods: {
    async getdata() {
      axios.get(process.env.baseUrl + "tourleader/all").then(response => {
        this.lisData = response.data.data.data.slice(0, 3);
      });
    }
  }
};
</script>
