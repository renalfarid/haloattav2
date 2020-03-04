<template>
  <div class="ant-layout--results-search">
    <a-card
      class="ant-card--results-info b-shadow b-solid b-radius"
      :bordered="false"
    >
      <div class="d-sm-block d-flex align-items-center">
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
        
        <SearchUmrah />
      </div>
    </a-card>
  </div>
</template>
<script>
import SearchUmrah from "@/components/contents/lib/search/umrah";
import moment from "moment";
import axios from "axios";
export default {
  components: { SearchUmrah },

  data() {
    return {
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
