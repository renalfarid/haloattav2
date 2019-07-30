<template>
  <div class="ant-layout--accounts-management-seat">
    <div class="fs-18 fw-500 cr-black">Manajemen Seat</div>
    <div class="fs-16 fw-400 cr-gray">Lengkapi berkas Formulir Jamaah Anda</div>

    <a-list itemLayout="horizontal" :pagination="pagination" :dataSource="dataSeat">
      <a-list-item
        slot="renderItem"
        slot-scope="item, index"
        :key="index"
        class="b-solid b-radius b-shadow mt-16 mb-16 p-0"
        style="backgroundColor: #ffffff"
      >
        <a-skeleton :loading="loading" active>
          <div class="w-100">
            <a-row :gutter="16" class="m-0 p-16">
              <a-col :span="6">
                <div class="fs-14 fw-400 cr-gray">No. Transaksi</div>
                <div class="fs-14 fw-500 cr-black">{{item.no_transaction}}</div>
              </a-col>
              <a-col :span="6">
                <div class="fs-14 fw-400 cr-gray">Program Hari</div>
                <div class="fs-15 fw-500">{{item.program}}</div>
              </a-col>
              <a-col :span="6">
                <div class="fs-14 fw-400 cr-gray">Tanggal Keberangkatan</div>
                <div class="fs-15 fw-500 cr-black">{{item.date}}</div>
              </a-col>
              <a-col :span="6" class="text-right">
                <div class="fs-14 fw-400 cr-gray">Jumlah Pax</div>
                <div class="fs-15 fw-500 cr-black">{{item.pax}} Pax</div>
              </a-col>
            </a-row>

            <a-row
              :gutter="16"
              type="flex"
              justify="space-between"
              align="middle"
              class="m-0 p-16"
              style="borderTop: 1px solid #f5f5f5"
            >
              <a-col :span="6">
                <div class="fs-14 fw-400 cr-gray">Sudah Dipesan (Booked)</div>
                <div class="fs-15 fw-500 cr-black">{{item.booked}} Pax</div>
              </a-col>
              <a-col :span="6">
                <div class="fs-14 fw-400 cr-gray">Tersedia (Available)</div>
                <div class="fs-15 fw-500 cr-black">{{item.available}} Pax</div>
              </a-col>
              <a-col :span="12" class="text-right">
                <a-button class="b-shadow b-radius" type="primary">
                  <nuxt-link to="/accounts/mitra/management/seat/pax-list">Lihat Detail</nuxt-link>
                </a-button>
              </a-col>
            </a-row>
          </div>
        </a-skeleton>
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
      loading: true,
      dataSeat,
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
  }
};
</script>