<template>
  <a-layout :style="{ maxWidth: '1200px', margin: '0 auto' }">
    <a-layout-sider :style="{ overflow: 'auto', height: '100vh', position: 'fixed'}" width="280">
      <a-card class="ant-card--steps-proggress" :bordered="false">
        <sider-steps :active="active" />

        <div class="ant-card--footer">
          <a-button size="large" block @click="nextSteps">Lanjutkan</a-button>
        </div>
      </a-card>
    </a-layout-sider>
    <a-layout :style="{ marginLeft: '280px', padding: '24px' }">
      <a-layout-content class="ant-layout-content--steps">
        <a-row type="flex" justify="space-between" align="middle" :gutter="24">
          <a-col :span="24">
            <div class="fs-20 fw-500 cr-black f-default mb-16">
              Bagaimana Mengatur Margin
              <br />Penjualan Paket Umrah Saya ?
            </div>
            <div class="fs-14 fw-400 cr-black mb-8">
              Berikut cara menentukan margin dan
              harga jual paket umrah anda
            </div>
            <div class="fs-14 fw-400 cr-black mb-8">
              Pengaturan harga quad room, triple
              room dan double room sesuai dengan
              margin yang anda inginkan, sehingga
              anda dapat bersaing harga dengan
              para umaroh diarea anda.
              Dengan menentukan besaran harga
              margin untuk quad room maka secara
              otomatis harga triple dan double room
              akan dikalkulasi dengan otomatis
            </div>
          </a-col>
        </a-row>
        <div class="fs-20 fw-500 cr-black mb-16 mt-16">Pengaturan Margin</div>
        <a-form layout="vertical" :form="form" @submit="handleSubmit" hideRequiredMark>
          <a-row :gutter="16" type="flex" justify="space-between" align="bottom">
            <a-col :span="12">
              <a-form-item label="Harga Dasar Umrah (Rp)" has-feedback>
                <a-input-number
                  :formatter="value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
                  :parser="value => value.replace(/\$\s?|(,*)/g, '')"
                  :defaultValue="hargaDasar"
                  :min="20000000"
                  @change="onChange"
                  size="large"
                  style="width: 100%"
                  disabled
                />
              </a-form-item>
            </a-col>

            <a-col :span="12">
              <a-form-item has-feedback>
                <a-button
                  class="ant-btn--outline-action"
                  size="large"
                  block
                  @click="showPreview"
                >Informasi Harga Dasar</a-button>
              </a-form-item>
            </a-col>
          </a-row>

          <!-- show modal preview -->
          <a-modal
            v-model="visible"
            title
            :footer="false"
            style="top: 0;paddingBottom: 0"
            wrapClassName="ant-modal--preview"
          >
            <previewPackage />
          </a-modal>
          <!-- end -->

          <a-row :gutter="16" type="flex" justify="space-between" align="bottom">
            <a-col :span="12">
              <a-form-item label="Tentukan Margin" has-feedback help="Masukkan Jumlah Margin">
                <a-input-number
                  :formatter="value => `${value}%`"
                  :parser="value => value.replace('%', '')"
                  :defaultValue="marginSet"
                  :min="0"
                  :max="25"
                  @change="onChange"
                  size="large"
                  style="width: 100%"
                />
              </a-form-item>
            </a-col>

            <a-col :span="12">
              <a-form-item has-feedback help="Margin Dalam Rupiah (Rp)">
                <a-input-number
                  :formatter="value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
                  :parser="value => value.replace(/\$\s?|(,*)/g, '')"
                  :defaultValue="marginPrice"
                  @change="onChange"
                  size="large"
                  style="width: 100%"
                  disabled
                />
              </a-form-item>
            </a-col>
          </a-row>

          <a-divider />

          <div class="fs-18 fw-500 cr-black mb-8">Harga Jual</div>

          <a-row :gutter="16" class="mb-16">
            <a-col :span="8">
              <a-card class="b-radius p-16">
                <div class="fs-14 fw-400 cr-black text-uppercase">Quad Room</div>
                <div class="fs-22 fw-500 cr-black">Rp 22.000.000</div>
              </a-card>
            </a-col>

            <a-col :span="8">
              <a-card class="b-radius p-16">
                <div class="fs-14 fw-400 cr-black text-uppercase">Triple Room</div>
                <div class="fs-22 fw-500 cr-black">Rp 22.800.000</div>
              </a-card>
            </a-col>

            <a-col :span="8">
              <a-card class="b-radius p-16">
                <div class="fs-14 fw-400 cr-black text-uppercase">Double Room</div>
                <div class="fs-22 fw-500 cr-black">Rp 24.400.000</div>
              </a-card>
            </a-col>
          </a-row>
          <a-divider />
          <div class="fs-14 fw-400 cr-gray text-uppercase mb-8">Keterangan</div>
          <ul class="pl-16">
            <li class="fs-14 fw-400 cr-black mb-4">
              Harga jual Quad Room atau Sekamar Berempat adalah
              Harga Dasar + Margin
            </li>
            <li class="fs-14 fw-400 cr-black mb-4">
              Harga jual Triple Room atau Sekamar Bertiga adalah
              Harga Quad Room + 4%
            </li>
            <li class="fs-14 fw-400 cr-black mb-4">
              Harga jual Triple Room atau Sekamar Berdua adalah
              Harga Quad Room + 12%
            </li>
          </ul>
        </a-form>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import siderSteps from "~/pages/create/steps/sider.vue";
import previewPackage from "~/pages/create/steps/preview/modal-price.vue";
export default {
  layout: "application",
  name: "setMargin",
  head() {
    return {
      title: "Pengaturan Margin - Buat Paket Umrah | Haloatta"
    };
  },
  data() {
    return {
      hargaDasar: 20000000,
      marginPrice: 2000000,
      marginSet: 10,
      active: 6,
      visible: false
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this);
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
    showPreview() {
      this.visible = true;
    },
    nextSteps() {
      this.$router.push("/create/steps/package-setting");
    }
  },
  components: {
    siderSteps,
    previewPackage
  }
};
</script>
