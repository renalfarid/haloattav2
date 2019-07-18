<template>
  <div class="ant-layout--results-search">
    <a-card class="ant-card--results-info b-shadow b-solid b-radius" :bordered="false">
      <div class="d-flex align-items-center">
        <div class="ant-card--results-info-left d-flex align-items-center">
          <div>
            <a-avatar :size="64" icon="user" />
          </div>
          <div>
            <div class="ant-card--results-info-title">Umrah September 2019</div>
            <div class="ant-card--results-info-subtitle">
              <span>Program 9 Hari</span>
              <a-divider type="vertical" />
              <span>40 Pax</span>
              <a-divider type="vertical" />
              <span>{{dewasa}} Dewasa</span>
              <a-divider type="vertical" />
              <span>{{anak}} Anak</span>
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
        <a-form layout="vertical" class="form-search--costume">
          <a-row :gutter="16">
            <a-col :span="8">
              <a-form-item label="Kota Asal">
                <div class="icon-search">
                  <img class="max-width" src="/icons/search/airplane.svg" />
                </div>
                <a-select
                  showSearch
                  defaultValue="Makassar"
                  placeholder="Pilih Kota Asal"
                  optionFilterProp="children"
                  :showArrow="false"
                  style="width: 100%"
                  @focus="handleFocus"
                  @blur="handleBlur"
                  @change="handleChange"
                  :filterOption="filterOption"
                  size="large"
                >
                  <a-select-option value="All">Tampilkan Semua</a-select-option>
                  <a-select-option value="Makassar">Makassar</a-select-option>
                  <a-select-option value="Jakarta">Jakarta</a-select-option>
                  <a-select-option value="Bandung">Bandung</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>

            <a-col :span="8">
              <a-form-item label="Bulan Keberangkatan">
                <div class="icon-search">
                  <a-icon type="calendar" />
                </div>
                <a-select
                  showSearch
                  defaultValue="September 2019"
                  placeholder="Pilih Bulan Keberangkatan"
                  optionFilterProp="children"
                  style="width: 100%"
                  :showArrow="false"
                  @focus="handleFocus"
                  @blur="handleBlur"
                  @change="handleChange"
                  :filterOption="filterOption"
                  size="large"
                >
                  <a-select-option value="All">Tampilkan Semua</a-select-option>
                  <a-select-option value="September 2019">September 2019</a-select-option>
                  <a-select-option value="November 2019">November 2019</a-select-option>
                  <a-select-option value="Desember 2019">Desember 2019</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>

            <a-col :span="8">
              <a-form-item label="Jamaah">
                <div class="icon-search">
                  <img class="max-width" src="/icons/search/boysmiling.svg" />
                </div>
                <a-dropdown overlayClassName="ant-menu--passenger" :trigger="['click']">
                  <a-menu slot="overlay">
                    <a-menu-item key="0" disabled>
                      <div class="d-flex align-items-center">
                        <div class="d-flex align-items-center">
                          <div class="mr-8">
                            <a-avatar icon="user" />
                          </div>
                          <div>
                            <div class="fs-14 fw-400 cr-black f-default">Dewasa</div>
                            <div class="fs-12 fw-400 cr-gray f-default">(12 thn atau lebih)</div>
                          </div>
                        </div>
                        <div class="ml-auto">
                          <number-input
                            v-model="dewasa"
                            :min="0"
                            :max="10"
                            :inputtable="false"
                            size="small"
                            center
                            controls
                          />
                        </div>
                      </div>
                    </a-menu-item>
                    <a-menu-item key="1" disabled>
                      <div class="d-flex align-items-center">
                        <div class="d-flex align-items-center">
                          <div class="mr-8">
                            <a-avatar icon="user" />
                          </div>
                          <div>
                            <div class="fs-14 fw-400 cr-black f-default">Anak</div>
                            <div class="fs-12 fw-400 cr-gray f-default">(2 - 11 thn)</div>
                          </div>
                        </div>
                        <div class="ml-auto">
                          <number-input
                            v-model="anak"
                            :min="0"
                            :max="10"
                            :inputtable="false"
                            size="small"
                            center
                            controls
                          />
                        </div>
                      </div>
                    </a-menu-item>
                  </a-menu>
                  <a-button
                    class="ant-btn--add-passenger text-left"
                    size="large"
                    block
                  >{{dewasa}} Dewasa, {{anak}} Anak</a-button>
                </a-dropdown>
              </a-form-item>
            </a-col>
          </a-row>

          <a-row :gutter="16">
            <a-col :span="8">
              <a-form-item label="Program Hari">
                <div class="icon-search">
                  <a-icon type="calendar" />
                </div>
                <a-select
                  showSearch
                  defaultValue="Program 9 Hari"
                  placeholder="Pilih Program Hari"
                  optionFilterProp="children"
                  style="width: 100%"
                  :showArrow="false"
                  @focus="handleFocus"
                  @blur="handleBlur"
                  @change="handleChange"
                  :filterOption="filterOption"
                  size="large"
                >
                  <a-select-option value="All">Tampilkan Semua</a-select-option>
                  <a-select-option value="Program 9 Hari">Program 9 Hari</a-select-option>
                  <a-select-option value="Program 10 Hari">Program 10 Hari</a-select-option>
                  <a-select-option value="Program 11 Hari">Program 11 Hari</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>

            <a-col :span="8">
              <a-form-item label="Rating Bintang Hotel">
                <div class="icon-search">
                  <a-icon type="crown" />
                </div>
                <a-select
                  showSearch
                  defaultValue="Bintang 3"
                  placeholder="Pilih Rating Bintang Hotel"
                  optionFilterProp="children"
                  style="width: 100%"
                  :showArrow="false"
                  @focus="handleFocus"
                  @blur="handleBlur"
                  @change="handleChange"
                  :filterOption="filterOption"
                  size="large"
                >
                  <a-select-option value="All">Tampilkan Semua</a-select-option>
                  <a-select-option value="Bintang 3">Bintang 3</a-select-option>
                  <a-select-option value="Bintang 4">Bintang 4</a-select-option>
                  <a-select-option value="Bintang 5">Bintang 5</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>

            <a-col :span="8">
              <a-form-item label="Kisaran Harga">
                <div class="icon-search">
                  <a-icon type="wallet" />
                </div>
                <a-select
                  showSearch
                  defaultValue="Rp.0 - Rp.20.000.000"
                  placeholder="Pilih Kisaran Harga"
                  optionFilterProp="children"
                  style="width: 100%"
                  :showArrow="false"
                  @focus="handleFocus"
                  @blur="handleBlur"
                  @change="handleChange"
                  :filterOption="filterOption"
                  size="large"
                >
                  <a-select-option value="All">Tampilkan Semua</a-select-option>
                  <a-select-option value="Rp.0 - Rp.20.000.000">Rp.0 - Rp.20.000.000</a-select-option>
                  <a-select-option value="Rp.20.000.000 - Rp.30.000.000">Rp.0 - Rp.20.000.000</a-select-option>
                  <a-select-option value="Rp.30.000.000 - Rp.40.000.000">Rp.0 - Rp.20.000.000</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
          </a-row>

          <a-row :gutter="16" type="flex" justify="end">
            <a-col :span="8">
              <a-button class="btn-search b-shadow b-radius" size="large" block>Cari Umrah</a-button>
            </a-col>
          </a-row>
        </a-form>
      </div>
    </a-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visibleSearch: false,
      dewasa: 1,
      anak: 0
    };
  },

  methods: {
    callback(val) {
      console.log(val);
    },
    handleChange(value) {
      console.log(`selected ${value}`);
    },
    handleBlur() {
      console.log("blur");
    },
    handleFocus() {
      console.log("focus");
    },
    filterOption(input, option) {
      return (
        option.componentOptions.children[0].text
          .toLowerCase()
          .indexOf(input.toLowerCase()) >= 0
      );
    },
    showSearch() {
      this.visibleSearch = !this.visibleSearch;
    }
  }
};
</script>