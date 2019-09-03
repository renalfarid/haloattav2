<template>
  <div class="ant-transaction--purchase">
    <div class="fs-18 fw-500 cr-black">Transaksi Pembelian</div>
    <a-card :bordered="false" class="ant-card--filter b-solid b-radius b-shadow mt-16 mb-16">
      <a-row :gutter="16" type="flex" justify="space-around" align="middle">
        <a-col :span="4" class="text-uppercase cr-gray fs-14">Filter Pembelian</a-col>
        <a-col :span="7">
          <a-select showSearch defaultValue="Semua Produk" size="large" style="width: 100%">
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
        <a-col :span="6">
          <a-select defaultValue="Semua Status" size="large" style="width: 100%">
            <a-select-option value="Semua Status">Semua Status</a-select-option>
            <a-select-option value="Belum Dibayar">Belum Dibayar</a-select-option>
            <a-select-option value="Dibayar">Dibayar</a-select-option>
            <a-select-option value="Verifikasi">Menunggu Verifikasi</a-select-option>
            <a-select-option value="Kedaluwarsa">Kedaluwarsa</a-select-option>
          </a-select>
        </a-col>
        <a-col :span="7">
          <a-range-picker
            :ranges="{ Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')] }"
            :placeholder="['Dari Tanggal', 'Hingga Tanggal']"
            @change="onChange"
            size="large"
          />
        </a-col>
      </a-row>
    </a-card>

    <a-list itemLayout="horizontal" :pagination="pagination" :dataSource="dataPembelian">
      <a-list-item
        slot="renderItem"
        slot-scope="item, index"
        :key="index"
        class="b-solid b-radius b-shadow mt-16 mb-8 p-0"
        style="backgroundColor: #ffffff"
      >
        <a-skeleton :loading="loading" active avatar>
          <div class="w-100">
            <a-row :gutter="16" class="m-0 p-16">
              <a-col :span="10">
                <div class="fs-14 fw-400 cr-gray">No. Pesanan</div>
                <div class="fs-14 fw-500 cr-black">{{item.order_number}}</div>
              </a-col>
              <a-col :span="7">
                <div class="cr-gray fs-14 fw-400">Jumlah Pesanan</div>
                <div class="fs-14 fw-500 cr-black">{{item.number_purchase}} pax</div>
              </a-col>
              <a-col :span="7" class="text-right">
                <div class="fs-14 fw-400 cr-gray">Jumlah Pembayaran</div>
                <div class="fs-14 fw-500 cr-black">{{ item.total_amount | currency }}</div>
              </a-col>
            </a-row>

            <a-row
              :gutter="16"
              type="flex"
              justify="space-around"
              align="middle"
              class="m-0 p-16"
              style="backgroundColor: #f5f5f5"
            >
              <a-col :span="10">
                <div class="d-flex align-items-center">
                  <div class="mr-8">
                    <a-avatar
                      v-if="item.products_categorie === 'umrah'"
                      style="backgroundColor: rgba(15, 172, 243, .1);padding: 2px"
                      src="/icons/search/tabs/color/umrah.svg"
                    />
                    <a-avatar
                      v-if="item.products_categorie === 'akomodasi'"
                      style="backgroundColor: rgba(15, 172, 243, .1);padding: 4px"
                      src="/icons/search/tabs/color/accommodation.svg"
                    />
                    <a-avatar
                      v-if="item.products_categorie === 'tiket group'"
                      style="backgroundColor: rgba(15, 172, 243, .1);padding: 4px"
                      src="/icons/search/tabs/color/ticket.svg"
                    />
                    <a-avatar
                      v-if="item.products_categorie === 'visa'"
                      style="backgroundColor: rgba(15, 172, 243, .1);padding: 4px"
                      src="/icons/search/tabs/color/visa.svg"
                    />
                  </div>
                  <div class="fs-14 fw-500 cr-black f-default">{{item.products_name}}</div>
                </div>
              </a-col>
              <a-col :span="7">
                <div class="fs-14 fw-400 cr-gray">Tanggal Pemesanan</div>
                <div class="fs-14 fw-500 cr-black">{{item.order_date.format('llll')}}</div>
              </a-col>
              <a-col :span="7" class="text-right">
                <div class="fs-14 fw-400 cr-gray">Status Pembayaran</div>
                <div class="fs-14 fw-500 cr-red" v-if="item.purchase_status === 'Belum Dibayar'">
                  <span>{{item.purchase_status}}</span>
                </div>
                <div class="fs-14 fw-500 cr-red" v-if="item.purchase_status === 'Kedaluwarsa'">
                  <span>{{item.purchase_status}}</span>
                </div>
                <div
                  class="fs-14 fw-500 cr-orange"
                  v-if="item.purchase_status === 'Menunggu Verifikasi'"
                >
                  <span>{{item.purchase_status}}</span>
                </div>
                <div class="fs-14 fw-500 cr-green" v-if="item.purchase_status === 'Dibayar'">
                  <span>{{item.purchase_status}}</span>
                </div>
              </a-col>
            </a-row>

            <a-row :gutter="16" type="flex" justify="space-between" align="middle" class="m-0 p-16">
              <a-col :span="5">
                <div class="fs-14 fw-400 cr-gray">Metode Pembayaran</div>
                <div class="fs-14 fw-500 cr-black">{{item.payment_method}}</div>
              </a-col>
              <a-col :span="5">
                <div class="fs-14 fw-400 cr-gray">Tipe Pembayaran</div>
                <div class="fs-14 fw-500 cr-black">{{item.payment_type}}</div>
              </a-col>
              <a-col :span="5">
                <div v-if="item.purchase_status === 'Belum Dibayar'">
                  <div class="fs-14 fw-400 cr-gray">Batas Pembayaran</div>
                  <div class="fs-14 fw-500 cr-black">{{item.payment_limit.format('llll')}}</div>
                </div>
                <div v-if="item.purchase_status === 'Menunggu Verifikasi'">
                  <div class="fs-14 fw-400 cr-gray">Batas Pembayaran</div>
                  <div class="fs-14 fw-500 cr-black">{{item.payment_limit.format('llll')}}</div>
                </div>
                <div v-if="item.purchase_status === 'Kedaluwarsa'">
                  <div class="fs-14 fw-400 cr-gray">Batas Pembayaran</div>
                  <div class="fs-14 fw-500 cr-black">{{item.payment_limit.format('llll')}}</div>
                </div>
                <div v-if="item.purchase_status === 'Dibayar'">
                  <div class="fs-14 fw-400 cr-gray">Tanggal Pembayaran</div>
                  <div class="fs-14 fw-500 cr-black">{{item.payment_date.format('llll')}}</div>
                </div>
              </a-col>
              <a-col :span="9">
                <div class="d-flex align-items-center align-end">
                  <nuxt-link
                    v-if="item.purchase_status === 'Dibayar'"
                    to="/accounts/transaction/detail/receipt"
                    class="cr-primary fs-14"
                  >Lihat Detail</nuxt-link>
                  <nuxt-link
                    v-else
                    to="/accounts/transaction/detail/invoice"
                    class="cr-primary fs-14"
                  >Lihat Detail</nuxt-link>
                  <div v-if="item.purchase_status === 'Belum Dibayar'">
                    <a-divider type="vertical" />
                    <a-button
                      class="b-shadow b-radius ant-btn--action"
                      @click="nextConf"
                    >Bayar Sekarang</a-button>
                  </div>

                  <div v-if="item.purchase_status === 'Kedaluwarsa'">
                    <div>
                      <a-divider type="vertical" />
                      <a class="cr-red fs-14" @click="remove(index)">Hapus</a>
                    </div>
                  </div>
                </div>
              </a-col>
            </a-row>
          </div>
        </a-skeleton>
      </a-list-item>
    </a-list>
  </div>
