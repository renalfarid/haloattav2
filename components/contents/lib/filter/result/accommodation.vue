<template>
  <div class="ant-layout--results-filter">
    <a-card class="ant-card--results-filter d-flex align-items-center" :bordered="false">
      <div class="ant-card--results-filter-label">Filter</div>
      <div>
        <a-cascader :options="hotelData" @change="onChangeHotel" :defaultValue="['semua hotel']">
          <a-tag class="fs-14 cr-black">Hotel {{hotelLabel}} <a-icon class="fs-12" type="down" /></a-tag>
        </a-cascader>

        <a-cascader :options="hargaData" @change="onChangeHarga" :defaultValue="['semua harga']">
          <a-tag class="fs-14 cr-black">Harga {{hargaLabel}} <a-icon class="fs-12" type="down" /></a-tag>
        </a-cascader>

        <a-cascader :options="programData" @change="onChangeProgram" :defaultValue="['semua program']">
          <a-tag class="fs-14 cr-black">Program {{programLabel}} <a-icon class="fs-12" type="down" /></a-tag>
        </a-cascader>
      </div>
    </a-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hotelLabel: "Semua Hotel",
      hargaLabel: "Semua Harga",
      programLabel: "Semua Program",
      hotelData: [
        {
          value: "semua hotel",
          label: "Semua Hotel"
        },
        {
          value: "bintang 3",
          label: "Bintang 3"
        },
        {
          value: "bintang 4",
          label: "Bintang 4"
        }
      ],
      hargaData: [
        {
          value: "semua harga",
          label: "Semua Harga"
        },
        {
          value: "Rp0 - Rp20,000,000",
          label: "Rp0 - Rp20,000,000"
        },
        {
          value: "Rp20,000,000 - Rp20,000,000",
          label: "Rp20,000,000 - Rp40.000.000"
        }
      ],
      programData: [
        {
          value: "semua program",
          label: "Semua Program"
        },
        {
          value: "9 hari",
          label: "9 Hari"
        },
        {
          value: "10 hari",
          label: "10 Hari"
        }
      ]
    };
  },
  methods: {
    onChangeHotel(value, selectedOptions) {
      this.hotelLabel = selectedOptions.map(o => o.label).join(", ");
    },
    onChangeHarga(value, selectedOptions) {
      this.hargaLabel = selectedOptions.map(o => o.label).join(", ");
    },
    onChangeProgram(value, selectedOptions) {
      this.programLabel = selectedOptions.map(o => o.label).join(", ");
    }
  }
};
</script>