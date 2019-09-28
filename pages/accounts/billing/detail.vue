<template>
  <div class="ant-layout--accounts-billing">
    <div class="mb-16">
      <nuxt-link to="/accounts/billing" class="fs-14 fw-400 cr-gray">
        <a-icon type="left" class="mr-8" />Kembali
      </nuxt-link>
    </div>
    <a-card :bordered="false" class="b-shadow b-solid b-radius mb-16">
      <div slot="title">Detail Produk</div>
      <div slot="extra" class="fs-16 fw-500 cr-black">No. Transaksi PUHA12345678</div>
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
              <span>Paket Umrah Exclusive September 2019</span>,
              <br />
              <span>Keberangkatan Makassar</span>
            </div>
          </div>
        </a-col>
        <a-col :span="4">
          <div class="fs-14 fw-400 cr-gray">Tanggal Keberangkatan</div>
          <div class="fs-14 fw-500 cr-black">20 September 2019</div>
        </a-col>
        <a-col :span="4" class="text-right">
          <div class="fs-14 fw-400 cr-gray">Program Hari</div>
          <div class="fs-14 fw-500 cr-black">Program 9 Hari</div>
        </a-col>
        <a-col :span="4" class="text-right">
          <div class="fs-14 fw-400 cr-gray">Jumlah Pax</div>
          <div class="fs-14 fw-500 cr-black">4 Pax</div>
        </a-col>
      </a-row>
      <a-divider></a-divider>
      <a-row :gutter="8" type="flex" justify="end">
        <a-col :span="4" class="text-right">
          <div class="fs-15 fw-400 cr-gray">Jumlah Pembayaran :</div>
        </a-col>
        <a-col :span="4" class="text-right">
          <div class="fs-15 fw-500 cr-black">{{ 400000000 | currency}}</div>
        </a-col>
      </a-row>
      <a-divider></a-divider>
      <a-row :gutter="8" type="flex" justify="end">
        <a-col :span="4" class="text-right">
          <div class="fs-15 fw-400 cr-gray">Sisa Pembayaran :</div>
        </a-col>
        <a-col :span="4" class="text-right">
          <div class="fs-15 fw-500 cr-red">{{ 200000000 | currency}}</div>
        </a-col>
      </a-row>
    </a-card>

    <div class="fs-16 fw-500 cr-black">Informasi Pembayaran Anda</div>
    <a-list itemLayout="horizontal" :dataSource="dataTagihan">
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
                  >{{item.key}}</a-avatar>
                </div>
                <div>
                  <div class="fs-14 fw-400 cr-gray">Keterangan</div>
                  <div class="fs-14 fw-500 cr-black">{{item.keterangan}}</div>
                </div>
              </div>
            </a-col>
            <a-col :span="6">
              <div class="fs-14 fw-400 cr-gray">Tanggal Pembayaran</div>
              <div class="fs-14 fw-500 cr-blue">{{item.date.format('LL')}}</div>
            </a-col>
            <a-col :span="6">
              <div class="fs-14 fw-400 cr-gray">Jumlah Pembayaran</div>
              <div class="fs-14 fw-500 cr-blue">{{item.amount | currency}}</div>
            </a-col>
            <a-col :span="4" class="text-right">
              <nuxt-link to="/accounts/transaction/detail/receipt">
                <span class="fs-14 fw-500 cr-blue">
                  Kwitansi
                  <a-icon type="right" class="ml-8" />
                </span>
              </nuxt-link>
            </a-col>
          </a-row>
        </div>
      </a-list-item>
    </a-list>
  </div>
</template>
<script>
import moment from "moment";
const dataTagihan = [
  {
    key: 1,
    amount: 200000000,
    keterangan: "DP Pembayaran",
    date: moment("2019-07-10", "YYYY-MM-DD")
  }
];
export default {
  middleware: "authenticated",
  layout: "accounts",
  name: "billing-detail",
  head() {
    return {
      title: "Detial Tagihan - Kembangkan Bisnis Umrah Anda | Haloatta"
    };
  },

  data() {
    return {
      dataTagihan
    };
  },

  methods: {
    moment
  }
};
</script>