<template>
  <div class="ant-layout--accounts-management-seat">
    <div class="fs-18 fw-500 cr-black">Daftar Pemberangkatan</div>
    <div
      class="fs-16 fw-400 cr-gray"
    >Lengkapi berkas Formulir Keberangkatan Anda, 45 hari sebelum tanggal pemberangkatan</div>

    <a-card :bordered="false" class="ant-card--filter b-solid b-radius b-shadow mt-16 mb-16">
      <a-row :gutter="16" type="flex" justify="space-around" align="middle">
        <a-col :span="2" class="text-uppercase cr-gray fs-14">Filter</a-col>
        <a-col :span="7">
          <a-select
            showSearch
            placeholder="Pilih Produk"
            defaultValue="Tampilkan Semua"
            size="large"
            style="width: 100%"
          >
            <a-select-option value="Tampilkan Semua">Tampilkan Semua</a-select-option>
            <a-select-option value="Umrah">Umrah</a-select-option>
            <a-select-option value="Tiket Group">Tiket Group</a-select-option>
            <a-select-option value="LA Akomodasi">LA Akomodasi</a-select-option>
            <a-select-option value="Visa">Visa</a-select-option>
            <a-select-option value="Asuransi">Asuransi</a-select-option>
            <a-select-option value="Handling">Handling</a-select-option>
            <a-select-option value="Manasik">Manasik</a-select-option>
            <a-select-option value="Perlengkapan">Perlengkapan</a-select-option>
            <a-select-option value="Tour Leader">Tour Leader</a-select-option>
          </a-select>
        </a-col>
        <a-col :span="8">
          <a-select
            showSearch
            placeholder="Pilih Status Pemberangkatan"
            defaultValue="Semua Status Pemberangkatan"
            size="large"
            style="width: 100%"
          >
            <a-select-option value="Semua Status Pemberangkatan">Semua Status Pemberangkatan</a-select-option>
            <a-select-option value="Menunggu Pemberangkatan">Menunggu Pemberangkatan</a-select-option>
            <a-select-option value="Pemberangkatan">Pemberangkatan</a-select-option>
            <a-select-option value="Selesai">Selesai</a-select-option>
          </a-select>
        </a-col>
        <a-col :span="7">
          <a-select
            showSearch
            placeholder="Pilih Status Berkas"
            defaultValue="Semua Status Berkas"
            size="large"
            style="width: 100%"
          >
            <a-select-option value="Semua Status Berkas">Semua Status Berkas</a-select-option>
            <a-select-option value="Pengumpulan Berkas">Pengumpulan Berkas</a-select-option>
            <a-select-option value="Berkas Lengkap">Berkas Lengkap</a-select-option>
          </a-select>
        </a-col>
      </a-row>
    </a-card>

    <a-list itemLayout="horizontal" :pagination="pagination" :dataSource="dataSeat">
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
                <div class="fs-14 fw-500 cr-black">{{item.no_transaction}}</div>
              </a-col>
              <a-col :span="6">
                <div class="fs-14 fw-400 cr-gray">Program Hari</div>
                <div class="fs-14 fw-500">{{item.program}}</div>
              </a-col>
              <a-col :span="5">
                <div class="fs-14 fw-400 cr-gray">Tanggal Keberangkatan</div>
                <div class="fs-14 fw-500 cr-black">{{item.date}}</div>
              </a-col>
              <a-col :span="5" class="text-right">
                <div class="fs-14 fw-400 cr-gray">Jumlah Pax</div>
                <div class="fs-14 fw-500 cr-black">{{item.pax}} Pax</div>
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
              <a-col :span="8">
                <div class="d-flex align-items-center">
                  <div class="mr-8">
                    <a-avatar
                      v-if="item.products_categorie === 'umrah'"
                      style="backgroundColor: rgba(15, 172, 243, .1);padding: 2px"
                      src="/icons/search/tabs/color/umrah.svg"
                    />
                    <a-avatar
                      v-if="item.products_categorie === 'tiket'"
                      style="backgroundColor: rgba(15, 172, 243, .1);padding: 4px"
                      src="/icons/search/tabs/color/ticket.svg"
                    />
                    <a-avatar
                      v-if="item.products_categorie === 'akomodasi'"
                      style="backgroundColor: rgba(15, 172, 243, .1);padding: 4px"
                      src="/icons/search/tabs/color/accommodation.svg"
                    />
                    <a-avatar
                      v-if="item.products_categorie === 'visa'"
                      style="backgroundColor: rgba(15, 172, 243, .1);padding: 4px"
                      src="/icons/search/tabs/color/visa.svg"
                    />
                    <a-avatar
                      v-if="item.products_categorie === 'insurance'"
                      style="backgroundColor: rgba(15, 172, 243, .1);padding: 4px"
                      src="/icons/search/tabs/color/insurance.svg"
                    />
                  </div>
                  <div
                    class="fs-14 fw-500 cr-black f-default text-capitalize"
                  >Pemberangkatan {{item.products_categorie}}</div>
                </div>
              </a-col>
              <a-col :span="6">
                <div class="fs-14 fw-400 cr-gray">Status Pemberangkatan</div>
                <div class="fs-14 fw-500 cr-black">
                    <a-badge status="default" :text="item.status_departure" v-if="item.status_departure === 'Menunggu Pemberangkatan'" />
                    <a-badge status="processing" :text="item.status_departure" v-if="item.status_departure === 'Pemberangkatan'" />
                    <a-badge status="success" :text="item.status_departure" v-if="item.status_departure === 'Selesai'" />
                </div>
              </a-col>
              <a-col :span="5">
                <div class="fs-14 fw-400 cr-gray">Status Berkas</div>
                <div class="fs-14 fw-500 cr-orange" v-if="item.status_file === 'Pengumpulan Berkas'">{{item.status_file}}</div>
                <div class="fs-14 fw-500 cr-success" v-if="item.status_file === 'Berkas Lengkap'">{{item.status_file}}</div>
              </a-col>
              <a-col :span="5" class="text-right">
                <nuxt-link to="/accounts/mitra/jamaah/berkas">
                  <span class="fs-14 fw-500 cr-green">
                    Lihat Berkas
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
const dataSeat = [
  {
    no_transaction: "ATT-UMH-14674422219080148",
    products_categorie: "umrah",
    pax: "4",
    date: "05 Januari 2019",
    program: "Program 9 Hari",
    status_departure: "Menunggu Pemberangkatan",
    status_file: "Berkas Lengkap"
  },
  {
    no_transaction: "ATT-TKT-14674422219080148",
    products_categorie: "tiket",
    pax: "2",
    date: "10 Januari 2019",
    program: "Program 9 Hari",
    status_departure: "Pemberangkatan",
    status_file: "Berkas Lengkap"
  },
  {
    no_transaction: "ATT-AKM-14674422219080148",
    products_categorie: "akomodasi",
    pax: "2",
    date: "10 Januari 2019",
    program: "Program 9 Hari",
    status_departure: "Selesai",
    status_file: "Berkas Lengkap"
  },
  {
    no_transaction: "ATT-VSI-14674422219080148",
    products_categorie: "visa",
    pax: "2",
    date: "10 Januari 2019",
    program: "Program 9 Hari",
    status_departure: "Menunggu Pemberangkatan",
    status_file: "Pengumpulan Berkas"
  },
  {
    no_transaction: "ATT-INS-14674422219080148",
    products_categorie: "insurance",
    pax: "2",
    date: "10 Januari 2019",
    program: "Program 9 Hari",
    status_departure: "Selesai",
    status_file: "Berkas Lengkap"
  }
];
export default {
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
      dataSeat,
      pagination: {
        onChange: page => {
          console.log(page);
        },
        pageSize: 10
      }
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  }
};
</script>