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
        <a-step title="Konfirmasi" />
      </a-steps>
    </a-layout-header>
    <a-layout-content
      class="ant-layout-content--payment-ePackage ant-layout-content--payment-ePackage-paidoff"
    >
      <div class="container">
        <a-row type="flex" justify="center">
          <e-package-confirmation />
        </a-row>
      </div>
    </a-layout-content>

    <a-layout-footer class="ant-layout-footer--payment" :style="{'background':'#fff','text-align':'center'}">
      <div class="container">
        2016 - {{ new Date().getFullYear() }} © PT. NUH Teknologi Solution
      </div>
    </a-layout-footer>
  </a-layout>
</template>
<script>
import ePackageConfirmation from "@/components/contents/e-package/confirmation/index.vue";
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
  },
  components: {
    ePackageConfirmation
  }
};
</script>
