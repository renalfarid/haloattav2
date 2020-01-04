<template>
  <a-form layout="vertical" :form="form" @submit="handleSubmit" hideRequiredMark>
    <a-row type="flex" justify="space-around" align="middle">
      <a-col :span="20">
        <a-card :bordered="false">
          <div class="mb-16">
            <div class="fs-30 fw-500 f-default cr-black mb-8">Upload Bukti Transfer Anda</div>
            <div class="fs-14 fw-400 f-default cr-gray">
              <span>
                Upload bukti pembayaran bank transfer anda untuk mempercepat
                proses verifikasi pembayaran
              </span>
            </div>
          </div>

          <a-form-item label="No. Transaksi">
            <a-input size="large" v-decorator="['nomor_transaksi', { initialValue: item.notrans }]" disabled />
          </a-form-item>

          <a-form-item label="Jumlah Tagihan">
            <a-input size="large" :value="total | currency" disabled />
          </a-form-item>

          <a-form-item label="Rekening Tujuan" class="mb-0">
            <a-select
              v-decorator="['kode_bank', { initialValue: kode_bank }]"
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
                v-if="kode_bank === item2.kdbank"
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
          </div>
          <div class="mb-16">
            <a-button html-type="submit" class="ant-btn--action fs-14 mb-16" size="large">Kirim Bukti Pembayaran</a-button>
            <div class="fs-14 fw-400 f-default cr-gray">
              Customer service kami akan menanyakan nomer pesanan
              <br />saat menghubungi anda.
            </div>
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
