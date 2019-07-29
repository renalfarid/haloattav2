<template>
  <div class="ant-layout--accounts-management">
    <div class="fs-18 fw-500 cr-black">Manajemen Penjualan Paket Umrah</div>
    <div class="fs-16 fw-400 cr-gray">Kembangkan bisnis umrah anda</div>

    <a-list
      itemLayout="horizontal"
      :pagination="pagination"
      :grid="{ gutter: 16, xs: 1, sm: 1, md: 1, lg: 1, xl: 1, xxl: 1 }"
      :dataSource="dataPenjualan"
    >
      <a-list-item
        slot="renderItem"
        slot-scope="item, index"
        :key="index"
        class="b-solid b-radius b-shadow mt-16 mb-8 p-0"
        style="backgroundColor: #ffffff"
      >
        <a-row type="flex" class="w-100">
          <a-col :span="5">
            <div class="ant-images">
              <div class="ant-images--product" :style="{backgroundImage: `url(${item.images})`}"></div>
            </div>
          </a-col>
          <a-col :span="19">
            <a-row class="m-0 p-16">
              <a-col :span="10">
                <div class="fs-12 fw-400 cr-gray text-uppercase">No. Produk</div>
                <div class="cr-black fs-15 fw-500 f-default">{{item.no_product}}</div>
              </a-col>
              <a-col :span="5">
                <div class="cr-gray fs-12 fw-400 text-uppercase">Jumlah Pax</div>
                <div class="cr-black fs-15 fw-500 f-default">{{item.jumlah_pax}} pax</div>
              </a-col>
              <a-col :span="9" class="text-right">
                <div
                  class="fs-12 fw-400 cr-gray text-uppercase"
                  v-if="item.status === 'Belum Diterbitkan'"
                >Harga Dasar</div>
                <div
                  class="fs-12 fw-400 cr-gray text-uppercase"
                  v-if="item.status === 'Diterbitkan'"
                >Harga Jual</div>
                <div class="cr-black fs-15 fw-500 f-default">Rp. {{item.harga_jual}} /pax</div>
              </a-col>
            </a-row>

            <a-row
              type="flex"
              justify="space-between"
              align="middle"
              class="m-0 p-16"
              style="backgroundColor: #f5f5f5"
            >
              <a-col :span="10">
                <div class="fs-15 fw-500 cr-black f-default mr-8">{{item.name_package}}</div>
              </a-col>
              <a-col :span="5">
                <div class="cr-gray fs-12 fw-400 text-uppercase">Tanggal Terbit</div>
                <div class="cr-black fs-15 fw-500 f-default">{{item.tanggal_publish}}</div>
              </a-col>
              <a-col :span="9" class="text-right">
                <div class="cr-gray fs-12 fw-400 text-uppercase">Tanggal Closing</div>
                <div class="cr-black fs-15 fw-500 f-default">{{item.tanggal_closing}}</div>
              </a-col>
            </a-row>

            <a-row type="flex" justify="space-between" align="middle" class="m-0 p-16">
              <a-col :span="10">
                <div class="cr-gray fs-12 fw-400 text-uppercase">Program Hari</div>
                <div class="cr-black fs-15 fw-500 f-default">{{item.program}}</div>
              </a-col>
              <a-col :span="5">
                <div class="cr-gray fs-12 fw-400 text-uppercase">Status Penjualan</div>
                <div
                  class="fs-15 fw-500 f-default cr-red"
                  v-if="item.status === 'Belum Diterbitkan'"
                >
                  <span>{{item.status}}</span>
                </div>
                <div class="fs-15 fw-500 f-default cr-green" v-if="item.status === 'Diterbitkan'">
                  <span>{{item.status}}</span>
                </div>
              </a-col>
              <a-col :span="9">
                <div class="d-flex align-items-center align-end">
                  <div v-if="item.status === 'Diterbitkan'">
                    <nuxt-link to class="cr-primary fs-15">Lihat detail</nuxt-link>
                    <a-divider type="vertical" />
                  </div>
                  <a-button class="ant-btn--publish b-shadow b-radius fs-15 fw-500">
                    <nuxt-link to="/accounts/mitra/management/package/setting">Pengaturan</nuxt-link>
                  </a-button>
                </div>
              </a-col>
            </a-row>
          </a-col>
        </a-row>
      </a-list-item>
    </a-list>
  </div>
</template>
<script>
const dataPenjualan = [
  {
    no_product: "MT12345678HA",
    images: "/umrah/package/u1.png",
    name_package:
      "Umrah Hemat September 2019 Program 9 Hari, Keberangkatan Makassar",
    tanggal_publish: "-",
    tanggal_closing: "-",
    harga_jual: "20.000.000",
    jumlah_pax: "40",
    status: "Belum Diterbitkan",
    program: "Program 9 Hari"
  },
  {
    no_product: "MT12345678HA",
    images: "/umrah/package/u2.png",
    name_package:
      "Umrah Hemat September 2019 Program 9 Hari, Keberangkatan Makassar",
    tanggal_publish: "30 Agustus 2019",
    tanggal_closing: "1 November 2019",
    harga_jual: "22.000.000",
    jumlah_pax: "40",
    status: "Diterbitkan",
    program: "Program 9 Hari"
  }
];
export default {
  layout: "accounts",
  name: "mitraManajemenPaket",
  head() {
    return {
      title: "Manajemen Paket - Kembangkan Bisnis Umrah Anda | Haloatta"
    };
  },

  data() {
    return {
      dataPenjualan,
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