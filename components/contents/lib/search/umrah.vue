<template>
  <a-form layout="vertical" :form="form" class="form-search--costume" hideRequiredMark>
    <a-row :gutter="16">
      <a-col :span="12">
        <a-form-item label="Kota Asal" hasFeedback>
          <div class="icon-search">
            <img class="max-width" src="/icons/search/airplane.svg" />
          </div>
          <a-select
            showSearch
            placeholder="Pilih Kota Asal"
            :showArrow="false"
            style="width: 100%"
            size="large"
            v-decorator="['cityStart',{rules: [{ required: true, message: 'Harus di isi!' }]}]"
          >
            <a-select-option value="All">Tampilkan Semua</a-select-option>
            <a-select-option value="Makassar">Makassar</a-select-option>
            <a-select-option value="Jakarta">Jakarta</a-select-option>
            <a-select-option value="Bandung">Bandung</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>

      <a-col :span="12">
        <a-form-item label="Program Hari" hasFeedback>
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

    <a-row :gutter="16">
      <a-col :span="12">
        <a-form-item label="Bulan Keberangkatan" hasFeedback>
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
            <a-select-option value="September 2019">September 2019</a-select-option>
            <a-select-option value="November 2019">November 2019</a-select-option>
            <a-select-option value="Desember 2019">Desember 2019</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>

      <a-col :span="12">
        <a-form-item label="Tanggal Keberangkatan" hasFeedback>
          <div class="icon-search">
            <a-icon type="calendar" />
          </div>
          <a-select
            showSearch
            defaultValue="all"
            placeholder="Pilih Tanggal"
            optionFilterProp="children"
            style="width: 100%"
            :showArrow="false"
            @focus="handleFocus"
            @blur="handleBlur"
            @change="handleChange"
            :filterOption="filterOption"
            size="large"
          >
            <a-select-option value="all">Tampilkan Semua</a-select-option>
            <a-select-option value="1">1</a-select-option>
            <a-select-option value="2">2</a-select-option>
            <a-select-option value="3">3</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
    </a-row>

    <a-row :gutter="16" type="flex" justify="end">
      <a-col :span="12">
        <a-button
            @click="searchUmrah"
            class="btn-search b-shadow b-radius"
            size="large"
            block
          >Cari Umrah</a-button>
      </a-col>
    </a-row>
  </a-form>
</template>
<script>
export default {
  data() {
    return {
      form: this.$form.createForm(this)
    };
  },
  methods: {
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
    },
    searchUmrah() {
      this.form.validateFields(err => {
        if (!err) {
          return this.$router.push({ path: "/catalog/umrah/result" });
        }
      });
    }
  }
};
</script>
