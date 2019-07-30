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
            <div class="fs-16 fw-500 cr-gray text-ellipsis">Langkah 2 Komponen Pilihan : Tour Leader</div>
          </a-col>
          <a-col :span="8" class="text-right"></a-col>
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
                      <div
                        class="fs-30 fw-500 f-default cr-black mb-24"
                      >Pilih Tour Leader Umrah Anda!</div>

                      <div>
                        <div class="d-flex align-items-center">
                          <div class="fs-16 fw-500 cr-black mr-8">
                            Apakah anda ingin
                            <br />menggunakan Vendor Tour Leader ?
                          </div>
                          <div class="ml-auto">
                            <a-switch v-on:click="servicesTourleader = !servicesTourleader">
                              <a-icon type="check" slot="checkedChildren" />
                              <a-icon type="close" slot="unCheckedChildren" />
                            </a-switch>
                          </div>
                        </div>
                        <div class="fs-14 fw-400 cr-gray mt-8">
                          <span>
                            Kami menyiapkan tour leader berpengalaman yang
                            akan membantu jamaah selama perjalanan ibadah
                            anda
                          </span>
                        </div>
                      </div>

                      <a-list v-if="servicesTourleader">
                        <a-list-item>
                          <a-row>
                            <a-col :span="24">
                              <a-form-item
                                label="Tipe Tour Leader Umrah"
                                :validate-status="itemError() ? 'error' : ''"
                                :help="itemError() || ''"
                                class="mb-0"
                              >
                                <a-radio-group
                                  v-decorator="['servicesTourleader',{initialValue: [], rules: [{ required: true, message: 'Harus di isi!' }]}]"
                                >
                                  <a-row>
                                    <a-col :span="24">
                                      <a-radio
                                        :value="1"
                                        class="b-shadow b-solid-default b-radius pt-8 pb-8 pl-16 pr-16 mt-8 d-flex align-items-center w-100"
                                      >
                                        <div class="w-100 p-8">
                                          <a-icon type="check-circle" theme="filled" />
                                          <div class="fs-14 cr-black">
                                            <div
                                              class="fw-500 text-ellipsis f-default"
                                            >Level Beginner (Tour Leader Pemula)</div>
                                            <div class="fw-400 cr-gray">
                                              Pria atau Wanita
                                              <br />Bahasa : Arab dan Indonesia
                                              <br />Pengetahuan TL : Cukup
                                              <br />Kemampuan Handling : Max 40 Jamaah,
                                            </div>
                                          </div>
                                        </div>
                                      </a-radio>
                                    </a-col>

                                    <a-col :span="24">
                                      <a-radio
                                        :value="2"
                                        class="b-shadow b-solid-default b-radius pt-8 pb-8 pl-16 pr-16 mt-8 d-flex align-items-center w-100"
                                      >
                                        <div class="w-100 p-8">
                                          <a-icon type="check-circle" theme="filled" />
                                          <div class="fs-14 cr-black">
                                            <div
                                              class="fw-500 text-ellipsis f-default"
                                            >Level Expert (Tour Leader Berpengalaman)</div>
                                            <div class="fw-400 cr-gray">
                                              Pria atau Wanita <br />
                                              Bahasa : Arab, Inggris dan Indonesia <br />
                                              Pengetahuan TL : Memuaskan <br />
                                              Kemampuan Handling : Max 90 Jamaah
                                            </div>
                                          </div>
                                        </div>
                                      </a-radio>
                                    </a-col>
                                  </a-row>
                                </a-radio-group>
                              </a-form-item>
                            </a-col>
                          </a-row>
                        </a-list-item>

                        <a-list-item>
                          <a-row
                            :gutter="16"
                            type="flex"
                            justify="space-between"
                            align="bottom"
                            class="w-100"
                          >
                            <a-col :span="24">
                              <a-form-item
                                label="Pilihan Harga"
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
                                        <div class="fs-14 fw-400 cr-gray mb-4">Bpk. Samsyunandar Alam</div>
                                        <div class="fs-16 fw-500 cr-black">
                                          Rp500.000
                                          <span class="fw-400 cr-gray">/pax</span>
                                        </div>
                                      </a-radio-button>
                                    </a-col>
                                    <a-col :xs="24" :sm="24" :md="12" :lg="12">
                                      <a-radio-button :value="2" class="b-shadow">
                                        <a-icon type="check-circle" theme="filled" />
                                        <div class="fs-14 fw-400 cr-gray mb-4">Ustd. Khamaruddin</div>
                                        <div class="fs-16 fw-500 cr-black">
                                          Rp580.000
                                          <span class="fw-400 cr-gray">/pax</span>
                                        </div>
                                      </a-radio-button>
                                    </a-col>
                                  </a-row>
                                </a-radio-group>
                              </a-form-item>
                            </a-col>
                          </a-row>
                        </a-list-item>
                      </a-list>

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
                              v-if="servicesTourleader"
                              class="ant-btn--next b-shadow b-radius b-solid fs-15 fw-500"
                              :disabled="hasErrors(form.getFieldsError())"
                              html-type="submit"
                              size="large"
                              block
                            >Simpan & Lanjutkan</a-button>
                            <a-button
                              v-else
                              class="ant-btn--next b-shadow b-radius b-solid fs-15 fw-500"
                              @click="nextSteps"
                              size="large"
                              block
                            >Lewati & Lanjutkan</a-button>
                          </a-col>
                        </a-row>
                      </a-card>
                    </div>
                  </div>
                </a-col>

                <a-col :span="11">
                  <img class="max-width d-block ml-auto" src="/steps/tourleader.svg" />
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
  name: "tourleader",
  head() {
    return {
      title: "Pilih Tour Leader Umrah - Buat Paket Umrah | Haloatta"
    };
  },
  data() {
    return {
      servicesTourleader: false,
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
      return (
        isFieldTouched("servicesTourleader") &&
        getFieldError("servicesTourleader")
      );
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
          return this.$router.push("/create/v2/steps/11");
        }
      });
    },
    nextSteps() {
      this.$router.push("/create/v2/steps/11");
    },
    backSteps() {
      this.$router.push("/create/v2/steps/9");
    }
  }
};
</script>
