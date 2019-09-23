<template>
  <div class="ant-transaction--purchase-detail">
    <a-card :loading="loading" :bordered="false" class="b-radius b-shadow b-solid mb-16">
      <nuxt-link to="/accounts/transaction/purchase" slot="title" class="fs-15 fw-400 cr-gray">
        <a-icon type="arrow-left" class="mr-8"/>Kembali
      </nuxt-link>
      <div v-if="!loading" slot="extra" class="fw-500 fs-16 cr-black">No. Transaksi: HT1234567890</div>
      <a-steps :current="1">
        <a-step>
          <template slot="title">Pesanan</template>
          <span slot="description" class="fs-13">29-08-2019 11:50</span>
        </a-step>
        <a-step>
          <template slot="title">Pembayaran</template>
          <span slot="description" class="fs-13 d-none">
            <div>(Rp500.000.000)</div>
            <div>29-08-2019 11:50</div>
          </span>
        </a-step>
        <a-step>
          <template slot="title">Proses</template>
          <span slot="description" class="fs-13 d-none">30-08-2019 11:50</span>
        </a-step>
        <a-step>
          <template slot="title">E-paket Terbit</template>
          <span slot="description" class="fs-13 d-none">30-08-2019 11:50</span>
        </a-step>
      </a-steps>
      <div v-if="!loading" slot="actions" class="d-flex align-items-center">
        <div class="fs-13 f-default">
          Mohon melakukan pembayaran sebelum
          <span>08-07-2019 &nbsp; 21:29</span>
          melalui ATM/Bank Transfer. Bila tidak, pesanan ini akan dibatalkan secara otomatis.
        </div>
        <div>
          <a-button block class="b-radius b-shadow" @click="nextConf">Konfirmasi Pembayaran</a-button>
        </div>
      </div>
    </a-card>

    <a-card
      :loading="loading"
      :bordered="false"
      class="ant-card--padding b-shadow b-radius b-solid mb-16"
    >
      <span slot="title" class="fs-16 fw-500 cr-black">
        <!-- if status tagihan 'menunggu pembayaran' -->
        <a-avatar size="small" style="backgroundColor: #FF7C0A" class="mr-8" icon="clock-circle"/>Menunggu Pembayaran
      </span>
      <span slot="title" class="fs-16 fw-500 cr-black d-none">
        <!-- if status tagihan 'kedaluwarsa' -->
        <a-avatar size="small" style="backgroundColor: #F43662" class="mr-8" icon="close"/>Batas Waktu Habis
      </span>
      <!-- if status tagihan 'berhasil' -->
      <span slot="title" class="fs-16 fw-500 cr-black d-none">
        <a-avatar size="small" style="backgroundColor: #0FACF3" class="mr-8" icon="check"/>Pembelian Berhasil
      </span>
      <a v-if="!loading" slot="extra" class="fs-18 fw-500 cr-black" @click="toggleCollapsed">
        Rp 807.999.657
        <a-icon class="fs-13 cr-primary ml-8" :type="collapsed ? 'up' : 'down'"/>
      </a>

      <a-list v-show="collapsed">
        <a-list-item>
          <div class="d-flex align-items-center w-100">
            <div class="fs-14 fw-400 cr-black">Tiket Group</div>
            <div class="fs-14 fw-400 cr-black ml-auto">
              40
              <span class="ml-8 mr-8 cr-gray">x</span>Rp12.500.000
            </div>
          </div>
        </a-list-item>
        <a-list-item>
          <div class="d-flex align-items-center w-100">
            <div class="fs-14 fw-400 cr-black">LA Akomodasi</div>
            <div class="fs-14 fw-400 cr-black ml-auto">
              40
              <span class="ml-8 mr-8 cr-gray">x</span>Rp5.000.000
            </div>
          </div>
        </a-list-item>
        <a-list-item>
          <div class="d-flex align-items-center w-100">
            <div class="fs-14 fw-400 cr-black">Visa Umrah</div>
            <div class="fs-14 fw-400 cr-black ml-auto">
              40
              <span class="ml-8 mr-8 cr-gray">x</span>Rp900.000
            </div>
          </div>
        </a-list-item>
        <a-list-item>
          <div class="d-flex align-items-center w-100">
            <div class="fs-14 fw-400 cr-black">Asuransi</div>
            <div class="fs-14 fw-400 cr-black ml-auto">
              40
              <span class="ml-8 mr-8 cr-gray">x</span>Rp100.000
            </div>
          </div>
        </a-list-item>
        <a-list-item>
          <div class="d-flex align-items-center w-100">
            <div class="fs-14 fw-400 cr-black">Handling Domestik</div>
            <div class="fs-14 fw-400 cr-black ml-auto">
              40
              <span class="ml-8 mr-8 cr-gray">x</span>Rp100.000
            </div>
          </div>
        </a-list-item>
        <a-list-item>
          <div class="d-flex align-items-center w-100">
            <div class="fs-14 fw-400 cr-black">Manasik</div>
            <div class="fs-14 fw-400 cr-black ml-auto">
              40
              <span class="ml-8 mr-8 cr-gray">x</span>Rp200.000
            </div>
          </div>
        </a-list-item>
        <a-list-item>
          <div class="d-flex align-items-center w-100">
            <div class="fs-14 fw-400 cr-black">Perlengkapan Umrah</div>
            <div class="fs-14 fw-400 cr-black ml-auto">
              40
              <span class="ml-8 mr-8 cr-gray">x</span>Rp700.000
            </div>
          </div>
        </a-list-item>
        <a-list-item>
          <div class="d-flex align-items-center w-100">
            <div class="fs-14 fw-400 cr-black">Tour Leader</div>
            <div class="fs-14 fw-400 cr-black ml-auto">
              40
              <span class="ml-8 mr-8 cr-gray">x</span>Rp100.000
            </div>
          </div>
        </a-list-item>
        <a-list-item>
          <div class="d-flex align-items-center w-100">
            <div class="fs-14 fw-400 cr-black">Sub Total</div>
            <div class="fs-14 fw-400 cr-primary ml-auto">Rp 800.000.000</div>
          </div>
        </a-list-item>
        <a-list-item>
          <div class="d-flex align-items-center w-100">
            <div class="fs-14 fw-400 cr-black">PPN 1%</div>
            <div class="fs-14 fw-400 cr-primary ml-auto">Rp 8.000.000</div>
          </div>
        </a-list-item>
        <a-list-item>
          <div class="d-flex align-items-center w-100">
            <div class="fs-14 fw-400 cr-black">Kode Unik</div>
            <div class="fs-14 fw-400 cr-primary ml-auto">Rp -343</div>
          </div>
        </a-list-item>
        <a-list-item>
          <div class="d-flex align-items-center w-100">
            <div class="fs-16 fw-500 cr-black">Total</div>
            <div class="fs-16 fw-500 cr-black ml-auto">Rp 807.999.657</div>
          </div>
        </a-list-item>
      </a-list>

      <div class="p-32">
        <a-row :gutter="16">
          <a-col :span="6">
            <div class="fs-14 fw-400 cr-gray">Tanggal Pesanan</div>
            <div class="fs-15 fw-500 cr-black">Sab, 15 Juli 2019, 21:09</div>
          </a-col>
          <a-col :span="6">
            <div class="fs-14 fw-400 cr-gray">Metode Pembayaran</div>
            <div class="fs-15 fw-500 cr-black">ATM/Bank Transfer</div>
            <div class="fs-15 fw-500 cr-black d-none">Saldo Halopay</div>
          </a-col>
          <a-col :span="6">
            <div class="fs-14 fw-400 cr-gray">Tipe Pembayaran</div>
            <div class="fs-15 fw-500 cr-black">Lunas</div>
            <div class="fs-15 fw-500 cr-black d-none">DP (Down Payment)</div>
          </a-col>
        </a-row>
      </div>
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
              <br>keberangkatan Makassar
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
  middleware: "authenticated",
  layout: "accounts",
  name: "mitraPurchaseDetail",
  head() {
    return {
      title: "Detail Transaksi Pembelian - Haloatta"
    };
  },
  data() {
    return {
      collapsed: false,
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
    },
    nextConf() {
      this.$router.push({ path: "/accounts/e-confirm" });
    }
  }
};
</script>
