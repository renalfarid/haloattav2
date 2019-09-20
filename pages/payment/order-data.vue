<template>
  <a-layout class="ant-layout--payment">
    <a-layout-header class="ant-layout-header--payment">
      <div class="ant-logo">
        <nuxt-link to="/">
          <img src="/haloatta_white.png" />
        </nuxt-link>
      </div>
      <a-steps :current="0" size="small">
        <a-step title="Data Pemesan" />
        <a-step title="Pembayaran" />
        <a-step title="E-Paket Terbit" />
      </a-steps>
    </a-layout-header>
    <a-layout-content class="ant-layout-content--payment-order" :style="{ minHeight: '90vh' }">
      <div class="container">
        <a-row type="flex" justify="center">
          <a-col :span="20">
            <a-row :gutter="24">
              <a-col :span="16">
                <a-form
                  layout="vertical"
                  :form="form"
                  @submit="handleSubmitMore"
                  class="form-search--costume"
                  hideRequiredMark
                >
                  <a-card class="b-shadow b-radius mb-16">
                    <a-list itemLayout="horizontal" class="ant-list--package-information">
                      <a-list-item class="ant-list-item--package-information pt-0">
                        <div class="w-100">
                          <div class="ant-package--information-title fs-20 cr-black fw-500 mb-0">
                            <span>Isi Data Pemesan</span>
                          </div>
                          <div class="ant-package--information-text fs-15 cr-black fw-400">
                            <span>Isi data pesanan anda untuk melanjutkan proses berikutnya</span>
                          </div>
                        </div>
                      </a-list-item>

                      <a-list-item class="ant-list-item--package-information">
                        <div class="w-100">
                          <div class="d-flex align-items-center w-100">
                            <div>
                              <a-avatar
                                class="mr-16"
                                size="large"
                                style="backgroundColor:#87d068"
                                icon="user"
                              />
                            </div>
                            <div>
                              <div
                                class="fs-14 fw-400 cr-gray f-default"
                              >Anda masuk menggunakan akun anda</div>
                              <div
                                class="fs-16 fw-500 cr-black"
                              >Anda Login sebagai Jordi Alba Mustofa</div>
                            </div>
                          </div>
                        </div>
                      </a-list-item>

                      <a-list-item class="ant-list-item--package-information">
                        <div class="w-100">
                          <a-form-item
                            label="Nama Lengkap"
                            help="Sesuai KTP/paspor/SIM (tanpa tanda baca atau gelar)"
                            class="mb-16"
                            hasFeedback
                          >
                            <a-input v-decorator="['userName',{ rules: [{ required: true }]}]" />
                          </a-form-item>

                          <a-form-item
                            label="Nomor Handphone"
                            help="Contoh : No. Handphone 0812345678"
                            class="mb-16"
                            hasFeedback
                          >
                            <a-input v-decorator="['telp',{ rules: [{ required: true }]}]" />
                          </a-form-item>

                          <a-form-item
                            label="Alamat Email"
                            help="Contoh: email@contoh.com"
                            hasFeedback
                          >
                            <a-input v-decorator="['email',{ rules: [{ required: true }]}]" />
                          </a-form-item>
                        </div>
                      </a-list-item>
                    </a-list>
                  </a-card>

                  <a-card class="b-shadow b-radius mb-16">
                    <a-list>
                      <a-list-item class="ant-list-item--package-information">
                        <div class="w-100">
                          <div class="ant-package--information-title fs-16 cr-black fw-500">
                            <span>Data Jamaah</span>
                          </div>

                          <a-radio-group
                            class="mb-16 mt-8"
                            name="radioGroup"
                            :defaultValue="1"
                            @change="onChange"
                            v-model="value"
                          >
                            <a-radio :value="1" class="fs-15 cr-black">Isi Data Jamaah Sekarang</a-radio>
                            <a-radio :value="2" class="fs-15 cr-black">Isi Data Jamaah Nanti</a-radio>
                          </a-radio-group>

                          <div v-if="value === 1">
                            <a-form-item
                              label="Nama Lengkap"
                              help="Sesuai KTP/paspor/SIM (tanpa tanda baca atau gelar)"
                              class="mb-16"
                              hasFeedback
                            >
                              <a-input v-decorator="['ktpJamaah',{ rules: [{ required: true }]}]" />
                            </a-form-item>

                            <a-form-item
                              label="Nomor Handphone"
                              help="Contoh : No. Handphone 0812345678"
                              class="mb-16"
                              hasFeedback
                            >
                              <a-input v-decorator="['telpJamaah',{ rules: [{ required: true }]}]" />
                            </a-form-item>

                            <a-form-item
                              label="Alamat Email"
                              help="Contoh: email@contoh.com"
                              hasFeedback
                            >
                              <a-input v-decorator="['emailJamaah',{ rules: [{ required: true }]}]" />
                            </a-form-item>
                          </div>

                          <div v-else>
                            <a-alert :showIcon="false" message="Kami akan mengirimkan formulir pengisian data jamaah setelah anda menyelesaikan transkasi dengan status pembayaran telah di DP atau LUNAS" banner />
                          </div>
                        </div>
                      </a-list-item>
                    </a-list>
                  </a-card>

                  <a-card class="b-shadow b-radius mb-16">
                    <div class="ant-package--information-text fs-14 cr-gray fw-400">
                      <span>Dengan mengklik tombol lanjut, maka anda dianggap setuju dengan syarat dan ketentuan, kebijakan pembatalan, kebijakan refund Halo Atta</span>
                    </div>
                  </a-card>

                  <a-button size="large" type="primary" html-type="submit">
                    <span>Lanjut ke Pembayaran</span>
                  </a-button>
                </a-form>
              </a-col>
              <!-- card sider -->
              <a-col :span="8">
                <siderPayment />
              </a-col>
            </a-row>
          </a-col>
        </a-row>
      </div>
    </a-layout-content>
    <a-layout-footer class="ant-layout-footer--payment-order">
      <div class="container">
        <a-row type="flex" justify="center">
          <a-col :span="20">© 2016 - 2019 Haloatta Travel Technology</a-col>
        </a-row>
      </div>
    </a-layout-footer>
  </a-layout>
</template>
<script>
import siderPayment from "@/pages/payment/sider.vue";
export default {
  layout: "application",
  name: "orderData",
  head() {
    return {
      title: "Haloatta - Booking Paket Umrah & Komponen Umrah Terlengkap"
    };
  },
  data() {
    return {
      value: 1
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  methods: {
    onChange(e) {
      console.log("radio checked", e.target.value);
    },
    handleSubmitMore(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          return this.$router.push({ path: "/payment/purchase-saldo" });
        }
      });
    }
  },
  components: {
    siderPayment
  }
};
</script>
