<template>
  <div class="ant-transaction--sales">
    <a-card :bordered="false" class="ant-card--filter b-solid b-radius b-shadow mb-16">
      <div class="fs-18 fw-500 cr-black">Transaksi Penjualan</div>
      <a-row :gutter="16" class="mt-8 mb-8">
        <a-col :span="8">
          <a-select defaultValue="Semua Metode Pembayaran" style="width: 100%">
            <a-select-option value="Semua Metode Pembayaran">Semua Metode Pembayaran</a-select-option>
            <a-select-option value="Saldo">Saldo</a-select-option>
            <a-select-option value="ATM/Bank Transfer">ATM/Bank Transfer</a-select-option>
          </a-select>
        </a-col>
        <a-col :span="8">
          <a-select defaultValue="Semua Status Pembayaran" style="width: 100%">
            <a-select-option value="Semua Status Pembayaran">Semua Status Pembayaran</a-select-option>
            <a-select-option value="Belum Dibayar">Belum Dibayar</a-select-option>
            <a-select-option value="Dibayar">Dibayar</a-select-option>
            <a-select-option value="DP">DP (Down Payment)</a-select-option>
            <a-select-option value="Kedaluwarsa">Kedaluwarsa</a-select-option>
          </a-select>
        </a-col>
        <a-col :span="8">
          <a-range-picker
            :ranges="{ Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')] }"
            :placeholder="['Dari Tanggal', 'Hingga Tanggal']"
            @change="onChange"
          />
        </a-col>
      </a-row>
    </a-card>

    <a-list
      itemLayout="horizontal"
      :pagination="pagination"
      :grid="{ gutter: 16, xs: 1, sm: 1, md: 1, lg: 1, xl: 1, xxl: 1 }"
      :dataSource="dataPenjualan"
    >
      <a-list-item
        slot="renderItem"
        slot-scope="item, index"
        :key="index"
        class="b-solid b-radius b-shadow mt-16 mb-8 p-0"
        style="backgroundColor: #ffffff"
      >
        
        <a-row type="flex" class="w-100">
          <a-col :span="5">
            <div class="ant-images">
              <div class="ant-images--product" :style="{backgroundImage: `url(${item.images})`}"></div>
            </div>
          </a-col>
          <a-col :span="19">
            <a-row class="m-0 p-16">
            <a-col :span="10">
              <div class="fs-12 fw-400 cr-gray text-uppercase">No. Pesanan</div>
              <div class="cr-black fs-14 fw-500 f-default">{{item.no_pesanan}}</div>
            </a-col>
            <a-col :span="5">
              <div class="cr-gray fs-12 fw-400 text-uppercase">Pax Order</div>
              <div class="cr-black fs-14 fw-500 f-default">{{item.pax_order}} pax</div>
            </a-col>
            <a-col :span="9" class="text-right text-uppercase">
              <div class="fs-12 fw-400 cr-gray">Total Bayar</div>
              <div class="cr-black fs-14 fw-500 f-default">Rp. {{item.total_bayar}}</div>
            </a-col>
          </a-row>

          <a-row
            type="flex"
            justify="space-between"
            align="middle"
            class="m-0 p-16"
            style="backgroundColor: #f5f5f5"
          >
            <a-col :span="10">
              <div class="fs-14 fw-500 cr-black f-default mr-8">{{item.name_package}}</div>
            </a-col>
            <a-col :span="5">
              <div class="cr-gray fs-12 fw-400 text-uppercase">Tanggal Order</div>
              <div class="cr-black fs-14 fw-500 f-default">{{item.tgl_order}}</div>
            </a-col>
            <a-col :span="9" class="text-right">
              <div class="cr-gray fs-12 fw-400 text-uppercase">Status Pesanan</div>
              <div
                class="fs-14 fw-500 f-default cr-red"
                v-if="item.status === 'Menunggu Pembayaran'"
              >
                <span>{{item.status}}</span>
              </div>
              <div
                class="fs-14 fw-500 f-default cr-orange"
                v-if="item.status === 'Menunggu Verifikasi'"
              >
                <span>{{item.status}}</span>
              </div>
              <div class="fs-14 fw-500 f-default cr-green" v-if="item.status === 'Lunas'">
                <span>{{item.status}}</span>
              </div>
            </a-col>
          </a-row>

          <a-row type="flex" justify="space-between" align="middle" class="m-0 p-16">
            <a-col :span="10">
              <div class="cr-gray fs-12 fw-400 text-uppercase">Metode Pembayaran</div>
              <div class="cr-black fs-14 fw-500 f-default">{{item.metode_pembayaran}}</div>
            </a-col>
            <a-col :span="5">
              <div v-if="item.status === 'Menunggu Pembayaran'">
                <div class="cr-gray fs-12 fw-400 text-uppercase">Batas Pembayaran</div>
                <div class="cr-black fs-14 fw-500 f-default">{{item.batas_pembayaran}}</div>
              </div>
              <div v-if="item.status === 'Menunggu Verifikasi'">
                <div class="cr-gray fs-12 fw-400 text-uppercase">Batas Pembayaran</div>
                <div class="cr-black fs-14 fw-500 f-default">{{item.batas_pembayaran}}</div>
              </div>
              <div v-if="item.status === 'Lunas'">
                <div class="cr-gray fs-12 fw-400 text-uppercase">Tanggal Pembayaran</div>
                <div class="cr-black fs-14 fw-500 f-default">{{item.tgl_purchase}}</div>
              </div>
            </a-col>
            <a-col :span="9">
              <div class="d-flex align-items-center align-end">
                <div v-if="item.status === 'Menunggu Pembayaran'">
                  <a-button class="b-shadow b-radius ant-btn--action" @click="nextConf">Konfirmasi Pembayaran</a-button>

                  <a-divider type="vertical" />
                </div>

                <nuxt-link
                  to="/accounts/mitra/transaction/detail"
                  class="cr-primary fs-14"
                >Lihat detail</nuxt-link>
              </div>
            </a-col>
          </a-row>
          </a-col>
        </a-row>
      </a-list-item>
    </a-list>
  </div>
