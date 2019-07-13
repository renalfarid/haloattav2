<template>
  <div class="ant-layout--top-up">
    <a-card :bordered="false" class="b-solid b-radius b-shadow">
      <a-row :gutter="32" type="flex" justify="space-around" align="middle">
        <a-col :span="12">
          <div class="fs-30 fw-500 cr-black f-default mb-8">
            Upload Bukti Transfer Saldo
            <br />Halo Pay Anda
          </div>

          <div class="fs-15 fw-400 cr-black mb-16">
            Upload bukti pembayaran bank transfer anda untuk
            mempercepat proses verifikasi top up saldo Halo Pay anda
          </div>

          <div class="fs-15 fw-400 cr-black">No. Transaksi</div>
          <div class="fs-18 fw-500 cr-black mb-16">#TP1234567890HT</div>

          <a-form layout="vertical" :form="form" @submit="handleSubmit" hideRequiredMark>
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
                <div class="d-flex align-items-center text-left" :style="{padding: '16px 24px'}">
                  <div class="ant-upload-drag-icon mr-16">
                    <a-avatar size="large" icon="upload" />
                  </div>
                  <div>
                    <p class="ant-upload-text fs-15 cr-gray f-default">
                      Klik atau drag didalam area ini untuk
                      mengupload foto bukti transfer anda
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
export default {
  layout: "accounts",
  name: "eConfirmation",
  head() {
    return {
      title: "Konfirmasi TopUp Saldo - Haloatta"
    };
  },
  data() {
    return {};
  },
  beforeCreate() {
    this.form = this.$form.createForm(this);
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
