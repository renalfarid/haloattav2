<template>
  <div class="ant-layout--authentication">
    <div class="m-auto" style="max-width: 380px">
      <img class="md-logo" v-lazy="'/haloatta.png'" />
      <a-card>
        <div
          class="fs-22 fw-500 cr-black f-default mb-24"
        >Selamat datang di Haloatta, Daftar Sekarang!</div>

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
        >Daftar dengan Email</a-button>

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
                    { type: 'email', message: 'Emmail anda tidak valid!' },
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
            >Daftar</a-button>
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
    </div>
    <img class="img-cover--bottom" src="/icons/authentication.png" />
  </div>
</template>
<script>
import axios from "axios";
const Cookie = process.client ? require("js-cookie") : undefined;
export default {
  layout: "application",
  name: "register",
  head() {
    return {
      title:
        "Daftar Akun Haloatta - Pesan Paket Umrah, Tiket, LA Akomodasi, Visa dan Komponen Umrah Lainnya"
    };
  },
  data() {
    return {
      visibleForm: true,
      formValues: {}
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
