<template>
  <div class="md-show w-100">
    <a @click="showPurchase" class="d-inline-block w-100">
      <a-row
        :gutter="16"
        type="flex"
        justify="space-around"
        align="middle"
        class="p-24"
      >
        <a-col :xs="24" :sm="12" :md="12">
          <div class="fs-14 fw-400 cr-gray">No. Pesanan</div>
          <div class="fs-16 fw-500 cr-black">
            {{ number_transaction }}
          </div>
        </a-col>

        <a-col :xs="24" :sm="12" :md="12" class="d-flex">
          <div class="d-flex a-i-center ml-auto">
            <div class="fs-18 fw-500 cr-black mr-8">
              {{ total | currency }}
            </div>
            <a-icon :type="detailPurchase ? 'down' : 'up'" />
          </div>
        </a-col>
      </a-row>
    </a>

    <div v-if="detailPurchase">
      <a-divider class="m-0" />

      <a-row type="flex" justify="end">
        <a-col
          :xs="12"
          :sm="12"
          :md="12"
          class="border-bottom pt-8 pb-8 pl-24 pr-24"
          >Harga Satuan</a-col
        >
        <a-col
          :xs="12"
          :sm="12"
          :md="12"
          class="border-bottom text-right pt-8 pb-8 pl-24 pr-24"
          >{{ subtotal | currency }}</a-col
        >
      </a-row>

      <a-row type="flex" justify="end">
        <a-col
          :xs="12"
          :sm="12"
          :md="12"
          class="border-bottom pt-8 pb-8 pl-24 pr-24"
          >Jumlah</a-col
        >
        <a-col
          :xs="12"
          :sm="12"
          :md="12"
          class="border-bottom text-right pt-8 pb-8 pl-24 pr-24"
          >{{ qty }} Pax</a-col
        >
      </a-row>

      <a-row type="flex" justify="end">
        <a-col
          :xs="12"
          :sm="12"
          :md="12"
          class="border-bottom pt-8 pb-8 pl-24 pr-24"
          >Total Bayar</a-col
        >
        <a-col
          :xs="12"
          :sm="12"
          :md="12"
          class="border-bottom text-right pt-8 pb-8 pl-24 pr-24"
          >{{ (2 * 20000000) | currency }}</a-col
        >
      </a-row>

      <a-row type="flex" justify="end">
        <a-col
          :xs="12"
          :sm="12"
          :md="12"
          class="border-bottom pt-8 pb-8 pl-24 pr-24"
          >DP (Uang Muka)</a-col
        >
        <a-col
          :xs="12"
          :sm="12"
          :md="12"
          class="border-bottom text-right pt-8 pb-8 pl-24 pr-24"
          >{{ 0 | currency }}</a-col
        >
      </a-row>

      <a-row type="flex" justify="end">
        <a-col
          :xs="12"
          :sm="12"
          :md="12"
          class="border-bottom pt-8 pb-8 pl-24 pr-24"
          >Sisa Pembayaran</a-col
        >
        <a-col
          :xs="12"
          :sm="12"
          :md="12"
          class="border-bottom text-right pt-8 pb-8 pl-24 pr-24"
          >{{ 40000000 | currency }}</a-col
        >
      </a-row>
    </div>

    <a-divider class="m-0" />

    <a-row type="flex" justify="space-between" class="pt-16 pb-16 pl-24 pr-24">
      <a-col :span="12">
        <div class="d-flex a-i-center">
          <a-avatar size="small" icon="check" />
          <span class="ml-8">Menunggu Pembayaran</span>
        </div>
      </a-col>

      <a-col :span="12" class="text-right">
        <nuxt-link to="">Detail</nuxt-link>
        <a-divider type="vertical" />
        <nuxt-link to="">Bayar</nuxt-link>
        <a-divider type="vertical" />
        <nuxt-link to="">Hapus</nuxt-link>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  middleware: "authenticated",
  props: { 
    number_transaction: Array,
    subtotal: Number,
    qty: Number,
    total: Number
   },

  data() {
    return {
      detailPurchase: false
    };
  },

  methods: {
    showPurchase() {
      this.detailPurchase = !this.detailPurchase;
    }
  },

  filters: {
    formatDate: function(value) {
      const date = new Date(value);

      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "Mei",
        "Jun",
        "Jul",
        "Agu",
        "Sep",
        "Okt",
        "Nov",
        "Des"
      ];
      const days = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"];

      const dayName = days[date.getDay()];
      const dayOfMonth = date.getDate();
      const month = months[date.getMonth()];
      const year = date.getFullYear();

      return `${dayName}, ${dayOfMonth} ${month} ${year}`;
    }
  }
};
</script>
