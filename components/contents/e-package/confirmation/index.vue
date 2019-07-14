<template>
  <a-row type="flex" justify="center">
    <a-col :span="22">
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
              <a-upload-dragger
                name="images"
                :beforeUpload="beforeUpload"
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                @change="handleChange"
              >
                <div :style="{padding: '0 16px'}">
                  <p class="ant-upload-drag-icon">
                    <a-icon type="upload" />
                  </p>
                  <p class="ant-upload-text">Click or drag file to this area to upload</p>
                  <p class="ant-upload-hint">
                    <span>Upload bukti pembayaran bank transfer anda disini, Untuk mempercepat proses verifikasi pembayaran.</span>
                  </p>
                </div>
              </a-upload-dragger>
            </div>
            <div class="mb-16">
              <a-button class="ant-btn--action mb-16">Kirim Bukti Pembayaran</a-button>
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
    </a-col>
  </a-row>
</template>
<script>
export default {
  methods: {
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
