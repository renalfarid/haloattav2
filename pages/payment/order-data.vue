<template>
  <a-layout class="ant-layout--payment">
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
    <a-layout-content class="ant-layout-content--payment-order" :style="{ minHeight: '90vh' }">
      <div class="container">
        <a-row type="flex" justify="center">
          <a-col :span="20">
            <a-row :gutter="24">
              <a-col :span="16">
                <a-form
                  layout="vertical"
                  :form="form"
                  @submit="handleSubmitMore"
                  class="form-search--costume"
                  hideRequiredMark
                >
                  <a-card class="b-shadow b-radius mb-16">
                    <a-list itemLayout="horizontal" class="ant-list--package-information">
                      <a-list-item class="ant-list-item--package-information pt-0">
                        <div class="w-100">
                          <div class="ant-package--information-title fs-20 cr-black fw-500 mb-0">
                            <span>Isi Data Pemesan</span>
                          </div>
                          <div class="ant-package--information-text fs-15 cr-black fw-400">
                            <span>Isi data pesanan anda untuk melanjutkan proses berikutnya</span>
                          </div>
                        </div>
                      </a-list-item>

                      <a-list-item class="ant-list-item--package-information">
                        <div class="w-100">
                          <div class="d-flex align-items-center w-100">
                            <div>
                              <a-avatar
                                class="mr-16"
                                size="large"
                                style="backgroundColor:#87d068"
                                icon="user"
                              />
                            </div>
                            <div>
                              <div
                                class="fs-14 fw-400 cr-gray f-default"
                              >Anda masuk menggunakan akun anda</div>
                              <div
                                class="fs-16 fw-500 cr-black"
                              >Anda Login sebagai {{$store.state.auth.nama}}</div>
                            </div>
                          </div>
                        </div>
                      </a-list-item>

                      <a-list-item class="ant-list-item--package-information">
                        <div class="w-100">
                          <a-form-item
                            label="Nama Lengkap"
                            help="Sesuai KTP/paspor/SIM (tanpa tanda baca atau gelar)"
                            class="mb-16"
                            hasFeedback
                          >
                            <a-input
                              v-model="dataPemesan.nama"
                              v-decorator="['anu',{ rules: [{ required: true }]}]"
                            />
                          </a-form-item>

                          <a-form-item
                            label="Nomor Handphone"
                            help="Contoh : No. Handphone 0812345678"
                            class="mb-16"
                            hasFeedback
                          >
                            <a-input
                              v-model="dataPemesan.nohp"
                              v-decorator="['telp',{ rules: [{ required: true }]}]"
                            />
                          </a-form-item>

                          <a-form-item
                            label="Alamat Email"
                            help="Contoh: email@contoh.com"
                            hasFeedback
                          >
                            <a-input
                              v-model="dataPemesan.email"
                              v-decorator="['email',{ rules: [{ required: true }]}]"
                            />
                          </a-form-item>
                        </div>
                      </a-list-item>
                    </a-list>
                  </a-card>

                  <a-card class="b-shadow b-radius mb-16">
                    <a-list>
                      <a-list-item class="ant-list-item--package-information">
                        <div class="w-100">
                          <div class="ant-package--information-title fs-16 cr-black fw-500">
                            <span>Data Jamaah</span>
                          </div>

                          <a-radio-group
                            class="mb-16 mt-8"
                            name="radioGroup"
                            :defaultValue="1"
                            @change="onChange"
                            v-model="value"
                          >
                            <a-radio :value="1" class="fs-15 cr-black">Isi Data Jamaah Sekarang</a-radio>
                            <a-radio :value="2" class="fs-15 cr-black">Isi Data Jamaah Nanti</a-radio>
                          </a-radio-group>

                          <a-divider></a-divider>

                          <div v-if="value === 1">
                            <a-row :gutter="16" type="flex" justify="space-around" align="middle">
                              <a-col :span="18">
                                <a-row :gutter="16">
                                  <a-col :span="24">
                                    <a-form-item label="Title" hasFeedback>
                                      <a-select
                                        v-decorator="['title',{initialValue: 'Tn.', rules: [{ required: true, message: 'Harus di isi!' }]}]"
                                        placeholder="Pilih Title"
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
                                      hasFeedback
                                    >
                                      <a-input
                                        v-decorator="['firstName',{rules: [{ required: true, message: 'Harus di isi!' }]}]"
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
                                      hasFeedback
                                    >
                                      <a-input
                                        v-decorator="['lastName',{rules: [{ required: true, message: 'Harus di isi!' }]}]"
                                        size="large"
                                      />
                                    </a-form-item>
                                  </a-col>
                                </a-row>
                              </a-col>

                              <a-col :span="6">
                                <div class="d-flex align-items-center">
                                  <a-form-item class="m-auto" label="Photo Jamaah">
                                    <a-upload
                                      v-decorator="['photoJamaah',{initialValue: photoJamaah,rules: [{ required: true, message: 'Harus di isi!' }]}]"
                                      name="photoJamaah"
                                      listType="picture-card"
                                      :showUploadList="false"
                                      action="#"
                                      :beforeUpload="beforeUpload"
                                      @change="handleChange"
                                    >
                                      <img
                                        class="max-width"
                                        v-if="photoJamaah"
                                        :src="photoJamaah"
                                        alt="avatar"
                                      />
                                      <div v-else>
                                        <a-icon :type="loading ? 'loading' : 'plus'" />
                                        <div class="ant-upload-text">Upload</div>
                                      </div>
                                    </a-upload>
                                  </a-form-item>
                                </div>
                              </a-col>
                            </a-row>

                            <a-row :gutter="16">
                              <a-col :span="12">
                                <a-form-item label="Tempat Lahir" hasFeedback>
                                  <a-input
                                    v-decorator="['tempatlahir',{rules: [{ required: true, message: 'Harus di isi!' }]}]"
                                    size="large"
                                  />
                                </a-form-item>
                              </a-col>
                              <a-col :span="12">
                                <a-form-item label="Tanggal Lahir" hasFeedback>
                                  <a-date-picker
                                    v-decorator="['date',{rules: [{ required: true, message: 'Harus di isi!' }]}]"
                                    placeholder="Pilih Tanggal Lahir Anda"
                                    size="large"
                                    style="width: 100%"
                                  />
                                </a-form-item>
                              </a-col>
                            </a-row>

                            <a-divider
                              class="ant-divider-title-left"
                              orientation="left"
                              :style="{ marginTop: '0' }"
                            />

                            <a-row :gutter="16">
                              <a-col :span="8">
                                <a-form-item label="Nomor Telepon" hasFeedback>
                                  <a-input
                                    v-decorator="['telp',{rules: [{ required: true, message: 'Harus di isi!' }]}]"
                                    size="large"
                                  />
                                </a-form-item>
                              </a-col>

                              <a-col :span="8">
                                <a-form-item label="Nomor Handphone" hasFeedback>
                                  <a-input
                                    v-decorator="['hp',{rules: [{ required: true, message: 'Harus di isi!' }]}]"
                                    size="large"
                                  />
                                </a-form-item>
                              </a-col>

                              <a-col :span="8">
                                <a-form-item label="Kewarganegaraan" hasFeedback>
                                  <a-select
                                    v-decorator="['country',{initialValue: 'Indonesia', rules: [{ required: true, message: 'Harus di isi!' }]}]"
                                    placeholder="Pilih Kewarganegaraan"
                                    size="large"
                                  >
                                    <a-select-option value="Indonesia">Indonesia</a-select-option>
                                  </a-select>
                                </a-form-item>
                              </a-col>
                            </a-row>

                            <a-row :gutter="16">
                              <a-col :span="8">
                                <a-form-item label="Status Pernikahan" hasFeedback>
                                  <a-select
                                    v-decorator="['status',{initialValue: 'Belum Nikah', rules: [{ required: true, message: 'Harus di isi!' }]}]"
                                    placeholder="Pilih Status"
                                    size="large"
                                    style="width: 100%"
                                  >
                                    <a-select-option value="Belum Nikah">Belum Nikah</a-select-option>
                                    <a-select-option value="Nikah">Nikah</a-select-option>
                                  </a-select>
                                </a-form-item>
                              </a-col>
                              <a-col :span="8">
                                <a-form-item label="Jenis Pendidikan" hasFeedback>
                                  <a-select
                                    v-decorator="['pendidikan',{rules: [{ required: true, message: 'Harus di isi!' }]}]"
                                    placeholder="Pilih Pendidikan"
                                    size="large"
                                    style="width: 100%"
                                  >
                                    <a-select-option value="SD">SD</a-select-option>
                                    <a-select-option value="SMP/MTS">SMP/MTS</a-select-option>
                                    <a-select-option value="SMA/SMK">SMA/SMK</a-select-option>
                                    <a-select-option value="S1">S1</a-select-option>
                                  </a-select>
                                </a-form-item>
                              </a-col>
                              <a-col :span="8">
                                <a-form-item label="Jenis Pekerjaan" hasFeedback>
                                  <a-select
                                    v-decorator="['pekerjaan',{rules: [{ required: true, message: 'Harus di isi!' }]}]"
                                    placeholder="Pilih Pekerjaan"
                                    size="large"
                                    style="width: 100%"
                                  >
                                    <a-select-option value="Tani/Tambak">Tani/Tambak</a-select-option>
                                    <a-select-option value="Wiraswasta">Wiraswasta</a-select-option>
                                    <a-select-option value="Wirausaha">Wirausaha</a-select-option>
                                  </a-select>
                                </a-form-item>
                              </a-col>
                            </a-row>

                            <a-divider
                              class="ant-divider-title-left"
                              orientation="left"
                              :style="{ marginTop: '0' }"
                            >
                              <span class="fs-15 cr-gray">Informasi Paspor Jamaah</span>
                            </a-divider>

                            <a-row :gutter="16">
                              <a-col :span="8">
                                <a-form-item label="Nomor Paspor">
                                  <a-input v-decorator="['nomor_paspor']" size="large" />
                                </a-form-item>
                              </a-col>
                              <a-col :span="8">
                                <a-form-item label="Negara Penerbit">
                                  <a-select
                                    v-decorator="['country_paspor', {initialValue: 'Indonesia'}]"
                                    placeholder="Pilih Negara"
                                    size="large"
                                  >
                                    <a-select-option value="Indonesia">Indonesia</a-select-option>
                                  </a-select>
                                </a-form-item>
                              </a-col>
                              <a-col :span="8">
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
                          </div>

                          <div v-else>
                            <a-alert
                              :showIcon="false"
                              message="Kami akan mengirimkan formulir pengisian data jamaah setelah anda menyelesaikan transkasi dengan status pembayaran telah di DP atau LUNAS"
                              banner
                            />
                          </div>
                        </div>
                      </a-list-item>
                    </a-list>
                  </a-card>

                  <a-card class="b-shadow b-radius mb-16">
                    <div class="ant-package--information-text fs-14 cr-gray fw-400">
                      <span>Dengan mengklik tombol lanjut, maka anda dianggap setuju dengan syarat dan ketentuan, kebijakan pembatalan, kebijakan refund Halo Atta</span>
                    </div>
                  </a-card>

                  <a-button size="large" type="primary" html-type="submit">
                    <span>Lanjut ke Pembayaran</span>
                  </a-button>
                </a-form>
              </a-col>
              <!-- card sider -->
              <a-col :span="8">
                <siderPayment />
              </a-col>
            </a-row>
          </a-col>
        </a-row>
      </div>
    </a-layout-content>
    <a-layout-footer class="ant-layout-footer--payment-order">
      <div class="container">
        <a-row type="flex" justify="center">
          <a-col :span="20">© 2016 - 2019 Haloatta Travel Technology</a-col>
        </a-row>
      </div>
    </a-layout-footer>
  </a-layout>
