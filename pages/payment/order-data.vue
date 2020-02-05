<template>
  <a-layout
    class="ant-layout--payment"
    :style="{ 'background-color': '#f7f7f7' }"
  >
    <a-layout-header class="ant-layout-header--payment">
      <div class="ant-logo">
        <nuxt-link to="/">
          <img src="/haloatta_white.png" />
        </nuxt-link>
      </div>
      <a-steps :current="0" size="small">
        <a-step title="Data Pemesan" />
        <a-step title="Pembayaran" />
        <a-step title="E-Paket Terbit" />
      </a-steps>
    </a-layout-header>

    <a-layout-content class="ant-layout-content--payment-order">
      <div class="container">
        <a-row :gutter="24">
          <a-col :xs="24" :sm="24" :md="16" class="mb-24">
            <a-card class="b-solid b-radius mb-16">
              <div class="d-flex align-items-center w-100">
                <div>
                  <a-avatar
                    class="mr-16"
                    size="large"
                    :style="{
                      'background-color': '#87d068',
                      'min-width': '40px'
                    }"
                    icon="user"
                  />
                </div>
                <div>
                  <div class="fs-14 fw-400 cr-gray text-capitalize">
                    Anda Login sebagai
                  </div>
                  <div class="fs-16 fw-500 cr-black text-capitalize">
                    {{ $store.state.auth.nama }}
                  </div>
                </div>
              </div>
            </a-card>

            <a-form
              layout="vertical"
              :form="form"
              @submit="handleSubmitMore"
              hideRequiredMark
            >
              <h3 class="fw-600 cr-black mt-8">Data Pemesan</h3>
              <a-card class="b-solid b-radius mb-16">
                <a-form-item label="Nama Lengkap">
                  <a-input
                    v-model="dataPemesan.nama"
                    v-decorator="['nama', { rules: [{ required: true }] }]"
                    size="large"
                  />
                </a-form-item>

                <a-row :gutter="16">
                  <a-col :xs="24" :sm="24" :md="12">
                    <a-form-item label="Nomor Telepon">
                      <a-input
                        v-model="dataPemesan.nohp"
                        v-decorator="['telp', { rules: [{ required: true }] }]"
                        size="large"
                      />
                    </a-form-item>
                  </a-col>

                  <a-col :xs="24" :sm="24" :md="12">
                    <a-form-item label="Email">
                      <a-input
                        v-model="dataPemesan.email"
                        v-decorator="['email', { rules: [{ required: true }] }]"
                        size="large"
                      />
                    </a-form-item>
                  </a-col>
                </a-row>
              </a-card>

              <h3 class="fw-600 cr-black mt-8">Data Jamaah</h3>
              <a-card class="b-solid b-radius mb-16">
                <a-radio-group
                  name="radioGroup"
                  @change="onChange"
                  v-model="value"
                >
                  <a-radio :value="1" class="fs-16 cr-black"
                    >Isi Data Jamaah Nanti</a-radio
                  >
                  <a-radio :value="2" class="fs-16 cr-black"
                    >Isi Data Jamaah Sekarang</a-radio
                  >
                </a-radio-group>
              </a-card>

              <div v-if="value === 2">
                <a-alert
                  :showIcon="false"
                  :style="{
                    'border-radius': '4px',
                    'margin-bottom': '24px',
                    padding: '24px'
                  }"
                  banner
                >
                  <template slot="message">
                    <h5 class="text-uppercase cr-gray">Informasi Penting :</h5>
                    <div
                      class="d-flex align-items-start mb-8"
                      v-for="(item, index) in information"
                      :key="index"
                    >
                      <div class="mr-8">
                        <a-icon
                          type="check-circle"
                          theme="filled"
                          :style="{ opacity: '.7' }"
                        />
                      </div>
                      <div>
                        {{ item.title }}
                      </div>
                    </div>
                  </template>
                </a-alert>
              </div>

              <div v-if="value === 2">
                <a-card class="b-solid b-radius mb-16">
                  <template slot="title">Jamaah 1</template>
                  <a-row :gutter="16">
                    <a-col :span="8">
                      <a-form-item label="Title">
                        <a-select
                          v-decorator="[
                            'title',
                            {
                              initialValue: 'Tn.',
                              rules: [
                                {
                                  required: true,
                                  message: 'Harus di isi!'
                                }
                              ]
                            }
                          ]"
                          size="large"
                          style="width: 100%"
                        >
                          <a-select-option value="Tn.">Tn.</a-select-option>
                          <a-select-option value="Ny.">Ny.</a-select-option>
                          <a-select-option value="Nn.">nn.</a-select-option>
                        </a-select>
                      </a-form-item>
                    </a-col>

                    <a-col :span="24">
                      <a-form-item
                        label="Nama Depan & Tengah (jika ada)"
                        help="(tanpa gelar dan tanda baca)"
                      >
                        <a-input
                          v-decorator="[
                            'firstName',
                            {
                              rules: [
                                {
                                  required: true,
                                  message: 'Harus di isi!'
                                }
                              ]
                            }
                          ]"
                          size="large"
                        />
                      </a-form-item>
                    </a-col>
                  </a-row>

                  <a-row :gutter="16">
                    <a-col :span="24">
                      <a-form-item
                        label="Nama Belakang / Nama Keluarga"
                        help="(tanpa gelar dan tanda baca)"
                      >
                        <a-input
                          v-decorator="[
                            'lastName',
                            {
                              rules: [
                                {
                                  required: true,
                                  message: 'Harus di isi!'
                                }
                              ]
                            }
                          ]"
                          size="large"
                        />
                      </a-form-item>
                    </a-col>
                  </a-row>

                  <a-row :gutter="16">
                    <a-col :span="12">
                      <a-form-item label="Tempat Lahir">
                        <a-input
                          v-decorator="[
                            'tempatlahir',
                            {
                              rules: [
                                {
                                  required: true,
                                  message: 'Harus di isi!'
                                }
                              ]
                            }
                          ]"
                          size="large"
                        />
                      </a-form-item>
                    </a-col>
                    <a-col :span="12">
                      <a-form-item label="Tanggal Lahir">
                        <a-date-picker
                          v-decorator="[
                            'date',
                            {
                              rules: [
                                {
                                  required: true,
                                  message: 'Harus di isi!'
                                }
                              ]
                            }
                          ]"
                          placeholder="Pilih Tanggal Lahir Anda"
                          size="large"
                          style="width: 100%"
                        />
                      </a-form-item>
                    </a-col>
                  </a-row>

                  <a-row :gutter="16">
                    <a-col :span="12">
                      <a-form-item label="No. Telepon/Handphone">
                        <a-input
                          v-decorator="[
                            'telp',
                            {
                              rules: [
                                {
                                  required: true,
                                  message: 'Harus di isi!'
                                }
                              ]
                            }
                          ]"
                          size="large"
                        />
                      </a-form-item>
                    </a-col>

                    <a-col :span="12">
                      <a-form-item label="Jenis Pendidikan">
                        <a-select
                          v-decorator="[
                            'pendidikan',
                            {
                              rules: [
                                {
                                  required: true,
                                  message: 'Harus di isi!'
                                }
                              ]
                            }
                          ]"
                          placeholder="Pilih Pendidikan"
                          size="large"
                          style="width: 100%"
                        >
                          <a-select-option value="SD">SD</a-select-option>
                          <a-select-option value="SMP/MTS"
                            >SMP/MTS</a-select-option
                          >
                          <a-select-option value="SMA/SMK"
                            >SMA/SMK</a-select-option
                          >
                          <a-select-option value="S1">S1</a-select-option>
                        </a-select>
                      </a-form-item>
                    </a-col>
                  </a-row>

                  <a-row :gutter="16">
                    <a-col :span="12">
                      <a-form-item label="Status Pernikahan">
                        <a-select
                          v-decorator="[
                            'status',
                            {
                              initialValue: 'Belum Nikah',
                              rules: [
                                {
                                  required: true,
                                  message: 'Harus di isi!'
                                }
                              ]
                            }
                          ]"
                          placeholder="Pilih Status"
                          size="large"
                          style="width: 100%"
                        >
                          <a-select-option value="Belum Nikah"
                            >Belum Nikah</a-select-option
                          >
                          <a-select-option value="Nikah">Nikah</a-select-option>
                        </a-select>
                      </a-form-item>
                    </a-col>
                    <a-col :span="12">
                      <a-form-item label="Jenis Pekerjaan">
                        <a-select
                          v-decorator="[
                            'pekerjaan',
                            {
                              rules: [
                                {
                                  required: true,
                                  message: 'Harus di isi!'
                                }
                              ]
                            }
                          ]"
                          placeholder="Pilih Pekerjaan"
                          size="large"
                          style="width: 100%"
                        >
                          <a-select-option value="Tani/Tambak"
                            >Tani/Tambak</a-select-option
                          >
                          <a-select-option value="Wiraswasta"
                            >Wiraswasta</a-select-option
                          >
                          <a-select-option value="Wirausaha"
                            >Wirausaha</a-select-option
                          >
                        </a-select>
                      </a-form-item>
                    </a-col>
                  </a-row>

                  <a-divider
                    class="ant-divider-title-left"
                    orientation="left"
                    :style="{ marginTop: '0' }"
                  >
                    <span class="fs-15 cr-gray">Informasi Paspor</span>
                  </a-divider>

                  <a-row :gutter="16">
                    <a-col :span="12">
                      <a-form-item label="Kewarganegaraan">
                        <a-select
                          v-decorator="[
                            'country',
                            {
                              initialValue: 'Indonesia',
                              rules: [
                                {
                                  required: true,
                                  message: 'Harus di isi!'
                                }
                              ]
                            }
                          ]"
                          placeholder="Pilih Kewarganegaraan"
                          size="large"
                        >
                          <a-select-option value="Indonesia"
                            >Indonesia</a-select-option
                          >
                        </a-select>
                      </a-form-item>
                    </a-col>

                    <a-col :span="12">
                      <a-form-item label="Nomor Paspor">
                        <a-input v-decorator="['nomor_paspor']" size="large" />
                      </a-form-item>
                    </a-col>

                    <a-col :span="12">
                      <a-form-item label="Negara Penerbit">
                        <a-select
                          v-decorator="[
                            'country_paspor',
                            { initialValue: 'Indonesia' }
                          ]"
                          placeholder="Pilih Negara"
                          size="large"
                        >
                          <a-select-option value="Indonesia"
                            >Indonesia</a-select-option
                          >
                        </a-select>
                      </a-form-item>
                    </a-col>

                    <a-col :span="12">
                      <a-form-item label="Tanggal Habis Berlaku">
                        <a-date-picker
                          format="YYYY-MM-DD"
                          :disabledDate="disabledDate"
                          placeholder="Pilih Tanggal"
                          size="large"
                          style="width: 100%"
                        />
                      </a-form-item>
                    </a-col>
                  </a-row>
                </a-card>
              </div>

              <div v-if="value === 1">
                <a-alert
                  :showIcon="false"
                  message="Kami akan mengirimkan formulir pengisian data setelah anda melakukan pembayaran."
                  :style="{
                    'border-radius': '4px',
                    'margin-bottom': '24px',
                    padding: '24px'
                  }"
                  banner
                />
              </div>

              <div :style="{ display: 'block', 'text-align': 'right' }">
                <a-button
                  class="md-btn--action"
                  size="large"
                  type="primary"
                  html-type="submit"
                >
                  Lanjut ke Pembayaran
                </a-button>
              </div>
            </a-form>
          </a-col>

          <a-col :xs="24" :sm="24" :md="8" class="mb-24">
            <siderPayment :total="total" />
          </a-col>
        </a-row>
      </div>
    </a-layout-content>
    <a-layout-footer
      class="ant-layout-footer--payment-order"
      :style="{ 'background-color': '#f7f7f7' }"
    >
      <div class="container">
        2016 - {{ new Date().getFullYear() }} © PT. NUH Teknologi Solution
      </div>
    </a-layout-footer>
  </a-layout>
