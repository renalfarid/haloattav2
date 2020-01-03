<template>
  <div class="ant-layout--results-search">
    <a-card class="ant-card--results-info b-shadow b-solid b-radius" :bordered="false">
      <div class="d-flex align-items-center">
        <div class="ant-card--results-info-left d-flex align-items-center">
          <div>
            <a-avatar class="d-flex align-items-center" style="backgroundColor: #05CBB0" :size="64">
              <i class="icon-accommodation-white"></i>
            </a-avatar>
          </div>
          <div>
            <div class="ant-card--results-info-title">
              LA Akomodasi Umrah 3 Hari Mekkah
              <a-icon type="arrow-right" class="cr-gray ml-8 mr-8" />4 Hari Madinah
            </div>
            <div class="ant-card--results-info-subtitle">
              Keberangkatan 10 Desember 2019
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
          <a-row :gutter="16">
            <a-col :span="6">
              <a-form-item label="Jenis LA Akomodasi" hasFeedback>
                <div class="icon-search">
                  <span class="icon-accommodation-sm"></span>
                </div>
                <a-select
                  showSearch
                  :defaultValue="1"
                  placeholder="Pilih LA Akomodasi"
                  style="width: 100%"
                  :showArrow="false"
                  size="large"
                >
                  <a-select-option :value="1">Umrah</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>

            <a-col :span="6">
              <a-form-item label="Program Hari" hasFeedback>
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
                  <a-select-option :value="1">Semua Program Hari</a-select-option>
                  <a-select-option :value="2">Program 9 Hari</a-select-option>
                  <a-select-option :value="3">Program 10 Hari</a-select-option>
                  <a-select-option :value="4">Program 11 Hari</a-select-option>
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
                  v-decorator="['tanggal_checkIn',{rules: [{ type: 'object', required: true, message: 'Harus di isi!' }]}]"
                >
                  <a-icon class="d-none" slot="suffixIcon" type="calendar" />
                </a-date-picker>
              </a-form-item>
            </a-col>

            <a-col :span="6">
              <a-form-item label="Jumlah Pax" hasFeedback>
                <div class="icon-search">
                  <img class="max-width" src="/icons/search/boysmiling.svg" />
                </div>
                <a-dropdown overlayClassName="ant-menu--passenger" :trigger="['click']">
                  <a-menu slot="overlay">
                    <a-menu-item key="1" disabled>
                      <div class="d-flex align-items-center">
                        <div>
                          <div class="fs-14 fw-400 cr-black f-default">Jumlah Pax</div>
                        </div>
                        <div class="ml-auto">
                          <number-input
                            v-model="qty"
                            :min="1"
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
                  >Jumlah {{qty}} Pax</a-button>
                </a-dropdown>
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
              >Cari LA Akomodasi</a-button>
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
      qty: 1
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
          return this.$router.push("/accommodation/result");
        }
      });
    }
  }
};
</script>