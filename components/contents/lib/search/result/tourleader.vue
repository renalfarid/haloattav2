<template>
  <div class="ant-layout--results-search">
    <a-card
      class="ant-card--results-info b-shadow b-solid b-radius"
      :bordered="false"
    >
      <div class="d-flex align-items-center">
        <div class="ant-card--results-info-left d-flex align-items-center">
          <div>
            <a-avatar
              style="backgroundColor: #CB9605"
              class="d-flex align-items-center"
              :size="64"
            >
              <i class="icon-tourleader-white"></i>
            </a-avatar>
          </div>
          <div>
            <div class="ant-card--results-info-title">
              Tour Leader Umrah Makassar
            </div>
            <div class="ant-card--results-info-subtitle">
              <span>Umrah</span>
              <a-divider type="vertical" />
              <span>Makassar ke Saudi Arabia</span>
              <a-divider type="vertical" />
              <span>9 Hari</span>
            </div>
          </div>
        </div>
        <div
          class="ant-card--results-info-right ml-auto"
          v-bind:class="visibleSearch ? 'd-none' : ''"
        >
          <a-button @click="showSearch" class="b-shadow b-radius"
            >Ganti Pencarian</a-button
          >
        </div>
      </div>

      <div class="ant-form--search" v-show="visibleSearch">
        <a-divider />
        <a-form layout="vertical" class="form-search--costume">
          <a-row :gutter="16">
            <a-col :span="8">
              <a-form-item label="Dari" hasFeedback>
                <div class="icon-search">
                  <a-icon type="environment" />
                </div>
                <a-select
                  showSearch
                  :defaultValue="1"
                  placeholder="Pilih Kota"
                  :showArrow="false"
                  style="width: 100%"
                  size="large"
                >
                  <a-select-option :value="1">Makassar</a-select-option>
                  <a-select-option :value="2">Jakarta</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>

            <a-col :span="8">
              <a-form-item label="Ke" hasFeedback>
                <div class="icon-search">
                  <a-icon type="environment" />
                </div>
                <a-select
                  showSearch
                  :defaultValue="1"
                  placeholder="Pilih Tujuan"
                  :showArrow="false"
                  style="width: 100%"
                  size="large"
                >
                  <a-select-option :value="1">Saudi Arabia</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>

            <a-col :span="8">
              <a-form-item label="Jenis Kegiatan" hasFeedback>
                <div class="icon-search">
                  <span class="icon-tourleader-sm"></span>
                </div>
                <a-select
                  showSearch
                  :defaultValue="1"
                  placeholder="Pilih Kegiatan"
                  style="width: 100%"
                  :showArrow="false"
                  size="large"
                >
                  <a-select-option :value="1">Umrah</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
          </a-row>

          <a-row :gutter="16">
            <a-col :span="8">
              <a-form-item label="Program Hari" hasFeedback>
                <div class="icon-search">
                  <a-icon type="calendar" />
                </div>
                <a-select
                  showSearch
                  :defaultValue="1"
                  placeholder="Pilih Program"
                  style="width: 100%"
                  :showArrow="false"
                  size="large"
                >
                  <a-select-option :value="1"
                    >Semua Program Hari</a-select-option
                  >
                  <a-select-option :value="2">Program 9 Hari</a-select-option>
                  <a-select-option :value="3">Program 10 Hari</a-select-option>
                  <a-select-option :value="4">Program 11 Hari</a-select-option>
                  <a-select-option :value="5">Program 12 Hari</a-select-option>
                  <a-select-option :value="6">Program 13 Hari</a-select-option>
                  <a-select-option :value="7">Program 14 Hari</a-select-option>
                  <a-select-option :value="8">Program 15 Hari</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>

            <a-col :span="8">
              <a-form-item label="Tanggal Keberangkatan" hasFeedback>
                <div class="icon-search">
                  <a-icon type="calendar" />
                </div>
                <a-date-picker
                  size="large"
                  style="width: 100%"
                  :disabledDate="disabledDate"
                  placeholder="Pilih Tanggal"
                  v-decorator="[
                    'startdate',
                    {
                      rules: [
                        {
                          type: 'object',
                          required: true,
                          message: 'Harus di isi!'
                        }
                      ]
                    }
                  ]"
                >
                  <a-icon class="d-none" slot="suffixIcon" type="calendar" />
                </a-date-picker>
              </a-form-item>
            </a-col>

            <a-col :span="8">
              <a-button
                html-type="submit"
                class="btn-search b-shadow b-radius"
                size="large"
                block
                :style="{ bottom: '-25px' }"
                >Cari Tour Leader</a-button
              >
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
    disabledDate(current) {
      return current && current < moment().endOf("day");
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
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
