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
        <a-form-item label="Jenis LA Akomodasi">
          <div class="icon-search">
            <span class="icon-accommodation-sm"></span>
          </div>
          <a-select
            showSearch
            :defaultValue="1"
            placeholder="Pilih Jenis LA Akomodasi"
            style="width: 100%"
            :showArrow="false"
            size="large"
          >
            <a-select-option :value="1">Umrah</a-select-option>
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
            v-decorator="['tanggal_checkIn',{rules: [{ type: 'object', required: true, message: 'Harus di isi!' }]}]"
          >
            <a-icon class="d-none" slot="suffixIcon" type="calendar" />
          </a-date-picker>
        </a-form-item>
      </a-col>

      <a-col :xs="24" :sm="24" :md="12">
        <a-form-item label="Jumlah Pax">
          <div class="icon-search">
            <img class="max-width" src="/icons/search/boysmiling.svg" />
          </div>
          <a-dropdown overlayClassName="ant-menu--passenger" :trigger="['click']">
            <a-menu slot="overlay">
              <a-menu-item key="1" disabled>
                <div class="d-flex align-items-center">
                  <div>
                    <div class="fs-14 fw-400 cr-black f-default">Jumlah Pax</div>
                  </div>
                  <div class="ml-auto">
                    <number-input
                      v-model="qty"
                      :min="1"
                      :inputtable="false"
                      size="small"
                      center
                      controls
                    />
                  </div>
                </div>
              </a-menu-item>
            </a-menu>
            <a-button class="ant-btn--add-passenger fs-16 text-left" size="large" block>Jumlah {{qty}} Pax</a-button>
          </a-dropdown>
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
      qty: 1
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
          return this.$router.push("/catalog/accommodation/result");
        }
      });
    }
  }
};
</script>
