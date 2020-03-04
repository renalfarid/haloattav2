<template>
  <a-layout class="ant-layout--payment" :style="{ 'background-color': '#f7f7f7' }">
    <a-layout-header class="ant-layout-header--payment">
      <div class="ant-logo">
        <nuxt-link to="/">
          <img src="/haloatta_white.png" />
        </nuxt-link>
      </div>
      <a-steps :current="0" size="small">
        <a-step title="Data Pemesan" />
        <a-step title="Pembayaran" />
        <a-step title="Konfirmasi" />
      </a-steps>
    </a-layout-header>

    <a-layout-content class="ant-layout-content--payment-order">
      <div class="container">
        <a-row :gutter="24">
          <a-col
            :xs="24"
            :sm="24"
            :md="24"
            :lg="8"
            class="sticky-top mb-24"
            :style="{ float: 'right' }"
          >
            <SideTicket :data="data" />
          </a-col>

          <a-col :xs="24" :sm="24" :md="24" :lg="16" class="mb-24">
            <UserLogin />

            <a-form layout="vertical" :form="form" @submit="handleSubmitMore" hideRequiredMark>
              <h3 class="fw-600 cr-black mt-8">Data Pemesan</h3>
              <a-card class="b-solid b-radius mb-16">
                <template slot="title">
                  <a-radio-group name="radioGroup" @change="onChange" v-model="typeOrder">
                    <a-radio :value="1" class="fs-15 fw-500 cr-black">Perjalanan Pribadi</a-radio>
                    <a-radio :value="2" class="fs-15 fw-500 cr-black">Travel Group</a-radio>
                  </a-radio-group>
                </template>

                <div v-if="typeOrder === 1">
                  <a-form-item label="Nama Lengkap">
                    <a-input
                      v-decorator="[
                        'nama_pemesan',
                        {
                          rules: [
                            {
                              required: true,
                              message: 'Nama pemesan harus di isi'
                            }
                          ]
                        }
                      ]"
                      size="large"
                    />
                  </a-form-item>

                  <a-row :gutter="16">
                    <a-col :xs="24" :sm="24" :md="12">
                      <a-form-item label="Nomor Telepon">
                        <a-input
                          v-decorator="[
                            'nomor_handphone',
                            {
                              rules: [
                                {
                                  required: true,
                                  message: 'Nomor telp/handphone harus di isi'
                                }
                              ]
                            }
                          ]"
                          size="large"
                        />
                      </a-form-item>
                    </a-col>

                    <a-col :xs="24" :sm="24" :md="12">
                      <a-form-item label="Email">
                        <a-input
                          v-decorator="[
                            'email',
                            {
                              rules: [
                                {
                                  type: 'email',
                                  message: 'Email anda tidak valid!'
                                },
                                {
                                  required: true,
                                  message: 'Email pemesan harus di isi'
                                }
                              ]
                            }
                          ]"
                          size="large"
                        />
                      </a-form-item>
                    </a-col>
                  </a-row>
                </div>

                <div v-if="typeOrder === 2">
                  <a-form-item label="Nama Travel Anda">
                    <a-input
                      v-decorator="[
                        'nama_pemesan',
                        {
                          rules: [
                            {
                              required: true,
                              message: 'Harus di isi'
                            }
                          ]
                        }
                      ]"
                      size="large"
                    />
                  </a-form-item>

                  <a-row :gutter="16">
                    <a-col :xs="24" :sm="24" :md="12">
                      <a-form-item label="Nomor Telepon">
                        <a-input
                          v-decorator="[
                            'nomor_handphone',
                            {
                              rules: [
                                {
                                  required: true,
                                  message: 'Nomor telp/handphone harus di isi'
                                }
                              ]
                            }
                          ]"
                          size="large"
                        />
                      </a-form-item>
                    </a-col>

                    <a-col :xs="24" :sm="24" :md="12">
                      <a-form-item label="Email">
                        <a-input
                          v-decorator="[
                            'email',
                            {
                              rules: [
                                {
                                  type: 'email',
                                  message: 'Email anda tidak valid!'
                                },
                                {
                                  required: true,
                                  message: 'Email pemesan harus di isi'
                                }
                              ]
                            }
                          ]"
                          size="large"
                        />
                      </a-form-item>
                    </a-col>
                  </a-row>
                </div>
              </a-card>

              <h3 class="fw-600 cr-black mt-8">Data Tamu</h3>
              <a-card class="b-solid b-radius mb-16">
                <a-radio-group name="radioGroup" @change="onChange" v-model="room">
                  <a-radio :value="1" class="fs-15 fw-500 cr-black">Isi Data Nanti</a-radio>
                  <a-radio :value="2" class="fs-15 fw-500 cr-black">Isi Data Sekarang</a-radio>
                </a-radio-group>
              </a-card>

              <div v-if="room === 1">
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

              <div v-if="room === 2">
                <a-alert
                  :showIcon="false"
                  :style="{
                    'border-radius': '4px',
                    'margin-bottom': '16px',
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
                        <a-icon type="check-circle" theme="filled" :style="{ opacity: '.7' }" />
                      </div>
                      <div>{{ item.title }}</div>
                    </div>
                  </template>
                </a-alert>

                <a-collapse defaultActiveKey="1" :bordered="false" class="mb-24">
                  <template v-slot:expandIcon="props">
                    <a-icon type="caret-right" :rotate="props.isActive ? 90 : 0" />
                  </template>

                  <a-collapse-panel :header="'Quad '+ count.quad" key="1" v-if="quad != 0">
                    <div v-for="(q,key,index) in quadLoop" :key="index">
                      <a-row :gutter="16">
                        <a-col :span="8">
                          <a-form-item label="hidden" v-show="false">
                            <a-input
                              v-decorator="[
                                'tipe['+q.quad+']',
                                {
                                  initialValue: 'quad',
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
                          <a-form-item :label="'Title '">
                            <a-select
                              v-decorator="[
                              'titel['+ q.quad +']',
                              {
                                initialValue: 'Tn',
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
                              <a-select-option value="Tn">Tn</a-select-option>
                              <a-select-option value="Ny">Ny</a-select-option>
                              <a-select-option value="Nn">Nn</a-select-option>
                            </a-select>
                          </a-form-item>
                        </a-col>

                        <a-col :span="24">
                          <a-form-item label="Nama Lengkap" help="(tanpa gelar dan tanda baca)">
                            <a-input
                              v-decorator="[
                              'nama['+q.quad+']',
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

                        <a-col :span="14">
                          <a-form-item label="Nomor Paspor">
                            <a-input v-decorator="['nomor_passport['+q.quad+']']" size="large" />
                          </a-form-item>
                        </a-col>
                      </a-row>

                      <a-divider></a-divider>
                    </div>
                  </a-collapse-panel>

                  <a-collapse-panel :header="'Triple '+ count.triple" key="2" v-if="triple != 0">
                    <div v-for="(t,key,index) in tripleLoop" :key="index">
                      <a-row :gutter="16">
                        <a-col :span="8">
                          <a-form-item label="hidden" v-show="false">
                            <a-input
                              v-decorator="[
                                'tipe['+t.triple+']',
                                {
                                  initialValue: 'triple',
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
                          <a-form-item :label="'Title '">
                            <a-select
                              v-decorator="[
                              'titel['+t.triple+']',
                              {
                                initialValue: 'Tn',
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
                              <a-select-option value="Tn">Tn</a-select-option>
                              <a-select-option value="Ny">Ny</a-select-option>
                              <a-select-option value="Nn">Nn</a-select-option>
                            </a-select>
                          </a-form-item>
                        </a-col>

                        <a-col :span="24">
                          <a-form-item label="Nama Lengkap" help="(tanpa gelar dan tanda baca)">
                            <a-input
                              v-decorator="[
                              'nama['+t.triple+']',
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

                        <a-col :span="14">
                          <a-form-item label="Nomor Paspor">
                            <a-input v-decorator="['nomor_passport['+t.triple+']']" size="large" />
                          </a-form-item>
                        </a-col>
                      </a-row>
                      <a-divider></a-divider>
                    </div>
                  </a-collapse-panel>

                  <a-collapse-panel :header="'Double '+ count.double" key="3" v-if="double != 0">
                    <div v-for="(d,key,index) in doubleLoop" :key="index">
                      <a-row :gutter="16">
                        <a-col :span="8">
                          <a-form-item label="hidden" v-show="false">
                            <a-input
                              v-decorator="[
                                'tipe['+d.double+']',
                                {
                                  initialValue: 'double',
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
                          <a-form-item :label="'Title'">
                            <a-select
                              v-decorator="[
                              'titel['+d.double+']',
                              {
                                initialValue: 'Tn',
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
                              <a-select-option value="Tn">Tn</a-select-option>
                              <a-select-option value="Ny">Ny</a-select-option>
                              <a-select-option value="Nn">Nn</a-select-option>
                            </a-select>
                          </a-form-item>
                        </a-col>

                        <a-col :span="24">
                          <a-form-item label="Nama Lengkap" help="(tanpa gelar dan tanda baca)">
                            <a-input
                              v-decorator="[
                              'nama['+d.double+']',
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

                        <a-col :span="14">
                          <a-form-item label="Nomor Paspor">
                            <a-input v-decorator="['nomor_passport['+d.double+']']" size="large" />
                          </a-form-item>
                        </a-col>
                      </a-row>
                      <a-divider></a-divider>
                    </div>
                  </a-collapse-panel>
                </a-collapse>
              </div>

              <div v-if="room === 2">
                <a-card class="b-solid b-radius mb-16">
                  <a-checkbox
                    @change="onCheckedFlight"
                    class="fs-15 fw-500 cr-black"
                  >Tambahkan Informasi Penerbangan</a-checkbox>
                  <p class="fs-14 cr-gray fw-400 mt-8">
                    Dengan menambah informasi penerbangan, membantu kami lebih
                    siap mengatur penjemputan dan kepulangan anda.
                  </p>

                  <div v-if="checkedFlight">
                    <a-row :gutter="16">
                      <a-col :xs="24" :sm="24" :md="16">
                        <a-form-item label="Nama Maskapai">
                          <a-input
                            v-decorator="[
                              'nama_maskapai',
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

                      <a-col :xs="24" :sm="24" :md="8">
                        <a-form-item label="No. Penerbangan">
                          <a-input
                            v-decorator="[
                              'nomor_penerbangan',
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

                    <a-divider orientation="left">Berangkat</a-divider>

                    <a-row :gutter="16">
                      <a-col :xs="24" :sm="24" :md="16">
                        <a-form-item label="Tanggal Berangkat">
                          <a-date-picker
                            v-decorator="[
                              'tanggal_keberangkatan',
                              {
                                rules: [
                                  {
                                    required: true,
                                    message: 'Harus di isi!'
                                  }
                                ]
                              }
                            ]"
                            placeholder="Pilih Tanggal"
                            :disabledDate="disabledDate"
                            size="large"
                            class="w-100"
                          />
                        </a-form-item>
                      </a-col>

                      <a-col :xs="24" :sm="24" :md="8">
                        <a-form-item label="Jam Berangkat">
                          <a-time-picker
                            v-decorator="[
                              'jam_keberangkatan',
                              {
                                rules: [
                                  {
                                    required: true,
                                    message: 'Harus di isi!'
                                  }
                                ]
                              }
                            ]"
                            :open.sync="timeFlightDeparture"
                            placeholder="Pilih Jam"
                            format="HH:mm"
                            class="w-100"
                            size="large"
                          >
                            <a-button
                              slot="addon"
                              size="small"
                              type="primary"
                              @click="handleClose"
                            >Simpan</a-button>
                          </a-time-picker>
                        </a-form-item>
                      </a-col>
                    </a-row>

                    <a-divider orientation="left">Kepulangan</a-divider>

                    <a-row :gutter="16">
                      <a-col :xs="24" :sm="24" :md="16">
                        <a-form-item label="Tanggal Pulang">
                          <a-date-picker
                            v-decorator="[
                              'tanggal_kepulanggan',
                              {
                                rules: [
                                  {
                                    required: true,
                                    message: 'Harus di isi!'
                                  }
                                ]
                              }
                            ]"
                            placeholder="Pilih Tanggal"
                            :disabledDate="disabledDate"
                            size="large"
                            class="w-100"
                          />
                        </a-form-item>
                      </a-col>

                      <a-col :xs="24" :sm="24" :md="8">
                        <a-form-item label="Jam Pulang">
                          <a-time-picker
                            v-decorator="[
                              'jam_kepulanggan',
                              {
                                rules: [
                                  {
                                    required: true,
                                    message: 'Harus di isi!'
                                  }
                                ]
                              }
                            ]"
                            :open.sync="timeFlightArrival"
                            placeholder="Pilih Jam"
                            format="HH:mm"
                            class="w-100"
                            size="large"
                          >
                            <a-button
                              slot="addon"
                              size="small"
                              type="primary"
                              @click="handleClose"
                            >Simpan</a-button>
                          </a-time-picker>
                        </a-form-item>
                      </a-col>
                    </a-row>

                    <a-comment>
                      <a-avatar
                        slot="avatar"
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                        alt="Umaroh"
                        size="large"
                      />
                      <div slot="content">
                        <a-form-item
                          label="Sapa Umaroh Anda"
                          help="Berikan keterangan tentang kedatangan anda"
                        >
                          <a-textarea :rows="4" v-decorator="['pesan']"></a-textarea>
                        </a-form-item>
                      </div>
                    </a-comment>
                  </div>
                </a-card>
              </div>

              <div :style="{ display: 'block', 'text-align': 'right' }">
                <a-button
                  class="md-btn--action"
                  size="large"
                  type="primary"
                  html-type="submit"
                >Lanjut ke Pembayaran</a-button>
              </div>
            </a-form>
          </a-col>
        </a-row>
      </div>
    </a-layout-content>

    <a-layout-footer
      class="ant-layout-footer--payment"
      :style="{ 'background-color': '#f7f7f7', 'text-align': 'center' }"
    >
      <div class="container">2016 - {{ new Date().getFullYear() }} © PT. NUH Teknologi Solution</div>
    </a-layout-footer>
  </a-layout>
</template>
<script>
import UserLogin from "@/components/Payment/UserLogin";
import SideTicket from "./side";
import moment from "moment";
import axios from "axios";
const Cookie = process.client ? require("js-cookie") : undefined;

export default {
  middleware: "authenticated",
  layout: "application",
  name: "orderData",

  components: { UserLogin, SideTicket },

  beforeCreate() {
    this.form = this.$form.createForm(this);
  },

  head() {
    return {
      title: "Haloatta - Booking Paket Umrah & Komponen Umrah Terlengkap"
    };
  },

  async asyncData({ query }) {
    const myProduct = await axios.post(process.env.baseUrl + "la/detail", {
      kode_produk: query.kode
    });
    let getProduk = myProduct.data.data;
    return {
      data: getProduk,
      quad: query.quad * 4,
      triple: query.triple * 3,
      double: query.double * 2,
      count: {
        quad: query.quad,
        triple: query.triple,
        double: query.double
      }
    };
  },

  data() {
    return {
      data: "",
      room: 1,
      typeOrder: 1,
      checkedFlight: false,
      timeFlightDeparture: false,
      timeFlightArrival: false,
      quad: 0,
      triple: 0,
      double: 0,
      pax: 0,
      count: {
        quad: 0,
        triple: 0,
        double: 0
      },
      coba: [],
      quadLoop: [],
      tripleLoop: [],
      doubleLoop: [],
      cek: true,

      information: [
        {
          title:
            "Quad : Room Quad atau sekamar 4 (empat) orang di isi dengan sesama gender"
        },
        {
          title:
            "Triple : Room Triple atau sekamar 3 (tiga) orang di isi dengan sesama gender"
        },
        {
          title:
            "Double : Room Double atau sekamar 2 (dua) orang di isi dengan sesama gender"
        }
      ]
    };
  },
  mounted() {
    this.setPax();
  },

  methods: {
    moment,
    setPax() {
      let count = 0;

      for (let index = 0; index < this.quad; index++) {
        this.quadLoop.push({ quad: count });
        count = parseInt(count) + 1;
      }

      for (let index = 0; index < this.triple; index++) {
        this.tripleLoop.push({ triple: count });
        count = parseInt(count) + 1;
      }

      for (let index = 0; index < this.double; index++) {
        this.doubleLoop.push({ double: count });
        count = parseInt(count) + 1;
      }
    },

    disabledDate(current) {
      return current && current < moment().endOf("day");
    },

    onChange(e) {},

    handleClose() {
      this.timeFlightDeparture = false;
      this.timeFlightArrival = false;
    },

    onCheckedFlight() {
      this.checkedFlight = !this.checkedFlight;
    },

    handleSubmitMore(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          let params = this.$route.query;
          let data = {
            jenis_transaksi: params.type,
            kode_produk: params.kode,
            nama_pemesan: values.nama_pemesan,
            nomor_handphone: values.nomor_handphone
          };

          data["quad"] = params.quad;
          data["triple"] = params.triple;
          data["double"] = params.double;

          data["titel"] = values.titel;
          data["nama"] = values.nama;
          data["nomor_passport"] = values.nomor_passport;
          data["tipe"] = values.tipe;

          if (this.checkedFlight) {
            data["nama_maskapai"] = values.nama_maskapai;
            data["tanggal_keberangkatan"] = values.tanggal_keberangkatan;
            data["jam_keberangkatan"] = values.jam_keberangkatan;
            data["jam_kepulanggan"] = values.jam_kepulanggan;
            data["pesan"] = values.pesan;
            data["tanggal_kepulanggan"] = values.tanggal_kepulanggan;
          }

          const token = Cookie.get("auth");

          const config = {
            headers: {
              Authorization: "Bearer " + token
            }
          };

          let url = process.env.baseUrl + "transaksi";

          axios
            .post(url, data, config)
            .then(response => {
              console.log(response);

              if (response.data.status == 200) {
                this.$router.push({
                  path: "/payment/purchase-transfer",
                  query: {
                    notrans: response.data.data.notrans
                  }
                });
              } else {
                this.$message.error(response.data.msg);
              }
            })
            .catch(err => {
              console.log("error", err);
            });
        }
      });
    }
  }
};
</script>
