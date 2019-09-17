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
          :options="professionData"
          @change="onChangeProfession"
        >
          <a-tag class="fs-14 cr-black">
            {{professionLabel}}
            <a-icon class="fs-12" type="down" />
          </a-tag>
        </a-cascader>

        <a-cascader
          :options="genderData"
          @change="onChangeGender"
        >
          <a-tag class="fs-14 cr-black">
            {{genderLabel}}
            <a-icon class="fs-12" type="down" />
          </a-tag>
        </a-cascader>

        <a-cascader
          :options="bahasaData"
          @change="onChangeBahasa"
        >
          <a-tag class="fs-14 cr-black">
            {{bahasaLabel}}
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
      vendorLabel: "Vendor",
      hargaLabel: "Harga",
      professionLabel: "Profesi",
      genderLabel: "Gender",
      bahasaLabel: "Bahasa",
      sortLabel: "Pilih Berdasarkan",
      vendorData: [
        {
          value: "leader jobs",
          label: "Leader Jobs"
        }
      ],
      hargaData: [
        {
          value: "Rp0 - Rp20,000,000",
          label: "Rp0 - Rp20,000,000"
        },
        {
          value: "Rp20,000,000 - Rp20,000,000",
          label: "Rp20,000,000 - Rp40.000.000"
        }
      ],
      professionData: [
        {
          value: "Ustad",
          label: "Ustad"
        },
        {
          value: "MC",
          label: "MC"
        }
      ],
      genderData: [
        {
          value: "Laki - Laki",
          label: "Laki - Laki"
        },
        {
          value: "Perempuan",
          label: "Perempuan"
        }
      ],
      bahasaData: [
        {
          value: "Indonesia",
          label: "Indonesia"
        },
        {
          value: "Inggris",
          label: "Inggris"
        },
        {
          value: "Arab",
          label: "Arab"
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
    onChangeVendor(value, selectedOptions) {
      this.vendorLabel = selectedOptions.map(o => o.label).join(", ");
    },
    onChangeHarga(value, selectedOptions) {
      this.hargaLabel = selectedOptions.map(o => o.label).join(", ");
    },
    onChangeProfession(value, selectedOptions) {
      this.professionLabel = selectedOptions.map(o => o.label).join(", ");
    },
    onChangeGender(value, selectedOptions) {
      this.genderLabel = selectedOptions.map(o => o.label).join(", ");
    },
    onChangeBahasa(value, selectedOptions) {
      this.bahasaLabel = selectedOptions.map(o => o.label).join(", ");
    },
    onChangeSort(value, selectedOptions) {
      this.sortLabel = selectedOptions.map(o => o.label).join(", ");
    }
  }
};
</script>