<template>
  <div class="ant-layout--top-up">
    <a-card :bordered="false" class="b-solid b-radius b-shadow">
      <a-row :gutter="32" type="flex" justify="space-around" align="middle">
        <a-col :span="12">
          <div class="fs-30 fw-500 cr-black f-default mb-8">Upload Bukti Transfer Anda</div>

          <div class="fs-15 fw-400 cr-black mb-16">
            Upload bukti pembayaran bank transfer anda untuk mempercepat proses
            verifikasi.
          </div>
          <a-form layout="vertical" :form="form" @submit="handleSubmit" hideRequiredMark>
            <a-form-item label="No. Transaksi">
              <a-input
                v-decorator="[
                  'nomor_transaksi',
                  { initialValue: item.notrans }
                ]"
                size="large"
                disabled
              />
            </a-form-item>

            <a-form-item label="Jumlah Tagihan">
              <a-input
                v-decorator="['bayar', { initialValue: item.total_tagihan }]"
                size="large"
                disabled
              />
            </a-form-item>

            <a-form-item label="Rekening Tujuan" class="mb-0">
              <a-select
                v-decorator="['kode_bank', { initialValue: value }]"
                @change="onChange"
                placeholder="Pilih Rekening Tujuan Transfer"
                size="large"
              >
                <a-select-option
                  v-for="(item, key) in item.bank"
                  :key="key"
                  :value="item.kdbank"
                >{{ item.aliasbank }}</a-select-option>
              </a-select>
            </a-form-item>

            <a-form-item>
              <a-list :dataSource="item.bank">
                <a-list-item
                  slot="renderItem"
                  slot-scope="item2, index"
                  :key="index"
                  v-if="value === item2.kdbank"
                >
                  <a-skeleton :loading="loading" active>
                    <div class="b-shadow b-radius b-solid p-24 w-100">
                      <div class="d-flex align-items-center mb-8">
                        <div class="fs-15 fw-500">{{ item2.namabank }} ({{ item2.aliasbank }})</div>
                        <div class="ml-auto">
                          <img :style="{ maxWidth: '100%', height: '18px' }" :src="item2.images" />
                        </div>
                      </div>

                      <dl class="ant-deflist ant-deflist--small">
                        <dt class="ant-deflist__label cr-black fw-400">Nomor Rekening</dt>
                        <dd class="ant-deflist__value text-ellipsis fw-400 cr-black">
                          <span>{{ item2.norekening }}</span>
                        </dd>
                        <dt class="ant-deflist__label cr-black fw-400">Nama Penerima</dt>
                        <dd class="ant-deflist__value text-ellipsis cr-black fw-400">
                          <span>-/belum ada</span>
                        </dd>
                      </dl>
                    </div>
                  </a-skeleton>
                </a-list-item>
              </a-list>
            </a-form-item>

            <a-form-item>
              <a-upload-dragger
                v-decorator="[
                  'upload',
                  {
                    rules: [{ required: true, message: 'Harus di isi!' }]
                  }
                ]"
                name="bukti_transfer"
                :beforeUpload="beforeUpload"
                action="/"
                @change="handleChange"
              >
                <div class="d-flex align-items-center text-left" :style="{ padding: '16px 24px' }">
                  <div class="ant-upload-drag-icon mr-16">
                    <a-avatar size="large" icon="upload" />
                  </div>
                  <div>
                    <p class="ant-upload-text fs-15 cr-gray f-default">
                      Klik atau drag didalam area ini untuk mengupload foto
                      bukti transfer anda
                    </p>
                  </div>
                </div>
              </a-upload-dragger>
            </a-form-item>

            <a-form-item>
              <a-button
                type="primary"
                size="large"
                html-type="submit"
                class="b-shadow b-radius"
              >Kirim Bukti Pembayaran</a-button>
            </a-form-item>
          </a-form>
        </a-col>
        <a-col :span="12">
          <img class="max-width" src="/icons/topUp_conf.png" />
        </a-col>
      </a-row>
    </a-card>
  </div>
</template>
<script>
import axios from "axios";
const Cookie = process.client ? require("js-cookie") : undefined;

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

export default {
  layout: "accounts",
  name: "eConfirmation",
  head() {
    return {
      title: "Konfirmasi Pembayaran - Haloatta"
    };
  },

  data() {
    return {
      loading: true,
      value: "BRI-ATTA",
      item: "",
      imageUrl: "",
      formValues: {}
    };
  },

  beforeCreate() {
    this.form = this.$form.createForm(this);
  },

  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  },

  created: function() {
    this.getdata();
  },

  methods: {
    onChange(value) {
      console.log("changed", value);
      this.value = value;
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          this.formValues = {
            nomor_transaksi: values.nomor_transaksi,
            metode_pembayaran: "TRANSFER",
            jenis_pembayaran: "PELUNASAN",
            bayar: values.bayar,
            kode_bank: values.kode_bank,
            file: this.imageUrl
          };

          const token = Cookie.get("auth");
          const config = {
            headers: {
              Authorization: "Bearer " + token
            }
          };

          const new_value = this.formValues;

          axios
            .post(
              process.env.baseUrl + "transaksi/pembayaran",
              new_value,
              config
            )
            .then(response => {
              if (response.data.status == 200) {
                this.form.resetFields();
                this.$message.success(response.data.msg);
                this.$emit("saved", true);
                this.$router.push({
                  path: "/accounts/billing"
                });
              } else {
                this.$message.error(response.data.msg);
              }
            })
            .catch(() => {
              this.$message.error("Ada kesalahan");
              console.log(this.formValues, "salah");
            });
        }
      });
    },
    handleChange(info) {
      const status = info.file.status;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        this.$notification.success({
          message: `${info.file.name}`,
          description: "Gambar bukti pembayaran berhasil di upload."
        });
        getBase64(info.file.originFileObj, imageUrl => {
          this.imageUrl = imageUrl;
        });
      } else if (status === "error") {
        this.$notification.error({
          message: `${info.file.name}`,
          description:
            "Gambar bukti pembayaran gagal di upload, Mohon upload kembali!"
        });
      }
    },
    beforeUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error("Kapasitas gambar tidak boleh melebihi 2MB!");
      }
      return isLt2M;
    },
    async getdata() {
      const token = Cookie.get("auth");
      const config = {
        headers: {
          Authorization: "Bearer " + token
        }
      };
      let params = this.$route.query;
      axios
        .post(
          process.env.baseUrl + "transaksi/paymentdetail",
          {
            notrans: params.notrans
          },
          config
        )
        .then(response => {
          this.item = response.data.data;
        });
    }
  }
};
</script>