</template>
<script>
import siderPayment from "@/pages/payment/sider.vue";
import moment from "moment";
import axios from "axios";
const Cookie = process.client ? require("js-cookie") : undefined;

export default {
  middleware: "authenticated",
  layout: "application",
  name: "orderData",

  beforeCreate() {
    this.form = this.$form.createForm(this);
  },

  head() {
    return {
      title: "Haloatta - Booking Paket Umrah & Komponen Umrah Terlengkap"
    };
  },

  asyncData({ query }) {
    return {
      total: query.total
    };
  },

  data() {
    return {
      value: 1,
      loading: false,
      dataPemesan: {
        nama: "",
        nohp: "",
        email: ""
      },
      biayalunas: 0,
      biayaDp: 0,
      sisaPelunasan: 0,
      dataLunas: [],
      dataDP: [],
      dataPembayaranLunas: [
        {
          key: "1",
          steps: "Pelunasan",
          biaya: 0
        }
      ],
      dataPembayaranDP: [
        {
          key: "1",
          steps: "Uang Muka (30%)",
          biaya: 0
        },
        {
          key: "2",
          steps: "Pelunasan",
          biaya: 0
        }
      ],
      total: 0,
      information: [
        {
          title: "Paspor dengan masa berlaku min 12 bulan dari tanggal keberangkatan, dibutuhkan untuk perjalanan tur umrah dan haji anda;"
        },
        {
          title: "Jamaah wanita dibawah umur 45 tahun wajib di dampingi mahram;"
        },
        {
          title: "Suami istri wajib melampirkan buku nikah pada saat pengiriman berkas fisik ke pihak travel;"
        },
        {
          title: "Bagi anak-anak 10 tahun ke bawah wajib melampirkan akta lahir."
        }
      ]
    };
  },

  mounted() {
    this.hitungDp();
    this.hitungPelunasan();
  },

  methods: {
    moment,

    hitungPelunasan() {
      this.biayalunas = this.total;
      this.$set(this.dataPembayaranLunas[0], "biaya", this.biayalunas);
    },

    hitungDp() {
      let dpUmroh = 0.3 * this.total;
      this.biayaDp = dpUmroh.toFixed(0);
      let sisalunas = this.total - 0.3 * this.total;
      this.sisaPelunasan = sisalunas.toFixed(0);

      this.$set(this.dataPembayaranDP[0], "biaya", this.biayaDp);
      this.$set(this.dataPembayaranDP[1], "biaya", this.sisaPelunasan);
    },

    disabledDate(current) {
      return current && current < moment().endOf("day");
    },

    onChange(e) {
      console.log("radio checked", e.target.value);
    },

    handleSubmitMore(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          let params = this.$route.query;
          let data = {
            jenis_transaksi: params.type,
            kode_produk: params.kode,
            nama_pemesan: this.dataPemesan.nama,
            nomor_handphone: this.dataPemesan.nohp
          };

          if (
            params.type == "VISA" ||
            params.type == "ASURANSI" ||
            params.type == "HANDLING" ||
            params.type == "TOURLEADER" ||
            params.type == "PERLENGKAPAN" ||
            params.type == "MANASIK"
          ) {
            data["pax"] = params.qty;
          } else if (params.type == "LA") {
            data["quad"] = params.quad;
            data["triple"] = params.triple;
            data["double"] = params.double;
          } else if (params.type == "TIKET") {
            data["dewasa"] = params.dewasa;
            data["anak"] = params.anak;
            data["bayi"] = params.bayi;
          } else if (params.type == "UMROH") {
            data["quad"] = params.quad;
            data["triple"] = params.triple;
            data["double"] = params.double;
            data["nomor_voucher"] = [];
          }

          const token = Cookie.get("auth");

          const config = {
            headers: {
              Authorization: "Bearer " + token
            }
          };

          let url = "";

          if (params.type == "UMROH") {
            url = process.env.baseUrl + "transaksi/umroh";
          } else {
            url = process.env.baseUrl + "transaksi";
          }

          axios
            .post(url, data, config)
            .then(response => {
              console.log(response);
              // this.$router.push({
              //   path: "/accounts/billing/detail",
              //   query: {
              //     notrans: response.data.data.notrans
              //   }
              // });
              this.$router.push({
                path: "/payment/purchase-transfer",
                query: {
                  notrans: response.data.data.notrans
                }
              });
            })
            .catch(err => {
              console.log("error", err);
            });
        }
      });
    }
  },
  components: {
    siderPayment
  }
};
</script>
