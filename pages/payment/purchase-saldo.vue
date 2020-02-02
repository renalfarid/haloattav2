<template>
  <a-layout class="ant-layout--payment">
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
    <a-layout-content class="ant-layout-content--payment-purchase" :style="{ minHeight: '90vh' }">
      <div class="container">
        <a-row type="flex" justify="center">
          <a-col :span="20">
            <a-row :gutter="32">
              <a-col :span="16">
                <a-list itemLayout="horizontal" class="ant-list--package-information">
                  <a-list-item class="ant-list-item--package-information">
                    <div class="w-100">
                      <div class="ant-package--information-title fs-20 cr-black fw-500 mb-0">
                        <span>Pembayaran</span>
                      </div>
                      <div class="ant-package--information-text fs-16 cr-gray fw-400">
                        <span>Pilih metode pembayaran dan petunjuk untuk melakukan proses pembayaran pesanan anda</span>
                      </div>
                    </div>
                  </a-list-item>

                  <a-list-item class="ant-list-item--package-information">
                    <div class="w-100">
                      <div class="ant-package--information-title fs-16 cr-black fw-500 mb-0">
                        <span>Bayar Menggunakan</span>
                      </div>
                      <div class="ant-package--information-text fs-14 cr-gray fw-400">
                        <span>Anda dapat melakukan pembayaran menggunakan Saldo Halo Pay atau ATM/Bank Transfer</span>
                      </div>

                      <a-card :style="{margin: '16px 0 24px 0'}">
                        <div class="ant-package--information-bill mt-16 mb-16">
                          <a-radio-group
                            defaultValue="saldo"
                            v-model="choosePaymentMethod"
                            size="large"
                          >
                            <a-radio-button value="saldo" @click="nextPurchaseSaldo">
                              <a-icon class="fs-40 mb-8" type="wallet" />
                              <div class="fs-14 text-uppercase">Saldo Halo Pay</div>
                            </a-radio-button>
                            <a-radio-button value="transfer" @click="nextPurchaseTransfer">
                              <a-icon class="fs-40 mb-8" type="credit-card" />
                              <div class="fs-14 text-uppercase">ATM/Bank Transfer</div>
                            </a-radio-button>
                          </a-radio-group>
                        </div>
                        <div class="ant-list-item--package-invoice">
                          <a-divider :style="{margin: '40px 0'}"></a-divider>
                          <a-form layout="vertical" hideRequiredMark>
                            <a-row :gutter="16" type="flex" justify="space-around" align="bottom">
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
                                    <nuxt-link to="/accounts/top-up">Top Up Saldo</nuxt-link>
                                  </a-button>
                                </a-form-item>
                              </a-col>
                            </a-row>
                          </a-form>
                          <ul class="m-0 pl-16">
                            <li
                              class="fs-13 cr-gray"
                            >Pastikan saldo anda mencukupi untuk melakukan transaksi pesanan anda</li>
                            <li
                              class="fs-13 cr-gray"
                            >Tambah saldo jika tidak mencukupi untuk melakukan transaksi pesanan anda</li>
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
                      <div class="ant-list-item--package-invoice">
                        <div class="w-100">
                          <a-card class="text-center">
                            <div class="ant-package--information-title fs-15 cr-black fw-500">
                              <span>Selesaikan Pembayaran Anda Sebelum</span>
                            </div>

                            <client-only>
                              <countdown class="ant-countdown" :time="2 * 24 * 60 * 60 * 1000">
                                <div class="ant-countdown--item mt-16 mb-16" slot-scope="props">
                                  <span
                                    class="ant-countdown--item-time fs-40 cr-black fw-400 f-default"
                                  >{{ props.days }}</span> Hari
                                  <a-divider type="vertical" />
                                  <span
                                    class="ant-countdown--item-time fs-40 cr-black fw-400 f-default"
                                  >{{ props.hours }}</span> jam
                                  <a-divider type="vertical" />
                                  <span
                                    class="ant-countdown--item-time fs-40 cr-black fw-400 f-default"
                                  >{{ props.minutes }}</span> menit
                                  <a-divider type="vertical" />
                                  <span
                                    class="ant-countdown--item-time fs-40 cr-red fw-400 f-default"
                                  >{{ props.seconds }}</span> detik
                                </div>
                              </countdown>
                            </client-only>

                            <div class="ant-package--information-title fs-14 cr-gray fw-400">
                              Batas waktu pembayaran anda sebelum tanggal
                              <span class="cr-primary">
                                <span>{{moment(item.limit_pembayaran).format("dddd, DD MMMM YYYY, h:mm:ss")}}</span>
                              </span>
                              <!-- <a-divider type="vertical" /> -->
                              <!-- <span class="cr-primary">13:00</span> -->
                            </div>

                            <a-divider :style="{margin: '40px 0'}"></a-divider>

                            <div class="ant-package--information-title fs-15 cr-gray fw-400">
                              <span>Bagaimana Anda Membayar Pesanan Anda</span>
                            </div>
                            <a-radio-group
                              defaultValue="PELUNASAN"
                              v-model="chosePayment"
                              @change="onChange"
                              name="radioGroup"
                              :style="{ margin: '16px 0 0 0'}"
                            >
                              <a-radio value="PELUNASAN" class="fs-15 f-default cr-black fw-500">
                                <span>Pembayaran Lunas</span>
                              </a-radio>
                              <a-radio value="DP" class="fs-15 f-default cr-black fw-500">
                                <span>Pembayaran Down Payment (DP)</span>
                              </a-radio>
                            </a-radio-group>

                            <a-divider :style="{margin: '40px 0'}"></a-divider>

                            <div class="text-left" v-if="chosePayment === 'PELUNASAN'">
                              <a-form
                                layout="vertical"
                                :form="form"
                                @submit="handleSubmit"
                                hideRequiredMark
                              >
                                <a-row type="flex" justify="space-around" align="middle">
                                  <a-col :span="14">
                                    <a-form-item label="Total Pesanan">
                                      <a-input
                                        size="large"
                                        :value="item.total_tagihan - item.kode_unik | currency"
                                        disabled
                                      ></a-input>
                                    </a-form-item>

                                    <a-form-item label="Kode Unik">
                                      <a-input size="large" :value="item.kode_unik" disabled></a-input>
                                    </a-form-item>

                                    <a-form-item label="Total Bayar">
                                      <a-input-number
                                        size="large"
                                        v-decorator="['bayar', {initialValue: priceDp}]"
                                        :formatter="value => `Rp ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.')"
                                        :parser="value => value.replace(/\Rp\s?|(.*)/g, '')"
                                        disabled
                                        class="w-100"
                                      >
                                        <a-button
                                          slot="addonAfter"
                                          v-clipboard:copy="price"
                                          v-clipboard:success="onCopy"
                                          v-clipboard:error="onError"
                                          class="ant-btn--action-outline"
                                          size="small"
                                          block
                                        >Salin</a-button>
                                      </a-input-number>
                                    </a-form-item>
                                    <div class="ant-price--info fw-400 fs-12">
                                      <span class="p-relative" style="z-index: 2">
                                        <span>PENTING! Mohon bayar sampai 3 digit terakhir</span>
                                      </span>
                                      <div class="ant-price--info-overlay"></div>
                                    </div>
                                    <a-form-item>
                                      <div class="fs-13 cr-gray fw-400 mt-16 mb-16 f-default">
                                        Dengan mengklik tombol lanjut, maka anda dianggap setuju dengan
                                        <nuxt-link
                                          to
                                        >syarat dan ketentuan, kebijakan pembatalan, kebijakan refund</nuxt-link>Halo Atta
                                      </div>
                                    </a-form-item>
                                    <a-form-item>
                                      <!-- <a-button
                                        size="large"
                                        class="ant-btn--action"
                                        @click="nextEpackageFailed"
                                      >Bayar Dengan Saldo</a-button>-->
                                      <a-button
                                        html-type="submit"
                                        size="large"
                                        class="ant-btn--action"
                                      >Bayar Dengan Saldo</a-button>
                                    </a-form-item>
                                  </a-col>
                                </a-row>
                              </a-form>
                            </div>

                            <div class="text-left" v-if="chosePayment === 'DP'">
                              <a-form
                                layout="vertical"
                                :form="form"
                                @submit="handleSubmit"
                                hideRequiredMark
                              >
                                <a-row type="flex" justify="space-around" align="middle">
                                  <a-col :span="14">
                                    <a-form-item label="Total Pesanan">
                                      <a-input-number
                                        size="large"
                                        :defaultValue="item.total_tagihan - item.kode_unik"
                                        :formatter="value => `Rp ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.')"
                                        :parser="value => value.replace(/\Rp\s?|(.*)/g, '')"
                                        disabled
                                        class="w-100"
                                      />
                                    </a-form-item>

                                    <a-form-item
                                      label="Masukkan DP anda (min 30% dari total tagihan)"
                                      :help="`Minimal Dp Anda Adalah ${((item.total_tagihan - item.kode_unik ) * 0.3)}`"
                                    >
                                      <a-input-number
                                        :min="(item.total_tagihan - item.kode_unik) * 0.3"
                                        :defaultValue="(item.total_tagihan - item.kode_unik)"
                                        :formatter="value => `Rp ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.')"
                                        :parser="value => value.replace(/\Rp\s?|(\.*)/g, '')"
                                        @change="onChangePriceDp"
                                        size="large"
                                        class="w-100"
                                      ></a-input-number>
                                    </a-form-item>

                                    <a-form-item label="Kode Unik">
                                      <a-input size="large" :value="item.kode_unik" disabled></a-input>
                                    </a-form-item>

                                    <a-form-item label="Total Bayar">
                                      <a-input-number
                                        size="large"
                                        v-decorator="['bayar', {initialValue: priceDp}]"
                                        :formatter="value => `Rp ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.')"
                                        :parser="value => value.replace(/\Rp\s?|(.*)/g, '')"
                                        disabled
                                        class="w-100"
                                      >
                                        <a-button
                                          slot="addonAfter"
                                          v-clipboard:copy="priceDp"
                                          v-clipboard:success="onCopy"
                                          v-clipboard:error="onError"
                                          class="ant-btn--action-outline"
                                          size="small"
                                          block
                                        >Salin</a-button>
                                      </a-input-number>
                                      <!-- </a-input> -->
                                    </a-form-item>

                                    <div class="ant-price--info fw-400 fs-12">
                                      <span class="p-relative" style="z-index: 2">
                                        <span>PENTING! Mohon bayar sampai 3 digit terakhir</span>
                                      </span>
                                      <div class="ant-price--info-overlay"></div>
                                    </div>
                                    <a-form-item>
                                      <div class="fs-13 cr-gray fw-400 mt-16 mb-16 f-default">
                                        <span>Dengan mengklik tombol lanjut, maka anda dianggap setuju dengan</span>
                                        <nuxt-link to>
                                          <span>syarat dan ketentuan, kebijakan pembatalan, kebijakan refund</span>
                                        </nuxt-link>
                                        <span>Halo Atta</span>
                                      </div>
                                    </a-form-item>
                                    <a-form-item>
                                      <!-- <a-button
                                        size="large"
                                        class="ant-btn--action"
                                        @click="nextEpackagePaidOff"
                                      >
                                        <span>Bayar Dengan Saldo</span>
                                      </a-button>-->
                                      <a-button
                                        html-type="submit"
                                        size="large"
                                        class="ant-btn--action"
                                      >Bayar Dengan Saldo</a-button>
                                    </a-form-item>
                                  </a-col>
                                </a-row>
                              </a-form>
                            </div>
                          </a-card>
                        </div>
                      </div>
                      <!-- End payment choose Deposit -->
                    </div>
                  </a-list-item>
                </a-list>
              </a-col>
              <!-- card sider -->
              <a-col :span="8">
                <siderPayment :total="price" />
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
import axios from "axios";
const Cookie = process.client ? require("js-cookie") : undefined;
import siderPayment from "@/pages/payment/sider.vue";
import moment from "moment";
export default {
  layout: "application",
  name: "purchase",
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
                  path: '/accounts/transaction/purchase'
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
  },
  components: {
    siderPayment
  }
};
</script>
