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
            <a-row :gutter="32">
              <a-col :span="16">
                <a-list itemLayout="horizontal" class="ant-list--package-information">
                  <a-list-item class="ant-list-item--package-information">
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
                      <div
                        class="ant-package--information-title fs-16 cr-black fw-500 mb-8"
                      >Status Akun</div>
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
                          <div class="fs-16 fw-500 cr-black">Anda Login sebagai Jordi Alba Mustofa</div>
                        </div>
                      </div>
                    </div>
                  </a-list-item>

                  <a-list-item class="ant-list-item--package-information">
                    <div class="w-100">
                      <div class="ant-package--information-title fs-16 cr-black fw-500">
                        <span>Data Pemesan</span>
                      </div>

                      <a-radio-group
                        class="mb-16 mt-8"
                        name="radioGroup"
                        :defaultValue="1"
                        @change="onChange"
                        v-model="value"
                      >
                        <a-radio :value="1" class="fs-15 cr-black">Data pemesan sebagai akun anda</a-radio>
                        <a-radio :value="2" class="fs-15 cr-black">Data pemesan bukan akun anda</a-radio>
                      </a-radio-group>

                      <a-form
                        layout="vertical"
                        class="form-search--costume mt-16 mb-16"
                        v-if="value === 1"
                      >
                        <a-form-item
                          label="Nama Lengkap"
                          help="Sesuai KTP/paspor/SIM (tanpa tanda baca atau gelar)"
                          class="mb-16"
                        >
                          <a-input value="Jordi Alba Mustofa" disabled />
                        </a-form-item>

                        <a-form-item
                          label="Nomor Handphone"
                          help="Contoh : No. Handphone 0812345678"
                          class="mb-16"
                        >
                          <a-input value="085213247499" disabled />
                        </a-form-item>

                        <a-form-item label="Alamat Email" help="Contoh: email@contoh.com">
                          <a-input value="example@mail.com" disabled />
                        </a-form-item>

                        <a-button size="large" class="ant-btn--action-overlay" @click="nextPayment">
                          <span>Lanjut ke Pembayaran</span>
                        </a-button>
                      </a-form>
                      <!-- --------------------------------------------- -->
                      <a-form
                        layout="vertical"
                        :form="form"
                        @submit="handleSubmitMore"
                        class="form-search--costume mt-16 mb-16"
                        hideRequiredMark
                        v-else
                      >
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
                          <a-input v-decorator="['userName',{ rules: [{ required: true }]}]" />
                        </a-form-item>

                        <a-form-item
                          label="Alamat Email"
                          help="Contoh: email@contoh.com"
                          hasFeedback
                        >
                          <a-input v-decorator="['userName',{ rules: [{ required: true }]}]" />
                        </a-form-item>

                        <a-button size="large" html-type="submit" class="ant-btn--action-overlay">
                          <span>Lanjut ke Pembayaran</span>
                        </a-button>
                      </a-form>
                    </div>
                  </a-list-item>

                  <a-list-item class="ant-list-item--package-information">
                    <div class="w-100">
                      <div class="ant-package--information-title fs-16 cr-black fw-500 mb-0">
                        <span>Data Jamaah</span>
                      </div>
                      <div class="ant-package--information-text fs-15 cr-black fw-400">
                        <span>Kami akan mengirimkan formulir pengisian data jamaah setelah anda menyelesaikan transkasi dengan status pembayaran telah di DP atau LUNAS</span>
                      </div>
                    </div>
                  </a-list-item>

                  <a-list-item class="ant-list-item--package-information">
                    <div class="w-100">
                      <div class="ant-package--information-text fs-14 cr-gray fw-400">
                        <span>Dengan mengklik tombol lanjut, maka anda dianggap setuju dengan syarat dan ketentuan, kebijakan pembatalan, kebijakan refund Halo Atta</span>
                      </div>
                    </div>
                  </a-list-item>
                </a-list>
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
          console.log("Received values of form: ", values);
        } else {
          return this.$router.push({ path: "/payment/purchase-saldo" });
        }
      });
    },
    nextPayment() {
      this.$router.push({ path: "/payment/purchase-saldo" });
    }
  },
  components: {
    siderPayment
  }
};
</script>