</template>
<script>
const dataPembelian = [
  {
    order_number: "ATT-UMR-54021040019072938",
    products_categorie: "umrah",
    products_name:
      "Umrah Hemat September 2019 Program 9 Hari, keberangkatan Makassar",
    total_amount: 500000731,
    number_purchase: "40",
    order_date: moment("2019-07-10", "YYYY-MM-DD"),
    payment_date: moment("2019-07-10", "YYYY-MM-DD"),
    payment_limit: moment("2019-07-14", "YYYY-MM-DD"),
    purchase_status: "Belum Dibayar",
    payment_type: "DP",
    payment_method: "ATAM/Bank Transfer"
  },
  {
    order_number: "ATT-AKM-54021040019072938",
    products_categorie: "akomodasi",
    products_name: "3 Hari Makkah dan 4 Hari Madinah",
    total_amount: 20000731,
    number_purchase: "10",
    order_date: moment("2019-07-10", "YYYY-MM-DD"),
    payment_date: moment("2019-07-10", "YYYY-MM-DD"),
    payment_limit: moment("2019-07-14", "YYYY-MM-DD"),
    purchase_status: "Menunggu Verifikasi",
    payment_type: "Lunas",
    payment_method: "ATAM/Bank Transfer"
  },
  {
    order_number: "ATT-VSA-54021040019072938",
    products_categorie: "visa",
    products_name: "Visa Umrah September 2019",
    total_amount: 500731,
    number_purchase: "8",
    order_date: moment("2019-07-10", "YYYY-MM-DD"),
    payment_date: moment("2019-07-10", "YYYY-MM-DD"),
    payment_limit: moment("2019-07-14", "YYYY-MM-DD"),
    purchase_status: "Kedaluwarsa",
    payment_type: "Lunas",
    payment_method: "ATAM/Bank Transfer"
  },
  {
    order_number: "ATT-UMR-54021040019072938",
    products_categorie: "umrah",
    products_name:
      "Umrah Hemat September 2019 Program 9 Hari, keberangkatan Bandung",
    total_amount: 930000733,
    number_purchase: "20",
    order_date: moment("2019-07-10", "YYYY-MM-DD"),
    payment_date: moment("2019-07-10", "YYYY-MM-DD"),
    payment_limit: moment("2019-07-14", "YYYY-MM-DD"),
    purchase_status: "Dibayar",
    payment_type: "Lunas",
    payment_method: "Saldo Halopay"
  },
  {
    order_number: "ATT-TKT-54021040019072938",
    products_categorie: "tiket group",
    products_name: "Makassar (UPG) ke Jeddah (JED)",
    total_amount: 30000333,
    number_purchase: "4",
    order_date: moment("2019-07-10", "YYYY-MM-DD"),
    payment_date: moment("2019-07-10", "YYYY-MM-DD"),
    payment_limit: moment("2019-07-14", "YYYY-MM-DD"),
    purchase_status: "Dibayar",
    payment_type: "Lunas",
    payment_method: "Saldo Halopay"
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
      loading: true,
      dataPembelian,
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
    remove(index) {
      this.$delete(this.dataPembelian, index);
      this.$notification.open({
        message: "Berhasil Dihapus!",
        icon: (
          <a-icon type="check-circle" theme="filled" style="color: #43B02A" />
        )
      });
    },
    nextConf() {
      this.$router.push({ path: "/accounts/e-confirm" });
    }
  }
};
</script>