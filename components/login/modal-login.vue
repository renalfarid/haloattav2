<template>
  <div>
    <div class="ant-form-modal--login-top">
      <a-button class="ant-form-item--facebook" block>Masuk dengan Facebook</a-button>
      <a-button class="ant-form-item--google" block>Masuk dengan Google</a-button>
    </div>
    <a-divider :style="{fontWeight: 'normal'}">atau</a-divider>
    <a-form class="ant-form-modal--login" :form="form" @submit="handleSubmit">
      <a-form-item>
        <a-input
          v-decorator="[
          'userName',
          { rules: [{ required: true, message: 'Harus di isi!' }] }
        ]"
          placeholder="Email atau No. Handphone"
        >
          <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)"/>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Harus di isi!' }] }
        ]"
          type="password"
          placeholder="Kata Sandi"
        >
          <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)"/>
        </a-input>
      </a-form-item>
      <div class="ant-form-item--action">
        <div class="d-flex align-items-center">
          <a-checkbox
            v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          }
        ]"
          >Ingat Saya</a-checkbox>
          <a class="ml-auto" href>Lupa kata sandi?</a>
        </div>
        <a-button type="primary" html-type="submit" block :style="{margin: '10px 0'}">Masuk</a-button>
        <div class="text-center">
          Tidak punya akun?
          <a href>Daftar</a>
        </div>
      </div>
    </a-form>
  </div>
</template>

<script>
export default {
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    }
  }
};
</script>