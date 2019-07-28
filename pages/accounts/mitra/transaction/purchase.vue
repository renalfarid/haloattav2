<template>
  <div class="ant-transaction--purchase">
    <a-card :bordered="false" class="ant-card--filter b-solid b-radius b-shadow mb-16">
      <div class="fs-18 fw-500 cr-black">Transaksi Pembelian</div>
      <a-row :gutter="16" class="mt-8 mb-8">
        <a-col :span="8">
          <a-select showSearch defaultValue="Semua Produk" style="width: 100%">
            <a-select-option value="Semua Produk">Semua Produk</a-select-option>
            <a-select-option value="Umrah">Umrah</a-select-option>
            <a-select-option value="Tiket Group">Tiket Group</a-select-option>
            <a-select-option value="LA Akomodasi">LA Akomodasi</a-select-option>
            <a-select-option value="Visa">Visa</a-select-option>
            <a-select-option value="Asuransi">Asuransi</a-select-option>
            <a-select-option value="Handling">Handling</a-select-option>
            <a-select-option value="Manasik">Manasik</a-select-option>
            <a-select-option value="Perlengkapan">Perlengkapan</a-select-option>
            <a-select-option value="Tour Leader">Tour Leader</a-select-option>
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
      :dataSource="dataPembelian"
    >
      <a-list-item
        slot="renderItem"
        slot-scope="item, index"
        :key="index"
        class="b-solid b-radius b-shadow mt-16 mb-8 p-0"
        style="backgroundColor: #ffffff"
      >
        <div class="w-100">
          <a-row :gutter="16" class="m-0 p-16">
            <a-col :span="8">
              <div class="fs-12 fw-400 cr-gray text-uppercase">No. Pesanan</div>
              <div class="cr-black fs-14 fw-500 f-default">{{item.no_pesanan}}</div>
            </a-col>
            <a-col :span="8">
              <div class="cr-gray fs-12 fw-400 text-uppercase">Jumlah Pesanan</div>
              <div class="cr-black fs-15 fw-500 f-default">{{item.pax_order}} pax</div>
            </a-col>
            <a-col :span="8" class="text-right">
              <div class="fs-12 fw-400 cr-gray text-uppercase">Total Bayar</div>
              <div class="cr-black fs-15 fw-500 f-default">Rp. {{item.total_bayar}}</div>
            </a-col>
          </a-row>

          <a-row
            :gutter="16"
            type="flex"
            justify="space-between"
            align="middle"
            class="m-0 p-16"
            style="backgroundColor: #f5f5f5"
          >
            <a-col :span="8">
              <div class="d-flex align-items-center">
                <div class="mr-8">
                  <a-avatar style="backgroundColor: #0FACF3" src="/icons/kaabah.png" />
                </div>
                <div class="fs-15 fw-500 cr-black f-default">{{item.name_package}}</div>
              </div>
            </a-col>
            <a-col :span="8">
              <div class="fs-12 fw-400 cr-gray text-uppercase">Tanggal Pemesanan</div>
              <div class="cr-black fs-15 fw-500 f-default">{{item.tgl_order}}</div>
            </a-col>
            <a-col :span="8" class="text-right">
              <div class="fs-12 fw-400 cr-gray text-uppercase">Status Pemesanan</div>
              <div
                class="fs-15 fw-500 f-default cr-red"
                v-if="item.status === 'Menunggu Pembayaran'"
              >
                <span>{{item.status}}</span>
              </div>
              <div
                class="fs-15 fw-500 f-default cr-red"
                v-if="item.status === 'Kedaluwarsa'"
              >
                <span>{{item.status}}</span>
              </div>
              <div
                class="fs-15 fw-500 f-default cr-orange"
                v-if="item.status === 'Menunggu Verifikasi'"
              >
                <span>{{item.status}}</span>
              </div>
              <div class="fs-15 fw-500 f-default cr-green" v-if="item.status === 'Lunas'">
                <span>{{item.status}}</span>
              </div>
            </a-col>
          </a-row>

          <a-row :gutter="16" type="flex" justify="space-between" align="middle" class="m-0 p-16">
            <a-col :span="8">
              <div class="fs-12 fw-400 cr-gray text-uppercase">Metode Pembayaran</div>
              <div class="cr-black fs-15 fw-500 f-default">{{item.metode_pembayaran}}</div>
            </a-col>
            <a-col :span="8">
              <div v-if="item.status === 'Menunggu Pembayaran'">
                <div class="fs-12 fw-400 cr-gray text-uppercase">Batas Pembayaran</div>
                <div class="cr-black fs-15 fw-500 f-default">{{item.batas_pembayaran}}</div>
              </div>
              <div v-if="item.status === 'Menunggu Verifikasi'">
                <div class="fs-12 fw-400 cr-gray text-uppercase">Batas Pembayaran</div>
                <div class="cr-black fs-15 fw-500 f-default">{{item.batas_pembayaran}}</div>
              </div>
              <div v-if="item.status === 'Kedaluwarsa'">
                <!-- <div class="fs-12 fw-400 cr-gray text-uppercase">Batas Pembayaran</div> -->
                <!-- <div class="cr-black fs-15 fw-500 f-default">{{item.batas_pembayaran}}</div> -->
              </div>
              <div v-if="item.status === 'Lunas'">
                <div class="fs-12 fw-400 cr-gray text-uppercase">Tanggal Pembayaran</div>
                <div class="cr-black fs-15 fw-500 f-default">{{item.tgl_purchase}}</div>
              </div>
            </a-col>
            <a-col :span="8">
              <div class="d-flex align-items-center align-end">
                <nuxt-link to="/accounts/mitra/transaction/detail" class="cr-primary fs-15">Lihat detail</nuxt-link>
                <div v-if="item.status === 'Menunggu Pembayaran'">
                  <a-divider type="vertical" />
                  <a-button class="b-shadow b-radius ant-btn--action" @click="nextConf">Konfirmasi Pembayaran</a-button>
                </div>

                <div v-if="item.status === 'Kedaluwarsa'">
                  <a-divider type="vertical" />
                  <nuxt-link to="/" class="cr-red fs-15">Pesan Kembali</nuxt-link>
                </div>
              </div>
            </a-col>
          </a-row>
        </div>
      </a-list-item>
    </a-list>
  </div>
</template>

<script>
const dataPembelian = [
  {
    no_pesanan: "PUHA12345678",
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
    name_package:
      "Umrah Hemat September 2019 Program 9 Hari, keberangkatan Batulicin",
    total_bayar: "808.000.731",
    pax_order: "20",
    tgl_order: "14 September 2019",
    batas_pembayaran: "16 September 2019",
    status: "Kedaluwarsa",
    metode_pembayaran: "ATAM/Bank Transfer"
  },
  {
    no_pesanan: "PUHA12345678",
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
  name: "mitraPurchase",
  head() {
    return {
      title: "Semua Transaksi Pembelian - Haloatta"
    };
  },
  data() {
    return {
      dateFormat: "YYYY/MM/DD",
      monthFormat: "YYYY/MM",
      dataPembelian,
      pagination: {
        onChange: page => {
          console.log(page);
        },
        pageSize: 10
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