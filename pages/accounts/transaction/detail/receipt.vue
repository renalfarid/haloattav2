<template>
  <div class="ant-invoice">
    <a-card :loading="loading" :bordered="false" class="b-radius b-shadow b-solid mb-16">
      <span slot="title" class="fs-16 fw-500 cr-black d-none">
        <!-- if status tagihan 'menunggu pembayaran' -->
        <a-avatar size="small" style="backgroundColor: #FF7C0A" class="mr-8" icon="clock-circle" />Menunggu Pembayaran
      </span>
      <span slot="title" class="fs-16 fw-500 cr-black d-none">
        <!-- if status tagihan 'kedaluwarsa' -->
        <a-avatar size="small" style="backgroundColor: #F43662" class="mr-8" icon="close" />Batas Waktu Habis
      </span>
      <!-- if status tagihan 'berhasil' -->
      <span slot="title" class="fs-16 fw-500 cr-black">
        <a-avatar size="small" style="backgroundColor: #52c41a" class="mr-8" icon="check" />Pembelian Berhasil
      </span>
      <div v-if="!loading" slot="extra" class="fw-500 fs-16 cr-black">No. Transaksi: HT1234567890</div>
      <a-steps :current="4">
        <a-step>
          <template slot="title">Pesanan</template>
          <span slot="description" class="fs-13">29-08-2019 11:50</span>
        </a-step>
        <a-step>
          <template slot="title">Pembayaran</template>
          <span slot="description" class="fs-13">
            <div>(Rp909.000.000)</div>
            <div>29-08-2019 11:50</div>
          </span>
        </a-step>
        <a-step>
          <template slot="title">Verifikasi</template>
          <span slot="description" class="fs-13">30-08-2019 11:50</span>
        </a-step>
        <a-step>
          <template slot="title">Berhasil</template>
        </a-step>
      </a-steps>
    </a-card>

    <a-card :bordered="false" class="ant-invoice--card b-shadow b-radius b-solid mb-16">
      <div class="ant-card-body-item">
        <a-row :gutter="16" type="flex" justify="space-around" align="middle">
          <a-col :span="12">
            <img class="logo" src="/haloatta.png" />
          </a-col>
          <a-col :span="12">
            <div class="text-right mb-16">
              <div class="fs-15 fw-500 cr-gray text-uppercase">PT. Nuh Digital Technology</div>
              <div class="fs-14 fw-400 cr-gray">Jl. Pengayoman, Masale, Kec. Panakkukang</div>
              <div class="fs-14 fw-400 cr-gray">Kota Makassar, Sulawesi Selatan</div>
              <div class="fs-14 fw-400 cr-gray">Kode Pos 90231</div>
            </div>
            <div class="text-right">
              <div class="fs-14 fw-400 cr-gray">Email : haloinfo@gmail.com</div>
              <div class="fs-14 fw-400 cr-gray">Telp: 022 456 789</div>
            </div>
          </a-col>
        </a-row>

        <div style="display:block;margin: 48px 0"></div>

        <div class="d-flex align-items-center mb-16">
          <div>
            <div class="fs-18 fw-500 cr-black">Pemesan:</div>
          </div>
          <div class="ml-auto">
            <div class="fs-40 fw-500 cr-black">Kwintansi</div>
          </div>
        </div>

        <a-row :gutter="16">
          <a-col :span="12">
            <div class="text-left mb-16">
              <div class="fs-15 fw-500 cr-black">Jordi Alba Mustafa</div>
              <div class="fs-14 fw-400 cr-gray">Jl. Pengayoman, Masale, Kec. Panakkukang</div>
              <div class="fs-14 fw-400 cr-gray">Kota Makassar, Sulawesi Selatan</div>
              <div class="fs-14 fw-400 cr-gray">Kode Pos 90231</div>
            </div>
            <div class="text-left">
              <div class="fs-14 fw-400 cr-gray">Email : haloinfo@gmail.com</div>
              <div class="fs-14 fw-400 cr-gray">Telp: 022 456 789</div>
            </div>
          </a-col>
          <a-col :span="12">
            <div class="text-right">
              <div class="mb-16">
                <div class="fs-14 fw-500 cr-black">Nomor Kwitansi</div>
                <div class="fs-14 fw-400 cr-gray">ATT-UMR-54021040019072938</div>
              </div>
              <div class="mb-16">
                <div class="fs-14 fw-500 cr-black">Metode Pembayaran</div>
                <div class="fs-14 fw-400 cr-gray">ATM/Bank Transfer</div>
              </div>
              <div class="mb-16">
                <div class="fs-14 fw-500 cr-black">Tipe Pembayaran</div>
                <div class="fs-14 fw-400 cr-gray">Lunas</div>
              </div>
              <div class="mb-16">
                <div class="fs-14 fw-500 cr-black">Tanggal Pembelian</div>
                <div class="fs-14 fw-400 cr-gray">Senin, 20 Mei 2019</div>
              </div>
              <div class="mb-16">
                <div class="fs-14 fw-500 cr-black">Tanggal Pembayaran</div>
                <div class="fs-14 fw-400 cr-gray">Senin, 22 Mei 2019</div>
              </div>
            </div>
          </a-col>
        </a-row>
      </div>

      <div class="ant-card-body-item">
        <div class="fs-18 fw-500 cr-black mb-16">Daftar Pembelian :</div>

        <a-row :gutter="16">
          <a-col :span="9">
            <div class="fs-14 fw-500 cr-gray text-uppercase">Detail Pembelian</div>
          </a-col>
          <a-col :span="6">
            <div class="fs-14 fw-500 cr-gray text-uppercase">Tanggal Keberangkatan</div>
          </a-col>
          <a-col :span="3">
            <div class="fs-14 fw-500 cr-gray text-uppercase">Jumlah Pax</div>
          </a-col>
          <a-col :span="6" class="text-right">
            <div class="fs-14 fw-500 cr-gray text-uppercase">Jumlah Pembayaran</div>
          </a-col>
        </a-row>

        <a-divider></a-divider>

        <a-row :gutter="16">
          <a-col :span="9">
            <div
              class="fs-14 fw-500 cr-black f-default text-ellipsis"
            >Umrah Exclusive Desember 2019, Keberangkatan Makassar</div>
            <div class="fs-14 fw-400 cr-black">Program 9 Hari</div>
          </a-col>
          <a-col :span="6">
            <div class="fs-14 fw-500 cr-black">10 Desember 2019</div>
          </a-col>
          <a-col :span="3">
            <div class="fs-14 fw-500 cr-black">40</div>
          </a-col>
          <a-col :span="6" class="text-right">
            <div class="fs-14 fw-500 cr-black">Rp900.000.000</div>
          </a-col>
        </a-row>

        <a-divider></a-divider>

        <a-row :gutter="16" type="flex" justify="end">
          <a-col :span="9">
            <a-row :gutter="16">
              <a-col :span="12">
                <div class="fs-14 fw-500 cr-gray text-uppercase">Subtotal</div>
              </a-col>
              <a-col :span="12" class="text-right">
                <div class="fs-14 fw-500 cr-black">Rp900.000.000</div>
              </a-col>
            </a-row>
            <a-divider></a-divider>
            <a-row :gutter="16">
              <a-col :span="12">
                <div class="fs-14 fw-500 cr-gray text-uppercase">PPN 1%</div>
              </a-col>
              <a-col :span="12" class="text-right">
                <div class="fs-14 fw-500 cr-black">Rp9.000.000</div>
              </a-col>
            </a-row>
            <a-divider></a-divider>
            <a-row :gutter="16">
              <a-col :span="12">
                <div class="fs-14 fw-500 cr-black text-uppercase">Total Pembayaran</div>
              </a-col>
              <a-col :span="12" class="text-right">
                <div class="fs-18 fw-500 cr-primary">Rp909.000.000</div>
              </a-col>
            </a-row>
          </a-col>
        </a-row>
      </div>
    </a-card>
  </div>
</template>
<script>
export default {
  layout: "accounts",
  name: "receipt",
  head() {
    return {
      title: "Kwitansi Pembelian - Haloatta"
    };
  },
  data() {
    return {
      loading: true
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  }
};
</script>
