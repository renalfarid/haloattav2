<template>
  <div class="ant-setting--account">
    <div class="fs-18 fw-500 cr-black">Pengaturan</div>
    <div class="fs-14 fw-400 cr-gray">
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
        
        <edit-profile />

        <edit-email-phone />

        <edit-password />
      </div>

      <div v-else-if="noTitleKey === 'alamat'">
        <edit-address />
      </div>
    </a-card>
  </div>
</template>
<script>
import editProfile from "~/pages/accounts/mitra/setting/edit/profile.vue";
import editEmailPhone from "~/pages/accounts/mitra/setting/edit/emailphone.vue";
import editPassword from "~/pages/accounts/mitra/setting/edit/password.vue";
import editAddress from "~/pages/accounts/mitra/setting/edit/address.vue";
export default {
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
        }
      ]
    };
  },
  methods: {
    onTabChange(key, type) {
      console.log(key, type);
      this[type] = key;
    }
  },
  components: { editProfile, editEmailPhone, editPassword, editAddress }
};
</script>