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
            <div class="fs-18 fw-500 cr-black f-default text-ellipsis">{{nama}}</div>
          </div>
        </a-col>
        <a-col :span="7">
          <dl class="ant-deflist">
            <dt class="ant-deflist__label">Status Akun</dt>
            <dd class="ant-deflist__value text-ellipsis">{{status}}</dd>
            <dt class="ant-deflist__label">E-mail</dt>
            <dd class="ant-deflist__value text-ellipsis">{{email}}</dd>
          </dl>
        </a-col>
        <a-col :span="8">
          <dl class="ant-deflist">
            <dt class="ant-deflist__label">No. Telp</dt>
            <dd class="ant-deflist__value text-ellipsis">{{telepon}}</dd>
            <dt class="ant-deflist__label">Alamat</dt>
            <dd class="ant-deflist__value text-ellipsis">{{alamat}}</dd>
          </dl>
        </a-col>
        <a-col :span="2">
          <a-button type="danger" ghost block>
            <nuxt-link to="/accounts/setting">edit</nuxt-link>
          </a-button>
        </a-col>
      </a-row>
    </a-card>

    <a-row :gutter="16">
      <a-col :span="12">
        <a-card :bordered="false" class="b-solid b-shadow b-radius text-center">
          <div class="fs-16 fw-500 cr-black">Data Penjualan</div>
          <client-only>
            <ve-line
              :data="chartDataSales"
              :grid="grid"
              :settings="chartSettingSales"
              :legend-visible="false"
              height="260px"
            ></ve-line>
          </client-only>
        </a-card>
      </a-col>

      <a-col :span="12">
        <a-card :bordered="false" class="b-solid b-shadow b-radius text-center">
          <div class="fs-16 fw-500 cr-black">Data Pembelian</div>
          <client-only>
            <ve-line
              :data="chartDataPurchase"
              :grid="grid"
              :settings="chartSettingPurchase"
              :legend-visible="false"
              height="260px"
            ></ve-line>
          </client-only>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import axios from "axios";
export default {
  middleware: "authenticated",
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
      nama: "",
      email: "",
      telepon: "",
      alamat: "",
      status: "",
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
  },
  created: function() {
    // get todo items and start listening to events once component is created
    if (!this.$store.state.auth.nama) {
      this.getUser();
    } else {
      this.getlocal();
    }
  },
  methods: {
    getUser() {
      const config = {
        headers: {
          Authorization: "Bearer " + this.$store.state.auth.accessToken
        }
      };
      console.log(this.$store.state.auth.accessToken);
      axios
        .get("https://api.haloatta.com/api/user/info", config)
        .then(response => {
          console.log(response);
          const auth = {
            nama:
              response.data.data.nama_depan +
              " " +
              response.data.data.nama_belakang,
            email: response.data.data.email,
            alamat: response.data.data.alamat,
            status: response.data.data.role_nama,
            telepon: response.data.data.telepon
          };
          this.$store.commit("setAuth", auth); // mutating to store for client rendering
          this.nama =
            response.data.data.nama_depan +
            " " +
            response.data.data.nama_belakang;
          this.email = response.data.data.email;
          this.alamat = response.data.data.alamat;
          this.status = response.data.data.role_nama;
          this.telepon = response.data.data.telepon;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getlocal() {
      this.nama = this.$store.state.auth.nama;
      this.email = this.$store.state.auth.email;
      this.alamat = this.$store.state.auth.alamat;
      this.status = this.$store.state.auth.status;
      this.telepon = this.$store.state.auth.telepon;
    }
  }
};
</script>