</template>
<script>
import siderPayment from "@/pages/payment/sider.vue";
import moment from "moment";
import axios from "axios";
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}
export default {
  middleware: "authenticated",
  layout: "application",
  name: "orderData",
  head() {
    return {
      title: "Haloatta - Booking Paket Umrah & Komponen Umrah Terlengkap"
    };
  },
  data() {
    return {
      value: 1,
      loading: false,
      photoJamaah: "",
      dataPemesan: {
        nama: "",
        nohp: "",
        email: ""
      }
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  methods: {
    moment,
    handleChange(info) {
      if (info.file.status === "uploading") {
        this.loading = true;
        return;
      }
      if (info.file.status === "done") {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, photoJamaah => {
          this.photoJamaah = photoJamaah;
          this.loading = false;
        });
      }
    },
    beforeUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error("Maaf, Ukuran gambar tidak boleh melebihi 2MB!");
      }
      return isLt2M;
    },
    disabledDate(current) {
      return current && current < moment().endOf("day");
    },
    onChange(e) {
      console.log("radio checked", e.target.value);
    },
    handleSubmitMore(e) {
      e.preventDefault();
      // this.form.validateFields((err, values) => {
      //   if (!err) {
      //     return this.$router.push({
      //       path: "/payment/purchase-saldo",
      //       query: {
      //         kota_asal: this.nama
      //       }
      //     });
      //   }
      // });
      let params = this.$route.query;
      let data = {
        jenis_transaksi: params.type,
        kode_produk: params.kode,
        nama_pemesan: this.dataPemesan.nama,
        nomor_handphone: this.dataPemesan.nohp,
        pax: params.qty
      };
      const config = {
        headers: {
          Authorization: "Bearer " + this.$store.state.auth.accessToken
        }
      };

      axios
        .post(process.env.baseUrl + "transaksi", data, config)
        .then(response => {
          console.log(response);
          this.$router.push("/accounts");
        })
        .catch(err => {
          console.log("error", err);
        });
    }
  },
  components: {
    siderPayment
  }
};
</script>
