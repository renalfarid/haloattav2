<template>
  <div class="ant-layout--top-up">
    <a-card :bordered="false" class="b-solid b-radius b-shadow">
      <a-row :gutter="32" type="flex" justify="space-around" align="middle">
        <a-col :span="12">
          <div class="fs-30 fw-500 cr-black f-default mb-16">
            Top Up Saldo
            <br>Halo Pay anda
          </div>

          <a-form layout="vertical" :form="form" @submit="handleSubmit" hideRequiredMark>
            <a-form-item label="Nominal Top Up (Rp)" help="Minimal Top Up anda Rp 100.000">
              <a-input-number
                :defaultValue="100000"
                :formatter="value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
                :parser="value => value.replace(/\$\s?|(,*)/g, '')"
                :min="100000"
                style="width: 100%"
                @change="onChange"
                size="large"
              />
            </a-form-item>

            <a-form-item label="Pilih Rekening Tujuan" class="mb-0" has-feedback>
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
                          >
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
                          >
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
                          >
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
                          >
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
              <!-- <a-button
                type="primary"
                size="large"
                html-type="submit"
                class="b-shadow b-radius"
              >Lanjut ke Pembayaran</a-button>-->
              <a-button
                type="primary"
                size="large"
                class="b-shadow b-radius"
                @click="nextConf"
              >Lanjut ke Pembayaran</a-button>
            </a-form-item>
          </a-form>
        </a-col>
        <a-col :span="12">
          <img class="max-width" src="/icons/topUp.png">
        </a-col>
      </a-row>
    </a-card>
  </div>
</template>
<script>
export default {
  middleware: "authenticated",
  layout: "accounts",
  name: "topUp",
  head() {
    return {
      title: "Top Up Saldo Halopay- Haloatta"
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
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log();
        }
      });
    },
    onChange(value) {
      console.log("changed", value);
    },
    nextConf() {
      this.$router.push({ path: "/accounts/e-confirm" });
    }
  }
};
</script>
