<template>
  <div class="ant-layout--results-search">
    <a-card class="ant-card--results-info b-shadow b-solid b-radius" :bordered="false">
      <div class="d-flex align-items-center">
        <div class="ant-card--results-info-left d-flex align-items-center">
          <div>
            <a-avatar style="backgroundColor: #CB9605" class="d-flex align-items-center" :size="64">
              <i class="icon-tourleader-white"></i>
            </a-avatar>
          </div>
          <div>
            <div class="ant-card--results-info-title">Tour Leader Umrah Makassar</div>
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
        <a-form layout="vertical" class="form-search--costume">
          <a-row :gutter="16">
            <a-col :span="12">
              <a-form-item label="Kota Asal" hasFeedback>
                <div class="icon-search">
                  <a-icon type="environment" />
                </div>
                <a-select
                  showSearch
                  defaultValue="Makassar"
                  placeholder="Pilih Kota"
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
                </a-select>
              </a-form-item>
            </a-col>

            <a-col :span="12">
              <a-form-item label="Tanggal Keberangkatan" hasFeedback>
                <div class="icon-search">
                  <a-icon type="calendar" />
                </div>
                <a-date-picker
                  size="large"
                  style="width: 100%"
                  v-decorator="['startdate',{rules: [{ type: 'object', required: true, message: 'Harus di isi!' }]}]"
                  :disabledDate="disabledDate"
                  placeholder="Pilih Tanggal"
                >
                  <a-icon class="d-none" slot="suffixIcon" type="calendar" />
                </a-date-picker>
              </a-form-item>
            </a-col>
          </a-row>

          <a-row :gutter="16">
            <a-col :span="12">
              <a-form-item label="Program Hari" hasFeedback>
                <div class="icon-search">
                  <a-icon type="calendar" />
                </div>
                <a-select
                  showSearch
                  defaultValue="Program 9 Hari"
                  placeholder="Pilih Program"
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
                  <a-select-option value="Program 12 Hari">Program 12 Hari</a-select-option>
                  <a-select-option value="Program 13 Hari">Program 13 Hari</a-select-option>
                  <a-select-option value="Program 14 Hari">Program 14 Hari</a-select-option>
                  <a-select-option value="Program 15 Hari">Program 15 Hari</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>

            <a-col :span="12">
              <a-form-item label="Tipe Tourleader" hasFeedback>
                <div class="icon-search">
                  <span class="icon-tourleader-sm"></span>
                </div>
                <a-select
                  showSearch
                  defaultValue="pemula"
                  placeholder="Pilih Tour Leader"
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
                  <a-select-option value="pemula">Pemula</a-select-option>
                  <a-select-option value="Berpengalaman">Berpengalaman</a-select-option>
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
              >Cari Tour Leader</a-button>
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
  name: "searchTourleader",
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
          return this.$router.push("/catalog/tourleader/result");
        }
      });
    },
    showSearch() {
      this.visibleSearch = !this.visibleSearch;
    }
  }
};
</script>