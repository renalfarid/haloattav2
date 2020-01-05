<template>
  <div class="ant-layout--accounts-management-seat">
    <div class="fs-18 fw-500 cr-black">Daftar Pemberangkatan</div>
    <div class="fs-16 fw-400 cr-gray">
      Lengkapi berkas Formulir Keberangkatan Anda, 45 hari sebelum tanggal
      pemberangkatan
    </div>

    <a-card :bordered="false" class="ant-card--filter b-solid b-radius b-shadow mt-16 mb-16">
      <a-row :gutter="16" type="flex" justify="space-around" align="middle">
        <a-col :span="2" class="text-uppercase cr-gray fs-14">Filter</a-col>
        <a-col :span="7">
          <a-select
            showSearch
            placeholder="Pilih Produk"
            defaultValue="Tampilkan Semua"
            style="width: 100%"
          >
            <a-select-option value="Tampilkan Semua">Tampilkan Semua</a-select-option>
            <a-select-option value="Umrah">Umrah</a-select-option>
            <a-select-option value="Tiket Group">Tiket Group</a-select-option>
            <a-select-option value="LA Akomodasi">LA Akomodasi</a-select-option>
            <a-select-option value="Visa">Visa</a-select-option>
            <a-select-option value="Asuransi">Asuransi</a-select-option>
          </a-select>
        </a-col>
        <a-col :span="8">
          <a-select
            showSearch
            placeholder="Pilih Status Pemberangkatan"
            defaultValue="Semua Status Pemberangkatan"
            style="width: 100%"
          >
            <a-select-option value="Semua Status Pemberangkatan">Semua Status Pemberangkatan</a-select-option>
            <a-select-option value="Menunggu Pemberangkatan">Menunggu Pemberangkatan</a-select-option>
            <a-select-option value="Pemberangkatan">Pemberangkatan</a-select-option>
            <a-select-option value="Selesai">Selesai</a-select-option>
          </a-select>
        </a-col>
        <a-col :span="7"></a-col>
      </a-row>
    </a-card>

    <a-list itemLayout="horizontal" :pagination="pagination" :dataSource="dataHistory">
      <a-list-item
        slot="renderItem"
        slot-scope="item, index"
        :key="index"
        class="b-solid b-radius b-shadow mt-16 mb-16 p-0"
        style="backgroundColor: #ffffff"
      >
        <a-skeleton :loading="loading" avatar active>
          <div class="w-100">
            <a-row :gutter="16" class="m-0 p-16">
              <a-col :span="8">
                <div class="fs-14 fw-400 cr-gray">No. Transaksi</div>
                <div class="fs-14 fw-500 cr-black">{{ item.nomor_transaksi }}</div>
              </a-col>
              <a-col :span="6">
                <div class="fs-14 fw-400 cr-gray">Program Hari</div>
                <div class="fs-14 fw-500">-/tidak ada</div>
              </a-col>
              <a-col :span="5">
                <div class="fs-14 fw-400 cr-gray">Tanggal Keberangkatan</div>
                <div class="fs-14 fw-500 cr-black">-/tidak ada</div>
              </a-col>
              <a-col :span="5" class="text-right">
                <div class="fs-14 fw-400 cr-gray">Jumlah Pax</div>
                <div class="fs-14 fw-500 cr-black">{{ item.pax }} Pax</div>
              </a-col>
            </a-row>

            <a-row
              :gutter="16"
              type="flex"
              justify="space-between"
              align="middle"
              class="m-0 p-16"
              style="borderTop: 1px solid #f5f5f5"
            >
              <a-col :span="14">
                <div class="d-flex align-items-center">
                  <div class="mr-8">
                    <a-avatar
                      v-if="item.tipe_produk === 'UMRAH REGULER'"
                      style="backgroundColor: rgb(15, 172, 243);padding: 2px"
                      src="/icons/search/tabs/white/umrah.svg"
                    />
                    <a-avatar
                      v-if="item.tipe_produk === 'Sikopatuh'"
                      style="backgroundColor: rgb(244, 54, 98);padding: 4px"
                      src="/icons/search/tabs/white/ticket.svg"
                    />
                    <a-avatar
                      v-if="item.tipe_produk === 'akomodasi'"
                      style="backgroundColor: rgb(5, 203, 176);padding: 4px"
                      src="/icons/search/tabs/white/accommodation.svg"
                    />
                    <a-avatar
                      v-if="item.tipe_produk === 'visa'"
                      style="backgroundColor: rgb(82, 196, 26);padding: 4px"
                      src="/icons/search/tabs/white/visa.svg"
                    />
                    <a-avatar
                      v-if="item.tipe_produk === 'insurance'"
                      style="backgroundColor: rgb(255, 124, 10);padding: 4px"
                      src="/icons/search/tabs/white/insurance.svg"
                    />
                  </div>
                  <div class="fs-14 fw-500 cr-black f-default text-capitalize">{{ item.nama_paket }}</div>
                </div>
              </a-col>
              <a-col :span="5">
                <div class="fs-14 fw-400 cr-gray">Status Pemberangkatan</div>
                <div class="fs-14 fw-500 cr-black">
                  <a-badge
                    status="default"
                    :text="item.status_departure"
                    v-if="item.status_departure === 'Menunggu Pemberangkatan'"
                  />
                  <a-badge
                    status="processing"
                    :text="item.status_departure"
                    v-if="item.status_departure === 'Pemberangkatan'"
                  />
                  <a-badge
                    status="success"
                    :text="item.status_departure"
                    v-if="item.status_departure === 'Selesai'"
                  />
                  <a-badge status="success" text="-/tidak ada" v-else />
                </div>
              </a-col>
              <a-col :span="5" class="text-right">
                <nuxt-link to="/accounts/departure/detail">
                  <span class="fs-14 fw-500 cr-green">
                    Lihat Detail
                    <a-icon type="right" class="fs-12 ml-8" />
                  </span>
                </nuxt-link>
              </a-col>
            </a-row>
          </div>
        </a-skeleton>
      </a-list-item>
    </a-list>
  </div>
</template>
<script>
const Cookie = process.client ? require("js-cookie") : undefined;
import axios from "axios";
export default {
  middleware: "authenticated",
  layout: "accounts",
  name: "mitraDeparture",
  head() {
    return {
      title: "Daftar Pemberangkatan - Kembangkan Bisnis Umrah Anda | Haloatta"
    };
  },

  data() {
    return {
      loading: true,
      pagination: {
        onChange: page => {
          console.log(page);
        },
        pageSize: 10
      },
      dataHistory: []
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  },
  created: function() {
    this.getdata();
  },
  methods: {
    async getdata() {
      const token = Cookie.get("auth");
      const config = {
        headers: {
          Authorization: "Bearer " + token
        }
      };

      let data = {
        status_bayar: "Lunas"
      };

      axios
        .post(process.env.baseUrl + "transaksi/history", data, config)
        .then(response => {
          if (response.data.status == 200) {
            this.dataHistory = response.data.data.data;
          } else {
            this.$message.error(response.data.msg);
          }
        })
        .catch(() => {
          this.$message.success("Salah");
        });
    }
  }
};
</script>
