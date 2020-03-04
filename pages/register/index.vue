<template>
  <div class="ant-layout--authentication">
    <div class="m-auto" style="max-width: 420px">
      <nuxt-link to="/">
        <img
          class="md-logo"
          v-lazy="require('~/static/haloatta.png')"
          alt="haloatta"
        />
      </nuxt-link>
    </div>

    <a-row type="flex" justify="center">
      <a-col :xs="23" :sm="22" :md="20" :lg="18">
        <a-row :gutter="80" type="flex" justify="space-around" align="middle">
          <a-col
            :xs="24"
            :sm="24"
            :md="12"
            :lg="12"
            :style="{ margin: '8px 0' }"
          >
            <img
              v-lazy="require('~/static/illu/authentication.svg')"
              :style="{
                'max-width': '100%',
                'max-height': '280px',
                display: 'block',
                margin: '0 auto'
              }"
            />
          </a-col>
          <a-col
            :xs="24"
            :sm="24"
            :md="12"
            :lg="12"
            :style="{ margin: '8px 0' }"
          >
            <a-card>
              <div class="fs-22 fw-500 cr-black f-default mb-24">
                Selamat datang di Haloatta, Daftar Sekarang!
              </div>

              <a-button class="ant-btn--facebook" size="large" block>
                <img src="/icons/facebook.png" /> Daftar dengan Facebook
              </a-button>

              <a-button class="ant-btn--google" size="large" block>
                <img src="/icons/google.png" /> Daftar dengan Google
              </a-button>

              <a-button
                class="ant-btn--mail"
                size="large"
                v-bind:class="visibleForm ? 'd-none' : ''"
                icon="mail"
                block
                @click="showForm"
                >Daftar dengan Email</a-button
              >

              <a-divider>atau daftar dengan</a-divider>

              <a-form
                layout="vertical"
                v-show="visibleForm"
                :form="form"
                @submit="handleSubmit"
                hideRequiredMark
              >
                <a-form-item label="Email">
                  <a-input
                    v-decorator="[
                      'email',
                      {
                        rules: [
                          {
                            type: 'email',
                            message: 'Emmail anda tidak valid!'
                          },
                          { required: true, message: 'Harus di isi!' }
                        ]
                      }
                    ]"
                    size="large"
                  />
                </a-form-item>

                <a-form-item label="Nomor Telepon">
                  <a-input
                    v-decorator="[
                      'telp',
                      { rules: [{ required: true, message: 'Harus di isi!' }] }
                    ]"
                    size="large"
                  />
                </a-form-item>

                <a-form-item label="Nama Depan">
                  <a-input
                    v-decorator="[
                      'firstname',
                      { rules: [{ required: true, message: 'Harus di isi!' }] }
                    ]"
                    size="large"
                  />
                </a-form-item>

                <a-form-item label="Nama Belakang">
                  <a-input
                    v-decorator="[
                      'lastname',
                      { rules: [{ required: true, message: 'Harus di isi!' }] }
                    ]"
                    size="large"
                  />
                </a-form-item>

                <a-form-item label="Kata Sandi">
                  <a-input
                    v-decorator="[
                      'password',
                      {
                        valuePropName: 'password',
                        initialValue: true,
                        rules: [{ required: true, message: 'Harus di isi' }]
                      }
                    ]"
                    size="large"
                  />
                </a-form-item>

                <a-form-item class="text-center mb-0">
                  <a-button
                    class="ant-btn--authentication mb-8"
                    html-type="submit"
                    size="large"
                    block
                    >Daftar</a-button
                  >
                </a-form-item>
              </a-form>

              <div class="d-flex align-items-center">
                <div class="m-auto">
                  <nuxt-link class="fs-14 cr-black fw-400" to="/login">
                    Sudah punya akun Haloatta?
                    <span class="cr-primary">Login</span>
                  </nuxt-link>
                </div>
              </div>
            </a-card>
          </a-col>
        </a-row>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import Meta from "@/assets/mixins/meta";
import axios from "axios";
const Cookie = process.client ? require("js-cookie") : undefined;

export default {
  mixins: [Meta],
  layout: "application",
  
  data() {
    return {
      visibleForm: true,
      formValues: {},
      meta: {
        title: "Daftar Akun - Haloatta",
        url: "https://www.haloatta.com/register"
      }
    };
  },

  beforeCreate() {
    this.form = this.$form.createForm(this);
  },

  methods: {
    showForm() {
      this.visibleForm = !this.visibleForm;
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          this.formValues = {
            nama_depan: values.firstname,
            nama_belakang: values.lastname,
            password: values.password,
            re_password: values.password,
            email: values.email,
            telepon: values.telp
          };

          const new_value = this.formValues;
          axios
            .post(process.env.baseUrl + "register", new_value)
            .then(response => {
              if (response.data.status == 200) {
                this.form.resetFields();
                this.$message.success(response.data.msg);
                this.$router.push({
                  path: "/login"
                });
              } else {
                this.$message.error(response.data.msg);
              }
            })
            .catch(() => {
              this.$message.error("Ada kesalahan");
              console.log(this.formValues, "salah");
            });

          console.log(this.formValues, "salah");
        }
      });
    }
  }
};
</script>
