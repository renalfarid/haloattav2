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
            <UserLogin />

            <a-form
              layout="vertical"
              :form="form"
              @submit="handleSubmitMore"
              hideRequiredMark
            >
              <h3 class="fw-600 cr-black mt-8">Data Pemesan</h3>
              <a-card class="b-solid b-radius mb-16">
                <template slot="title">
                  <a-radio-group
                    name="radioGroup"
                    @change="onChange"
                    v-model="typeOrder"
                  >
                    <a-radio :value="1" class="fs-15 fw-500 cr-black"
                      >Perjalanan Pribadi</a-radio
                    >
                    <a-radio :value="2" class="fs-15 fw-500 cr-black"
                      >Travel Group</a-radio
                    >
                  </a-radio-group>
                </template>

                <div v-if="typeOrder === 1">
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
                </div>

                <div v-if="typeOrder === 2">
                  <a-form-item label="Nama Travel Anda">
                    <a-input
                      v-decorator="[
                        'travel',
                        {
                          rules: [
                            {
                              required: true,
                              message: 'Harus di isi'
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
                </div>
              </a-card>

              <h3 class="fw-600 cr-black mt-8">Data Peserta/Jamaah</h3>
              <a-card class="b-solid b-radius mb-16">
                <a-radio-group
                  name="radioGroup"
                  @change="onChange"
                  v-model="room"
                >
                  <a-radio :value="1" class="fs-15 fw-500 cr-black"
                    >Isi Data Nanti</a-radio
                  >
                  <a-radio :value="2" class="fs-15 fw-500 cr-black"
                    >Isi Data Sekarang</a-radio
                  >
                </a-radio-group>
              </a-card>

              <div v-if="room === 1">
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

              <div v-if="room === 2">
                <a-collapse :bordered="false" class="mb-24">
                  <template v-slot:expandIcon="props">
                    <a-icon
                      type="caret-right"
                      :rotate="props.isActive ? 90 : 0"
                    />
                  </template>

                  <a-collapse-panel header="Peserta/Jamaah 1" key="1">
                    <a-row :gutter="16">
                      <a-col :xs="24" :sm="24" :md="12">
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

                      <a-col :xs="24" :sm="24" :md="24">
                        <a-form-item
                          label="Nama Depan & Tengah (jika ada)"
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
                      <a-col :xs="24" :sm="24" :md="24">
                        <a-form-item
                          label="Nama Belakang / Nama Keluarga"
                          help="(tanpa gelar dan tanda baca)"
                        >
                          <a-input
                            v-decorator="[
                              'lastName',
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
                      <a-col :xs="24" :sm="24" :md="12">
                        <a-form-item label="Tempat Lahir">
                          <a-input
                            v-decorator="[
                              'tempatlahir',
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

                      <a-col :xs="24" :sm="24" :md="12">
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
                    </a-row>

                    <a-row :gutter="16">
                      <a-col :xs="24" :sm="24" :md="12">
                        <a-form-item label="No. Telepon/Handphone">
                          <a-input
                            v-decorator="[
                              'telp',
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

                      <a-col :xs="24" :sm="24" :md="12">
                        <a-form-item label="Jenis Pendidikan">
                          <a-select
                            v-decorator="[
                              'pendidikan',
                              {
                                rules: [
                                  {
                                    required: true,
                                    message: 'Harus di isi!'
                                  }
                                ]
                              }
                            ]"
                            placeholder="Pilih Pendidikan"
                            size="large"
                            style="width: 100%"
                          >
                            <a-select-option value="SD">SD</a-select-option>
                            <a-select-option value="SMP/MTS"
                              >SMP/MTS</a-select-option
                            >
                            <a-select-option value="SMA/SMK"
                              >SMA/SMK</a-select-option
                            >
                            <a-select-option value="S1">S1</a-select-option>
                          </a-select>
                        </a-form-item>
                      </a-col>
                    </a-row>

                    <a-row :gutter="16">
                      <a-col :xs="24" :sm="24" :md="12">
                        <a-form-item label="Status Pernikahan">
                          <a-select
                            v-decorator="[
                              'status',
                              {
                                initialValue: 'Belum Nikah',
                                rules: [
                                  {
                                    required: true,
                                    message: 'Harus di isi!'
                                  }
                                ]
                              }
                            ]"
                            placeholder="Pilih Status"
                            size="large"
                            style="width: 100%"
                          >
                            <a-select-option value="Belum Nikah"
                              >Belum Nikah</a-select-option
                            >
                            <a-select-option value="Nikah"
                              >Nikah</a-select-option
                            >
                          </a-select>
                        </a-form-item>
                      </a-col>
                      <a-col :xs="24" :sm="24" :md="12">
                        <a-form-item label="Jenis Pekerjaan">
                          <a-select
                            v-decorator="[
                              'pekerjaan',
                              {
                                rules: [
                                  {
                                    required: true,
                                    message: 'Harus di isi!'
                                  }
                                ]
                              }
                            ]"
                            placeholder="Pilih Pekerjaan"
                            size="large"
                            style="width: 100%"
                          >
                            <a-select-option value="Swasta"
                              >Swasta</a-select-option
                            >
                            <a-select-option value="Wiraswasta"
                              >Wiraswasta</a-select-option
                            >
                          </a-select>
                        </a-form-item>
                      </a-col>
                    </a-row>

                    <a-row :gutter="16">
                      <a-col :xs="24" :sm="24" :md="16">
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

                      <a-col :xs="24" :sm="24" :md="12">
                        <a-form-item label="Nomor Paspor">
                          <a-input
                            v-decorator="['nomor_paspor']"
                            size="large"
                          />
                        </a-form-item>
                      </a-col>

                      <a-col :xs="24" :sm="24" :md="12">
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

                      <a-col :xs="24" :sm="24" :md="12">
                        <a-form-item label="Tanggal Berlaku">
                          <a-date-picker
                            v-decorator="['tglmaking']"
                            placeholder="Pilih Tanggal"
                            size="large"
                            style="width: 100%"
                          />
                        </a-form-item>
                      </a-col>

                      <a-col :xs="24" :sm="24" :md="12">
                        <a-form-item label="Tanggal Habis Berlaku">
                          <a-date-picker
                            v-decorator="['tglexpired']"
                            :disabledDate="disabledDate"
                            placeholder="Pilih Tanggal"
                            size="large"
                            style="width: 100%"
                          />
                        </a-form-item>
                      </a-col>
                    </a-row>

                    <a-divider></a-divider>

                    <a-row :gutter="16">
                      <a-col :xs="24" :sm="24" :md="24">
                        <a-form-item label="Nama Ahli Waris">
                          <a-input
                            v-decorator="[
                              'ahliWaris',
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

                      <a-col :xs="24" :sm="24" :md="12">
                        <a-form-item label="Hubungan">
                          <a-input
                            v-decorator="[
                              'relation',
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

                      <a-col :xs="24" :sm="24" :md="12">
                        <a-form-item label="No. Telepon">
                          <a-input
                            v-decorator="[
                              'noTelp',
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

                      <a-col :xs="24" :sm="24" :md="24">
                        <a-form-item label="Alamat">
                          <a-textarea
                            :rows="4"
                            v-decorator="[
                              'address',
                              {
                                rules: [
                                  {
                                    required: true,
                                    message: 'Harus di isi!'
                                  }
                                ]
                              }
                            ]"
                          />
                        </a-form-item>
                      </a-col>

                      <a-col :xs="24" :sm="12" :md="12">
                        <a-form-item label="Photo Paspor">
                          <a-upload
                            class="md-upload__large"
                            name="foto"
                            listType="picture-card"
                            :showUploadList="false"
                            action="#"
                            :beforeUpload="beforeUpload"
                            @change="handleChangePhotoPaspor"
                            v-decorator="[
                              'photoPaspor',
                              {
                                initialValue: '',
                                validateTrigger: ['change', 'blur'],
                                rules: [
                                  { required: true, message: 'Harus di isi!' }
                                ]
                              }
                            ]"
                          >
                            <img
                              v-if="photoPaspor"
                              :src="photoPaspor"
                              alt="Paspor"
                            />
                            <div v-else>
                              <a-icon type="plus" />
                            </div>
                          </a-upload>
                        </a-form-item>
                      </a-col>
                    </a-row>
                  </a-collapse-panel>
                </a-collapse>
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
import UserLogin from "@/components/Payment/UserLogin";
import SideTicket from "./side";
import moment from "moment";
import axios from "axios";
const Cookie = process.client ? require("js-cookie") : undefined;

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

export default {
  middleware: "authenticated",
  layout: "application",
  name: "oder-data-insurance",

  components: { UserLogin, SideTicket },

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
      room: 1,
      typeOrder: 1,

      photoPaspor: ""
    };
  },

  methods: {
    moment,

    disabledDate(current) {
      return current && current < moment().endOf("day");
    },

    onChange(e) {},

    // config images
    handleChangePhotoPaspor(info) {
      getBase64(info.file.originFileObj, photoPaspor => {
        this.photoPaspor = photoPaspor;
      });
    },

    beforeUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error("Image must smaller than 2MB!");
      }
      return isLt2M;
    },

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
