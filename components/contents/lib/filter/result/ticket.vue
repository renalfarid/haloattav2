<template>
  <div class="ant-layout--results-filter">
    <a-card class="ant-card--results-filter d-flex align-items-center" :bordered="false">
      <div class="ant-card--results-filter-label">Filter</div>
      <div>
        <a-cascader :options="flightData" @change="onChangeFlight">
          <a-tag class="fs-14 cr-black">
            {{flightLabel}}
            <a-icon class="fs-12 cr-gray" type="down" />
          </a-tag>
        </a-cascader>

        <a-cascader :options="maskapaiData" @change="onChangeMaskapai">
          <a-tag class="fs-14 cr-black">
            {{maskapaiLabel}}
            <a-icon class="fs-12" type="down" />
          </a-tag>
        </a-cascader>

        <a-cascader :options="hargaData" @change="onChangeHarga">
          <a-tag class="fs-14 cr-black">
            {{hargaLabel}}
            <a-icon class="fs-12" type="down" />
          </a-tag>
        </a-cascader>

        <a-cascader
          :options="startData"
          @change="onChangeStart"
        >
          <a-tag class="fs-14 cr-black">
            {{startLabel}}
            <a-icon class="fs-12" type="down" />
          </a-tag>
        </a-cascader>

        <a-cascader
          :options="endData"
          @change="onChangeEnd"
        >
          <a-tag class="fs-14 cr-black">
            {{endLabel}}
            <a-icon class="fs-12" type="down" />
          </a-tag>
        </a-cascader>
      </div>

      <div class="ml-auto">
        <a-cascader :options="sortData" @change="onChangeSort" :defaultValue="['Rekomendasi']">
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
      flightLabel: "Semua Penerbangan",
      maskapaiLabel: "Semua Maskapai",
      hargaLabel: "Semua Harga",
      startLabel: "Waktu Berangkat",
      endLabel: "Waktu Tiba",
      sortLabel: "Pilih Berdasarkan",
      flightData: [
        {
          value: "langsung",
          label: "Langsung"
        },
        {
          value: "transit",
          label: "Transit"
        }
      ],
      maskapaiData: [
        {
          value: "garuda",
          label: "Garuda"
        },
        {
          value: "lion air",
          label: "Lion Air"
        },
        {
          value: "Saudi Air",
          label: "Saudi Air"
        },
        {
          value: "Scoot",
          label: "Scoot"
        }
      ],
      hargaData: [
        {
          value: "Rp0 - Rp10,000,000",
          label: "Rp0 - Rp10,000,000"
        },
        {
          value: "Rp10,000,000 - Rp20,000,000",
          label: "Rp10,000,000 - Rp20,000,000"
        },
        {
          value: "Rp20,000,000 - Rp20,000,000",
          label: "Rp20,000,000 - Rp40.000.000"
        }
      ],
      startData: [
        {
          value: "00.00 - 06.00",
          label: "00.00 - 06.00"
        },
        {
          value: "06.00 - 12.00",
          label: "06.00 - 12.00"
        },
        {
          value: "12.00 - 18.00",
          label: "12.00 - 18.00"
        },
        {
          value: "18.00 - 24.00",
          label: "18.00 - 24.00"
        }
      ],
      endData: [
        {
          value: "00.00 - 06.00",
          label: "00.00 - 06.00"
        },
        {
          value: "06.00 - 12.00",
          label: "06.00 - 12.00"
        },
        {
          value: "12.00 - 18.00",
          label: "12.00 - 18.00"
        },
        {
          value: "18.00 - 24.00",
          label: "18.00 - 24.00"
        }
      ],
      sortData: [
        {
          value: "Harga Terendah",
          label: "Harga Terendah"
        },
        {
          value: "Berangkat Paling Awal",
          label: "Berangkat Paling Awal"
        },
        {
          value: "Berangkat Paling Akhir",
          label: "Berangkat Paling Akhir"
        },
        {
          value: "Tiba Paling Awal",
          label: "Tiba Paling Awal"
        },
        {
          value: "Tiba Paling Akhir",
          label: "Tiba Paling Akhir"
        }
      ]
    };
  },
  methods: {
    onChangeFlight(value, selectedOptions) {
      this.flightLabel = selectedOptions.map(o => o.label).join(", ");
    },
    onChangeMaskapai(value, selectedOptions) {
      this.maskapaiLabel = selectedOptions.map(o => o.label).join(", ");
    },
    onChangeHarga(value, selectedOptions) {
      this.hargaLabel = selectedOptions.map(o => o.label).join(", ");
    },
    onChangeStart(value, selectedOptions) {
      this.startLabel = selectedOptions.map(o => o.label).join(", ");
    },
    onChangeEnd(value, selectedOptions) {
      this.endLabel = selectedOptions.map(o => o.label).join(", ");
    },
    onChangeSort(value, selectedOptions) {
      this.sortLabel = selectedOptions.map(o => o.label).join(", ");
    }
  }
};
</script>