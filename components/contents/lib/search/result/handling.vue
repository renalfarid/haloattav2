<template>
  <div class="ant-layout--results-search">
    <a-card class="ant-card--results-info b-shadow b-solid b-radius" :bordered="false">
      <div class="d-flex align-items-center">
        <div class="ant-card--results-info-left d-flex align-items-center">
          <div>
            <a-avatar style="backgroundColor: #7A00A5" class="d-flex align-items-center" :size="64">
              <i class="icon-handling-white"></i>
            </a-avatar>
          </div>
          <div>
            <div class="ant-card--results-info-title">Handling Domestik Umrah Keberangkatan Makassar</div>
            <div class="ant-card--results-info-subtitle">
              <span>Makassar</span>
              <a-divider type="vertical" />
              <span>30 Des 2019</span>
              <a-divider type="vertical" />
              <span>Standar</span>
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
          <a-row :gutter="16" type="flex" justify="end">
            <a-col :span="6">
              <a-form-item class="mb-0 pb-0">
                <div class="d-flex align-items-center">
                  <div class="mr-8">
                    <a-switch v-on:click="clickShow = !clickShow">
                      <a-icon type="check" slot="checkedChildren" />
                      <a-icon type="close" slot="unCheckedChildren" />
                    </a-switch>
                  </div>
                  <div class="fs-14 fw-500 cr-black">Pulang Pergi</div>
                </div>
              </a-form-item>
            </a-col>
          </a-row>

          <a-row :gutter="16">
            <a-col :span="6">
              <a-form-item label="Dari" hasFeedback>
                <div class="icon-search">
                  <a-icon type="environment" />
                </div>
                <a-select
                  showSearch
                  :defaultValue="1"
                  placeholder="Pilih Kota"
                  style="width: 100%"
                  :showArrow="false"
                  size="large"
                >
                  <a-select-option :value="1">Makassar</a-select-option>
                  <a-select-option :value="2">Jakarta</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>

            <a-col :span="6">
              <a-form-item label="Jenis Layanan" hasFeedback>
                <div class="icon-search">
                  <span class="icon-handling-sm"></span>
                </div>
                <a-select
                  showSearch
                  :defaultValue="1"
                  placeholder="Pilih Jenis Layanan"
                  style="width: 100%"
                  :showArrow="false"
                  size="large"
                >
                  <a-select-option :value="1">Standar</a-select-option>
                  <a-select-option :value="2">Premium</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>

            <a-col :span="12">
              <div class="d-flex align-items-center w-100">
                <div class="w-100">
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
                </div>

                <div class="w-100 pl-16" v-if="clickShow">
                  <a-form-item label="Tanggal Kedatangan">
                    <div class="icon-search">
                      <a-icon type="calendar" />
                    </div>
                    <a-date-picker
                      size="large"
                      style="width: 100%"
                      :disabledDate="disabledDate"
                      placeholder="Pilih Tanggal Kedatangan"
                      v-decorator="['enddate',{rules: [{ type: 'object', required: true, message: 'Harus di isi!' }]}]"
                    >
                      <a-icon class="d-none" slot="suffixIcon" type="calendar" />
                    </a-date-picker>
                  </a-form-item>
                </div>
              </div>
            </a-col>
          </a-row>

          <a-row :gutter="16" type="flex" justify="end">
            <a-col :span="6">
              <a-button
                html-type="submit"
                class="btn-search b-shadow b-radius"
                size="large"
                block
              >Cari Handling</a-button>
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
  name: "searchHandling",
  data() {
    this.dateFormat = "YYYY-MM-DD";
    return {
      visibleSearch: false,
      clickShow: false
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
          return this.$router.push("/catalog/handling/result");
        }
      });
    },
    showSearch() {
      this.visibleSearch = !this.visibleSearch;
    }
  }
};
</script>