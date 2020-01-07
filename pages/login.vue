<template>
  <div class="ant-layout--authentication">
    <div class="m-auto" style="max-width: 380px">
      <img class="md-logo" v-lazy="'/haloatta.png'" />
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

        <a-divider> atau masuk dengan </a-divider>

        <a-button class="ant-btn--facebook" size="large" block>
          <img src="/icons/facebook.png" /> Facebook
        </a-button>

        <a-button class="ant-btn--google" size="large" block>
          <img src="/icons/google.png" /> Google
        </a-button>

        <div class="d-flex align-items-center">
          <div class="m-auto">
            <nuxt-link class="fs-14 cr-black fw-400" to="/register"
              >Belum punya akun Haloatta?
              <span class="cr-primary">Daftar</span></nuxt-link
            >
          </div>
        </div>
      </a-card>
    </div>

    <img class="img-cover--bottom" src="/icons/authentication.png" />
  </div>
</template>
<script>
import axios from "axios";
const Cookie = process.client ? require("js-cookie") : undefined;

export default {
  middleware: "notAuthenticated",
  layout: "application",
  name: "login",
  head() {
    return {
      title:
        "Login Akun Haloatta - Pesan Paket Umrah, Tiket, LA Akomodasi, Visa dan Komponen Umrah Lainnya"
    };
  },
  data() {
    return {
      username: "",
      password: ""
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
              username: this.username,
              password: this.password,
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
          this.$router.push("/");
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
