<template>
  <div class="ant-invoice">
    <a-card :loading="loading" :bordered="false" class="b-radius b-shadow b-solid mb-16">
      <span slot="title" class="fs-16 fw-500 cr-black">
        <!-- if status tagihan 'menunggu pembayaran' -->
        <a-avatar size="small" style="backgroundColor: #FF7C0A" class="mr-8" icon="clock-circle" />Menunggu Pembayaran
      </span>
      <span slot="title" class="fs-16 fw-500 cr-black d-none">
        <!-- if status tagihan 'kedaluwarsa' -->
        <a-avatar size="small" style="backgroundColor: #F43662" class="mr-8" icon="close" />Batas Waktu Habis
      </span>
      <!-- if status tagihan 'berhasil' -->
      <span slot="title" class="fs-16 fw-500 cr-black d-none">
        <a-avatar size="small" style="backgroundColor: #52c41a" class="mr-8" icon="check" />Pembelian Berhasil
      </span>
      <div
        v-if="!loading"
        slot="extra"
        class="fw-500 fs-16 cr-black"
      >No. Transaksi: {{this.$route.query.notrans}}</div>
      <a-steps :current="1">
        <a-step>
          <template slot="title">Pesanan</template>
          <span slot="description" class="fs-13">{{ tagihan.tgltrans }}</span>
        </a-step>
        <a-step>
          <template slot="title">Pembayaran</template>
          <span slot="description" class="fs-13 d-none">
            <div>(Rp500.000.000)</div>
            <div>29-08-2019 11:50</div>
          </span>
        </a-step>
        <a-step>
          <template slot="title">Verifikasi</template>
          <span slot="description" class="fs-13 d-none">30-08-2019 11:50</span>
        </a-step>
        <a-step>
          <template slot="title">Berhasil</template>
        </a-step>
      </a-steps>
    </a-card>

    <a-card :bordered="false" class="ant-invoice--card b-shadow b-radius b-solid mb-16">
      <div class="ant-card-body-item">
        <a-row :gutter="16" type="flex" justify="space-around" align="middle">
          <a-col :span="12">
            <img class="logo" src="/haloatta.png" />
          </a-col>
          <a-col :span="12">
            <div class="text-right mb-16">
              <div class="fs-15 fw-500 cr-gray text-uppercase">PT. Nuh Digital Technology</div>
              <div class="fs-14 fw-400 cr-gray">Jl. Pengayoman, Masale, Kec. Panakkukang</div>
              <div class="fs-14 fw-400 cr-gray">Kota Makassar, Sulawesi Selatan</div>
              <div class="fs-14 fw-400 cr-gray">Kode Pos 90231</div>
            </div>
            <div class="text-right">
              <div class="fs-14 fw-400 cr-gray">Email : haloinfo@gmail.com</div>
              <div class="fs-14 fw-400 cr-gray">Telp: 022 456 789</div>
            </div>
          </a-col>
        </a-row>

        <div style="display:block;margin: 48px 0"></div>

        <div class="d-flex align-items-center mb-16">
          <div>
            <div class="fs-18 fw-500 cr-black">Ditagihkan Kepada:</div>
          </div>
          <div class="ml-auto">
            <div class="fs-40 fw-500 cr-black">Invoice</div>
          </div>
        </div>

        <a-row :gutter="16">
          <a-col :span="12">
            <div class="text-left mb-16">
              <div class="fs-15 fw-500 cr-black">{{pemesan.nama_depan +' '+pemesan.nama_belakang}}</div>
              <div class="fs-14 fw-400 cr-gray">Jl. Pengayoman, Masale, Kec. Panakkukang (?)</div>
              <div class="fs-14 fw-400 cr-gray">Kota Makassar, Sulawesi Selatan (?)</div>
              <div class="fs-14 fw-400 cr-gray">Kode Pos 90231(?)</div>
            </div>
            <div class="text-left">
              <div class="fs-14 fw-400 cr-gray">Email : {{pemesan.email}}</div>
              <div class="fs-14 fw-400 cr-gray">Telp: {{pemesan.telepon}}</div>
            </div>
          </a-col>
          <a-col :span="12">
            <div class="text-right">
              <div class="mb-16">
                <div class="fs-14 fw-500 cr-black">Nomor Invoice</div>
                <div class="fs-14 fw-400 cr-gray">{{this.$route.query.notrans}}</div>
              </div>

              <div class="mb-16">
                <div class="fs-14 fw-500 cr-black">Tanggal Pembelian</div>
                <div class="fs-14 fw-400 cr-gray">{{ tagihan.tgltrans }}</div>
              </div>
            </div>
          </a-col>
        </a-row>
      </div>

      <!-- if method payment ATM/Bank Transfer -->
      <div class="ant-card-body-item" style="backgroundColor: #fafafa">
        <div class="fs-18 fw-500 cr-black">Bank Tujuan Transfer :</div>
        <div class="fs-14 fw-400 cr-gray mb-16">
          <span>Anda dapat melakukan transfer dari layanan perbankan apapun (m-banking, SMS banking dan ATM)</span>
        </div>
        <a-row :gutter="16" type="flex" justify="space-around" align="middle">
          <a-col :span="12" v-for="databank in bank" :key="databank.id">
            <a-card class="b-radius b-solid p-24">
              <div class="d-flex align-items-center mb-8">
                <div class="fs-15 fw-500">{{databank.namabank}} ({{databank.aliasbank}})</div>
                <div class="ml-auto">
                  <img
                    :style="{ maxWidth: '100%', height: '18px' }"
                    :src="databank.images || 'https://theme.hstatic.net/1000253446/1000470009/14/no-image.jpg?v=843'"
                  />
                </div>
              </div>

              <a-row type="flex" justify="space-around" align="bottom">
                <a-col :span="24">
                  <dl class="ant-deflist ant-deflist--small">
                    <dt class="ant-deflist__label cr-black fw-400">Nomor Rekening</dt>
                    <dd class="ant-deflist__value text-ellipsis fw-400 cr-black">
                      <span>{{databank.norekening}}</span>
                    </dd>
                    <dt class="ant-deflist__label cr-black fw-400">Nama Penerima</dt>
                    <dd class="ant-deflist__value text-ellipsis cr-black fw-400">
                      <span>PT. ATTAUBAH TRAVEL AMANAH, KCP Ratulangi</span>
                    </dd>
                  </dl>
                </a-col>
              </a-row>
            </a-card>
          </a-col>
        </a-row>

        <div class="d-block mt-16"></div>

        <!-- <a-row :gutter="16" type="flex" justify="space-around" align="middle">
          <a-col :span="12">
            <a-card class="b-radius b-solid p-24">
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
                <a-col :span="24">
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
              </a-row>
            </a-card>
          </a-col>

          <a-col :span="12">
            <a-card class="b-radius b-solid p-24">
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
                <a-col :span="24">
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
              </a-row>
            </a-card>
          </a-col>
        </a-row>-->
      </div>
      <!-- end -->

      <div class="ant-card-body-item">
        <div class="fs-18 fw-500 cr-black mb-16">Daftar Pembelian :</div>

        <a-row :gutter="16">
          <a-col :span="9">
            <div class="fs-14 fw-500 cr-gray text-uppercase">Detail Pembelian</div>
          </a-col>
          <a-col :span="6">
            <div class="fs-14 fw-500 cr-gray text-uppercase">Jumlah Pax</div>
          </a-col>
          <a-col :span="3">
            <div class="fs-14 fw-500 cr-gray text-uppercase">Harga Satuan</div>
          </a-col>
          <a-col :span="6" class="text-right">
            <div class="fs-14 fw-500 cr-gray text-uppercase">Total Harga</div>
          </a-col>
        </a-row>

        <a-divider></a-divider>

        <a-row :gutter="16" v-for="order in listOrder" :key="order.kdproduk">
          <a-col :span="9">
            <div class="fs-14 fw-500 cr-black f-default text-ellipsis">{{order.nama}}</div>
            <div class="fs-14 fw-400 cr-black">{{ tagihan.tgl_berangkat }}</div>
          </a-col>

          <a-col :span="3">
            <div class="fs-14 fw-500 cr-black">{{order.jmh_satuan}}</div>
          </a-col>
          <a-col :span="6" class="text-right">
            <div class="fs-14 fw-500 cr-black">{{order.hargajual_satuan | currency}}</div>
          </a-col>
          <a-col :span="6" class="text-right">
            <div
              class="fs-14 fw-500 cr-black"
            >{{order.jmh_satuan * order.hargajual_satuan | currency}}</div>
          </a-col>
        </a-row>

        <a-divider></a-divider>

        <a-row :gutter="16" type="flex" justify="end">
          <a-col :span="9">
            <a-row :gutter="16">
              <a-col :span="12">
                <div class="fs-14 fw-500 cr-gray text-uppercase">Subtotal</div>
              </a-col>
              <a-col :span="12" class="text-right">
                <div class="fs-14 fw-500 cr-black">{{tagihan.hargajual | currency}}</div>
              </a-col>
            </a-row>

            <a-divider></a-divider>
            <a-row :gutter="16">
              <a-col :span="12">
                <div class="fs-14 fw-500 cr-gray text-uppercase">Total</div>
              </a-col>
              <a-col :span="12" class="text-right">
                <div class="fs-14 fw-500 cr-black">{{tagihan.hargajual | currency}}</div>
              </a-col>
            </a-row>
            <a-divider></a-divider>
            <a-row :gutter="16">
              <a-col :span="12">
                <div class="fs-14 fw-500 cr-gray text-uppercase">DP</div>
              </a-col>
              <a-col :span="12" class="text-right">
                <div class="fs-14 fw-500 cr-black">{{tagihan.totalbayar | currency}}</div>
              </a-col>
            </a-row>
            <a-divider></a-divider>
            <a-row :gutter="16" type="flex" justify="space-around" align="middle">
              <a-col :span="12">
                <div class="fs-14 fw-500 cr-black text-uppercase">Sisa Pembayaran</div>
              </a-col>
              <a-col :span="12" class="text-right">
                <div class="fs-18 fw-500 cr-primary">{{tagihan.sisabayar | currency}}</div>
              </a-col>
            </a-row>
          </a-col>
        </a-row>
      </div>

      <div class="ant-card-body-item">
        <div class="fs-16 fw-500 cr-black">Apakah Anda Sudah Melakukan Pembayaran?</div>
        <div class="fs-14 fw-400 cr-gray mb-16">
          Setelah melakukan pembayaran, mohon konfirmasi pembayaran Anda untuk mempercepat
          proses Verifikasi.
        </div>
        <div>
          <a-button size="large" class="fs-15 fw-500 b-shadow b-radius f-default mr-8">
            <nuxt-link to="/accounts/transaction/purchase" class="f-default">Kembali</nuxt-link>
          </a-button>
          <a-button type="primary" size="large" class="fs-15 fw-500 b-shadow b-radius f-default">
            <nuxt-link
              :to="
                        '/payment/purchase-transfer?notrans=' + this.$route.query.notrans
                      "
              class="f-default"
            >Ya, Saya Sudah Bayar</nuxt-link>
          </a-button>
        </div>
      </div>
    </a-card>
  </div>
</template>
<script>
import moment from "moment";
import axios from "axios";
const Cookie = process.client ? require("js-cookie") : undefined;

export default {
  middleware: "authenticated",
  layout: "accounts",
  name: "invoice",
  head() {
    return {
      title: "Faktur Pembelian - Haloatta"
    };
  },
  data() {
    return {
      loading: true,
      pemesan: "",
      listOrder: "",
      tagihan: "",
      bank: ""
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  },
  created: function() {
    this.getdata();
  },
  methods: {
    moment,
    async getdata() {
      const token = Cookie.get("auth");
      const config = {
        headers: {
          Authorization: "Bearer " + token
        }
      };
      let params = this.$route.query;
      axios
        .post(
          process.env.baseUrl + "transaksi/invoice",
          {
            notrans: params.notrans
          },
          config
        )
        .then(response => {
          this.pemesan = response.data.data.pemesan;
          this.listOrder = response.data.data.order;
          this.tagihan = response.data.data.tagihan;
          this.bank = response.data.data.bank;
        });
    }
  }
};
</script>
