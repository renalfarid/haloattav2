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
            <a-col :span="6">
              <a-form-item label="Kota Asal">
                <div class="icon-search">
                  <img class="max-width" src="/icons/search/airplane.svg" />
                </div>
                <a-select
                  showSearch
                  :defaultValue="1"
                  placeholder="Pilih Kota Asal"
                  :showArrow="false"
                  style="width: 100%"
                  size="large"
                >
                  <a-select-option :value="1">Tampilkan Semua</a-select-option>
                  <a-select-option :value="2">Makassar (UPG)</a-select-option>
                  <a-select-option :value="3">Jakarta (CGK)</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>

            <a-col :span="6">
              <a-form-item label="Kota Tujuan">
                <div class="icon-search">
                  <a-icon type="environment" />
                </div>
                <a-select
                  showSearch
                  :defaultValue="1"
                  placeholder="Pilih Bulan Keberangkatan"
                  style="width: 100%"
                  :showArrow="false"
                  size="large"
                >
                  <a-select-option :value="1">Tampilkan Semua</a-select-option>
                  <a-select-option :value="2">Jeddah (JED)</a-select-option>
                  <a-select-option :value="3">Medinah (MED)</a-select-option>
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
              <a-form-item label="Program Hari">
                <div class="icon-search">
                  <a-icon type="calendar" />
                </div>
                <a-select
                  showSearch
                  :defaultValue="1"
                  placeholder="Pilih Program Hari"
                  style="width: 100%"
                  :showArrow="false"
                  size="large"
                >
                  <a-select-option :value="1">Tampilkan Semua</a-select-option>
                  <a-select-option :value="2">Program 9 Hari</a-select-option>
                  <a-select-option :value="3">Program 10 Hari</a-select-option>
                  <a-select-option :value="4">Program 11 Hari</a-select-option>
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
      visibleSearch: false
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  methods: {
    moment,
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
          return this.$router.push("/ticket-group/result");
        }
      });
    }
  }
};
</script>