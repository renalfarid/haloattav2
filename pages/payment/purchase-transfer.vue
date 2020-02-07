<template>
  <a-layout
    class="ant-layout--payment"
    :style="{ 'background-color': '#f7f7f7' }"
  >
    <a-layout-header class="ant-layout-header--payment">
      <div class="ant-logo">
        <nuxt-link to="/">
          <img src="/haloatta_white.png" />
        </nuxt-link>
      </div>
      <a-steps :current="1" size="small">
        <a-step title="Data Pemesan" />
        <a-step title="Pembayaran" />
        <a-step title="Konfirmasi" />
      </a-steps>
    </a-layout-header>

    <a-layout-content class="ant-layout-content--payment-purchase">
      <div class="container">
        <a-row :gutter="24">
          <a-col
            :xs="24"
            :sm="24"
            :md="24"
            :lg="8"
            class="sticky-top mb-24"
            :style="{ float: 'right' }"
          >
            <sider-detail-transaction />
          </a-col>

          <a-col :xs="24" :sm="24" :md="24" :lg="16" class="mb-24">

              <a-card class="b-solid b-radius text-center mb-24">
                <div
                  class="ant-package--information-title fs-15 cr-black fw-500"
                >
                  <span>Selesaikan Pembayaran Anda Sebelum</span>
                </div>

                <client-only>
                  <countdown
                    class="ant-countdown"
                    :time="2 * 24 * 60 * 60 * 1000"
                  >
                    <div
                      class="ant-countdown--item mt-16 mb-16"
                      slot-scope="props"
                    >
                      <span
                        class="ant-countdown--item-time fs-40 cr-black fw-400 f-default"
                        >{{ props.days }}</span
                      >
                      Hari
                      <a-divider type="vertical" />
                      <span
                        class="ant-countdown--item-time fs-40 cr-black fw-400 f-default"
                        >{{ props.hours }}</span
                      >
                      Jam
                      <a-divider type="vertical" />
                      <span
                        class="ant-countdown--item-time fs-40 cr-black fw-400 f-default"
                        >{{ props.minutes }}</span
                      >
                      Menit
                      <a-divider type="vertical" />
                      <span
                        class="ant-countdown--item-time fs-40 cr-red fw-400 f-default"
                        >{{ props.seconds }}</span
                      >
                      Detik
                    </div>
                  </countdown>
                </client-only>

                <div
                  class="ant-package--information-title fs-14 cr-gray fw-400"
                >
                  Batas waktu pembayaran anda sebelum tanggal
                  <span class="cr-primary ml-8">
                    <span>{{ item.limit_pembayaran }}</span>
                  </span>
                </div>
              </a-card>

            <h3 class="fw-600 cr-black mt-8 mb-0">Metode Pembayaran</h3>
            <p class="fs-14 fw-400 cr-black-opacity mb-16">
              Pilih Metode pembayaran ATM/Bank Transfer atau Saldo
            </p>
            <a-card class="b-solid b-radius mb-24">
              <div class="ant-package--information-bill mt-16 mb-16">
                <a-radio-group
                  defaultValue="saldo"
                  v-model="choosePaymentMethod"
                  size="large"
                >
                  <a-radio-button value="saldo" @click="nextPurchaseSaldo">
                    <a-icon class="fs-40 mb-8" type="wallet" />
                    <div class="fs-14 text-uppercase">
                      Saldo Halo Pay
                    </div>
                  </a-radio-button>
                  <a-radio-button
                    value="transfer"
                    @click="nextPurchaseTransfer"
                  >
                    <a-icon class="fs-40 mb-8" type="credit-card" />
                    <div class="fs-14 text-uppercase">
                      ATM/Bank Transfer
                    </div>
                  </a-radio-button>
                </a-radio-group>
              </div>
            </a-card>

            <!-- Add code voucher -->
            <!-- <a-card :style="{margin: '16px 0 24px 0'}">
                        <div class="ant-package--information-bill mt-16 mb-16">
                          <a-row :gutter="16">
                            <a-col :span="16">
                              <a-input
                                placeholder="Masukkan kode voucher anda jika ada"
                                size="large"
                              />
                            </a-col>
                            <a-col :span="8">
                              <a-button
                                type="primary"
                                class="b-shadow b-radius"
                                size="large"
                                block
                              >Gunakan</a-button>
                            </a-col>
                          </a-row>
                        </div>
                      </a-card>-->

            <!-- Payment choose Transfer -->

            <a-form layout="vertical" hideRequiredMark>
              <h3 class="fw-600 cr-black mt-8 mb-0">Tipe Pembayaran</h3>
              <p class="fs-14 fw-400 cr-black-opacity mb-16">
                Pilih tipe pembayaran Lunas atau Uang Muka (DP)
              </p>
              <a-card class="b-solid b-radius mb-16">
                <a-radio-group @change="onChange" v-model="chosePayment">
                  <a-radio value="PELUNASAN">
                    <span class="fs-16 cr-black">Lunas</span>
                  </a-radio>
                  <a-radio value="DP"><span class="fs-16 cr-black">Uang Muka (DP 30%)</span></a-radio>
                </a-radio-group>
              </a-card>

              <!-- <h3 class="fw-600 cr-black mt-8">Total Pembayaran</h3> -->
              <a-card class="b-solid b-radius mb-24">
                <a-form-item label="Subtotal">
                  <a-input
                    size="large"
                    :value="item.total_tagihan | currency"
                    disabled
                  ></a-input>
                </a-form-item>

                <a-form-item label="Kode Unik">
                  <a-input
                    size="large"
                    :value="item.kode_unik"
                    disabled
                  ></a-input>
                </a-form-item>

                <a-form-item label="Total Bayar">
                  <a-input
                    size="large"
                    :value="(price - item.kode_unik) | currency"
                    :style="{ 'text-align': 'left' }"
                    disabled
                  >
                    <a-button
                      slot="addonAfter"
                      v-clipboard:copy="price"
                      v-clipboard:success="onCopy"
                      v-clipboard:error="onError"
                      class="ant-btn--action-outline"
                      size="small"
                      block
                      >Salin</a-button
                    >
                  </a-input>
                </a-form-item>
                <div class="ant-price--info fw-400 fs-12">
                  <span class="p-relative" style="z-index: 2">
                    <span>PENTING! Mohon bayar sampai 3 digit terakhir</span>
                  </span>
                  <div class="ant-price--info-overlay"></div>
                </div>
              </a-card>

              <h3 class="fw-600 cr-black mt-8 mb-0">ATM/Bank Pembayaran</h3>
              <p class="fs-14 fw-400 cr-black-opacity mb-16">
                Bank Transfer (Verifikasi Manual)
              </p>
              <a-card class="b-solid b-radius md-card--bank mb-24">
                <a-radio-group
                  name="radioGroup"
                  v-model="paymentTypeBank"
                  class="md-radio--group-bank"
                >
                  <a-row>
                    <a-col :span="24">
                      <a-radio
                        :value="1"
                        class="fs-16 cr-black d-flex align-items-center"
                      >
                        <img
                          :src="require('~/static/icons/bank/mandiri.png')"
                          alt="MANDIRI"
                        />
                        MANDIRI
                      </a-radio>
                    </a-col>

                    <a-col :span="24">
                      <a-radio
                        :value="2"
                        class="fs-16 cr-black  d-flex align-items-center"
                      >
                        <img
                          :src="require('~/static/icons/bank/bri.png')"
                          alt="BRI"
                        />BRI</a-radio
                      >
                    </a-col>

                    <a-col :span="24">
                      <a-radio
                        :value="3"
                        class="fs-16 cr-black  d-flex align-items-center"
                      >
                        <img
                          :src="require('~/static/icons/bank/bca.png')"
                          alt="BCA"
                        />BCA</a-radio
                      >
                    </a-col>

                    <a-col :span="24">
                      <a-radio
                        :value="4"
                        class="fs-16 cr-black  d-flex align-items-center"
                      >
                        <img
                          :src="require('~/static/icons/bank/bni.png')"
                          alt="BNI"
                        />BNI</a-radio
                      >
                    </a-col>
                  </a-row>
                </a-radio-group>
              </a-card>

              <div class="text-right">
                <a-button
                  size="large"
                  class="ant-btn--action"
                  @click="nextPaymentConfirmation"
                  >Bayar Sekarang</a-button
                >
              </div>
            </a-form>
          </a-col>
        </a-row>
      </div>
    </a-layout-content>

    <a-layout-footer
      class="ant-layout-footer--payment"
      :style="{ 'background-color': '#f7f7f7', 'text-align': 'center' }"
    >
      <div class="container">
        2016 - {{ new Date().getFullYear() }} © PT. NUH Teknologi Solution
      </div>
    </a-layout-footer>
  </a-layout>
