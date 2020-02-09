<template>
  <div class="ant-layout--results">
    <div class="ant-layout--results-space"></div>
    <div class="container">
      <div class="ant-layout--results-body">
        <div class="ant-layout--results-top mb-24">
          <div class="ant-layout--results-search">
            <a-card
              class="ant-card--results-info b-shadow b-solid b-radius"
              :bordered="false"
            >
              <div class="ant-form--search">
                <a-form
                  layout="vertical"
                  :form="form"
                  class="form-search--costume"
                  hideRequiredMark
                >
                  <a-row :gutter="16">
                    <a-col :xs="24" :sm="12" :md="12">
                      <a-form-item label="Kota Asal">
                        <div class="icon-search">
                          <img
                            class="max-width"
                            src="/icons/search/airplane.svg"
                          />
                        </div>
                        <a-select
                          showSearch
                          placeholder="Pilih Kota Asal"
                          :showArrow="false"
                          style="width: 100%"
                          size="large"
                          v-decorator="[
                            'kota_asal',
                            {
                              rules: [
                                { required: true, message: 'Harus di isi!' }
                              ]
                            }
                          ]"
                        >
                          <a-select-option value="all"
                            >Tampilkan Semua</a-select-option
                          >
                          <a-select-option
                            v-for="(item, key) in option.kota"
                            :key="key"
                            :value="item.nama_kota"
                            >{{ item.nama_kota }}</a-select-option
                          >
                        </a-select>
                      </a-form-item>
                    </a-col>

                    <a-col :xs="24" :sm="12" :md="12">
                      <a-form-item label="Program Hari">
                        <div class="icon-search">
                          <a-icon type="calendar" />
                        </div>
                        <a-select
                          showSearch
                          placeholder="Pilih Program Hari"
                          style="width: 100%"
                          :showArrow="false"
                          size="large"
                          v-decorator="[
                            'program',
                            {
                              rules: [
                                { required: true, message: 'Harus di isi!' }
                              ]
                            }
                          ]"
                        >
                          <a-select-option value="all"
                            >Semua Program Hari</a-select-option
                          >
                          <a-select-option
                            v-for="(item, key) in option.program"
                            :key="key"
                            :value="item.jumlah_hari"
                            >Program
                            {{ item.jumlah_hari }} Hari</a-select-option
                          >
                        </a-select>
                      </a-form-item>
                    </a-col>
                  </a-row>

                  <a-row :gutter="16">
                    <a-col :xs="24" :sm="12" :md="12">
                      <a-form-item label="Bulan Keberangkatan">
                        <div class="icon-search">
                          <a-icon type="calendar" />
                        </div>
                        <a-select
                          showSearch
                          placeholder="Pilih Bulan"
                          style="width: 100%"
                          :showArrow="false"
                          size="large"
                          v-decorator="[
                            'bulan_keberangkatan',
                            {
                              rules: [
                                { required: true, message: 'Harus di isi!' }
                              ]
                            }
                          ]"
                        >
                          <a-select-option value="all"
                            >Semua Bulan</a-select-option
                          >
                          <a-select-option
                            v-for="(item, key) in option.bulan"
                            :key="key"
                            :value="item.bulan_tahun"
                            >{{
                              item.bulan_tahun | formatMonth
                            }}</a-select-option
                          >
                        </a-select>
                      </a-form-item>
                    </a-col>
                    <a-col :xs="24" :sm="12" :md="12">
                      <a-button
                        @click="searchUmrah"
                        class="btn-search b-shadow b-radius"
                        :style="{ 'margin-top': '20px' }"
                        size="large"
                        block
                        >Cari Paket Umrah</a-button
                      >
                    </a-col>
                  </a-row>
                </a-form>
              </div>
            </a-card>
          </div>

          <filter-result-umrah
            :maskapai="option.maskapai"
            :bintang="option.bintang"
            :vendor="option.vendor"
          />
        </div>

        <client-only>
          <div class="ant-layout--results-list pb-16">
            <div
              v-infinite-scroll="getdata"
              :infinite-scroll-disabled="busy"
              :infinite-scroll-distance="limit"
            >
              <a-row :gutter="24" class="r-wrap">
                <a-col
                  :xs="24"
                  :sm="12"
                  :md="12"
                  :lg="8"
                  v-for="recommendation in allRecommendations"
                  :key="recommendation.kode_produk"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  class="mb-16"
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
                            v-for="(hotel,
                            index) in recommendation.gambar_hotel"
                            :key="index"
                            class="item-images"
                            v-lazy:background-image="hotel.gambar"
                          ></div>
                        </flickity>
                      </template>

                      <nuxt-link
                        :to="
                          '/catalog/umrah/detail-package?kode_produk=' +
                            recommendation.kode_produk
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
                                    <div
                                      class="fs-12 fw-400 cr-gray text-uppercase"
                                    >
                                      Penyedia
                                    </div>
                                    <div
                                      class="fs-14 fw-500 cr-black text-capitalize"
                                    >
                                      {{ recommendation.nama_vendor }}
                                    </div>
                                  </template>

                                  <a-avatar
                                    v-if="recommendation.foto != null"
                                    class="vendor-logo zIndex mr-8"
                                    size="small"
                                    v-lazy:background-image="
                                      recommendation.foto
                                    "
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
                                    <div
                                      class="fs-12 fw-400 cr-gray text-uppercase"
                                    >
                                      Maskapai
                                    </div>
                                    <div
                                      class="fs-14 fw-500 cr-black text-capitalize"
                                    >
                                      {{ recommendation.nama_maskapai }}
                                    </div>
                                  </template>
                                  <a-avatar
                                    size="small"
                                    class="zIndex mr-8"
                                    :src="recommendation.image"
                                  />
                                </a-popover>
                              </div>

                              <div
                                class="ant-card-meta-title--top-right ml-auto"
                              >
                                <div class="fs-14 fw-400 cr-black-opacity">
                                  Program {{ recommendation.jumlah_hari }} Hari
                                </div>
                              </div>
                            </div>

                            <div
                              class="ant-card-meta-title--package text-capitalize fw-500 mt-16 mb-8"
                            >
                              {{ recommendation.nama }}
                            </div>
                          </div>

                          <div slot="description">
                            <span class="cr-black-opacity"
                              >Kota {{ recommendation.nama_kota }}</span
                            >
                            <span class="dots"></span>
                            <span class="cr-black-opacity">{{
                              recommendation.tgl_berangkat | formatDate
                            }}</span>
                          </div>
                        </a-card-meta>

                        <div class="md-card--bottom">
                          <div class="md-price">
                            {{ recommendation.harga_jual | currency }}
                          </div>
                          <div>
                            <a-icon
                              type="star"
                              theme="filled"
                              v-for="item in recommendation.kelas_bintang"
                              :key="item"
                              :style="{
                                color: '#FFD500',
                                'margin-left': '4px'
                              }"
                            />
                          </div>
                        </div>
                      </nuxt-link>
                    </a-card>
                  </a-skeleton>
                </a-col>
              </a-row>
            </div>
          </div>
        </client-only>
      </div>
    </div>
  </div>
