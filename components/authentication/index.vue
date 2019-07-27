<template>
  <section>
    <!-- modal register -->
    <div v-if="isShowing">
      <div class="ant-form-modal--login-top">
        <a-button class="ant-form-item--facebook" size="large" block>
          <span class="d-flex align-items-center">
            <img src="/icons/facebook.png" class="mr-8" /> Daftar dengan Facebook
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
            v-decorator="['email',{rules: [{type: 'email', message: 'Emmail anda tidak valid!',}, {required: true, message: 'Harus di isi!',}]}]"
            placeholder="Kontak Email"
            size="large"
          >
            <a-icon slot="prefix" type="mail" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input
            v-decorator="['telp',{ rules: [{ required: true, message: 'Harus di isi!' }] }]"
            placeholder="Nomor Telepon"
            size="large"
          >
            <a-icon slot="prefix" type="phone" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input
            v-decorator="['firstname',{ rules: [{ required: true, message: 'Harus di isi!' }] }]"
            placeholder="Nama Depan"
            size="large"
          >
            <a-icon slot="prefix" type="user" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input
            v-decorator="['lasttname',{ rules: [{ required: true, message: 'Harus di isi!' }] }]"
            placeholder="Nama Belakang"
            size="large"
          >
            <a-icon slot="prefix" type="user" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input
            v-decorator="['password',{ valuePropName: 'password', initialValue: [], rules: [{ required: true, message: 'Harus di isi' }] }]"
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
              <a class="fs-14 cr-primary fw-400" @click="authentication">atau Masuk disini</a>
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
            <img src="/icons/facebook.png" class="mr-8" /> Masuk dengan Facebook
          </span>
        </a-button>
        <a-button class="ant-form-item--google" size="large" block>
          <span class="d-flex align-items-center">
            <img src="/icons/google.png" class="mr-8" /> Masuk dengan Google
          </span>
        </a-button>
      </div>
      <a-divider />
      <a-form class="ant-form-modal--login" :form="form" @submit="handleSubmitLogin">
        <a-form-item>
          <a-input
            v-decorator="['userName',{ rules: [{ required: true, message: 'Harus di isi!' }] }]"
            placeholder="Email atau No. Telp"
            size="large"
          />
        </a-form-item>
        <a-form-item>
          <a-input
            v-decorator="['password',{ valuePropName: 'password', initialValue: [], rules: [{ required: true, message: 'Harus di isi' }] }]"
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
          <a-button type="primary" size="large" html-type="submit" block>Masuk</a-button>
          <div class="d-flex align-items-center mt-8">
            <div>
              <a class="fs-14 cr-primary fw-400" @click="authentication">atau Daftar disini</a>
            </div>
            <div class="ml-auto">
              <a class="fs-14 cr-gray fw-400" href>Lupa password?</a>
            </div>
          </div>
        </a-form-item>
      </a-form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isShowing: false,
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
    handleSubmitLogin(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log(values);
        }
      });
    },
    handleSubmitRegister(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log(values);
        }
      });
    },
    authentication() {
      this.isShowing = !this.isShowing;
    }
  }
};
</script>