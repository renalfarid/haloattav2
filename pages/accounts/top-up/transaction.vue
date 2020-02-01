<template>
  <div class="ant-transaction--halopay">
    <Empty
      :transaction="true"
      :label="'Anda tidak memiliki transaksi TopUp'"
      v-if="!historyTopup.length"
    />

    <div v-else>
      <div class="fs-18 fw-500 cr-black">Semua Transaksi TopUp Saldo</div>

      <a-list
        itemLayout="horizontal"
        :pagination="pagination"
        :dataSource="historyTopup"
      >
        <a-list-item
          slot="renderItem"
          slot-scope="item, index"
          :key="index"
          class="b-solid b-radius b-shadow mt-16 mb-16 p-0"
          style="backgroundColor: #ffffff"
        >
          <a-skeleton :loading="loading" active avatar>
            <div class="w-100">
              <a-row :gutter="16" class="m-0 p-16">
                <a-col :span="6">
                  <div class="fs-14 fw-400 cr-gray">No. Transaksi</div>
                  <div class="fs-14 fw-500 cr-black">{{ item.kode }}</div>
                </a-col>
                <a-col :span="6">
                  <div class="fs-14 fw-400 cr-gray">Nominal Top Up</div>
                  <div class="fs-14 fw-500 cr-black">
                    {{ item.nominal_transfer | currency }}
                  </div>
                </a-col>
                <a-col :span="12" class="text-right">
                  <div class="fs-14 fw-400 cr-gray">Bank Tujuan</div>
                  <div class="fs-14 fw-500 cr-black">
                    {{ item.bank_penerima }} No Rek : {{ item.kode_bank }}
                  </div>
                </a-col>
              </a-row>

              <a-row
                :gutter="16"
                type="flex"
                justify="space-around"
                align="middle"
                class="m-0 p-16"
                style="borderTop: 1px solid #f5f5f5"
              >
                <a-col :span="6">
                  <div class="d-flex align-items-center">
                    <div class="mr-8">
                      <a-avatar
                        style="backgroundColor: rgba(15, 172, 243, .1);color: #0FACF3"
                        icon="wallet"
                      />
                    </div>
                    <div>
                      <div class="fs-14 fw-400 cr-gray">Tanggal Konfirmasi</div>
                      <div class="fs-14 fw-500 cr-black">
                        {{ moment(item.tanggal_konfirmasi).format("L") }}
                      </div>
                    </div>
                  </div>
                </a-col>
                <a-col :span="6">
                  <div class="fs-14 fw-400 cr-gray">Status Pembayaran</div>
                  <div class="fs-14 fw-500 cr-red">
                    <span>{{ item.status }}</span>
                  </div>
                </a-col>
                <a-col :span="12" class="text-right">
                  <div class="d-flex align-items-center align-end">
                    <div v-if="item.status === 'Belum Dibayar'">
                      <a-button
                        class="b-shadow b-radius ant-btn--action"
                        @click="nextConf"
                        >Bayar Sekarang</a-button
                      >
                    </div>

                    <div v-if="item.status === 'Kedaluwarsa'">
                      <a class="fs-14 fw-500 cr-red" @click="remove(index)"
                        >Hapus</a
                      >
                    </div>
                  </div>
                </a-col>
              </a-row>
            </div>
          </a-skeleton>
        </a-list-item>
      </a-list>
    </div>
  </div>
</template>

<script>
import Empty from "@/components/template/Empty";
import moment from "moment";
import axios from "axios";
const Cookie = process.client ? require("js-cookie") : undefined;

export default {
  middleware: "authenticated",
  layout: "accounts",
  name: "transactionHalopay",
  components: { Empty },
  head() {
    return {
      title: "Semua Transaksi Top Up Halopay - Haloatta"
    };
  },
  data() {
    return {
      dateFormat: "YYYY/MM/DD",
      loading: true,
      historyTopup: [],
      pagination: {
        onChange: page => {
          this.loadHistory(page);
        },
        pageSize: 10
      }
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1200);
    this.loadHistory();
  },
  methods: {
    moment,
    loadHistory(page) {
      const token = Cookie.get("auth");
      const config = {
        headers: {
          Authorization: "Bearer " + token
        }
      };

      let data = {
        page: page,
        jenis_transaksi: "",
        tipe_transaksi: ""
      };

      axios
        .post(process.env.baseUrl + "halopay/history-topup", data, config)
        .then(response => {
          if (response.data.status == 200) {
            this.historyTopup = response.data.data.data;
            this.pagination.pageSize = response.data.data.per_page;
            this.pagination.total = response.data.data.total;
          } else {
            this.$message.error(response.data.msg);
          }
        })
        .catch(() => {
          this.$message.success("Salah");
        });
    },
    remove(index) {
      this.$delete(this.dataTopup, index);
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
