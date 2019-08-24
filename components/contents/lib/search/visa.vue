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
        <a-form-item label="Negara Tujuan" hasFeedback>
          <div class="icon-search">
            <img class="max-width" src="/icons/search/place.svg" />
          </div>
          <a-select
            showSearch
            defaultValue="Saudi Arabia"
            placeholder="Pilih Negara Tujuan"
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
            <a-select-option value="Saudi Arabia">Saudi Arabia</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>

      <a-col :span="12">
        <a-form-item label="Jenis Visa" hasFeedback>
          <div class="icon-search">
            <img class="max-width" src="/icons/search/visa.svg" />
          </div>
          <a-select
            showSearch
            defaultValue="Visa on Arrival"
            placeholder="Pilih Visa"
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
            <a-select-option
              value="Visa Kunjungan Wisata/ Visa Turis"
            >Visa Kunjungan Wisata/ Visa Turis</a-select-option>
            <a-select-option value="Visa on Arrival">Visa on Arrival</a-select-option>
            <a-select-option value="Visa Kunjungan Bisnis">Visa Kunjungan Bisnis</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
    </a-row>

    <a-row :gutter="16" type="flex" justify="end">
      <a-col :span="12">
        <a-form-item label="Jumlah Pax" hasFeedback>
          <div class="icon-search">
            <img class="max-width" src="/icons/search/boysmiling.svg" />
          </div>
          <a-dropdown overlayClassName="ant-menu--passenger" :trigger="['click']">
            <a-menu slot="overlay">
              <a-menu-item key="0" disabled>
                <div class="d-flex align-items-center">
                  <div class="fs-14 fw-400 cr-black f-default">Jumlah Pax</div>
                  <div class="ml-auto">
                    <number-input
                      :inputtable="false"
                      v-model="pax"
                      :min="0"
                      :max="10"
                      size="small"
                      center
                      controls
                    />
                  </div>
                </div>
              </a-menu-item>
            </a-menu>
            <a-button class="ant-btn--add-passenger text-left" size="large" block>{{pax}} Pax</a-button>
          </a-dropdown>
        </a-form-item>
      </a-col>
      <a-col :span="12">
        <a-form-item :style="{ marginTop: '24px' }">
          <a-button
            html-type="submit"
            class="btn-search b-shadow b-radius"
            size="large"
            block
          >Cari Visa</a-button>
        </a-form-item>
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
    return {
      pax: 1
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
          return this.$router.push("/catalog/visa/result");
        }
      });
    }
  }
};
</script>