</template>
<script>
import SiderDetailTransaction from "@/components/Payment/Sider/DetailTransaction";
import axios from "axios";
const Cookie = process.client ? require("js-cookie") : undefined;
export default {
  layout: "application",
  name: "purchase",

  components: {
    SiderDetailTransaction
  },

  head() {
    return {
      title: "Haloatta - Booking Paket Umrah & Komponen Umrah Terlengkap"
    };
  },

  data() {
    return {
      choosePaymentMethod: "transfer",
      chosePayment: "PELUNASAN",
      paymentTypeBank: 1,
      price: 0,
      priceDp: 0,
      item: "",
      minDp: 0
    };
  },

  created: function() {
    this.getdata();
  },

  methods: {
    onChange(e) {
      // console.log(`checked = ${e.target.value}`);
    },
    onChangePriceDp(value) {
      this.priceDp = value + this.item.kode_unik;
    },
    nextPurchaseSaldo() {
      let params = this.$route.query;
      this.$router.push({
        path: "/payment/purchase-saldo",
        query: {
          notrans: params.notrans
        }
      });
    },
    nextPurchaseTransfer() {
      let params = this.$route.query;
      this.$router.push({
        path: "/payment/purchase-transfer",
        query: {
          notrans: params.notrans
        }
      });
    },
    nextPaymentConfirmation() {
      let params = this.$route.query;

      this.$router.push({
        path: "/payment/payment-confirmation",
        query: {
          notrans: params.notrans,
          metode: "TRANSFER",
          jenis: this.chosePayment,
          total: this.chosePayment == "PELUNASAN" ? this.price : this.priceDp
        }
      });
    },

    onCopy: function(e) {
      this.$message.success("Berhasil menyalin");
    },
    onError: function(e) {
      this.$message.success("Gagal menyalin");
    },
    async getdata() {
      let params = this.$route.query;

      const token = Cookie.get("auth");

      const config = {
        headers: {
          Authorization: "Bearer " + token
        }
      };

      axios
        .post(
          process.env.baseUrl + "transaksi/paymentdetail",
          {
            notrans: params.notrans
          },
          config
        )
        .then(response => {
          this.item = response.data.data;
          this.price = this.item.total_tagihan;
          this.priceDp = this.item.total_tagihan;
          this.minDP = (this.item.total_tagihan - this.item.kode_unik) * 0.3;
          // console.log(this.item, "ini item");
        });
    }
  }
};
</script>
