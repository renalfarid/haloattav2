<template>
  <a-layout
    class="ant-layout--payment"
    :style="{ 'background-color': '#f7f7f7' }"
  >
    <a-layout-header class="ant-layout-header--payment">
      <div class="ant-logo">
        <nuxt-link to="/">
          <img src="/haloatta_white.png" />
        </nuxt-link>
      </div>
      <a-steps :current="0" size="small">
        <a-step title="Data Pemesan" />
        <a-step title="Pembayaran" />
        <a-step title="Konfirmasi" />
      </a-steps>
    </a-layout-header>

    <a-layout-content class="ant-layout-content--payment-order">
      <div class="container">
        <a-row :gutter="24">
          <a-col
            :xs="24"
            :sm="24"
            :md="24"
            :lg="8"
            class="sticky-top mb-24"
            :style="{ float: 'right' }"
          >
            <SideTicket />
          </a-col>

          <a-col :xs="24" :sm="24" :md="24" :lg="16" class="mb-24">
            <a-card class="b-solid b-radius mb-16">
              <div class="d-flex align-items-center w-100">
                <div>
                  <a-avatar
                    class="mr-16"
                    size="large"
                    :style="{
                      'background-color': '#87d068',
                      'min-width': '40px'
                    }"
                    icon="user"
                  />
                </div>
                <div>
                  <div class="fs-14 fw-400 cr-gray text-capitalize">
                    Anda Login sebagai
                  </div>
                  <div class="fs-16 fw-500 cr-black text-capitalize">
                    MAHADESIGN
                  </div>
                </div>
              </div>
            </a-card>

            <a-form
              layout="vertical"
              :form="form"
              @submit="handleSubmitMore"
              hideRequiredMark
            >
              <h3 class="fw-600 cr-black mt-8">Data Pemesan</h3>
              <a-card class="b-solid b-radius mb-16">
                <a-form-item label="Nama Lengkap">
                  <a-input
                    v-decorator="[
                      'nama',
                      {
                        rules: [
                          {
                            required: true,
                            message: 'Nama pemesan harus di isi'
                          }
                        ]
                      }
                    ]"
                    size="large"
                  />
                </a-form-item>

                <a-row :gutter="16">
                  <a-col :xs="24" :sm="24" :md="12">
                    <a-form-item label="Nomor Telepon">
                      <a-input
                        v-decorator="[
                          'telp',
                          {
                            rules: [
                              {
                                required: true,
                                message: 'Nomor telp/handphone harus di isi'
                              }
                            ]
                          }
                        ]"
                        size="large"
                      />
                    </a-form-item>
                  </a-col>

                  <a-col :xs="24" :sm="24" :md="12">
                    <a-form-item label="Email">
                      <a-input
                        v-decorator="[
                          'email',
                          {
                            rules: [
                              {
                                type: 'email',
                                message: 'Email anda tidak valid!'
                              },
                              {
                                required: true,
                                message: 'Email pemesan harus di isi'
                              }
                            ]
                          }
                        ]"
                        size="large"
                      />
                    </a-form-item>
                  </a-col>
                </a-row>
              </a-card>

              <h3 class="fw-600 cr-black mt-8">Data Penumpang</h3>
              <a-card class="b-solid b-radius mb-16">
                <a-radio-group
                  name="radioGroup"
                  @change="onChange"
                  v-model="passenger"
                >
                  <a-radio :value="1" class="fs-16 cr-black"
                    >Isi Data Nanti</a-radio
                  >
                  <a-radio :value="2" class="fs-16 cr-black"
                    >Isi Data Sekarang</a-radio
                  >
                </a-radio-group>
              </a-card>

              <div v-if="passenger === 2">
                <a-alert
                  :showIcon="false"
                  :style="{
                    'border-radius': '4px',
                    'margin-bottom': '16px',
                    padding: '24px'
                  }"
                  banner
                >
                  <template slot="message">
                    <h5 class="text-uppercase cr-gray">Informasi Penting :</h5>
                    <div
                      class="d-flex align-items-start mb-8"
                      v-for="(item, index) in information"
                      :key="index"
                    >
                      <div class="mr-8">
                        <a-icon
                          type="check-circle"
                          theme="filled"
                          :style="{ opacity: '.7' }"
                        />
                      </div>
                      <div>
                        {{ item.title }}
                      </div>
                    </div>
                  </template>
                </a-alert>

                <a-collapse defaultActiveKey="1" :bordered="false" class="mb-24">
                  <template v-slot:expandIcon="props">
                    <a-icon
                      type="caret-right"
                      :rotate="props.isActive ? 90 : 0"
                    />
                  </template>

                  <a-collapse-panel header="Penumpang 1" key="1">
                    <a-row :gutter="16">
                      <a-col :span="8">
                        <a-form-item label="Title">
                          <a-select
                            v-decorator="[
                              'title',
                              {
                                initialValue: 'Tn.',
                                rules: [
                                  {
                                    required: true,
                                    message: 'Harus di isi!'
                                  }
                                ]
                              }
                            ]"
                            size="large"
                            style="width: 100%"
                          >
                            <a-select-option value="Tn.">Tn.</a-select-option>
                            <a-select-option value="Ny.">Ny.</a-select-option>
                            <a-select-option value="Nn.">nn.</a-select-option>
                          </a-select>
                        </a-form-item>
                      </a-col>

                      <a-col :span="24">
                        <a-form-item
                          label="Nama Lengkap"
                          help="(tanpa gelar dan tanda baca)"
                        >
                          <a-input
                            v-decorator="[
                              'firstName',
                              {
                                rules: [
                                  {
                                    required: true,
                                    message: 'Harus di isi!'
                                  }
                                ]
                              }
                            ]"
                            size="large"
                          />
                        </a-form-item>
                      </a-col>
                    </a-row>

                    <a-row :gutter="16">
                      <a-col :xs="24" :sm="12" :md="12">
                        <a-form-item label="Tanggal Lahir">
                          <a-date-picker
                            v-decorator="[
                              'date',
                              {
                                rules: [
                                  {
                                    required: true,
                                    message: 'Harus di isi!'
                                  }
                                ]
                              }
                            ]"
                            placeholder="Pilih Tanggal"
                            size="large"
                            style="width: 100%"
                          />
                        </a-form-item>
                      </a-col>

                      <a-col :xs="24" :sm="12" :md="12">
                        <a-form-item label="Kewarganegaraan">
                          <a-select
                            v-decorator="[
                              'country',
                              {
                                initialValue: 'Indonesia',
                                rules: [
                                  {
                                    required: true,
                                    message: 'Harus di isi!'
                                  }
                                ]
                              }
                            ]"
                            placeholder="Pilih Kewarganegaraan"
                            size="large"
                          >
                            <a-select-option value="Indonesia"
                              >Indonesia</a-select-option
                            >
                          </a-select>
                        </a-form-item>
                      </a-col>
                    </a-row>

                    <a-row>
                      <a-col :span="14">
                        <a-form-item label="Nomor Paspor">
                          <a-input
                            v-decorator="['nomor_paspor']"
                            size="large"
                          />
                        </a-form-item>
                      </a-col>
                    </a-row>

                    <a-row :gutter="16">
                      <a-col :xs="24" :sm="12" :md="12">
                        <a-form-item label="Negara Penerbit">
                          <a-select
                            v-decorator="[
                              'country_paspor',
                              { initialValue: 'Indonesia' }
                            ]"
                            placeholder="Pilih Negara"
                            size="large"
                          >
                            <a-select-option value="Indonesia"
                              >Indonesia</a-select-option
                            >
                          </a-select>
                        </a-form-item>
                      </a-col>

                      <a-col :xs="24" :sm="12" :md="12">
                        <a-form-item label="Tanggal Habis Berlaku">
                          <a-date-picker
                            v-decorator="['tglexpire']"
                            format="YYYY-MM-DD"
                            :disabledDate="disabledDate"
                            placeholder="Pilih Tanggal"
                            size="large"
                            style="width: 100%"
                          />
                        </a-form-item>
                      </a-col>
                    </a-row>
                  </a-collapse-panel>

                  <a-collapse-panel header="Penumpang 2" key="2">
                    <a-row :gutter="16">
                      <a-col :span="8">
                        <a-form-item label="Title">
                          <a-select
                            v-decorator="[
                              'title',
                              {
                                initialValue: 'Tn.',
                                rules: [
                                  {
                                    required: true,
                                    message: 'Harus di isi!'
                                  }
                                ]
                              }
                            ]"
                            size="large"
                            style="width: 100%"
                          >
                            <a-select-option value="Tn.">Tn.</a-select-option>
                            <a-select-option value="Ny.">Ny.</a-select-option>
                            <a-select-option value="Nn.">nn.</a-select-option>
                          </a-select>
                        </a-form-item>
                      </a-col>

                      <a-col :span="24">
                        <a-form-item
                          label="Nama Lengkap"
                          help="(tanpa gelar dan tanda baca)"
                        >
                          <a-input
                            v-decorator="[
                              'firstName',
                              {
                                rules: [
                                  {
                                    required: true,
                                    message: 'Harus di isi!'
                                  }
                                ]
                              }
                            ]"
                            size="large"
                          />
                        </a-form-item>
                      </a-col>
                    </a-row>

                    <a-row :gutter="16">
                      <a-col :xs="24" :sm="12" :md="12">
                        <a-form-item label="Tanggal Lahir">
                          <a-date-picker
                            v-decorator="[
                              'date',
                              {
                                rules: [
                                  {
                                    required: true,
                                    message: 'Harus di isi!'
                                  }
                                ]
                              }
                            ]"
                            placeholder="Pilih Tanggal"
                            size="large"
                            style="width: 100%"
                          />
                        </a-form-item>
                      </a-col>

                      <a-col :xs="24" :sm="12" :md="12">
                        <a-form-item label="Kewarganegaraan">
                          <a-select
                            v-decorator="[
                              'country',
                              {
                                initialValue: 'Indonesia',
                                rules: [
                                  {
                                    required: true,
                                    message: 'Harus di isi!'
                                  }
                                ]
                              }
                            ]"
                            placeholder="Pilih Kewarganegaraan"
                            size="large"
                          >
                            <a-select-option value="Indonesia"
                              >Indonesia</a-select-option
                            >
                          </a-select>
                        </a-form-item>
                      </a-col>
                    </a-row>

                    <a-row>
                      <a-col :span="14">
                        <a-form-item label="Nomor Paspor">
                          <a-input
                            v-decorator="['nomor_paspor']"
                            size="large"
                          />
                        </a-form-item>
                      </a-col>
                    </a-row>

                    <a-row :gutter="16">
                      <a-col :xs="24" :sm="12" :md="12">
                        <a-form-item label="Negara Penerbit">
                          <a-select
                            v-decorator="[
                              'country_paspor',
                              { initialValue: 'Indonesia' }
                            ]"
                            placeholder="Pilih Negara"
                            size="large"
                          >
                            <a-select-option value="Indonesia"
                              >Indonesia</a-select-option
                            >
                          </a-select>
                        </a-form-item>
                      </a-col>

                      <a-col :xs="24" :sm="12" :md="12">
                        <a-form-item label="Tanggal Habis Berlaku">
                          <a-date-picker
                            v-decorator="['tglexpire']"
                            format="YYYY-MM-DD"
                            :disabledDate="disabledDate"
                            placeholder="Pilih Tanggal"
                            size="large"
                            style="width: 100%"
                          />
                        </a-form-item>
                      </a-col>
                    </a-row>
                  </a-collapse-panel>

                  <a-collapse-panel header="Penumpang 3" key="3">
                    <a-row :gutter="16">
                      <a-col :span="8">
                        <a-form-item label="Title">
                          <a-select
                            v-decorator="[
                              'title',
                              {
                                initialValue: 'Tn.',
                                rules: [
                                  {
                                    required: true,
                                    message: 'Harus di isi!'
                                  }
                                ]
                              }
                            ]"
                            size="large"
                            style="width: 100%"
                          >
                            <a-select-option value="Tn.">Tn.</a-select-option>
                            <a-select-option value="Ny.">Ny.</a-select-option>
                            <a-select-option value="Nn.">nn.</a-select-option>
                          </a-select>
                        </a-form-item>
                      </a-col>

                      <a-col :span="24">
                        <a-form-item
                          label="Nama Lengkap"
                          help="(tanpa gelar dan tanda baca)"
                        >
                          <a-input
                            v-decorator="[
                              'firstName',
                              {
                                rules: [
                                  {
                                    required: true,
                                    message: 'Harus di isi!'
                                  }
                                ]
                              }
                            ]"
                            size="large"
                          />
                        </a-form-item>
                      </a-col>
                    </a-row>

                    <a-row :gutter="16">
                      <a-col :xs="24" :sm="12" :md="12">
                        <a-form-item label="Tanggal Lahir">
                          <a-date-picker
                            v-decorator="[
                              'date',
                              {
                                rules: [
                                  {
                                    required: true,
                                    message: 'Harus di isi!'
                                  }
                                ]
                              }
                            ]"
                            placeholder="Pilih Tanggal"
                            size="large"
                            style="width: 100%"
                          />
                        </a-form-item>
                      </a-col>

                      <a-col :xs="24" :sm="12" :md="12">
                        <a-form-item label="Kewarganegaraan">
                          <a-select
                            v-decorator="[
                              'country',
                              {
                                initialValue: 'Indonesia',
                                rules: [
                                  {
                                    required: true,
                                    message: 'Harus di isi!'
                                  }
                                ]
                              }
                            ]"
                            placeholder="Pilih Kewarganegaraan"
                            size="large"
                          >
                            <a-select-option value="Indonesia"
                              >Indonesia</a-select-option
                            >
                          </a-select>
                        </a-form-item>
                      </a-col>
                    </a-row>

                    <a-row>
                      <a-col :span="14">
                        <a-form-item label="Nomor Paspor">
                          <a-input
                            v-decorator="['nomor_paspor']"
                            size="large"
                          />
                        </a-form-item>
                      </a-col>
                    </a-row>

                    <a-row :gutter="16">
                      <a-col :xs="24" :sm="12" :md="12">
                        <a-form-item label="Negara Penerbit">
                          <a-select
                            v-decorator="[
                              'country_paspor',
                              { initialValue: 'Indonesia' }
                            ]"
                            placeholder="Pilih Negara"
                            size="large"
                          >
                            <a-select-option value="Indonesia"
                              >Indonesia</a-select-option
                            >
                          </a-select>
                        </a-form-item>
                      </a-col>

                      <a-col :xs="24" :sm="12" :md="12">
                        <a-form-item label="Tanggal Habis Berlaku">
                          <a-date-picker
                            v-decorator="['tglexpire']"
                            format="YYYY-MM-DD"
                            :disabledDate="disabledDate"
                            placeholder="Pilih Tanggal"
                            size="large"
                            style="width: 100%"
                          />
                        </a-form-item>
                      </a-col>
                    </a-row>
                  </a-collapse-panel>
                </a-collapse>
              </div>

              <div v-if="passenger === 1">
                <a-alert
                  :showIcon="false"
                  message="Kami akan mengirimkan formulir pengisian data setelah anda melakukan pembayaran."
                  :style="{
                    'border-radius': '4px',
                    'margin-bottom': '24px',
                    padding: '24px'
                  }"
                  banner
                />
              </div>

              <div :style="{ display: 'block', 'text-align': 'right' }">
                <a-button
                  class="md-btn--action"
                  size="large"
                  type="primary"
                  html-type="submit"
                >
                  Lanjut ke Pembayaran
                </a-button>
              </div>
            </a-form>
          </a-col>
        </a-row>
      </div>
    </a-layout-content>

    <a-layout-footer
      class="ant-layout-footer--payment"
      :style="{ 'background-color': '#f7f7f7', 'text-align': 'center' }"
    >
      <div class="container">
        2016 - {{ new Date().getFullYear() }} © PT. NUH Teknologi Solution
      </div>
    </a-layout-footer>
  </a-layout>
</template>
<script>
import SideTicket from "./side";
import moment from "moment";
import axios from "axios";
const Cookie = process.client ? require("js-cookie") : undefined;

export default {
  middleware: "authenticated",
  layout: "application",
  name: "orderData",

  components: { SideTicket },

  beforeCreate() {
    this.form = this.$form.createForm(this);
  },

  head() {
    return {
      title: "Haloatta - Booking Paket Umrah & Komponen Umrah Terlengkap"
    };
  },

  data() {
    return {
      passenger: 1,

      information: [
        {
          title:
            "Diperlukan paspor minimal 6 bulan dari tanggal keberangkatan untuk perjalanan international atau transit ke luar negeri."
        }
      ]
    };
  },

  methods: {
    moment,

    disabledDate(current) {
      return current && current < moment().endOf("day");
    },

    onChange(e) {},

    handleSubmitMore(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          return;
        }
      });
    }
  }
};
</script>
