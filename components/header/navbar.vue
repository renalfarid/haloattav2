<template>
  <a-layout-header
    class="navbar"
    :style="{
      position: 'absolute',
      zIndex: 1,
      width: '100%',
      background: 'transparent'
    }"
  >
    <div class="navbar-nav">
      <div class="d-flex align-items-center">
        <!-- <a class="drawer-menu"><a-icon type="menu-fold" /></a> -->
        <nuxt-link to="/" class="navbar-brand">
          <div class="logo"></div>
        </nuxt-link>
      </div>
      <div class="navbar-right">
        <a-menu
          class="nav-item"
          mode="horizontal"
          :defaultSelectedKeys="['1']"
          :style="{ lineHeight: '64px' }"
        >
          <a-menu-item key="1" class="nav-link">
            <nuxt-link to="/">Beranda</nuxt-link>
          </a-menu-item>
          <a-menu-item key="2" class="nav-link">
            <nuxt-link to="/about">Tentang</nuxt-link>
          </a-menu-item>
          <a-menu-item key="3" class="nav-link">
            <a href="https://www.haloummi.com" target="_blank">HaloUmmi</a>
          </a-menu-item>
          <a-sub-menu>
            <span slot="title" class="submenu-title-wrapper">Informasi</span>
            <a-menu-item key="information:1">
              <a
                href="https://eservices.haj.gov.sa/eservices3/pages/VisaPaymentInquiry/VisaInquiry.xhtml?dswid=-7084"
                target="_blank"
              >Visa Progresif</a>
            </a-menu-item>
            <a-menu-item key="information:2">
              <a href="https://sipatuh.kemenag.go.id/umroh" target="_blank">Status Keberangkatan</a>
            </a-menu-item>
          </a-sub-menu>
        </a-menu>

        <!-- before login -->
        <div v-if="!$store.state.auth">
          <div class="navbar-button ml-8">
            <a-button
              class="btn-authentication b-shadow b-radius fw-500"
              @click="showAuthentication"
            >Login/Daftar</a-button>
          </div>
        </div>

        <!-- after login -->
        <div v-else>
          <div class="navbar-accounts">
            <nuxt-link to="/accounts">
              <a-avatar icon="user" />
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>

    <!-- modal login dan register -->
    <a-modal wrapClassName="ant-modal-authentication" v-model="authentication">
      <!-- modal register -->
      <div v-if="isShowing">
        <div class="ant-form-modal--login-top">
          <a-button class="ant-form-item--facebook" size="large" block>
            <span class="d-flex align-items-center">
              <img src="/icons/facebook.png" class="mr-8" /> Daftar dengan
              Facebook
            </span>
          </a-button>
          <a-button class="ant-form-item--google" size="large" block>
            <span class="d-flex align-items-center">
              <img src="/icons/google.png" class="mr-8" /> Daftar dengan Google
            </span>
          </a-button>
        </div>
        <a-divider />
        <a-form class="ant-form-modal--login" :form="form" @submit="handleSubmitRegister">
          <a-form-item>
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
              placeholder="Kontak Email"
              size="large"
            >
              <a-icon slot="prefix" type="mail" />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input
              v-decorator="[
                'telp',
                { rules: [{ required: true, message: 'Harus di isi!' }] }
              ]"
              placeholder="Nomor Telepon"
              size="large"
            >
              <a-icon slot="prefix" type="phone" />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input
              v-decorator="[
                'firstname',
                { rules: [{ required: true, message: 'Harus di isi!' }] }
              ]"
              placeholder="Nama Depan"
              size="large"
            >
              <a-icon slot="prefix" type="user" />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input
              v-decorator="[
                'lastname',
                { rules: [{ required: true, message: 'Harus di isi!' }] }
              ]"
              placeholder="Nama Belakang"
              size="large"
            >
              <a-icon slot="prefix" type="user" />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input
              v-decorator="[
                'password',
                {
                  valuePropName: 'password',
                  initialValue: [],
                  rules: [{ required: true, message: 'Harus di isi' }]
                }
              ]"
              placeholder="Buat Kata Sandi"
              size="large"
            >
              <a-icon slot="prefix" type="lock" />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-button type="primary" size="large" html-type="submit" block>Daftar</a-button>
            <div class="d-flex align-items-center mt-8">
              <div>
                <a class="fs-14 cr-primary fw-400" @click="changeForm">atau Masuk disini</a>
              </div>
              <div class="ml-auto">
                <a class="fs-14 cr-gray fw-400" href>Lupa password?</a>
              </div>
            </div>
          </a-form-item>
        </a-form>
      </div>

      <!-- modal login -->
      <div v-else>
        <div class="ant-form-modal--login-top">
          <a-button class="ant-form-item--facebook" size="large" block>
            <span class="d-flex align-items-center">
              <img src="/icons/facebook.png" class="mr-8" /> Masuk dengan
              Facebook
            </span>
          </a-button>
          <a-button class="ant-form-item--google" size="large" block>
            <span class="d-flex align-items-center">
              <img src="/icons/google.png" class="mr-8" /> Masuk dengan Google
            </span>
          </a-button>
        </div>
        <a-divider />
        <a-form class="ant-form-modal--login" :form="form">
          <a-form-item>
            <a-input
              v-model="username"
              v-decorator="[
                'username',
                {
                  valuePropName: 'username',
                  rules: [{ required: true, message: 'Harus di isi!' }]
                }
              ]"
              placeholder="Email atau No. Telp"
              size="large"
            />
          </a-form-item>
          <a-form-item>
            <a-input
              v-model="password"
              v-decorator="[
                'password',
                {
                  valuePropName: 'password',
                  rules: [{ required: true, message: 'Harus di isi' }]
                }
              ]"
              :type="passwordFieldType"
              placeholder="Kata Sandi"
              size="large"
            >
              <a slot="suffix" class="cr-gray" @click="showPassword">
                <a-icon v-if="passwordFieldType === 'password'" type="eye" />
                <a-icon v-if="passwordFieldType === 'text'" type="eye-invisible" />
              </a>
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-button type="primary" size="large" @click="loginpost" block>Masuk</a-button>
            <div class="d-flex align-items-center mt-8">
              <div>
                <a class="fs-14 cr-primary fw-400" @click="changeForm">atau Daftar disini</a>
              </div>
              <div class="ml-auto">
                <a class="fs-14 cr-gray fw-400" href>Lupa password?</a>
              </div>
            </div>
          </a-form-item>
        </a-form>
      </div>
    </a-modal>
  </a-layout-header>
