<template>
  <div class="ant-layout--accounts-management">
    <div class="mb-16">
      <nuxt-link to="/accounts/management/package" class="fs-14 fw-400 cr-gray">
        <a-icon type="left" class="mr-8" />Kembali
      </nuxt-link>
    </div>

    <a-card :bordered="false" class="b-shadow b-solid b-radius mb-16">
      <div slot="title">
        <!-- if status sales close -->
        <!-- <div class="d-flex align-items-center">
          <div class="mr-8">
            <a-avatar style="backgroundColor: #FF7C0A" icon="stop" />
          </div>
          <div>
            <div class="fs-14 fw-400 cr-gray f-default">Status Penjualan</div>
            <div class="fs-16 fw-500 cr-orange">Ditutup</div>
          </div>
        </div>-->
        <!-- if status sales publish -->
        <div class="d-flex align-items-center">
          <div class="mr-8">
            <a-avatar style="backgroundColor: #05CBB0" icon="schedule" />
          </div>
          <div>
            <div class="fs-14 fw-400 cr-gray f-default">Status Penjualan</div>
            <div class="fs-16 fw-500 cr-green">Diterbitkan</div>
          </div>
        </div>
      </div>
      <a-steps>
        <a-step status="finish" title="Diterbitkan" description="Mulai 10 Mei 2019">
          <a-icon type="calendar" slot="icon" />
        </a-step>
        <!-- if status sales close -->
        <!-- <a-step status="finish" title="Ditutup" description="Berakhir 10 Juli 2019">
          <a-icon type="stop" slot="icon" />
        </a-step>-->
        <!-- if status sales publish -->
        <a-step status="wait" title="Ditutup" description="Berakhir 10 Juli 2019">
          <a-icon type="stop" slot="icon" />
        </a-step>
      </a-steps>
    </a-card>

    <a-card :bordered="false" class="b-shadow b-solid b-radius mb-16">
      <div slot="title">Informasi Paket</div>
      <div slot="extra" class="fs-16 fw-500 cr-black">
        No. Produk
        <a-divider type="vertical" />PUHA12345678
      </div>
      <a-row :gutter="8" class="mb-16">
        <a-col :span="12">
          <div class="d-flex align-items-center">
            <div class="mr-8">
              <a-avatar style="backgroundColor: rgba(15, 172, 243, .1);padding: 2px" src="/icons/search/tabs/color/umrah.svg" />
            </div>
            <div>
              <div class="fs-14 fw-400 cr-gray">Nama Paket</div>
              <div class="fs-15 fw-500 cr-black">
                Paket Umrah September 2019,
                Keberangkatan Makassar
              </div>
            </div>
          </div>
        </a-col>
        <a-col :span="6">
          <div class="fs-14 fw-400 cr-gray">Tanggal Keberangkatan</div>
          <div class="cr-black fs-15 fw-500">20 September 2019</div>
        </a-col>
        <a-col :span="6">
          <div class="fs-14 fw-400 cr-gray">Program Hari</div>
          <div class="cr-black fs-15 fw-500">Program 9 Hari</div>
        </a-col>
      </a-row>

      <a-row :gutter="8">
        <a-col :span="12">
          <div class="fs-14 fw-400 cr-gray">Jumlah Pax</div>
          <div class="fs-15 fw-500 cr-black">4 Pax</div>
        </a-col>
        <a-col :span="6">
          <div class="fs-14 fw-400 cr-gray">Sudah Dipesan (Booked)</div>
          <div class="fs-15 fw-500 cr-black">2 Pax</div>
        </a-col>
        <a-col :span="6">
          <div class="fs-14 fw-400 cr-gray">Tersedia (Available)</div>
          <div class="fs-15 fw-500 cr-black">2 Pax</div>
        </a-col>
      </a-row>
    </a-card>

    <a-card :bordered="false" class="b-shadow b-solid b-radius mb-16">
      <div slot="title">Informasi Harga Jual</div>
      <a-row :gutter="16">
        <a-col :span="8">
          <a-card :bordered="false" class="b-shadow b-radius b-solid text-center">
            <div class="fs-15 fw-500 cr-black text-uppercase">Quad</div>
            <div class="fs-20 fw-500 cr-black">
              Rp22.000.000
              <span class="fs-14 cr-gray">/pax</span>
            </div>
            <div class="mt-16 mb-16">
              <div class="fs-14 cr-gray p-4">
                <a-icon type="check" class="cr-green mr-8" />Tipe Quad Room
              </div>
              <div class="fs-14 cr-gray p-4">
                <a-icon type="check" class="cr-green mr-8" />Harga Dasar Rp20.000.000
              </div>
              <div class="fs-14 cr-gray p-4">
                <a-icon type="check" class="cr-green mr-8" />Jumlah Margin (10%)
              </div>
            </div>
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card :bordered="false" class="b-shadow b-radius b-solid text-center">
            <div class="fs-15 fw-500 cr-black text-uppercase">Triple</div>
            <div class="fs-20 fw-500 cr-black">
              Rp22.800.000
              <span class="fs-14 cr-gray">/pax</span>
            </div>
            <div class="mt-16 mb-16">
              <div class="fs-14 cr-gray p-4">
                <a-icon type="check" class="cr-green mr-8" />Tipe Triple Room
              </div>
              <div class="fs-14 cr-gray p-4">
                <a-icon type="check" class="cr-green mr-8" />Harga Dasar Rp20.000.000
              </div>
              <div class="fs-14 cr-gray p-4">
                <a-icon type="check" class="cr-green mr-8" />Jumlah Margin (10%) + (4%)
              </div>
            </div>
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card :bordered="false" class="b-shadow b-radius b-solid text-center">
            <div class="fs-15 fw-500 cr-black text-uppercase">Double</div>
            <div class="fs-20 fw-500 cr-black">
              Rp24.000.000
              <span class="fs-14 cr-gray">/pax</span>
            </div>
            <div class="mt-16 mb-16">
              <div class="fs-14 cr-gray p-4">
                <a-icon type="check" class="cr-green mr-8" />Tipe Double Room
              </div>
              <div class="fs-14 cr-gray p-4">
                <a-icon type="check" class="cr-green mr-8" />Harga Dasar Rp20.000.000
              </div>
              <div class="fs-14 cr-gray p-4">
                <a-icon type="check" class="cr-green mr-8" />Jumlah Margin (10%) + (14%)
              </div>
            </div>
          </a-card>
        </a-col>
      </a-row>
    </a-card>
  </div>
</template>
<script>
export default {
  layout: "accounts",
  name: "mitraDetailPenjualanProduk",
  head() {
    return {
      title:
        "Detail Penjualan Produk  - Kembangkan Bisnis Umrah Anda | Haloatta"
    };
  },

  data() {
    return {};
  }
};
</script>