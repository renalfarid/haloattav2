<template>
  <div class="ant-transaction--mutation">
    <div class="fs-18 fw-500 cr-black">Mutasi TopUp Saldo</div>

    <a-card class="b-solid b-radius b-shadow mt-16">
      <a-table :columns="columns" :dataSource="data">
        <p slot="expandedRowRender" slot-scope="record" style="margin: 0">{{record.description}}</p>
      </a-table>
    </a-card>
  </div>
</template>
<script>
const columns = [
  { title: "Kode Mutasi", dataIndex: "code", key: "code" },
  { title: "Kode Transaksi", dataIndex: "transaction", key: "transaction" },
  { title: "Debit", dataIndex: "debit", key: "debit" },
  { title: "Kredit", dataIndex: "kredit", key: "kredit" },
  { title: "Tanggal", dataIndex: "date", key: "date" }
];
const data = [
  {
    key: 1,
    code: "ATT19073914MTS",
    transaction: "B-ATT-19071104n2EFW",
    debit: "Rp 0",
    kredit: "Rp 30,000,000",
    date: "2019-07-25 01:11:04",
    description: "PEMBAYARAN DP - COBA COBA LAGI 1 #ATT-UMH-90775486519072550"
  }
];
export default {
  middleware: "authenticated",
  layout: "accounts",
  name: "mutationHalopay",
  head() {
    return {
      title: "Mutasi Top Up Halopay - Haloatta"
    };
  },
  data() {
    return {
      data,
      columns
    };
  },
  methods: {}
};
</script>