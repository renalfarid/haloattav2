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
        <a-form-item label="Program Hari" hasFeedback>
          <div class="icon-search">
            <a-icon type="calendar" />
          </div>
          <a-select
            showSearch
            defaultValue="Program 9 Hari"
            placeholder="Pilih Program Hari"
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
          </a-select>
        </a-form-item>
      </a-col>

      <a-col :span="12">
        <a-form-item label="Jumlah Tamu" hasFeedback>
          <div class="icon-search">
            <img class="max-width" src="/icons/search/boysmiling.svg" />
          </div>
          <a-dropdown overlayClassName="ant-menu--passenger" :trigger="['click']">
            <a-menu slot="overlay">
              <a-menu-item key="0" disabled>
                <div class="d-flex align-items-center">
                  <div class="d-flex align-items-center">
                    <div class="mr-8">
                      <a-avatar icon="user" />
                    </div>
                    <div>
                      <div class="fs-14 fw-400 cr-black f-default">Dewasa</div>
                      <div class="fs-12 fw-400 cr-gray f-default">(12 thn atau lebih)</div>
                    </div>
                  </div>
                  <div class="ml-auto">
                    <number-input
                      v-model="dewasa"
                      :min="0"
                      :max="10"
                      :inputtable="false"
                      size="small"
                      center
                      controls
                    />
                  </div>
                </div>
              </a-menu-item>
              <a-menu-item key="1" disabled>
                <div class="d-flex align-items-center">
                  <div class="d-flex align-items-center">
                    <div class="mr-8">
                      <a-avatar icon="user" />
                    </div>
                    <div>
                      <div class="fs-14 fw-400 cr-black f-default">Anak</div>
                      <div class="fs-12 fw-400 cr-gray f-default">(2 - 11 thn)</div>
                    </div>
                  </div>
                  <div class="ml-auto">
                    <number-input
                      v-model="anak"
                      :min="0"
                      :max="10"
                      :inputtable="false"
                      size="small"
                      center
                      controls
                    />
                  </div>
                </div>
              </a-menu-item>
            </a-menu>
            <a-button
              class="ant-btn--add-passenger text-left"
              size="large"
              block
            >{{dewasa}} Dewasa, {{anak}} Anak</a-button>
          </a-dropdown>
        </a-form-item>
      </a-col>
    </a-row>

    <a-row :gutter="16">
      <a-col :span="12">
        <a-form-item label="Dari Kota" hasFeedback>
          <div class="icon-search">
            <img class="max-width" src="/icons/search/bedtime.svg" />
          </div>
          <a-select
            showSearch
            defaultValue="3 Hari Mekkah"
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
            <a-select-option value="3 Hari Mekkah">3 Hari Mekkah</a-select-option>
            <a-select-option value="4 Hari Mekkah">4 Hari Mekkah</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>

      <a-col :span="12">
        <a-form-item label="Ke Kota" hasFeedback>
          <div class="icon-search">
            <img class="max-width" src="/icons/search/bedtime.svg" />
          </div>
          <a-select
            showSearch
            defaultValue="3 Hari Madinah"
            placeholder="Pilih Kota"
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
            <a-select-option value="3 Hari Madinah">3 Hari Madinah</a-select-option>
            <a-select-option value="4 Hari Madinah">4 Hari Madinah</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
    </a-row>

    <a-row :gutter="16">
      <a-col :span="12">
        <a-form-item label="Check In" hasFeedback>
          <a-date-picker
            size="large"
            style="width: 100%"
            v-decorator="['tanggal_checkIn',{rules: [{ type: 'object', required: true, message: 'Harus di isi!' }]}]"
            :disabledDate="disabledDate"
            placeholder="Pilih Tanggal Check In"
          />
        </a-form-item>
      </a-col>

      <a-col :span="12">
        <a-form-item label="Check Out">
          <a-date-picker
            size="large"
            style="width: 100%"
            :defaultValue="moment('2019-06-10', dateFormat)"
            disabled
          />
        </a-form-item>
      </a-col>
    </a-row>

    <a-row :gutter="16">
      <a-col :span="12">
        <a-button
          html-type="submit"
          class="btn-search b-shadow b-radius"
          size="large"
          block
        >Cari LA Akomodasi</a-button>
      </a-col>
    </a-row>
  </a-form>
</template>
<script>
import moment from "moment";
export default {
  name: "searchAccommodation",
  data() {
    this.dateFormat = "YYYY-MM-DD";
    return {
      dewasa: 1,
      anak: 0
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
      this.$router.push("/accommodation/result");
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    }
  }
};
</script>
