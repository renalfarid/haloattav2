<template>
  <div class="ant-layout--results-search">
    <a-card class="ant-card--results-info b-shadow b-solid b-radius" :bordered="false">
      <div class="d-sm-block d-flex align-items-center">
        <div class="ant-card--results-info-left d-flex align-items-center">
          <div>
            <a-avatar class="d-flex align-items-center" style="backgroundColor: #05CBB0" :size="64">
              <i class="icon-accommodation-white"></i>
            </a-avatar>
          </div>
          <div>
            <div class="ant-card--results-info-title">
              LA Akomodasi Umrah 3 Hari Mekkah
              <a-icon type="arrow-right" class="cr-gray ml-8 mr-8" />4 Hari Madinah
            </div>
            <div class="ant-card--results-info-subtitle">
              Keberangkatan 10 Desember 2019
              <a-divider type="vertical" />Program 9 Hari
            </div>
          </div>
        </div>
        <div
          class="ant-card--results-info-right ml-auto"
          v-bind:class="visibleSearch ? 'd-none' : ''"
        >
          <a-button @click="showSearch" class="b-shadow b-radius">Ganti Pencarian</a-button>
        </div>
      </div>

      <div class="ant-form--search" v-show="visibleSearch">
        <a-divider />
        <SearchAccommodation />
      </div>
    </a-card>
  </div>
</template>
<script>
import SearchAccommodation from "@/components/contents/lib/search/accommodation";
import moment from "moment";
export default {
  components: { SearchAccommodation },

  data() {
    return {
      visibleSearch: false
    };
  },

  methods: {
    moment,
    showSearch() {
      this.visibleSearch = !this.visibleSearch;
    }
  }
};
</script>