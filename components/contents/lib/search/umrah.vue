<template>
  <a-form layout="vertical" :form="form" class="form-search--costume" hideRequiredMark>
    <a-row :gutter="16">
      <a-col :span="12">
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
            v-decorator="['kota_asal',{rules: [{ required: true, message: 'Harus di isi!' }]}]"
          >
            <a-select-option :value="1">Tampilkan Semua</a-select-option>
            <a-select-option :value="2">Makassar</a-select-option>
            <a-select-option :value="3">Jakarta</a-select-option>
            <a-select-option :value="4">Bandung</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>

      <a-col :span="12">
        <a-form-item label="Program Hari" hasFeedback>
          <div class="icon-search">
            <a-icon type="calendar" />
          </div>
          <a-select
            showSearch
            placeholder="Pilih Program Hari"
            style="width: 100%"
            :showArrow="false"
            size="large"
            v-decorator="['program',{rules: [{ required: true, message: 'Harus di isi!' }]}]"
          >
            <a-select-option :value="1">Semua Program Hari</a-select-option>
            <a-select-option :value="2">Program 9 Hari</a-select-option>
            <a-select-option :value="3">Program 10 Hari</a-select-option>
            <a-select-option :value="4">Program 11 Hari</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
    </a-row>

    <a-row :gutter="16">
      <a-col :span="12">
        <a-form-item label="Bulan Keberangkatan" hasFeedback>
          <div class="icon-search">
            <a-icon type="calendar" />
          </div>
          <a-select
            showSearch
            placeholder="Pilih Bulan Keberangkatan"
            style="width: 100%"
            :showArrow="false"
            size="large"
            v-decorator="['bulan_keberangkatan',{rules: [{ required: true, message: 'Harus di isi!' }]}]"
          >
            <a-select-option :value="1">Semua Bulan</a-select-option>
            <a-select-option :value="2">September 2019</a-select-option>
            <a-select-option :value="3">Oktober 2019</a-select-option>
            <a-select-option :value="4">Desember 2019</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>

      <a-col :span="12">
        <a-form-item label="Tanggal Keberangkatan" hasFeedback>
          <div class="icon-search">
            <a-icon type="calendar" />
          </div>
          <a-select
            showSearch
            placeholder="Pilih Tanggal"
            style="width: 100%"
            :showArrow="false"
            size="large"
            v-decorator="['tgl_keberangkatan',{rules: [{ required: true, message: 'Harus di isi!' }]}]"
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
      <a-col :span="12">
        <a-button
          @click="searchUmrah"
          class="btn-search b-shadow b-radius"
          size="large"
          block
        >Cari Umrah</a-button>
      </a-col>
    </a-row>
  </a-form>
</template>
<script>
// import axios from "axios";
export default {
  data() {
    return {
      form: this.$form.createForm(this),
      option: [],
      kota_asal: "",
      bulan_keberangkatan: ""
    };
  },
  // created() {
  //   this.getOptions();
  // },
  methods: {
    searchUmrah() {
      this.form.validateFields(err => {
        if (!err) {
          return this.$router.push({
            path: "/catalog/umrah/result",
            query: {
              kota_asal: this.kota_asal,
              bulan_keberangkatan: this.bulan_keberangkatan
            }
          });
        }
      });
    }
    // getOptions() {
    //   axios.get(process.env.baseUrl + "option/umrah").then(response => {
    //     console.log(response.data.data.kota, "option");

    //     this.data = response.data.data;
    //   });
    // }
  }
};
</script>
