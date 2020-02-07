<template>
  <div class="ant-layout--results-filter">
    <a-card
      class="ant-card--results-filter d-flex align-items-center"
      :bordered="false"
    >
      <div class="ant-card--results-filter-label">Filter</div>
      <div>
        <a-cascader :options="maskapaiData" @change="onChangeMaskapai">
          <a-tag class="fs-14 cr-black"
            >{{ maskapaiLabel }} <a-icon class="fs-12" type="down"
          /></a-tag>
        </a-cascader>

        <a-cascader :options="hotelData" @change="onChangeHotel">
          <a-tag class="fs-14 cr-black"
            >{{ hotelLabel }} <a-icon class="fs-12" type="down"
          /></a-tag>
        </a-cascader>

        <a-cascader :options="umarohData" @change="onChangeUmaroh">
          <a-tag class="fs-14 cr-black"
            >{{ umarohLabel }} <a-icon class="fs-12" type="down"
          /></a-tag>
        </a-cascader>

        <a-cascader :options="hargaData" @change="onChangeHarga">
          <a-tag class="fs-14 cr-black"
            >{{ hargaLabel }} <a-icon class="fs-12" type="down"
          /></a-tag>
        </a-cascader>
      </div>

      <div class="ml-auto">
        <a-cascader :options="sortData" @change="onChangeSort">
          <a-tag class="fs-14 cr-black">
            {{ sortLabel }}
            <a-icon class="fs-12" type="down" />
          </a-tag>
        </a-cascader>
      </div>
    </a-card>
  </div>
</template>
<script>
export default {
  props: ['maskapai', 'bintang', 'vendor'],
  data() {
    return {
      maskapaiLabel: 'Semua Maskapai',
      hotelLabel: 'Fasilitas Bintang',
      hargaLabel: 'Harga',
      umarohLabel: 'Semua Umaroh',
      sortLabel: 'Pilih Berdasarkan',
      maskapaiData: [
        {
          value: 'garuda indonesia',
          label: 'Garuda Indonesia'
        },
        {
          value: 'lion air',
          label: 'Lion Air'
        }
      ],
      hotelData: [
        {
          value: 'Bintang 3',
          label: 'Bintang 3'
        },
        {
          value: 'Bintang 4',
          label: 'Bintang 4'
        }
      ],
      hargaData: [
        {
          value: '0-20000000',
          label: 'Rp0 - Rp20.000.000'
        },
        {
          value: '20000000-50000000',
          label: 'Rp20.000.000 - Rp50.000.000'
        }
      ],
      umarohData: [
        {
          value: 'ATTA',
          label: 'ATTA'
        },
        {
          value: 'PANDANG-PANDANG',
          label: 'PANDANG-PANDANG'
        }
      ],
      sortData: [
        {
          value: 'terpopuler',
          label: 'Terpopuler'
        },
        {
          value: 'terlaris',
          label: 'Terlaris'
        },
        {
          value: 'terbaru',
          label: 'Terbaru'
        },
        {
          value: 'termurah',
          label: 'Termurah'
        },
        {
          value: 'termahal',
          label: 'Termahal'
        }
      ]
    };
  },
  methods: {
    onChangeMaskapai(value, selectedOptions) {
      this.maskapaiLabel = selectedOptions.map(o => o.label).join(', ');
    },
    onChangeHotel(value, selectedOptions) {
      this.hotelLabel = selectedOptions.map(o => o.label).join(', ');
    },
    onChangeHarga(value, selectedOptions) {
      this.hargaLabel = selectedOptions.map(o => o.label).join(', ');
    },
    onChangeUmaroh(value, selectedOptions) {
      this.umarohLabel = selectedOptions.map(o => o.label).join(', ');
    },
    onChangeSort(value, selectedOptions) {
      this.sortLabel = selectedOptions.map(o => o.label).join(', ');
    }
  }
};
</script>

<style lang="scss">
@media (max-width: 992px) {
  .ant-layout--results-filter {
    & .ant-card--results-filter {
      & .ant-card-body {
        display: inline-block !important;
      }
    }
  }
}
</style>