<template>
  <div class="ant-layout--accounts-summary">
    <div class="fs-18 fw-500 cr-black">Ringkasan Akun</div>
    <div class="fs-16 fw-400 cr-gray">Informasi singkat tentang saya</div>

    <a-card :bordered="false" class="b-solid b-shadow b-radius mt-16 mb-16">
      <a-row :gutter="16" type="flex" justify="space-around" align="middle">
        <a-col :span="7">
          <div class="d-flex align-items-center">
            <div class="mr-16">
              <a-avatar
                size="large"
                src="https://cdn4.iconfinder.com/data/icons/avatar-vol-1-3/512/4-512.png"
              />
            </div>
            <div class="fs-18 fw-500 cr-black f-default text-ellipsis">Alba Husain Mustafa</div>
          </div>
        </a-col>
        <a-col :span="7">
          <dl class="ant-deflist">
            <dt class="ant-deflist__label">Status Akun</dt>
            <dd class="ant-deflist__value text-ellipsis">Umaroh Personal</dd>
            <dt class="ant-deflist__label">E-mail</dt>
            <dd class="ant-deflist__value text-ellipsis">jordialba@gmail.com</dd>
          </dl>
        </a-col>
        <a-col :span="8">
          <dl class="ant-deflist">
            <dt class="ant-deflist__label">No. Telp</dt>
            <dd class="ant-deflist__value text-ellipsis">08123456789</dd>
            <dt class="ant-deflist__label">Alamat</dt>
            <dd class="ant-deflist__value text-ellipsis">
              Jl. Maccini Raya No.40, Kel.Maccini, Kec Maccini Sombala,
              Kota Makassar, Sulawesi Selatan, 90421
            </dd>
          </dl>
        </a-col>
        <a-col :span="2">
          <a-button type="danger" ghost block><nuxt-link to="/accounts/mitra/setting">edit</nuxt-link></a-button>
        </a-col>
      </a-row>
    </a-card>

    <a-row :gutter="16">
      <a-col :span="12">
        <a-card :bordered="false" class="b-solid b-shadow b-radius text-center">
          <div class="fs-16 fw-500 cr-black">Data Penjualan</div>
          <no-ssr>
            <ve-line
              :data="chartDataSales"
              :grid="grid"
              :settings="chartSettingSales"
              :legend-visible="false"
              height="260px"
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
              height="260px"
            ></ve-line>
          </no-ssr>
        </a-card>
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
      labelMap: {
        sales: "Jumlah Penjualan"
      },
      area: true
    };
    this.chartSettingPurchase = {
      yAxisType: ["KMB"],
      labelMap: {
        order: "Jumlah Pembelian"
      }
    };
    this.grid = {
      bottom: 0,
      right: 0,
      left: 0,
      top: 16
    };
    return {
      chartDataSales: {
        columns: ["name", "sales"],
        rows: [
          {
            name: "Umrah",
            sales: 10
          },
          {
            name: "Tiket Group",
            sales: 8
          },
          {
            name: "LA Akomodasi",
            sales: 6
          },
          {
            name: "Visa",
            sales: 5
          },
          {
            name: "Asuransi",
            sales: 2
          },
          {
            name: "handling",
            sales: 5
          },
          {
            name: "Manasik",
            sales: 0
          },
          {
            name: "Perlengkapan",
            sales: 1
          },
          {
            name: "Tour Leader",
            sales: 0
          }
        ]
      },
      chartDataPurchase: {
        columns: ["name", "order"],
        rows: [
          {
            name: "Umrah",
            order: 30
          },
          {
            name: "Tiket Group",
            order: 1
          },
          {
            name: "LA Akomodasi",
            order: 15
          },
          {
            name: "Visa",
            order: 8
          },
          {
            name: "Asuransi",
            order: 26
          },
          {
            name: "Handling",
            order: 15
          },
          {
            name: "Manasik",
            order: 5
          },
          {
            name: "Perlengkapan",
            order: 30
          },
          {
            name: "Tour Leader",
            order: 3
          }
        ]
      }
    };
  }
};
</script>