<template>
  <a-layout :style="{ maxWidth: '1200px', margin: '0 auto' }">
    <a-layout-content class="ant-layout-content--steps-schedule">
      <a-row :gutter="32" type="flex" justify="space-around" align="middle">
        <a-col :span="13">
          <a-card :bordered="false">
            <div class="fs-30 fw-500 cr-black f-default mb-32">
              Mari Mulai Membuat
              <br />Paket Umrah Anda
            </div>
            <div class="fs-18 fw-500 cr-black mb-4">Langkah ke 1</div>
            <div class="fs-15 fw-400 cr-gray">
              Tentukan Program Hari, Tanggal Keberangkatan
              <br />serta Jumlah Pax yang anda rencanakan
            </div>

            <a-form
              class="mt-24"
              layout="vertical"
              :form="form"
              @submit="handleSubmit"
              hideRequiredMark
            >
              <a-row :gutter="16" type="flex" justify="space-between" align="bottom">
                <a-col :span="12">
                  <a-form-item label="Kota Asal" has-feedback>
                    <a-select
                      v-decorator="['kota_asal',{rules: [{ required: true, message: 'Harus di isi!' }]}]"
                      placeholder="Pilih Kota Asal"
                      size="large"
                    >
                      <a-select-option value="Makassar">Makassar</a-select-option>
                      <a-select-option value="Jakarta">Jakarta</a-select-option>
                    </a-select>
                  </a-form-item>
                </a-col>

                <a-col :span="12">
                  <a-form-item label="Program Hari" has-feedback>
                    <a-select
                      v-decorator="['program_hari',{rules: [{ required: true, message: 'Harus di isi!' }]}]"
                      placeholder="Pilih Program Hari"
                      size="large"
                    >
                      <a-select-option value="Program 9 Hari">Program 9 Hari</a-select-option>
                      <a-select-option value="Program 10 Hari">Program 10 Hari</a-select-option>
                      <a-select-option value="Program 11 Hari">Program 11 Hari</a-select-option>
                      <a-select-option value="Program 12 Hari">Program 12 Hari</a-select-option>
                      <a-select-option value="Program 13 Hari">Program 13 Hari</a-select-option>
                      <a-select-option value="Program 14 Hari">Program 14 Hari</a-select-option>
                      <a-select-option value="Program 15 Hari">Program 15 Hari</a-select-option>
                    </a-select>
                  </a-form-item>
                </a-col>

                <a-col :span="12">
                  <a-form-item label="Tanggal Keberangkatan" has-feedback>
                    <a-date-picker
                      size="large"
                      style="width: 100%"
                      v-decorator="['tanggal_keberangkatan',{rules: [{ type: 'object', required: true, message: 'Harus di isi!' }]}]"
                      :disabledDate="disabledDate"
                      placeholder="Pilih Tanggal Keberangkatan"
                    />
                  </a-form-item>
                </a-col>

                <a-col :span="12">
                  <a-form-item label="Tanggal Kepulangan">
                    <a-date-picker
                      size="large"
                      style="width: 100%"
                      :defaultValue="moment('2019-06-10', dateFormat)"
                      disabled
                    />
                  </a-form-item>
                </a-col>

                <a-col :span="12">
                  <a-form-item label="Jumlah Pax">
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
                <a-col :span="12">
                  <a-form-item>
                    <a-button
                      class="ant-btn--action"
                      type="primary"
                      html-type="submit"
                      size="large"
                      block
                    >Lanjutkan</a-button>
                  </a-form-item>
                </a-col>
              </a-row>
            </a-form>
          </a-card>
        </a-col>

        <a-col :span="11">
          <a-card :bordered="false">
            <img slot="cover" src="/icons/schedule.png" />
          </a-card>
        </a-col>
      </a-row>
    </a-layout-content>
  </a-layout>
</template>
<script>
import moment from "moment";
export default {
  layout: "application",
  name: "schedule",
  head() {
    return {
      title: "Pilih Jadwal - Buat Paket Umrah | Haloatta"
    };
  },
  data() {
    this.dateFormat = "YYYY-MM-DD";
    return {
      dewasa: 1,
      anak: 0
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  methods: {
    moment,
    disabledDate(current) {
      return current && current < moment().endOf("day");
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        } else {
          this.$router.push("/create/steps/flight-ticket");
        }
      });
    }
  }
};
</script>
