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
                          >
                            Program
                            {{ item.jumlah_hari }} Hari
                          </a-select-option>
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
                          >
                            {{ item.bulan_tahun | formatMonth }}
                          </a-select-option>
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

        <div class="ant-layout--results-list pb-16">
          <div class="ant-layout--results-list-label fw-400">
            Hasil Pencarian Paket Umrah
          </div>
          <div
            v-infinite-scroll="results"
            :infinite-scroll-disabled="busy"
            :infinite-scroll-distance="limit"
          >
            <a-row :gutter="24" class="r-wrap">
              <a-col
                class="mb-16"
                data-aos="fade-up"
                data-aos-duration="1200"
                v-for="result in results"
                :key="result.kode_produk"
                :xs="24"
                :sm="12"
                :md="12"
                :lg="8"
              >
                <UmrahAll
                  :loading="loading"
                  :package_name="result.nama"
                  :images="result.gambar_hotel"
                  :url="result.kode_produk"
                  :departure="result.tgl_berangkat"
                  :city="result.nama_kota"
                  :vendor_name="result.nama_vendor"
                  :vendor_logo="result.foto"
                  :maskapai_name="result.nama_maskapai"
                  :maskapai_logo="result.image"
                  :rate_hotel="result.kelas_bintang"
                  :program="result.jumlah_hari"
                  :pricing="result.harga_jual"
                />
              </a-col>
            </a-row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import searchResultUmrah from "@/components/contents/lib/search/result/umrah";
import filterResultUmrah from "@/components/contents/lib/filter/result/umrah";
import UmrahAll from "@/components/Package/Umrah";
import axios from "axios";
export default {
  name: "all-recommendation",

  components: {
    searchResultUmrah,
    filterResultUmrah,
    UmrahAll
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
      busy: true,
      limit: 3,
      page: 0,
      allRecommendations: [],
      results: "",
      option: ""
    };
  },

  async asyncData({ query, store }) {
    let data = [];
    data["kota_asal"] = query.kota_asal == "all" ? "" : query.kota_asal;
    data["bulan_keberangkatan"] =
      query.bulan_keberangkatan == "all" ? "" : query.bulan_keberangkatan;
    data["program"] = query.program == "all" ? "" : query.program;
    data["hotel_bintang"] =
      query.hotel_bintang == "all" ? "" : query.hotel_bintang;

    const myRespone = await axios.get(process.env.baseUrl + "paket/umroh/all", {
      params: {
        kota_asal: data["kota_asal"],
        bulan_keberangkatan: data["bulan_keberangkatan"],
        program_hari: data["program"],
        hotel_bintang: data["hotel_bintang"]
      }
    });

    const myResponeOption = await axios.get(
      process.env.baseUrl + "option/umrah"
    );

    data["result"] = myRespone.data.data.data;
    return {
      loading: false,
      busy: false,
      results: myRespone.data.data.data,
      option: myResponeOption.data.data
    };
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
