<template>
  <div class="ant-layout--results-filter">
    <a-card class="ant-card--results-filter d-flex align-items-center" :bordered="false">
      <div class="ant-card--results-filter-label">Filter</div>
      <div>
        <a-cascader :options="vendorData" @change="onChangeVendor" :defaultValue="['semua vendor']">
          <a-tag class="fs-14 cr-black">Vendor {{vendorLabel}} <a-icon class="fs-12" type="down" /></a-tag>
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
      vendorLabel: "Semua Vendor",
      hargaLabel: "Semua Harga",
      programLabel: "Semua Program",
      vendorData: [
        {
          value: "semua vendor",
          label: "Semua Vendor"
        },
        {
          value: "babul kabah",
          label: "Babul Kabah"
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
    onChangeVendor(value, selectedOptions) {
      this.vendorLabel = selectedOptions.map(o => o.label).join(", ");
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