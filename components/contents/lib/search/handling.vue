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
        <a-form-item label="Dari" hasFeedback>
          <div class="icon-search">
            <a-icon type="environment" />
          </div>
          <a-select
            showSearch
            defaultValue="Makassar"
            placeholder="Pilih"
            optionFilterProp="children"
            style="width: 100%"
            :showArrow="false"
            @focus="handleFocus"
            @blur="handleBlur"
            @change="handleChange"
            :filterOption="filterOption"
            size="large"
          >
            <a-select-option value="Makassar">Makassar</a-select-option>
            <a-select-option value="Jakarta">Jakarta</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>

      <a-col :span="12">
        <a-form-item label="Jenis Layanan" hasFeedback>
          <div class="icon-search">
            <span class="icon-handling-sm"></span>
          </div>
          <a-select
            showSearch
            defaultValue="Standar"
            placeholder="Pilih Jenis Layanan"
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
            <a-select-option value="Standar">Standar</a-select-option>
            <a-select-option value="Premium">Premium</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
    </a-row>

    <a-row :gutter="16" type="flex" justify="end" :style="{ top: '-12px', position: 'relative' }">
      <a-col :span="12">
        <div class="d-flex align-items-center">
          <div class="mr-8">
            <a-switch v-on:click="clickShow = !clickShow">
              <a-icon type="check" slot="checkedChildren" />
              <a-icon type="close" slot="unCheckedChildren" />
            </a-switch>
          </div>
          <div class="fs-14 fw-500 cr-black">Pulang Pergi</div>
        </div>
      </a-col>
    </a-row>

    <a-row :gutter="16">
      <a-col :span="24">
        <div class="d-flex align-items-center w-100">
          <div class="w-100">
            <a-form-item label="Tanggal Keberangkatan" hasFeedback>
              <div class="icon-search">
                <a-icon type="calendar" />
              </div>
              <a-date-picker
                size="large"
                style="width: 100%"
                v-decorator="['startdate',{rules: [{ type: 'object', required: true, message: 'Harus di isi!' }]}]"
                :disabledDate="disabledDate"
                placeholder="Pilih Tanggal Keberangkatan"
              >
                <a-icon class="d-none" slot="suffixIcon" type="calendar" />
              </a-date-picker>
            </a-form-item>
          </div>

          <div class="w-100 pl-16" v-if="clickShow">
            <a-form-item label="Tanggal Kedatangan" hasFeedback>
              <div class="icon-search">
                <a-icon type="calendar" />
              </div>
              <a-date-picker
                size="large"
                style="width: 100%"
                v-decorator="['enddate',{rules: [{ type: 'object', required: true, message: 'Harus di isi!' }]}]"
                :disabledDate="disabledDate"
                placeholder="Pilih Tanggal Kedatangan"
              >
                <a-icon class="d-none" slot="suffixIcon" type="calendar" />
              </a-date-picker>
            </a-form-item>
          </div>
        </div>
      </a-col>
    </a-row>

    <a-row :gutter="16" type="flex" justify="end">
      <a-col :span="12">
        <a-button
          html-type="submit"
          class="btn-search b-shadow b-radius"
          size="large"
          block
        >Cari Handling</a-button>
      </a-col>
    </a-row>
  </a-form>
</template>
<script>
import moment from "moment";
export default {
  name: "searchHandling",
  data() {
    this.dateFormat = "YYYY-MM-DD";
    return {
      clickShow: false
    };
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
          return this.$router.push("/catalog/handling/result");
        }
      });
    }
  }
};
</script>