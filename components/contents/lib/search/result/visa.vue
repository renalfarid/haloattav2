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
            <a-col :span="6">
              <a-form-item label="Negara Tujuan" hasFeedback>
                <div class="icon-search">
                  <img class="max-width" src="/icons/search/place.svg" />
                </div>
                <a-select
                  showSearch
                  :defaultValue="1"
                  placeholder="Pilih Negara Tujuan"
                  :showArrow="false"
                  style="width: 100%"
                  size="large"
                >
                  <a-select-option :value="1">Semua Negara</a-select-option>
                  <a-select-option :value="2">Saudi Arabia</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>

            <a-col :span="6">
              <a-form-item label="Jenis Visa" hasFeedback>
                <div class="icon-search">
                  <span class="icon-visa-sm"></span>
                </div>
                <a-select
                  showSearch
                  :defaultValue="1"
                  placeholder="Pilih Jenis Visa"
                  :showArrow="false"
                  style="width: 100%"
                  size="large"
                >
                  <a-select-option :value="1">Umrah</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>

            <a-col :span="6">
              <a-form-item label="Tanggal Keberangkatan" hasFeedback>
                <div class="icon-search">
                  <a-icon type="calendar" />
                </div>
                <a-date-picker
                  size="large"
                  style="width: 100%"
                  :disabledDate="disabledDate"
                  placeholder="Pilih Tanggal Keberangkatan"
                  v-decorator="['startdate',{rules: [{ type: 'object', required: true, message: 'Harus di isi!' }]}]"
                >
                  <a-icon class="d-none" slot="suffixIcon" type="calendar" />
                </a-date-picker>
              </a-form-item>
            </a-col>

            <a-col :span="6">
              <a-form-item label="Tipe Visa" hasFeedback>
                <div class="icon-search">
                  <img class="max-width" src="/icons/search/visa.svg" />
                </div>
                <a-select
                  showSearch
                  :defaultValue="1"
                  placeholder="Pilih Tipe Visa"
                  style="width: 100%"
                  :showArrow="false"
                  size="large"
                >
                  <a-select-option :value="1">Single Entry</a-select-option>
                  <a-select-option :value="2">Multiple Entry</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
          </a-row>

          <a-row :gutter="16" type="flex" justify="end">
            <a-col :span="6">
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
    disabledDate(current) {
      return current && current < moment().endOf("day");
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
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