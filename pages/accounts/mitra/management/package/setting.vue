<template>
  <div class="ant-layout--accounts-management">
    <div class="fs-18 fw-500 cr-black">Manajemen Penjualan Paket Umrah</div>
    <div class="fs-14 fw-400 cr-gray">Kembangkan bisnis umrah anda</div>
    <a-card
      title="Pengaturan Paket"
      :tabList="tabListNoTitle"
      :activeTabKey="noTitleKey"
      @tabChange="key => onTabChange(key, 'noTitleKey')"
      class="b-shadow b-radius b-solid mt-16"
    >
      <div slot="extra" class="cr-black fw-500 fs-16">No. Produk : MT123456789HT</div>
      <div v-if="noTitleKey === 'margin'">
        <a-row :gutter="16">
          <a-col :span="24">
            <div class="fs-16 fw-500 cr-black">Harga Jual Paket Umrah Anda (Harga Dasar)</div>
            <div class="fs-14 fw-400 cr-gray mb-16">
              Harga dasar atau harga jual merupakan harga satuan per pax
              dari paket umrah yang anda jual!
            </div>
          </a-col>
          <a-col :span="24">
            <a-form-item>
              <a-input-number
                :defaultValue="22000000"
                :formatter="value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.')"
                :parser="value => value.replace(/\$\s?|(,*)/g, '')"
                style="width: 100%"
                @change="onChange"
                disabled
                size="large"
              />
            </a-form-item>
          </a-col>
        </a-row>

        <a-divider></a-divider>

        <a-row :gutter="16">
          <a-col :span="24">
            <div class="fs-16 fw-500 cr-black">Pengaturan Margin</div>
            <div class="fs-14 fw-400 cr-gray mb-16">
              Besaranan margin yang anda masukkan akan mempengaruhi
              besaran keuntungan yang anda dapatkan
            </div>
          </a-col>
          <a-col :span="12">
            <a-form-item help="Margin dalam Persen (%)">
              <a-input-number
                :defaultValue="10"
                :min="0"
                :max="20"
                :formatter="value => `${value}%`"
                :parser="value => value.replace('%', '')"
                style="width: 100%"
                @change="onChange"
                size="large"
              />
            </a-form-item>
          </a-col>

          <a-col :span="12">
            <a-form-item help="Margin dalam Rupiah (Rp)">
              <a-input-number
                :defaultValue="2000000"
                :formatter="value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.')"
                :parser="value => value.replace(/\$\s?|(,*)/g, '')"
                style="width: 100%"
                @change="onChange"
                disabled
                size="large"
              />
            </a-form-item>
          </a-col>
        </a-row>

        <a-divider></a-divider>

        <a-row :gutter="16">
          <a-col :span="24">
            <div class="fs-16 fw-500 cr-black">Harga Jual Paket Umrah + Margin</div>
            <div class="fs-14 fw-400 cr-gray mb-16">
              Pengaturan harga quad room, triple room dan double room sesuai dengan margin yang anda tetapkan, Penentuan besaran
              harga margin untuk quad room secara otomatis akan membentuk harga triple dan double room yang dikalkulasi otomatis
              oleh system.
            </div>
          </a-col>
        </a-row>

        <a-row :gutter="16">
          <a-col :span="8">
            <a-card class="b-shadow b-radius b-solid">
              <div class="fs-16 fw-500 cr-black">Quad Room</div>
              <div class="fs-14 fw-400 cr-gray mb-16">
                Harga satuan untuk paket umrah Quad
                Room atau sekamar Berempat
              </div>
              <a-divider style="margin: 8px 0" />
              <div class="fs-24 fw-500 cr-black">
                Rp 22.000.000
                <span class="fs-14 cr-gray">/pax</span>
              </div>
            </a-card>
          </a-col>

          <a-col :span="8">
            <a-card class="b-shadow b-radius b-solid">
              <div class="fs-16 fw-500 cr-black">Triple Room</div>
              <div class="fs-14 fw-400 cr-gray mb-16">
                Harga satuan untuk paket umrah Triple
                Room atau sekamar bertiga
              </div>
              <a-divider style="margin: 8px 0" />
              <div class="fs-24 fw-500 cr-black">
                Rp 22.800.000
                <span class="fs-14 cr-gray">/pax</span>
              </div>
            </a-card>
          </a-col>

          <a-col :span="8">
            <a-card class="b-shadow b-radius b-solid">
              <div class="fs-16 fw-500 cr-black">Double Room</div>
              <div class="fs-14 fw-400 cr-gray mb-16">
                Harga satuan untuk paket umrah Double
                Room atau sekamar Berdua
              </div>
              <a-divider style="margin: 8px 0" />
              <div class="fs-24 fw-500 cr-black">
                Rp 24.400.000
                <span class="fs-14 cr-gray">/pax</span>
              </div>
            </a-card>
          </a-col>
        </a-row>
      </div>

      <div v-else-if="noTitleKey === 'tampilan'">2</div>
    </a-card>

    <a-affix :offsetBottom="0">
      <a-card class="b-shadow b-radius b-solid mt-16">
        <div class="cr-gray mb-16">
          Andalah yang menetapkan pengaturan harga jual paket umrah anda. Dengan menyimpan pengaturan maka harga yang
          akan kami publish sesuai dengan pengaturan margin yang anda tetapkan. Anda dapat mengubah pengaturan margin
          di manajemen paket saya, baca aturan margin
        </div>
        <a-button class="ant-btn--action b-shadow b-radius b-solid" size="large">Simpan & Publish</a-button>
        <a-divider type="vertical" />
        <a-button type="primary" class="b-shadow b-radius b-solid" size="large" ghost>Pratinjau</a-button>
      </a-card>
    </a-affix>
  </div>
</template>
<script>
export default {
  layout: "accounts",
  name: "mitraManajemenPaketSetting",
  head() {
    return {
      title: "Manajemen Paket Setting - Kembangkan Bisnis Umrah Anda | Haloatta"
    };
  },

  data() {
    return {
      noTitleKey: "margin",
      tabListNoTitle: [
        {
          key: "margin",
          tab: "Margin"
        },
        {
          key: "tampilan",
          tab: "Tampilan"
        }
      ]
    };
  },
  methods: {
    onTabChange(key, type) {
      console.log(key, type);
      this[type] = key;
    },
    onChange(value) {
      console.log(value);
    }
  }
};
</script>