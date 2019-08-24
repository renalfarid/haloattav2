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
        <a-form-item label="Kota Asal" hasFeedback>
          <div class="icon-search">
            <img class="max-width" src="/icons/search/airplane.svg" />
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
            <a-select-option value="Makassar">Makassar (UPG)</a-select-option>
            <a-select-option value="Jakarta">Jakarta (CGK)</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>

      <a-col :span="12">
        <a-form-item label="Kota Tujuan" hasFeedback>
          <div class="icon-search">
            <a-icon type="environment" />
          </div>
          <a-select
            showSearch
            defaultValue="Jeddah"
            placeholder="Pilih Kota Tujuan"
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
            <a-select-option value="Jeddah">Jeddah (JED)</a-select-option>
            <a-select-option value="Medinah">Medinah (MED)</a-select-option>
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

      <a-col :span="12">
        <a-form-item label="Jumlah Penumpang" hasFeedback>
          <div class="icon-search">
            <img class="max-width" src="/icons/search/seat.svg" />
          </div>
          <a-dropdown overlayClassName="ant-menu--passenger" :trigger="['click']">
            <a-menu slot="overlay">
              <a-menu-item key="0" disabled>
                <div class="d-flex align-items-center">
                  <div>
                    <div class="fs-14 fw-400 cr-black f-default">Dewasa</div>
                    <div class="fs-12 fw-400 cr-gray f-default">(12 thn atau lebih)</div>
                  </div>
                  <div class="ml-auto">
                    <number-input
                      v-model="dewasa"
                      :min="1"
                      :inputtable="false"
                      size="small"
                      center
                      controls
                    />
                  </div>
                </div>
              </a-menu-item>
              <a-menu-item key="1" disabled>
                <div class="d-flex align-items-center">
                  <div>
                    <div class="fs-14 fw-400 cr-black f-default">Anak</div>
                    <div class="fs-12 fw-400 cr-gray f-default">(2 - 11 thn)</div>
                  </div>
                  <div class="ml-auto">
                    <number-input
                      v-model="anak"
                      :min="0"
                      :inputtable="false"
                      size="small"
                      center
                      controls
                    />
                  </div>
                </div>
              </a-menu-item>
              <a-menu-item key="2" disabled>
                <div class="d-flex align-items-center">
                  <div>
                    <div class="fs-14 fw-400 cr-black f-default">Bayi</div>
                    <div class="fs-12 fw-400 cr-gray f-default">(dibawah 2 thn)</div>
                  </div>
                  <div class="ml-auto">
                    <number-input
                      v-model="bayi"
                      :min="0"
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
              class="ant-btn--add-passenger text-left"
              size="large"
              block
            >{{dewasa}} Dewasa, {{anak}} Anak, {{bayi}} Bayi</a-button>
          </a-dropdown>
        </a-form-item>
      </a-col>
    </a-row>

    <a-row :gutter="16">
      <a-col :span="12">
        <a-button
          html-type="submit"
          class="btn-search b-shadow b-radius"
          size="large"
          block
        >Cari Tiket Group</a-button>
      </a-col>
    </a-row>
  </a-form>
</template>
<script>
import moment from "moment";
export default {
  name: "searchTicket",
  data() {
    return {
      monthFormat: 'MM/YYYY',
      dewasa: 1,
      anak: 0,
      bayi: 0
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
          return this.$router.push("/catalog/ticket-group/result");
        }
      });
    }
  }
};
</script>
