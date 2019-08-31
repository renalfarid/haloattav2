<template>
  <div class="ant-layout--results-filter">
    <a-card class="ant-card--results-filter d-flex align-items-center" :bordered="false">
      <div class="ant-card--results-filter-label">Filter</div>
      <div>
        <a-cascader :options="cityData" @change="onChangeCity" :defaultValue="['semua kota']">
          <a-tag class="fs-14 cr-black">Kota {{cityLabel}} <a-icon class="fs-12 cr-gray" type="down" /></a-tag>
        </a-cascader>

        <a-cascader :options="maskapaiData" @change="onChangeMaskapai" :defaultValue="['semua maskapai']">
          <a-tag class="fs-14 cr-black">Maskapai {{maskapaiLabel}} <a-icon class="fs-12" type="down" /></a-tag>
        </a-cascader>

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
      cityLabel: "Semua Kota",
      maskapaiLabel: "Semua Maskapai",
      hotelLabel: "Semua Hotel",
      hargaLabel: "Semua Harga",
      programLabel: "Semua Program",
      cityData: [
        {
          value: "semua kota",
          label: "Semua Kota"
        },
        {
          value: "makassar",
          label: "Makassar"
        },
        {
          value: "jakarta",
          label: "Jakarta"
        }
      ],
      maskapaiData: [
        {
          value: "semua maskapai",
          label: "Semua Maskapai"
        },
        {
          value: "garuda indonesia",
          label: "Garuda Indonesia"
        },
        {
          value: "lion air",
          label: "Lion Air"
        }
      ],
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
    onChangeCity(value, selectedOptions) {
      this.cityLabel = selectedOptions.map(o => o.label).join(", ");
    },
    onChangeMaskapai(value, selectedOptions) {
      this.maskapaiLabel = selectedOptions.map(o => o.label).join(", ");
    },
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