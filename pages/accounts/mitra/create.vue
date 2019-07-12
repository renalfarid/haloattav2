<template>
  <div class="ant-create--package">
    <a-card :bordered="false" class="b-shadow b-radius">
      <a-row :gutter="32" type="flex" justify="space-around" align="middle">
        <a-col :span="10">
          <div class="fs-30 fw-500 cr-black f-default mb-16">Memperkenalkan Buat Paket Umrah</div>
          <div class="fs-15 fw-400 cr-black mb-32">
            Buat paket umrah anda sendiri, atur margin,
            keuntungan, jadwal keberangkatan dan dapatkan
            berbagai benefit lainnya
          </div>
          <a-button class="ant-btn--action" size="large" @click="createPackage">Buat Paket</a-button>
        </a-col>
        <a-col :span="14">
          <img src="/icons/steps_1.png" />
        </a-col>
      </a-row>

      <a-divider :style="{marginBottom: '40px'}" />

      <a-row :gutter="32">
        <a-col :span="10">
          <div class="fs-30 fw-500 cr-black f-default mb-16">Bagaimana Membuat Paket Umrah Anda</div>
        </a-col>
      </a-row>

      <a-row :gutter="32" type="flex" justify="space-around" align="middle">
        <a-col :span="14">
          <img src="/icons/steps_2.png" />
        </a-col>
        <a-col :span="10">
          <div
            class="fs-24 fw-500 cr-black f-default text-right mb-16"
          >Tentukan Program Hari, Tanggal dan Jumlah Pax</div>
          <div class="fs-15 fw-400 text-right cr-black">
            Tentukan Program Hari, tanggal keberangkatan
            serta jumlah pax yang anda rencanakan
          </div>
        </a-col>
      </a-row>

      <a-row :gutter="32" type="flex" justify="space-around" align="middle" class="mt-16 mb-16">
        <a-col :span="10">
          <div
            class="fs-24 fw-500 cr-black f-default text-left mb-16"
          >Tentukan Tiket, Hotel, Visa & Asuransi</div>
          <div class="fs-15 fw-400 text-left cr-black">
            Tentukan tiket maskapai dan LA akomodasi,
            visa dan asuransi ibadah umrah anda
          </div>
        </a-col>
        <a-col :span="14">
          <img src="/icons/steps_3.png" />
        </a-col>
      </a-row>

      <a-row :gutter="32" type="flex" justify="space-around" align="middle" class="mb-32">
        <a-col :span="14">
          <img src="/icons/steps_4.png" />
        </a-col>
        <a-col :span="10">
          <div class="fs-24 fw-500 cr-black f-default text-right mb-16">Pilih Komponen Optional</div>
          <div class="fs-15 fw-400 text-right cr-black">
            Pilih komponen optional seperti handling domestik,
            manasik pemantapan, perlengkapan umrah dan
            tour leader pendamping
          </div>
        </a-col>
      </a-row>

      <a-row :gutter="32" type="flex" justify="space-around" align="middle" class="mb-32">
        <a-col :span="10">
          <div class="fs-24 fw-500 cr-black f-default text-left mb-16">Mulai Buat Paket Umrah</div>
          <div class="fs-15 fw-400 text-left cr-black">
            Dapatkan keuntungan lebih dari penjualan paket
            umrah anda
          </div>
        </a-col>
        <a-col :span="14" class="text-right">
          <a-button class="ant-btn--action" size="large" @click="createPackage">Buat Paket</a-button>
        </a-col>
      </a-row>
    </a-card>
  </div>
</template>
<script>
export default {
  layout: "accounts",
  name: "mitraCreate",
  head() {
    return {
      title: "Buat Paket Umrah - Haloatta"
    };
  },
  methods: {
    createPackage(){
      this.$router.push('/create/steps/schedule');
    }
  }
};
</script>
