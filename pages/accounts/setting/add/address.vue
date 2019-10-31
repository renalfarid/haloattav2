<template>
    <div>
        <div class="p-24" v-if="!dataAddress.length">
            <div class="text-center fs-14 cr-gray">Alamat anda belum terdaftar</div>
            <div class="text-center mt-8">
                <a-button
                        class="b-shadow b-radius cr-primary"
                        icon="plus"
                        @click="showEditAddress"
                >Tambah Alamat
                </a-button>
            </div>
        </div>
        <a-card title="Data Alamat" class="b-shadow b-radius b-solid" v-if="dataAddress.length">
            <div slot="extra">
                <a-button class="b-shadow b-radius cr-primary" icon="plus" @click="showEditAddress">Ubah</a-button>
            </div>
            <a-table :columns="columns" :dataSource="dataAddress" :pagination="false">
            </a-table>
        </a-card>
        <!-- modal collection edit Address form -->
        <a-modal :visible="visibleEditAddress" title="Alamat" @cancel="closeModal" :footer="false">
            <a-form layout="vertical" :form="form" @submit="handleSubmit" hideRequiredMark>
                <a-form-item>
                    <a-row :gutter="16" type="flex" justify="space-around" align="middle">
                        <a-col :span="6" class="text-right cr-gray">Provinsi</a-col>
                        <a-col :span="18">
                            <a-select :disabled="provinceData.length ? false : true"
                                      @change="getKabKota"
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
                                <a-select-option v-for="province in provinceData" :key="province.province_id"
                                                 :value="province.province_id">{{province.province}}
                                </a-select-option>
                            </a-select>
                        </a-col>
                    </a-row>
                </a-form-item>

                <a-form-item>
                    <a-row :gutter="16" type="flex" justify="space-around" align="middle">
                        <a-col :span="6" class="text-right cr-gray">Kabupaten/Kota</a-col>
                        <a-col :span="18">
                            <a-select :disabled="cityData.length ? false : true"
                                      @change="getKecamatan"
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
                                <a-select-option v-for="city in cityData" :key="city.city_id" :value="city.city_id">
                                    {{city.city_name}}
                                </a-select-option>
                            </a-select>
                        </a-col>
                    </a-row>
                </a-form-item>

                <a-form-item>
                    <a-row :gutter="16" type="flex" justify="space-around" align="middle">
                        <a-col :span="6" class="text-right cr-gray">Kecamatan</a-col>
                        <a-col :span="18">
                            <a-select :disabled="districtData.length ? false : true"
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
                                <a-select-option v-for="district in districtData" :key="district.subdistrict_id"
                                                 :value="district.subdistrict_id">{{district.subdistrict_name}}
                                </a-select-option>
                            </a-select>
                        </a-col>
                    </a-row>
                </a-form-item>

                <a-form-item>
                    <a-row :gutter="16" type="flex" justify="space-around" align="middle">
                        <a-col :span="6" class="text-right cr-gray">Kode pos</a-col>
                        <a-col :span="18">
                            <a-input
                                    v-decorator="['postal',
              {
                initialValue : alamat.length ? alamat[0].kode_pos : '',
                rules: [{ required: true, message: 'Harus di isi!' }],
              }
            ]"
                                    placeholder="Kode Pos"
                            />
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
                initialValue : alamat.length ? alamat[0].alamat : '',
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
    import axios from "axios";

    const Cookie = process.client ? require("js-cookie") : undefined;
    const provinceData = [];
    const cityData = [];
    const districtData = [];
    const columns = [
        {title: "Provinsi", dataIndex: "provinsi", key: "provinsi"},
        {title: "Kota", dataIndex: "kota", key: "kota"},
        {title: "Kecamatan", dataIndex: "kecamatan", key: "kecamatan"},
        {title: "Kode POS", dataIndex: "pos", key: "pos"},
        {title: "Alamat", dataIndex: "alamat", key: "alamat"},
    ];
    const dataAddress = [];
    export default {
        data() {
            return {
                visibleEditAddress: false,
                provinceData,
                cityData,
                districtData,
                dataAddress,
                columns,
            };
        },
        beforeCreate() {
            this.form = this.$form.createForm(this);
        },
        props: {
            alamat: Array
        },
        created() {
            this.dataAddress = this.alamat.map(val => {
                return {
                    key: val.id,
                    provinsi: val.provinsi,
                    kota: val.kabupaten,
                    kecamatan: val.kecamatan,
                    pos: val.kode_pos,
                    alamat: val.alamat,
                }
            });
            this.getProvince();
        },
        watch : {
            alamat : function (newVal, oldVal) {
              this.dataAddress = newVal.map(val => {
                return {
                  key: val.id,
                  provinsi: val.provinsi,
                  kota: val.kabupaten,
                  kecamatan: val.kecamatan,
                  pos: val.kode_pos,
                  alamat: val.alamat,
                }
              });
            }
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
                        const token = Cookie.get('auth');
                        const config = {
                            headers: {
                                Authorization: "Bearer " + token
                            }
                        };
                        const edit_values = {
                          id_provinsi : values.province,
                          id_kabkot : values.city,
                          id_kecamatan : values.district,
                          kode_pos : values.postal,
                          alamat : values.address,
                        };
                        axios
                            .post(process.env.baseUrl + 'user/update-address',edit_values,config)
                                .then(res => {
                                  this.visibleEditAddress = false;
                                  this.$emit('saved',true);
                                })
                    }
                });
            },
            getProvince() {
                const token = Cookie.get('auth');
                const config = {
                    headers: {
                        Authorization: "Bearer " + token
                    }
                };
                axios.get(process.env.baseUrl + 'option/provinsi', config)
                    .then(response => {
                        this.provinceData = response.data.data;
                    })
            },
            getKabKota(id_province) {
                const token = Cookie.get('auth');
                const config = {
                    headers: {
                        Authorization: "Bearer " + token
                    }
                };
                this.cityData = [];
                this.districtData = [];
                axios.get(process.env.baseUrl + 'option/kabupaten?province_id=' + id_province, config)
                    .then(response => {
                        this.cityData = response.data.data;
                    })
            },
            getKecamatan(id_kabupaten) {
                const token = Cookie.get('auth');
                const config = {
                    headers: {
                        Authorization: "Bearer " + token
                    }
                };
                this.districtData = [];
                axios.get(process.env.baseUrl + 'option/kecamatan?city_id=' + id_kabupaten, config)
                    .then(response => {
                        this.districtData = response.data.data;
                    })
            }
        }
    };
</script>