</template>

<script>
const dataPenjualan = [
  {
    no_pesanan: "PUHA12345678",
    images: "/products/V1.png",
    name_package:
      "Umrah Hemat September 2019 Program 9 Hari, keberangkatan Makassar",
    total_bayar: "930.000.731",
    pax_order: "40",
    tgl_order: "10 September 2019",
    batas_pembayaran: "12 September 2019",
    status: "Menunggu Pembayaran",
    metode_pembayaran: "ATAM/Bank Transfer"
  },
  {
    no_pesanan: "PUHA12345678",
    images: "/products/V2.png",
    name_package:
      "Umrah Hemat September 2019 Program 9 Hari, keberangkatan Jakarta",
    total_bayar: "930.000.731",
    pax_order: "20",
    tgl_order: "14 September 2019",
    batas_pembayaran: "16 September 2019",
    status: "Menunggu Verifikasi",
    metode_pembayaran: "ATAM/Bank Transfer"
  },
  {
    no_pesanan: "PUHA12345678",
    images: "/products/V3.png",
    name_package:
      "Umrah Hemat September 2019 Program 9 Hari, keberangkatan Bandung",
    total_bayar: "930.000.731",
    pax_order: "20",
    tgl_order: "14 September 2019",
    tgl_purchase: "10 September 2019",
    batas_pembayaran: "16 September 2019",
    status: "Lunas",
    metode_pembayaran: "Saldo Halopay"
  }
];
import moment from "moment";
export default {
  layout: "accounts",
  name: "mitraSales",
  head() {
    return {
      title: "Semua Transaksi Penjualan - Haloatta"
    };
  },
  data() {
    return {
      dateFormat: "YYYY/MM/DD",
      monthFormat: "YYYY/MM",
      dataPenjualan,
      pagination: {
        onChange: page => {
          console.log(page);
        },
        pageSize: 3
      }
    };
  },
  methods: {
    moment,
    onChange(dates, dateStrings) {
      console.log("From: ", dates[0], ", to: ", dates[1]);
      console.log("From: ", dateStrings[0], ", to: ", dateStrings[1]);
    },
    nextConf() {
      this.$router.push({ path: "/accounts/e-confirm" });
    }
  }
};
</script>