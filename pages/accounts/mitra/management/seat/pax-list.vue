<template>
  <div class="ant-layout--accounts-management-seat">
    <div class="mb-16">
      <nuxt-link to="/accounts/mitra/management/seat" class="fs-14 fw-400 cr-gray">
        <a-icon type="left" class="mr-8" />Kembali
      </nuxt-link>
    </div>
    <a-card :bordered="false" class="b-shadow b-solid b-radius mb-16">
      <div slot="title">Detail Produk</div>
      <div slot="extra" class="fs-16 fw-500 cr-black">No. Transaksi PUHA12345678</div>
      <a-row :gutter="8">
        <a-col :span="12">
          <div class="d-flex align-items-center">
            <div class="mr-8">
              <a-avatar class="p-8" style="backgroundColor: #0FACF3" src="/icons/kaabah.png" />
            </div>
            <div
              class="fs-15 fw-500 cr-black f-default"
            >Paket Umrah September 2019, Keberangkatan Makassar</div>
          </div>
        </a-col>
        <a-col :span="4">
          <div class="fs-12 fw-400 cr-gray text-uppercase">Tanggal Keberangkatan</div>
          <div class="cr-black fs-14 fw-500 f-default">20 September 2019</div>
        </a-col>
        <a-col :span="4" class="text-right">
          <div class="fs-12 fw-400 cr-gray text-uppercase">Program Hari</div>
          <div class="cr-black fs-14 fw-500 f-default">Program 9 Hari</div>
        </a-col>
        <a-col :span="4" class="text-right">
          <div class="fs-12 fw-400 cr-gray text-uppercase">Jumlah Pax</div>
          <div class="cr-black fs-14 fw-500 f-default">4 Pax</div>
        </a-col>
      </a-row>
    </a-card>

    <div class="fs-16 fw-500 cr-black">Informasi Pax Anda</div>
    <a-list itemLayout="horizontal" :dataSource="dataSeat">
      <a-list-item
        slot="renderItem"
        slot-scope="item, index"
        :key="index"
        class="b-solid b-radius b-shadow mt-16 mb-16 p-0"
        style="backgroundColor: #ffffff"
      >
        <div class="w-100">
          <a-row :gutter="16" type="flex" justify="space-around" align="middle" class="m-0 p-24">
            <a-col :span="12">
              <div class="d-flex align-items-center">
                <div class="mr-8">
                  <a-avatar>{{item.key}}</a-avatar>
                </div>
                <div>
                  <div class="fs-12 fw-400 cr-gray text-uppercase">Kode Booking</div>
                  <div class="cr-black fs-14 fw-500 f-default">{{item.code_book}}</div>
                </div>
              </div>
            </a-col>
            <a-col :span="8">
              <div class="cr-gray fs-12 fw-400 text-uppercase">Status</div>
              <div class="cr-green fs-15 fw-500 f-default" v-if="item.status === 'Tersedia'">{{item.status}} ({{item.desc}})</div>
              <div class="cr-red fs-15 fw-500 f-default" v-if="item.status === 'Sudah Dipesan'">{{item.status}} ({{item.desc}})</div>
            </a-col>
            <a-col :span="4" class="text-right">
              <a-button class="b-shadow b-radius" type="primary" block v-if="item.status === 'Tersedia'">
                <nuxt-link to="/accounts/mitra/jamaah/formulir">Isi Formulir Jamaah</nuxt-link>
              </a-button>
              <a-button class="b-shadow b-radius" type="primary" block ghost v-if="item.status === 'Sudah Dipesan'">
                <nuxt-link to="/accounts/mitra/jamaah/berkas">Lihat Berkas Jamaah</nuxt-link>
              </a-button>
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
    key: 1,
    code_book: "PUHA12345678",
    status: "Tersedia",
    desc: "Available"
  },
  {
    key: 2,
    code_book: "PUHA77345678",
    status: "Sudah Dipesan",
    desc: "Booked"
  },
  {
    key: 3,
    code_book: "PUHA77345777",
    status: "Sudah Dipesan",
    desc: "Booked"
  },
  {
    key: 4,
    code_book: "PUHA77345555",
    status: "Sudah Dipesan",
    desc: "Booked"
  }
];
export default {
  layout: "accounts",
  name: "mitraDaftarSeat",
  head() {
    return {
      title: "Daftar Seat - Kembangkan Bisnis Umrah Anda | Haloatta"
    };
  },

  data() {
    return {
      dataSeat
    };
  }
};
</script>