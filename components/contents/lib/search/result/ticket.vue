<template>
  <div class="ant-layout--results-search">
    <a-card class="ant-card--results-info b-shadow b-solid b-radius" :bordered="false">
      <div class="d-flex align-items-center">
        <div class="ant-card--results-info-left d-flex align-items-center">
          <div>
            <a-avatar class="d-flex align-items-center" style="backgroundColor: #F43662" :size="64">
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
          <a-button @click="showSearch" class="b-shadow b-radius">Ganti Pencarian</a-button>
        </div>
      </div>

      <div class="ant-form--search" v-show="visibleSearch">
        <a-divider />
        <a-form
          layout="vertical"
          :form="form"
          @submit="handleSubmit"
          hideRequiredMark
          class="form-search--costume"
        >
          <a-form-item hasFeedback>
            <a-radio-group name="radioGroup" :defaultValue="1">
              <div class="d-flex align-items-center">
                <label class="fs-16 cr-black mr-24">Tipe Perjalanan</label>
                <a-radio :value="1" class="fs-16 cr-black mr-16">Pulang Pergi</a-radio>
                <a-radio :value="2" class="fs-16 cr-black">Sekali Jalan</a-radio>
              </div>
            </a-radio-group>
          </a-form-item>

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
                  <a-select-option value="Makassar">Makassar (UPG)</a-select-option>
                  <a-select-option value="Jakarta">Jakarta (CGK)</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>

            <a-col :span="8">
              <a-form-item label="Kota Tujuan">
                <div class="icon-search">
                  <a-icon type="environment" />
                </div>
                <a-select
                  showSearch
                  defaultValue="Jeddah"
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
                  <a-select-option value="Jeddah">Jeddah (JED)</a-select-option>
                  <a-select-option value="Medinah">Medinah (MED)</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>

            <a-col :span="8">
              <a-form-item label="Jumlah Penumpang" hasFeedback>
                <div class="icon-search">
                  <img class="max-width" src="/icons/search/boysmiling.svg" />
                </div>
                <a-dropdown overlayClassName="ant-menu--passenger" :trigger="['click']">
                  <a-menu slot="overlay">
                    <a-menu-item key="0" disabled>
                      <div class="d-flex align-items-center">
                        <div>
                          <div class="fs-14 fw-400 cr-black f-default">Dewasa</div>
                          <div class="fs-12 fw-400 cr-gray f-default">(Umur 12 atau lebih)</div>
                        </div>
                        <div class="ml-auto">
                          <number-input
                            v-model="dewasa"
                            :min="1"
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
                        <div>
                          <div class="fs-14 fw-400 cr-black f-default">Anak</div>
                          <div class="fs-12 fw-400 cr-gray f-default">(Umur 2 sampai 11 thn)</div>
                        </div>
                        <div class="ml-auto">
                          <number-input
                            v-model="anak"
                            :min="0"
                            :inputtable="false"
                            size="small"
                            center
                            controls
                          />
                        </div>
                      </div>
                    </a-menu-item>
                    <a-menu-item key="2" disabled>
                      <div class="d-flex align-items-center">
                        <div>
                          <div class="fs-14 fw-400 cr-black f-default">Bayi</div>
                          <div class="fs-12 fw-400 cr-gray f-default">(Umur dibawah 2 thn)</div>
                        </div>
                        <div class="ml-auto">
                          <number-input
                            v-model="bayi"
                            :min="0"
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
                    class="ant-btn--add-passenger fs-16 text-left"
                    size="large"
                    block
                  >{{dewasa}} Dewasa, {{anak}} Anak, {{bayi}} Bayi</a-button>
                </a-dropdown>
              </a-form-item>
            </a-col>
          </a-row>

          <a-row :gutter="16">
            <a-col :span="8">
              <a-form-item label="Bulan Keberangkatan" hasFeedback>
                <div class="icon-search">
                  <a-icon type="calendar" />
                </div>
                <a-select
                  showSearch
                  defaultValue="September 2019"
                  placeholder="Pilih Bulan Keberangkatan"
                  style="width: 100%"
                  :showArrow="false"
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
              <a-form-item label="Tanggal Keberangkatan" hasFeedback>
                <div class="icon-search">
                  <a-icon type="calendar" />
                </div>
                <a-select
                  showSearch
                  defaultValue="All"
                  placeholder="Pilih Tanggal"
                  style="width: 100%"
                  :showArrow="false"
                  :filterOption="filterOption"
                  size="large"
                >
                  <a-select-option value="All">Tampilkan Semua</a-select-option>
                  <a-select-option value="01">01</a-select-option>
                  <a-select-option value="02">02</a-select-option>
                  <a-select-option value="03">03</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>

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
          </a-row>

          <a-row :gutter="16" type="flex" justify="end">
            <a-col :span="8">
              <a-button
                html-type="submit"
                class="btn-search b-shadow b-radius"
                size="large"
                block
              >Cari Tiket Group</a-button>
            </a-col>
          </a-row>
        </a-form>
      </div>
    </a-card>
  </div>
</template>
<script>
import moment from "moment";
export default {
  data() {
    this.dateFormat = "YYYY-MM-DD";
    return {
      visibleSearch: false,
      dewasa: 2,
      anak: 1,
      bayi: 0
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  methods: {
    moment,
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
    },
    disabledDate(current) {
      return current && current < moment().endOf("day");
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
          return this.$router.push("/ticket-group/result");
        }
      });
    }
  }
};
</script>