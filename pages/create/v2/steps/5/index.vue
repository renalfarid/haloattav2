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
            >Langkah 1 Komponen Wajib : Asuransi Perjalanan</div>
          </a-col>
          <a-col :span="8" class="text-right">
            <a-button class="b-shadow b-solid b-radius cr-primary">Simpan & Keluar</a-button>
          </a-col>
        </a-row>
      </div>
    </a-layout-header>
    <a-progress :percent="100" size="small" :showInfo="false" />
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
                        Pilih Asuransi Perjalanan
                        <br />Umrah Anda!
                      </div>
                      <a-row :gutter="16" type="flex" justify="space-between" align="bottom">
                        <a-col :span="24">
                          <a-form-item
                            :validate-status="itemError() ? 'error' : ''"
                            :help="itemError() || ''"
                          >
                            <a-radio-group
                              v-decorator="['harga',{initialValue: [], rules: [{ required: true, message: 'Harus di isi!' }]}]"
                              size="large"
                            >
                              <a-row :gutter="8">
                                <a-col :xs="24" :sm="24" :md="12" :lg="12">
                                  <a-radio-button :value="1" class="b-shadow">
                                    <a-icon type="check-circle" theme="filled" />
                                    <div class="fs-14 fw-400 cr-gray mb-4">Adira Insurance</div>
                                    <div class="fs-16 fw-500 cr-black">
                                      Rp200.000
                                      <span class="fw-400 cr-gray">/pax</span>
                                    </div>
                                  </a-radio-button>
                                </a-col>
                                <a-col :xs="24" :sm="24" :md="12" :lg="12">
                                  <a-radio-button :value="2" class="b-shadow">
                                    <a-icon type="check-circle" theme="filled" />
                                    <div class="fs-14 fw-400 cr-gray mb-4">AXA Insurance</div>
                                    <div class="fs-16 fw-500 cr-black">
                                      Rp180.000
                                      <span class="fw-400 cr-gray">/pax</span>
                                    </div>
                                  </a-radio-button>
                                </a-col>
                                <a-col :xs="24" :sm="24" :md="12" :lg="12">
                                  <a-radio-button :value="3" class="b-shadow">
                                    <a-icon type="check-circle" theme="filled" />
                                    <div class="fs-14 fw-400 cr-gray mb-4">Amanah Insurance</div>
                                    <div class="fs-16 fw-500 cr-black">
                                      Rp240.000
                                      <span class="fw-400 cr-gray">/pax</span>
                                    </div>
                                  </a-radio-button>
                                </a-col>
                              </a-row>
                            </a-radio-group>
                          </a-form-item>
                        </a-col>

                        <a-col :span="24">
                          <a-form-item>Asuransi perjalanan sudah termasuk Keberangkatan dan Kepulangan</a-form-item>
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
                            >Selesai</a-button>
                          </a-col>
                        </a-row>
                      </a-card>
                    </div>
                  </div>
                </a-col>

                <a-col :span="11">
                  <img class="max-width d-block ml-auto" src="/steps/insurance.svg" />
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
  name: "insurance",
  head() {
    return {
      title: "Pilih Asuransi Perjalanan - Buat Paket Umrah | Haloatta"
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
      return isFieldTouched("harga") && getFieldError("harga");
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          return this.$router.push("/create/v2/steps/6");
        }
      });
    },
    backSteps() {
      this.$router.push("/create/v2/steps/4");
    }
  }
};
</script>
