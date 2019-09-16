<template>
  <div class="ant-layout--results-filter">
    <a-card class="ant-card--results-filter d-flex align-items-center" :bordered="false">
      <div class="ant-card--results-filter-label">Filter</div>
      <div>
        <a-cascader :options="hargaData" @change="onChangeHarga">
          <a-tag class="fs-14 cr-black">
            {{hargaLabel}}
            <a-icon class="fs-12" type="down" />
          </a-tag>
        </a-cascader>

        <a-cascader
          :options="distanceData"
          @change="onChangeDistance"
        >
          <a-tag class="fs-14 cr-black">
            {{distanceLabel}}
            <a-icon class="fs-12" type="down" />
          </a-tag>
        </a-cascader>

        <a-cascader :options="rateData" @change="onChangeRate">
          <a-tag class="fs-14 cr-black">
            {{rateLabel}}
            <a-icon class="fs-12" type="down" />
          </a-tag>
        </a-cascader>
      </div>

      <div class="ml-auto">
        <a-cascader
          :options="sortData"
          @change="onChangeSort"
          :defaultValue="['Rekomendasi']"
        >
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
      rateLabel: "Bintang",
      hargaLabel: "Harga",
      distanceLabel: "Jarak Hotel",
      sortLabel: "Pilih Berdasarkan",
      rateData: [
        {
          value: "Bintang 3",
          label: "Bintang 3"
        },
        {
          value: "Bintang 4",
          label: "Bintang 4"
        },
        {
          value: "Bintang 5",
          label: "Bintang 5"
        }
      ],
      hargaData: [
        {
          value: "Rp0 - Rp20.000.000",
          label: "Rp0 - Rp20.000.000"
        },
        {
          value: "Rp20.000.000 - Rp20.000.000",
          label: "Rp20.000.000 - Rp40.000.000"
        }
      ],
      distanceData: [{
          value: "0 KM - 1 KM",
          label: "0 KM - 1 KM"
        },
        {
          value: "1 KM - 2 KM",
          label: "1 KM - 2 KM"
        }
      ],
      sortData: [
        {
          value: "Rekomendasi",
          label: "Rekomendasi"
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
          value: "Harga Terendah",
          label: "Harga Terendah"
        },
        {
          value: "Terpopuler",
          label: "Terpopuler"
        }
      ]
    };
  },
  methods: {
    onChangeRate(value, selectedOptions) {
      this.rateLabel = selectedOptions.map(o => o.label).join(", ");
    },
    onChangeHarga(value, selectedOptions) {
      this.hargaLabel = selectedOptions.map(o => o.label).join(", ");
    },
    onChangeDistance(value, selectedOptions) {
      this.distanceLabel = selectedOptions.map(o => o.label).join(", ");
    },
    onChangeSort(value, selectedOptions) {
      this.sortLabel = selectedOptions.map(o => o.label).join(", ");
    }
  }
};
</script>