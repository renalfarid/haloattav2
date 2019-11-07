<template>
    <div class="ant-setting--account">
        <div class="fs-18 fw-500 cr-black">Pengaturan</div>
        <div class="fs-16 fw-400 cr-gray">
            Informasi profil anda tidak
            akan kami beritahukan kepada pihak mana pun.
        </div>

        <a-card
                :tabList="tabListNoTitle"
                :activeTabKey="noTitleKey"
                @tabChange="key => onTabChange(key, 'noTitleKey')"
                class="b-shadow b-radius b-solid mt-16"
        >
            <div v-if="noTitleKey === 'akun'">
                <edit-profile @saved="savedEvent" :profile="profile.akun"/>

                <edit-email-phone @saved="savedEvent" :profile="profile.akun"/>

                <edit-password/>
            </div>

            <div v-else-if="noTitleKey === 'alamat'">
                <add-address @saved="savedEvent" :alamat="profile.alamat"/>
            </div>

            <div v-else-if="noTitleKey === 'bank'">
                <add-bank @saved="savedEvent" :bank="profile.bank"/>
            </div>
        </a-card>
    </div>
</template>
<script>
    import axios from "axios";
    import editProfile from "~/pages/accounts/setting/edit/profile.vue";
    import editEmailPhone from "~/pages/accounts/setting/edit/emailphone.vue";
    import editPassword from "~/pages/accounts/setting/edit/password.vue";
    import addAddress from "~/pages/accounts/setting/add/address.vue";
    import addBank from "~/pages/accounts/setting/add/bank.vue";

    const Cookie = process.client ? require("js-cookie") : undefined;

    export default {
        middleware: "authenticated",
        layout: "accounts",
        name: "setting",
        head() {
            return {
                title: "Pengaturan akun - Haloatta"
            };
        },
        data() {
            return {
                noTitleKey: "akun",
                tabListNoTitle: [
                    {
                        key: "akun",
                        tab: "Akun"
                    },
                    {
                        key: "alamat",
                        tab: "Alamat"
                    },
                    {
                        key: "bank",
                        tab: "Bank"
                    }
                ],
                profile: {}
            };
        },
        beforeCreate(){

        },
        created() {
          this.getUserInfo()
        },
        methods: {
            onTabChange(key, type) {
                console.log(key, type);
                this[type] = key;
            },
            getUserInfo() {
                const token = Cookie.get('auth');
                const config = {
                    headers: {
                        Authorization: "Bearer " + token
                    }
                };
                axios
                    .get(process.env.baseUrl + "user/fullinfo", config)
                    .then(response => {
                        console.log('data profile',response.data.data);
                        this.profile = response.data.data;
                    })
                    .catch(err => {
                        console.log(err);
                    });
            },
            savedEvent(event){
                if (event){
                    this.getUserInfo();
                }
            }
        },
        components: {editProfile, editEmailPhone, editPassword, addAddress, addBank}
    };
</script>