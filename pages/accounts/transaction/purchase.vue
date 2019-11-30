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

    <a-list itemLayout="horizontal" :pagination="pagination" :dataSource="dataHistory">
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
                <div class="fs-14 fw-500 cr-black">{{item.nomor_transaksi}}</div>
              </a-col>
              <a-col :span="7">
                <div class="cr-gray fs-14 fw-400">Jumlah Pesanan</div>
                <div class="fs-14 fw-500 cr-black">{{item.pax}} pax</div>
              </a-col>
              <a-col :span="7" class="text-right">
                <div class="fs-14 fw-400 cr-gray">Jumlah Pembayaran</div>
                <div class="fs-14 fw-500 cr-black">-/tidak ada</div>
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
                      v-if="item.tipe_produk === 'Sikopatuh'"
                      style="backgroundColor: rgb(15, 172, 243);padding: 2px"
                      src="/icons/search/tabs/white/umrah.svg"
                    />
                    <a-avatar
                      v-if="item.tipe_produk === 'UMRAH REGULER'"
                      style="backgroundColor: rgb(15, 172, 243);padding: 2px"
                      src="/icons/search/tabs/white/umrah.svg"
                    />
                    <a-avatar
                      v-if="item.tipe_produk === 'tiket'"
                      style="backgroundColor: rgb(244, 54, 98);padding: 4px"
                      src="/icons/search/tabs/white/ticket.svg"
                    />
                    <a-avatar
                      v-if="item.tipe_produk === 'akomodasi'"
                      style="backgroundColor: rgb(5, 203, 176);padding: 4px"
                      src="/icons/search/tabs/white/accommodation.svg"
                    />
                    <a-avatar
                      v-if="item.tipe_produk === 'visa'"
                      style="backgroundColor: rgb(82, 196, 26);padding: 4px"
                      src="/icons/search/tabs/white/visa.svg"
                    />
                    <a-avatar
                      v-if="item.tipe_produk === 'insurance'"
                      style="backgroundColor: rgb(255, 124, 10);padding: 4px"
                      src="/icons/search/tabs/white/insurance.svg"
                    />
                  </div>
                  <div class="fs-14 fw-500 cr-black f-default">{{item.nama_paket}}</div>
                </div>
              </a-col>
              <a-col :span="7">
                <div class="fs-14 fw-400 cr-gray">Tanggal Pemesanan</div>
                <div
                  class="fs-14 fw-500 cr-black"
                >{{moment(item.tanggal_pemesanan, "YYYY-MM-DD").format('LL')}}</div>
              </a-col>
              <a-col :span="7" class="text-right">
                <div class="fs-14 fw-400 cr-gray">Status Pembayaran</div>
                <div class="fs-14 fw-500 cr-red" v-if="item.status_bayar === 'Menunggu Pembayaran'">
                  <span>{{item.status_bayar}}</span>
                </div>
                <div class="fs-14 fw-500 cr-red" v-if="item.status_bayar === 'Expired'">
                  <span>{{item.status_bayar}}</span>
                </div>
                <div
                  class="fs-14 fw-500 cr-orange"
                  v-if="item.status_bayar === 'Menunggu Approval'"
                >
                  <span>{{item.status_bayar}}</span>
                </div>
                <div class="fs-14 fw-500 cr-green" v-if="item.status_bayar === 'Lunas'">
                  <span>{{item.status_bayar}}</span>
                </div>
              </a-col>
            </a-row>

            <a-row :gutter="16" type="flex" justify="space-between" align="middle" class="m-0 p-16">
              <a-col :span="5">
                <div class="fs-14 fw-400 cr-gray">Metode Pembayaran</div>
                <div
                  class="fs-14 fw-500 cr-black"
                >{{item.metode_pembayaran ? item.metode_pembayaran : '-'}}</div>
              </a-col>
              <a-col :span="5">
                <div class="fs-14 fw-400 cr-gray">Tipe Pembayaran</div>
                <div
                  class="fs-14 fw-500 cr-black"
                >{{item.jenis_pembayaran ? item.jenis_pembayaran : '-'}}</div>
              </a-col>
              <a-col :span="5">
                <div v-if="item.status_bayar === 'Menunggu Pembayaran'">
                  <div class="fs-14 fw-400 cr-gray">Batas Pembayaran</div>
                  <div
                    class="fs-14 fw-500 cr-black"
                  >{{moment(item.limit_waktu_pembayaran, "YYYY-MM-DD").format('LL')}}</div>
                </div>
                <div v-if="item.status_bayar === 'Menunggu Approval'">
                  <div class="fs-14 fw-400 cr-gray">Batas Pembayaran</div>
                  <div
                    class="fs-14 fw-500 cr-black"
                  >{{moment(item.limit_waktu_pembayaran, "YYYY-MM-DD").format('LL')}}</div>
                </div>
                <div v-if="item.status_bayar === 'Expired'">
                  <div class="fs-14 fw-400 cr-gray">Batas Pembayaran</div>
                  <div
                    class="fs-14 fw-500 cr-black"
                  >{{moment(item.limit_waktu_pembayaran, "YYYY-MM-DD").format('LL')}}</div>
                </div>
                <div v-if="item.status_bayar === 'Lunas'">
                  <div class="fs-14 fw-400 cr-gray">Tanggal Pembayaran</div>
                  <div
                    class="fs-14 fw-500 cr-black"
                  >{{moment(item.limit_waktu_pembayaran, "YYYY-MM-DD").format('LL')}}</div>
                </div>
              </a-col>
              <a-col :span="9">
                <div class="d-flex align-items-center align-end">
                  <nuxt-link
                    v-if="item.status_bayar === 'Lunas'"
                    to="/accounts/transaction/detail/receipt"
                    class="cr-primary fs-14"
                  >Lihat Detail</nuxt-link>
                  <nuxt-link
                    v-else
                    to="/accounts/transaction/detail/invoice"
                    class="cr-primary fs-14"
                  >Lihat Detail</nuxt-link>
                  <div v-if="item.status_bayar === 'Menunggu Pembayaran'">
                    <a-divider type="vertical" />
                    <!-- <a-button
                      class="b-shadow b-radius ant-btn--action"
                      @click="nextConf"
                    >Bayar Sekarang</a-button>-->
                    <nuxt-link
                      :to="
                        '/accounts/e-confirm?notrans=' + item.nomor_transaksi
                      "
                    >Bayar Sekarang</nuxt-link>
                  </div>

                  <div v-if="item.status_bayar === 'Expired'">
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
import moment from "moment";
const Cookie = process.client ? require("js-cookie") : undefined;
import axios from "axios";

export default {
  middleware: "authenticated",
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
      pagination: {
        onChange: page => {
          console.log(page);
        },
        pageSize: 10
      },
      dataHistory: []
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
    },
    async getdata() {
      const token = Cookie.get("auth");
      const config = {
        headers: {
          Authorization: "Bearer " + token
        }
      };

      axios
        .post(process.env.baseUrl + "transaksi/history", [], config)
        .then(response => {
          if (response.data.status == 200) {
            this.dataHistory = response.data.data.data;
          } else {
            this.$message.error(response.data.msg);
          }
        })
        .catch(() => {
          this.$message.success("Salah");
        });
    }
  }
};
</script>