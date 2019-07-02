<template>
  <a-layout class="ant-layout--payment">
    <a-layout-header class="ant-layout-header--payment">
      <div class="ant-logo">
        <img src="/haloatta_white.png" />
      </div>
      <a-steps :current="0" size="small">
        <a-step title="Data Pemesan" />
        <a-step title="Pembayaran" />
        <a-step title="E-Paket Terbit" />
      </a-steps>
    </a-layout-header>
    <a-layout-content class="ant-layout-content--payment-order" :style="{ minHeight: '90vh' }">
      <div class="container">
        <a-row :gutter="30">
          <a-col :span="17">
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
                  <div class="ant-package--information-title fs-16 cr-black fw-500 mb-8">Status Akun</div>
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
                      <div class="fs-14 fw-400 cr-gray f-default">Anda masuk menggunakan akun anda</div>
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
                    class="mb-16 mt-16"
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

                    <a-button size="large" class="ant-btn--action-overlay">
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
                      <a-input
                        v-decorator="['userName',{ rules: [{ required: true }]}]"
                      />
                    </a-form-item>

                    <a-form-item
                      label="Nomor Handphone"
                      help="Contoh : No. Handphone 0812345678"
                      class="mb-16"
                      hasFeedback
                    >
                      <a-input v-decorator="['userName',{ rules: [{ required: true }]}]" />
                    </a-form-item>

                    <a-form-item label="Alamat Email" help="Contoh: email@contoh.com" hasFeedback>
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
          <a-col :span="7">
            <a-card class="ant-card--payment-sider">
              <div class="p-16">
                <div class="ant-package--title fs-12 fw-400 text-uppercase cr-gray">Nomor Pesanan</div>
                <div class="ant-package--subtitle fs-15 fw-500 cr-black">HT099000990987</div>
              </div>
              <a-divider :style="{margin: '0'}" />
              <!-- ----------------------------------- -->
              <div class="p-16">
                <div class="ant-package--title fs-12 fw-400 text-uppercase cr-gray">Total Pembayaran</div>
                <div class="ant-package--subtitle fs-22 fw-500 cr-black">Rp930.000.000</div>
              </div>
              <!-- ----------------------------------- -->
              <a-divider :style="{margin: '0'}" />
              <div class="p-16">
                <div class="ant-package--title fs-12 fw-400 text-uppercase cr-gray">Informasi Paket</div>
                <div class="ant-package--subtitle fs-15 fw-500 cr-black">
                  <span>Umrah Exclusive Rombongan September 2020</span>
                </div>
                <div class="ant-package--rate">
                  <a-rate class="fs-14 m-0 f-default" :defaultValue="3" disabled />
                  <span class="ant-rate-text fs-12">(Hotel setaraf bintang 3)</span>
                </div>
                <a-divider :style="{margin: '10px 0'}" />
                <div class="ant-package--title fs-12 fw-400 text-uppercase cr-gray">
                  <span>Program & Jumlah Pax</span>
                </div>
                <div class="ant-package--subtitle fs-15 fw-500 cr-black">
                  Program 9 Hari
                  <a-divider type="vertical" />40 pax
                </div>
              </div>
              <!-- ----------------------------------- -->
              <a-divider :style="{margin: '0'}" />
              <div class="p-16">
                <div class="ant-package--title fs-12 fw-400 text-uppercase cr-gray mb-8">
                  <span>Informasi Tiket</span>
                </div>
                <div class="d-flex align-items-center">
                  <div class="mr-8">
                    <a-avatar
                      src="https://www.goto-hotel.com/wp-content/uploads/lion-parcel-logo.png"
                    />
                  </div>
                  <div>
                    <div class="ant-package--subtitle fs-15 fw-500 cr-black f-default">Lion Air</div>
                    <div class="ant-package--subtitle fs-14 fw-400 cr-black f-default">Economy Class</div>
                  </div>
                  <div class="ml-auto">
                    <div class="ant-package--subtitle fs-14 fw-500 cr-black f-default">JT-778</div>
                  </div>
                </div>
                <a-timeline :style="{margin: '24px 0 0 0'}">
                  <a-timeline-item>
                    <div class="ant-package--subtitle fs-14 fw-400 f-default cr-black">Berangkat</div>
                    <div class="ant-package--subtitle fs-14 fw-400 f-default cr-gray">
                      <span>Rabu, 10 September 2019</span>
                    </div>
                  </a-timeline-item>
                  <a-timeline-item>
                    <a-icon slot="dot" type="undo" style="fontSize: '15px'" />
                    <div class="d-flex align-items-center">
                      <div>
                        <div class="ant-package--subtitle fs-14 fw-400 cr-black f-default">
                          <span>Round Trip</span>
                        </div>
                        <div class="ant-package--subtitle fs-14 fw-400 cr-gray f-default">
                          <span>Pulang Pergi</span>
                        </div>
                      </div>
                      <div class="ml-auto text-right">
                        <div class="ant-package--subtitle fs-14 fw-400 cr-black f-default">
                          <span>Direct Flight</span>
                        </div>
                        <div class="ant-package--subtitle fs-14 fw-400 cr-gray f-default">
                          <span>Langsung</span>
                        </div>
                      </div>
                    </div>
                  </a-timeline-item>
                  <a-timeline-item :style="{paddingBottom: '0'}">
                    <div class="ant-package--subtitle fs-14 fw-400 f-default cr-black">Pulang</div>
                    <div class="ant-package--subtitle fs-14 fw-400 f-default cr-gray">
                      <span>Kamis, 19 September 2019</span>
                    </div>
                  </a-timeline-item>
                </a-timeline>
                <a-divider :style="{margin: '10px 0'}" />
                <div class="ant-package--title fs-12 fw-400 text-uppercase cr-gray">
                  <span>Informasi Tiket Pax</span>
                </div>
                <div class="d-flex align-items-center">
                  <div class="ant-package--subtitle fs-15 fw-400 cr-black">Dewasa</div>
                  <div class="ant-package--subtitle fs-15 fw-400 cr-black ml-auto">30 pax</div>
                </div>
                <div class="d-flex align-items-center">
                  <div class="ant-package--subtitle fs-15 fw-400 cr-black">Anak</div>
                  <div class="ant-package--subtitle fs-15 fw-400 cr-black ml-auto">10 pax</div>
                </div>
              </div>
              <!-- ----------------------------------- -->
              <a-divider :style="{margin: '0'}" />
              <div class="p-16">
                <div class="ant-package--title fs-12 fw-400 text-uppercase cr-gray mb-8">
                  <span>Informasi LA Akomodasi</span>
                </div>
                <div class="d-flex align-items-center">
                  <div class="mr-8">
                    <a-avatar
                      src="https://communicateonline.me/lvt/wp-content/uploads/2016/10/Logo-Mo%CC%88venpick.png"
                    />
                  </div>
                  <div>
                    <div class="ant-package--subtitle fs-15 fw-500 cr-black f-default">
                      <span>Movenpick Hotels & Resorts</span>
                    </div>
                  </div>
                </div>
                <a-timeline :style="{margin: '24px 0 0 0'}">
                  <a-timeline-item>
                    <div class="ant-package--subtitle fs-14 fw-400 f-default cr-black">Check In</div>
                    <div class="ant-package--subtitle fs-14 fw-400 f-default cr-gray">
                      <span>Rabu, 10 September 2019</span>
                    </div>
                  </a-timeline-item>
                  <a-timeline-item>
                    <a-icon slot="dot" type="schedule" style="fontSize: '15px'" />
                    <div class="ant-package--subtitle fs-14 fw-400 f-default cr-gray">
                      <span>3 Hari Mekkah Rayyana Ajyad</span>
                    </div>
                    <div class="ant-package--subtitle fs-14 fw-400 f-default cr-gray">
                      <span>4 Hari Madinah Pinewood Hotel</span>
                    </div>
                  </a-timeline-item>
                  <a-timeline-item :style="{paddingBottom: '0'}">
                    <div class="ant-package--subtitle fs-14 fw-400 f-default cr-black">Check Out</div>
                    <div class="ant-package--subtitle fs-14 fw-400 f-default cr-gray">
                      <span>Kamis, 19 September 2019</span>
                    </div>
                  </a-timeline-item>
                </a-timeline>
                <a-divider :style="{margin: '10px 0'}" />
                <div class="ant-package--title fs-12 fw-400 text-uppercase cr-gray">
                  <span>Informasi Room Pax</span>
                </div>
                <div class="d-flex align-items-center">
                  <div class="ant-package--subtitle fs-15 fw-400 cr-black">Quad</div>
                  <div class="ant-package--subtitle fs-15 fw-400 cr-black ml-auto">30 pax</div>
                </div>
                <div class="d-flex align-items-center">
                  <div class="ant-package--subtitle fs-15 fw-400 cr-black">Triple</div>
                  <div class="ant-package--subtitle fs-15 fw-400 cr-black ml-auto">10 pax</div>
                </div>
              </div>
              <!-- ----------------------------------- -->
              <a-divider :style="{margin: '0'}" />
              <div class="p-16">
                <div class="ant-package--title fs-12 fw-400 text-uppercase cr-gray">
                  <span>Informasi Kelengkapan</span>
                </div>
                <div
                  class="ant-package--subtitle fs-14 fw-400 cr-black"
                >Termasuk Visa, Asuransi, Handling Domestik, Manasik Pemantapan, Perlengkapan Umrah, Tour Leader</div>
              </div>
            </a-card>
          </a-col>
        </a-row>
      </div>
    </a-layout-content>
    <a-layout-footer class="ant-layout-footer--payment-order">
      <div class="container">© 2016 - 2019 Haloatta Travel Technology</div>
    </a-layout-footer>
  </a-layout>
</template>
<script>
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
        }
      });
    }
  }
};
</script>
