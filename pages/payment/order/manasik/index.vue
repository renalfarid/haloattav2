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

              <h3 class="fw-600 cr-black mt-8">Rencana Manasik</h3>
              <a-card class="b-solid b-radius mb-16">
                <a-row :gutter="16">
                  <a-col :xs="24" :sm="24" :md="16">
                    <a-form-item label="Tanggal Pelaksanaan">
                      <a-date-picker
                        placeholder="Pilih Tanggal"
                        :disabledDate="disabledDate"
                        size="large"
                        class="w-100"
                      />
                    </a-form-item>
                  </a-col>

                  <a-col :xs="24" :sm="24" :md="8">
                    <a-form-item label="Waktu Pelaksanaan">
                      <a-time-picker
                        :open.sync="timePlanning"
                        placeholder="Pilih Jam"
                        format="HH:mm"
                        class="w-100"
                        size="large"
                      >
                        <a-button
                          slot="addon"
                          size="small"
                          type="primary"
                          @click="handleClose"
                          >Simpan</a-button
                        >
                      </a-time-picker>
                    </a-form-item>
                  </a-col>
                </a-row>

                <a-comment>
                  <a-avatar
                    slot="avatar"
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    alt="Umaroh"
                    size="large"
                  />
                  <div slot="content">
                    <a-form-item label="Sapa Umaroh Anda">
                      <a-textarea :rows="4"></a-textarea>
                    </a-form-item>
                  </div>
                </a-comment>
              </a-card>

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

export default {
  middleware: "authenticated",
  layout: "application",
  name: "oder-data-manasik",

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
      typeOrder: 1,
      timePlanning: false
    };
  },

  methods: {
    moment,

    onChange(e) {},

    disabledDate(current) {
      return current && current < moment().endOf("day");
    },

    handleClose() {
      this.timePlanning = false;
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
