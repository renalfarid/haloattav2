<template>
  <div class="ant-transaction--mutation">
    <Empty
      v-if="!mutasi.length"
      :transaction="true"
      :label="'Anda tidak memiliki mutasi TopUp'"
    />

    <div v-else>
      <div class="fs-18 fw-500 cr-black">Mutasi TopUp Saldo</div>

      <a-card class="b-solid b-radius b-shadow mt-16">
        <a-table
          :columns="columns"
          :dataSource="mutasi"
          :rowKey="id"
          :pagination="pagination"
        >
          <span slot="tanggal_mutasi" slot-scope="text, record">{{
            moment(record.tanggal_mutasi).format("L")
          }}</span>
          <span slot="debit" slot-scope="text, record">{{
            record.debit | currency
          }}</span>
          <span slot="kredit" slot-scope="text, record">{{
            record.kredit | currency
          }}</span>
          <span slot="saldo" slot-scope="text, record">{{
            record.saldo | currency
          }}</span>
          <p slot="expandedRowRender" slot-scope="record" style="margin: 0">
            {{ record.keterangan_detail }}
          </p>
        </a-table>
      </a-card>
    </div>
  </div>
</template>
<script>
import Empty from "@/components/template/Empty";
import moment from "moment";
import axios from "axios";
const Cookie = process.client ? require("js-cookie") : undefined;

const columns = [
  {
    title: "Tanggal",
    dataIndex: "tanggal_mutasi",
    key: "tanggal_mutasi",
    scopedSlots: { customRender: "tanggal_mutasi" }
  },
  { title: "Kode Mutasi", dataIndex: "kode_mutasi", key: "kode_mutasi" },
  { title: "No Kwitansi", dataIndex: "kode_transaksi", key: "kode_transaksi" },
  {
    title: "Debit",
    className: "column-money",
    dataIndex: "debit",
    key: "debit",
    scopedSlots: { customRender: "debit" }
  },
  {
    title: "Kredit",
    className: "column-money",
    dataIndex: "kredit",
    key: "kredit",
    scopedSlots: { customRender: "kredit" }
  },
  {
    title: "Saldo",
    className: "column-money",
    dataIndex: "saldo",
    key: "saldo",
    scopedSlots: { customRender: "saldo" }
  }
];

export default {
  middleware: "authenticated",
  layout: "accounts",
  name: "mutationHalopay",
  components: { Empty },
  head() {
    return {
      title: "Mutasi Top Up Halopay - Haloatta"
    };
  },
  data() {
    return {
      dateFormat: "YYYY/MM/DD",
      mutasi: [],
      columns,
      pagination: {
        onChange: page => {
          this.loadMutasi(page);
          // console.log(page);
        },
        pageSize: 10,
        total: 0
      }
    };
  },
  mounted() {
    this.loadMutasi();
  },
  methods: {
    moment,
    loadMutasi(page) {
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
        .post(process.env.baseUrl + "halopay/mutasi", data, config)
        .then(response => {
          if (response.data.status == 200) {
            this.mutasi = response.data.data.data;
            this.pagination.pageSize = response.data.data.per_page;
            this.pagination.total = response.data.data.total;
            //console.log(this.mutasi, "ini");
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
<style>
th.column-money,
td.column-money {
  text-align: right !important;
}
</style>
