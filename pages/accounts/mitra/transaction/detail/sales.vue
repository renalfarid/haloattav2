<template>
  <div class="ant-transaction--purchase-detail">
    <nuxt-link to="/accounts/mitra/transaction/sales" class="fs-15 fw-400 cr-gray">
      <a-icon type="arrow-left" class="mr-8" />Kembali
    </nuxt-link>

    <a-card
      :loading="loading"
      :bordered="false"
      class="ant-card--padding b-radius b-shadow b-solid mt-16 mb-16"
    >
      <div slot="title">Detail Pemesan</div>
      <div v-if="!loading" slot="extra" class="fw-500 fs-16 cr-black">
        No. Pesanan
        <a-divider type="vertical" />HT1234567890
      </div>

      <a-list>
        <a-list-item>
          <div class="d-flex align-items-center w-100">
            <div class="fs-15 fw-400 cr-black">Nama Pemesan</div>
            <div class="fs-15 fw-400 cr-black ml-auto">Dedi Abdullah</div>
          </div>
        </a-list-item>
        <a-list-item>
          <div class="d-flex align-items-center w-100">
            <div class="fs-15 fw-400 cr-black">No. Telepon</div>
            <div class="fs-15 fw-400 cr-black ml-auto">08123456789</div>
          </div>
        </a-list-item>
        <a-list-item>
          <div class="d-flex align-items-center w-100">
            <div class="fs-15 fw-400 cr-black">Kontak Email</div>
            <div class="fs-15 fw-400 cr-black ml-auto">dediabdullah@gmail.com</div>
          </div>
        </a-list-item>
        <a-list-item>
          <div class="d-flex align-items-center w-100">
            <div class="fs-15 fw-400 cr-black">Tanggal Pesanan</div>
            <div class="fs-15 fw-400 cr-black ml-auto">Senin, 10 Mei 2019</div>
          </div>
        </a-list-item>
        <a-list-item>
          <div class="d-flex align-items-center w-100">
            <div class="fs-15 fw-400 cr-black">Metode Pembayaran</div>
            <div class="fs-15 fw-400 cr-black ml-auto">ATM/Bank Transfer</div>
          </div>
        </a-list-item>
        <a-list-item>
          <div class="d-flex align-items-center w-100">
            <div class="fs-15 fw-400 cr-black">Tipe Pembayaran</div>
            <div class="fs-15 fw-400 cr-black ml-auto">Lunas</div>
          </div>
        </a-list-item>
      </a-list>
    </a-card>

    <a-card
      :loading="loading"
      :bordered="false"
      class="ant-card--padding b-shadow b-radius b-solid mb-16"
    >
      <span slot="title" class="fs-16 fw-500 cr-black">
        <!-- if status tagihan 'Belum Dibayar' -->
        <a-avatar size="small" style="backgroundColor: #FF7C0A" class="mr-8" icon="clock-circle" />Belum Dibayar
      </span>
      <span slot="title" class="fs-16 fw-500 cr-black d-none">
        <!-- if status tagihan 'kedaluwarsa' -->
        <a-avatar size="small" style="backgroundColor: #F43662" class="mr-8" icon="close" />Batas Waktu Pembayaran Habis
      </span>
      <!-- if status tagihan 'Dibayar' -->
      <span slot="title" class="fs-16 fw-500 cr-black d-none">
        <a-avatar size="small" style="backgroundColor: #0FACF3" class="mr-8" icon="check" />Pembelian Berhasil
      </span>
      <a v-if="!loading" slot="extra" class="fs-18 fw-500 cr-black" @click="toggleCollapsed">
        Rp 807.999.657
        <a-icon class="fs-13 cr-primary ml-8" :type="collapsed ? 'up' : 'down'" />
      </a>

      <a-list v-show="collapsed">
        <a-list-item>
          <div class="d-flex align-items-center w-100">
            <div class="fs-15 fw-400 cr-black">Jumlah Pesanan</div>
            <div class="fs-15 fw-400 cr-black ml-auto">40 Pax</div>
          </div>
        </a-list-item>
        <a-list-item>
          <div class="d-flex align-items-center w-100">
            <div class="fs-15 fw-400 cr-black">Sub Total</div>
            <div class="fs-15 fw-400 cr-black ml-auto">Rp 800.000.000</div>
          </div>
        </a-list-item>
        <a-list-item>
          <div class="d-flex align-items-center w-100">
            <div class="fs-15 fw-400 cr-black">PPN 1%</div>
            <div class="fs-15 fw-400 cr-primary ml-auto">Rp 8.000.000</div>
          </div>
        </a-list-item>
        <a-list-item>
          <div class="d-flex align-items-center w-100">
            <div class="fs-15 fw-400 cr-black">Kode Unik</div>
            <div class="fs-15 fw-400 cr-primary ml-auto">-343</div>
          </div>
        </a-list-item>
        <a-list-item>
          <div class="d-flex align-items-center w-100">
            <div class="fs-16 fw-500 cr-black">Total</div>
            <div class="fs-16 fw-500 cr-black ml-auto">Rp 807.999.657</div>
          </div>
        </a-list-item>
      </a-list>
    </a-card>

    <div class="fs-16 fw-500 cr-black mb-8">Detail Produk</div>
    <a-card :loading="loading" :bordered="false" class="b-shadow b-radius b-solid mb-16">
      <a-row :gutter="8" type="flex" justify="space-around" align="middle">
        <a-col :span="12">
          <div class="d-flex align-items-center">
            <div class="mr-8">
              <a-avatar
                style="backgroundColor: rgba(15, 172, 243, .1);padding: 2px"
                src="/icons/search/tabs/color/umrah.svg"
              />
            </div>
            <div class="fs-15 fw-500 cr-black f-default">
              Umrah Hemat September 2019,
              <br />keberangkatan Makassar
            </div>
          </div>
        </a-col>
        <a-col :span="6">
          <div class="cr-gray fs-14 fw-400">Tanggal Keberangkatan</div>
          <div class="cr-black fs-15 fw-500">10 September 2019</div>
        </a-col>
        <a-col :span="6">
          <div class="cr-gray fs-14 fw-400">Program Hari</div>
          <div class="cr-black fs-15 fw-500">Program 9 Hari</div>
        </a-col>
      </a-row>
    </a-card>
  </div>
</template>
<script>
export default {
  layout: "accounts",
  name: "mitraPurchaseDetailSales",
  head() {
    return {
      title: "Detail Transaksi Penjualan - Haloatta"
    };
  },
  data() {
    return {
      collapsed: true,
      loading: true
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    }
  }
};
</script>
