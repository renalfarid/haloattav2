<template>
  <div class="ant-layout--results-search">
    <a-card class="ant-card--results-info b-shadow b-solid b-radius" :bordered="false">
      <div class="d-sm-block d-flex align-items-center">
        <div class="ant-card--results-info-left d-flex align-items-center">
          <div>
            <a-avatar style="backgroundColor: #CB9605" class="d-flex align-items-center" :size="64">
              <i class="icon-insurance-white"></i>
            </a-avatar>
          </div>
          <div>
            <div class="ant-card--results-info-title">Asuransi Perjalanan Umrah September 2019</div>
            <div class="ant-card--results-info-subtitle">
              Keberangkatan 10 Desember 2019
              <a-divider type="vertical" />
              <span>Program 9 Hari</span>
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
        <SearchInsurance />
      </div>
    </a-card>
  </div>
</template>
<script>
import SearchInsurance from "@/components/contents/lib/search/insurance";
import moment from "moment";
export default {
  components: { SearchInsurance },

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