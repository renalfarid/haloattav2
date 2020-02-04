<template>
  <div class="ant-layout--results">
    <div class="ant-layout--results-space"></div>
    <div class="container">
      <div class="ant-layout--results-body">
        <div class="ant-layout--results-top" :style="{ marginBottom: '20px' }">
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
                    <a-col :span="12">
                      <a-form-item label="Kota Asal" hasFeedback>
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
                            'cityStart',
                            {
                              rules: [
                                { required: true, message: 'Harus di isi!' }
                              ]
                            }
                          ]"
                        >
                          <a-select-option value="All"
                            >Tampilkan Semua</a-select-option
                          >
                          <a-select-option value="Makassar"
                            >Makassar</a-select-option
                          >
                          <a-select-option value="Jakarta"
                            >Jakarta</a-select-option
                          >
                          <a-select-option value="Bandung"
                            >Bandung</a-select-option
                          >
                        </a-select>
                      </a-form-item>
                    </a-col>

                    <a-col :span="12">
                      <a-form-item label="Program Hari" hasFeedback>
                        <div class="icon-search">
                          <a-icon type="calendar" />
                        </div>
                        <a-select
                          showSearch
                          defaultValue="Program 9 Hari"
                          placeholder="Pilih Program Hari"
                          optionFilterProp="children"
                          style="width: 100%"
                          :showArrow="false"
                          @focus="handleFocus"
                          @blur="handleBlur"
                          @change="handleChange"
                          :filterOption="filterOption"
                          size="large"
                        >
                          <a-select-option value="All"
                            >Tampilkan Semua</a-select-option
                          >
                          <a-select-option value="Program 9 Hari"
                            >Program 9 Hari</a-select-option
                          >
                          <a-select-option value="Program 10 Hari"
                            >Program 10 Hari</a-select-option
                          >
                          <a-select-option value="Program 11 Hari"
                            >Program 11 Hari</a-select-option
                          >
                        </a-select>
                      </a-form-item>
                    </a-col>
                  </a-row>

                  <a-row :gutter="16">
                    <a-col :span="12">
                      <a-form-item label="Bulan Keberangkatan" hasFeedback>
                        <div class="icon-search">
                          <a-icon type="calendar" />
                        </div>
                        <a-select
                          showSearch
                          defaultValue="September 2019"
                          placeholder="Pilih Bulan Keberangkatan"
                          optionFilterProp="children"
                          style="width: 100%"
                          :showArrow="false"
                          @focus="handleFocus"
                          @blur="handleBlur"
                          @change="handleChange"
                          :filterOption="filterOption"
                          size="large"
                        >
                          <a-select-option value="All"
                            >Tampilkan Semua</a-select-option
                          >
                          <a-select-option value="September 2019"
                            >September 2019</a-select-option
                          >
                          <a-select-option value="November 2019"
                            >November 2019</a-select-option
                          >
                          <a-select-option value="Desember 2019"
                            >Desember 2019</a-select-option
                          >
                        </a-select>
                      </a-form-item>
                    </a-col>

                    <a-col :span="12">
                      <a-form-item label="Tanggal Keberangkatan" hasFeedback>
                        <div class="icon-search">
                          <a-icon type="calendar" />
                        </div>
                        <a-select
                          showSearch
                          defaultValue="all"
                          placeholder="Pilih Tanggal"
                          optionFilterProp="children"
                          style="width: 100%"
                          :showArrow="false"
                          @focus="handleFocus"
                          @blur="handleBlur"
                          @change="handleChange"
                          :filterOption="filterOption"
                          size="large"
                        >
                          <a-select-option value="all"
                            >Tampilkan Semua</a-select-option
                          >
                          <a-select-option value="1">1</a-select-option>
                          <a-select-option value="2">2</a-select-option>
                          <a-select-option value="3">3</a-select-option>
                        </a-select>
                      </a-form-item>
                    </a-col>
                  </a-row>

                  <a-row :gutter="16" type="flex" justify="end">
                    <a-col :span="8">
                      <a-button
                        @click="searchUmrah"
                        class="btn-search b-shadow b-radius"
                        size="large"
                        block
                        >Cari Umrah</a-button
                      >
                    </a-col>
                  </a-row>
                </a-form>
              </div>
            </a-card>
          </div>

          <filter-result-umrah />
        </div>
        <client-only>
          <div class="ant-layout--results-list pb-16">
            <div
              v-infinite-scroll="getdata"
              :infinite-scroll-disabled="busy"
              :infinite-scroll-distance="limit"
            >
              <a-row :gutter="24">
                <a-col
                  :xs="24"
                  :sm="12"
                  :md="12"
                  :lg="8"
                  v-for="(item, index) in data"
                  :key="index"
                  data-aos="fade-up"
                  data-aos-duration="1200"
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
                          <template slot="title">
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
                                      {{ item.nama_vendor }}
                                    </div>
                                  </template>
                                  <a-avatar
                                    class="vendor-logo zIndex mr-8"
                                    v-lazy:background-image="item.foto_vendor"
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
                                      {{ item.nama_maskapai }}
                                    </div>
                                  </template>
                                  <a-avatar
                                    class="zIndex mr-8"
                                    :src="item.image"
                                  />
                                </a-popover>
                              </div>
                              <div
                                class="ant-card-meta-title--top-right ml-auto"
                              >
                                <a-rate
                                  class="fs-14 mb-4"
                                  :defaultValue="3"
                                  disabled
                                />
                              </div>
                            </div>
                            <div
                              class="ant-card-meta-title--package text-capitalize mt-16 mb-8 fw-500 text-capitalize"
                            >
                              {{ item.nama }}
                            </div>
                          </template>

                          <template slot="description">
                            <a-row :gutter="8">
                              <a-col :span="12">
                                <a-popover trigger="hover">
                                  <template slot="content">
                                    <div
                                      class="fs-12 fw-400 cr-gray text-uppercase"
                                    >
                                      Berangkat Dari Kota
                                    </div>
                                    <div
                                      class="fs-14 fw-400 cr-black text-capitalize"
                                    >
                                      {{ item.nama_kota }}
                                    </div>
                                  </template>
                                  <a-icon
                                    type="environment"
                                    theme="filled"
                                    class="mr-4"
                                    :style="{ opacity: '.5' }"
                                  />
                                  <span class="cr-black">{{
                                    item.nama_kota
                                  }}</span>
                                </a-popover>
                              </a-col>

                              <a-col :span="12" class="text-right">
                                <a-popover trigger="hover">
                                  <template slot="content">
                                    <div
                                      class="fs-12 fw-400 cr-gray text-uppercase"
                                    >
                                      Tanggal Keberangkatan
                                    </div>
                                    <div
                                      class="fs-14 fw-400 cr-black text-capitalize"
                                    >
                                      {{
                                        moment(
                                          item.tgl_berangkat,
                                          "YYYY-MM-DD"
                                        ).format("LL")
                                      }}
                                    </div>
                                  </template>
                                  <a-icon
                                    type="calendar"
                                    theme="filled"
                                    class="mr-4"
                                    :style="{ opacity: '.5' }"
                                  />
                                  <span class="cr-black">{{
                                    moment(
                                      item.tgl_berangkat,
                                      "YYYY-MM-DD"
                                    ).format("ll")
                                  }}</span>
                                </a-popover>
                              </a-col>
                            </a-row>
                          </template>
                        </a-card-meta>

                        <div class="md-card--bottom">
                          <div class="md-duration">
                            Program {{ item.jumlah_hari }} Hari
                          </div>
                          <div class="md-price">
                            {{ item.harga_jual | currency }}
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
import searchResultUmrah from "~/components/contents/lib/search/result/umrah.vue";
import filterResultUmrah from "~/components/contents/lib/filter/result/umrah.vue";
import moment from "moment";
import axios from "axios";
export default {
  name: "umrahAll",
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
      data: [],
      ItemSlider: {
        groupCells: true,
        prevNextButtons: true,
        pageDots: false,
        contain: true
      }
    };
  },
  created() {
    this.getdata();
  },
  methods: {
    moment,
    handleChange(value) {},
    handleBlur() {},
    handleFocus() {},
    filterOption(input, option) {
      return (
        option.componentOptions.children[0].text
          .toLowerCase()
          .indexOf(input.toLowerCase()) >= 0
      );
    },
    searchUmrah() {
      this.form.validateFields(err => {
        if (!err) {
          return this.$router.push({ path: "/catalog/umrah/result" });
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
          // console.log(response.data.data.data);
          this.data = this.data.concat(response.data.data.data);
          this.loading = false;
          this.busy = false;
        });
    }
  },
  components: {
    searchResultUmrah,
    filterResultUmrah
  }
};
</script>
