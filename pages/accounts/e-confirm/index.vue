<template>
  <div class="ant-layout--top-up">
    <a-card :bordered="false" class="b-solid b-radius b-shadow">
      <a-row :gutter="32" type="flex" justify="space-around" align="middle">
        <a-col :span="12">
          <div class="fs-30 fw-500 cr-black f-default mb-8">Upload Bukti Transfer Anda</div>

          <div class="fs-15 fw-400 cr-black mb-16">
            Upload bukti pembayaran bank transfer anda untuk
            mempercepat proses verifikasi.
          </div>
          <a-form layout="vertical" :form="form" @submit="handleSubmit" hideRequiredMark>
            <a-form-item label="No. Transaksi">
              <a-input defaultValue="TP1234567890HT" size="large" disabled />
            </a-form-item>

            <a-form-item label="Jumlah Tagihan">
              <a-input defaultValue="Rp 500.000.731" size="large" disabled />
            </a-form-item>

            <a-form-item label="Rekening Tujuan" class="mb-0">
              <a-select
                @change="onChange"
                v-model="value"
                placeholder="Pilih Rekening Tujuan Transfer"
                size="large"
              >
                <a-select-option :value="1">BRI</a-select-option>
                <a-select-option :value="2">BNI</a-select-option>
                <a-select-option :value="3">BCA</a-select-option>
                <a-select-option :value="4">MANDIRI</a-select-option>
              </a-select>
            </a-form-item>

            <a-form-item>
              <a-list>
                <a-list-item v-if="value === 1">
                  <a-skeleton :loading="loading" active>
                    <div class="b-shadow b-radius b-solid p-24 w-100">
                      <div class="d-flex align-items-center mb-8">
                        <div class="fs-15 fw-500">Bank Rakyat Indonesia (BRI)</div>
                        <div class="ml-auto">
                          <img
                            :style="{maxWidth: '100%', height: '18px'}"
                            src="https://upload.wikimedia.org/wikipedia/commons/9/97/Logo_BRI.png"
                          />
                        </div>
                      </div>

                      <dl class="ant-deflist ant-deflist--small">
                        <dt class="ant-deflist__label cr-black fw-400">Nomor Rekening</dt>
                        <dd class="ant-deflist__value text-ellipsis fw-400 cr-black">
                          <span>085213247455</span>
                        </dd>
                        <dt class="ant-deflist__label cr-black fw-400">Nama Penerima</dt>
                        <dd class="ant-deflist__value text-ellipsis cr-black fw-400">
                          <span>PT. ATTAUBAH TRAVEL AMANAH, KCP Ratulangi</span>
                        </dd>
                      </dl>
                    </div>
                  </a-skeleton>
                </a-list-item>
                <a-list-item v-if="value === 2">
                  <a-skeleton :loading="loading" active>
                    <div class="b-shadow b-radius b-solid p-24 w-100">
                      <div class="d-flex align-items-center mb-8">
                        <div class="fs-15 fw-500">Bank Negara Indonesia (BNI)</div>
                        <div class="ml-auto">
                          <img
                            :style="{maxWidth: '100%', height: '18px'}"
                            src="https://upload.wikimedia.org/wikipedia/id/thumb/5/55/BNI_logo.svg/1280px-BNI_logo.svg.png"
                          />
                        </div>
                      </div>

                      <dl class="ant-deflist ant-deflist--small">
                        <dt class="ant-deflist__label cr-black fw-400">Nomor Rekening</dt>
                        <dd class="ant-deflist__value text-ellipsis fw-400 cr-black">
                          <span>085213247455</span>
                        </dd>
                        <dt class="ant-deflist__label cr-black fw-400">Nama Penerima</dt>
                        <dd class="ant-deflist__value text-ellipsis cr-black fw-400">
                          <span>PT. ATTAUBAH TRAVEL AMANAH, KCP Ratulangi</span>
                        </dd>
                      </dl>
                    </div>
                  </a-skeleton>
                </a-list-item>
                <a-list-item v-if="value === 3">
                  <a-skeleton :loading="loading" active>
                    <div class="b-shadow b-radius b-solid p-24 w-100">
                      <div class="d-flex align-items-center mb-8">
                        <div class="fs-15 fw-500">Bank Central Asia (BCA)</div>
                        <div class="ml-auto">
                          <img
                            :style="{maxWidth: '100%', height: '18px'}"
                            src="https://upload.wikimedia.org/wikipedia/id/thumb/e/e0/BCA_logo.svg/1280px-BCA_logo.svg.png"
                          />
                        </div>
                      </div>

                      <dl class="ant-deflist ant-deflist--small">
                        <dt class="ant-deflist__label cr-black fw-400">Nomor Rekening</dt>
                        <dd class="ant-deflist__value text-ellipsis fw-400 cr-black">
                          <span>085213247455</span>
                        </dd>
                        <dt class="ant-deflist__label cr-black fw-400">Nama Penerima</dt>
                        <dd class="ant-deflist__value text-ellipsis cr-black fw-400">
                          <span>PT. ATTAUBAH TRAVEL AMANAH, KCP Ratulangi</span>
                        </dd>
                      </dl>
                    </div>
                  </a-skeleton>
                </a-list-item>
                <a-list-item v-if="value === 4">
                  <a-skeleton :loading="loading" active>
                    <div class="b-shadow b-radius b-solid p-24 w-100">
                      <div class="d-flex align-items-center mb-8">
                        <div class="fs-15 fw-500">Bank Mandiri</div>
                        <div class="ml-auto">
                          <img
                            :style="{maxWidth: '100%', height: '18px'}"
                            src="https://upload.wikimedia.org/wikipedia/id/thumb/f/fa/Bank_Mandiri_logo.svg/1280px-Bank_Mandiri_logo.svg.png"
                          />
                        </div>
                      </div>

                      <dl class="ant-deflist ant-deflist--small">
                        <dt class="ant-deflist__label cr-black fw-400">Nomor Rekening</dt>
                        <dd class="ant-deflist__value text-ellipsis fw-400 cr-black">
                          <span>085213247455</span>
                        </dd>
                        <dt class="ant-deflist__label cr-black fw-400">Nama Penerima</dt>
                        <dd class="ant-deflist__value text-ellipsis cr-black fw-400">
                          <span>PT. ATTAUBAH TRAVEL AMANAH, KCP Ratulangi</span>
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
      title: "Konfirmasi Pembayaran - Haloatta"
    };
  },

  data() {
    return {
      loading: true,
      value: 1
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

  methods: {
    onChange(value) {
      console.log("changed", value);
    },
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
