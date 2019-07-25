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
            <img src="/icons/facebook.png" /> Daftar dengan Facebook
          </a-button>

          <a-button class="ant-btn--google" size="large" block>
            <img src="/icons/google.png" /> Daftar dengan Google
          </a-button>

          <a-divider></a-divider>

          <a-button class="ant-btn--mail" size="large" v-bind:class="visibleForm ? 'd-none' : ''" icon="mail" block @click="showForm">Daftar Dengan Email</a-button>

          <a-form v-show="visibleForm" :form="form" @submit="handleSubmit">
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
                v-decorator="['password',{ valuePropName: 'password', initialValue: true, rules: [{ required: true, message: 'Harus di isi' }] }]"
                placeholder="Buat Kata Sandi"
                size="large"
              >
              <a-icon slot="prefix" type="lock" />
              </a-input>
            </a-form-item>
            <a-form-item class="text-center">
              <a-button
                class="ant-btn--authentication mb-8"
                html-type="submit"
                size="large"
                block
              >Daftar</a-button>
              <nuxt-link class="fs-14 cr-white fw-500" to="/login">atau Login disini</nuxt-link>
            </a-form-item>
          </a-form>
        </a-card>
      </a-col>
      <a-col :span="17" class="d-flex align-items-center p-16 vh-100">
        <a-card class="m-auto">
          <img class="logo mb-32" src="/haloatta.png" />
          <div class="fs-30 fw-500 cr-black f-default mb-8">
            Bergabunglah untuk menjadi
            <br />Mitra kami
          </div>
          <div class="fs-18 fw-400 cr-black mb-24">Tingkatkan penjualan produk anda bersama kami</div>
          <div>
            <a-button
              size="large"
              class="ant-btn--register b-radius b-shadow b-solid cr-primary fw-500"
            >Daftar Mitra</a-button>
          </div>
        </a-card>
        <img class="img-cover--bottom" src="/icons/authentication.png" />
      </a-col>
    </a-row>
  </div>
</template>
<script>
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
      visibleForm: false
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
          console.log(values);
        }
      });
    }
  }
};
</script>
