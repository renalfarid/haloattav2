<template>
  <div class="ant-layout--results-filter">
    <a-card class="ant-card--results-filter d-flex align-items-center" :bordered="false">
      <div class="ant-card--results-filter-label">Filter</div>
      <div>
        <a-cascader :options="maskapaiData" @change="onChangeMaskapai">
          <a-tag class="fs-14 cr-black">{{maskapaiLabel}} <a-icon class="fs-12" type="down" /></a-tag>
        </a-cascader>

        <a-cascader :options="hotelData" @change="onChangeHotel">
          <a-tag class="fs-14 cr-black">{{hotelLabel}} <a-icon class="fs-12" type="down" /></a-tag>
        </a-cascader>

        <a-cascader :options="umarohData" @change="onChangeUmaroh">
          <a-tag class="fs-14 cr-black">{{umarohLabel}} <a-icon class="fs-12" type="down" /></a-tag>
        </a-cascader>

        <a-cascader :options="hargaData" @change="onChangeHarga">
          <a-tag class="fs-14 cr-black">{{hargaLabel}} <a-icon class="fs-12" type="down" /></a-tag>
        </a-cascader>
      </div>

      <div class="ml-auto">
        <a-cascader :options="sortData" @change="onChangeSort">
          <a-tag class="fs-14 cr-black">
            {{sortLabel}}
            <a-icon class="fs-12" type="down" />
          </a-tag>
        </a-cascader>
      </div>
    </a-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      maskapaiLabel: "Semua Maskapai",
      hotelLabel: "Fasilitas Bintang",
      hargaLabel: "Harga",
      umarohLabel: "Semua Umaroh",
      sortLabel: "Pilih Berdasarkan",
      maskapaiData: [
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
          value: "Bintang 3",
          label: "Bintang 3"
        },
        {
          value: "Bintang 4",
          label: "Bintang 4"
        }
      ],
      hargaData: [
        {
          value: "Rp0 - Rp20.000.000",
          label: "Rp0 - Rp20.000.000"
        },
        {
          value: "Rp20.000.000 - Rp50.000.000",
          label: "Rp20.000.000 - Rp50.000.000"
        }
      ],
      umarohData: [
        {
          value: "ATTA",
          label: "ATTA"
        },
        {
          value: "PANDANG-PANDANG",
          label: "PANDANG-PANDANG"
        }
      ],
      sortData: [
        {
          value: "Terpopuler",
          label: "Terpopuler"
        },
        {
          value: "Terlaris",
          label: "Terlaris"
        },
        {
          value: "Terbaru",
          label: "Terbaru"
        },
        {
          value: "Termurah",
          label: "Termurah"
        },
        {
          value: "Termahal",
          label: "Termahal"
        }
      ]
    };
  },
  methods: {
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