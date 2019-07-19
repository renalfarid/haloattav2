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
        <a-card title="Informasi Profil" class="b-shadow b-radius b-solid mb-24">
          <div slot="extra">
            <a-button size="small">Edit</a-button>
          </div>
          <a-row :gutter="24" type="flex" justify="space-around" align="middle">
            <a-col :span="4" class="text-right cr-gray fs-14">Foto Profil</a-col>
            <a-col :span="20">
              <a-avatar size="large" src="/user/maha_user.jpg" />
            </a-col>
          </a-row>
          <a-divider :style="{ margin: '16px 0' }" />
          <a-row :gutter="24" type="flex" justify="space-around" align="middle">
            <a-col :span="4" class="text-right cr-gray fs-14">Nama Depan</a-col>
            <a-col :span="20" class="cr-black fs-14">Alba</a-col>
          </a-row>
          <a-divider :style="{ margin: '16px 0' }" />
          <a-row :gutter="24" type="flex" justify="space-around" align="middle">
            <a-col :span="4" class="text-right cr-gray fs-14">Nama Belakang</a-col>
            <a-col :span="20" class="cr-black fs-14">Husain Mustofa</a-col>
          </a-row>
          <a-divider :style="{ margin: '16px 0' }" />
          <a-row :gutter="24" type="flex" justify="space-around" align="middle">
            <a-col :span="4" class="text-right cr-gray fs-14">Jenis Kelamin</a-col>
            <a-col :span="20" class="cr-black fs-14">Laki-Laki</a-col>
          </a-row>
          <a-divider :style="{ margin: '16px 0' }" />
          <a-row :gutter="24" type="flex" justify="space-around" align="middle">
            <a-col :span="4" class="text-right cr-gray fs-14">Tanggal Lahir</a-col>
            <a-col :span="20" class="cr-black fs-14">Maros, 30 April 1993</a-col>
          </a-row>
        </a-card>

        <a-card title="E-mail & No. Telepon" class="b-shadow b-radius b-solid mb-24">
          <div slot="extra">
            <a-button size="small">Edit</a-button>
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

        <a-card title="Password" class="b-shadow b-radius b-solid">
          <div slot="extra">
            <a-button size="small">Edit</a-button>
          </div>
          <a-row :gutter="24" type="flex" justify="space-around" align="middle">
            <a-col :span="4" class="text-right cr-gray fs-14">Password</a-col>
            <a-col :span="20" class="cr-black fs-14">
              <i>Perubahan terakhir 30 april 2019</i>
            </a-col>
          </a-row>
        </a-card>
      </div>

      <div v-else-if="noTitleKey === 'alamat'">
        <div class="p-24">
          <div class="text-center fs-14 cr-gray">Alamat anda belum terdaftar</div>
          <div class="text-center mt-8">
            <a-button type="primary" ghost>Tambah alamat</a-button>
          </div>
        </div>
      </div>
    </a-card>
  </div>
</template>
<script>
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
  }
};
</script>