<template>
  <a-form
    layout="vertical"
    :form="form"
    @submit="handleSubmit"
    hideRequiredMark
  >
    <a-row type="flex" justify="space-around" align="middle">
      <a-col :xs="24" :sm="24" :md="20">
        <a-card :bordered="false">
          <div class="mb-16">
            <div class="fs-24 fw-500 cr-black mb-8">
              Upload Bukti Transfer Anda
            </div>
            <div class="fs-14 fw-400 cr-gray">
              <span>
                Upload bukti pembayaran bank transfer anda untuk mempercepat
                proses verifikasi pembayaran
              </span>
            </div>
          </div>

          <div class="item mb-16">
            <div class="fs-12 fw-400 text-uppercase cr-gray">No. Transaksi</div>
            <div class="fs-16 fw-600 cr-black">{{ item.notrans }}</div>
          </div>

          <div class="item mb-16">
            <div class="fs-12 fw-400 text-uppercase cr-gray">
              Tipe Pembayaran
            </div>
            <div class="fs-16 fw-600 cr-black">Lunas</div>
          </div>

          <div class="item mb-24">
            <div class="fs-12 fw-400 text-uppercase cr-gray">
              Total Pembayaran
            </div>
            <div class="fs-16 fw-600 cr-black">{{ total | currency }}</div>
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
                    {{ total | currency }}
                  </div>
                </div>
                Penting! Jatuh tempo pelunasan 30 hari sebelum tanggal keberangkatan.
              </template>
            </a-alert>
          </div>

          <a-skeleton :loading="loading" active>
            <a-card
              class="b-radius mb-16"
              :style="{ padding: '0 24px', 'border-style': 'dashed' }"
            >
              <div class="fs-12 fw-400 text-uppercase cr-gray mb-16">
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

          <div class="mt-24 mb-24">
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
                <div
                  class="d-flex align-items-center text-left"
                  :style="{ padding: '16px 24px' }"
                >
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
          </div>

          <div class="mb-16">
            <a-button
              html-type="submit"
              class="ant-btn--action fs-14 mb-16"
              size="large"
              >Kirim Bukti Transfer</a-button
            >
          </div>
        </a-card>
      </a-col>
    </a-row>
  </a-form>
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
  props: ["data"],
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  data() {
    return {
      tipe_pembayaran: "DP",
      kode_bank: "BRI-ATTA",
      loading: true,
      item: "",
      imageUrl: "",
      formValues: {},
      total: 0
    };
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
    onChange(kode_bank) {
      this.kode_bank = kode_bank;
      console.log("changed", kode_bank);
    },
    handleSubmit(e) {
      e.preventDefault();
      let params = this.$route.query;
      this.form.validateFields((err, values) => {
        if (!err) {
          this.formValues = {
            nomor_transaksi: values.nomor_transaksi,
            metode_pembayaran: "TRANSFER",
            jenis_pembayaran: params.jenis,
            bayar: values.bayar,
            kode_bank: values.kode_bank,
            file: this.imageUrl,
            otp_code: ""
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
      let params = this.$route.query;

      const token = Cookie.get("auth");

      const config = {
        headers: {
          Authorization: "Bearer " + token
        }
      };

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
          this.total = params.total;
        });
    }
  }
};
</script>
