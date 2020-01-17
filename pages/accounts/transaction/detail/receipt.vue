<template>
  <div class="ant-invoice">
    <a-card :loading="loading" :bordered="false" class="b-radius b-shadow b-solid mb-16">
      <span slot="title" class="fs-16 fw-500 cr-black d-none">
        <!-- if status tagihan 'menunggu pembayaran' -->
        <a-avatar size="small" style="backgroundColor: #FF7C0A" class="mr-8" icon="clock-circle" />Menunggu Pembayaran
      </span>
      <span slot="title" class="fs-16 fw-500 cr-black d-none">
        <!-- if status tagihan 'kedaluwarsa' -->
        <a-avatar size="small" style="backgroundColor: #F43662" class="mr-8" icon="close" />Batas Waktu Habis
      </span>
      <!-- if status tagihan 'berhasil' -->
      <span slot="title" class="fs-16 fw-500 cr-black">
        <a-avatar size="small" style="backgroundColor: #52c41a" class="mr-8" icon="check" />Pembelian Berhasil
      </span>
      <div
        v-if="!loading"
        slot="extra"
        class="fw-500 fs-16 cr-black"
      >No. Transaksi: {{kwitansi.notrans}}</div>
      <a-steps :current="4">
        <a-step>
          <template slot="title">Pesanan</template>
          <span slot="description" class="fs-13">29-08-2019 11:50</span>
        </a-step>
        <a-step>
          <template slot="title">Pembayaran</template>
          <span slot="description" class="fs-13">
            <div>(Rp909.000.000)</div>
            <div>29-08-2019 11:50</div>
          </span>
        </a-step>
        <a-step>
          <template slot="title">Verifikasi</template>
          <span slot="description" class="fs-13">30-08-2019 11:50</span>
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
            <div class="fs-18 fw-500 cr-black text-uppercase">Pemesan:</div>
          </div>
          <div class="ml-auto">
            <div class="fs-40 fw-500 cr-black">Kwintansi</div>
          </div>
        </div>

        <a-row :gutter="16">
          <a-col :span="12">
            <div class="text-left mb-16">
              <div class="fs-15 fw-500 cr-black">{{pemesan.nama_depan +' '+pemesan.nama_belakang}}</div>
              <div class="fs-14 fw-400 cr-gray">Jl. Pengayoman, Masale, Kec. Panakkukang (tidak ada)</div>
              <div class="fs-14 fw-400 cr-gray">Kota Makassar, Sulawesi Selatan (tidak ada)</div>
              <div class="fs-14 fw-400 cr-gray">Kode Pos 90231(tidak ada)</div>
            </div>
            <div class="text-left">
              <div class="fs-14 fw-400 cr-gray">Email : {{pemesan.email}}</div>
              <div class="fs-14 fw-400 cr-gray">Telp: {{pemesan.telepon}}</div>
            </div>
          </a-col>
          <a-col :span="12">
            <div class="text-right">
              <div class="mb-16">
                <div class="fs-13 fw-500 cr-black text-uppercase">Nomor Kwitansi</div>
                <div class="fs-14 fw-400 cr-gray">{{kwitansi.nobukti}}</div>
              </div>
              <div class="mb-16">
                <div class="fs-13 fw-500 cr-black text-uppercase">Metode Pembayaran</div>
                <div class="fs-14 fw-400 cr-gray">{{kwitansi.metodebayar}}</div>
              </div>
              <div class="mb-16">
                <div class="fs-13 fw-500 cr-black text-uppercase">Tipe Pembayaran</div>
                <div class="fs-14 fw-400 cr-gray">{{kwitansi.jenisbayar}}</div>
              </div>
              <div class="mb-16">
                <div class="fs-13 fw-500 cr-black text-uppercase">Tanggal Pembelian (-)</div>
                <div class="fs-14 fw-400 cr-gray">Senin, 20 Mei 2019</div>
              </div>
              <div class="mb-16">
                <div class="fs-13 fw-500 cr-black text-uppercase">Tanggal Pembayaran (-)</div>
                <div class="fs-14 fw-400 cr-gray">Senin, 22 Mei 2019</div>
              </div>
            </div>
          </a-col>
        </a-row>
      </div>

      <div class="ant-card-body-item">
        <a-row :gutter="16">
          <a-col :span="9">
            <div class="fs-14 fw-500 cr-gray text-uppercase">Detail Pembelian</div>
          </a-col>
          <a-col :span="6">
            <div class="fs-14 fw-500 cr-gray text-uppercase">Tanggal Keberangkatan</div>
          </a-col>
          <a-col :span="3">
            <div class="fs-14 fw-500 cr-gray text-uppercase">Pax</div>
          </a-col>
          <a-col :span="6" class="text-right">
            <div class="fs-14 fw-500 cr-gray text-uppercase">Jumlah Pembayaran</div>
          </a-col>
        </a-row>

        <a-divider></a-divider>

        <a-row :gutter="16">
          <a-col :span="9">
            <div class="fs-14 fw-500 cr-black">{{detailPembelian.namapaket}}</div>
            <div class="fs-14 fw-400 cr-black">Program 9 Hari (tidak ada)</div>
          </a-col>
          <a-col :span="6">
            <div class="fs-14 fw-500 cr-black">10 Desember 2019 (tidak ada)</div>
          </a-col>
          <a-col :span="3">
            <div class="fs-14 fw-500 cr-black">{{detailPembelian.pax}}</div>
          </a-col>
          <a-col :span="6" class="text-right">
            <div class="fs-14 fw-500 cr-black">{{detailPembelian.totalbayar | currency}}</div>
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
                <div class="fs-14 fw-500 cr-black">{{detailPembelian.totalbayar | currency}}</div>
              </a-col>
            </a-row>
            <a-divider></a-divider>
            <a-row :gutter="16">
              <a-col :span="12">
                <div class="fs-14 fw-500 cr-gray text-uppercase">PPN 1%</div>
              </a-col>
              <a-col :span="12" class="text-right">
                <div class="fs-14 fw-500 cr-black">{{detailPembelian.ppn | currency}}</div>
              </a-col>
            </a-row>
            <a-divider></a-divider>
            <a-row :gutter="16">
              <a-col :span="12">
                <div class="fs-14 fw-500 cr-black text-uppercase">Total Pembayaran</div>
              </a-col>
              <a-col :span="12" class="text-right">
                <div class="fs-18 fw-500 cr-primary">{{detailPembelian.totalbayar | currency}}</div>
              </a-col>
            </a-row>
          </a-col>
        </a-row>
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
  name: "receipt",
  head() {
    return {
      title: "Kwitansi Pembelian - Haloatta"
    };
  },
  data() {
    return {
      loading: true,
      pemesan: "",
      detailPembelian: "",
      kwitansi: ""
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
          process.env.baseUrl + "transaksi/kwitansi",
          {
            nobukti: params.nobukti
          },
          config
        )
        .then(response => {
          this.pemesan = response.data.data.pemesan;
          this.detailPembelian = response.data.data.tagihan;
          this.kwitansi = response.data.data.pembayaran;
        });
    }
  }
};
</script>
