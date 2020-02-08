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
                  v-for="(item, index) in data"
                  :key="index"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  class="mb-16"
                >
                  <package-umrah
                  :loading="loading"
                  :package_name="item.nama"
                  :images="item.gambar"
                  :url="item.kode_produk"
                  :departure="item.tgl_berangkat"
                  :city="item.nama_kota"
                  :vendor_name="item.nama_vendor"
                  :vendor_logo="item.foto"
                  :maskapai_name="item.nama_maskapai"
                  :maskapai_logo="item.image"
                  :rate_hotel="item.kelas_bintang"
                  :program="item.jumlah_hari"
                  :pricing="item.harga_jual"
                />
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
import PackageUmrah from "@/components/template/Umrah";
import axios from "axios";
export default {
  name: "umrahAll",

  components: {
    searchResultUmrah,
    filterResultUmrah,
    PackageUmrah
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
      data: [],
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
          this.data = this.data.concat(response.data.data.data);
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
    }
  }
};
</script>
