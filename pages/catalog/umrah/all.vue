<template>
  <div class="ant-layout--results">
    <div class="ant-layout--results-space"></div>
    <div class="container">
      <div class="ant-layout--results-body">
        <div class="ant-layout--results-top" :style="{marginBottom: '20px'}">
          <div class="ant-layout--results-search">
            <a-card class="ant-card--results-info b-shadow b-solid b-radius" :bordered="false">
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
                          <img class="max-width" src="/icons/search/airplane.svg" />
                        </div>
                        <a-select
                          showSearch
                          placeholder="Pilih Kota Asal"
                          :showArrow="false"
                          style="width: 100%"
                          size="large"
                          v-decorator="['cityStart',{rules: [{ required: true, message: 'Harus di isi!' }]}]"
                        >
                          <a-select-option value="All">Tampilkan Semua</a-select-option>
                          <a-select-option value="Makassar">Makassar</a-select-option>
                          <a-select-option value="Jakarta">Jakarta</a-select-option>
                          <a-select-option value="Bandung">Bandung</a-select-option>
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
                          <a-select-option value="All">Tampilkan Semua</a-select-option>
                          <a-select-option value="Program 9 Hari">Program 9 Hari</a-select-option>
                          <a-select-option value="Program 10 Hari">Program 10 Hari</a-select-option>
                          <a-select-option value="Program 11 Hari">Program 11 Hari</a-select-option>
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
                          <a-select-option value="All">Tampilkan Semua</a-select-option>
                          <a-select-option value="September 2019">September 2019</a-select-option>
                          <a-select-option value="November 2019">November 2019</a-select-option>
                          <a-select-option value="Desember 2019">Desember 2019</a-select-option>
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
                          <a-select-option value="all">Tampilkan Semua</a-select-option>
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
                      >Cari Umrah</a-button>
                    </a-col>
                  </a-row>
                </a-form>
              </div>
            </a-card>
          </div>

          <filter-result-umrah />
        </div>

        <client-only>
          <a-card>
            <calendar
              class="event-calendar"
              :value="value"
              :disabled-days-of-week="disabled"
              :format="format"
              :clear-button="clear"
              :placeholder="placeholder"
              :pane="2"
              :has-input="false"
              :on-day-click="onDayClick3"
              :change-pane="changePane"
            >
              <div class="event" v-for="(evt, index) in events" :key="index" :slot="evt.date">
                ${{evt.content}}
                <i :class="{low : evt.low}" v-if="evt.low">↓</i>
              </div>
            </calendar>
            <p>{{date3}}</p>
          </a-card>
        </client-only>

        <div class="ant-layout--results-list pb-16">
          <div
            v-infinite-scroll="getdata"
            :infinite-scroll-disabled="busy"
            :infinite-scroll-distance="limit"
          >
            <a-list :grid="{ gutter: 16, column: 3 }" :dataSource="data">
              <a-list-item
                slot="renderItem"
                slot-scope="item, index"
                :key="index"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <a-skeleton :loading="loading" active>
                  <a-card class="ant-card-package">
                    <nuxt-link to="/catalog/umrah/detail-package" class="ant-list-item--link"></nuxt-link>
                    <div slot="cover">
                      <div class="ant-card-cover--images" v-lazy:background-image="item.gambar">
                        <div class="ant-card-cover--overlay">
                          <div class="ant-card-cover--overlay-box-radius"></div>
                          <div class="ant-card-cover--overlay-text">
                            <div
                              class="ant-card-cover--overlay-text-title fs-15 fw-500"
                            >{{item.sisa_seat}}</div>
                            <div
                              class="ant-card-cover--overlay-text-subtitle fs-12 text-uppercase"
                            >pax</div>
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
                          <div class="d-flex align-items-center h-100">
                            <a-button>
                              <nuxt-link to="/catalog/umrah/detail-package">Lihat detail</nuxt-link>
                            </a-button>
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
                                <div class="fs-15 fw-500 cr-black">{{item.nama}}</div>
                                <div class="fs-14 fw-400 cr-gray f-default">
                                  <a-icon
                                    type="safety-certificate"
                                    theme="filled"
                                    class="cr-green mr-4"
                                  />Terverifikasi
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
                                  class="fs-13 fw-400 cr-black f-default"
                                >Maskapai {{item.nama_maskapai}}</div>
                              </template>
                              <a-avatar size="small" class="zIndex mr-8" :src="item.image" />
                            </a-popover>
                          </div>
                          <div class="ant-card-meta-title--top-right ml-auto">
                            <a-rate class="fs-14 mb-4" :defaultValue="3" disabled />
                          </div>
                        </div>
                        <div
                          class="ant-card-meta-title--package text-capitalize fw-500"
                        >{{item.nama}}</div>
                      </div>

                      <div slot="description">
                        <div class="ant-card-meta-description--bottom d-flex align-items-center">
                          <div class="ant-card-meta-description--bottom-right d-flex">
                            <div class="fs-14 fw-400 cr-black">Program {{item.jumlah_hari}} Hari</div>
                          </div>
                          <div
                            class="ant-card-meta-description--bottom-left cr-primary ml-auto"
                          >{{item.harga_jual | currency}}</div>
                        </div>
                      </div>
                    </a-card-meta>
                    <div class="package-description--more p-16">
                      <div class="mb-8">
                        <div>
                          <div class="fs-14 fw-500 cr-black f-default text-ellipsis">
                            <span>Informasi Hotel</span>
                          </div>
                          <div class="fs-14 fw-400 cr-gray f-default text-capitalize text-ellipsis">
                            <span>Makkah : {{item.hotel_mekkah}}Rayyana Ajyad</span>
                          </div>
                          <div class="fs-14 fw-400 cr-gray f-default text-capitalize text-ellipsis">
                            <span>Madinah : {{item.hotel_madinah}}</span>
                          </div>
                        </div>
                      </div>

                      <div class="mb-8">
                        <div class="fs-14 fw-500 cr-black f-default text-ellipsis">
                          <span>Kota Keberangkatan</span>
                        </div>
                        <div class="fs-15 fw-400 cr-gray f-default text-ellipsis">
                          <span>{{item.nama_kota}}</span>
                        </div>
                      </div>

                      <div class="fs-14 fw-500 cr-black f-default text-ellipsis">
                        <span>Tanggal Keberangkatan</span>
                      </div>
                      <div class="d-flex align-items-center">
                        <div class="fs-14 fw-400 text-ellipsis">
                          <div class="cr-gray">Keberangkatan</div>
                          <div
                            class="cr-gray"
                          >{{moment(item.tgl_berangkat, "YYYY-MM-DD").format('ll')}}</div>
                        </div>
                        <div class="fs-14 fw-400 text-ellipsis text-right ml-auto">
                          <div class="cr-gray">Kedatangan</div>
                          <div
                            class="cr-gray"
                          >{{moment(item.tgl_berangkat, "YYYY-MM-DD").format('ll')}}</div>
                        </div>
                      </div>
                    </div>
                  </a-card>
                </a-skeleton>
              </a-list-item>
            </a-list>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import searchResultUmrah from "~/components/contents/lib/search/result/umrah.vue";
