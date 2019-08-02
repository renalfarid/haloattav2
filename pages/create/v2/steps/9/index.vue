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
            >Langkah 2 Komponen Pilihan : Perlengkapan Umrah</div>
          </a-col>
          <a-col :span="8" class="text-right"></a-col>
        </a-row>
      </div>
    </a-layout-header>
    <a-progress :percent="75" size="small" :showInfo="false" />
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
                      >Pilih Perlengkapan Umrah Anda!</div>

                      <div>
                        <div class="d-flex align-items-center">
                          <div class="fs-16 fw-500 cr-black mr-8">
                            Apakah anda ingin
                            <br />menggunakan Vendor Perlengkapan ?
                          </div>
                          <div class="ml-auto">
                            <a-switch v-on:click="servicesEquipment = !servicesEquipment">
                              <a-icon type="check" slot="checkedChildren" />
                              <a-icon type="close" slot="unCheckedChildren" />
                            </a-switch>
                          </div>
                        </div>
                        <div class="fs-14 fw-400 cr-gray mt-8">
                          <span>
                            Kami menyiapkan vendor yang akan membantu
                            kebutuhan Perlengkapan jamaah anda
                          </span>
                        </div>
                      </div>

                      <a-list v-if="servicesEquipment">
                        <a-list-item>
                          <a-row>
                            <a-col :span="24">
                              <a-form-item
                                label="Tipe Perlengkapan Umrah"
                                :validate-status="itemError() ? 'error' : ''"
                                :help="itemError() || ''"
                                class="mb-0"
                              >
                                <a-radio-group
                                  v-decorator="['servicesEquipment',{initialValue: [], rules: [{ required: true, message: 'Harus di isi!' }]}]"
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
                                            >Perlengkapan Standar</div>
                                            <div class="fw-400 cr-gray">
                                              Koper,
                                              Tas Slempang,
                                              Buku Doa,
                                              Mukenah & Kain Ihram,
                                              Syal,
                                              Tote Bag
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
                                            >Perlengkapan Exclusive</div>
                                            <div class="fw-400 cr-gray">
                                              Koper,
                                              Tas Slempang,
                                              Buku Doa,
                                              Mukenah & Kain Ihram,
                                              Syal,
                                              Tas Serut,
                                              Bantal Travel,
                                              Tote Bag
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
                                        <div
                                          class="fs-14 fw-400 cr-gray f-default text-ellipsis mb-4"
                                        >PT. Subur Jaya</div>
                                        <div class="fs-16 fw-500 cr-black">
                                          Rp800.000
                                          <span class="fw-400 cr-gray">/pax</span>
                                        </div>
                                      </a-radio-button>
                                    </a-col>
                                    <a-col :xs="24" :sm="24" :md="12" :lg="12">
                                      <a-radio-button :value="2" class="b-shadow">
                                        <a-icon type="check-circle" theme="filled" />
                                        <div
                                          class="fs-14 fw-400 cr-gray f-default text-ellipsis mb-4"
                                        >CV. Umrah Equipment</div>
                                        <div class="fs-16 fw-500 cr-black">
                                          Rp880.000
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
                              v-if="servicesEquipment"
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
                  <img class="max-width d-block ml-auto" src="/steps/equipment.svg" />
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
  name: "equipment",
  head() {
    return {
      title: "Pilih Perlengkapan Umrah - Buat Paket Umrah | Haloatta"
    };
  },
  data() {
    return {
      servicesEquipment: false,
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
        isFieldTouched("servicesEquipment") &&
        getFieldError("servicesEquipment")
      );
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
          return this.$router.push("/create/v2/steps/10");
        }
      });
    },
    nextSteps() {
      this.$router.push("/create/v2/steps/10");
    },
    backSteps() {
      this.$router.push("/create/v2/steps/8");
    }
  }
};
</script>
