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
              class="d-flex align-items-center"
              style="backgroundColor: #6c63ff"
              :size="64"
            >
              <i class="icon-ticket-white"></i>
            </a-avatar>
          </div>
          <div>
            <div class="ant-card--results-info-title">
              Makassar (UPG)
              <a-icon type="retweet" class="cr-gray ml-8 mr-8" />Jeddah (JED)
            </div>
            <div class="ant-card--results-info-subtitle">
              Keberangkatan 01 Desember 2019
              <a-divider type="vertical" />Program 9 Hari
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
        <SearchTicket />
      </div>
    </a-card>
  </div>
</template>
<script>
import SearchTicket from "@/components/contents/lib/search/ticket";
export default {
  components: { SearchTicket },

  data() {
    return {
      visibleSearch: false
    };
  },

  methods: {
    showSearch() {
      this.visibleSearch = !this.visibleSearch;
    }
  }
};
</script>
