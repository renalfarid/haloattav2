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
        <a-form-item label="Negara Tujuan">
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

      <a-col :xs="24" :sm="24" :md="12">
        <a-form-item label="Jenis Visa">
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
    </a-row>

    <a-row :gutter="16">
      <a-col :xs="24" :sm="24" :md="12">
        <a-form-item label="Tanggal Keberangkatan">
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

      <a-col :xs="24" :sm="24" :md="12">
        <a-form-item label="Tipe Visa">
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
      <a-col :xs="24" :sm="24" :md="12">
        <a-button
            html-type="submit"
            class="btn-search b-shadow b-radius"
            size="large"
            block
          >Cari Visa</a-button>
      </a-col>
    </a-row>
  </a-form>
</template>
<script>
import moment from "moment";
export default {
  name: "searchTicket",
  data() {
    this.dateFormat = "YYYY-MM-DD";
    return {};
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
    }
  }
};
</script>
