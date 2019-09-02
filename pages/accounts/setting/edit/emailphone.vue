<template>
  <div>
    <a-card title="E-mail dan No. Telepon" class="b-shadow b-radius b-solid mb-24">
      <div slot="extra">
        <a-button class="b-shadow b-radius cr-primary" icon="edit" @click="showEditEmailtelp">Edit</a-button>
      </div>
      <a-row :gutter="24" type="flex" justify="space-around" align="middle">
        <a-col :span="4" class="text-right cr-gray fs-14">Alamat E-mail</a-col>
        <a-col :span="20" class="cr-black fs-14">gustangkd@gmail.com</a-col>
      </a-row>
      <a-divider :style="{ margin: '16px 0' }" />
      <a-row :gutter="24" type="flex" justify="space-around" align="middle">
        <a-col :span="4" class="text-right cr-gray fs-14">No. Telepon</a-col>
        <a-col :span="20" class="cr-black fs-14">085213247455</a-col>
      </a-row>
    </a-card>
    <!-- modal collection edit Emailtelp form -->
    <a-modal
      :visible="visibleEditEmailtelp"
      title="Edit Email dan No. Telepon"
      @cancel="closeModal"
      :footer="false"
    >
      <a-form layout="vertical" :form="form" @submit="handleSubmit" hideRequiredMark>
        <a-form-item>
          <a-row :gutter="16" type="flex" justify="space-around" align="middle">
            <a-col :span="6" class="text-right cr-gray">Kontak Email</a-col>
            <a-col :span="18">
              <a-input
                v-decorator="['email',
              {
                rules: [{type: 'email', message: 'Maaf, Email anda tidak valid!',}, { required: true, message: 'Harus di isi!' }],
              }
            ]"
                placeholder="example@mail.com"
              />
            </a-col>
          </a-row>
        </a-form-item>

        <a-form-item>
          <a-row :gutter="16" type="flex" justify="space-around" align="middle">
            <a-col :span="6" class="text-right cr-gray">No. Telepon</a-col>
            <a-col :span="18">
              <a-input
                v-decorator="[
              'telepon',
              {
                rules: [{ required: true, message: 'Harus di isi!' }],
              }
            ]"
                placeholder="08123456789"
              />
            </a-col>
          </a-row>
        </a-form-item>

        <a-divider></a-divider>
        <a-row :gutter="16" type="flex" justify="end" align="middle">
          <a-col :span="12">
            <a-button type="primary" class="b-shadow b-radius" html-type="submit" block>Simpan Perubahan</a-button>
          </a-col>
        </a-row>
      </a-form>
    </a-modal>
    <!-- end -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      visibleEditEmailtelp: false
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  methods: {
    // set modal
    showEditEmailtelp() {
      this.visibleEditEmailtelp = true;
    },
    closeModal() {
      this.visibleEditEmailtelp = false;
    },
    // set form submit
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log(values);
        }
      });
    }
  }
};
</script>