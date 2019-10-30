<template>
  <div>
    <div class="p-24" v-if="!dataBank.length">
      <div class="text-center fs-14 cr-gray">Bank anda belum terdaftar</div>
      <div class="text-center mt-8">
        <a-button
                class="b-shadow b-radius cr-primary"
                icon="plus"
                @click="showAddBank"
        >Tambah Alamat</a-button>
      </div>
    </div>
    <a-card title="Data Rekening Bank" class="b-shadow b-radius b-solid"  v-if="dataBank.length">
      <div slot="extra">
        <a-button class="b-shadow b-radius cr-primary" icon="plus" @click="showAddBank">Tambah</a-button>
      </div>
      <a-table :columns="columns" :dataSource="dataBank" :pagination="false">
        <template slot="action" slot-scope="text, record">
          <a-popconfirm
            v-if="dataBank.length"
            title="Sure to delete?"
            @confirm="() => onDelete(record.key)"
          >
            <a href="javascript:;">Hapus</a>
          </a-popconfirm>
        </template>
      </a-table>
    </a-card>
    <!-- modal collection add Bank -->
    <a-modal
      :visible="visibleAddBank"
      title="Tambah Data Rekening Bank"
      @cancel="closeModal"
      :footer="false"
    >
      <a-form layout="vertical" :form="form" @submit="handleSubmit" hideRequiredMark>
        <a-form-item>
          <a-row :gutter="16" type="flex" justify="space-around" align="middle">
            <a-col :span="6" class="text-right cr-gray">Bank</a-col>
            <a-col :span="18">
              <a-select placeholder="Pilih Bank" v-decorator="['bank',{rules: [{ required: true, message: 'Harus di isi!' }],}]">
                <a-select-option value="Mandiri">Mandiri</a-select-option>
              </a-select>
            </a-col>
          </a-row>
        </a-form-item>

        <a-form-item>
          <a-row :gutter="16" type="flex" justify="space-around" align="middle">
            <a-col :span="6" class="text-right cr-gray">Atas Nama</a-col>
            <a-col :span="18">
              <a-input placeholder="" v-decorator="['name',{rules: [{ required: true, message: 'Harus di isi!' }],}]" />
            </a-col>
          </a-row>
        </a-form-item>

        <a-form-item>
          <a-row :gutter="16" type="flex" justify="space-around" align="middle">
            <a-col :span="6" class="text-right cr-gray">KCP</a-col>
            <a-col :span="18">
              <a-input placeholder="Contoh : Makassar" v-decorator="['kantor',{rules: [{ required: true, message: 'Harus di isi!' }],}]" />
            </a-col>
          </a-row>
        </a-form-item>

        <a-form-item>
          <a-row :gutter="16" type="flex" justify="space-around" align="middle">
            <a-col :span="6" class="text-right cr-gray">Nomor Rekening</a-col>
            <a-col :span="18">
              <a-input placeholder="" v-decorator="['number_rekening',{rules: [{ required: true, message: 'Harus di isi!' }],}]" />
            </a-col>
          </a-row>
        </a-form-item>

        <a-divider></a-divider>
        <a-row :gutter="16" type="flex" justify="end" align="middle">
          <a-col :span="12">
            <a-button type="primary" class="b-shadow b-radius" html-type="submit" block>Simpan</a-button>
          </a-col>
        </a-row>
      </a-form>
    </a-modal>
    <!-- end -->
  </div>
</template>
<script>
const columns = [
  { title: "Kode", dataIndex: "code", key: "code" },
  { title: "Nama Bank", dataIndex: "bank", key: "bank" },
  { title: "Atas Nama", dataIndex: "name", key: "name" },
  { title: "Nomor Rekening", dataIndex: "number", key: "number" },
  {
    title: "Tindakan",
    key: "operation",
    fixed: "right",
    width: 100,
    scopedSlots: { customRender: "action" }
  }
];
const dataBank = [];
export default {
  data() {
    return {
      dataBank,
      columns,
      visibleAddBank: false
    };
  },
  props : {
      bank : Array
  },
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  created(){
    this.dataBank = this.bank.map(val => {
      return {
        key : val.id,
        code : val.kode_bank,
        name : val.atas_nama,
        bank : val.nama_bank,
        number : val.no_rekening
      }
    })
  },
  methods: {
    // set modal
    showAddBank() {
      this.visibleAddBank = true;
    },
    closeModal() {
      this.visibleAddBank = false;
    },
    // set delete table
    onDelete (key) {
      const dataBank = [...this.dataBank]
      this.dataBank = dataBank.filter(item => item.key !== key)
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