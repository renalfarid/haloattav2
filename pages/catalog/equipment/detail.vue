<template>
  <div class="ant-layout--package-details">
    <div class="ant-layout--results-space-small"></div>
    <div class="info-affix">
      <a-affix :offsetTop="64">
        <div class="container">
          <a-row :gutter="32">
            <a-col :span="17">
              <a-anchor>
                <a-anchor-link href="#informasi" title="Informasi" />
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
            <expandable-image src="/perlengkapan/package/p1.jpg" />
          </div>
        </a-col>
        <a-col :span="6">
          <a-row>
            <a-col :span="24">
              <div class="ant-package--images-small">
                <expandable-image src="/perlengkapan/package/p2.jpg" />
              </div>
            </a-col>
            <a-col :span="24">
              <div class="ant-package--images-small">
                <expandable-image src="/perlengkapan/package/p3.jpeg" />
              </div>
            </a-col>
          </a-row>
        </a-col>
        <a-col :span="8">
          <div class="ant-package--images-large">
            <expandable-image src="/perlengkapan/package/p4.jpg" />
          </div>
        </a-col>
      </a-row>
    </div>

    <div class="container">
      <a-row :gutter="32">
        <a-col :span="17">
          <div class="ant-layout--package-details-body">
            <information-equipment :data="item" />
          </div>
        </a-col>

        <a-col :span="7">
          <div class="ant-layout--right" :style="{ margin: '32px 0'}">
            <div class="ant-affix--container">
              <information-sideright />
            </div>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>
<script>
import informationEquipment from "~/components/contents/details/equipment/information-equipment.vue";
import informationSideright from "~/components/contents/details/equipment/information-sideright.vue";
import moment from "moment";
import axios from "axios";
export default {
  name: "detailEquipment",
  head() {
    return {
      title: "Perlengkapan Umrah - Booking Paket Umrah & Komponen Umrah Lainnya"
    };
  },
  data() {
    return {
      item: ""
    };
  },
  created: function() {
    this.getdata();
  },
  methods: {
    moment,
    async getdata() {
      let params = this.$route.query;
      axios
        .post(process.env.baseUrl + "perlengkapan/detail", {
          kode_produk: params.kode_produk
        })
        .then(response => {
          this.item = response.data.data;
          this.loading = false;
        });
    }
  },
  components: {
    informationEquipment,
    informationSideright
  }
};
</script>
