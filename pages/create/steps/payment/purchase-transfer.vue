<template>
  <a-layout class="ant-layout--payment" :style="{ maxWidth: '1200px', margin: '0 auto' }">
    <a-layout-sider :style="{ overflow: 'auto', height: '100vh', position: 'fixed'}" width="280">
      <a-card class="ant-card--steps-proggress" :bordered="false">
        <sider-steps :active="active" />
      </a-card>
    </a-layout-sider>
    <a-layout :style="{ marginLeft: '280px', padding: '24px' }">
      <a-layout-content class="ant-layout-content--payment-purchase" :style="{ paddingTop: '0' }">
        <a-list
          itemLayout="horizontal"
          class="ant-list--package-information"
          :style="{ marginTop: '-16px' }"
        >
          <a-list-item class="ant-list-item--package-information">
            <div class="w-100">
              <div class="ant-package--information-title fs-20 cr-black fw-500 mb-0">
                <span>Pembayaran</span>
              </div>
              <div class="ant-package--information-text fs-16 cr-gray fw-400">
                <span>Pilih metode pembayaran dan perhatikan petunjuk pembayaran sebelum melakukan proses pembayaran pesanan anda</span>
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
                  <a-radio-group defaultValue="saldo" v-model="choosePaymentMethod" size="large">
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

              <!-- Payment choose Transfer -->
              <div class="ant-list-item--package-invoice">
                <div class="w-100">
                  <a-card class="text-center">
                    <div class="ant-package--information-title fs-15 cr-black fw-500">
                      <span>Selesaikan Pembayaran Anda Sebelum</span>
                    </div>

                    <no-ssr>
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
                    </no-ssr>

                    <div class="ant-package--information-title fs-14 cr-gray fw-400">
                      Batas waktu pembayaran anda sebelum tanggal
                      <span class="cr-primary">
                        <span>30-12-2019</span>
                      </span>
                      <a-divider type="vertical" />
                      <span class="cr-primary">13:00</span>
                    </div>

                    <a-divider :style="{margin: '40px 0'}"></a-divider>
                    <div class="ant-package--information-title fs-15 cr-black fw-500">
                      <span>Rekening Tujuan Transfer</span>
                    </div>
                    <div class="ant-package--information-title fs-14 cr-gray fw-400">
                      <span>Anda dapat melakukan transfer dari layanan perbankan apapun (m-banking, SMS banking dan ATM)</span>
                    </div>

                    <a-row type="flex" justify="space-around" align="middle">
                      <a-col :span="24" class="mt-16">
                        <a-card>
                          <div class="d-flex align-items-center mb-8">
                            <div class="fs-15 fw-500">Bank Central Asia (BCA)</div>
                            <div class="ml-auto">
                              <img
                                :style="{maxWidth: '100%', height: '18px'}"
                                src="https://upload.wikimedia.org/wikipedia/id/thumb/e/e0/BCA_logo.svg/1280px-BCA_logo.svg.png"
                              />
                            </div>
                          </div>

                          <a-row type="flex" justify="space-around" align="bottom">
                            <a-col :span="22">
                              <dl class="ant-deflist ant-deflist--small">
                                <dt class="ant-deflist__label cr-black fw-400">Nomor Rekening</dt>
                                <dd class="ant-deflist__value text-ellipsis fw-400 cr-black">
                                  <span>085213247455</span>
                                </dd>
                                <dt class="ant-deflist__label cr-black fw-400">Nama Penerima</dt>
                                <dd class="ant-deflist__value text-ellipsis cr-black fw-400">
                                  <span>PT. ATTAUBAH TRAVEL AMANAH, KCP Ratulangi</span>
                                </dd>
                              </dl>
                            </a-col>
                            <a-col :span="2" class="text-right">
                              <a-button class="ant-btn--action-outline" size="small" block>Salin</a-button>
                            </a-col>
                          </a-row>
                        </a-card>
                      </a-col>

                      <a-col :span="24" class="mt-16">
                        <a-card>
                          <div class="d-flex align-items-center mb-8">
                            <div class="fs-15 fw-500">Bank Mandiri</div>
                            <div class="ml-auto">
                              <img
                                :style="{maxWidth: '100%', height: '18px'}"
                                src="https://upload.wikimedia.org/wikipedia/id/thumb/f/fa/Bank_Mandiri_logo.svg/1280px-Bank_Mandiri_logo.svg.png"
                              />
                            </div>
                          </div>

                          <a-row type="flex" justify="space-around" align="bottom">
                            <a-col :span="22">
                              <dl class="ant-deflist ant-deflist--small">
                                <dt class="ant-deflist__label cr-black fw-400">Nomor Rekening</dt>
                                <dd class="ant-deflist__value text-ellipsis fw-400 cr-black">
                                  <span>085213247455</span>
                                </dd>
                                <dt class="ant-deflist__label cr-black fw-400">Nama Penerima</dt>
                                <dd class="ant-deflist__value text-ellipsis cr-black fw-400">
                                  <span>PT. ATTAUBAH TRAVEL AMANAH, KCP Ratulangi</span>
                                </dd>
                              </dl>
                            </a-col>
                            <a-col :span="2" class="text-right">
                              <a-button class="ant-btn--action-outline" size="small" block>Salin</a-button>
                            </a-col>
                          </a-row>
                        </a-card>
                      </a-col>

                      <a-col :span="24" class="mt-16">
                        <a-card>
                          <div class="d-flex align-items-center mb-8">
                            <div class="fs-15 fw-500">Bank Negara Indonesia (BNI)</div>
                            <div class="ml-auto">
                              <img
                                :style="{maxWidth: '100%', height: '18px'}"
                                src="https://upload.wikimedia.org/wikipedia/id/thumb/5/55/BNI_logo.svg/1280px-BNI_logo.svg.png"
                              />
                            </div>
                          </div>

                          <a-row type="flex" justify="space-around" align="bottom">
                            <a-col :span="22">
                              <dl class="ant-deflist ant-deflist--small">
                                <dt class="ant-deflist__label cr-black fw-400">Nomor Rekening</dt>
                                <dd class="ant-deflist__value text-ellipsis fw-400 cr-black">
                                  <span>085213247455</span>
                                </dd>
                                <dt class="ant-deflist__label cr-black fw-400">Nama Penerima</dt>
                                <dd class="ant-deflist__value text-ellipsis cr-black fw-400">
                                  <span>PT. ATTAUBAH TRAVEL AMANAH, KCP Ratulangi</span>
                                </dd>
                              </dl>
                            </a-col>
                            <a-col :span="2" class="text-right">
                              <a-button class="ant-btn--action-outline" size="small" block>Salin</a-button>
                            </a-col>
                          </a-row>
                        </a-card>
                      </a-col>

                      <a-col :span="24" class="mt-16">
                        <a-card>
                          <div class="d-flex align-items-center mb-8">
                            <div class="fs-15 fw-500">Bank Rakyat Indonesia (BRI)</div>
                            <div class="ml-auto">
                              <img
                                :style="{maxWidth: '100%', height: '18px'}"
                                src="https://upload.wikimedia.org/wikipedia/commons/9/97/Logo_BRI.png"
                              />
                            </div>
                          </div>

                          <a-row type="flex" justify="space-around" align="bottom">
                            <a-col :span="22">
                              <dl class="ant-deflist ant-deflist--small">
                                <dt class="ant-deflist__label cr-black fw-400">Nomor Rekening</dt>
                                <dd class="ant-deflist__value text-ellipsis fw-400 cr-black">
                                  <span>085213247455</span>
                                </dd>
                                <dt class="ant-deflist__label cr-black fw-400">Nama Penerima</dt>
                                <dd class="ant-deflist__value text-ellipsis cr-black fw-400">
                                  <span>PT. ATTAUBAH TRAVEL AMANAH, KCP Ratulangi</span>
                                </dd>
                              </dl>
                            </a-col>
                            <a-col :span="2" class="text-right">
                              <a-button class="ant-btn--action-outline" size="small" block>Salin</a-button>
                            </a-col>
                          </a-row>
                        </a-card>
                      </a-col>
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
                      <a-radio value="lunas" class="fs-15 f-default cr-black fw-500">
                        <span>Pembayaran Lunas</span>
                      </a-radio>
                      <a-radio value="dp" class="fs-15 f-default cr-black fw-500">
                        <span>Pembayaran Down Payment (DP)</span>
                      </a-radio>
                    </a-radio-group>

                    <a-divider :style="{margin: '40px 0'}"></a-divider>

                    <div class="text-left" v-if="chosePayment === 'lunas'">
                      <a-form layout="vertical" hideRequiredMark>
                        <a-row type="flex" justify="space-around" align="middle">
                          <a-col :span="14">
                            <a-form-item label="Total Pesanan">
                              <a-input addonBefore="Rp." size="large" value="930.000.000" disabled></a-input>
                            </a-form-item>

                            <a-form-item label="Kode Unik">
                              <a-input size="large" value="731" disabled></a-input>
                            </a-form-item>

                            <a-form-item label="Total Bayar">
                              <a-input addonBefore="Rp." size="large" value="930.000.731" disabled>
                                <a-button
                                  slot="addonAfter"
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

                    <div class="text-left" v-if="chosePayment === 'dp'">
                      <a-form layout="vertical" hideRequiredMark>
                        <a-row type="flex" justify="space-around" align="middle">
                          <a-col :span="14">
                            <a-form-item label="Total Pesanan">
                              <a-input addonBefore="Rp. " size="large" value="930.000.000" disabled></a-input>
                            </a-form-item>

                            <a-form-item
                              label="Masukkan DP anda (min 30% dari total tagihan)"
                              help="Minimal DP anda Rp. 500.000.000"
                            >
                              <a-input
                                addonBefore="Rp. "
                                size="large"
                                v-model="priceDp"
                                :value="priceDp"
                              />
                            </a-form-item>

                            <a-form-item label="Kode Unik">
                              <a-input size="large" value="731" disabled></a-input>
                            </a-form-item>

                            <a-form-item label="Total Bayar">
                              <a-input addonBefore="Rp." size="large" value="500.000.731" disabled>
                                <a-button
                                  slot="addonAfter"
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
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import siderSteps from "~/pages/create/steps/sider.vue";
export default {
  layout: "application",
  name: "purchaseTransfer",
  head() {
    return {
      title: "Pembayaran ATM/Bank Transfer - Buat Paket Umrah | Haloatta"
    };
  },
  data() {
    return {
      active: 9,
      choosePaymentMethod: "transfer",
      chosePayment: "lunas",
      priceDp: "500.000.000"
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        } else {
          return;
        }
      });
    },
    onChange(e) {
      console.log(`checked = ${e.target.value}`);
    },
    nextPurchaseSaldo() {
      this.$router.push("/create/steps/payment/purchase-saldo");
    },
    nextPurchaseTransfer() {
      this.$router.push("/create/steps/payment/purchase-transfer");
    },
    nextPaymentConfirmation() {
      this.$router.push("/create/steps/payment/e-package-conf");
    }
  },
  components: {
    siderSteps
  }
};
</script>