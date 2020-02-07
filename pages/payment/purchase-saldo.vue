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
        <a-step title="E-Paket Terbit" />
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
            <h3 class="fw-600 cr-black mt-8 mb-0">Metode Pembayaran</h3>
            <p class="fs-14 fw-400 cr-black-opacity mb-16">
              Pilih Metode pembayaran ATM/Bank Transfer atau Saldo
            </p>

            <a-card class="b-radius b-solid mb-24">
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

              <div class="ant-list-item--package-invoice">
                <a-divider :style="{ margin: '40px 0' }"></a-divider>
                <a-form layout="vertical" hideRequiredMark>
                  <a-row
                    :gutter="16"
                    type="flex"
                    justify="space-around"
                    align="bottom"
                  >
                    <a-col :span="16">
                      <a-form-item label="Jumlah Saldo Anda">
                        <a-input
                          size="large"
                          :value="this.$store.state.auth.saldo | currency"
                          disabled
                        ></a-input>
                      </a-form-item>
                    </a-col>
                    <a-col :span="8">
                      <a-form-item>
                        <a-button
                          class="ant-btn--action-outline b-shadow b-radius"
                          size="large"
                          block
                        >
                          <nuxt-link to="/accounts/top-up"
                            >Top Up Saldo</nuxt-link
                          >
                        </a-button>
                      </a-form-item>
                    </a-col>
                  </a-row>
                </a-form>
                <ul class="m-0 pl-16">
                  <li class="fs-13 cr-gray">
                    Pastikan saldo anda mencukupi untuk melakukan transaksi
                    pesanan anda
                  </li>
                  <li class="fs-13 cr-gray">
                    Tambah saldo jika tidak mencukupi untuk melakukan transaksi
                    pesanan anda
                  </li>
                </ul>
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

            <!-- Payment choose Deposit -->

            <a-form layout="vertical" hideRequiredMark>
              <h3 class="fw-600 cr-black mt-8">Total Pembayaran</h3>
              <a-card class="b-radius b-solid mb-24">
                <a-form-item label="Subtotal">
                  <a-input
                    size="large"
                    :value="(item.total_tagihan - item.kode_unik) | currency"
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
                    :value="price | currency"
                    :style="{ 'text-align': 'left' }"
                    disabled
                  />
                </a-form-item>
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
      :style="{ 'background-color': '#f7f7f7','text-align':'center' }"
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
import moment from "moment";
export default {
  layout: "application",
  name: "purchase",
  components: { SiderDetailTransaction },

  head() {
    return {
      title: "Haloatta - Booking Paket Umrah & Komponen Umrah Terlengkap"
    };
  },

  beforeCreate() {
    this.form = this.$form.createForm(this);
  },

  data() {
    return {
      choosePaymentMethod: "saldo",
      chosePayment: "PELUNASAN",
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
    moment,
    onChange(e) {
      console.log(`checked = ${e.target.value}`);
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
    nextEpackagePaidOff() {
      this.$router.push("/payment/ePackage-Dp");
    },
    nextEpackageFailed() {
      this.$router.push("/payment/ePackage-failed");
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
        });
    },
    handleSubmit(e) {
      console.log("click");

      e.preventDefault();
      let params = this.$route.query;
      this.form.validateFields((err, values) => {
        if (!err) {
          this.formValues = {
            nomor_transaksi: params.notrans,
            metode_pembayaran: "SALDO",
            jenis_pembayaran: this.chosePayment,
            bayar: values.bayar,
            otp_code: ""
          };

          const token = Cookie.get("auth");
          const config = {
            headers: {
              Authorization: "Bearer " + token
            }
          };

          const new_value = this.formValues;
          console.log(new_value);

          axios
            .post(
              process.env.baseUrl + "transaksi/pembayaran",
              new_value,
              config
            )
            .then(response => {
              if (response.data.status == 200) {
                this.form.resetFields();
                this.$message.success(response.data.msg);
                this.$emit("saved", true);
                this.$router.push({
                  path: "/accounts/transaction/purchase"
                });
              } else {
                this.$message.error(response.data.msg);
              }
            })
            .catch(() => {
              this.$message.error("Ada kesalahan");
              console.log(this.formValues, "salah");
            });
        }
      });
    }
  }
};
</script>
