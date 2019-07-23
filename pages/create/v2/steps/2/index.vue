<template>
  <a-layout class="ant-steps-create-package">
    <a-layout-header>
      <div class="ant-header-item">
        <a-row type="flex" justify="space-between" align="middle">
          <a-col :span="8">
            <nuxt-link to="/" class="ant-header-brand">
              <div class="logo"></div>
            </nuxt-link>
          </a-col>
          <a-col :span="8">
            <div
              class="fs-16 fw-500 cr-gray text-ellipsis"
            >Langkah 1 Komponen Wajib : Tiket Group</div>
          </a-col>
          <a-col :span="8"></a-col>
        </a-row>
      </div>
    </a-layout-header>
    <a-progress :percent="25" size="small" :showInfo="false" />
    <a-layout-content class="ant-layout-content--steps" :style="{ padding: '0 24px' }">
      <a-spin :spinning="spinning" tip="Loading...">
        <a-form layout="vertical" :form="form" @submit="handleSubmit" hideRequiredMark>
          <a-row type="flex" justify="space-around" align="middle" class="vh-100">
            <a-col :xs="24" :sm="24" :md="22" :lg="20" :xl="18" :xxl="18" class="vh-100">
              <a-row :gutter="24" type="flex" justify="space-between" align="middle" class="vh-100">
                <a-col :span="11" class="vh-100">
                  <div
                    :style="{height: 'calc(100vh - 200px)',overflow: 'auto', marginTop: '124px'}"
                  >
                    <div>
                      <div class="fs-30 fw-500 f-default cr-black mb-24">
                        Tiket Group apa yang
                        <br />Anda butuhkan ?
                      </div>
                      <a-row :gutter="16" type="flex" justify="space-between" align="bottom">
                        <a-col :span="24">
                          <a-form-item
                            label="Maskapai apa yang Anda inginkan ?"
                            :validate-status="itemError() ? 'error' : ''"
                            :help="itemError() || ''"
                          >
                            <a-select
                              v-decorator="['maskapai',{initialValue: [], rules: [{ required: true, message: 'Harus di isi!' }]}]"
                              placeholder="Pilih Maskapai"
                              size="large"
                            >
                              <a-select-option value="Garuda Indonesia">Garuda Indonesia</a-select-option>
                              <a-select-option value="Lion Air">Lion Air</a-select-option>
                              <a-select-option value="Scoot">Scoot</a-select-option>
                            </a-select>
                          </a-form-item>
                        </a-col>

                        <a-col :span="24">
                          <a-form-item
                            label="Kelas Kabin"
                            :validate-status="itemError() ? 'error' : ''"
                            :help="itemError() || ''"
                          >
                            <a-radio-group
                              v-decorator="['kabinClass',{initialValue: [], rules: [{ required: true, message: 'Harus di isi!' }]}]"
                            >
                              <a-radio :value="1" class="cr-black">Economy Class</a-radio>
                              <a-radio :value="2" class="cr-black">Businness Class</a-radio>
                            </a-radio-group>
                          </a-form-item>
                        </a-col>

                        <a-col :span="24">
                          <a-form-item
                            label="Transit"
                            :validate-status="itemError() ? 'error' : ''"
                            :help="itemError() || ''"
                          >
                            <a-radio-group
                              v-decorator="['transit',{initialValue: [], rules: [{ required: true, message: 'Harus di isi!' }]}]"
                            >
                              <a-radio :value="1" class="cr-black">Penerbangan Langsung</a-radio>
                              <a-radio :value="2" class="cr-black">Penerbangan Transit</a-radio>
                            </a-radio-group>
                          </a-form-item>
                        </a-col>

                        <a-col :span="24">
                          <a-form-item
                            label="Pilihan Harga Yang Tersedia"
                            :validate-status="itemError() ? 'error' : ''"
                            :help="itemError() || ''"
                          >
                            <a-radio-group
                              v-decorator="['harga',{initialValue: [], rules: [{ required: true, message: 'Harus di isi!' }]}]"
                              size="large"
                            >
                              <a-row :gutter="8">
                                <a-col :xs="24" :sm="24" :md="12" :lg="8">
                                  <a-radio-button :value="1" class="b-shadow">
                                    <a-icon type="check-circle" theme="filled" />
                                    <div class="fs-14 fw-400 cr-gray mb-4">Harga Satuan</div>
                                    <div class="fs-16 fw-500 cr-black">Rp12.500.000</div>
                                  </a-radio-button>
                                </a-col>
                                <a-col :xs="24" :sm="24" :md="12" :lg="8">
                                  <a-radio-button :value="2" class="b-shadow">
                                    <a-icon type="check-circle" theme="filled" />
                                    <div class="fs-14 fw-400 cr-gray mb-4">Harga Satuan</div>
                                    <div class="fs-16 fw-500 cr-black">Rp12.300.000</div>
                                  </a-radio-button>
                                </a-col>
                                <a-col :xs="24" :sm="24" :md="12" :lg="8">
                                  <a-radio-button :value="3" class="b-shadow">
                                    <a-icon type="check-circle" theme="filled" />
                                    <div class="fs-14 fw-400 cr-gray mb-4">Harga Satuan</div>
                                    <div class="fs-16 fw-500 cr-black">Rp12.800.000</div>
                                  </a-radio-button>
                                </a-col>
                                <a-col :xs="24" :sm="24" :md="12" :lg="8">
                                  <a-radio-button :value="4" class="b-shadow">
                                    <a-icon type="check-circle" theme="filled" />
                                    <div class="fs-14 fw-400 cr-gray mb-4">Harga Satuan</div>
                                    <div class="fs-16 fw-500 cr-black">Rp12.600.000</div>
                                  </a-radio-button>
                                </a-col>
                              </a-row>
                            </a-radio-group>
                          </a-form-item>
                        </a-col>

                        <a-col :span="24">
                          <a-form-item>Tiket group sudah termasuk tiket Keberangkatan dan Kepulangan (Round Trip)</a-form-item>
                        </a-col>
                      </a-row>

                      <a-card
                        class="ant-card--action"
                        :style="{ position: 'absolute', bottom: '0', left: '0', width: '100%' }"
                      >
                        <a-row :gutter="8">
                          <a-col :span="12">
                            <a-button
                              @click="backSteps"
                              block
                              size="large"
                              class="b-shadow b-solid b-radius fs-15 fw-500"
                            >Kembali</a-button>
                          </a-col>
                          <a-col :span="12">
                            <a-button
                              class="ant-btn--next b-shadow b-radius b-solid fs-15 fw-500"
                              :disabled="hasErrors(form.getFieldsError())"
                              html-type="submit"
                              size="large"
                              block
                            >Lanjutkan</a-button>
                          </a-col>
                        </a-row>
                      </a-card>
                    </div>
                  </div>
                </a-col>

                <a-col :span="11">
                  <img class="max-width d-block ml-auto" src="/steps/schedule.svg" />
                </a-col>
              </a-row>
            </a-col>
          </a-row>
        </a-form>
      </a-spin>
    </a-layout-content>
  </a-layout>
</template>
<script>
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}
export default {
  layout: "application",
  name: "ticket-group",
  head() {
    return {
      title: "Pilih Tiket Group - Buat Paket Umrah | Haloatta"
    };
  },
  data() {
    return {
      spinning: true,
      hasErrors
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
    itemError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched("maskapai") && getFieldError("maskapai");
      return isFieldTouched("kabinClass") && getFieldError("kabinClass");
      return isFieldTouched("transit") && getFieldError("transit");
      return isFieldTouched("harga") && getFieldError("harga");
    },
    handleSubmit(e) {
      e.preventDefault();
      this.$router.push("/create/v2/steps/3");
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    },
    backSteps() {
      this.$router.push("/create/v2/steps/1");
    }
  }
};
</script>
