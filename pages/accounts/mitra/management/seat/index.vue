<template>
  <div class="ant-layout--accounts-management-seat">
    <div class="fs-18 fw-500 cr-black">Manajemen Seat</div>
    <div class="fs-16 fw-400 cr-gray">Lengkapi berkas Formulir Keberangkatan Anda</div>

    <a-card :bordered="false" class="ant-card--filter b-solid b-radius b-shadow mt-16 mb-16">
      <a-row :gutter="16" type="flex" justify="space-around" align="middle">
        <a-col :span="4" class="text-uppercase cr-gray fs-14">Filter Seat</a-col>
        <a-col :span="7">
          <a-select showSearch defaultValue="Tampilkan Semua" size="large" style="width: 100%">
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
        <a-col :span="6"></a-col>
        <a-col :span="7"></a-col>
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
                  <div class="fs-14 fw-500 cr-black f-default text-capitalize">Seat {{item.products_categorie}}</div>
                </div>
              </a-col>
              <a-col :span="6">
                <div class="fs-14 fw-400 cr-gray">Sudah Dipesan (Booked)</div>
                <div class="fs-14 fw-500 cr-black">{{item.booked}} Pax</div>
              </a-col>
              <a-col :span="5">
                <div class="fs-14 fw-400 cr-gray">Tersedia (Available)</div>
                <div class="fs-14 fw-500 cr-green">{{item.available}} Pax</div>
              </a-col>
              <a-col :span="5" class="text-right">
                <a-button class="b-shadow b-radius" type="primary">
                  <nuxt-link to="/accounts/mitra/management/seat/pax-list">Lihat Detail</nuxt-link>
                </a-button>
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
    available: "1",
    booked: "3"
  },
  {
    no_transaction: "ATT-TKT-14674422219080148",
    products_categorie: "tiket",
    pax: "2",
    date: "10 Januari 2019",
    program: "Program 9 Hari",
    available: "1",
    booked: "1"
  },
  {
    no_transaction: "ATT-AKM-14674422219080148",
    products_categorie: "akomodasi",
    pax: "2",
    date: "10 Januari 2019",
    program: "Program 9 Hari",
    available: "1",
    booked: "1"
  },
  {
    no_transaction: "ATT-VSI-14674422219080148",
    products_categorie: "visa",
    pax: "2",
    date: "10 Januari 2019",
    program: "Program 9 Hari",
    available: "1",
    booked: "1"
  },
  {
    no_transaction: "ATT-INS-14674422219080148",
    products_categorie: "insurance",
    pax: "2",
    date: "10 Januari 2019",
    program: "Program 9 Hari",
    available: "1",
    booked: "1"
  }
];
export default {
  layout: "accounts",
  name: "mitraManajemenSeat",
  head() {
    return {
      title: "Manajemen Seat - Kembangkan Bisnis Umrah Anda | Haloatta"
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