<template>
  <div class="ant-layout--accounts-management-seat">
    <div class="mb-16">
      <nuxt-link to="/accounts/departure" class="fs-14 fw-400 cr-gray">
        <a-icon type="left" class="mr-8"/>Kembali
      </nuxt-link>
    </div>
    <a-card :bordered="false" class="b-shadow b-solid b-radius mb-16">
      <div slot="title">Detail Produk</div>
      <div slot="extra" class="fs-16 fw-500 cr-black">No. Transaksi PUHA12345678</div>
      <a-row :gutter="8">
        <a-col :span="12">
          <div class="d-flex align-items-center">
            <div class="mr-8">
              <a-avatar
                style="backgroundColor: rgba(15, 172, 243, .1);padding: 2px"
                src="/icons/search/tabs/color/umrah.svg"
              />
            </div>
            <div class="fs-14 fw-500 cr-black f-default">
              <span>Paket Umrah Exclusive September 2019</span>,
              <br>
              <span>Keberangkatan Makassar</span>
            </div>
          </div>
        </a-col>
        <a-col :span="4">
          <div class="fs-14 fw-400 cr-gray">Tanggal Keberangkatan</div>
          <div class="fs-14 fw-500 cr-black">20 September 2019</div>
        </a-col>
        <a-col :span="4" class="text-right">
          <div class="fs-14 fw-400 cr-gray">Program Hari</div>
          <div class="fs-14 fw-500 cr-black">Program 9 Hari</div>
        </a-col>
        <a-col :span="4" class="text-right">
          <div class="fs-14 fw-400 cr-gray">Jumlah Pax</div>
          <div class="fs-14 fw-500 cr-black">4 Pax</div>
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
                <div class="mr-16">
                  <a-avatar
                    style="backgroundColor: rgba(15, 172, 243, .1);color: #0FACF3"
                  >{{item.key}}</a-avatar>
                </div>
                <div>
                  <div class="fs-14 fw-400 cr-gray">Kode Booking</div>
                  <div class="fs-14 fw-500 cr-black">{{item.code_book}}</div>
                </div>
              </div>
            </a-col>
            <a-col :span="8">
              <div class="fs-14 fw-400 cr-gray">Status Berkas</div>
              <div class="fs-14 fw-500 cr-green" v-if="item.status === 'Lengkap'">{{item.status}}</div>
              <div
                class="fs-14 fw-500 cr-red"
                v-if="item.status === 'Belum Lengkap'"
              >{{item.status}}</div>
            </a-col>
            <a-col :span="4" class="text-right">
              <nuxt-link to="/accounts/jamaah/formulir">
                <span class="fs-14 fw-500 cr-green">
                  Lihat Formulir
                  <a-icon type="right" class="ml-8"/>
                </span>
              </nuxt-link>
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
    code_book: "ATT-UMR-68559347219072952",
    status: "Lengkap"
  },
  {
    key: 2,
    code_book: "ATT-UMR-68559347219072952",
    status: "Belum Lengkap"
  },
  {
    key: 3,
    code_book: "ATT-UMR-68559347219072952",
    status: "Belum Lengkap"
  },
  {
    key: 4,
    code_book: "ATT-UMR-68559347219072952",
    status: "Belum Lengkap"
  }
];
export default {
  middleware: "authenticated",
  layout: "accounts",
  name: "mitraDaftarSeat",
  head() {
    return {
      title: "Daftar Pemberangkatan - Kembangkan Bisnis Umrah Anda | Haloatta"
    };
  },

  data() {
    return {
      dataSeat
    };
  }
};
</script>