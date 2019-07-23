<template>
  <a-layout class="ant-steps-create-package">
    <a-layout-content :style="{ padding: '0 24px' }">
      <a-spin :spinning="spinning" tip="Loading...">
        <a-row type="flex" justify="space-around" align="middle" :style="{ height: '100vh' }">
          <a-col :xs="24" :sm="24" :md="22" :lg="20" :xl="18" :xxl="18">
            <a-row :gutter="24" type="flex" justify="space-between" align="middle">
              <a-col :span="11">
                <div class="fs-40 fw-600 f-default cr-black mb-24">
                  Mari Mulai Membuat
                  Paket Umrah Anda
                </div>

                <div>
                  <div class="fs-15 fw-500 cr-gray text-uppercase mb-4">Langkah Awal</div>
                  <div class="fs-18 fw-400 cr-black f-default">
                    Tentukan Program Hari, Tanggal Keberangkatan
                    serta Jumlah Pax yang anda rencanakan
                  </div>
                </div>

                <a-form
                  class="mt-24"
                  layout="vertical"
                  :form="form"
                  @submit="handleSubmit"
                  hideRequiredMark
                >
                  <a-row :gutter="16" type="flex" justify="space-between" align="bottom">
                    <a-col :span="12">
                      <a-form-item
                        :validate-status="itemError() ? 'error' : ''"
                        :help="itemError() || ''"
                      >
                        <a-select
                          v-decorator="['kotaKeberangkatan',{rules: [{ required: true, message: 'Harus di isi!' }]}]"
                          placeholder="Kota Asal"
                          size="large"
                        >
                          <a-select-option value="Makassar">Makassar</a-select-option>
                          <a-select-option value="Jakarta">Jakarta</a-select-option>
                        </a-select>
                      </a-form-item>
                    </a-col>

                    <a-col :span="12">
                      <a-form-item
                        :validate-status="itemError() ? 'error' : ''"
                        :help="itemError() || ''"
                      >
                        <a-select
                          v-decorator="['programHari',{rules: [{ required: true, message: 'Harus di isi!' }]}]"
                          placeholder="Program Hari"
                          size="large"
                        >
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
                      <a-form-item
                        :validate-status="itemError() ? 'error' : ''"
                        :help="itemError() || ''"
                      >
                        <a-date-picker
                          size="large"
                          style="width: 100%"
                          v-decorator="['tanggalKeberangkatan',{rules: [{ type: 'object', required: true, message: 'Harus di isi!' }]}]"
                          :disabledDate="disabledDate"
                          placeholder="Tanggal Keberangkatan"
                        />
                      </a-form-item>
                    </a-col>

                    <a-col :span="12">
                      <a-form-item
                        :validate-status="itemError() ? 'error' : ''"
                        :help="itemError() || ''"
                      >
                        <a-select
                          v-decorator="['jumlahPax',{rules: [{ required: true, message: 'Harus di isi!' }]}]"
                          placeholder="Jumlah Pax"
                          size="large"
                        >
                          <a-select-option value="5 Pax">5 Pax</a-select-option>
                          <a-select-option value="10 Pax">10 Pax</a-select-option>
                          <a-select-option value="15 Pax">15 Pax</a-select-option>
                          <a-select-option value="20 Pax">20 Pax</a-select-option>
                          <a-select-option value="25 Pax">25 Pax</a-select-option>
                          <a-select-option value="30 Pax">30 Pax</a-select-option>
                          <a-select-option value="35 Pax">35 Pax</a-select-option>
                          <a-select-option value="40 Pax">40 Pax</a-select-option>
                        </a-select>
                      </a-form-item>
                    </a-col>

                    <a-col :span="12">
                      <a-form-item>
                        <a-button
                          class="ant-btn--next b-shadow b-radius b-solid fs-15 fw-500"
                          :disabled="hasErrors(form.getFieldsError())"
                          html-type="submit"
                          size="large"
                          block
                        >Lanjutkan</a-button>
                      </a-form-item>
                    </a-col>
                  </a-row>
                </a-form>
              </a-col>

              <a-col :span="11">
                <img class="max-width d-block ml-auto" src="/steps/schedule.svg" />
              </a-col>
            </a-row>
          </a-col>
        </a-row>
      </a-spin>
    </a-layout-content>
  </a-layout>
</template>
<script>
import moment from "moment";
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}
export default {
  layout: "application",
  name: "schedule",
  head() {
    return {
      title: "Pilih Jadwal - Buat Paket Umrah | Haloatta"
    };
  },
  data() {
    this.dateFormat = "YYYY-MM-DD";
    return {
      hasErrors,
      spinning: true,
      form: this.$form.createForm(this)
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  mounted() {
    this.$nextTick(() => {
      this.form.validateFields();
    });
    setTimeout(() => {
      this.spinning = false;
    }, 3600);
  },
  methods: {
    moment,
    disabledDate(current) {
      return current && current < moment().endOf("day");
    },
    itemError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched("kotaKeberangkatan") && getFieldError("kotaKeberangkatan");
      return isFieldTouched("programHari") && getFieldError("programHari");
      return isFieldTouched("tanggalKeberangkatan") && getFieldError("tanggalKeberangkatan");
      return isFieldTouched("jumlahPax") && getFieldError("jumlahPax");
    },
    handleSubmit(e) {
      e.preventDefault();
      this.$router.push("/create/v2/steps/2");
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    }
  }
};
</script>
