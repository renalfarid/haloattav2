<template>
  <a-layout :style="{ maxWidth: '1200px', margin: '0 auto' }">
    <a-layout-sider
      :style="{ overflow: 'auto', height: '100vh', position: 'fixed', background: 'transparent'}"
      width="280"
    >
      <a-card class="ant-card--steps-proggress b-radius" :bordered="false">
        <sider-steps :active="active" />

        <div class="ant-card--footer">
          <a-button size="large" block @click="nextSteps">Lanjutkan</a-button>
        </div>
      </a-card>
    </a-layout-sider>
    <a-layout :style="{ marginLeft: '280px', padding: '24px' }">
      <a-layout-content class="ant-layout-content--steps">
        <div class="fs-20 fw-500 cr-black f-default">Pilih LA Akomodasi</div>
        <!-- filter LA accommodation -->
        <a-divider :style="{ margin: '16px 0' }" />
        <a-row :gutter="8" type="flex" justify="space-between" align="middle">
          <a-col :span="18">
            <span class="text-uppercase cr-gray fs-14 mr-16">Filter pencarian</span>
            <a-dropdown :trigger="['click']">
              <a class="ant-dropdown-link fs-14 cr-black f-default" href="#">
                Rating Hotel
                <a-icon type="down" />
              </a>
              <a-card slot="overlay">
                <div class="ant-filter-dropdown--overlay">
                  <a-radio-group name="rating_hotel">
                    <a-radio :style="radioStyle" :value="1">Tampilkan Semua</a-radio>
                    <a-radio :style="radioStyle" :value="2">
                      <a-rate class="fs-16" :defaultValue="5" disabled />
                    </a-radio>
                    <a-radio :style="radioStyle" :value="3">
                      <a-rate class="fs-16" :defaultValue="4" disabled />
                    </a-radio>
                    <a-radio :style="radioStyle" :value="4">
                      <a-rate class="fs-16" :defaultValue="3" disabled />
                    </a-radio>
                    <a-radio :style="radioStyle" :value="5">
                      <a-rate class="fs-16" :defaultValue="2" disabled />
                    </a-radio>
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
                v-on:click="selectedaccommodation = item.key"
                v-bind:class="[ selectedaccommodation === item.key ? 'package-selected' : '' ]"
              >
                <div class="ant-card--package-selected">
                  <a-icon type="check-circle" theme="filled" />
                </div>
                <a-card class="ant-card-package">
                  <div slot="cover">
                    <div
                      class="ant-card-cover--images"
                      :style="{ backgroundImage: `url(${item.images_package})` }"
                    >
                      <div class="ant-card-cover--overlay">
                        <div class="ant-card-cover--overlay-box-radius"></div>
                        <div class="ant-card-cover--overlay-text">
                          <div class="ant-card-cover--overlay-text-title fs-20 fw-500">75</div>
                          <div class="ant-card-cover--overlay-text-subtitle text-uppercase">
                            <span>ROOM</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="d-flex align-items-center">
                    <div class="mr-8">
                      <a-avatar :src="item.logo_provider" size="small" />
                    </div>
                    <div class="fs-13 fw-400 cr-gray f-default text-ellipsis">{{item.provider}}</div>
                    <div class="ml-auto fs-13 fw-400 cr-gray f-default text-ellipsis">
                      <a-rate class="fs-14" :defaultValue="4" disabled />
                    </div>
                  </div>

                  <a-row
                    :gutter="8"
                    type="flex"
                    justify="space-between"
                    align="middle"
                    class="mt-8 mb-8"
                  >
                    <a-col :span="12" class="text-left">
                      <div class="fs-15 fw-500 cr-black text-capitalize f-default">Rayyana Ajyad</div>
                      <div class="fs-13 fw-400 cr-black text-capitalize f-default">3 Hari Mekkah</div>
                    </a-col>
                    <a-col :span="12" class="text-right">
                      <div class="fs-15 fw-500 cr-black text-capitalize f-default">Pinewood Hotel</div>
                      <div class="fs-13 fw-400 cr-black text-capitalize f-default">4 Hari Madinah</div>
                    </a-col>
                  </a-row>

                  <div class="d-flex align-items-center">
                    <div class="fs-13 fw-400 cr-gray f-default text-ellipsis">Program 9 Hari</div>
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
    images_package: "/akomodasi/A1.png",
    provider: "Al Madinah",
    logo_provider:
      "https://almadinahlandarrangement.com/wp-content/uploads/2019/04/la-umroh-2019-murah-dan-terbaik.png",
    price: "12.000.000"
  },
  {
    key: 2,
    images_package: "/akomodasi/A2.png",
    provider: "Al Madinah",
    logo_provider:
      "https://almadinahlandarrangement.com/wp-content/uploads/2019/04/la-umroh-2019-murah-dan-terbaik.png",
    price: "12.000.000"
  },
  {
    key: 3,
    images_package: "/akomodasi/A3.png",
    provider: "Al Madinah",
    logo_provider:
      "https://almadinahlandarrangement.com/wp-content/uploads/2019/04/la-umroh-2019-murah-dan-terbaik.png",
    price: "12.000.000"
  },
  {
    key: 4,
    images_package: "/akomodasi/A4.png",
    provider: "Al Madinah",
    logo_provider:
      "https://almadinahlandarrangement.com/wp-content/uploads/2019/04/la-umroh-2019-murah-dan-terbaik.png",
    price: "12.000.000"
  },
  {
    key: 5,
    images_package: "/akomodasi/A5.png",
    provider: "Al Madinah",
    logo_provider:
      "https://almadinahlandarrangement.com/wp-content/uploads/2019/04/la-umroh-2019-murah-dan-terbaik.png",
    price: "12.000.000"
  },
  {
    key: 6,
    images_package: "/akomodasi/A6.png",
    provider: "Al Madinah",
    logo_provider:
      "https://almadinahlandarrangement.com/wp-content/uploads/2019/04/la-umroh-2019-murah-dan-terbaik.png",
    price: "12.000.000"
  }
];
export default {
  layout: "application",
  name: "accommodation",
  head() {
    return {
      title: "Pilih LA Akomodasi - Buat Paket Umrah | Haloatta"
    };
  },
  data() {
    return {
      selectedaccommodation: 2,
      loading: true,
      active: 2,
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
      this.$router.push("/create/steps/visa");
    }
  },
  components: {
    siderSteps
  }
};
</script>