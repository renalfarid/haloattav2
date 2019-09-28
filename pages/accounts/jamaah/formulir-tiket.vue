<template>
  <div class="ant-layout--accounts-jamaah">
    <div class="mb-16">
      <nuxt-link to="/accounts/departure/detail" class="fs-14 fw-400 cr-gray">
        <a-icon type="left" class="mr-8" />Kembali
      </nuxt-link>
    </div>

    <a-card :bordered="false" class="b-shadow b-solid b-radius mb-16">
      <div slot="title">Detail Pemesan</div>
      <div slot="extra" class="fs-16 fw-500 cr-black">No. Transaksi PUHA12345678</div>
      <a-row :gutter="8">
        <a-col :span="12">
          <div class="d-flex align-items-center">
            <div class="mr-8">
              <a-avatar style="backgroundColor: #0FACF3" icon="user" />
            </div>
            <div>
              <div class="fs-12 fw-400 cr-gray text-uppercase">Nama Pemesan</div>
              <div class="fs-15 fw-500 cr-black f-default">Jordi Alba Mustafa</div>
            </div>
          </div>
        </a-col>
        <a-col :span="4">
          <div class="fs-12 fw-400 cr-gray text-uppercase">Email Pemesan</div>
          <div class="cr-black fs-14 fw-500 f-default">jordialba@gmail.com</div>
        </a-col>
        <a-col :span="4">
          <div class="fs-12 fw-400 cr-gray text-uppercase">No. Telepon</div>
          <div class="cr-black fs-14 fw-500 f-default">08123456789</div>
        </a-col>
        <a-col :span="4" class="text-right">
          <div class="fs-12 fw-400 cr-gray text-uppercase">Tanggal Pemesanan</div>
          <div class="cr-black fs-14 fw-500 f-default">Senin, 11 Juli 2019</div>
        </a-col>
      </a-row>
    </a-card>

    <div class="fs-16 fw-500 cr-black mb-16">Status Berkas</div>
    <a-card :bordered="false" class="b-shadow b-solid b-radius mb-16">
      <a-steps :current="0">
        <a-step title="Formulir">
          <span slot="description">
            <p class="fs-14 f-default">Pengisian Formulir Keberangkatan</p>
          </span>
        </a-step>
        <a-step title="Kode Penerbangan">
          <span slot="description">
            <p class="fs-14 f-default">Verifikasi Kode Penerbangan</p>
          </span>
        </a-step>
        <a-step title="Pemberangkatan">
          <span slot="description">
            <p class="fs-14 f-default">Tanggal Keberangkatan 10 September 2019</p>
          </span>
        </a-step>
      </a-steps>
    </a-card>

    <div class="fs-16 fw-500 cr-black mb-16">Formulir Keberangkatan</div>

    <a-form layout="vertical" :form="form" hideRequiredMark>
      <a-card :bordered="false" class="b-shadow b-solid b-radius">
        <a-row :gutter="16">
          <a-col :span="6">
            <a-form-item label="Title" hasFeedback>
              <a-select
                v-decorator="['title',{initialValue: 'Tn.', rules: [{ required: true, message: 'Harus di isi!' }]}]"
                placeholder="Pilih Title"
                size="large"
                style="width: 100%"
              >
                <a-select-option value="Tn.">Tn.</a-select-option>
                <a-select-option value="Ny.">Ny.</a-select-option>
                <a-select-option value="Nn.">nn.</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>

          <a-col :span="18">
            <a-form-item
              label="Nama Depan & Tengah (jika ada)"
              help="(tanpa gelar dan tanda baca)"
              hasFeedback
            >
              <a-input
                v-decorator="['firstName',{rules: [{ required: true, message: 'Harus di isi!' }]}]"
                size="large"
              />
            </a-form-item>
          </a-col>
        </a-row>

        <a-row :gutter="16">
          <a-col :span="24">
            <a-form-item
              label="Nama Belakang / Nama Keluarga"
              help="(tanpa gelar dan tanda baca)"
              hasFeedback
            >
              <a-input
                v-decorator="['lastName',{rules: [{ required: true, message: 'Harus di isi!' }]}]"
                size="large"
              />
            </a-form-item>
          </a-col>
        </a-row>

        <a-row :gutter="16">
          <a-col :span="12">
            <a-form-item label="Email" hasFeedback>
              <a-input
                v-decorator="['email',{rules: [{type: 'email', message: 'Email tidak valid!',},{ required: true, message: 'Harus di isi!' }]}]"
                size="large"
              />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="Tanggal Lahir" hasFeedback>
              <a-date-picker
                v-decorator="['date',{rules: [{ required: true, message: 'Harus di isi!' }]}]"
                placeholder="Pilih Tanggal Lahir Anda"
                size="large"
                style="width: 100%"
              />
            </a-form-item>
          </a-col>
        </a-row>

        <a-divider class="ant-divider-title-left" orientation="left" :style="{ marginTop: '0' }" />

        <a-form-item>
          <a-button size="large" class="b-shadow b-radius mr-8">
            <nuxt-link to="/accounts/departure/detail">Kembali</nuxt-link>
          </a-button>
          <a-button
            type="primary"
            @click="handleSubmit"
            size="large"
            class="b-shadow b-radius"
          >Kirim Formulir</a-button>
        </a-form-item>
      </a-card>
    </a-form>
  </div>
</template>
<script>
import moment from "moment";
export default {
  layout: "accounts",
  name: "mitraFormulirTiket",
  head() {
    return {
      title: "Formulir Tiket - Kembangkan Bisnis Umrah Anda | Haloatta"
    };
  },

  data() {
    return {
      form: this.$form.createForm(this)
    };
  },

  methods: {
    moment,
    disabledDate(current) {
      return current && current < moment().endOf("day");
    },
    handleSubmit() {
      this.form.validateFields(err => {
        if (!err) {
          console.info("success");
        }
      });
    }
  }
};
</script>