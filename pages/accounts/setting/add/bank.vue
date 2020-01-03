<template>
    <e-verification v-if="otp" @submitOtp="submitData" :tipe="tipe_otp"></e-verification>
    <div v-else>
        <div class="p-24" v-if="!dataBank.length">
            <div class="text-center fs-14 cr-gray">Bank anda belum terdaftar</div>
            <div class="text-center mt-8">
                <a-button
                        class="b-shadow b-radius cr-primary"
                        icon="plus"
                        @click="showAddBank"
                >Tambah Bank
                </a-button>
            </div>
        </div>
        <a-card title="Data Rekening Bank" class="b-shadow b-radius b-solid" v-if="dataBank.length">
            <div slot="extra">
                <a-button class="b-shadow b-radius cr-primary" icon="plus" @click="showAddBank">Tambah</a-button>
            </div>
            <a-table :columns="columns" :dataSource="dataBank" :pagination="false">
                <template slot="action" slot-scope="text, record">
                    <a-popconfirm
                            v-if="dataBank.length"
                            title="Sure to delete?"
                            @confirm="() => onDelete(record.code)"
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
                            <a-select placeholder="Pilih Bank"
                                      v-decorator="['bank',{rules: [{ required: true, message: 'Harus di isi!' }],}]">
                                <a-select-option v-for="bank in listBank" :key="bank">{{bank}}</a-select-option>
                            </a-select>
                        </a-col>
                    </a-row>
                </a-form-item>

                <a-form-item>
                    <a-row :gutter="16" type="flex" justify="space-around" align="middle">
                        <a-col :span="6" class="text-right cr-gray">Atas Nama</a-col>
                        <a-col :span="18">
                            <a-input placeholder=""
                                     v-decorator="['name',{rules: [{ required: true, message: 'Harus di isi!' }],}]"/>
                        </a-col>
                    </a-row>
                </a-form-item>

                <a-form-item>
                    <a-row :gutter="16" type="flex" justify="space-around" align="middle">
                        <a-col :span="6" class="text-right cr-gray">KCP</a-col>
                        <a-col :span="18">
                            <a-input placeholder="Contoh : Makassar"
                                     v-decorator="['kantor',{rules: [{ required: true, message: 'Harus di isi!' }],}]"/>
                        </a-col>
                    </a-row>
                </a-form-item>

                <a-form-item>
                    <a-row :gutter="16" type="flex" justify="space-around" align="middle">
                        <a-col :span="6" class="text-right cr-gray">Nomor Rekening</a-col>
                        <a-col :span="18">
                            <a-input placeholder=""
                                     v-decorator="['number_rekening',{rules: [{ required: true, message: 'Harus di isi!' }],}]"/>
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
    import eVerification from "~/pages/accounts/setting/otp.vue";
    const Cookie = process.client ? require("js-cookie") : undefined;
    const columns = [
        {title: "Kode", dataIndex: "code", key: "code"},
        {title: "Nama Bank", dataIndex: "bank", key: "bank"},
        {title: "Atas Nama", dataIndex: "name", key: "name"},
        {title: "Nomor Rekening", dataIndex: "number", key: "number"},
        {
            title: "Tindakan",
            key: "operation",
            fixed: "right",
            width: 100,
            scopedSlots: {customRender: "action"}
        }
    ];
    const dataBank = [];
    const listBank = [
        'BCA', 'MANDIRI', 'MANDIRI SYARIAH', 'BNI', 'BNI SYARIAH', 'BRI', 'BTPN'
    ];
    export default {
        data() {
            return {
                dataBank,
                columns,
                listBank,
                visibleAddBank: false,
                otp : false,
                formValues : {},
                tipe_otp : 'add_bank'
            };
        },
        props: {
            bank: Array
        },
        beforeCreate() {
            this.form = this.$form.createForm(this);
        },
        created() {
            this.dataBank = this.bank.map(val => {
                return {
                    key: val.id,
                    code: val.kode_bank,
                    name: val.atas_nama,
                    bank: val.nama_bank,
                    number: val.no_rekening
                }
            })
        },
        watch: {
            bank: function (newValue, oldValue) {
                this.dataBank = newValue.map(val => {
                    return {
                        key: val.id,
                        code: val.kode_bank,
                        name: val.atas_nama,
                        bank: val.nama_bank,
                        number: val.no_rekening
                    }
                })
            }
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
            onDelete(key) {
                const token = Cookie.get('auth');
                const config = {
                    headers: {
                        Authorization: "Bearer " + token
                    }
                };
                console.log(key);
                axios
                    .post(process.env.baseUrl + 'user/deleted-bank', {
                        kode_bank: key
                    }, config)
                    .then(response => {
                        this.$emit('saved', true);
                    });
                this.dataBank = dataBank.filter(item => item.key !== key)
            },
            // set form submit
            handleSubmit(e) {
                e.preventDefault();
                this.form.validateFields((err, values) => {
                    if (!err) {
                        const token = Cookie.get('auth');
                        const config = {
                            headers: {
                                Authorization: "Bearer " + token
                            }
                        };
                        console.log(values);
                        this.formValues = {
                            no_rekening: values.number_rekening,
                            atas_nama: values.name,
                            cabang: values.kantor,
                            nama_bank: values.bank,
                        };
                        axios
                            .post(process.env.baseUrl + 'otp/createotp',{
                                tipe : this.tipe_otp
                            },config)
                            .then(() => {
                                this.$message.success('Otp Berhasil Dikirim')
                                this.otp = true;
                            })
                            .catch(() => {
                                this.$message.success('Gagal Mengirim Otp')
                            })
                    }
                });
            },
            submitData(otp){
                const token = Cookie.get('auth');
                const config = {
                    headers: {
                        Authorization: "Bearer " + token
                    }
                };

                const new_value = this.formValues;
                new_value.otp_code = otp;
                axios
                    .post(process.env.baseUrl + 'user/add-bank', new_value, config)
                    .then(response => {
                        if (response.data.status == 200) {
                            this.form.resetFields();
                            this.visibleAddBank = false;
                            this.$message.success('Bank Berhasil Ditambahkan');
                            this.$emit('saved', true);
                            this.otp = false;
                        } else {
                            this.$message.error(response.data.msg);
                        }
                    })
                    .catch(() => {
                        this.$message.success('Otp salah');
                    })
            }
        },
        components :{
            eVerification
        }
    };
</script>