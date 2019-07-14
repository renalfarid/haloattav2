<template>
  <div class="ant-layout--accounts-summary">
    <div class="fs-18 fw-500 cr-black">Ringkasan Akun</div>
    <div class="fs-14 fw-400 cr-gray">Informasi singkat tentang saya</div>
    <a-row :gutter="24" class="mt-16">
      <a-col :span="6">
        <a-card :bordered="false" class="b-solid b-shadow b-radius text-center">
          <a-avatar class="mb-16" :size="64" src="/user/maha_user.jpg" />
          <div class="fs-14 fw-400 cr-black f-default">Umroh Personal</div>
          <div class="fs-16 fw-500 cr-black mb-8">Alba Husain Mustafa</div>
          <a-button class="b-shadow b-solid-primary b-radius" block>
            <div class="d-flex align-items-center">
              <img src="/icons/upgrade.png" class="mr-8" /> Upgrade ke Bisnis
            </div>
          </a-button>

          <a-divider />

          <div class="fs-14 fw-400 cr-black f-default">Saldo Halopay</div>
          <div class="fs-16 fw-500 cr-black mb-8">Rp 100.000.000</div>
          <a-button class="b-shadow b-solid-primary b-radius" block>
            <div class="d-flex align-items-center">
              <img src="/icons/deposit.png" class="mr-8" /> Tambah Saldo
            </div>
          </a-button>

          <a-divider />

          <div class="text-left mb-16">
            <div class="fs-12 fw-400 cr-gray text-uppercase">Informasi Alamat</div>
            <div class="fs-13 fw-400 cr-black">
              Jl. Maccini Raya No.40, Kel.Maccini, Kec Maccini Sombala,
              Kota Makassar, Sulawesi Selatan, 90421
            </div>
          </div>

          <div class="text-left mb-16">
            <div class="fs-12 fw-400 cr-gray text-uppercase">Nomor Telepon</div>
            <div class="fs-13 fw-400 cr-black">085213247455</div>
          </div>

          <div class="text-left">
            <div class="fs-12 fw-400 cr-gray text-uppercase">Alamat E-mail</div>
            <div class="fs-13 fw-400 cr-black">albahusainmustafa@gmail.com</div>
          </div>
        </a-card>
      </a-col>

      <a-col :span="18">
        <a-row :gutter="24">
          <a-col :span="12">
            <a-card :bordered="false" class="b-solid b-shadow b-radius text-center">
              <div class="fs-16 fw-500 cr-black">Data Penjualan</div>
              <no-ssr>
                <ve-line
                  :data="chartDataSales"
                  :grid="grid"
                  :settings="chartSettingSales"
                  :legend-visible="false"
                ></ve-line>
              </no-ssr>
            </a-card>
          </a-col>

          <a-col :span="12">
            <a-card :bordered="false" class="b-solid b-shadow b-radius text-center">
              <div class="fs-16 fw-500 cr-black">Data Pembelian</div>
              <no-ssr>
                <ve-line
                  :data="chartDataPurchase"
                  :grid="grid"
                  :settings="chartSettingPurchase"
                  :legend-visible="false"
                ></ve-line>
              </no-ssr>
            </a-card>
          </a-col>

          <a-col :span="12">
            <a-card :bordered="false" title="Transaksi" class="b-solid b-shadow b-radius">
              <nuxt-link to="/accounts/mitra/transaction/order" slot="extra">Lihat semua</nuxt-link>
              <a-list>
                <a-list-item class="d-flex align-items-center">
                  <div>Pembelian</div>
                  <div class="ml-auto">10</div>
                </a-list-item>
                <a-list-item class="d-flex align-items-center">
                  <div>Penjualan</div>
                  <div class="ml-auto">20</div>
                </a-list-item>
              </a-list>
            </a-card>
          </a-col>

          <a-col :span="12">
            <a-card :bordered="false" title="Umroh Yang di Ikuti" class="b-solid b-shadow b-radius">
              <nuxt-link to="/accounts/mitra/transaction/order" slot="extra">Lihat semua</nuxt-link>
              <a-card-grid style="width:25%;">
                <a-avatar class="d-block m-auto" :size="64" src="/user/maha_user.jpg" />
              </a-card-grid>
              <a-card-grid style="width:25%;">
                <a-avatar class="d-block m-auto" :size="64" src="/user/maha_user.jpg" />
              </a-card-grid>
              <a-card-grid style="width:25%;">
                <a-avatar class="d-block m-auto" :size="64" src="/user/maha_user.jpg" />
              </a-card-grid>
              <a-card-grid style="width:25%;">
                <a-avatar class="d-block m-auto" :size="64" src="/user/maha_user.jpg" />
              </a-card-grid>
            </a-card>
          </a-col>
        </a-row>
      </a-col>
    </a-row>
  </div>
</template>
<script>
export default {
  layout: "accounts",
  name: "mitraAccounts",
  head() {
    return {
      title: "Ringkasan Akun - Kembangkan Bisnis Umrah Anda | Haloatta"
    };
  },

  data() {
    this.chartSettingSales = {
      yAxisType: ["KMB"],
      area: true
    };
    this.chartSettingPurchase = {
      yAxisType: ["KMB"]
    };
    this.grid = {
      bottom: 0,
      right: 0,
      left: 0,
      top: 16
    };
    return {
      chartDataSales: {
        columns: ["date", "sales"],
        rows: [
          {
            date: "01/01",
            sales: 1523
          },
          {
            date: "01/02",
            sales: 1223
          },
          {
            date: "01/03",
            sales: 2123
          },
          {
            date: "01/04",
            sales: 4123
          },
          {
            date: "01/05",
            sales: 3123
          },
          {
            date: "01/06",
            sales: 7123
          }
        ]
      },
      chartDataPurchase: {
        columns: [
          "date",
          "umrah",
          "ticket",
          "accommodation",
          "visa",
          "insurance",
          "optional"
        ],
        rows: [
          {
            date: "01/01",
            accommodation: 1125,
            insurance: 4910,
            optional: 815,
            ticket: 2720,
            umrah: 625,
            visa: 1530
          },
          {
            date: "01/02",
            accommodation: 1015,
            insurance: 2840,
            optional: 2745,
            ticket: 1650,
            umrah: 3555,
            visa: 460
          },
          {
            date: "01/03",
            accommodation: 2055,
            insurance: 4570,
            optional: 583,
            ticket: 3591,
            umrah: 2505,
            visa: 1510
          },
          {
            date: "01/04",
            accommodation: 4055,
            insurance: 570,
            optional: 1583,
            ticket: 2591,
            umrah: 6505,
            visa: 1510
          },
          {
            date: "01/05",
            accommodation: 2055,
            insurance: 4570,
            optional: 2583,
            ticket: 1591,
            umrah: 3505,
            visa: 510
          }
        ]
      }
    };
  }
};
</script>