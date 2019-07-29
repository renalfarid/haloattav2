<template>
  <div class="ant-layout--accounts-management-seat">
    <div class="fs-18 fw-500 cr-black">Manajemen Seat</div>
    <div class="fs-14 fw-400 cr-gray">Lengkapi berkas formulir jemaah anda</div>

    <a-list itemLayout="horizontal" :pagination="pagination" :dataSource="dataSeat">
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
              <div class="fs-12 fw-400 cr-gray text-uppercase">Program Hari</div>
              <div class="fs-15 fw-500 f-default">
                {{item.program}}
              </div>
            </a-col>
            <a-col :span="6">
              <div class="cr-gray fs-12 fw-400 text-uppercase">Tanggal Keberangkatan</div>
              <div class="cr-black fs-15 fw-500 f-default">{{item.date}}</div>
            </a-col>
            <a-col :span="6" class="text-right">
              <div class="cr-gray fs-12 fw-400 text-uppercase">Jumlah Pax</div>
              <div class="cr-black fs-15 fw-500 f-default">{{item.pax}}</div>
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
            <a-col :span="6">
              <div class="fs-12 fw-400 cr-gray text-uppercase">Sudah Dipesan (Booked)</div>
              <div class="fs-14 fw-500 cr-black f-default">{{item.booked}}</div>
            </a-col>
            <a-col :span="6">
              <div class="fs-12 fw-400 cr-gray text-uppercase">Tersedia (Available)</div>
              <div class="fs-14 fw-500 cr-black f-default">{{item.available}}</div>
            </a-col>
            <a-col :span="12" class="text-right">
              <a-button class="b-shadow b-radius" type="primary"><nuxt-link to="/accounts/mitra/management/seat/pax-list">Lihat Detail Pax</nuxt-link></a-button>
            </a-col>
          </a-row>
        </div>
      </a-list-item>
    </a-list>
  </div>
</template>
<script>
const dataSeat = [
  {
    no_transaction: "PUHA12345678",
    pax: "4",
    date: "05 Januari 2019",
    program: "Program 9 Hari",
    available: "1",
    booked: "3"
  },
  {
    no_transaction: "PUHA12345678",
    pax: "4",
    date: "10 Januari 2019",
    program: "Program 9 Hari",
    available: "2",
    booked: "2"
  }
];
export default {
  layout: "accounts",
  name: "mitraManajemenSeat",
  head() {
    return {
      title: "Manajemen Seat - Kembangkan Bisnis Umrah Anda | Haloatta"
    };
  },

  data() {
    return {
      dataSeat,
      pagination: {
        onChange: page => {
          console.log(page);
        },
        pageSize: 10
      }
    };
  }
};
</script>