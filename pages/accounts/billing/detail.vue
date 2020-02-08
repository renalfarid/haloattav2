<template>
  <div class="ant-layout--accounts-billing">
    <div class="mb-16">
      <nuxt-link to="/accounts/transaction/purchase" class="fs-14 fw-400 cr-gray">
        <a-icon type="left" class="mr-8" />Kembali
      </nuxt-link>
    </div>
    <a-card :bordered="false" class="b-shadow b-solid b-radius mb-16">
      <div slot="title">Data Transaksi</div>
      <div slot="extra" class="fs-16 fw-500 cr-black">No. Transaksi {{detailProduk.nomor_transaksi}}</div>
      <div slot="extra" class="fs-16 fw-500 cr-black">{{moment(detailProduk.tanggal_pemesanan, "YYYY-MM-DD").format("dddd, DD MMMM YYYY")}}</div>
      <a-row :gutter="8">
        <a-col :span="12">
          <div class="d-flex align-items-center">
            <div class="mr-8">
              <a-avatar
                style="backgroundColor: rgba(15, 172, 243, .1);padding: 2px"
                src="/icons/search/tabs/color/umrah.svg"
              />
            </div>
            <div class="fs-14 fw-500 cr-black f-default">
              <span>{{detailProduk.nama_paket}}</span>,
              <br />
              <span>{{detailProduk.tipe_produk}}</span>
            </div>
          </div>
        </a-col>
        <a-col :span="4">
          <div class="fs-14 fw-400 cr-gray">Limit Pembayaran</div>
          <div
            class="fs-14 fw-500 cr-black"
          >{{moment(detailProduk.limit_waktu_pembayaran, "YYYY-MM-DD").format("dddd, MMMM Do YYYY, h:mm:ss a")}}</div>
        </a-col>
        <a-col :span="4" class="text-right">
          <div class="fs-14 fw-400 cr-gray">Program Hari</div>
          <div class="fs-14 fw-500 cr-black">Program {{detailProduk.program_hari}} Hari</div>
        </a-col>
        <a-col :span="4" class="text-right">
          <div class="fs-14 fw-400 cr-gray">Jumlah Pax</div>
          <div class="fs-14 fw-500 cr-black">{{detailProduk.pax}} Pax</div>
        </a-col>
      </a-row>
      <a-divider></a-divider>
      <a-row :gutter="8" type="flex" justify="end">
        <a-col :span="4" class="text-right">
          <div class="fs-15 fw-400 cr-gray">Total Tagihan :</div>
        </a-col>
        <a-col :span="4" class="text-right">
          <div class="fs-15 fw-500 cr-black">{{ detailProduk.total_bayar + detailProduk.sisa_pembayaran | currency}}</div>
        </a-col>
      </a-row>
      <a-divider></a-divider>
      <a-row :gutter="8" type="flex" justify="end">
        <a-col :span="4" class="text-right" v-if="detailProduk.status_bayar == 'Menunggu Approval'">
          <div class="fs-15 fw-400 cr-orange">{{detailProduk.status_bayar}}</div>
        </a-col>

        <a-col
          :span="4"
          class="text-right"
          v-if="detailProduk.status_bayar == 'Menunggu Pembayaran'"
        >
          <div class="fs-15 fw-400 cr-gray">{{detailProduk.status_bayar}}</div>
        </a-col>

        <a-col :span="4" class="text-right" v-if="detailProduk.status_bayar == 'Expired'">
          <div class="fs-15 fw-400 cr-red">{{detailProduk.status_bayar}}</div>
        </a-col>

        <a-col :span="4" class="text-right" v-if="detailProduk.status_bayar == 'Lunas'">
          <div class="fs-15 fw-400 cr-green">{{detailProduk.status_bayar}}</div>
        </a-col>

        <a-col :span="4" class="text-right">
          <div class="fs-15 fw-400 cr-gray">Jumlah Pembayaran :</div>
        </a-col>
        <a-col :span="4" class="text-right">
          <div class="fs-15 fw-500 cr-black">{{ detailProduk.total_bayar | currency}}</div>
        </a-col>
      </a-row>
      <a-divider></a-divider>
      <a-row :gutter="8" type="flex" justify="end">
        <a-col :span="4" class="text-right">
          <div class="fs-15 fw-400 cr-gray">Sisa Pembayaran :</div>
        </a-col>
        <a-col :span="4" class="text-right">
          <div class="fs-15 fw-500 cr-red">{{ detailProduk.sisa_pembayaran | currency}}</div>
        </a-col>
      </a-row>
      <a-row
        :gutter="8"
        type="flex"
        justify="end"
        v-if="detailProduk.status_bayar == 'Menunggu Pembayaran'"
      >
        <a-col :span="4" class="text-right">
          <a-button class="b-shadow b-radius ant-btn--action">
            <nuxt-link
              :to="'/accounts/e-confirm?notrans='+detailProduk.nomor_transaksi"
            >Bayar Sekarang</nuxt-link>
          </a-button>
        </a-col>
      </a-row>
    </a-card>

    <div class="fs-16 fw-500 cr-black">Informasi Pembayaran Anda</div>
    <a-list itemLayout="horizontal" :dataSource="pembayaran">
      <a-list-item
        slot="renderItem"
        slot-scope="item, index"
        :key="index"
        class="b-solid b-radius b-shadow mt-16 mb-16 p-0"
        style="backgroundColor: #ffffff"
      >
        <div class="w-100">
          <a-row :gutter="16" type="flex" justify="space-around" align="middle" class="m-0 p-24">
            <a-col :span="8">
              <div class="d-flex align-items-center">
                <div class="mr-16">
                  <a-avatar
                    style="backgroundColor: rgba(15, 172, 243, .1);color: #0FACF3"
                  >{{index+1}}</a-avatar>
                </div>
                <div>
                  <div class="fs-14 fw-400 cr-gray">No Bukti</div>
                  <div class="fs-14 fw-500 cr-black">{{item.nobukti}}</div>
                </div>
              </div>
            </a-col>
            <a-col :span="6">
              <div class="fs-14 fw-400 cr-gray">Tanggal Pembayaran</div>
              <div class="fs-14 fw-500 cr-blue">{{moment(item.tglbukti).format("LL")}}</div>
            </a-col>
            <a-col :span="6">
              <div class="fs-14 fw-400 cr-gray">Jumlah Pembayaran</div>
              <div class="fs-14 fw-500 cr-blue">{{item.bayar | currency}}</div>
            </a-col>
            <a-col :span="4" class="text-right" v-if="item.stsbayar == 'Approve'">
              <nuxt-link :to="'/accounts/transaction/detail/receipt?nobukti='+item.nobukti">
                <span class="fs-14 fw-500 cr-blue">
                  Kwitansi
                  <a-icon type="right" class="ml-8" />
                </span>
              </nuxt-link>
            </a-col>
            <a-col :span="4" class="text-right" v-else>
              <div class="fs-14 fw-400 cr-gray">Status Pembayaran</div>
              <div class="fs-14 fw-500 cr-orange">{{item.stsbayar}}</div>
            </a-col>

          </a-row>
        </div>
      </a-list-item>
    </a-list>
  </div>
</template>
<script>
import moment from "moment";
import axios from "axios";
const Cookie = process.client ? require("js-cookie") : undefined;

export default {
  middleware: "authenticated",
  layout: "accounts",
  name: "billing-detail",
  head() {
    return {
      title: "Detail Tagihan - Kembangkan Bisnis Umrah Anda | Haloatta"
    };
  },

  data() {
    return {
      detailProduk: "",
      pembayaran: ""
    };
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
          process.env.baseUrl + "transaksi/history-detail",
          {
            notrans: params.notrans
          },
          config
        )
        .then(response => {
          this.detailProduk = response.data.data.index;
          this.pembayaran = response.data.data.pembayaran;
        });
    }
  }
};
</script>