</template>
<script>
import axios from "axios";
const Cookie = process.client ? require("js-cookie") : undefined;
export default {
  data() {
    return {
      authentication: false,
      isShowing: false,
      username: "",
      password: "",
      passwordFieldType: "password",
      form: this.$form.createForm(this),
      formValues: {}
    };
  },
  methods: {
    showAuthentication() {
      this.authentication = true;
    },
    showPassword() {
      this.passwordFieldType =
        this.passwordFieldType === "password" ? "text" : "password";
    },
    changeForm() {
      this.isShowing = !this.isShowing;
    },

    // handleSubmitLogin(e) {
    //   e.preventDefault();
    //   this.form.validateFields((err, values) => {
    //     if (!err) {
    //       console.log(values);
    //       this.loginpost();
    //       this.authentication = false;
    //     }
    //   });
    // },

    handleSubmitRegister(e) {
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
    },

    loginpost() {
      this.form.validateFields(err => {
        if (!err) {
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
              this.authentication = false;
            })
            .catch(err => {
              this.authentication = false;
              this.$message.error("Maaf, username atau password anda salah!");
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
            accessToken: token,
            nama:
              response.data.data.nama_depan +
              " " +
              response.data.data.nama_belakang,
            email: response.data.data.email,
            alamat: response.data.data.alamat,
            status: response.data.data.role_nama,
            telepon: response.data.data.telepon,
            saldo: response.data.data.saldo,
            poin: response.data.data.poin
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
          this.$router.replace("/");
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
