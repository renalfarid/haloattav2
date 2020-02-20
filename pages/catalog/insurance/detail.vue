<template>
  <div class="ant-layout--package-details">
    <div class="ant-layout--results-space-small"></div>
    <div class="info-affix">
      <a-affix :offsetTop="0">
        <div class="container">
          <a-row :gutter="24">
            <a-col :xs="24" :sm="24" :md="16">
              <a-anchor>
                <a-anchor-link href="#informasi" title="Informasi" />
                <a-anchor-link href="#manfaat" title="Manfaat" />
                <a-anchor-link href="#ulasan" title="Ulasan" />
                <a-anchor-link href="#vendor" title="Vendor" />
                <a-anchor-link href="#policy" title="Kebijakan" />
                <a-anchor-link href="#faq" title="FAQ" />
              </a-anchor>
            </a-col>
          </a-row>
        </div>
      </a-affix>
    </div>

    <div class="ant-package--images w-100">
      <a-row>
        <a-col :span="10">
          <div class="ant-package--images-large">
            <expandable-image
              :src="item.gambar || 'https://theme.hstatic.net/1000253446/1000470009/14/no-image.jpg?v=843'"
            />
          </div>
        </a-col>
        <a-col :span="6">
          <a-row>
            <a-col :span="24">
              <div class="ant-package--images-small">
                <expandable-image
                  :src="item.gambar || 'https://theme.hstatic.net/1000253446/1000470009/14/no-image.jpg?v=843'"
                />
              </div>
            </a-col>
            <a-col :span="24">
              <div class="ant-package--images-small">
                <expandable-image
                  :src="item.gambar || 'https://theme.hstatic.net/1000253446/1000470009/14/no-image.jpg?v=843'"
                />
              </div>
            </a-col>
          </a-row>
        </a-col>
        <a-col :span="8">
          <div class="ant-package--images-large">
            <expandable-image
              :src="item.gambar || 'https://theme.hstatic.net/1000253446/1000470009/14/no-image.jpg?v=843'"
            />
          </div>
        </a-col>
      </a-row>
    </div>

    <div class="container">
      <a-row :gutter="24">
        <a-col :xs="24" :sm="24" :md="16">
          <div class="ant-layout--package-details-body">
            <information-insurance :data="item" />
          </div>
        </a-col>

        <a-col :xs="24" :sm="24" :md="8">
          <div class="ant-layout--right" :style="{ margin: '32px 0'}">
            <div class="ant-affix--container">
              <information-sideright :data="sidebar" />
            </div>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>
<script>
import informationInsurance from "@/components/contents/details/insurance/information-insurance.vue";
import informationSideright from "@/components/contents/details/insurance/information-sideright.vue";
import axios from "axios";
export default {
  name: "detail-insurance",
  head() {
    return {
      title:
        "Asuransi Perjalanan Umrah September 2019 - Booking Paket Umrah & Komponen Umrah Lainnya"
    };
  },
  data() {
    return {
      item: "",
      sidebar: {}
    };
  },
  async asyncData({ query, store }) {
    let data = [];

    const myRespone = await axios.post(
      process.env.baseUrl + "asuransi/detail",
      {
        kode_produk: query.kode_produk
      }
    );

    return {
      item: myRespone.data.data,
      loading: false,
      sidebar: {
        harga: myRespone.data.data.harga_satuan,
        durasi: myRespone.data.data.durasi_perlindungan
      }
    };
  },
  methods: {},
  components: {
    informationInsurance,
    informationSideright
  }
};
</script>
