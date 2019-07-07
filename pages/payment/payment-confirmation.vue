<template>
  <a-layout class="ant-layout--payment">
    <a-layout-header class="ant-layout-header--payment">
      <div class="ant-logo">
        <nuxt-link to="/">
          <img src="/haloatta_white.png" />
        </nuxt-link>
      </div>
      <a-steps :current="2" size="small">
        <a-step title="Data Pemesan" />
        <a-step title="Pembayaran" />
        <a-step title="E-Paket Terbit" />
      </a-steps>
    </a-layout-header>
    <a-layout-content
      class="ant-layout-content--payment-ePackage ant-layout-content--payment-ePackage-paidoff"
    >
      <div class="container" :style="{minHeight: '70vh'}">
        <a-row type="flex" justify="center">
          <a-col :span="20">
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
                    <div class="fs-40 fw-500 f-default cr-primary">Upload Bukti Bayar !</div>
                    <div class="fs-16 fw-400 f-default cr-black">
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
                    <a-button class="ant-btn--action mb-16">Kirim Bukti Transfer</a-button>
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
export default {
  layout: "application",
  name: "paymentConfirmation",
  head() {
    return {
      title: "Haloatta - Booking Paket Umrah & Komponen Umrah Terlengkap"
    };
  },
  data() {
    return {};
  },
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