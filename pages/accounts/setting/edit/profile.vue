<template>
    <e-verification v-if="otp" @submitOtp="submitData" :tipe="tipe_otp"></e-verification>
    <div v-else>
        <a-card title="Informasi Profil" class="b-shadow b-radius b-solid mb-24">
            <div slot="extra">
                <a-button class="b-shadow b-radius cr-primary" icon="edit" @click="showEditProfile">Edit</a-button>
            </div>
            <a-row :gutter="24" type="flex" justify="space-around" align="middle">
                <a-col :span="4" class="text-right cr-gray fs-14">Foto Profil</a-col>
                <a-col :span="20">
                    <a-avatar size="large" :src="profile ? profile.foto : ''"/>
                </a-col>
            </a-row>
            <a-divider :style="{ margin: '16px 0' }"/>
            <a-row :gutter="24" type="flex" justify="space-around" align="middle">
                <a-col :span="4" class="text-right cr-gray fs-14">Nama Depan</a-col>
                <a-col :span="20" class="cr-black fs-14">
                  {{profile ? profile.nama_depan : ''}}
                </a-col>
            </a-row>
            <a-divider :style="{ margin: '16px 0' }"/>
            <a-row :gutter="24" type="flex" justify="space-around" align="middle">
                <a-col :span="4" class="text-right cr-gray fs-14">Nama Belakang</a-col>
                <a-col :span="20" class="cr-black fs-14">
                  {{profile ? profile.nama_belakang : ''}}
                </a-col>
            </a-row>
            <a-divider :style="{ margin: '16px 0' }"/>
            <a-row :gutter="24" type="flex" justify="space-around" align="middle">
                <a-col :span="4" class="text-right cr-gray fs-14">Jenis Kelamin</a-col>
                <a-col :span="20" class="cr-black fs-14">
                  {{profile ? profile.jk == 'L' ? 'Laki-Laki' : 'Perempuan' : ''}}
                </a-col>
            </a-row>
            <a-divider :style="{ margin: '16px 0' }"/>
            <a-row :gutter="24" type="flex" justify="space-around" align="middle">
                <a-col :span="4" class="text-right cr-gray fs-14">Tanggal Lahir</a-col>
                <a-col :span="20" class="cr-black fs-14">{{profile ? profile.tanggal_lahir ? (new Date(profile.tanggal_lahir).toLocaleDateString('id-ID', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                    })) : 'Tanggal Lahir belum di isi' : ''}}</a-col>
            </a-row>
        </a-card>
        <!-- modal collection edit profile form -->
        <a-modal
                :visible="visibleEditProfile"
                title="Edit Informasi Profil"
                @cancel="closeModal"
                :footer="false"
        >
            <a-form layout="vertical" :form="form" @submit="handleSubmit" hideRequiredMark>
                <a-form-item>
                    <a-row :gutter="16" type="flex" justify="space-around" align="middle">
                        <a-col :span="6" class="text-right cr-gray">Foto Profil</a-col>
                        <a-col :span="18">
                            <a-upload
                                    v-decorator="[
              'avatar',
              {
                initialValue: imageUrl
              }
            ]"
                                    action="#"
                                    listType="picture-card"
                                    :showUploadList="false"
                                    :beforeUpload="beforeUpload"
                                    @change="handleChange"
                            >
                                <img v-if="imageUrl" :src="imageUrl" class="max-width" alt="avatar">
                                <div v-else>
                                    <a-icon class="fs-18" :type="loading ? 'loading' : 'plus'"/>
                                    <div class="ant-upload-text fw-400 cr-gray">Upload</div>
                                </div>
                            </a-upload>
                        </a-col>
                    </a-row>
                </a-form-item>

                <a-form-item>
                    <a-row :gutter="16" type="flex" justify="space-around" align="middle">
                        <a-col :span="6" class="text-right cr-gray">Nama Depan</a-col>
                        <a-col :span="18">
                            <a-input
                                    v-decorator="[
              'firstname',
              {
                initialValue: profile ? profile.nama_depan : '',
                rules: [{ required: true, message: 'Harus di isi!' }],
              }
            ]"
                            />
                        </a-col>
                    </a-row>
                </a-form-item>

                <a-form-item>
                    <a-row :gutter="16" type="flex" justify="space-around" align="middle">
                        <a-col :span="6" class="text-right cr-gray">Nama Belakang</a-col>
                        <a-col :span="18">
                            <a-input
                                    v-decorator="[
              'lastname',
              {
                initialValue: profile ? profile.nama_belakang : '',
                rules: [{ required: true, message: 'Harus di isi!' }],
              },
            ]"
                            />
                        </a-col>
                    </a-row>
                </a-form-item>

                <a-form-item>
                    <a-row :gutter="16" type="flex" justify="space-around" align="middle">
                        <a-col :span="6" class="text-right cr-gray">Jenis Kelamin</a-col>
                        <a-col :span="18">
                            <a-radio-group
                                    v-decorator="[
              'jeniskelamin',
              {
                initialValue: profile ? profile.jk : '',
                rules: [{ required: true, message: 'Harus di isi!' }],
              }
            ]"
                            >
                                <a-radio value="L">Laki-Laki</a-radio>
                                <a-radio value="P">Perempuan</a-radio>
                            </a-radio-group>
                        </a-col>
                    </a-row>
                </a-form-item>

                <a-form-item>
                    <a-row :gutter="16" type="flex" justify="space-around" align="middle">
                        <a-col :span="6" class="text-right cr-gray">Tanggal Lahir</a-col>
                        <a-col :span="18">
                            <a-date-picker
                                    placeholder="Pilih Tanggal Lahir Anda"
                                    :format="dateFormat"
                                    v-decorator="[
              'birthday',
              {
                initialValue: profile ? profile.tanggal_lahir ? new moment(profile.tanggal_lahir) : new moment()  : new moment(),
                rules: [{ type: 'object', required: true, message: 'Harus di isi!' }],
              }
            ]"
                                    style="width: 100%"
                            />
                        </a-col>
                    </a-row>
                </a-form-item>

                <a-divider></a-divider>
                <a-row :gutter="16" type="flex" justify="end" align="middle">
                    <a-col :span="12">
                        <a-button
                                type="primary"
                                class="b-shadow b-radius"
                                html-type="submit"
                                block
                        >Simpan Perubahan
                        </a-button>
                    </a-col>
                </a-row>
            </a-form>
        </a-modal>
        <!-- end -->
    </div>
