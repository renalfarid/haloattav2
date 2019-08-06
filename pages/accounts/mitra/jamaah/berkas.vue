<template>
  <div class="ant-layout--accounts-jamaah">
    <div class="mb-16">
      <nuxt-link to="/accounts/mitra/management/seat/pax-list" class="fs-14 fw-400 cr-gray">
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

    <div class="fs-16 fw-500 cr-black mb-16">Status Berkas Jamaah</div>
    <a-card :bordered="false" class="b-shadow b-solid b-radius mb-16">
      <a-steps :current="0">
        <a-step title="Pemberkasan">
          <span slot="description">
            <p class="fs-14 f-default">Pengumpulan Kelengkapan Berkas</p>
          </span>
        </a-step>
        <a-step title="Registrasi">
          <span slot="description">
            <p class="fs-14 f-default">Nomor Porsi Registrasi Siskopatuh</p>
          </span>
        </a-step>
        <a-step title="Manifest">
          <span slot="description">
            <p class="fs-14 f-default">Pengaturan Room List, Tiket, Visa, Mova, Perlengkapan, dll</p>
          </span>
        </a-step>
        <a-step title="Pemberangkatan">
          <span slot="description">
            <p class="fs-14 f-default">Tanggal Pemberangkatan 10 September 2019</p>
          </span>
        </a-step>
      </a-steps>
    </a-card>

    <div class="fs-16 fw-500 cr-black mb-16">Ringkasan Berkas Jamaah</div>
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
        </a-row>

        <a-row :gutter="16">
          <a-col :span="12">
            <a-form-item
              label="Nama Depan & Tengah (jika ada)"
              help="(tanpa gelar dan tanda baca)"
              hasFeedback
            >
              <a-input
                v-decorator="['firstName',{initialValue: 'Gustang Haris', rules: [{ required: true, message: 'Harus di isi!' }]}]"
                size="large"
              />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item
              label="Nama Belakang / Nama Keluarga"
              help="(tanpa gelar dan tanda baca)"
              hasFeedback
            >
              <a-input
                v-decorator="['lastName',{initialValue: 'Mustafa', rules: [{ required: true, message: 'Harus di isi!' }]}]"
                size="large"
              />
            </a-form-item>
          </a-col>
        </a-row>

        <a-row :gutter="16">
          <a-col :span="12">
            <a-form-item label="Tanggal Lahir" hasFeedback>
              <a-date-picker
                format="YYYY-MM-DD"
                v-decorator="['date',{initialValue: moment('1993/04/30'), rules: [{ required: true, message: 'Harus di isi!' }]}]"
                placeholder="Pilih Tanggal Lahir Anda"
                size="large"
                style="width: 100%"
              />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="Kewarganegaraan" hasFeedback>
              <a-select
                v-decorator="['country',{initialValue: 'Indonesia', rules: [{ required: true, message: 'Harus di isi!' }]}]"
                placeholder="Pilih Kewarganegaraan"
                size="large"
              >
                <a-select-option value="Indonesia">Indonesia</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
        </a-row>

        <a-divider class="ant-divider-title-left" orientation="left" :style="{ marginTop: '0' }">
          <span class="fs-15 cr-gray">Informasi Paspor Jamaah</span>
        </a-divider>

        <a-row :gutter="16">
          <a-col :span="8">
            <a-form-item label="Nomor Paspor">
              <a-input v-decorator="['nomor_paspor']" size="large" />
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <a-form-item label="Negara Penerbit">
              <a-select
                v-decorator="['country_paspor', {initialValue: 'Indonesia'}]"
                placeholder="Pilih Negara"
                size="large"
              >
                <a-select-option value="Indonesia">Indonesia</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <a-form-item label="Tanggal Habis Berlaku">
              <a-date-picker
                format="YYYY-MM-DD"
                :disabledDate="disabledDate"
                placeholder="Pilih Tanggal"
                size="large"
                style="width: 100%"
              />
            </a-form-item>
          </a-col>
        </a-row>

        <a-divider class="ant-divider-title-left" orientation="left" :style="{ marginTop: '0' }">
          <span class="fs-15 cr-gray">Informasi Alamat Jamaah</span>
        </a-divider>

        <a-row :gutter="16">
          <a-col :span="12">
            <a-form-item label="Provinsi">
              <a-select
                showSearch
                v-decorator="['province', {initialValue: 'Sulawesi Selatan'}]"
                placeholder="Pilih Provinsi"
                size="large"
              >
                <a-select-option value="Sulawesi Selatan">Sulawesi Selatan</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="Kabupaten/Kota">
              <a-select
                showSearch
                v-decorator="['city', {initialValue: 'Makassar'}]"
                placeholder="Pilih Kabupaten/Kota"
                size="large"
              >
                <a-select-option value="Makassar">Makassar</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
        </a-row>

        <a-row :gutter="16">
          <a-col :span="12">
            <a-form-item label="Kecamatan">
              <a-select
                showSearch
                v-decorator="['district', {initialValue: 'Tamalanrea Indah'}]"
                placeholder="Pilih Kecamatan"
                size="large"
              >
                <a-select-option value="Tamalanrea Indah">Tamalanrea Indah</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="Kode Pos">
              <a-select
                showSearch
                v-decorator="['code_pos', {initialValue: '9224'}]"
                placeholder="Pilih Kode Pos"
                size="large"
              >
                <a-select-option value="9224">9224</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
        </a-row>

        <a-row :gutter="16">
          <a-col :span="24">
            <a-form-item label="Alamat Lengkap (Domisili)">
              <a-textarea
                v-decorator="['address', { initialValue: 'Jl. BTP Blok A No 537' }]"
                :rows="4"
              />
            </a-form-item>
          </a-col>
        </a-row>

        <a-divider class="ant-divider-title-left" orientation="left" :style="{ marginTop: '0' }">
          <span class="fs-15 cr-gray">Dokumen Pendukung</span>
        </a-divider>

        <a-row :gutter="16">
          <a-col :span="3">
            <a-form-item label="Photo Jamaah">
              <a-upload
                v-decorator="['photoJamaah',{initialValue: photoJamaah,rules: [{ required: true, message: 'Harus di isi!' }]}]"
                name="photoJamaah"
                listType="picture-card"
                :showUploadList="false"
                action="#"
                :beforeUpload="beforeUpload"
                @change="handleChange"
              >
                <img class="max-width" v-if="photoJamaah" :src="photoJamaah" alt="avatar" />
                <div v-else>
                  <a-icon :type="loading ? 'loading' : 'plus'" />
                  <div class="ant-upload-text">Upload</div>
                </div>
              </a-upload>
            </a-form-item>
          </a-col>

          <a-col :span="3">
            <a-form-item label="Photo Paspor">
              <a-upload
                v-decorator="['photoJamaah',{initialValue: photoPasporJamaah,rules: [{ required: true, message: 'Harus di isi!' }]}]"
                name="photoPasporJamaah"
                listType="picture-card"
                :showUploadList="false"
                action="#"
                :beforeUpload="beforeUpload"
                @change="handleChange"
              >
                <img
                  class="max-width"
                  v-if="photoPasporJamaah"
                  :src="photoPasporJamaah"
                  alt="avatar"
                />
                <div v-else>
                  <a-icon :type="loading ? 'loading' : 'plus'" />
                  <div class="ant-upload-text">Upload</div>
                </div>
              </a-upload>
            </a-form-item>
          </a-col>
        </a-row>

        <!-- <a-divider />

        <a-form-item>
          <a-button size="large" class="b-shadow b-radius mr-8">
            <nuxt-link to="/accounts/mitra/management/seat/pax-list">Kembali</nuxt-link>
          </a-button>
          <a-button
            type="primary"
            @click="handleSubmit"
            size="large"
            class="b-shadow b-radius"
          >Simpan Data Jamaah</a-button>
        </a-form-item>-->
      </a-card>
    </a-form>
  </div>
</template>
<script>
import moment from "moment";
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}
export default {
  layout: "accounts",
  name: "mitraBerkasJamaah",
  head() {
    return {
      title: "Berkas Jamaah - Kembangkan Bisnis Umrah Anda | Haloatta"
    };
  },

  data() {
    return {
      loading: false,
      photoJamaah: "/user/maha_user.jpg",
      photoPasporJamaah: "",
      form: this.$form.createForm(this)
    };
  },

  methods: {
    moment,
    handleChange(info) {
      if (info.file.status === "uploading") {
        this.loading = true;
        return;
      }
      if (info.file.status === "done") {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, photoJamaah => {
          this.photoJamaah = photoJamaah;
          this.loading = false;
        });
        getBase64(info.file.originFileObj, photoPasporJamaah => {
          this.photoPasporJamaah = photoPasporJamaah;
          this.loading = false;
        });
      }
    },
    beforeUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error("Maaf, Ukuran gambar tidak boleh melebihi 2MB!");
      }
      return isLt2M;
    },
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