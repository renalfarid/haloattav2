<template>
  <div class="ant-layout--accounts-summary">
    <div class="fs-18 fw-500 cr-black">Ringkasan Akun</div>
    <div class="fs-14 fw-400 cr-gray">Informasi singkat tentang saya</div>

    <a-row :gutter="24" class="mt-16">
      <a-col :span="8">
        <a-card :bordered="false" class="b-solid b-shadow b-radius">
          <div class="d-flex align-items-center">
            <div class="mr-16">
              <a-avatar :size="64" src="https://cdn4.iconfinder.com/data/icons/avatar-vol-1-3/512/4-512.png" />
            </div>
            <div>
              <div class="fs-15 fw-400 cr-black f-default mb-4">Umroh Personal</div>
              <div class="fs-18 fw-500 cr-black f-default">Alba Husain Mustafa</div>
            </div>
          </div>

          <a-divider />

          <div class="d-flex align-items-center">
            <div class="mr-16">
              <a-avatar style="backgroundColor: #0FACF3" size="large" icon="wallet" />
            </div>
            <div>
              <div class="fs-15 fw-400 cr-black f-default mb-4">Saldo Halopay</div>
              <div class="fs-18 fw-500 cr-black f-default">Rp100.000.000</div>
            </div>
          </div>

          <a-divider />

          <div class="d-flex align-items-start mb-24">
            <div class="mr-16">
              <a-avatar style="backgroundColor: #f5f5f5;color: #767676" icon="environment" />
            </div>
            <div>
              <div class="fs-14 fw-400 cr-gray f-default mb-4">Alamat</div>
              <div class="fs-15 fw-400 cr-black f-default">
                Jl. Maccini Raya No.40, Kel.Maccini, Kec Maccini Sombala,
                Kota Makassar, Sulawesi Selatan, 90421
              </div>
            </div>
          </div>

          <div class="d-flex align-items-start mb-24">
            <div class="mr-16">
              <a-avatar style="backgroundColor: #f5f5f5;color: #767676" icon="phone" />
            </div>
            <div>
              <div class="fs-14 fw-400 cr-gray f-default mb-4">Nomor telepon</div>
              <div class="fs-15 fw-400 cr-black f-default">
                085213908799
              </div>
            </div>
          </div>

          <div class="d-flex align-items-start mb-24">
            <div class="mr-16">
              <a-avatar style="backgroundColor: #f5f5f5;color: #767676" icon="mail" />
            </div>
            <div>
              <div class="fs-14 fw-400 cr-gray f-default mb-4">Email Kontak</div>
              <div class="fs-15 fw-400 cr-black f-default">
                jordialba@gmail.com
              </div>
            </div>
          </div>
        </a-card>
      </a-col>

      <a-col :span="16">
        <a-row :gutter="24">
          <a-col :span="24">
            <a-card :bordered="false" class="b-solid b-shadow b-radius text-center">
              <div class="fs-16 fw-500 cr-black">Data Penjualan</div>
              <no-ssr>
                <ve-line
                  :data="chartDataSales"
                  :grid="grid"
                  :settings="chartSettingSales"
                  :legend-visible="false"
                  height="295px"
                ></ve-line>
              </no-ssr>
            </a-card>
          </a-col>

          <a-col :span="24">
            <a-card :bordered="false" class="b-solid b-shadow b-radius text-center">
              <div class="fs-16 fw-500 cr-black">Data Pembelian</div>
              <no-ssr>
                <ve-line
                  :data="chartDataPurchase"
                  :grid="grid"
                  :settings="chartSettingPurchase"
                  :legend-visible="false"
                  height="295px"
                ></ve-line>
              </no-ssr>
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