</template>
<script>
    import moment from "moment";
    import axios from "axios";
    import eVerification from "~/pages/accounts/setting/otp.vue";
    const Cookie = process.client ? require("js-cookie") : undefined;

    function getBase64(img, callback) {
        const reader = new FileReader();
        reader.addEventListener("load", () => callback(reader.result));
        reader.readAsDataURL(img);
    }
    export default {
        data() {
            return {
                dateFormat: "YYYY/MM/DD",
                loading: false,
                visibleEditProfile: false,
                imageUrl: "",
                imageUpload : null,
                otp : false,
                tipe_otp : 'change_profile',
                formValues : {}
            };
        },
        components :{
          eVerification
        },
        beforeCreate() {
            this.form = this.$form.createForm(this);
        },
        props: {
            profile : Object
        },
        created(){

        },
        methods: {
            moment,
            // set upload
            handleChange(info) {
                if (info.file.status === "uploading") {
                    this.loading = true;
                    return;
                }
                if (info.file.status === "done") {
                    getBase64(info.file.originFileObj, imageUrl => {
                        this.imageUrl = imageUrl;
                        this.loading = false;
                    });
                }
                console.log(info);
            },
            beforeUpload(file) {
                const isLt2M = file.size / 1024 / 1024 < 2;
                if (!isLt2M) {
                    this.$message.error("Maaf! Maksimal Size Gambar 2MB!");
                }
                return isLt2M;
            },
            // set modal
            showEditProfile() {
                this.visibleEditProfile = true;
            },
            closeModal() {
                this.visibleEditProfile = false;
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
                        this.formValues = {
                            foto : this.imageUrl,
                            nama_depan : values.firstname,
                            nama_belakang : values.lastname,
                            tanggal_lahir : new moment(values.birthday).format("YYYY-MM-DD"),
                            jk : values.jeniskelamin,
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
                    .post(process.env.baseUrl+'user/update-profile',new_value,config)
                    .then(response => {
                        if (response.data.status == 200) {
                            this.form.resetFields();
                            this.visibleEditProfile = false;
                            this.$message.success('Profile Berhasil Diubah');
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
        }
    };
</script>