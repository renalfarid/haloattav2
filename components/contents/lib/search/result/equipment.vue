<template>
  <div class="ant-layout--results-search">
    <a-card class="ant-card--results-info b-shadow b-solid b-radius" :bordered="false">
      <div class="d-flex align-items-center">
        <div class="ant-card--results-info-left d-flex align-items-center">
          <div>
            <a-avatar style="backgroundColor: #707070" class="d-flex align-items-center" :size="64">
              <i class="icon-equipment-white"></i>
            </a-avatar>
          </div>
          <div>
            <div class="ant-card--results-info-title">Perlengkapan Umrah Makassar</div>
            <div class="ant-card--results-info-subtitle">
              <span>Makassar</span>
              <a-divider type="vertical" />
              <span>Perlengkapan Umrah</span>
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
            <a-col :span="9">
              <a-form-item label="Kota Pemesan" hasFeedback>
                <div class="icon-search">
                  <a-icon type="environment" />
                </div>
                <a-select
                  showSearch
                  defaultValue="Makassar"
                  placeholder="Pilih"
                  optionFilterProp="children"
                  style="width: 100%"
                  :showArrow="false"
                  @focus="handleFocus"
                  @blur="handleBlur"
                  @change="handleChange"
                  :filterOption="filterOption"
                  size="large"
                >
                  <a-select-option value="Makassar">Makassar</a-select-option>
                  <a-select-option value="Jakarta">Jakarta</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>

            <a-col :span="9">
              <a-form-item label="Kategori" hasFeedback>
                <div class="icon-search">
                  <span class="icon-equipment-sm"></span>
                </div>
                <a-select
                  showSearch
                  defaultValue="Perlengkapan Umrah"
                  placeholder="Pilih Kategori"
                  optionFilterProp="children"
                  :showArrow="false"
                  style="width: 100%"
                  @focus="handleFocus"
                  @blur="handleBlur"
                  @change="handleChange"
                  :filterOption="filterOption"
                  size="large"
                >
                  <a-select-option value="Perlengkapan Umrah">Perlengkapan Umrah</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>

            <a-col :span="6">
              <a-form-item :style="{ bottom: '-25px' }">
                <a-button
                  html-type="submit"
                  class="btn-search b-shadow b-radius"
                  size="large"
                  block
                >Cari Perlengkapan</a-button>
              </a-form-item>
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
  name: "searchEquipment",
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
          return this.$router.push("/catalog/equipment/result");
        }
      });
    },
    showSearch() {
      this.visibleSearch = !this.visibleSearch;
    }
  }
};
</script>