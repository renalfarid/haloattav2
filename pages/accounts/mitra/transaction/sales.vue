<template>
  <div class="ant-transaction--sales">
    <div class="fs-18 fw-500 cr-black mb-16">Transaksi Penjualan</div>
    <a-card :bordered="false" class="ant-card--filter b-solid b-radius b-shadow">
      <a-row :gutter="16" type="flex" justify="space-around" align="middle">
        <a-col :span="4" class="text-uppercase cr-gray fs-14">Filter Penjualan</a-col>
        <a-col :span="10">
          <a-select defaultValue="All" size="large" style="width: 100%">
            <a-select-option value="All">Semua Status</a-select-option>
            <a-select-option value="Belum Dibayar">Belum Dibayar</a-select-option>
            <a-select-option value="Dibayar">Dibayar</a-select-option>
            <a-select-option value="Kedaluwarsa">Kedaluwarsa</a-select-option>
          </a-select>
        </a-col>
        <a-col :span="10">
          <a-range-picker
            :ranges="{ Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')] }"
            :placeholder="['Dari Tanggal', 'Hingga Tanggal']"
            @change="onChange"
            style="width: 100%"
            size="large"
          />
        </a-col>
      </a-row>
    </a-card>

    <a-list itemLayout="horizontal" :pagination="pagination" :dataSource="dataPenjualan">
      <a-list-item
        slot="renderItem"
        slot-scope="item, index"
        :key="index"
        class="b-solid b-radius b-shadow mt-16 p-0"
        style="backgroundColor: #ffffff"
      >
        <a-skeleton :loading="loading" active avatar>
          <a-row type="flex" class="w-100">
            <a-col :span="4">
              <div class="ant-images">
                <div class="ant-images--product" :style="{backgroundImage: `url(${item.images})`}"></div>
              </div>
            </a-col>
            <a-col :span="20">
              <a-row class="m-0 p-16">
                <a-col :span="10">
                  <div class="fs-14 fw-400 cr-gray">No. Pesanan</div>
                  <div class="cr-black fs-14 fw-500">{{item.no_pesanan}}</div>
                </a-col>
                <a-col :span="8">
                  <div class="cr-gray fs-14 fw-400">Jumlah Pesanan</div>
                  <div class="cr-black fs-14 fw-500">{{item.pax_order}} pax</div>
                </a-col>
                <a-col :span="6" class="text-right">
                  <div class="fs-14 fw-400 cr-gray">Total Bayar</div>
                  <div class="cr-black fs-14 fw-500">{{ item.total_bayar | currency }}</div>
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
                  <div class="fs-14 fw-500 cr-black mr-8">{{item.name_package}}</div>
                </a-col>
                <a-col :span="8">
                  <div v-if="item.status === 'Dibayar'">
                    <div class="cr-gray fs-14 fw-400">Tanggal Pembayaran</div>
                    <div class="cr-black fs-14 fw-500">{{item.tgl_purchase.format('llll')}}</div>
                  </div>
                  <div v-else>
                    <div class="cr-gray fs-14 fw-400">Tanggal Pesanan</div>
                    <div class="cr-black fs-14 fw-500">{{item.tgl_order.format('llll')}}</div>
                  </div>
                </a-col>
                <a-col :span="6" class="text-right">
                  <div class="cr-gray fs-14 fw-400">Status Pembayaran</div>
                  <div class="fs-14 fw-500 cr-orange" v-if="item.status === 'Belum Dibayar'">
                    <span>{{item.status}}</span>
                  </div>
                  <div class="fs-14 fw-500 cr-red" v-if="item.status === 'Kedaluwarsa'">
                    <span>{{item.status}}</span>
                  </div>
                  <div class="fs-14 fw-500 cr-green" v-if="item.status === 'Dibayar'">
                    <span>{{item.status}}</span>
                  </div>
                </a-col>
              </a-row>

              <a-row type="flex" justify="space-between" align="middle" class="m-0 p-16">
                <a-col :span="10">
                  <div class="cr-gray fs-14 fw-400">Metode Pembayaran</div>
                  <div class="cr-black fs-14 fw-500 f-default">{{item.metode_pembayaran}}</div>
                </a-col>
                <a-col :span="8">
                  <div class="cr-gray fs-14 fw-400">Tipe Pembayaran</div>
                  <div class="cr-black fs-14 fw-500 f-default">{{item.tipe_pembayaran}}</div>
                </a-col>
                <a-col :span="6">
                  <div class="d-flex align-items-center align-end">
                    <nuxt-link
                      to="/accounts/mitra/transaction/detail/sales"
                      class="cr-primary fs-14"
                    >Lihat detail</nuxt-link>
                  </div>
                </a-col>
              </a-row>
            </a-col>
          </a-row>
        </a-skeleton>
      </a-list-item>
    </a-list>
  </div>
</template>
<script>
const dataPenjualan = [
  {
    no_pesanan: "ATT-UMR-54021040019072938",
    images: "/products/V1.png",
    name_package:
      "Umrah Hemat September 2019 Program 9 Hari, keberangkatan Makassar",
    total_bayar: 500000731,
    pax_order: "40",
    tgl_order: moment("2019-07-10", "YYYY-MM-DD"),
    tgl_purchase: moment("2019-07-10", "YYYY-MM-DD"),
    status: "Belum Dibayar",
    tipe_pembayaran: "Dp",
    metode_pembayaran: "ATM/Bank Transfer"
  },
  {
    no_pesanan: "ATT-UMR-54021040019072938",
    images: "/products/V2.png",
    name_package:
      "Umrah Hemat September 2019 Program 9 Hari, keberangkatan Jakarta",
    total_bayar: 930000731,
    pax_order: "20",
    tgl_order: moment("2019-07-10", "YYYY-MM-DD"),
    tgl_purchase: moment("2019-07-10", "YYYY-MM-DD"),
    status: "Kedaluwarsa",
    tipe_pembayaran: "Lunas",
    metode_pembayaran: "ATM/Bank Transfer"
  },
  {
    no_pesanan: "ATT-UMR-54021040019072938",
    images: "/products/V3.png",
    name_package:
      "Umrah Hemat September 2019 Program 9 Hari, keberangkatan Bandung",
    total_bayar: 500000731,
    pax_order: "20",
    tgl_order: moment("2019-07-10", "YYYY-MM-DD"),
    tgl_purchase: moment("2019-07-10", "YYYY-MM-DD"),
    status: "Dibayar",
    tipe_pembayaran: "Lunas",
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
      loading: true,
      dataPenjualan,
      pagination: {
        onChange: page => {
          console.log(page);
        },
        pageSize: 10
      }
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1500);
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