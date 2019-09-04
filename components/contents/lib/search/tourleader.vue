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
            defaultValue="Makassar"
            placeholder="Pilih Kota"
            optionFilterProp="children"
            :showArrow="false"
            style="width: 100%"
            @focus="handleFocus"
            @blur="handleBlur"
            @change="handleChange"
            :filterOption="filterOption"
            size="large"
          >
            <a-select-option value="All">Tampilkan Semua</a-select-option>
            <a-select-option value="Makassar">Makassar</a-select-option>
            <a-select-option value="Jakarta">Jakarta</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>

      <a-col :span="12">
        <a-form-item label="Tanggal Keberangkatan" hasFeedback>
          <div class="icon-search">
            <a-icon type="calendar" />
          </div>
          <a-date-picker
            size="large"
            style="width: 100%"
            v-decorator="['startdate',{rules: [{ type: 'object', required: true, message: 'Harus di isi!' }]}]"
            :disabledDate="disabledDate"
            placeholder="Pilih Tanggal"
          >
            <a-icon class="d-none" slot="suffixIcon" type="calendar" />
          </a-date-picker>
        </a-form-item>
      </a-col>
    </a-row>

    <a-row :gutter="16">
      <a-col :span="12">
        <a-form-item label="Program Hari" hasFeedback>
          <div class="icon-search">
            <a-icon type="calendar" />
          </div>
          <a-select
            showSearch
            defaultValue="Program 9 Hari"
            placeholder="Pilih Program"
            optionFilterProp="children"
            style="width: 100%"
            :showArrow="false"
            @focus="handleFocus"
            @blur="handleBlur"
            @change="handleChange"
            :filterOption="filterOption"
            size="large"
          >
            <a-select-option value="All">Tampilkan Semua</a-select-option>
            <a-select-option value="Program 9 Hari">Program 9 Hari</a-select-option>
            <a-select-option value="Program 10 Hari">Program 10 Hari</a-select-option>
            <a-select-option value="Program 11 Hari">Program 11 Hari</a-select-option>
            <a-select-option value="Program 12 Hari">Program 12 Hari</a-select-option>
            <a-select-option value="Program 13 Hari">Program 13 Hari</a-select-option>
            <a-select-option value="Program 14 Hari">Program 14 Hari</a-select-option>
            <a-select-option value="Program 15 Hari">Program 15 Hari</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>

      <a-col :span="12">
        <a-form-item label="Tipe Tourleader" hasFeedback>
          <div class="icon-search">
            <span class="icon-tourleader-sm"></span>
          </div>
          <a-select
            showSearch
            defaultValue="pemula"
            placeholder="Pilih Tour Leader"
            optionFilterProp="children"
            style="width: 100%"
            :showArrow="false"
            @focus="handleFocus"
            @blur="handleBlur"
            @change="handleChange"
            :filterOption="filterOption"
            size="large"
          >
            <a-select-option value="All">Tampilkan Semua</a-select-option>
            <a-select-option value="pemula">Pemula</a-select-option>
            <a-select-option value="Berpengalaman">Berpengalaman</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
    </a-row>

    <a-row :gutter="16" type="flex" justify="end">
      <a-col :span="12">
        <a-form-item>
          <a-button
            html-type="submit"
            class="btn-search b-shadow b-radius"
            size="large"
            block
          >Cari Tour Leader</a-button>
        </a-form-item>
      </a-col>
    </a-row>
  </a-form>
</template>
<script>
import moment from "moment";
export default {
  name: "searchTourleader",
  data() {
    this.dateFormat = "YYYY-MM-DD";
    return { };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  methods: {
    moment,
    handleChange(value) {
      console.log(`selected ${value}`);
    },
    handleBlur() {
      console.log("blur");
    },
    handleFocus() {
      console.log("focus");
    },
    filterOption(input, option) {
      return (
        option.componentOptions.children[0].text
          .toLowerCase()
          .indexOf(input.toLowerCase()) >= 0
      );
    },
    disabledDate(current) {
      return current && current < moment().endOf("day");
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
          return this.$router.push("/catalog/tourleader/result");
        }
      });
    }
  }
};
</script>