</template>
<script>
import searchResultUmrah from "@/components/contents/lib/search/result/umrah.vue";
import filterResultUmrah from "@/components/contents/lib/filter/result/umrah.vue";
import axios from "axios";
export default {
  name: "all-recommendation",

  components: {
    searchResultUmrah,
    filterResultUmrah
  },

  head() {
    return {
      title: "Semua Paket Umrah - Booking Paket Umrah & Komponen Umrah Lainnya"
    };
  },

  data() {
    return {
      form: this.$form.createForm(this),
      loading: true,
      busy: false,
      limit: 8,
      page: 0,
      allRecommendations: [],
      ItemSlider: {
        prevNextButtons: false,
        pageDots: true
      },
      option: {
        kota: "",
        program: "",
        bulan: "",
        maskapai: "",
        bintang: "",
        vendor: ""
      }
    };
  },

  created() {
    this.getOption();
    this.getdata();
  },

  methods: {
    searchUmrah() {
      this.form.validateFields((err, values) => {
        if (!err) {
          return this.$router.push({
            path: "/catalog/umrah/result",
            query: {
              kota_asal: values.kota_asal,
              bulan_keberangkatan: values.bulan_keberangkatan,
              program: values.program
            }
          });
        }
      });
    },

    getdata() {
      this.busy = true;
      axios
        .get(process.env.baseUrl + "paket/umroh/all", {
          params: {
            per_page: 6,
            page: ++this.page
          }
        })
        .then(response => {
          this.allRecommendations = this.allRecommendations.concat(response.data.data.data);
          this.loading = false;
          this.busy = false;
        });
    },

    getOption() {
      axios.get(process.env.baseUrl + "option/umrah", []).then(response => {
        let getOption = response.data.data;

        this.option.kota = getOption.kota;
        this.option.program = getOption.hari;
        this.option.bulan = getOption.bulan_keberangkatan;
        this.option.maskapai = getOption.maskapai;
        this.option.bintang = getOption.bintang;
        this.option.vendor = getOption.vendor;
      });
    }
  },

  filters: {
    formatMonth: function(value) {
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

      return `${month} ${year}`;
    },

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
