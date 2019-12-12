<template>
  <div class="ant-layout--results-search">
    <a-card class="ant-card--results-info b-shadow b-solid b-radius" :bordered="false">
      <div class="d-flex align-items-center">
        <div class="ant-card--results-info-left d-flex align-items-center">
          <div>
            <a-avatar style="backgroundColor: #05CBB0" class="d-flex align-items-center" :size="64">
              <i class="icon-umrah-white"></i>
            </a-avatar>
          </div>
          <div>
            <div class="ant-card--results-info-title">Umrah September 2019</div>
            <div class="ant-card--results-info-subtitle">
              <span>Keberangkatan Makassar</span>
              <a-divider type="vertical" />
              <span>September 2019</span>
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
        <a-form layout="vertical" :form="form" class="form-search--costume" hideRequiredMark>
          <a-row :gutter="16">
            <a-col :span="6">
              <a-form-item label="Kota Asal" hasFeedback>
                <div class="icon-search">
                  <img class="max-width" src="/icons/search/airplane.svg" />
                </div>
                <a-select
                  showSearch
                  placeholder="Pilih Kota Asal"
                  :showArrow="false"
                  style="width: 100%"
                  size="large"
                  v-decorator="['cityStart',{rules: [{ required: true, message: 'Harus di isi!' }]}]"
                >
                  <a-select-option :value="1">Tampilkan Semua</a-select-option>
                  <a-select-option :value="2">Makassar</a-select-option>
                  <a-select-option :value="3">Jakarta</a-select-option>
                  <a-select-option :value="4">Bandung</a-select-option>
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
              <a-form-item label="Bulan Keberangkatan" hasFeedback>
                <div class="icon-search">
                  <a-icon type="calendar" />
                </div>
                <a-select
                  showSearch
                  :defaultValue="1"
                  placeholder="Pilih Bulan Keberangkatan"
                  style="width: 100%"
                  :showArrow="false"
                  size="large"
                >
                  <a-select-option :value="1">Semua Bulan</a-select-option>
                  <a-select-option :value="2">September 2019</a-select-option>
                  <a-select-option :value="3">November 2019</a-select-option>
                  <a-select-option :value="4">Desember 2019</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>

            <a-col :span="6">
              <a-form-item label="Tanggal Keberangkatan" hasFeedback>
                <div class="icon-search">
                  <a-icon type="calendar" />
                </div>
                <a-select
                  showSearch
                  :defaultValue="1"
                  placeholder="Pilih Tanggal"
                  style="width: 100%"
                  :showArrow="false"
                  size="large"
                >
                  <a-select-option :value="1">Semua Tanggal</a-select-option>
                  <a-select-option :value="2">1</a-select-option>
                  <a-select-option :value="3">2</a-select-option>
                  <a-select-option :value="4">3</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
          </a-row>

          <a-row :gutter="16" type="flex" justify="end">
            <a-col :span="6">
              <a-button
                @click="searchUmrah"
                class="btn-search b-shadow b-radius"
                size="large"
                block
              >Cari Umrah</a-button>
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
      form: this.$form.createForm(this),
      visibleSearch: false
    };
  },

  methods: {
    showSearch() {
      this.visibleSearch = !this.visibleSearch;
    },
    searchUmrah() {
      this.form.validateFields(err => {
        if (!err) {
          return this.$router.push({ path: "/catalog/umrah/result" });
        }
      });
    }
  }
};
</script>