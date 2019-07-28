<template>
  <div class="ant-fee--withdraw">
    <div class="fs-18 fw-500 cr-black">Daftar Pengajuan Fee</div>

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
            <a-col :span="6">
              <div class="fs-12 fw-400 cr-gray text-uppercase">No. Transaksi</div>
              <div class="cr-black fs-14 fw-500 f-default">{{item.no_transaction}}</div>
            </a-col>
            <a-col :span="6">
              <div class="cr-gray fs-12 fw-400 text-uppercase">Nominal Pengajuan</div>
              <div class="cr-black fs-15 fw-500 f-default">Rp {{item.nominal}}</div>
            </a-col>
            <a-col :span="6">
              <div class="cr-gray fs-12 fw-400 text-uppercase">Tanggal Pengajuan</div>
              <div class="cr-black fs-15 fw-500 f-default">12 Juli 2019</div>
            </a-col>
            <a-col :span="6" class="text-right">
              <div class="fs-12 fw-400 cr-gray text-uppercase">Status Pengajuan</div>
              <div
                class="fs-15 fw-500 f-default cr-orange"
                v-if="item.status === 'Menunggu Verifikasi'"
              >
                <span>{{item.status}}</span>
              </div>
              <div class="fs-15 fw-500 f-default cr-green" v-if="item.status === 'Berhasil'">
                <span>{{item.status}}</span>
              </div>
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
            <a-col :span="12">
              <div class="fs-12 fw-400 cr-gray text-uppercase">Keterangan</div>
              <div class="fs-14 fw-500 cr-black f-default">{{item.desc}}</div>
            </a-col>
            <a-col :span="12" class="text-right">
              <div class="fs-12 fw-400 cr-gray text-uppercase">Rekening Tujuan</div>
              <div class="cr-black fs-14 fw-500 f-default">{{item.bank}}</div>
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
    bank: "BCA (1234567890) - Dedi Abdullah, KCP Makassar",
    desc: "Permohonan Pengajuan Fee Saya",
    status: "Menunggu Verifikasi"
  },
  {
    no_transaction: "PUHA12345678",
    nominal: "9.000.000",
    bank: "BNI (66677789099) - Dedi Abdullah, KCP Makassar",
    desc: "Permohonan Pengajuan Fee Saya",
    status: "Menunggu Verifikasi"
  },
  {
    no_transaction: "PUHA12345678",
    nominal: "80.000.000",
    bank: "BRI (999977878655) - Dedi Abdullah, KCP Makassar",
    desc: "Permohonan Pengajuan Fee Saya",
    status: "Menunggu Verifikasi"
  },
  {
    no_transaction: "PUHA12345678",
    nominal: "30.000.000",
    bank: "Mandiri (152667778889) - Dedi Abdullah, KCP Makassar",
    desc: "Permohonan Pengajuan Fee Saya",
    status: "Berhasil"
  }
];
export default {
  layout: "accounts",
  name: "feeWithdraw",
  head() {
    return {
      title: "Daftar Pengajuan Fee - Haloatta"
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
  methods: {}
};
</script>