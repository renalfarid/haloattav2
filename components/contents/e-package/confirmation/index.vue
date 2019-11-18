<template>
  <a-form
    layout="vertical"
    :form="form"
    @submit="handleSubmit"
    hideRequiredMark
  >
    <a-row type="flex" justify="space-around" align="middle">
      <a-col :span="20">
        <a-card :bordered="false">
          <div class="mb-16">
            <div class="fs-30 fw-500 f-default cr-black mb-8">
              Upload Bukti Transfer Anda
            </div>
            <div class="fs-14 fw-400 f-default cr-gray">
              <span>
                Upload bukti pembayaran bank transfer anda untuk mempercepat
                proses verifikasi pembayaran
              </span>
            </div>
          </div>

          <a-form-item label="No. Transaksi">
            <a-input
              v-decorator="['nomor_transaksi']"
              disabled
            />
          </a-form-item>

          <a-form-item label="Jumlah Tagihan">
            <a-input v-decorator="['bayar']" disabled />
          </a-form-item>

          <a-form-item label="Rekening Tujuan" class="mb-0">
            <a-select
              v-model="kode_bank"
              placeholder="Pilih Rekening Tujuan Transfer"
            >
              <a-select-option value="BRI">BRI</a-select-option>
            </a-select>
          </a-form-item>

          <a-form-item v-if="kode_bank === 'BRI'">
            <a-list>
              <a-list-item>
                <a-skeleton :loading="loading" active>
                  <div class="b-shadow b-radius b-solid p-24 w-100">
                    <div class="d-flex align-items-center mb-8">
                      <div class="fs-15 fw-500">
                        BRI
                      </div>
                      <div class="ml-auto">
                        <img
                          :style="{ maxWidth: '100%', height: '18px' }"
                          src="/icons/bank/bri.png"
                        />
                      </div>
                    </div>

                    <dl class="ant-deflist ant-deflist--small">
                      <dt class="ant-deflist__label cr-black fw-400">
                        Nomor Rekening
                      </dt>
                      <dd
                        class="ant-deflist__value text-ellipsis fw-400 cr-black"
                      >
                        <span>123456778899900000</span>
                      </dd>
                      <dt class="ant-deflist__label cr-black fw-400">
                        Nama Penerima
                      </dt>
                      <dd
                        class="ant-deflist__value text-ellipsis cr-black fw-400"
                      >
                        <span>PT Haloatta</span>
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
            <a-button html-type="submit" class="ant-btn--action mb-16"
              >Kirim Bukti Pembayaran</a-button
            >
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
export default {
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  data() {
    return {
      kode_bank: "BRI",
      loading: true
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
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
    }
  }
};
</script>
