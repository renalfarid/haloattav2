<template>
  <a-layout :style="{ maxWidth: '1200px', margin: '0 auto' }">
    <a-layout-sider :style="{ overflow: 'auto', height: '100vh', position: 'fixed'}" width="280">
      <a-card class="ant-card--steps-proggress b-radius" :bordered="false">
        <sider-steps :active="active" />

        <div class="ant-card--footer">
          <a-button size="large" block @click="nextSteps">Lanjutkan</a-button>
        </div>
      </a-card>
    </a-layout-sider>
    <a-layout :style="{ marginLeft: '280px', padding: '24px' }">
      <a-layout-content class="ant-layout-content--steps">
        <div class="fs-20 fw-500 cr-black f-default">Pilih Tiket Group</div>
        <!-- filter ticket group -->
        <a-divider :style="{ margin: '16px 0' }" />
        <a-row :gutter="8" type="flex" justify="space-between" align="middle">
          <a-col :span="18">
            <span class="text-uppercase cr-gray fs-14 mr-16">Filter pencarian</span>
            <a-dropdown :trigger="['click']">
              <a class="ant-dropdown-link fs-14 cr-black f-default" href="#">
                Tujuan
                <a-icon type="down" />
              </a>
              <a-card slot="overlay">
                <div class="ant-filter-dropdown--overlay">
                  <a-radio-group name="kota_asal">
                    <a-radio :style="radioStyle" :value="1">Tampilkan Semua</a-radio>
                    <a-radio :style="radioStyle" :value="2">Jeddah (JED)</a-radio>
                  </a-radio-group>
                </div>
              </a-card>
            </a-dropdown>
            <a-divider type="vertical" />
            <a-dropdown :trigger="['click']">
              <a class="ant-dropdown-link fs-14 cr-black f-default" href="#">
                Maskapai
                <a-icon type="down" />
              </a>
              <a-card slot="overlay">
                <div class="ant-filter-dropdown--overlay">
                  <a-radio-group name="kota_asal">
                    <a-radio :style="radioStyle" :value="1">Tampilkan Semua</a-radio>
                    <a-radio :style="radioStyle" :value="2">Lion Air</a-radio>
                    <a-radio :style="radioStyle" :value="3">Garuda Indonesia</a-radio>
                    <a-radio :style="radioStyle" :value="4">Saudi Airline</a-radio>
                  </a-radio-group>
                </div>
              </a-card>
            </a-dropdown>
            <a-divider type="vertical" />
            <a-dropdown :trigger="['click']">
              <a class="ant-dropdown-link fs-14 cr-black f-default" href="#">
                Transit
                <a-icon type="down" />
              </a>
              <a-card slot="overlay">
                <div class="ant-filter-dropdown--overlay">
                  <a-radio-group name="rating_hotel">
                    <a-radio :style="radioStyle" :value="1">Tampilkan Semua</a-radio>
                    <a-radio :style="radioStyle" :value="2">Langsung</a-radio>
                    <a-radio :style="radioStyle" :value="3">Transit</a-radio>
                  </a-radio-group>
                </div>
              </a-card>
            </a-dropdown>
            <a-divider type="vertical" />
            <a-dropdown :trigger="['click']">
              <a class="ant-dropdown-link fs-14 cr-black f-default" href="#">
                Kabin
                <a-icon type="down" />
              </a>
              <a-card slot="overlay">
                <div class="ant-filter-dropdown--overlay">
                  <a-radio-group name="rating_hotel">
                    <a-radio :style="radioStyle" :value="1">Tampilkan Semua</a-radio>
                    <a-radio :style="radioStyle" :value="2">Ekonomi</a-radio>
                    <a-radio :style="radioStyle" :value="3">Bisnis</a-radio>
                  </a-radio-group>
                </div>
              </a-card>
            </a-dropdown>
            <a-divider type="vertical" />
            <a-dropdown :trigger="['click']">
              <a class="ant-dropdown-link fs-14 cr-black f-default" href="#">
                Harga
                <a-icon type="down" />
              </a>
              <a-card slot="overlay">
                <div class="ant-filter-dropdown--overlay">
                  <a-radio-group name="harga">
                    <a-radio :style="radioStyle" :value="1">Tampilkan Semua</a-radio>
                    <a-radio :style="radioStyle" :value="2">Rp. 0 - Rp. 20.000.000</a-radio>
                    <a-radio :style="radioStyle" :value="3">Rp. 20.000.000 - Rp. 30.000.000</a-radio>
                    <a-radio :style="radioStyle" :value="4">Rp. 30.000.000 - Seterusnya</a-radio>
                  </a-radio-group>
                </div>
              </a-card>
            </a-dropdown>
          </a-col>
          <a-col :span="6" class="text-right">
            <a-dropdown :trigger="['click']" placement="bottomRight">
              <a class="ant-dropdown-link fs-14 cr-black f-default" href="#" :style="{margin: '0'}">
                Urutkan
                <a-icon type="down" />
              </a>
              <a-card slot="overlay">
                <div class="ant-filter-dropdown--overlay">
                  <a-radio-group name="program_hari">
                    <a-radio :style="radioStyle" :value="1">Harga Termurah</a-radio>
                    <a-radio :style="radioStyle" :value="2">Harga Termahal</a-radio>
                  </a-radio-group>
                </div>
              </a-card>
            </a-dropdown>
          </a-col>
        </a-row>
        <a-divider :style="{ margin: '16px 0' }" />
        <!-- end -->
        <a-list
          :grid="{ gutter: 16, xs: 2, sm: 2, md: 2, lg: 2, xl: 3, xxl: 3 }"
          :dataSource="data"
        >
          <a-list-item slot="renderItem" slot-scope="item, index" :key="index">
            <a-skeleton :loading="loading" active>
              <a
                v-on:click="selectedticket = item.key"
                v-bind:class="[ selectedticket === item.key ? 'package-selected' : '' ]"
              >
                <div class="ant-card--package-selected">
                  <a-icon type="check-circle" theme="filled" />
                </div>
                <a-card class="ant-card--package-ticket">
                  <div slot="cover">
                    <div
                      class="ant-card-cover--images"
                      :style="{ backgroundImage: `url(${item.images_package})` }"
                    >
                      <div class="ant-card-cover--overlay">
                        <div class="ant-card-cover--overlay-box-radius"></div>
                        <div class="ant-card-cover--overlay-text">
                          <div class="ant-card-cover--overlay-text-title">sisa</div>
                          <div class="ant-card-cover--overlay-text-subtitle">
                            <span>40</span> pax
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="d-flex align-items-center">
                    <div class="mr-8">
                      <a-avatar :src="item.logo_maskapai" :value="item.logo_maskapai" size="small" />
                    </div>
                    <div class="fs-13 fw-400 cr-gray f-default text-ellipsis">{{item.maskapai}}</div>
                    <div
                      class="ml-auto fs-13 fw-400 cr-gray f-default text-ellipsis"
                    >{{item.class_cabin}}</div>
                  </div>

                  <a-row
                    :gutter="8"
                    type="flex"
                    justify="space-between"
                    align="middle"
                    class="mt-8 mb-8"
                  >
                    <a-col :span="8" class="text-left">
                      <div class="fs-30 fw-500 cr-black text-uppercase f-default">upg</div>
                      <div class="fs-14 fw-400 cr-black text-uppercase f-default">09:00 am</div>
                    </a-col>
                    <a-col :span="8" class="text-center">
                      <div class="fs-13 fw-400 cr-gray text-capitalize f-default mb-8">Nonstop</div>
                      <div class="fs-13 fw-400 cr-gray text-capitalize f-default">6h45m</div>
                    </a-col>
                    <a-col :span="8" class="text-right">
                      <div class="fs-30 fw-500 cr-black text-uppercase f-default">jed</div>
                      <div class="fs-14 fw-400 cr-black text-uppercase f-default">15:00 pm</div>
                    </a-col>
                  </a-row>

                  <div class="d-flex align-items-center">
                    <div class="fs-13 fw-400 cr-gray f-default text-ellipsis">Round Trip</div>
                    <div class="ml-auto fs-16 fw-500 cr-primary f-default text-ellipsis">
                      RP {{item.price}}
                      <span class="fs-13 fw-400 cr-gray">/pax</span>
                    </div>
                  </div>
                </a-card>
              </a>
            </a-skeleton>
          </a-list-item>
        </a-list>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import siderSteps from "~/pages/create/steps/sider.vue";
