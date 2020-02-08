<template>
  <div class="ant-layout--top-up">
    <a-card :bordered="false" class="b-solid b-radius">
      <a-row type="flex" justify="center" class="mt-24">
        <a-col :xs="24" :sm="24" :md="20" :lg="18">
          <div class="fs-24 fw-500 cr-black mb-8">
            Upload Bukti Transfer Anda
          </div>

          <div class="fs-14 fw-400 cr-black mb-16">
            Upload bukti pembayaran bank transfer anda untuk mempercepat proses
            verifikasi.
          </div>

          <a-form
            layout="vertical"
            :form="form"
            @submit="handleSubmit"
            hideRequiredMark
          >
            <div class="item mb-16">
              <div class="fs-12 fw-400 text-uppercase cr-gray">
                No. Transaksi
              </div>
              <div class="fs-16 fw-600 cr-black">{{ item.notrans }}</div>
            </div>

            <div class="item mb-16">
              <div class="fs-12 fw-400 text-uppercase cr-gray">
                Tipe Pembayaran
              </div>
              <div class="fs-16 fw-600 cr-black">Lunas</div>
            </div>

            <div class="item mb-16">
              <div class="fs-12 fw-400 text-uppercase cr-gray">
                Total Pembayaran
              </div>
              <div class="fs-16 fw-600 cr-black">
                {{ item.total_tagihan | currency }}
              </div>
            </div>

            <div v-if="tipe_pembayaran === 'DP'">
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
                  <div class="item mb-16">
                    <div class="fs-12 fw-400 text-uppercase cr-gray">
                      Sisa Pembayaran Anda :
                    </div>
                    <div class="fs-16 fw-600 cr-black">
                      {{ item.total_tagihan | currency }}
                    </div>
                  </div>
                  Penting! Jatuh tempo pelunasan 30 hari sebelum tanggal
                  keberangkatan.
                </template>
              </a-alert>
            </div>

            <a-skeleton :loading="loading" active>
              <a-card
                class="b-radius mb-16"
                :style="{ 'border-style': 'dashed' }"
              >
                <div class="fs-12 fw-400 text-uppercase cr-gray mb-8">
                  Bank Tujuan transfer
                </div>

                <div class="d-flex align-items-center mb-8">
                  <div class="cr-black fs-14 fw-500">
                    BRI - BANK RAKYAT INDONESIA (BRI)
                  </div>
                  <div class="ml-auto">
                    <img
                      :style="{ maxWidth: '100%', height: '18px' }"
                      :src="require('~/static/icons/bank/bri.png')"
                    />
                  </div>
                </div>

                <dl class="ant-deflist ant-deflist--small">
                  <dt class="ant-deflist__label cr-black fw-400">
                    Nomor Rekening
                  </dt>
                  <dd class="ant-deflist__value text-ellipsis fw-400 cr-black">
                    <span>064201001011561</span>
                  </dd>
                  <dt class="ant-deflist__label cr-black fw-400">
                    Nama Penerima
                  </dt>
                  <dd class="ant-deflist__value text-ellipsis cr-black fw-400">
                    <span>PT Haloatta</span>
                  </dd>
                </dl>
              </a-card>
            </a-skeleton>

            <a-form-item class="mt-24">
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
                <div
                  class="d-flex align-items-center text-left"
                  :style="{ padding: '16px 24px' }"
                >
                  <div class="ant-upload-drag-icon mr-16">
                    <a-avatar size="large" icon="upload" />
                  </div>
                  <div>
                    <p class="ant-upload-text fs-14 cr-gray">
                      Klik atau drag ke dalam area ini untuk mengupload foto
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
                >Kirim Bukti Transfer</a-button
              >
            </a-form-item>
          </a-form>
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
      tipe_pembayaran: "DP",
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
                  path: "/accounts/transaction/purchase"
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