import filterResultUmrah from "~/components/contents/lib/filter/result/umrah.vue";
import Calendar from "~/components/template/calendar.vue";
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
      wishlist: false,
      loading: true,
      busy: false,
      limit: 8,
      page: 0,
      data: [],

      date3: "",
      events: [],
      disabled: [],
      value: this.stringify(new Date()),
      format: "yyyy-MM-dd",
      clear: true,
      placeholder: "placeholder is displayed when value is null or empty"
    };
  },
  created() {
    this.getdata();
  },
  methods: {
    moment,
    isDate(v) {
      if (v instanceof Date) {
        return true;
      }
      return false;
    },
    stringify(v) {
      if (!this.isDate(v)) return null;
      return (
        v.getFullYear() +
        "-" +
        this.filled(v.getMonth() * 1 + 1) +
        "-" +
        this.filled(v.getDate())
      );
    },
    filled(v) {
      return String(v).replace(/^(\d)$/, "0$1");
    },
    onDayClick3(date, str) {
      this.date3 = str;
    },
    changePane(year, month, pane) {
      this.events = [];
      // ajax data or ...
      setTimeout(() => {
        this.events = this.getEventContent(year, month, pane);
      }, 200);
    },
    getDayCount(year, month) {
      const dict = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      if (month === 1) {
        if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
          return 29;
        }
      }
      return dict[month];
    },
    random(min, max) {
      if (max == null) {
        max = min;
        min = 0;
      }
      return min + Math.floor(Math.random() * (max - min + 1));
    },
    getEventContent(year, month, pane) {
      const data = [];
      for (let p = 0; p < pane; p++) {
        let date = new Date(year, month + p);
        let monthCounts = this.getDayCount(date.getFullYear(), date.getMonth());
        for (let i = 1; i <= monthCounts; i++) {
          data.push({
            date: this.stringify(new Date(year, month + p, i)),
            content: this.random(100, 1000),
            low: this.random(1)
          });
        }
      }
      return data;
    },

    toggleWishlist() {
      this.wishlist = !this.wishlist;
    },
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
        .get("https://api.haloatta.com/api/paket/umroh/all", {
          params: {
            per_page: 6,
            page: ++this.page
          }
        })
        .then(response => {
          console.log(response.data.data.data);
          this.data = this.data.concat(response.data.data.data);
          this.loading = false;
          this.busy = false;
        });
    }
  },
  components: {
    searchResultUmrah,
    filterResultUmrah,
    Calendar
  }
};
</script>
