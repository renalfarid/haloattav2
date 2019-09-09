<template>
  <a-form
    layout="vertical"
    :form="form"
    @submit="handleSubmit"
    hideRequiredMark
    class="form-search--costume"
  >
    <a-row :gutter="16">
      <a-col :span="12">
        <a-form-item label="Jenis LA Akomodasi" hasFeedback>
          <div class="icon-search">
            <span class="icon-accommodation-sm"></span>
          </div>
          <a-select
            showSearch
            defaultValue="umrah"
            placeholder="Pilih Jenis LA Akomodasi"
            style="width: 100%"
            :showArrow="false"
            size="large"
          >
            <a-select-option value="umrah">Umrah</a-select-option>
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
            style="width: 100%"
            :showArrow="false"
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

      <a-col :span="12">
        <a-form-item label="Tanggal Keberangkatan" hasFeedback>
          <div class="icon-search">
            <a-icon type="calendar" />
          </div>
          <a-select
            showSearch
            defaultValue="All"
            placeholder="Pilih Tanggal"
            style="width: 100%"
            :showArrow="false"
            :filterOption="filterOption"
            size="large"
          >
            <a-select-option value="All">Tampilkan Semua</a-select-option>
            <a-select-option value="01">01</a-select-option>
            <a-select-option value="02">02</a-select-option>
            <a-select-option value="03">03</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
    </a-row>

    <a-row :gutter="16">
      <a-col :span="12">
        <a-form-item label="Jumlah Pax" hasFeedback>
          <div class="icon-search">
            <img class="max-width" src="/icons/search/boysmiling.svg" />
          </div>
          <a-dropdown overlayClassName="ant-menu--passenger" :trigger="['click']">
            <a-menu slot="overlay">
              <a-menu-item key="1" disabled>
                <div class="d-flex align-items-center">
                  <div>
                    <div class="fs-14 fw-400 cr-black f-default">Jumlah Pax</div>
                  </div>
                  <div class="ml-auto">
                    <number-input
                      v-model="qty"
                      :min="1"
                      :inputtable="false"
                      size="small"
                      center
                      controls
                    />
                  </div>
                </div>
              </a-menu-item>
            </a-menu>
            <a-button
              class="ant-btn--add-passenger fs-16 text-left"
              size="large"
              block
            >{{qty}} Pax</a-button>
          </a-dropdown>
        </a-form-item>
      </a-col>

      <a-col :span="12">
        <a-form-item :style="{ bottom: '-25px' }">
          <a-button
            html-type="submit"
            class="btn-search b-shadow b-radius"
            size="large"
            block
          >Cari LA Akomodasi</a-button>
        </a-form-item>
      </a-col>
    </a-row>
  </a-form>
</template>
<script>
import moment from "moment";
export default {
  name: "searchAccommodation",
  data() {
    this.dateFormat = "YYYY-MM-DD";
    return { 
      qty: 1
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  methods: {
    moment,
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
    disabledDate(current) {
      return current && current < moment().endOf("day");
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
          return this.$router.push("/catalog/accommodation/result");
        }
      });
    }
  }
};
</script>
