<template>
  <div class="ant-layout--results-search">
    <a-card
      class="ant-card--results-info b-shadow b-solid b-radius"
      :bordered="false"
    >
      <div class="d-flex align-items-center">
        <div class="ant-card--results-info-left d-flex align-items-center">
          <div>
            <a-avatar
              style="backgroundColor: #05CBB0"
              class="d-flex align-items-center"
              :size="64"
            >
              <i class="icon-umrah-white"></i>
            </a-avatar>
          </div>
          <div>
            <div class="ant-card--results-info-title">Umrah September 2019</div>
            <div class="ant-card--results-info-subtitle">
              <span class="fs-14 fw-400 cr-black-opacity"
                >Kota {{ this.$route.query.kota_asal }}</span
              >
              <span class="dots"></span>
              <span class="fs-14 fw-400 cr-black-opacity">{{
                this.$route.query.bulan_keberangkatan | formatMonth
              }}</span>
              <span class="dots"></span>
              <span class="fs-14 fw-400 cr-black-opacity"
                >Program {{ this.$route.query.program }} Hari</span
              >
            </div>
          </div>
        </div>
        <div
          class="ant-card--results-info-right ml-auto"
          v-bind:class="visibleSearch ? 'd-none' : ''"
        >
          <a-button @click="showSearch" class="b-shadow b-radius"
            >Ganti Pencarian</a-button
          >
        </div>
      </div>

      <div class="ant-form--search" v-show="visibleSearch">
        <a-divider />
        <a-form
          layout="vertical"
          :form="form"
          class="form-search--costume"
          hideRequiredMark
        >
          <a-row :gutter="16">
            <a-col :xs="24" :sm="24" :md="8">
              <a-form-item label="Kota Asal">
                <div class="icon-search">
                  <img class="max-width" src="/icons/search/airplane.svg" />
                </div>
                <a-select
                  showSearch
                  placeholder="Pilih Kota"
                  :showArrow="false"
                  style="width: 100%"
                  size="large"
                  v-decorator="[
                    'kota_asal',
                    { rules: [{ required: true, message: 'Harus di isi!' }] }
                  ]"
                >
                  <a-select-option value="all">Tampilkan Semua</a-select-option>
                  <a-select-option
                    v-for="(item, key) in option.kota"
                    :key="key"
                    :value="item.nama_kota"
                    >{{ item.nama_kota }}</a-select-option
                  >
                </a-select>
              </a-form-item>
            </a-col>

            <a-col :xs="24" :sm="24" :md="8">
              <a-form-item label="Program Hari">
                <div class="icon-search">
                  <a-icon type="calendar" />
                </div>
                <a-select
                  showSearch
                  placeholder="Pilih Program"
                  style="width: 100%"
                  :showArrow="false"
                  size="large"
                  v-decorator="[
                    'program',
                    { rules: [{ required: true, message: 'Harus di isi!' }] }
                  ]"
                >
                  <a-select-option value="all"
                    >Semua Program Hari</a-select-option
                  >
                  <a-select-option
                    v-for="(item, key) in option.program"
                    :key="key"
                    :value="item.jumlah_hari"
                    >Program {{ item.jumlah_hari }} Hari</a-select-option
                  >
                </a-select>
              </a-form-item>
            </a-col>

            <a-col :xs="24" :sm="24" :md="8">
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
                    { rules: [{ required: true, message: 'Harus di isi!' }] }
                  ]"
                >
                  <a-select-option value="all">Semua Bulan</a-select-option>
                  <a-select-option
                    v-for="(item, key) in option.bulan"
                    :key="key"
                    :value="item.bulan_tahun"
                    >{{ item.bulan_tahun | formatMonth }}</a-select-option
                  >
                </a-select>
              </a-form-item>
            </a-col>
          </a-row>

          <a-row :gutter="16" type="flex" justify="end">
            <a-col :xs="24" :sm="24" :md="8">
              <a-button
                @click="searchUmrah"
                class="btn-search b-shadow b-radius"
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
</template>
<script>
import moment from "moment";
import axios from "axios";
export default {
  data() {
    return {
      form: this.$form.createForm(this),
      visibleSearch: false,
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
  },

  methods: {
    moment,
    showSearch() {
      this.visibleSearch = !this.visibleSearch;
    },
    searchUmrah() {
      this.form.validateFields((err, values) => {
        if (!err) {
          this.$emit("loadingEvent", false);
          let data = [];
          let query = this.$route.query;

          data["kota_asal"] = query.kota_asal == "all" ? "" : query.kota_asal;
          data["bulan_keberangkatan"] =
            query.bulan_keberangkatan == "all" ? "" : query.bulan_keberangkatan;
          data["program"] = query.program == "all" ? "" : query.program;
          data["hotel_bintang"] =
            query.hotel_bintang == "all" ? "" : query.hotel_bintang;

          axios
            .get(process.env.baseUrl + "paket/umroh/all", {
              params: {
                kota_asal: data["kota_asal"],
                bulan_keberangkatan: data["bulan_keberangkatan"],
                program_hari: data["program"],
                hotel_bintang: data["hotel_bintang"]
              }
            })
            .then(respone => {
              this.$store.commit("catalog/setUmroh", respone.data.data.data);
              this.$emit("loadingEvent", false);
            });

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
    getOption() {
      // this.busy = true;
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
    },

    formatMonth: function(value) {
      const date = new Date(value);

      const months = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember"
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