const data = [
  {
    key: 1,
    images_package:
      "https://reliji.com/wp-content/uploads/2018/06/banner-fleet-4-new.jpg",
    maskapai: "Garuda Indonesia",
    logo_maskapai:
      "https://3.bp.blogspot.com/-ORvEVdtnqsc/WebEppFoJlI/AAAAAAAAELQ/OzXH9meIbXIOSlJCtdYNhb2SDUhYEd8AgCLcBGAs/s400/garuda%2Bindonesia%2Bpng.png",
    price: "12.000.000",
    class_cabin: "Economy Class"
  },
  {
    key: 2,
    images_package:
      "http://www.damniloveindonesia.com/image/catalog/explore_indonesia/Artikel/News_Event/maskapai_murah/cnn_travel.jpg",
    maskapai: "Lion Air",
    logo_maskapai:
      "https://www.goto-hotel.com/wp-content/uploads/lion-parcel-logo.png",
    price: "12.000.000",
    class_cabin: "Economy Class"
  },
  {
    key: 3,
    images_package:
      "https://www.simasakti.id/wp-content/uploads/2018/12/saudia-arilines.jpg",
    maskapai: "Saudi Airlines",
    logo_maskapai:
      "https://seeklogo.com/images/S/Saudi_Arabian_Airlines-logo-E1B39FDCA3-seeklogo.com.png",
    price: "12.000.000",
    class_cabin: "Economy Class"
  },
  {
    key: 4,
    images_package:
      "https://www.simasakti.id/wp-content/uploads/2018/12/saudia-arilines.jpg",
    maskapai: "Saudi Airlines",
    logo_maskapai:
      "https://seeklogo.com/images/S/Saudi_Arabian_Airlines-logo-E1B39FDCA3-seeklogo.com.png",
    price: "12.000.000",
    class_cabin: "Economy Class"
  },
  {
    key: 5,
    images_package:
      "https://www.simasakti.id/wp-content/uploads/2018/12/saudia-arilines.jpg",
    maskapai: "Saudi Airlines",
    logo_maskapai:
      "https://seeklogo.com/images/S/Saudi_Arabian_Airlines-logo-E1B39FDCA3-seeklogo.com.png",
    price: "12.000.000",
    class_cabin: "Economy Class"
  },
  {
    key: 6,
    images_package:
      "https://www.simasakti.id/wp-content/uploads/2018/12/saudia-arilines.jpg",
    maskapai: "Saudi Airlines",
    logo_maskapai:
      "https://seeklogo.com/images/S/Saudi_Arabian_Airlines-logo-E1B39FDCA3-seeklogo.com.png",
    price: "12.000.000",
    class_cabin: "Economy Class"
  },
  {
    key: 7,
    images_package:
      "https://www.simasakti.id/wp-content/uploads/2018/12/saudia-arilines.jpg",
    maskapai: "Saudi Airlines",
    logo_maskapai:
      "https://seeklogo.com/images/S/Saudi_Arabian_Airlines-logo-E1B39FDCA3-seeklogo.com.png",
    price: "12.000.000",
    class_cabin: "Economy Class"
  },
  {
    key: 8,
    images_package:
      "https://www.simasakti.id/wp-content/uploads/2018/12/saudia-arilines.jpg",
    maskapai: "Saudi Airlines",
    logo_maskapai:
      "https://seeklogo.com/images/S/Saudi_Arabian_Airlines-logo-E1B39FDCA3-seeklogo.com.png",
    price: "12.000.000",
    class_cabin: "Economy Class"
  }
];
export default {
  layout: "application",
  name: "flightTicket",
  head() {
    return {
      title: "Pilih Tiket Group - Buat Paket Umrah | Haloatta"
    };
  },
  data() {
    return {
      selectedticket: 2,
      loading: true,
      active: 1,
      data,
      radioStyle: {
        display: "block",
        height: "30px",
        lineHeight: "30px"
      }
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  },
  methods: {
    nextSteps() {
      this.$router.push("/create/steps/accommodation");
    }
  },
  components: {
    siderSteps
  }
};
</script>