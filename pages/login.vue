<template>
  <div class="ant-layout--authentication">
    <a-row>
      <a-col
        :span="7"
        :style="{ backgroundColor: '#0FACF3' }"
        class="d-flex align-items-center p-16 vh-100"
      >
        <a-card class="m-auto">
          <div class="fs-30 fw-500 cr-white f-default mb-24">Selamat datang di Haloatta</div>

          <a-button class="ant-btn--facebook" size="large" block>
            <img src="/icons/facebook.png"> Masuk dengan Facebook
          </a-button>

          <a-button class="ant-btn--google" size="large" block>
            <img src="/icons/google.png"> Masuk dengan Google
          </a-button>

          <a-divider></a-divider>

          <a-form :form="form" @submit="handleSubmit">
            <a-form-item>
              <a-input
                v-model="username"
                v-decorator="['username',{ rules: [{ required: true, message: 'Harus di isi!' }] }]"
                placeholder="Email atau No. Telp"
                size="large"
              />
            </a-form-item>
            <a-form-item>
              <a-input
                v-model="password"
                v-decorator="['password',{ valuePropName: 'password', initialValue: true, rules: [{ required: true, message: 'Harus di isi' }] }]"
                placeholder="Kata Sandi"
                size="large"
              >
                <a slot="suffix" class="cr-gray" @click="showPassword">
                  <a-icon v-if="passwordFieldType === 'password'" type="eye"/>
                  <a-icon v-if="passwordFieldType === 'text'" type="eye-invisible"/>
                </a>
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-button
                class="ant-btn--authentication mb-8"
                html-type="submit"
                size="large"
                block
              >Masuk</a-button>
              <div class="d-flex align-items-center">
                <div>
                  <nuxt-link class="fs-14 cr-white fw-500" to="/register">atau Daftar disini</nuxt-link>
                </div>
                <div class="ml-auto">
                  <a class="fs-14 cr-white fw-500" href>Lupa password</a>
                </div>
              </div>
            </a-form-item>
          </a-form>
        </a-card>
      </a-col>
      <a-col :span="17" class="d-flex align-items-center p-16 vh-100">
        <a-card class="m-auto">
          <img class="logo mb-32" src="/haloatta.png">
          <div class="fs-30 fw-500 cr-black f-default mb-8">
            Bergabunglah untuk menjadi
            <br>Mitra kami
          </div>
          <div class="fs-18 fw-400 cr-black mb-24">Tingkatkan penjualan produk anda bersama kami</div>
          <div>
            <a-button
              size="large"
              class="ant-btn--register b-radius b-shadow b-solid cr-primary fw-500"
            >Daftar Mitra</a-button>
          </div>
        </a-card>
        <img class="img-cover--bottom" src="/icons/authentication.png">
      </a-col>
    </a-row>
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
      password: "",
      passwordFieldType: "password"
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  methods: {
    showPassword() {
      this.passwordFieldType =
        this.passwordFieldType === "password" ? "text" : "password";
    },
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
