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
            >Langkah 1 Komponen Wajib : LA Akomodasi (Hotel)</div>
          </a-col>
          <a-col :span="8"></a-col>
        </a-row>
      </div>
    </a-layout-header>
    <a-progress :percent="50" size="small" :showInfo="false" />
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
                        LA Akomodasi (Hotel) apa yang
                        <br />Anda inginkan ?
                      </div>
                      <a-row :gutter="16" type="flex" justify="space-between" align="bottom">
                        <a-col :span="24">
                          <a-form-item
                            label="Bintang Hotel"
                            :validate-status="itemError() ? 'error' : ''"
                            :help="itemError() || ''"
                          >
                            <a-select
                              v-decorator="['bintangHotel',{initialValue: [], rules: [{ required: true, message: 'Harus di isi!' }]}]"
                              placeholder="Pilih Bintang Hotel"
                              size="large"
                            >
                              <a-select-option value="Bintang 3 Setaraf">Bintang 3 Setaraf</a-select-option>
                              <a-select-option value="Bintang 4 Setaraf">Bintang 4 Setaraf</a-select-option>
                              <a-select-option value="Bintang 5 Setaraf">Bintang 5 Setaraf</a-select-option>
                            </a-select>
                          </a-form-item>
                        </a-col>

                        <a-col :span="24">
                          <a-form-item
                            label="Ingin mulai dari kota mana?"
                            :validate-status="itemError() ? 'error' : ''"
                            :help="itemError() || ''"
                          >
                            <a-row :gutter="8">
                              <a-col :span="12">
                                <a-select
                                  v-decorator="['cityStart',{initialValue: cityStart[0], rules: [{ required: true, message: 'Harus di isi!' }]}]"
                                  @change="handleItemChange"
                                  size="large"
                                >
                                  <a-select-option v-for="item in cityStart" :key="item">{{item}}</a-select-option>
                                </a-select>
                              </a-col>
                              <a-col :span="12">
                                <a-select v-model="itemStart" size="large">
                                  <a-select-option v-for="city in cities" :key="city">{{city}}</a-select-option>
                                </a-select>
                              </a-col>
                            </a-row>
                          </a-form-item>
                        </a-col>

                        <a-col :span="24">
                          <a-form-item
                            label="Durasi menginap?"
                            :validate-status="itemError() ? 'error' : ''"
                            :help="itemError() || ''"
                          >
                            <a-row :gutter="8">
                              <a-col :span="12">
                                <a-select
                                  v-decorator="['timeStart',{initialValue: timeStart[0], rules: [{ required: true, message: 'Harus di isi!' }]}]"
                                  @change="handleItemChangeNight"
                                  size="large"
                                >
                                  <a-select-option v-for="item in timeStart" :key="item">{{item}}</a-select-option>
                                </a-select>
                              </a-col>
                              <a-col :span="12">
                                <a-select v-model="nightStart" size="large">
                                  <a-select-option v-for="time in times" :key="time">{{time}}</a-select-option>
                                </a-select>
                              </a-col>
                            </a-row>
                          </a-form-item>
                        </a-col>

                        <a-col :span="24">
                          <a-form-item
                            label="Jarak hotel yang di inginkan"
                            :validate-status="itemError() ? 'error' : ''"
                            :help="itemError() || ''"
                          >
                            <a-radio-group
                              v-decorator="['jarakHotel',{initialValue: [], rules: [{ required: true, message: 'Harus di isi!' }]}]"
                            >
                              <a-radio :value="1" class="cr-black">Kurang dari 500m</a-radio>
                              <a-radio :value="2" class="cr-black">Lebih dari 500m</a-radio>
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
                            >
                              <a-row>
                                <a-col :span="24">
                                  <a-radio
                                    :value="1"
                                    class="b-shadow b-solid-default b-radius pt-8 pb-8 pl-16 pr-16 mt-8 d-flex align-items-center w-100"
                                  >
                                    <div class="w-100 p-8">
                                      <a-icon type="check-circle" theme="filled" />
                                      <div class="fs-14 cr-black d-flex align-items-center">
                                        <div class="fw-400">
                                          <div
                                            class="text-ellipsis f-default"
                                          >Pinwood Hotel (Makkah)</div>
                                          <div
                                            class="text-ellipsis f-default"
                                          >Rayana Ayyad (Madinah)</div>
                                        </div>
                                        <div class="fw-500 ml-auto text-ellipsis">
                                          Rp7.600.000
                                          <span class="fw-400 cr-gray">/pax</span>
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
                                      <div class="fs-14 cr-black d-flex align-items-center">
                                        <div class="fw-400">
                                          <div class="text-ellipsis f-default">Al Andalus (Makkah)</div>
                                          <div class="text-ellipsis f-default">Al Massa (Madinah)</div>
                                        </div>
                                        <div class="fw-500 ml-auto text-ellipsis">
                                          Rp8.600.000
                                          <span class="fw-400 cr-gray">/pax</span>
                                        </div>
                                      </div>
                                    </div>
                                  </a-radio>
                                </a-col>
                              </a-row>
                            </a-radio-group>
                          </a-form-item>
                        </a-col>

                        <a-col :span="24">
                          <a-form-item>Pengaturan dasar untuk room LA Akomodasi anda di tipe room sekamar berempat</a-form-item>
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
                  <img class="max-width d-block ml-auto" src="/steps/accommodation.svg" />
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
const cityStart = ["Dari Madinah", "Dari Mekkah"];
const cityEnd = {
  "Dari Madinah" : ["Menuju Mekkah"],
  "Dari Mekkah" : ["Menuju Madinah"]
};
const timeStart = ["3 Hari Madinah", "3 Hari Mekkah"];
const timeEnd = {
  "3 Hari Madinah" : ["4 Hari Mekkah"],
  "3 Hari Mekkah" : ["4 Hari Madinah"]
};
export default {
  layout: "application",
  name: "accommodation",
  head() {
    return {
      title: "Pilih LA Akomodasi - Buat Paket Umrah | Haloatta"
    };
  },
  data() {
    return {
      spinning: true,
      cityStart,
      cityEnd,
      cities: cityEnd[cityStart[0]],
      itemStart: cityEnd[cityStart[0]][0],
      timeStart,
      timeEnd,
      times: timeEnd[timeStart[0]],
      nightStart: timeEnd[timeStart[0]][0],
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
      return isFieldTouched("cityStart") && getFieldError("cityStart");
      return isFieldTouched("timeStart") && getFieldError("timeStart");
      return isFieldTouched("bintangHotel") && getFieldError("bintangHotel");
      return isFieldTouched("jarakHotel") && getFieldError("jarakHotel");
      return isFieldTouched("harga") && getFieldError("harga");
    },
    handleItemChange(value) {
      this.cities = cityEnd[value];
      this.itemStart = cityEnd[value][0];
    },
    handleItemChangeNight(value) {
      this.times = timeEnd[value];
      this.nightStart = timeEnd[value][0];
    },
    handleSubmit(e) {
      e.preventDefault();
      this.$router.push("/create/v2/steps/4");
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    },
    backSteps() {
      this.$router.push("/create/v2/steps/2");
    }
  }
};
</script>
