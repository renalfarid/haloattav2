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

        <a-cascader
          :options="stayData"
          @change="onChangeStay"
        >
          <a-tag class="fs-14 cr-black">
            {{stayLabel}}
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
      stayLabel: "Periode Stay",
      sortLabel: "Pilih Berdasarkan",
      vendorData: [
        {
          value: "Damai Travel",
          label: "Damai Travel"
        },
        {
          value: "Flaywel",
          label: "Flaywel"
        },
        {
          value: "Al Bilad",
          label: "Al Bilad"
        }
      ],
      hargaData: [
        {
          value: "Rp0 - Rp1,000,000",
          label: "Rp0 - Rp1,000,000"
        },
        {
          value: "Rp1,000,000 - Rp3,000,000",
          label: "Rp1,000,000 - Rp3.000.000"
        }
      ],
      stayData: [
        {
          value: "15 hari",
          label: "15 Hari"
        },
        {
          value: "30 hari",
          label: "30 Hari"
        }
      ],
      sortData: [
        {
          value: "Terbaru",
          label: "Terbaru"
        },
        {
          value: "Terlaris",
          label: "Terlaris"
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
    onChangeVendor(value, selectedOptions) {
      this.vendorLabel = selectedOptions.map(o => o.label).join(", ");
    },
    onChangeHarga(value, selectedOptions) {
      this.hargaLabel = selectedOptions.map(o => o.label).join(", ");
    },
    onChangeStay(value, selectedOptions) {
      this.stayLabel = selectedOptions.map(o => o.label).join(", ");
    },
    onChangeSort(value, selectedOptions) {
      this.sortLabel = selectedOptions.map(o => o.label).join(", ");
    }
  }
};
</script>