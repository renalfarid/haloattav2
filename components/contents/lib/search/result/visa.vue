<template>
  <div class="ant-layout--results-search">
    <a-card class="ant-card--results-info b-shadow b-solid b-radius" :bordered="false">
      <div class="d-flex align-items-center">
        <div class="ant-card--results-info-left d-flex align-items-center">
          <div>
            <a-avatar style="backgroundColor: #FF7C0A" class="d-flex align-items-center" :size="64">
              <i class="icon-visa-white"></i>
            </a-avatar>
          </div>
          <div>
            <div class="ant-card--results-info-title">Visa Umrah September 2019</div>
            <div class="ant-card--results-info-subtitle">
              <span>Program 9 Hari</span>
              <a-divider type="vertical" />
              <span>40 Pax</span>
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
              <a-form-item label="Negara Tujuan" hasFeedback>
                <div class="icon-search">
                  <img class="max-width" src="/icons/search/place.svg" />
                </div>
                <a-select
                  showSearch
                  defaultValue="Saudi Arabia"
                  placeholder="Pilih Negara Tujuan"
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
                  <a-select-option value="Saudi Arabia">Saudi Arabia</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>

            <a-col :span="8">
              <a-form-item label="Jenis Visa" hasFeedback>
                <div class="icon-search">
                  <img class="max-width" src="/icons/search/visa.svg" />
                </div>
                <a-select
                  showSearch
                  defaultValue="Visa on Arrival"
                  placeholder="Pilih Visa"
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
                  <a-select-option
                    value="Visa Kunjungan Wisata/ Visa Turis"
                  >Visa Kunjungan Wisata/ Visa Turis</a-select-option>
                  <a-select-option value="Visa on Arrival">Visa on Arrival</a-select-option>
                  <a-select-option value="Visa Kunjungan Bisnis">Visa Kunjungan Bisnis</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>

            <a-col :span="8">
              <a-form-item label="Jumlah Pax" hasFeedback>
                <div class="icon-search">
                  <img class="max-width" src="/icons/search/boysmiling.svg" />
                </div>
                <a-select
                  showSearch
                  defaultValue="All"
                  placeholder="Pilih Jumlah Pax"
                  :showArrow="false"
                  style="width: 100%"
                  size="large"
                >
                  <a-select-option value="All">Tampilkan Semua</a-select-option>
                  <a-select-option value="5 Pax">5 Pax</a-select-option>
                  <a-select-option value="10 Pax">10 Pax</a-select-option>
                  <a-select-option value="15 Pax">15 Pax</a-select-option>
                  <a-select-option value="20 Pax">20 Pax</a-select-option>
                  <a-select-option value="25 Pax">25 Pax</a-select-option>
                  <a-select-option value="30 Pax">30 Pax</a-select-option>
                  <a-select-option value="35 Pax">35 Pax</a-select-option>
                  <a-select-option value="40 Pax">40 Pax</a-select-option>
                  <a-select-option value="45 Pax">45 Pax</a-select-option>
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
              >Cari Visa</a-button>
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
  name: "searchTicket",
  data() {
    this.dateFormat = "YYYY-MM-DD";
    return {
      visibleSearch: false
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  methods: {
    moment,
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
    disabledDate(current) {
      return current && current < moment().endOf("day");
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
          return this.$router.push("/catalog/visa/result");
        }
      });
    },
    showSearch() {
      this.visibleSearch = !this.visibleSearch;
    }
  }
};
</script>