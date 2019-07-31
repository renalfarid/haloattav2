<template>
  <div class="ant-layout--results-search">
    <a-card class="ant-card--results-info b-shadow b-solid b-radius" :bordered="false">
      <div class="d-flex align-items-center">
        <div class="ant-card--results-info-left d-flex align-items-center">
          <div>
            <a-avatar style="backgroundColor: #7A00A5" class="d-flex align-items-center" :size="64">
              <i class="icon-handling-white"></i>
            </a-avatar>
          </div>
          <div>
            <div class="ant-card--results-info-title">Handling Domestik Umrah Keberangkatan Makassar</div>
            <div class="ant-card--results-info-subtitle">
              <span>30 Desember 2019</span>
              <a-divider type="vertical" />
              <span>Pulang Pergi</span>
              <a-divider type="vertical" />
              <span>Standar</span>
              <a-divider type="vertical" />
              <span>40 Pax</span>
            </div>
          </div>
        </div>
        <div
          class="ant-card--results-info-right ml-auto"
          v-bind:class="visibleSearch ? 'd-none' : ''"
        >
          <a-button @click="showSearch" class="b-shadow b-radius">Ganti Pencarian</a-button>
        </div>
      </div>

      <div class="ant-form--search" v-show="visibleSearch">
        <a-divider />
        <a-form layout="vertical" class="form-search--costume">
          <a-row :gutter="16">
            <a-col :span="8">
              <a-form-item label="Layanan" hasFeedback>
                <div class="icon-search">
                  <a-icon type="schedule" />
                </div>
                <a-select
                  showSearch
                  defaultValue="Pulang Pergi"
                  placeholder="Pilih Layanan"
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
                  <a-select-option value="Pulang Pergi">Pulang Pergi</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>

            <a-col :span="8">
              <a-form-item label="Kota Asal" hasFeedback>
                <div class="icon-search">
                  <a-icon type="environment" />
                </div>
                <a-select
                  showSearch
                  defaultValue="Makassar"
                  placeholder="Pilih"
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
                  <a-select-option value="Makassar">Makassar</a-select-option>
                  <a-select-option value="Jakarta">Jakarta</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>

            <a-col :span="8">
              <a-form-item label="Jumlah Pax" hasFeedback>
                <div class="icon-search">
                  <img class="max-width" src="/icons/search/boysmiling.svg" />
                </div>
                <a-dropdown overlayClassName="ant-menu--passenger" :trigger="['click']">
                  <a-menu slot="overlay">
                    <a-menu-item key="0" disabled>
                      <div class="d-flex align-items-center">
                        <div class="fs-14 fw-400 cr-black f-default">Jumlah Pax</div>
                        <div class="ml-auto">
                          <number-input
                            :inputtable="false"
                            v-model="pax"
                            :min="1"
                            size="small"
                            center
                            controls
                          />
                        </div>
                      </div>
                    </a-menu-item>
                  </a-menu>
                  <a-button class="ant-btn--add-passenger text-left" size="large" block>{{pax}} Pax</a-button>
                </a-dropdown>
              </a-form-item>
            </a-col>
          </a-row>

          <a-row :gutter="16">
            <a-col :span="8">
              <a-form-item label="Jenis Layanan" hasFeedback>
                <div class="icon-search">
                  <a-icon type="schedule" />
                </div>
                <a-select
                  showSearch
                  defaultValue="Standar"
                  placeholder="Pilih"
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
                  <a-select-option value="Standar">Standar</a-select-option>
                  <a-select-option value="VIP">VIP</a-select-option>
                  <a-select-option value="VVIP">VVIP</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>

            <a-col :span="8">
              <a-form-item label="Dari Tanggal" hasFeedback>
                <a-date-picker
                  size="large"
                  style="width: 100%"
                  v-decorator="['startdate',{rules: [{ type: 'object', required: true, message: 'Harus di isi!' }]}]"
                  :disabledDate="disabledDate"
                  placeholder="Pilih Tanggal"
                />
              </a-form-item>
            </a-col>

            <a-col :span="8">
              <a-form-item label="Sampai Tanggal">
                <a-date-picker
                  size="large"
                  style="width: 100%"
                  :defaultValue="moment('2019-06-10', dateFormat)"
                  disabled
                />
              </a-form-item>
            </a-col>
          </a-row>

          <a-row :gutter="16" type="flex" justify="end">
            <a-col :span="8">
              <a-button
                html-type="submit"
                class="btn-search b-shadow b-radius"
                size="large"
                block
              >Cari Handling</a-button>
            </a-col>
          </a-row>
        </a-form>
      </div>
    </a-card>
  </div>
</template>
<script>
import moment from "moment";
export default {
  name: "searchHandling",
  data() {
    this.dateFormat = "YYYY-MM-DD";
    return {
      visibleSearch: false,
      pax: 1
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
          return this.$router.push("/catalog/handling/result");
        }
      });
    },
    showSearch() {
      this.visibleSearch = !this.visibleSearch;
    }
  }
};
</script>