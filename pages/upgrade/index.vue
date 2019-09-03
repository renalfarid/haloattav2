<template>
  <div class="container pt-24 pb-24">
    <a-row type="flex" justify="center">
      <a-col :span="10">
        <div class="ant-upgrade">
          <img src="/haloatta.png" class="mb-16" />
          <a @click="$router.go(-1)"><a-button class="ant-close" shape="circle" icon="close" size="large" /></a>
          <h1 class="fs-28 fw-600 cr-black mb-8">Bergabung menjadi Mitra Haloatta</h1>
          <p class="fs-16 cr-gray">Tingkatkan penjualan produk umrah anda bersama Haloatta</p>

          <a-form layout="vertical" :form="form" hideRequiredMark>
            <a-form-item label="Nama Depan">
              <a-input
                v-decorator="['firstName',{rules: [{required: true, message: 'Harus di isi!'}]}]"
                size="large"
              />
            </a-form-item>

            <a-form-item label="Nama Belakang">
              <a-input
                v-decorator="['lastName',{rules: [{required: true, message: 'Harus di isi!'}]}]"
                size="large"
              />
            </a-form-item>

            <a-form-item label="Jenis Kelamin">
              <a-radio-group name="jk">
                <a-radio :value="1">Laki - Laki</a-radio>
                <a-radio :value="2">Perempuan</a-radio>
              </a-radio-group>
            </a-form-item>

            <a-form-item label="Nomor Identitas (KTP)">
              <a-input
                v-decorator="['ktp',{rules: [{required: true, message: 'Harus di isi!'}]}]"
                size="large"
              />
            </a-form-item>

            <a-form-item label="No. Handphone">
              <a-input
                v-decorator="['tlp',{rules: [{required: true, message: 'Harus di isi!'}]}]"
                size="large"
              />
            </a-form-item>

            <a-form-item label="Kontak Email">
              <a-input
                v-decorator="['email',{rules: [{
              type: 'email', message: 'The input is not valid E-mail!',
            }, {required: true, message: 'Harus di isi!'}]}]"
                size="large"
              />
            </a-form-item>

            <a-divider></a-divider>

            <a-form-item label="Apakah kamu memiliki perusahaan?">
              <a-radio-group name="jk" v-model="value">
                <a-radio value="Y">Ya</a-radio>
                <a-radio value="T">Tidak</a-radio>
              </a-radio-group>
            </a-form-item>

            <div v-if="value === 'Y'">
              <a-form-item label="Nama Perusahaan">
                <a-input
                  v-decorator="['company',{rules: [{required: true, message: 'Harus di isi!'}]}]"
                  size="large"
                />
              </a-form-item>

              <a-form-item label="Deskripsi Perusahaan">
                  <a-textarea v-decorator="['company',{rules: [{required: true, message: 'Harus di isi!'}]}]" :rows="4"/>
              </a-form-item>
            </div>

            <p>
              Dengan klik daftar, kamu telah menyetujui
              <nuxt-link to>Aturan Penggunaan</nuxt-link>dan
              <nuxt-link to>Kebijakan Privasi</nuxt-link>dari Haloatta
            </p>

            <a-form-item>
              <a-button
                size="large"
                type="primary"
                @click="handleSubmit"
                class="b-radius b-shadow"
                block
              >Daftar</a-button>
            </a-form-item>
          </a-form>
        </div>
      </a-col>
    </a-row>
  </div>
</template>
<script>
export default {
  name: "upgrade-accounts",
  layout: "application",
  transition: "slide-left",
  data() {
    return {
      value: []
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields(err => {
        if (!err) {
          console.info("success");
        }
      });
    }
  }
};
</script>