<template>
  <div class="ant-transaction--halopay">
    <div class="fs-18 fw-500 cr-black">Semua Transaksi TopUp Saldo</div>

    <a-list itemLayout="horizontal" :pagination="pagination" :dataSource="dataTopup">
      <a-list-item
        slot="renderItem"
        slot-scope="item, index"
        :key="index"
        class="b-solid b-radius b-shadow mt-16 mb-16 p-0"
        style="backgroundColor: #ffffff"
      >
        <div class="w-100">
          <a-row :gutter="16" class="m-0 p-16">
            <a-col :span="8">
              <div class="fs-12 fw-400 cr-gray text-uppercase">No. Transaksi</div>
              <div class="cr-black fs-14 fw-500 f-default">{{item.no_transaction}}</div>
            </a-col>
            <a-col :span="8">
              <div class="cr-gray fs-12 fw-400 text-uppercase">Nominal Top Up</div>
              <div class="cr-black fs-15 fw-500 f-default">Rp {{item.nominal}}</div>
            </a-col>
            <a-col :span="8" class="text-right">
              <div class="fs-12 fw-400 cr-gray text-uppercase">Bank Tujuan</div>
              <div class="cr-black fs-15 fw-500 f-default">{{item.bank}}</div>
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
              <div class="d-flex align-items-start">
                <div class="mr-8">
                  <a-avatar style="backgroundColor: #0FACF3" icon="wallet" />
                </div>
                <div>
                  <div class="fs-12 fw-400 cr-gray text-uppercase">Batas Pembayaran</div>
                  <div class="fs-15 fw-500 cr-black f-default">{{item.batas_pembayaran}}</div>
                </div>
              </div>
            </a-col>
            <a-col :span="8">
              <div class="fs-12 fw-400 cr-gray text-uppercase">Status Pemesanan</div>
              <div
                class="fs-15 fw-500 f-default cr-red"
                v-if="item.status === 'Menunggu Pembayaran'"
              >
                <span>{{item.status}}</span>
              </div>
              <div class="fs-15 fw-500 f-default cr-red" v-if="item.status === 'Kedaluwarsa'">
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
            <a-col :span="8" class="text-right">
              <div class="d-flex align-items-center align-end">
                <div v-if="item.status === 'Menunggu Pembayaran'">
                  <a-button
                    class="b-shadow b-radius ant-btn--action"
                    @click="nextConf"
                  >Konfirmasi Pembayaran</a-button>
                </div>

                <div v-if="item.status === 'Kedaluwarsa'">
                  <a-button class="b-shadow b-radius" type="danger" @click="remove(index)" ghost>Hapus</a-button>
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
const dataTopup = [
  {
    no_transaction: "PUHA12345678",
    nominal: "300.000",
    bank: "BCA (1234567890) - PT. ATTAUBAH TRAVEL AMANAH, KCP Ratulangi",
    batas_pembayaran: "12 September 2019",
    status: "Menunggu Pembayaran"
  },
  {
    no_transaction: "PUHA12345678",
    nominal: "9.000.000",
    bank: "BNI (66677789099) - PT. ATTAUBAH TRAVEL AMANAH, KCP Ratulangi",
    batas_pembayaran: "16 September 2019",
    status: "Menunggu Verifikasi"
  },
  {
    no_transaction: "PUHA12345678",
    nominal: "80.000.000",
    bank: "BRI (999977878655) - PT. ATTAUBAH TRAVEL AMANAH, KCP Ratulangi",
    batas_pembayaran: "16 September 2019",
    status: "Kedaluwarsa"
  },
  {
    no_transaction: "PUHA12345678",
    nominal: "30.000.000",
    bank: "Mandiri (152667778889) - PT. ATTAUBAH TRAVEL AMANAH, KCP Ratulangi",
    batas_pembayaran: "16 September 2019",
    status: "Lunas"
  }
];
export default {
  layout: "accounts",
  name: "transactionHalopay",
  head() {
    return {
      title: "Semua Transaksi Top Up Halopay - Haloatta"
    };
  },
  data() {
    return {
      dataTopup,
      pagination: {
        onChange: page => {
          console.log(page);
        },
        pageSize: 10
      }
    };
  },
  methods: {
    remove(index) {
      this.$delete(this.dataTopup, index);
      this.$notification.open({
        message: "Berhasil Menghapus!",
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