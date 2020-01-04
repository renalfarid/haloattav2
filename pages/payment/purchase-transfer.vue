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
                        <span>Pilih metode pembayaran dan petunjuk untuk melakukan proses pembayaran pesanan anda {{$store.state.auth.nama}}</span>
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
                                <span>{{item.limit_pembayaran}}</span>
                              </span>
                            </div>

                            <a-divider :style="{margin: '40px 0'}"></a-divider>
                            <div class="ant-package--information-title fs-15 cr-black fw-500">
                              <span>Rekening Tujuan Transfer</span>
                            </div>
                            <div class="ant-package--information-title fs-14 cr-gray fw-400">
                              <span>Anda dapat melakukan transfer dari layanan perbankan apapun (m-banking, SMS banking dan ATM)</span>
                            </div>
                            <a-row type="flex" justify="space-around" align="middle">
                              <a-list itemLayout="horizontal" :dataSource="item.bank">
                                <a-list-item
                                  slot="renderItem"
                                  slot-scope="item, index"
                                  :key="index"
                                >
                                  <a-col :span="24" class="mt-16">
                                    <a-card>
                                      <div class="d-flex align-items-center mb-8">
                                        <div class="fs-15 fw-500">{{item.namabank}}</div>
                                        <div class="ml-auto">
                                          <img
                                            :style="{maxWidth: '100%', height: '18px'}"
                                            :src="item.images"
                                          />
                                        </div>
                                      </div>

                                      <a-row type="flex" justify="space-around" align="bottom">
                                        <a-col :span="20">
                                          <dl class="ant-deflist ant-deflist--small">
                                            <dt
                                              class="ant-deflist__label cr-black fw-400"
                                            >Nomor Rekening</dt>
                                            <dd
                                              class="ant-deflist__value text-ellipsis fw-400 cr-black"
                                            >
                                              <span>{{item.norekening}}</span>
                                            </dd>
                                            <dt
                                              class="ant-deflist__label cr-black fw-400"
                                            >Nama Penerima</dt>
                                            <dd
                                              class="ant-deflist__value text-ellipsis cr-black fw-400"
                                            >
                                              <span>-/tidak ada</span>
                                            </dd>
                                          </dl>
                                        </a-col>
                                        <a-col :span="4" class="text-right">
                                          <a-button
                                            v-clipboard:copy="item.norekening"
                                            v-clipboard:success="onCopy"
                                            v-clipboard:error="onError"
                                            class="ant-btn--action-outline"
                                            size="small"
                                            block
                                          >Salin</a-button>
                                        </a-col>
                                      </a-row>
                                    </a-card>
                                  </a-col>
                                </a-list-item>
                              </a-list>
                            </a-row>

                            <a-divider :style="{margin: '40px 0'}"></a-divider>

                            <div class="ant-package--information-title fs-15 cr-gray fw-400">
                              <span>Bagaimana Anda Membayar Pesanan Anda</span>
                            </div>
                            <a-radio-group
                              defaultValue="lunas"
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
                              <a-form layout="vertical" hideRequiredMark>
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
                                      <a-input
                                        size="large"
                                        :value="price | currency"
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
                                        >Salin</a-button>
                                      </a-input>
                                    </a-form-item>
                                    <div class="ant-price--info fw-400 fs-12">
                                      <span class="p-relative" style="z-index: 2">
                                        <span>PENTING! Mohon bayar sampai 3 digit terakhir</span>
                                      </span>
                                      <div class="ant-price--info-overlay"></div>
                                    </div>
                                    <a-form-item>
                                      <div class="fs-13 cr-gray fw-400 mt-16 mb-16 f-default">
                                        <span>
                                          Dengan mengklik tombol lanjut, maka anda dianggap setuju dengan
                                          <nuxt-link
                                            to
                                          >syarat dan ketentuan, kebijakan pembatalan, kebijakan refund</nuxt-link>Halo Atta
                                        </span>
                                      </div>
                                    </a-form-item>
                                    <a-form-item>
                                      <a-button
                                        size="large"
                                        class="ant-btn--action"
                                        @click="nextPaymentConfirmation"
                                      >Bayar Dengan Transfer</a-button>
                                    </a-form-item>
                                  </a-col>
                                </a-row>
                              </a-form>
                            </div>

                            <div class="text-left" v-if="chosePayment === 'DP'">
                              <a-form layout="vertical" hideRequiredMark>
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
                                        :value="priceDp"
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
                                      <a-button
                                        size="large"
                                        class="ant-btn--action"
                                        @click="nextPaymentConfirmation"
                                      >
                                        <span>Bayar Dengan Transfer</span>
                                      </a-button>
                                    </a-form-item>
                                  </a-col>
                                </a-row>
                              </a-form>
                            </div>
                          </a-card>
                        </div>
                      </div>
                      <!-- End payment choose Transfer -->
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
import siderPayment from "@/pages/payment/sider.vue";
import axios from "axios";
const Cookie = process.client ? require("js-cookie") : undefined;
export default {
  layout: "application",
  name: "purchase",
  head() {
    return {
      title: "Haloatta - Booking Paket Umrah & Komponen Umrah Terlengkap"
    };
  },
  data() {
    return {
      choosePaymentMethod: "transfer",
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
    onChange(e) {
      console.log(`checked = ${e.target.value}`);
    },
    onChangePriceDp(value) {
      console.log(`${value + this.item.kode_unik}`);
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
          console.log(this.item, "ini item");
          console.log(this.minDP);
        });
    }
  },
  components: {
    siderPayment
  }
};
</script>
