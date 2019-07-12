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
        <div class="fs-20 fw-500 cr-black">Pilih salah satu Komponen Pilihan</div>
        <div class="fs-14 fw-400 cr-black mb-24">
          <span>Pilih komponen yang akan anda masukkan kedalam paket umrah anda. Komponen bersifat optional, bisa anda pilih dan tidak. Komponen optional yang tidak anda pesan tidak terhitung dalam tagihan anda</span>
        </div>

        <!-- handling -->
        <div>
          <div class="d-flex align-items-center">
            <div class="mr-16">
              <a-switch v-on:click="seeHandling = !seeHandling">
                <a-icon type="check" slot="checkedChildren" />
                <a-icon type="close" slot="unCheckedChildren" />
              </a-switch>
            </div>
            <div class="fs-16 fw-500 cr-black">Handling Domestik</div>
          </div>
          <div class="fs-14 fw-400 cr-gray mt-8">
            <span>Aktifkan untuk menampilkan Vendor Handling Domestik Paket Umrah Anda</span>
          </div>
        </div>
        <a-divider />
        <!-- show list handling -->
        <div v-if="seeHandling" class="mt-24 mb-24">
          <!-- filter handling -->
          <a-row :gutter="8" type="flex" justify="space-between" align="middle">
            <a-col :span="18">
              <span class="text-uppercase cr-gray fs-14 mr-16">Filter pencarian</span>
              <a-dropdown :trigger="['click']">
                <a class="ant-dropdown-link fs-14 cr-black f-default" href="#">
                  Vendor
                  <a-icon type="down" />
                </a>
                <a-card slot="overlay">
                  <div class="ant-filter-dropdown--overlay">
                    <a-radio-group name="harga">
                      <a-radio :style="radioStyle" :value="1">Tampilkan Semua</a-radio>
                      <a-radio :style="radioStyle" :value="2">Honda Handling</a-radio>
                      <a-radio :style="radioStyle" :value="3">Yamaha Handling</a-radio>
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
                      <a-radio :style="radioStyle" :value="2">Rp. 0 - Rp. 500.000</a-radio>
                      <a-radio :style="radioStyle" :value="3">Rp. 500.000 - Rp. 1.000.000</a-radio>
                      <a-radio :style="radioStyle" :value="4">Rp. 1.000.000 - Seterusnya</a-radio>
                    </a-radio-group>
                  </div>
                </a-card>
              </a-dropdown>
            </a-col>
            <a-col :span="6" class="text-right">
              <a-dropdown :trigger="['click']" placement="bottomRight">
                <a
                  class="ant-dropdown-link fs-14 cr-black f-default"
                  href="#"
                  :style="{margin: '0'}"
                >
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
            :dataSource="dataHandling"
          >
            <a-list-item slot="renderItem" slot-scope="item, index" :key="index">
              <a-skeleton :loading="loading" active>
                <a
                  v-on:click="selectedhandling = item.key"
                  v-bind:class="[ selectedhandling === item.key ? 'package-selected' : '' ]"
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
                          <div class="ant-card-cover--overlay-box-radius ant-pax--choice"></div>
                          <div class="ant-card-cover--overlay-text">
                            <div class="ant-card-cover--overlay-text-title fs-20 fw-500">75</div>
                            <div class="ant-card-cover--overlay-text-subtitle text-uppercase">
                              <span>Pax</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="d-flex align-items-center">
                      <div class="mr-8">
                        <a-avatar :src="item.logo_provider" />
                      </div>
                      <div class="fs-16 fw-500 cr-black f-default text-ellipsis">{{item.provider}}</div>
                    </div>

                    <a-row
                      :gutter="8"
                      type="flex"
                      justify="space-between"
                      align="middle"
                      class="mt-8 mb-8"
                    >
                      <a-col :span="24" class="text-left">
                        <div class="fs-14 fw-400 cr-gray text-capitalize f-default">
                          <span>9 September 2019</span>
                          <a-divider type="vertical" />
                          <span>19 September 2019</span>
                        </div>
                      </a-col>
                    </a-row>

                    <div class="text-right fs-16 fw-500 cr-primary f-default text-ellipsis">
                      RP {{item.price}}
                      <span class="fs-13 fw-400 cr-gray">/pax</span>
                    </div>
                  </a-card>
                </a>
              </a-skeleton>
            </a-list-item>
          </a-list>
          <a-divider :style="{ marginTop: '8px'}" />
        </div>
        <!-- end -->

        <!-- Manasik -->
        <div>
          <div class="d-flex align-items-center">
            <div class="mr-16">
              <a-switch v-on:click="seeManasik = !seeManasik">
                <a-icon type="check" slot="checkedChildren" />
                <a-icon type="close" slot="unCheckedChildren" />
              </a-switch>
            </div>
            <div class="fs-16 fw-500 cr-black">Manasik Pemantapan</div>
          </div>
          <div class="fs-14 fw-400 cr-gray mt-8">
            <span>Aktifkan untuk menampilkan Vendor penyelenggara Manasik Paket Umrah Anda</span>
          </div>
        </div>
        <a-divider />
        <!-- show list manasik -->
        <div v-if="seeManasik" class="mt-24 mb-24">
          <!-- filter manasik -->
          <a-row :gutter="8" type="flex" justify="space-between" align="middle">
            <a-col :span="18">
              <span class="text-uppercase cr-gray fs-14 mr-16">Filter pencarian</span>
              <a-dropdown :trigger="['click']">
                <a class="ant-dropdown-link fs-14 cr-black f-default" href="#">
                  Vendor
                  <a-icon type="down" />
                </a>
                <a-card slot="overlay">
                  <div class="ant-filter-dropdown--overlay">
                    <a-radio-group name="harga">
                      <a-radio :style="radioStyle" :value="1">Tampilkan Semua</a-radio>
                      <a-radio :style="radioStyle" :value="2">Honda Manasik</a-radio>
                      <a-radio :style="radioStyle" :value="3">Yamaha Manasik</a-radio>
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
                      <a-radio :style="radioStyle" :value="2">Rp. 0 - Rp. 500.000</a-radio>
                      <a-radio :style="radioStyle" :value="3">Rp. 500.000 - Rp. 1.000.000</a-radio>
                      <a-radio :style="radioStyle" :value="4">Rp. 1.000.000 - Seterusnya</a-radio>
                    </a-radio-group>
                  </div>
                </a-card>
              </a-dropdown>
            </a-col>
            <a-col :span="6" class="text-right">
              <a-dropdown :trigger="['click']" placement="bottomRight">
                <a
                  class="ant-dropdown-link fs-14 cr-black f-default"
                  href="#"
                  :style="{margin: '0'}"
                >
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
            :dataSource="dataManasik"
          >
            <a-list-item slot="renderItem" slot-scope="item, index" :key="index">
              <a-skeleton :loading="loading" active>
                <a
                  v-on:click="selectedmanasik = item.key"
                  v-bind:class="[ selectedmanasik === item.key ? 'package-selected' : '' ]"
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
                          <div class="ant-card-cover--overlay-box-radius ant-pax--choice"></div>
                          <div class="ant-card-cover--overlay-text">
                            <div class="ant-card-cover--overlay-text-title fs-20 fw-500">75</div>
                            <div class="ant-card-cover--overlay-text-subtitle text-uppercase">
                              <span>Pax</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="d-flex align-items-center">
                      <div class="mr-8">
                        <a-avatar :src="item.logo_provider" />
                      </div>
                      <div class="fs-16 fw-500 cr-black f-default text-ellipsis">{{item.provider}}</div>
                    </div>

                    <a-row
                      :gutter="8"
                      type="flex"
                      justify="space-between"
                      align="middle"
                      class="mt-8 mb-8"
                    >
                      <a-col :span="24" class="text-left">
                        <div class="fs-14 fw-400 cr-gray text-capitalize f-default">
                          <span>Paket Standar Manasik Pemantapan</span>
                        </div>
                      </a-col>
                    </a-row>

                    <div class="text-right fs-16 fw-500 cr-primary f-default text-ellipsis">
                      RP {{item.price}}
                      <span class="fs-13 fw-400 cr-gray">/pax</span>
                    </div>
                  </a-card>
                </a>
              </a-skeleton>
            </a-list-item>
          </a-list>

          <a-divider :style="{ marginTop: '8px'}" />
        </div>
        <!-- end -->

        <!-- Perlengkapan -->
        <div>
          <div class="d-flex align-items-center">
            <div class="mr-16">
              <a-switch v-on:click="seeEquipment = !seeEquipment">
                <a-icon type="check" slot="checkedChildren" />
                <a-icon type="close" slot="unCheckedChildren" />
              </a-switch>
            </div>
            <div class="fs-16 fw-500 cr-black">Perlengkapan Umrah</div>
          </div>
          <div class="fs-14 fw-400 cr-gray mt-8">
            <span>Aktifkan untuk menampilkan Vendor Penyedia Perlengkapan Paket Umrah Anda</span>
          </div>
        </div>
        <a-divider />
        <!-- show list perlengkapan -->
        <div v-if="seeEquipment" class="mt-24 mb-24">
          <!-- filter perlengkapan -->
          <a-row :gutter="8" type="flex" justify="space-between" align="middle">
            <a-col :span="18">
              <span class="text-uppercase cr-gray fs-14 mr-16">Filter pencarian</span>
              <a-dropdown :trigger="['click']">
                <a class="ant-dropdown-link fs-14 cr-black f-default" href="#">
                  Vendor
                  <a-icon type="down" />
                </a>
                <a-card slot="overlay">
                  <div class="ant-filter-dropdown--overlay">
                    <a-radio-group name="harga">
                      <a-radio :style="radioStyle" :value="1">Tampilkan Semua</a-radio>
                      <a-radio :style="radioStyle" :value="2">Honda Perlengkapan</a-radio>
                      <a-radio :style="radioStyle" :value="3">Yamaha Perlengkapan</a-radio>
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
                      <a-radio :style="radioStyle" :value="2">Rp. 0 - Rp. 500.000</a-radio>
                      <a-radio :style="radioStyle" :value="3">Rp. 500.000 - Rp. 1.000.000</a-radio>
                      <a-radio :style="radioStyle" :value="4">Rp. 1.000.000 - Seterusnya</a-radio>
                    </a-radio-group>
                  </div>
                </a-card>
              </a-dropdown>
            </a-col>
            <a-col :span="6" class="text-right">
              <a-dropdown :trigger="['click']" placement="bottomRight">
                <a
                  class="ant-dropdown-link fs-14 cr-black f-default"
                  href="#"
                  :style="{margin: '0'}"
                >
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
            :dataSource="dataEquipment"
          >
            <a-list-item slot="renderItem" slot-scope="item, index" :key="index">
              <a-skeleton :loading="loading" active>
                <a
                  v-on:click="selectedequipment = item.key"
                  v-bind:class="[ selectedequipment === item.key ? 'package-selected' : '' ]"
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
                          <div class="ant-card-cover--overlay-box-radius ant-pax--choice"></div>
                          <div class="ant-card-cover--overlay-text">
                            <div class="ant-card-cover--overlay-text-title fs-20 fw-500">75</div>
                            <div class="ant-card-cover--overlay-text-subtitle text-uppercase">
                              <span>Pax</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="d-flex align-items-center">
                      <div class="mr-8">
                        <a-avatar :src="item.logo_provider" />
                      </div>
                      <div class="fs-16 fw-500 cr-black f-default text-ellipsis">{{item.provider}}</div>
                    </div>

                    <a-row
                      :gutter="8"
                      type="flex"
                      justify="space-between"
                      align="middle"
                      class="mt-8 mb-8"
                    >
                      <a-col :span="24" class="text-left">
                        <div class="fs-14 fw-400 cr-gray text-capitalize f-default">
                          <span>Perlengkapan Umrah 1 Set</span>
                        </div>
                      </a-col>
                    </a-row>

                    <div class="text-right fs-16 fw-500 cr-primary f-default text-ellipsis">
                      RP {{item.price}}
                      <span class="fs-13 fw-400 cr-gray">/pax</span>
                    </div>
                  </a-card>
                </a>
              </a-skeleton>
            </a-list-item>
          </a-list>

          <a-divider :style="{ marginTop: '8px'}" />
        </div>
        <!-- end -->

        <!-- Tour Leader -->
        <div>
          <div class="d-flex align-items-center">
            <div class="mr-16">
              <a-switch v-on:click="seeLeader = !seeLeader">
                <a-icon type="check" slot="checkedChildren" />
                <a-icon type="close" slot="unCheckedChildren" />
              </a-switch>
            </div>
            <div class="fs-16 fw-500 cr-black">Tour Leader</div>
          </div>
          <div class="fs-14 fw-400 cr-gray mt-8">
            <span>Aktifkan untuk menampilkan Vendor Penyedia Tour Leader Paket Umrah Anda</span>
          </div>
        </div>
        <a-divider />
        <!-- show list tour leader -->
        <div v-if="seeLeader" class="mt-24 mb-24">
          <!-- filter tour leader -->
          <a-row :gutter="8" type="flex" justify="space-between" align="middle">
            <a-col :span="18">
              <span class="text-uppercase cr-gray fs-14 mr-16">Filter pencarian</span>
              <a-dropdown :trigger="['click']">
                <a class="ant-dropdown-link fs-14 cr-black f-default" href="#">
                  Vendor
                  <a-icon type="down" />
                </a>
                <a-card slot="overlay">
                  <div class="ant-filter-dropdown--overlay">
                    <a-radio-group name="harga">
                      <a-radio :style="radioStyle" :value="1">Tampilkan Semua</a-radio>
                      <a-radio :style="radioStyle" :value="2">Honda Tour Leader</a-radio>
                      <a-radio :style="radioStyle" :value="3">Yamaha Tour Leader</a-radio>
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
                      <a-radio :style="radioStyle" :value="2">Rp. 0 - Rp. 500.000</a-radio>
                      <a-radio :style="radioStyle" :value="3">Rp. 500.000 - Rp. 1.000.000</a-radio>
                      <a-radio :style="radioStyle" :value="4">Rp. 1.000.000 - Seterusnya</a-radio>
                    </a-radio-group>
                  </div>
                </a-card>
              </a-dropdown>
            </a-col>
            <a-col :span="6" class="text-right">
              <a-dropdown :trigger="['click']" placement="bottomRight">
                <a
                  class="ant-dropdown-link fs-14 cr-black f-default"
                  href="#"
                  :style="{margin: '0'}"
                >
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
            :dataSource="dataLeader"
          >
            <a-list-item slot="renderItem" slot-scope="item, index" :key="index">
              <a-skeleton :loading="loading" active>
                <a
                  v-on:click="selectedleader = item.key"
                  v-bind:class="[ selectedleader === item.key ? 'package-selected' : '' ]"
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
                          <div class="ant-card-cover--overlay-box-radius ant-pax--choice"></div>
                          <div class="ant-card-cover--overlay-text">
                            <div class="ant-card-cover--overlay-text-title fs-20 fw-500">75</div>
                            <div class="ant-card-cover--overlay-text-subtitle text-uppercase">
                              <span>Pax</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="d-flex align-items-center">
                      <div class="fs-16 fw-500 cr-black f-default text-ellipsis">{{item.provider}}</div>
                    </div>

                    <a-row
                      :gutter="8"
                      type="flex"
                      justify="space-between"
                      align="middle"
                      class="mt-8 mb-8"
                    >
                      <a-col :span="10" class="text-left">
                        <div class="fs-14 fw-400 cr-gray text-capitalize f-default">
                          <span>Minimal Order 40 pax</span>
                        </div>
                      </a-col>
                      <a-col :span="14">
                        <div class="text-right fs-16 fw-500 cr-primary f-default text-ellipsis">
                          RP {{item.price}}
                          <span class="fs-13 fw-400 cr-gray">/pax</span>
                        </div>
                      </a-col>
                    </a-row>
                  </a-card>
                </a>
              </a-skeleton>
            </a-list-item>
          </a-list>

          <a-divider :style="{ marginTop: '8px'}" />
        </div>
        <!-- end -->
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import siderSteps from "~/pages/create/steps/sider.vue";
const dataHandling = [
  {
    key: 1,
    images_package: "/handling/H1.png",
    provider: "Hasanuddin Handling",
    logo_provider:
      "https://irisdatacapture.com/wp-content/uploads/2019/03/Scytl.png",
    price: "180.000"
  },
  {
    key: 2,
    images_package: "/handling/H2.png",
    provider: "Hasanuddin Handling",
    logo_provider:
      "https://irisdatacapture.com/wp-content/uploads/2019/03/Scytl.png",
    price: "190.000"
  },
  {
    key: 3,
    images_package: "/handling/H3.png",
    provider: "Hasanuddin Handling",
    logo_provider:
      "https://irisdatacapture.com/wp-content/uploads/2019/03/Scytl.png",
    price: "200.000"
  }
];
const dataManasik = [
  {
    key: 1,
    images_package: "/manasik/M1.png",
    provider: "Go Bro EO",
    logo_provider:
      "https://irisdatacapture.com/wp-content/uploads/2019/03/Scytl.png",
    price: "180.000"
  },
  {
    key: 2,
    images_package: "/manasik/M2.png",
    provider: "Lintas Event",
    logo_provider:
      "https://irisdatacapture.com/wp-content/uploads/2019/03/Scytl.png",
    price: "190.000"
  },
  {
    key: 3,
    images_package: "/manasik/M3.png",
    provider: "Dunkirk Event",
    logo_provider:
      "https://irisdatacapture.com/wp-content/uploads/2019/03/Scytl.png",
    price: "200.000"
  }
];
const dataEquipment = [
  {
    key: 1,
    images_package: "/perlengkapan/P1.png",
    provider: "Subur Jaya",
    logo_provider:
      "https://irisdatacapture.com/wp-content/uploads/2019/03/Scytl.png",
    price: "180.000"
  },
  {
    key: 2,
    images_package: "/perlengkapan/P2.png",
    provider: "Abadi Antik",
    logo_provider:
      "https://irisdatacapture.com/wp-content/uploads/2019/03/Scytl.png",
    price: "190.000"
  },
  {
    key: 3,
    images_package: "/perlengkapan/P3.png",
    provider: "Dunkirk Event",
    logo_provider:
      "https://irisdatacapture.com/wp-content/uploads/2019/03/Scytl.png",
    price: "200.000"
  }
];
const dataLeader = [
  {
    key: 1,
    images_package: "/tourleader/TL1.png",
    provider: "Name Tour Leader",
    price: "180.000"
  },
  {
    key: 2,
    images_package: "/tourleader/TL2.png",
    provider: "Name Tour Leader",
    price: "190.000"
  },
  {
    key: 3,
    images_package: "/tourleader/TL3.png",
    provider: "Name Tour Leader",
    price: "200.000"
  }
];
export default {
  layout: "application",
  name: "choiceComponents",
  head() {
    return {
      title: "Pilih Komponen Pilihan - Buat Paket Umrah | Haloatta"
    };
  },
  data() {
    return {
      loading: true,
      selectedhandling: [],
      selectedmanasik: [],
      selectedequipment: [],
      selectedleader: [],
      seeHandling: false,
      seeManasik: false,
      seeEquipment: false,
      seeLeader: false,
      active: 5,
      dataHandling,
      dataManasik,
      dataEquipment,
      dataLeader,
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
      this.$router.push("/create/steps/margin-setting");
    }
  },
  components: {
    siderSteps
  }
};
</script>