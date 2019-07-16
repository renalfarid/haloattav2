<template>
  <div class="ant-layout--results-search">
    <a-card class="ant-card--results-info b-shadow b-solid b-radius" :bordered="false">
      <div class="d-flex align-items-center">
        <div class="ant-card--results-info-left d-flex align-items-center">
          <div>
            <a-avatar style="backgroundColor: #F43662" :size="64" icon="schedule" />
          </div>
          <div>
            <div class="ant-card--results-info-title">
              Makassar (UPG) <a-icon type="retweet" class="cr-gray ml-8 mr-8" /> Jeddah (JED)
            </div>
            <div class="ant-card--results-info-subtitle">
              Program 9 Hari
              <a-divider type="vertical" />
              <span>40 Dewasa</span>, <span>0 Anak</span>
            </div>
          </div>
        </div>
        <div class="ant-card--results-info-right ml-auto" v-bind:class="visibleSearch ? 'd-none' : ''">
          <a-button @click="showSearch" class="b-shadow b-radius">Ganti Pencarian</a-button>
        </div>
      </div>

      <div class="ant-form--search" v-show="visibleSearch">
        <a-divider />
        <a-form
          layout="vertical"
          :form="form"
          @submit="handleSubmit"
          hideRequiredMark
          class="form-search--costume"
        >
          <a-row :gutter="16">
            <a-col :span="8">
              <a-form-item label="Kota Asal" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }">
                <div class="icon-search">
                  <img class="max-width" src="/icons/ticket/airplane.png" />
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

            <a-col :span="8">
              <a-form-item
                label="Kota Tujuan"
                :label-col="{ span: 24 }"
                :wrapper-col="{ span: 24 }"
              >
                <div class="icon-search">
                  <a-icon type="environment" />
                </div>
                <a-select
                  showSearch
                  defaultValue="Jeddah"
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
                  <a-select-option value="Jeddah">Jeddah (JED)</a-select-option>
                  <a-select-option value="Medinah">Medinah (MED)</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>

            <a-col :span="8">
              <a-form-item
                label="Jumlah Seat"
                :label-col="{ span: 24 }"
                :wrapper-col="{ span: 24 }"
              >
                <div class="icon-search">
                  <img class="max-width" src="/icons/ticket/seat.png" />
                </div>
                <a-dropdown overlayClassName="ant-menu--passenger" :trigger="['click']">
                  <a-menu slot="overlay">
                    <a-menu-item key="0" disabled>
                      <div class="d-flex align-items-center">
                        <div class="d-flex align-items-center">
                          <div class="mr-8">
                            <a-avatar icon="user" />
                          </div>
                          <div>
                            <div class="fs-14 fw-400 cr-black f-default">Dewasa</div>
                            <div class="fs-12 fw-400 cr-gray f-default">(12 thn atau lebih)</div>
                          </div>
                        </div>
                        <div class="ml-auto">
                          <number-input
                            v-model="dewasa"
                            :min="0"
                            :max="10"
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
                        <div class="d-flex align-items-center">
                          <div class="mr-8">
                            <a-avatar icon="user" />
                          </div>
                          <div>
                            <div class="fs-14 fw-400 cr-black f-default">Anak</div>
                            <div class="fs-12 fw-400 cr-gray f-default">(2 - 11 thn)</div>
                          </div>
                        </div>
                        <div class="ml-auto">
                          <number-input
                            v-model="anak"
                            :min="0"
                            :max="10"
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
                  >{{dewasa}} Dewasa, {{anak}} Anak</a-button>
                </a-dropdown>
              </a-form-item>
            </a-col>
          </a-row>

          <a-row :gutter="16">
            <a-col :span="8">
              <a-form-item
                label="Program Hari"
                :label-col="{ span: 24 }"
                :wrapper-col="{ span: 24 }"
              >
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

            <a-col :span="8">
              <a-form-item
                label="Keberangkatan"
                :label-col="{ span: 24 }"
                :wrapper-col="{ span: 24 }"
              >
                <a-date-picker
                  size="large"
                  style="width: 100%"
                  v-decorator="['tanggal_keberangkatan',{rules: [{ type: 'object', required: true, message: 'Harus di isi!' }]}]"
                  :disabledDate="disabledDate"
                  placeholder="Pilih Tanggal Keberangkatan"
                />
              </a-form-item>
            </a-col>

            <a-col :span="8">
              <a-form-item
                label="Kedatangan"
                :label-col="{ span: 24 }"
                :wrapper-col="{ span: 24 }"
              >
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
              <a-button html-type="submit" class="btn-search b-shadow b-radius" size="large" block>Cari Tiket Group</a-button>
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
  data() {
    this.dateFormat = "YYYY-MM-DD";
    return {
      visibleSearch: false,
      dewasa: 1,
      anak: 0
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  methods: {
    moment,
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
    },
    showSearch() {
      this.visibleSearch = !this.visibleSearch;
    },
    disabledDate(current) {
      return current && current < moment().endOf("day");
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
        return this.$router.push("/ticket-group/result");
      });
    }
  }
};
</script>