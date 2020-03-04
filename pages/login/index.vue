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
          <a-col :xs="24" :sm="24" :md="12" :lg="14" :style="{'margin':'8px 0'}">
            <img v-lazy="require('~/static/illu/access_account.svg')" :style="{'max-width':'100%','max-height':'280px','display':'block','margin':'0 auto'}"/>
          </a-col>
          <a-col :xs="24" :sm="24" :md="12" :lg="10" :style="{'margin':'8px 0'}">
            <a-card>
              <div class="fs-22 fw-500 cr-black f-default mb-24">
                Selamat datang di Haloatta
              </div>

              <a-form
                layout="vertical"
                :form="form"
                @submit="handleSubmit"
                hideRequiredMark
                class="mb-0"
              >
                <a-form-item label="Nomor Telepon atau Email">
                  <a-input
                    v-decorator="[
                      'username',
                      {
                        initialValue: username,
                        valuePropName: 'username',
                        rules: [{ required: true, message: 'Harus di isi!' }]
                      }
                    ]"
                    size="large"
                  />
                </a-form-item>

                <a-form-item label="Kata Sandi">
                  <a-input-password
                    v-decorator="[
                      'password',
                      {
                        initialValue: password,
                        valuePropName: 'password',
                        rules: [{ required: true, message: 'Harus di isi' }]
                      }
                    ]"
                    size="large"
                  />
                </a-form-item>

                <a-form-item class="mb-0">
                  <a-button
                    class="ant-btn--authentication mb-8"
                    html-type="submit"
                    size="large"
                    block
                    >Masuk</a-button
                  >
                </a-form-item>
              </a-form>

              <a-divider>atau masuk dengan</a-divider>

              <a-button class="ant-btn--facebook" size="large" block>
                <img
                  v-lazy="require('~/static/icons/facebook.png')"
                  alt="facebook"
                />
                Facebook
              </a-button>

              <a-button class="ant-btn--google" size="large" block>
                <img
                  v-lazy="require('~/static/icons/google.png')"
                  alt="google"
                />
                Google
              </a-button>

              <div class="d-flex align-items-center">
                <div class="m-auto">
                  <nuxt-link class="fs-14 cr-black fw-400" to="/register">
                    Belum punya akun Haloatta?
                    <span class="cr-primary">Daftar</span>
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
  middleware: "notAuthenticated",
  layout: "application",
  mixins: [Meta],

  data() {
    return {
      username: "",
      password: "",
      meta: {
        title: "Masuk Akun - Haloatta",
        url: "https://www.haloatta.com/login"
      }
    };
  },

  beforeCreate() {
    this.form = this.$form.createForm(this);
  },

  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log(values);
          axios
            .post(process.env.token, {
              username: values.username,
              password: values.password,
              grant_type: "password",
              client_id: 8,
              client_secret: "Uu4QDKCnPbcwMXf5ScMrfkdIFLEewIP5Z7NQSVt2"
            })
            .then(response => {
              console.log(response);
              const auth = {
                accessToken: response.data.access_token,
                name: "ilham"
              };
              this.$store.commit("setAuth", auth); // mutating to store for client rendering
              Cookie.set("auth", response.data.access_token); // saving token in cookie for server rendering
              this.getUser(response.data.access_token);
            })
            .catch(err => {
              console.log("error", err);
            });
        }
      });
    },
    async getUser(token) {
      const config = {
        headers: {
          Authorization: "Bearer " + token
        }
      };
      console.log(token);
      axios
        .get(process.env.baseUrl + "user/info", config)
        .then(response => {
          console.log(response);
          const auth = {
            nama:
              response.data.data.nama_depan +
              " " +
              response.data.data.nama_belakang,
            email: response.data.data.email,
            alamat: response.data.data.alamat,
            status: response.data.data.role_nama,
            telepon: response.data.data.telepon
          };
          this.$store.commit("setAuth", auth); // mutating to store for client rendering
          this.nama =
            response.data.data.nama_depan +
            " " +
            response.data.data.nama_belakang;
          this.email = response.data.data.email;
          this.alamat = response.data.data.alamat;
          this.status = response.data.data.role_nama;
          this.telepon = response.data.data.telepon;
          this.$router.back();
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
