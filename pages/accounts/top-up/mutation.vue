<template>
  <div class="ant-transaction--mutation">
    <div class="fs-18 fw-500 cr-black">Mutasi TopUp Saldo</div>

    <a-card class="b-solid b-radius b-shadow mt-16">
      <a-table :columns="columns" :dataSource="mutasi" :rowKey="id">
        <span slot="debit" slot-scope="text, record">{{ record.debit | currency }}</span>
        <span slot="kredit" slot-scope="text, record">{{ record.kredit | currency }}</span>
        <span slot="tanggal_mutasi" slot-scope="text, record">{{ moment(record.tanggal_mutasi).format("LL") }}</span>
        <p slot="expandedRowRender" slot-scope="record" style="margin: 0">{{record.keterangan_detail}}</p>
      </a-table>
    </a-card>
  </div>
</template>
<script>
import moment from "moment";
import axios from "axios";
const Cookie = process.client ? require("js-cookie") : undefined;

const columns = [
  { title: "Kode Mutasi", dataIndex: "kode_mutasi", key: "kode_mutasi" },
  { title: "Kode Transaksi", dataIndex: "kode_transaksi", key: "kode_transaksi" },
  { title: "Debit", className: 'column-money', dataIndex: "debit", key: "debit", scopedSlots: { customRender: 'debit' } },
  { title: "Kredit", className: 'column-money', dataIndex: "kredit", key: "kredit", scopedSlots: { customRender: 'kredit' } },
  { title: "Tanggal", dataIndex: "tanggal_mutasi", key: "tanggal_mutasi", scopedSlots: { customRender: 'tanggal_mutasi' } }
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
      dateFormat: "YYYY/MM/DD",
      mutasi: [],
      columns,
      pagination: {
        onChange: page => {
          this.getdata(page);
          // console.log(page);
        },
        pageSize: 10,
        total: 0
      },
    };
  },
  mounted(){

    this.loadMutasi();

  },
  methods: {
    moment,
     loadMutasi(page){
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