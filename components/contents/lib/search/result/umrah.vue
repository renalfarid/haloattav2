<template>
  <div class="ant-layout--results-search">
    <a-card
      class="ant-card--results-info b-shadow b-solid b-radius"
      :bordered="false"
    >
      <div class="d-flex align-items-center">
        <div class="ant-card--results-info-left d-flex align-items-center">
          <div>
            <a-avatar
              style="backgroundColor: #05CBB0"
              class="d-flex align-items-center"
              :size="64"
            >
              <i class="icon-umrah-white"></i>
            </a-avatar>
          </div>
          <div>
            <div class="ant-card--results-info-title">Umrah September 2019</div>
            <div class="ant-card--results-info-subtitle">
              <span>Keberangkatan {{ this.$route.query.kota_asal }}</span>
              <a-divider type="vertical" />
              <span>{{ this.$route.query.bulan_keberangkatan }}</span>

              <a-divider type="vertical" />
              <span>Program {{ this.$route.query.program }} Hari</span>
            </div>
          </div>
        </div>
        <div
          class="ant-card--results-info-right ml-auto"
          v-bind:class="visibleSearch ? 'd-none' : ''"
        >
          <a-button @click="showSearch" class="b-shadow b-radius"
            >Ganti Pencarian</a-button
          >
        </div>
      </div>

      <div class="ant-form--search" v-show="visibleSearch">
        <a-divider />
        <a-form
          layout="vertical"
          :form="form"
          class="form-search--costume"
          hideRequiredMark
        >
          <a-row :gutter="16">
            <a-col :span="6">
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
                  v-decorator="[
                    'kota_asal',
                    { rules: [{ required: true, message: 'Harus di isi!' }] }
                  ]"
                >
                  <a-select-option value="all">Tampilkan Semua</a-select-option>
                  <a-select-option
                    v-for="(item, key) in option.kota"
                    :key="key"
                    :value="item.nama_kota"
                    >{{ item.nama_kota }}</a-select-option
                  >
                </a-select>
              </a-form-item>
            </a-col>

            <a-col :span="6">
              <a-form-item label="Program Hari" hasFeedback>
                <div class="icon-search">
                  <a-icon type="calendar" />
                </div>
                <a-select
                  showSearch
                  placeholder="Pilih Program Hari"
                  style="width: 100%"
                  :showArrow="false"
                  size="large"
                  v-decorator="[
                    'program',
                    { rules: [{ required: true, message: 'Harus di isi!' }] }
                  ]"
                >
                  <a-select-option value="all"
                    >Semua Program Hari</a-select-option
                  >
                  <a-select-option
                    v-for="(item, key) in option.program"
                    :key="key"
                    :value="item.jumlah_hari"
                    >Program {{ item.jumlah_hari }} Hari</a-select-option
                  >
                </a-select>
              </a-form-item>
            </a-col>

            <a-col :span="6">
              <a-form-item label="Bulan Keberangkatan" hasFeedback>
                <div class="icon-search">
                  <a-icon type="calendar" />
                </div>
                <a-select
                  showSearch
                  placeholder="Pilih Bulan Keberangkatan"
                  style="width: 100%"
                  :showArrow="false"
                  size="large"
                  v-decorator="[
                    'bulan_keberangkatan',
                    { rules: [{ required: true, message: 'Harus di isi!' }] }
                  ]"
                >
                  <a-select-option value="all">Semua Bulan</a-select-option>
                  <a-select-option
                    v-for="(item, key) in option.bulan"
                    :key="key"
                    :value="item.bulan_tahun"
                    >{{
                      moment(item.bulan_tahun).format('MMMM YYYY')
                    }}</a-select-option
                  >
                </a-select>
              </a-form-item>
            </a-col>

            <!-- <a-col :span="6">
              <a-form-item label="Tanggal Keberangkatan" hasFeedback>
                <div class="icon-search">
                  <a-icon type="calendar" />
                </div>
                <a-select
                  showSearch
                  :defaultValue="1"
                  placeholder="Pilih Tanggal"
                  style="width: 100%"
                  :showArrow="false"
                  size="large"
                >
                  <a-select-option :value="1">Semua Tanggal</a-select-option>
                  <a-select-option :value="2">1</a-select-option>
                  <a-select-option :value="3">2</a-select-option>
                  <a-select-option :value="4">3</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>-->
          </a-row>

          <a-row :gutter="16" type="flex" justify="end">
            <a-col :span="6">
              <a-button
                @click="searchUmrah"
                class="btn-search b-shadow b-radius"
                size="large"
                block
                >Cari Umrah</a-button
              >
            </a-col>
          </a-row>
        </a-form>
      </div>
    </a-card>
  </div>
</template>
<script>
import moment from 'moment';
import axios from 'axios';
export default {
  data() {
    return {
      form: this.$form.createForm(this),
      visibleSearch: false,
      option: {
        kota: '',
        program: '',
        bulan: '',
        maskapai: '',
        bintang: '',
        vendor: ''
      }
    };
  },
  created() {
    this.getOption();
  },

  methods: {
    moment,
    showSearch() {
      this.visibleSearch = !this.visibleSearch;
    },
    searchUmrah() {
      this.form.validateFields((err, values) => {
        if (!err) {
          this.$emit('loadingEvent', false);
          let data = [];
          let query = this.$route.query;

          data['kota_asal'] = query.kota_asal == 'all' ? '' : query.kota_asal;
          data['bulan_keberangkatan'] =
            query.bulan_keberangkatan == 'all' ? '' : query.bulan_keberangkatan;
          data['program'] = query.program == 'all' ? '' : query.program;
          data['hotel_bintang'] =
            query.hotel_bintang == 'all' ? '' : query.hotel_bintang;

          axios
            .get(process.env.baseUrl + 'paket/umroh/all', {
              params: {
                kota_asal: data['kota_asal'],
                bulan_keberangkatan: data['bulan_keberangkatan'],
                program_hari: data['program'],
                hotel_bintang: data['hotel_bintang']
              }
            })
            .then(respone => {
              this.$store.commit('catalog/setUmroh', respone.data.data.data);
              this.$emit('loadingEvent', false);
            });

          return this.$router.push({
            path: '/catalog/umrah/result',
            query: {
              kota_asal: values.kota_asal,
              bulan_keberangkatan: values.bulan_keberangkatan,
              program: values.program
            }
          });
        }
      });
    },
    getOption() {
      // this.busy = true;
      axios.get(process.env.baseUrl + 'option/umrah', []).then(response => {
        let getOption = response.data.data;

        this.option.kota = getOption.kota;
        this.option.program = getOption.hari;
        this.option.bulan = getOption.bulan_keberangkatan;
        this.option.maskapai = getOption.maskapai;
        this.option.bintang = getOption.bintang;
        this.option.vendor = getOption.vendor;
      });
    }
  }
};
</script>
