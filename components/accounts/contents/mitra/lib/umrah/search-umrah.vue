<template>
  <a-card class="ant-card--search" :bordered="false">
    <div class="ant-header--title">Semua Paket Umrah</div>
    <a-form layout="vertical" class="form-search--costume" :style="{marginBottom: '-10px'}">
      <a-row :gutter="16">
        <a-col :span="8">
          <a-form-item label="Kota Asal" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }">
            <div class="icon-search">
              <a-icon type="environment" />
            </div>
            <a-select
              showSearch
              defaultValue="Makassar"
              placeholder="Pilih Kota Asal"
              optionFilterProp="children"
              :showArrow="false"
              style="width: 100%"
              @focus="handleFocus"
              @blur="handleBlur"
              @change="handleChange"
              :filterOption="filterOption"
              size="large"
            >
              <a-select-option value="All">Tampilkan Semua</a-select-option>
              <a-select-option value="Makassar">Makassar</a-select-option>
              <a-select-option value="Jakarta">Jakarta</a-select-option>
              <a-select-option value="Bandung">Bandung</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>

        <a-col :span="8">
          <a-form-item
            label="Bulan Keberangkatan"
            :label-col="{ span: 24 }"
            :wrapper-col="{ span: 24 }"
          >
            <div class="icon-search">
              <a-icon type="calendar" />
            </div>
            <a-select
              showSearch
              defaultValue="September 2019"
              placeholder="Pilih Bulan Keberangkatan"
              optionFilterProp="children"
              style="width: 100%"
              :showArrow="false"
              @focus="handleFocus"
              @blur="handleBlur"
              @change="handleChange"
              :filterOption="filterOption"
              size="large"
            >
              <a-select-option value="All">Tampilkan Semua</a-select-option>
              <a-select-option value="September 2019">September 2019</a-select-option>
              <a-select-option value="November 2019">November 2019</a-select-option>
              <a-select-option value="Desember 2019">Desember 2019</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>

        <a-col :span="8">
          <a-form-item label="Program Hari" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }">
            <div class="icon-search">
              <a-icon type="calendar" />
            </div>
            <a-select
              showSearch
              defaultValue="Program 9 Hari"
              placeholder="Pilih Program Hari"
              optionFilterProp="children"
              style="width: 100%"
              :showArrow="false"
              @focus="handleFocus"
              @blur="handleBlur"
              @change="handleChange"
              :filterOption="filterOption"
              size="large"
            >
              <a-select-option value="All">Tampilkan Semua</a-select-option>
              <a-select-option value="Program 9 Hari">Program 9 Hari</a-select-option>
              <a-select-option value="Program 10 Hari">Program 10 Hari</a-select-option>
              <a-select-option value="Program 11 Hari">Program 11 Hari</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
      </a-row>

      <a-row :gutter="16" type="flex" justify="space-around" align="middle">
        <a-col :span="8">
          <a-form-item
            label="Rating Bintang Hotel"
            :label-col="{ span: 24 }"
            :wrapper-col="{ span: 24 }"
          >
            <div class="icon-search">
              <a-icon type="crown" />
            </div>
            <a-select
              showSearch
              defaultValue="Bintang 3"
              placeholder="Pilih Rating Bintang Hotel"
              optionFilterProp="children"
              style="width: 100%"
              :showArrow="false"
              @focus="handleFocus"
              @blur="handleBlur"
              @change="handleChange"
              :filterOption="filterOption"
              size="large"
            >
              <a-select-option value="All">Tampilkan Semua</a-select-option>
              <a-select-option value="Bintang 3">Bintang 3</a-select-option>
              <a-select-option value="Bintang 4">Bintang 4</a-select-option>
              <a-select-option value="Bintang 5">Bintang 5</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>

        <a-col :span="8">
          <a-form-item label="Kisaran Harga" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }">
            <div class="icon-search">
              <a-icon type="wallet" />
            </div>
            <a-select
              showSearch
              defaultValue="Rp.0 - Rp.20.000.000"
              placeholder="Pilih Kisaran Harga"
              optionFilterProp="children"
              style="width: 100%"
              :showArrow="false"
              @focus="handleFocus"
              @blur="handleBlur"
              @change="handleChange"
              :filterOption="filterOption"
              size="large"
            >
              <a-select-option value="All">Tampilkan Semua</a-select-option>
              <a-select-option value="Rp.0 - Rp.20.000.000">Rp.0 - Rp.20.000.000</a-select-option>
              <a-select-option value="Rp.20.000.000 - Rp.30.000.000">Rp.0 - Rp.20.000.000</a-select-option>
              <a-select-option value="Rp.30.000.000 - Rp.40.000.000">Rp.0 - Rp.20.000.000</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>

        <a-col :span="8">
          <a-button class="btn-search" block>Cari Umrah</a-button>
        </a-col>
      </a-row>
    </a-form>
  </a-card>
</template>
<script>
export default {
  methods: {
    callback(val) {
      console.log(val);
    },
    handleChange(value) {
      console.log(`selected ${value}`);
    },
    handleBlur() {
      console.log("blur");
    },
    handleFocus() {
      console.log("focus");
    },
    filterOption(input, option) {
      return (
        option.componentOptions.children[0].text
          .toLowerCase()
          .indexOf(input.toLowerCase()) >= 0
      );
    }
  }
};
</script>