<template>
  <a-card class="b-solid b-radius ant-card--payment-sider">
    <div :style="{ padding: '16px 24px' }">
      <h3 class="fw-600 cr-black m-0">Detail Transaksi</h3>
    </div>

    <a-divider :style="{ margin: '0' }" />

    <div class="p-24">
      <h2 class="fw-500 cr-black mb-16">{{ title_package }}</h2>
      <div class="fs-14 fw-400 cr-black-opacity">Program {{ program }} Hari</div>
      <div class="fs-14 fw-400 cr-black-opacity">
        Tgl Berangkat : {{ berangkat | formatDate }}
      </div>

      <a-divider :style="{ margin: '16px 0' }" />

      <div class="d-flex align-items-center">
        <div class="fs-14 fw-400 cr-black-opacity">Jumlah Pax</div>
        <div class="fs-14 fw-400 cr-black ml-auto">{{ qty }} Pax</div>
      </div>

      <a-divider :style="{ margin: '16px 0' }" />

      <div class="d-flex align-items-center">
        <div class="fs-14 fw-400 cr-black-opacity">Subtotal</div>
        <div class="fs-14 fw-400 cr-black ml-auto">
          {{ total | currency }}
        </div>
      </div>

      <a-divider :style="{ margin: '16px 0' }" />

      <div class="d-flex align-items-center">
        <div class="fs-16 fw-500 cr-black">Total Bayar</div>
        <div class="fs-16 fw-500 cr-black ml-auto">
          {{ total | currency }}
        </div>
      </div>
    </div>

    <div class="p-24" :style="{ 'background-color': '#000' }">
      <div class="fs-14 fw-400 text-uppercase cr-white mb-8">
        Bayar Bertahap
      </div>
      <div class="d-flex align-items-center">
        <div class="fs-14 fw-400 cr-white">Uang Muka (30%)</div>
        <div class="fs-14 fw-400 cr-white ml-auto">
          {{ ((total * 30) / 100) | currency }}
        </div>
      </div>
      <a-divider :style="{ margin: '12px 0', opacity: '.2' }" />
      <div class="d-flex align-items-center">
        <div class="fs-14 fw-400 cr-white">Pelunasan</div>
        <div class="fs-14 fw-400 cr-white ml-auto">
          {{ ((total * 30) / 100 - total) | currency }}
        </div>
      </div>
    </div>

    <div class="p-24">
      <span>Jatuh tempo pelunasan 30 hari sebelum tanggal keberangkatan.</span>
    </div>
  </a-card>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
        title_package: "Umrah Alila Desember 2020",
        berangkat: "2020-12-20",
        program: 9,
        total: 25000000,
        qty: 1,
    };
  },

  methods: {},

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
