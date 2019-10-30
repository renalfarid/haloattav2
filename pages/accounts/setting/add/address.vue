<template>
  <div>
    <div class="p-24" v-if="!dataAddress.length">
      <div class="text-center fs-14 cr-gray">Alamat anda belum terdaftar</div>
      <div class="text-center mt-8">
        <a-button
          class="b-shadow b-radius cr-primary"
          icon="plus"
          @click="showEditAddress"
        >Tambah Alamat</a-button>
      </div>
    </div>
    <a-card title="Data Alamat" class="b-shadow b-radius b-solid" v-if="dataAddress.length">
      <div slot="extra">
        <a-button class="b-shadow b-radius cr-primary" icon="plus" @click="showEditAddress">Tambah</a-button>
      </div>
      <a-table :columns="columns" :dataSource="dataAddress" :pagination="false">
        <template slot="action" slot-scope="text, record">
          <a-popconfirm
                  v-if="dataAddress.length"
                  title="Sure to delete?"
                  @confirm="() => onDelete(record.key)"
          >
            <a href="javascript:;">Hapus</a>
          </a-popconfirm>
        </template>
      </a-table>
    </a-card>
    <!-- modal collection edit Address form -->
    <a-modal :visible="visibleEditAddress" title="Alamat" @cancel="closeModal" :footer="false">
      <a-form layout="vertical" :form="form" @submit="handleSubmit" hideRequiredMark>
        <a-form-item>
          <a-row :gutter="16" type="flex" justify="space-around" align="middle">
            <a-col :span="6" class="text-right cr-gray">Provinsi</a-col>
            <a-col :span="18">
              <a-select
                style="width: 100%"
                v-decorator="[
              'province',
              {
                initialValue: [],
                rules: [{ required: true, message: 'Harus di isi!' }],
              }
            ]"
                showSearch
                placeholder="Pilih Provinsi"
              >
                <a-select-option v-for="province in provinceData" :key="province">{{province}}</a-select-option>
              </a-select>
            </a-col>
          </a-row>
        </a-form-item>

        <a-form-item>
          <a-row :gutter="16" type="flex" justify="space-around" align="middle">
            <a-col :span="6" class="text-right cr-gray">Kabupaten/Kota</a-col>
            <a-col :span="18">
              <a-select
                style="width: 100%"
                v-decorator="[
              'city',
              {
                initialValue: [],
                rules: [{ required: true, message: 'Harus di isi!' }],
              }
            ]"
                placeholder="Pilih Kabupaten/Kota"
                showSearch
              >
                <a-select-option v-for="city in cityData" :key="city">{{city}}</a-select-option>
              </a-select>
            </a-col>
          </a-row>
        </a-form-item>

        <a-form-item>
          <a-row :gutter="16" type="flex" justify="space-around" align="middle">
            <a-col :span="6" class="text-right cr-gray">Kecamatan</a-col>
            <a-col :span="18">
              <a-select
                style="width: 100%"
                v-decorator="[
              'district',
              {
                initialValue: [],
                rules: [{ required: true, message: 'Harus di isi!' }],
              }
            ]"
                placeholder="Pilih Kecamatan"
                showSearch
              >
                <a-select-option v-for="district in districtData" :key="district">{{district}}</a-select-option>
              </a-select>
            </a-col>
          </a-row>
        </a-form-item>

        <a-form-item>
          <a-row :gutter="16" type="flex" justify="space-around" align="middle">
            <a-col :span="6" class="text-right cr-gray">Kode pos</a-col>
            <a-col :span="18">
              <a-select
                style="width: 100%"
                v-decorator="[
              'postalcode',
              {
                initialValue: [],
                rules: [{ required: true, message: 'Harus di isi!' }],
              }
            ]"
                placeholder="Pilih Kode pos"
                showSearch
              >
                <a-select-option
                  v-for="postalcode in postalcodeData"
                  :key="postalcode"
                >{{postalcode}}</a-select-option>
              </a-select>
            </a-col>
          </a-row>
        </a-form-item>

        <a-form-item>
          <a-row :gutter="16" type="flex" justify="space-around" align="middle">
            <a-col :span="6" class="text-right cr-gray">Alamat Lengkap</a-col>
            <a-col :span="18">
              <a-textarea
                v-decorator="[
              'address',
              {
                rules: [{ required: true, message: 'Harus di isi!' }],
              }
            ]"
                placeholder="Alamat Lengkap"
                :rows="4"
              />
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
const provinceData = ["Sulawesi Selatan"];
const cityData = ["Makassar"];
const districtData = ["Tamalanrea"];
const postalcodeData = ["92294"];
const columns = [
  { title: "Provinsi", dataIndex: "provinsi", key: "provinsi" },
  { title: "Kota", dataIndex: "kota", key: "kota" },
  { title: "Kecamatan", dataIndex: "kecamatan", key: "kecamatan" },
  { title: "Kode POS", dataIndex: "pos", key: "pos" },
  {
    title: "Tindakan",
    key: "operation",
    fixed: "right",
    width: 100,
    scopedSlots: { customRender: "action" }
  }
];
const dataAddress = [];
export default {
  data() {
    return {
      visibleEditAddress: false,
      provinceData,
      cityData,
      districtData,
      postalcodeData,
      dataAddress,
      columns
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  props : {
    alamat : Array
  },
  created(){
    console.log('alamat',this.alamat);
    this.dataAddress = this.alamat.map(val => {
      return {
        key : val.id,
        provinsi : val.id_provinsi,
        kota : val.id_kabkota,
        kecamatan : val.id_kecamatan,
        pos : val.kode_pos,
      }
    })
  },
  methods: {
    // set modal
    showEditAddress() {
      this.visibleEditAddress = true;
    },
    closeModal() {
      this.visibleEditAddress = false;
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