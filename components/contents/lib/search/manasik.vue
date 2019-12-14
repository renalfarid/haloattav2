<template>
  <a-form
    layout="vertical"
    :form="form"
    @submit="handleSubmit"
    hideRequiredMark
    class="form-search--costume"
  >
    <a-row :gutter="16">
      <a-col :span="12">
        <a-form-item label="Kota Asal" hasFeedback>
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

      <a-col :span="12">
        <a-form-item label="Tanggal Kegiatan" hasFeedback>
          <div class="icon-search"><a-icon type="calendar" /></div>
          <a-date-picker
            size="large"
            style="width: 100%"
            :disabledDate="disabledDate"
            placeholder="Pilih Tanggal"
            v-decorator="['startdate',{rules: [{ type: 'object', required: true, message: 'Harus di isi!' }]}]"
          >
            <a-icon class="d-none" slot="suffixIcon" type="calendar" />
          </a-date-picker>
        </a-form-item>
      </a-col>
    </a-row>

    <a-row :gutter="16">
      <a-col :span="12">
        <a-form-item label="Jenis Kegiatan" hasFeedback>
          <div class="icon-search"><span class="icon-manasik-sm"></span></div>
          <a-select
            showSearch
            :defaultValue="1"
            placeholder="Pilih Jenis Kegiatan"
            :showArrow="false"
            style="width: 100%"
            size="large"
          >
            <a-select-option :value="1">Manasik</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>

      <a-col :span="12">
        <a-form-item label="Ruangan" hasFeedback>
          <div class="icon-search"><span class="icon-manasik-sm"></span></div>
          <a-select
            showSearch
            :defaultValue="1"
            placeholder="Pilih Ruangan"
            :showArrow="false"
            style="width: 100%"
            size="large"
          >
            <a-select-option :value="1">Ballroom Hotel</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
    </a-row>

    <a-row type="flex" justify="end">
      <a-col :span="12">
        <a-button
          html-type="submit"
          class="btn-search b-shadow b-radius"
          size="large"
          block
        >Cari</a-button>
      </a-col>
    </a-row>
  </a-form>
</template>
<script>
import moment from "moment";
export default {
  name: "searchManasik",
  data() {
    this.dateFormat = "YYYY-MM-DD";
    return {
      pax: 1
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
          return this.$router.push("/catalog/manasik/result");
        }
      });
    }
  }
};
</script>