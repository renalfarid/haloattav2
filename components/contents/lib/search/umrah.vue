<template>
  <a-form layout="vertical" :form="form" class="form-search--costume" hideRequiredMark>
    <a-row :gutter="16">
      <a-col :xs="24" :sm="24" :md="12">
        <a-form-item label="Kota Asal">
          <div class="icon-search">
            <img class="max-width" src="/icons/search/airplane.svg" />
          </div>
          <a-select
            showSearch
            placeholder="Pilih Kota Asal"
            :showArrow="false"
            style="width: 100%"
            size="large"
            v-decorator="[
              'kota_asal',
              { rules: [{ required: true, message: 'Harus di isi!' }] }
            ]"
          >
            <a-select-option value="all">Tampilkan Semua</a-select-option>
            <a-select-option
              v-for="(item, key) in this.$store.state.itemOption.umroh.kota"
              :key="key"
              :value="item.nama_kota"
            >{{ item.nama_kota }}</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>

      <a-col :xs="24" :sm="24" :md="12">
        <a-form-item label="Program Hari">
          <div class="icon-search">
            <a-icon type="calendar" />
          </div>
          <a-select
            showSearch
            placeholder="Pilih Program Hari"
            style="width: 100%"
            :showArrow="false"
            size="large"
            v-decorator="[
              'program',
              { rules: [{ required: true, message: 'Harus di isi!' }] }
            ]"
          >
            <a-select-option value="all">Semua Program Hari</a-select-option>
            <a-select-option
              v-for="(item, key) in this.$store.state.itemOption.umroh.hari"
              :key="key"
              :value="item.jumlah_hari"
            >Program {{ item.jumlah_hari }} Hari</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
    </a-row>

    <a-row :gutter="16">
      <a-col :xs="24" :sm="24" :md="24">
        <a-form-item label="Bulan Keberangkatan">
          <div class="icon-search">
            <a-icon type="calendar" />
          </div>
          <a-select
            showSearch
            placeholder="Pilih Bulan Keberangkatan"
            style="width: 100%"
            :showArrow="false"
            size="large"
            v-decorator="[
              'bulan_keberangkatan',
              { rules: [{ required: true, message: 'Harus di isi!' }] }
            ]"
          >
            <a-select-option value="all">Semua Bulan</a-select-option>
            <a-select-option
              v-for="(item, key) in this.$store.state.itemOption.umroh
                .bulan_keberangkatan"
              :key="key"
              :value="item.bulan_tahun"
            >
              {{
              moment(item.bulan_tahun).format('MMMM YYYY')
              }}
            </a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
    </a-row>

    <a-row :gutter="16" type="flex" justify="end">
      <a-col :xs="24" :sm="24" :md="12">
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
import moment from "moment";
export default {
  data() {
    return {
      form: this.$form.createForm(this),
      option: [],
      kota_asal: "",
      bulan_keberangkatan: ""
    };
  },

  methods: {
    moment,
    searchUmrah() {
      this.form.validateFields((err, values) => {
        if (!err) {
          return this.$router.push({
            path: "/catalog/umrah/result",
            query: {
              kota_asal: values.kota_asal,
              bulan_keberangkatan: values.bulan_keberangkatan,
              program: values.program
            }
          });
        }
      });
    }
  }
};
</script>
