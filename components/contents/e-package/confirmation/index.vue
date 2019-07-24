<template>
  <a-row type="flex" justify="center">
    <a-col :span="22">
      <a-form layout="vertical" :form="form" @submit="handleSubmit" hideRequiredMark>
        <a-row
          :gutter="32"
          type="flex"
          justify="space-around"
          align="middle"
          :style="{minHeight: '70vh'}"
        >
          <a-col :span="12">
            <a-card :bordered="false">
              <div>
                <div class="fs-30 fw-500 f-default cr-primary mb-8">Upload Bukti Bayar !</div>
                <div class="fs-15 fw-400 f-default cr-black">
                  <span>
                    Upload bukti pembayaran bank transfer anda untuk mempercepat
                    proses verifikasi pembayaran
                  </span>
                </div>
              </div>
              <div class="mt-24 mb-24">
                <div class="fs-14 fw-400 cr-gray text-uppercase">Nomor Pesanan</div>
                <div class="fs-18 fw-500 cr-black">HT1234567890</div>
              </div>
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
                      :style="{padding: '16px 24px'}"
                    >
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
              </div>
              <div class="mb-16">
                <a-button html-type="submit" class="ant-btn--action mb-16">Kirim Bukti Pembayaran</a-button>
                <div class="fs-14 fw-400 f-default cr-gray">
                  Customer service kami akan menanyakan nomer pesanan
                  <br />saat menghubungi anda.
                </div>
              </div>
            </a-card>
          </a-col>
          <a-col :span="12">
            <a-card :bordered="false">
              <img slot="cover" src="/icons/success.png" />
            </a-card>
          </a-col>
        </a-row>
      </a-form>
    </a-col>
  </a-row>
</template>
<script>
export default {
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
