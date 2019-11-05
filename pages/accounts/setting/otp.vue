<template>
  <div class="ant-layout--otp">
    <a-card :bordered="false" class="b-solid b-radius b-shadow text-center">
      <a-row type="flex" justify="space-around" align="middle" class="h-100">
        <a-col :xs="24" :sm="20" :md="16" :lg="12">
          <img class="md-logo" v-lazy="'/haloatta.png'" />
          <div class="fs-18 fw-500 cr-black f-default mb-8">Konfirmasi Kode Otentikasi</div>
          <a-form layout="vertical" :form="form" hideRequiredMark>
            <img class="md-illustration" v-lazy="'/icons/otp.png'" />
            <a-form-item>
              <VueOTPField :onFill="onFill" />
            </a-form-item>

            <a-button v-show="showButton" @click="handleCheck" type="primary">Konfirmasi</a-button>
            <p class="fs-14 cr-gray mt-16">Tidak menerima Kode? <a href="#" @click="resendOtp">Kirim Ulang</a></p>
          </a-form>
        </a-col>
      </a-row>
    </a-card>
  </div>
</template>
<script>
import axios from "axios";
import VueOTPField from "@/components/template/vOTPField.vue";
const Cookie = require("js-cookie");

export default {
  layout: "application",
  name: "eVerification",
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },

  head() {
    return {
      title: "Verifikasi - Haloatta"
    };
  },

  data() {
    return {
      showButton: false,
      otp_value : ''
    };
  },

  components: {
    VueOTPField
  },

  props: {
    msg: String,
    tipe : String
  },

  methods: {
    onFill(val) {
      val.isFieldsComplete
        ? (this.showButton = true)
        : (this.showButton = false);
      if (val.isFieldsComplete){
        this.otp_value = val.values;
      }
    },
    handleCheck() {
      this.form.validateFields((err, values) => {
        if (!err) {
          this.$emit('submitOtp',this.otp_value)
        }
      });
    },
    resendOtp(){
      const token = Cookie.get('auth');
      const config = {
        headers: {
          Authorization: "Bearer " + token
        }
      };
      axios
              .post(process.env.baseUrl + 'otp/createotp',{
                tipe : this.tipe
              },config)
              .then(() => {
                this.$message.success('Otp Berhasil Dikirim')
                this.otp = true;
              })
              .catch(() => {
                this.$message.success('Gagal Mengirim Otp')
              })
    }
  }
};
</script>
<style lang="scss">
.ant-layout--otp {
  & .ant-card {
    overflow: hidden;
    height: 100vh;
    & .ant-card-body {
      height: 100%;
      & .md-logo {
        max-width: 100%;
        max-height: 40px;
        display: block;
        margin: 0 auto;
        margin-bottom: 24px;
      }

      & .md-illustration {
        max-width: 100%;
        max-height: 200px;
        display: block;
        margin: 0 auto;
        padding: 32px 0;
      }
    }
  }
}
</style>