<template>
  <a-form
    layout="vertical"
    :form="form"
    @submit="handleSubmit"
    hideRequiredMark
    class="form-search--costume"
  >
    <a-row :gutter="16">
      <a-col :xs="24" :sm="24" :md="12">
        <a-form-item class="ant-form-item-type" label="Tipe Perjalanan">
          <a-radio-group name="radioGroup" :defaultValue="1">
            <a-radio :value="1" class="fs-16 cr-black mr-16"
              >Pulang Pergi</a-radio
            >
            <a-radio :value="2" class="fs-16 cr-black">Sekali Jalan</a-radio>
          </a-radio-group>
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
          >
            <a-select-option :value="1">Semua Kota</a-select-option>
            <a-select-option :value="2">Makassar (UPG)</a-select-option>
            <a-select-option :value="3">Jakarta (CGK)</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>

      <a-col :xs="24" :sm="24" :md="12">
        <a-form-item label="Kota Tujuan">
          <div class="icon-search">
            <a-icon type="environment" />
          </div>
          <a-select
            showSearch
            placeholder="Pilih Kota Tujuan"
            style="width: 100%"
            :showArrow="false"
            size="large"
          >
            <a-select-option :value="1">Semua Kota</a-select-option>
            <a-select-option :value="2">Jeddah (JED)</a-select-option>
            <a-select-option :value="3">Medinah (MED)</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
    </a-row>

    <a-row :gutter="16">
      <a-col :xs="24" :sm="24" :md="24">
        <a-form-item label="Tanggal Keberangkatan">
          <div class="icon-search">
            <a-icon type="calendar" />
          </div>
          <a-date-picker
            size="large"
            style="width: 100%"
            :disabledDate="disabledDate"
            placeholder="Pilih Tanggal Keberangkatan"
            v-decorator="[
              'startdate',
              {
                rules: [
                  { type: 'object', required: true, message: 'Harus di isi!' }
                ]
              }
            ]"
          >
            <a-icon class="d-none" slot="suffixIcon" type="calendar" />
          </a-date-picker>
        </a-form-item>
      </a-col>
    </a-row>

    <a-row :gutter="16" type="flex" justify="end">
      <a-col :xs="24" :sm="24" :md="12">
        <a-button
          html-type="submit"
          class="btn-search b-shadow b-radius"
          size="large"
          block
          >Cari Tiket Group</a-button
        >
      </a-col>
    </a-row>
  </a-form>
</template>
<script>
import moment from "moment";
export default {
  name: "searchTicket",
  data() {
    return {
      monthFormat: "MM/YYYY"
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
          return this.$router.push("/catalog/ticket-group/result");
        }
      });
    }
  }
};
</script>
