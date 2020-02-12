<template>
  <div data="hero-search-head">
    <div class="content-head">
      <div
        class="content-head--cover"
        v-lazy:background-image="require('~/static/umrah/cover/cu62.jpg')"
      >
        <div class="content-head--body container">
          <div class="gradient-top"></div>

          <a-row :gutter="24" type="flex" justify="space-between" align="middle" class="h-100">
            <a-col :xs="24" :sm="24" :md="24" :lg="11">
              <h2 class="fs-40 fw-600 title text-capitalize">Jelajahi wisata halal dunia</h2>
              <a-button class="btn-join--us d-none" size="large">Jelajahi Sekarang</a-button>

              <user-login />
            </a-col>

            <a-col :xs="24" :sm="24" :md="24" :lg="13">
              <a-tabs
                class="search-main"
                type="card"
                defaultActiveKey="1"
                tabPosition="top"
                @prevClick="callback"
                @nextClick="callback"
              >
                <a-tab-pane key="1">
                  <span slot="tab">
                    <div class="icon-umrah"></div>
                    <span class="label-tabs">Paket Umrah</span>
                  </span>
                  <search-umrah />
                </a-tab-pane>

                <a-tab-pane key="2">
                  <span slot="tab">
                    <div class="icon-ticket"></div>
                    <span class="label-tabs">Tiket Group</span>
                  </span>
                  <search-ticket />
                </a-tab-pane>

                <a-tab-pane key="3">
                  <span slot="tab">
                    <div class="icon-accommodation"></div>
                    <span class="label-tabs">LA Akomodasi</span>
                  </span>
                  <search-accommodation />
                </a-tab-pane>

                <a-tab-pane key="4">
                  <span slot="tab">
                    <div class="icon-visa"></div>
                    <span class="label-tabs">Visa Umrah</span>
                  </span>
                  <search-visa />
                </a-tab-pane>

                <a-tab-pane key="5">
                  <span slot="tab">
                    <div class="icon-insurance"></div>
                    <span class="label-tabs">Asuransi</span>
                  </span>
                  <search-insurance />
                </a-tab-pane>

                <a-tab-pane key="6">
                  <span slot="tab">
                    <div class="icon-handling"></div>
                    <span class="label-tabs">Handling</span>
                  </span>
                  <search-handling />
                </a-tab-pane>

                <a-tab-pane key="7">
                  <span slot="tab">
                    <div class="icon-manasik"></div>
                    <span class="label-tabs">Manasik</span>
                  </span>
                  <search-manasik />
                </a-tab-pane>

                <a-tab-pane key="8">
                  <span slot="tab">
                    <div class="icon-equipment"></div>
                    <span class="label-tabs">Perlengkapan</span>
                  </span>
                  <search-equipment />
                </a-tab-pane>

                <a-tab-pane key="9">
                  <span slot="tab">
                    <div class="icon-tourleader"></div>
                    <span class="label-tabs">Tour Leader</span>
                  </span>
                  <search-tourleader />
                </a-tab-pane>
              </a-tabs>
            </a-col>
          </a-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import searchUmrah from "@/components/contents/lib/search/umrah";
import searchTicket from "@/components/contents/lib/search/ticket";
import searchAccommodation from "@/components/contents/lib/search/accommodation";
import searchVisa from "@/components/contents/lib/search/visa";
import searchInsurance from "@/components/contents/lib/search/insurance";
import searchHandling from "@/components/contents/lib/search/handling";
import searchManasik from "@/components/contents/lib/search/manasik";
import searchEquipment from "@/components/contents/lib/search/equipment";
import searchTourleader from "@/components/contents/lib/search/tourleader";

import userLogin from "@/components/App/Home/UserLogin";
export default {
  components: {
    searchUmrah,
    searchTicket,
    searchAccommodation,
    searchVisa,
    searchInsurance,
    searchHandling,
    searchManasik,
    searchEquipment,
    searchTourleader,
    userLogin
  },

  methods: {
    callback(val) {}
  }
};
</script>
