<template>
  <div>
    <a-card title="Password" class="b-shadow b-radius b-solid">
      <div slot="extra">
        <a-button class="b-shadow b-radius cr-primary" icon="edit" @click="showEditPassword">Edit</a-button>
      </div>
      <a-row :gutter="24" type="flex" justify="space-around" align="middle">
        <a-col :span="4" class="text-right cr-gray fs-14">Password</a-col>
        <a-col :span="20" class="cr-black fs-14">
          <i>Perubahan terakhir 30 april 2019</i>
        </a-col>
      </a-row>
    </a-card>
    <!-- modal collection edit Password form -->
    <a-modal
      :visible="visibleEditPassword"
      title="Edit Password"
      @cancel="closeModal"
      :footer="false"
    >
      <a-form layout="vertical" :form="form" @submit="handleSubmit" hideRequiredMark>
        <a-form-item>
          <a-row :gutter="16" type="flex" justify="space-around" align="middle">
            <a-col :span="6" class="text-right cr-gray">Password Anda</a-col>
            <a-col :span="18">
              <a-input
                v-decorator="['password',
              {
                rules: [{ required: true, message: 'Harus di isi!' }],
              }
            ]"
                type="password"
              />
            </a-col>
          </a-row>
        </a-form-item>

        <a-form-item>
          <a-row :gutter="16" type="flex" justify="space-around" align="middle">
            <a-col :span="6" class="text-right cr-gray">Password Baru</a-col>
            <a-col :span="18">
              <a-input
                v-decorator="[
          'passwordNew',
          {
            rules: [{
              required: true, message: 'Harus di isi!',
            }, {
              validator: validateToNextPassword,
            }],
          }
        ]"
                type="password"
              />
            </a-col>
          </a-row>
        </a-form-item>

        <a-form-item>
          <a-row :gutter="16" type="flex" justify="space-around" align="middle">
            <a-col :span="6" class="text-right cr-gray">Konfirmasi Password Baru</a-col>
            <a-col :span="18">
              <a-input
                v-decorator="[
          'confirmPassword',
          {
            rules: [{
              required: true, message: 'Harus di isi!',
            }, {
              validator: compareToFirstPassword,
            }],
          }
        ]"
                type="password"
                @blur="handleConfirmBlur"
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
      visibleEditPassword: false,
      confirmDirty: false,
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  methods: {
    // set modal
    showEditPassword() {
      this.visibleEditPassword = true;
    },
    closeModal() {
      this.visibleEditPassword = false;
    },
    // set password
    handleConfirmBlur  (e) {
      const value = e.target.value;
      this.confirmDirty = this.confirmDirty || !!value;
    },
    compareToFirstPassword  (rule, value, callback) {
      const form = this.form;
      if (value && value !== form.getFieldValue('password')) {
        callback('Password anda tidak konsisten!');
      } else {
        callback();
      }
    },
    validateToNextPassword  (rule, value, callback) {
      const form = this.form;
      if (value && this.confirmDirty) {
        form.validateFields(['confirmPassword'], { force: true });
      }
      callback();
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