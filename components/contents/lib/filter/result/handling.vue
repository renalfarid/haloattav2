<template>
  <div class="ant-layout--results-filter">
    <a-card class="ant-card--results-filter d-flex align-items-center" :bordered="false">
      <div class="ant-card--results-filter-label">Filter</div>
      <div>
        <a-cascader :options="vendorData" @change="onChangeVendor">
          <a-tag class="fs-14 cr-black">
            {{vendorLabel}}
            <a-icon class="fs-12" type="down" />
          </a-tag>
        </a-cascader>

        <a-cascader :options="hargaData" @change="onChangeHarga">
          <a-tag class="fs-14 cr-black">
            {{hargaLabel}}
            <a-icon class="fs-12" type="down" />
          </a-tag>
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
      vendorLabel: "Semua Vendor",
      hargaLabel: "Harga",
      sortLabel: "Pilih Berdasarkan",
      vendorData: [
        {
          value: "Hasanuddin Handling",
          label: "Hasanuddin Handling"
        },
        {
          value: "Cengkareng Handling",
          label: "Cengkareng Handling"
        }
      ],
      hargaData: [
        {
          value: "Rp0 - Rp100.000",
          label: "Rp0 - Rp100.000"
        },
        {
          value: "Rp100.000 - Rp300.000",
          label: "Rp100.000 - Rp300.000"
        }
      ],
      sortData: [
        {
          value: "Terlaris",
          label: "Terlaris"
        },
        {
          value: "Terbaru",
          label: "Terbaru"
        },
        {
          value: "Terpopuler",
          label: "Terpopuler"
        },
        {
          value: "Rekomendasi",
          label: "Rekomendasi"
        }
      ]
    };
  },
  methods: {
    onChangeVendor(value, selectedOptions) {
      this.vendorLabel = selectedOptions.map(o => o.label).join(", ");
    },
    onChangeHarga(value, selectedOptions) {
      this.hargaLabel = selectedOptions.map(o => o.label).join(", ");
    },
    onChangeSort(value, selectedOptions) {
      this.sortLabel = selectedOptions.map(o => o.label).join(", ");
    }
  }
};
</script>